# Firebase Firestore Integration for CanteenDash Flutter App

## Overview
This guide covers the complete setup to integrate Firebase Cloud Firestore with your CanteenDash Flutter application. The integration allows you to persist orders to a real database when users complete checkout.

---

## Step 1: Add Firebase Dependencies to pubspec.yaml

The following dependencies have been added to your `canteen-dash/pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  firebase_core: ^2.24.0
  cloud_firestore: ^4.13.0
```

**To install dependencies, run:**

```bash
cd canteen-dash
flutter pub get
```

---

## Step 2: Firebase Initialization

Your `lib/main.dart` has been updated with Firebase initialization:

```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  // Initialize Flutter bindings
  WidgetsFlutterBinding.ensureInitialized();
  
  // Initialize Firebase with platform-specific options
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  
  runApp(const CanteenDashApp());
}
```

**Key points:**
- `WidgetsFlutterBinding.ensureInitialized()` prepares Flutter engine
- `Firebase.initializeApp()` initializes Firebase with your project credentials
- `DefaultFirebaseOptions.currentPlatform` automatically selects Web/Android/iOS config

---

## Step 3: Configure Firebase Options (AUTO-GENERATED)

The `lib/firebase_options.dart` file is typically **auto-generated** by FlutterFire CLI. To generate it with your actual Firebase credentials:

### Option A: Using FlutterFire CLI (Recommended)

```bash
# Install flutterfire_cli globally (one-time)
dart pub global activate flutterfire_cli

# Generate firebase_options.dart with your credentials
flutterfire configure --project=canteendash-1
```

This will:
1. Connect to your Firebase project (canteendash-1)
2. Configure Android, iOS, Web, and macOS settings
3. Auto-generate `firebase_options.dart` with real API keys

### Option B: Manual Configuration

If you can't use FlutterFire CLI, manually update `lib/firebase_options.dart` with your credentials from [Firebase Console](https://console.firebase.google.com/project/canteendash-1/settings/general):

```dart
static const FirebaseOptions android = FirebaseOptions(
  apiKey: 'YOUR_ACTUAL_ANDROID_API_KEY',        // From Firebase Console
  appId: 'YOUR_ACTUAL_ANDROID_APP_ID',          // 1:xxx:android:xxx
  messagingSenderId: 'YOUR_ACTUAL_SENDER_ID',   // Numeric sender ID
  projectId: 'canteendash-1',
  databaseURL: 'https://canteendash-1.firebaseio.com',
  storageBucket: 'canteendash-1.appspot.com',
);
```

---

## Step 4: FirestoreService Class

A new service class has been created at `lib/core/services/firestore_service.dart` with these methods:

### Main Method: `placeOrder(Map<String, dynamic> orderData)`

Pushes an order to Firestore and returns the document ID:

```dart
final firestoreService = FirestoreService();

final String docId = await firestoreService.placeOrder({
  'orderId': 'ORD-1234567890',
  'items': [...],
  'subtotal': 100.00,
  'deliveryFee': 20.00,
  'total': 120.00,
  'deliveryMethod': 'delivery',
  'fullName': 'John Doe',
  'phoneNumber': '+66812345678',
  'address': '123 Student Dorm, University Campus',
  'paymentMethod': 'card',
  'timestamp': 1234567890000,
  'status': 'confirmed'
});

print('Order saved with Firestore ID: $docId');
```

### Debug Output

When an order is successfully saved, you'll see in the debug console:

```
✅ Order successfully placed in Firestore!
📋 Order ID (Firestore Doc): abc123def456
📊 Order Summary:
   - Order Number: ORD-1234567890
   - Total Amount: $120.0
   - Delivery Method: delivery
   - Status: confirmed
   - Items Count: 2
   - Timestamp: 1234567890000
```

### Additional Methods

1. **Get a single order:**
   ```dart
   final order = await firestoreService.getOrder('firestore_doc_id');
   ```

2. **Get all orders by customer phone:**
   ```dart
   final orders = await firestoreService.getOrdersByPhone('+66812345678');
   ```

3. **Update order status:**
   ```dart
   await firestoreService.updateOrderStatus('firestore_doc_id', 'ready');
   ```

---

## Step 5: Firebase Firestore Setup

### Create Firestore Database (if not already done)

1. Go to [Firebase Console](https://console.firebase.google.com/project/canteendash-1)
2. Navigate to **Firestore Database**
3. Click **Create Database**
   - Select **Test mode** (start date: today)
   - Select region: **us-central1** (default)
4. Click **Create**

### Firestore Rules (Test Mode)

Your test mode allows any authenticated read/write. For production, update rules in **Firestore → Rules**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow all reads and writes for now (test mode)
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

## Step 6: Integration in Checkout Screen

Example of how to call `placeOrder()` in your checkout flow:

```dart
import 'package:canteen_dash/core/services/firestore_service.dart';

class CheckoutScreen extends StatefulWidget {
  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  final FirestoreService _firestoreService = FirestoreService();

  Future<void> _handlePlaceOrder() async {
    try {
      // Prepare order data
      Map<String, dynamic> orderData = {
        'orderId': 'ORD-${DateTime.now().millisecondsSinceEpoch}',
        'items': _cartItems.map((item) => {
          'id': item.id,
          'name': item.name,
          'price': item.price,
          'quantity': item.quantity,
        }).toList(),
        'subtotal': _subtotal,
        'deliveryFee': _deliveryMethod == 'delivery' ? 20.0 : 0.0,
        'total': _total,
        'deliveryMethod': _deliveryMethod,
        'fullName': _fullNameController.text,
        'phoneNumber': _phoneController.text,
        'address': _addressController.text,
        'paymentMethod': _paymentMethod,
        'timestamp': DateTime.now().millisecondsSinceEpoch,
        'status': 'confirmed',
      };

      // Save to Firestore
      final String firestoreDocId = await _firestoreService.placeOrder(orderData);

      // Navigate to confirmation
      if (mounted) {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(
            builder: (context) => ConfirmationScreen(
              orderId: orderData['orderId'],
              firestoreDocId: firestoreDocId,
            ),
          ),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error placing order: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _handlePlaceOrder,
      child: const Text('Place Order'),
    );
  }
}
```

---

## Step 7: Verify Integration

### In Debug Console

After placing an order, you should see:

```
✅ Order successfully placed in Firestore!
📋 Order ID (Firestore Doc): K9x2M4pQ5rL8nT1vW0
📊 Order Summary:
   - Order Number: ORD-1713244567890
   - Total Amount: $150.0
   - Delivery Method: delivery
   - Status: confirmed
   - Items Count: 3
   - Timestamp: 1713244567890
```

### In Firebase Console

1. Go to [Firestore Database](https://console.firebase.google.com/project/canteendash-1/firestore)
2. You should see a new **`orders`** collection
3. Click into it to view all orders with fields like `orderId`, `items`, `total`, etc.

---

## Step 8: Testing Checklist

- [ ] Dependencies installed: `flutter pub get`
- [ ] Firebase initialized in main.dart
- [ ] `firebase_options.dart` configured with real credentials
- [ ] Firestore database created in test mode
- [ ] FirestoreService imported in checkout screen
- [ ] `placeOrder()` called on order completion
- [ ] Debug console shows ✅ success message
- [ ] New `orders` collection visible in Firebase Console
- [ ] Order data persists in Firestore

---

## Troubleshooting

### Error: "Unable to connect to Firestore"
- Verify Firebase is initialized before app runs
- Check `firebase_options.dart` has correct project ID
- Ensure internet connection is active

### Error: "Permission denied" when writing to Firestore
- Firestore is in test mode with open rules
- Verify Firestore → Rules allow read/write

### No `orders` collection appearing
- Collection is created automatically when first document is added
- Place an order successfully to trigger collection creation
- Check debug console for success ✅ message

### Error: "FirebaseException: PERMISSION_DENIED"
- Update Firestore security rules (see Step 5)
- Or ensure test mode is active

---

## Your Firestore Order Structure

Orders are stored in the `orders` collection with this structure:

```json
{
  "orderId": "ORD-1713244567890",
  "items": [
    {
      "id": "dish_101",
      "name": "Pad Kra Pao Gai",
      "price": 50.00,
      "quantity": 2
    }
  ],
  "subtotal": 100.00,
  "deliveryFee": 20.00,
  "total": 120.00,
  "deliveryMethod": "delivery",
  "fullName": "John Doe",
  "phoneNumber": "+66812345678",
  "address": "123 Student Dorm, University Campus",
  "paymentMethod": "card",
  "timestamp": 1713244567890,
  "status": "confirmed"
}
```

**Firestore Document ID:** Auto-generated by Firestore (different from `orderId`)

---

## Next Steps

1. **Run the app:**
   ```bash
   flutter run
   ```

2. **Complete a checkout** on the checkout screen

3. **Check debug console** for ✅ success message

4. **Verify in Firebase Console** that the order appears in the `orders` collection

---

## Files Created/Modified

| File | Status | Purpose |
|------|--------|---------|
| `pubspec.yaml` | ✏️ Modified | Added firebase_core & cloud_firestore |
| `lib/main.dart` | ✏️ Modified | Added Firebase initialization |
| `lib/firebase_options.dart` | ✨ Created | Firebase platform configuration |
| `lib/core/services/firestore_service.dart` | ✨ Created | Firestore service class |
| `lib/core/services/firestore_integration_example.dart` | ✨ Created | Integration examples & docs |

---

## Support

For more information:
- [Firebase for Flutter Docs](https://firebase.flutter.dev/)
- [Cloud Firestore Docs](https://cloud.google.com/firestore/docs)
- [CanteenDash AI Documentation](../AI_DOCUMENTATION.md)
