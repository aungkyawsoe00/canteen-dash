# CanteenDash - Complete Project Documentation

## Project Overview

**CanteenDash** is a multi-platform university canteen food ordering system built with three different technology stacks:
1. **HTML/Vanilla JavaScript** - Classic web implementation
2. **React** - Modern web implementation with hooks
3. **Flutter** - Native mobile application

The app allows students to browse food stalls, filter by categories, add items to cart, and place orders with delivery/payment options.

---

## Project Structure

```
CanteenDash/
├── firebase.json                 # Firebase hosting configuration
├── package.json                  # Root-level dependencies (Firebase)
├── canteen-dash/                # Main application directory
│   ├── package.json             # React app configuration
│   ├── pubspec.yaml             # Flutter app configuration
│   ├── README.md                # Canteen Dash readme
│   ├── REACT_SETUP.md           # React setup guide
│   ├── server.js                # Node.js development server
│   ├── run_server.bat           # Windows batch to start server
│   ├── script.js                # Main JavaScript logic
│   ├── style.css                # Main stylesheet (500+ lines)
│   ├── index.html               # Login page
│   ├── register.html            # Registration page
│   ├── home.html                # Home feed page
│   ├── menu.html                # Stall menu page
│   ├── cart.html                # Shopping cart page
│   ├── checkout.html            # Checkout page
│   ├── confirmation.html        # Order confirmation page
│   ├── public/                  # React public assets
│   │   └── index.html           # React root HTML
│   ├── src/                     # React source code
│   │   ├── index.js             # React entry point
│   │   ├── App.jsx              # Root React component
│   │   ├── index.css            # React stylesheet
│   │   ├── mockData.js          # CartManager & mock data
│   │   └── components/
│   │       └── MenuPage.jsx     # Menu page component
│   └── lib/                     # Flutter source code (Dart)
│       ├── main.dart            # Main Flutter entry point
│       ├── core/
│       │   ├── constants/
│       │   │   └── mock_data.dart        # Mock dishes and stalls
│       │   ├── theme/
│       │   │   └── app_colors.dart       # Color palette
│       │   └── widgets/
│       │       ├── category_filter_list.dart      # Category chips
│       │       ├── custom_text_field.dart         # Text input field
│       │       ├── dish_card.dart                 # Dish card widget
│       │       ├── primary_button.dart            # Primary button
│       │       └── stall_card.dart                # Stall card widget
│       └── features/
│           ├── auth/
│           │   └── presentation/screens/login_screen.dart
│           ├── home/
│           │   └── presentation/screens/home_feed_screen.dart
│           └── menu/
│               └── presentation/screens/stall_menu_screen.dart
└── lib/                         # Duplicate Dart files (backup)
    ├── core/
    └── features/
```

---

## File Descriptions

### Root Configuration Files

#### **firebase.json** (Firebase Hosting Config)
```json
{
  "hosting": {
    "public": "canteen-dash",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "pubspec.yaml",
      "**/*.dart",
      "run_server.bat",
      "server.js",
      "REACT_SETUP.md",
      "README.md"
    ]
  }
}
```
**Purpose:** Configures Firebase hosting to serve the canteen-dash directory and exclude backend/Dart files from deployment.

#### **package.json** (Root Package)
```json
{
  "dependencies": {
    "firebase": "^12.9.0"
  }
}
```
**Purpose:** Project-level Firebase dependency.

---

### HTML/Vanilla JavaScript Implementation

#### **canteen-dash/package.json** (React App Config)
```json
{
  "name": "canteen-dash",
  "version": "1.0.0",
  "description": "Canteen ordering system with React",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "dev": "node server.js"
  },
  "eslintConfig": {
    "extends": ["react-app"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
```
**Purpose:** React app dependencies and build scripts.

#### **canteen-dash/pubspec.yaml** (Flutter Config)
```yaml
name: canteen_dash
description: A Flutter app for ordering food from university canteens.
publish_to: 'none'
version: 1.0.0+1
environment:
  sdk: '>=3.0.0 <4.0.0'
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^2.0.0
flutter:
  uses-material-design: true
```
**Purpose:** Flutter project configuration requiring Dart SDK 3.0.0+.

#### **canteen-dash/REACT_SETUP.md**
Setup documentation covering:
- React files structure
- How to run: `npm install && npm start` on http://localhost:3000
- How to build: `npm install && npm build`
- Features: Menu UI, add to cart, localStorage persistence, responsive design
- Maintains functionality of HTML version

#### **canteen-dash/server.js** (Node.js Server)
```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serves static files (HTML, CSS, JS, JSON, images)
  // Defaults to index.html for root requests
  // MIME type mapping for various file types
  // Security check to prevent directory traversal
  // Logs server start message with access URL
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
```
**Purpose:** Development/production web server on port 8000.

#### **canteen-dash/run_server.bat**
Batch script that opens http://localhost:8000 in browser and attempts to start Python HTTP server.

#### **canteen-dash/script.js** (Main JavaScript Logic - 140+ lines)

**CartManager Class:**
- `getCart()` - Retrieves cart from localStorage
- `addItem(dish)` - Adds item or increments quantity
- `removeItem(dishId)` - Removes item
- `updateQuantity(dishId, quantity)` - Updates quantity
- `clearCart()` - Empties cart
- `getTotalItems()` - Returns total quantity
- `getTotal()` - Returns total price

**Mock Data:**
- 5 mock dishes: Pad Kra Pao Gai (฿50), Tom Yum Goong (฿60), Pad Thai (฿45), Som Tam (฿40), Massaman Gai (฿55)
- 3 mock stalls: Bangkok Street Eats, Thai Spice Corner, Noodle House
- 4 categories: Noodles, Rice, Drinks, Snacks

**Key Functions:**
- `showToast(message, duration)` - Notifications
- `handleLogin(event)` - Student ID/password validation, redirects to home
- `handleCategoryFilter(category, element)` - Category filtering
- `navigateToMenu(stallId, stallName)` - Stall selection
- `addToCart(dishId, dishName, price)` - Cart management
- `updateCartBadge()` - Cart count display
- `renderCart()` - Cart page HTML generation
- `renderCheckout()` - Checkout page HTML generation
- `placeOrder()` - Order creation and localStorage save
- `renderStallCards()` - Stall card HTML
- `renderDishCards()` - Dish card HTML
- `setupMenuHeader()` - Menu header setup
- `initializeCategories()` - Category buttons
- `DOMContentLoaded` - Page initialization

#### **canteen-dash/style.css** (Main Stylesheet - 500+ lines)

**CSS Variables (Color Scheme):**
- Primary: Orange (#F27D16), Dark (#E86E00), Light (#FFB366)
- Text: Primary (#2C2C2C), Secondary (#666666), Hint (#999999), Inverse (white)
- Surfaces: Light (#f5f5f5), Default (#e8e8e8), Background (#fafafa)
- Status: Error (#FF5252), Success (#4CAF50), Warning, Info
- Border (#e0e0e0), Shadow (rgba(0,0,0,0.1))

**Component Styles:**
- Header: Orange background, sticky positioning
- Login Card: Centered, 400px max-width
- Form Groups: Input wrapper with icon positioning
- Buttons: Primary (orange), secondary styles
- Greeting Banner: Orange background with padding
- Category Filter: Horizontal chips with active state
- Stall Cards: Image-based with gradient overlay
- Dish Cards: Horizontal layout with image, details, price
- Toast Notifications: Fixed bottom, slide-up animation
- Responsive: Media query for max-width 480px

#### **HTML Pages:**

**index.html** (Login Page)
- Logo: 🍜
- Student ID input with person icon
- Password input with lock icon
- Login, "Forgot Password", and registration links

**register.html** (Registration Page)
- Full Name, Student ID, Email, Password, Confirm Password inputs
- Registration button
- Password validation

**home.html** (Home Feed)
- "CanteenDash" header with cart badge
- Greeting banner: "Good Morning, Alex! ☀️"
- Categories section (populated by JavaScript)
- Available Stalls section (populated by JavaScript)

**menu.html** (Stall Menu)
- Back button and stall name header
- Menu Items heading
- Dishes container (populated by JavaScript)

**cart.html** (Shopping Cart)
- Cart items list
- Subtotal, Delivery Fee (฿20), Total
- "Proceed to Checkout" and "Continue Shopping" buttons
- Empty cart state with browse button

**checkout.html** (Checkout)
- Order summary
- Delivery options: Pickup or Delivery (฿20)
- Form: Full Name, Phone Number, Address (conditional)
- Payment: Cash, Card, QR Code with conditional card form
- "Place Order" and "Back to Cart" buttons

**confirmation.html** (Order Confirmation)
- Animated checkmark icon
- "Order Confirmed!" heading
- Order details from localStorage
- Order ID: ORD-[timestamp]
- "Download Receipt" and "Continue Shopping" buttons

---

### React Implementation

#### **canteen-dash/src/index.js**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
**Purpose:** React DOM initialization entry point.

#### **canteen-dash/src/App.jsx**
```javascript
import React from 'react';
import MenuPage from './components/MenuPage';
import './index.css';

function App() {
  return (
    <div className="app">
      <MenuPage />
    </div>
  );
}

export default App;
```
**Purpose:** Root React component rendering MenuPage.

#### **canteen-dash/src/mockData.js**

**CartManager Class:**
- `getCart()` - localStorage.getItem('canteenCart') || []
- `addItem(dish)` - Add or increment quantity
- `removeItem(dishId)` - Filter by ID
- `updateQuantity(dishId, quantity)` - Update or remove if ≤0
- `clearCart()` - localStorage.removeItem('canteenCart')
- `getTotalItems()` - Sum of quantities
- `getTotal()` - Sum of (price × quantity)

**Mock Dishes:**
```javascript
const mockDishes = [
  {
    id: 'dish_101',
    stallId: 'stall_01',
    name: 'Pad Kra Pao Gai',
    price: 50.00,
    description: 'Stir-fried chicken with basil',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=1'
  },
  // ... 5 total dishes
];
```

#### **canteen-dash/src/components/MenuPage.jsx**
```javascript
import React, { useState, useEffect } from 'react';
import { mockDishes, CartManager } from '../mockData';
import '../index.css';

const MenuPage = () => {
  const [stallName, setStallName] = useState("Nong's Thai Stall");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const savedStallName = localStorage.getItem('selectedStallName');
    if (savedStallName) {
      setStallName(savedStallName);
    }
  }, []);

  const handleAddToCart = (dish) => {
    CartManager.addItem(dish);
    setToast(`${dish.name} added to cart!`);
    setTimeout(() => setToast(null), 2000);
  };

  const handleBackClick = () => {
    window.location.href = 'home.html';
  };

  return (
    <div>
      <div className="menu-header">
        <button className="back-button" onClick={handleBackClick}>←</button>
        <h2>{stallName}</h2>
      </div>

      <div className="container">
        <h3>Menu Items</h3>
        <div className="dishes-container">
          {mockDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="dish-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                }}
              />
              <div className="dish-content">
                <div>
                  <div className="dish-name">{dish.name}</div>
                  <div className="dish-description">{dish.description}</div>
                </div>
                <div className="dish-footer">
                  <div className="dish-price">฿{dish.price.toFixed(2)}</div>
                  <button
                    className="btn-add-cart"
                    onClick={() => handleAddToCart(dish)}
                    title="Add to cart"
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: '32px' }}></div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default MenuPage;
```
**Purpose:** React menu page component with hooks, displays dishes, handles cart additions, toast notifications.

#### **canteen-dash/src/index.css**
Same styling as main style.css adapted for React components with CSS variables for consistent theming.

---

### Flutter/Dart Implementation

#### **canteen-dash/lib/main.dart**
```dart
import 'package:flutter/material.dart';
import 'features/auth/presentation/screens/login_screen.dart';

void main() {
  runApp(const CanteenDashApp());
}

class CanteenDashApp extends StatelessWidget {
  const CanteenDashApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CanteenDash',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        primarySwatch: Colors.orange,
      ),
      home: const LoginScreen(),
    );
  }
}
```
**Purpose:** Flutter app entry point, configures MaterialApp with orange theme.

#### **canteen-dash/lib/core/constants/mock_data.dart**

**Dish Class:**
```dart
class Dish {
  final String id;
  final String stallId;
  final String name;
  final double price;
  final String description;
  final bool isAvailable;
  final String imageUrl;
}
```

**Stall Class:**
```dart
class Stall {
  final String id;
  final String name;
  final String description;
  final String imageUrl;
  final bool isOpen;
}
```

**MockData Class:**
- 5 mock dishes with ids, prices, descriptions
- 3 mock stalls (Bangkok Street Eats, Thai Spice Corner, Noodle House)

#### **canteen-dash/lib/core/theme/app_colors.dart**

Color palette constants:
```dart
class AppColors {
  // Primary Colors
  static const Color primary = Color(0xFFF27D16);        // Orange
  static const Color primaryDark = Color(0xFFE86E00);    // Dark Orange
  static const Color primaryLight = Color(0xFFFFB366);   // Light Orange

  // Background Colors
  static final Color background = Colors.grey[50]!;
  static final Color surfaceLight = Colors.grey[100]!;
  static final Color surfaceDefault = Colors.grey[200]!;

  // Text Colors
  static const Color textPrimary = Color(0xFF2C2C2C);
  static const Color textSecondary = Color(0xFF666666);
  static const Color textHint = Color(0xFF999999);
  static const Color textInverse = Color(0xFFFFFFFF);

  // Status Colors
  static const Color success = Color(0xFF4CAF50);
  static const Color error = Color(0xFFFF5252);
  static const Color warning = Color(0xFFFFC107);
  static const Color info = Color(0xFF2196F3);

  // Border Colors
  static const Color border = Color(0xFFE0E0E0);
  static const Color divider = Color(0xFFEEEEEE);

  // Neutral Colors
  static const Color white = Color(0xFFFFFFFF);
  static const Color black = Color(0xFF000000);
  static final Color shadow = Colors.black.withOpacity(0.1);
}
```

#### **canteen-dash/lib/core/widgets/custom_text_field.dart**

Custom text input widget:
- Properties: hintText, prefixIcon, obscureText, controller
- Border: 1px width, 8px radius
- Focus border: orange, 2px width
- White filled background
- Icon padding and styling

#### **canteen-dash/lib/core/widgets/primary_button.dart**

Primary button widget:
- ElevatedButton with orange background
- Full width (double.infinity)
- 50px height, 8px border radius
- White bold text (16px)

#### **canteen-dash/lib/core/widgets/category_filter_list.dart**

Horizontal scrollable category filter:
```dart
class CategoryFilterList extends StatefulWidget {
  final List<String> categories = ['Noodles', 'Rice', 'Drinks', 'Snacks'];
  // FilterChip with selection state
  // Orange background when selected
  // Horizontal scrollable ListView
}
```

#### **canteen-dash/lib/core/widgets/dish_card.dart**

Dish card component:
```dart
class DishCard extends StatelessWidget {
  final String dishName;
  final String description;
  final double price;
  final String imageUrl;
  final VoidCallback? onAddToCart;
  
  // Horizontal layout: image + content + add button
  // Rounded corners on image
  // Error handling with placeholder for failed images
  // Food icon fallback
}
```

#### **canteen-dash/lib/core/widgets/stall_card.dart**

Stall/restaurant card:
```dart
class StallCard extends StatelessWidget {
  final String stallName;
  final String imageUrl;
  final double rating;
  
  // Full-width card with background image
  // Gradient overlay on bottom (black transparent to transparent)
  // Orange badge with star icon and rating
  // Error handling with restaurant icon
}
```

#### **canteen-dash/lib/features/auth/presentation/screens/login_screen.dart**

Login screen:
```dart
class LoginScreen extends StatefulWidget {
  // Orange logo container with restaurant icon
  // "UNIVERSITY PORTAL" title
  // "CanteenDash" subtitle
  // Student ID input with person icon
  // Password input with lock icon
  // Login button
  // "Forgot Password?" link
  // CustomTextField and PrimaryButton widgets
}
```

#### **canteen-dash/lib/features/home/presentation/screens/home_feed_screen.dart**

Home feed screen:
```dart
class HomeFeedScreen extends StatelessWidget {
  // Orange header: "Good Morning, Alex!"
  // CategoryFilterList (horizontal scrollable)
  // ListView of StallCards with ratings
  // SafeArea wrapper
}
```

#### **canteen-dash/lib/features/menu/presentation/screens/stall_menu_screen.dart**

Stall menu screen:
```dart
class StallMenuScreen extends StatelessWidget {
  // CustomScrollView with SliverAppBar
  // Pinned app bar with stall image and name
  // Back button (opens with orange background)
  // SliverList with DishCards
  // Image with fallback (restaurant icon)
  // Tap handler for add to cart with SnackBar
}
```

---

## Key Features

### 1. Multi-Platform Support
- Web (HTML/JavaScript)
- Web (React)
- Mobile (Flutter)

### 2. User Authentication
- Student ID login
- Password validation
- User registration
- Session persistence

### 3. Menu Browsing
- Category filtering (Noodles, Rice, Drinks, Snacks)
- Stall browsing with ratings
- Dish details (image, price, description)
- Image lazy loading with error handling

### 4. Shopping Cart
- Add/remove items
- Quantity management
- Cart persistence (localStorage)
- Cart count badge
- Toast notifications

### 5. Checkout Process
- Delivery vs. Pickup options
- Delivery fee (฿20) calculation
- Delivery address input (conditional)
- Payment methods: Cash, Card, QR Code
- Payment form (conditional for card)
- Order validation

### 6. Order Management
- Order ID generation (ORD-[timestamp])
- Order confirmation page
- Receipt generation capability
- Order history (localStorage)

### 7. UI/UX
- Responsive design (mobile-first)
- Consistent orange color scheme (#F27D16)
- CSS custom properties for theming
- Material Design (Flutter)
- Error handling and fallbacks
- Toast notifications
- Smooth animations

---

## Technology Stack

### Web (Vanilla JavaScript)
- HTML5
- CSS3 (Custom Properties)
- JavaScript (Vanilla)
- Node.js HTTP server
- localStorage API

### Web (React)
- React 18.2.0
- React DOM
- React Hooks (useState, useEffect)
- CSS3
- localStorage API
- react-scripts for bundling

### Mobile (Flutter)
- Flutter Framework
- Dart 3.0.0+
- Material Design 3
- TextField widgets
- Stateful/Stateless widgets
- CustomScrollView with SliverAppBar
- ListViews and ListView.builder

### Deployment
- Firebase Hosting
- Node.js server (development/production)
- Windows batch scripts

---

## Database/Data Model

### Dish Object
```javascript
{
  id: string,           // e.g., "dish_101"
  stallId: string,      // e.g., "stall_01"
  name: string,         // e.g., "Pad Kra Pao Gai"
  price: number,        // e.g., 50.00
  description: string,  // e.g., "Stir-fried chicken with basil"
  isAvailable: boolean, // true/false
  imageUrl: string      // URL to image
}
```

### Stall Object
```javascript
{
  id: string,       // e.g., "stall_01"
  name: string,     // e.g., "Bangkok Street Eats"
  description: string,
  imageUrl: string,
  isOpen: boolean,
  rating: number    // e.g., 4.5 (computed)
}
```

### Cart Object
```javascript
{
  items: [
    {
      ...dish,
      quantity: number  // e.g., 2
    }
  ]
}
```

### Order Object
```javascript
{
  orderId: string,      // e.g., "ORD-1234567890"
  items: [...],         // Cart items
  subtotal: number,
  deliveryFee: number,  // 20 or 0
  total: number,
  deliveryMethod: string, // "pickup" or "delivery"
  fullName: string,
  phoneNumber: string,
  address: string,      // null if pickup
  paymentMethod: string, // "cash", "card", "qr"
  timestamp: number,
  status: string        // "confirmed", "preparing", "ready", etc.
}
```

---

## Color Scheme

| Color Name | Hex Value | Usage |
|-----------|-----------|-------|
| Primary Orange | #F27D16 | Buttons, headers, badges |
| Primary Dark | #E86E00 | Hover states |
| Primary Light | #FFB366 | Accents |
| Text Primary | #2C2C2C | Main text |
| Text Secondary | #666666 | Secondary text |
| Text Hint | #999999 | Placeholder text |
| Text Inverse | #FFFFFF | Text on colored backgrounds |
| Surface Light | #f5f5f5 | Light backgrounds |
| Surface Default | #e8e8e8 | Default backgrounds |
| Background | #fafafa | Page background |
| Border | #e0e0e0 | Borders |
| Success | #4CAF50 | Success messages |
| Error | #FF5252 | Error messages |

---

## Running the Application

### HTML/Vanilla JavaScript
```bash
cd canteen-dash
node server.js
# Visit http://localhost:8000
```

### React
```bash
cd canteen-dash
npm install
npm start
# Visit http://localhost:3000
```

### Flutter
```bash
cd canteen-dash
flutter pub get
flutter run
```

---

## Development Workflow

1. **Login** → Student ID + Password
2. **Browse** → View stalls or filter by category
3. **Select Stall** → Click stall card
4. **Browse Menu** → View dishes in selected stall
5. **Add to Cart** → Click + button on dish
6. **Review Cart** → Check items and quantities
7. **Checkout** → Select delivery method and payment
8. **Confirm** → Place order and see confirmation

---

## Notes

- Mock data supports Thai food menu items with Thai Baht (฿) pricing
- Delivery fee is fixed at ฿20
- Cart data persists via localStorage
- All platforms support offline browsing of menu (data is mocked)
- Firebase hosting ignores .dart, pubspec.yaml, batch files, and documentation files
- Images load from picsum.photos as placeholder service
- Error handling includes image fallbacks and validation messages
- Responsive design breaks at 480px max-width
- Flutter uses Material 3 design system with orange theme

---

## File Count Summary

- HTML Files: 6 (index, register, home, menu, cart, checkout, confirmation)
- CSS Files: 2 (style.css, index.css)
- JavaScript Files: 3 (script.js, mockData.js for React, server.js)
- React Components: 1 main (MenuPage.jsx) + 1 container (App.jsx)
- Dart Files: 10 (main + 1 theme + 5 widgets + 3 screens)
- Configuration Files: 3 (firebase.json, package.json x2, pubspec.yaml)
- Documentation: 2 (README.md, REACT_SETUP.md)

