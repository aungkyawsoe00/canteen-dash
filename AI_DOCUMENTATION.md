# CanteenDash - Complete AI-Friendly Documentation

## Executive Summary

**CanteenDash** is a university canteen food ordering system built with three parallel technology stacks:
- HTML5 + Vanilla JavaScript (classic web)
- React 18 with Hooks (modern web)
- Flutter + Dart (native mobile)

All implementations share the same UI/UX, mock data, and color scheme. The application is deployed on Firebase Hosting.

---

## Project Information

**Project Name:** CanteenDash  
**Project ID:** canteendash-1  
**Firebase URLs:**
- Web App: https://canteendash-1.web.app
- Alternative: https://canteendash-1.firebaseapp.com
- Console: https://console.firebase.google.com/project/canteendash-1

**Version:** 1.0.0  
**Target Users:** University students  
**Primary Use Case:** Food ordering from university canteen stalls

---

## Project Structure

```
CanteenDash/
├── firebase.json                          # Firebase hosting config
├── package.json                           # Root-level Firebase dependency
├── .firebaserc                            # Firebase project config (canteendash-1)
├── canteen-dash/                          # Main application folder
│   ├── package.json                       # React dependencies
│   ├── pubspec.yaml                       # Flutter configuration
│   ├── server.js                          # Node.js dev/prod server
│   ├── run_server.bat                     # Windows startup script
│   ├── script.js                          # Vanilla JS main logic
│   ├── style.css                          # Main stylesheet (500+ lines)
│   │
│   ├── HTML Pages (7 files):
│   ├── index.html                         # Login page
│   ├── register.html                      # Registration page
│   ├── home.html                          # Home feed & stall browsing
│   ├── menu.html                          # Stall menu & items
│   ├── cart.html                          # Shopping cart
│   ├── checkout.html                      # Payment & delivery info
│   ├── confirmation.html                  # Order confirmation
│   │
│   ├── public/
│   │   └── index.html                     # React root HTML
│   │
│   ├── src/                               # React source code
│   │   ├── index.js                       # React DOM entry point
│   │   ├── App.jsx                        # Root React component
│   │   ├── index.css                      # React styling
│   │   ├── mockData.js                    # CartManager + mock data
│   │   └── components/
│   │       └── MenuPage.jsx               # Menu component (React)
│   │
│   └── lib/                               # Flutter/Dart source code
│       ├── main.dart                      # Entry point
│       ├── core/
│       │   ├── constants/
│       │   │   └── mock_data.dart         # Dish/Stall definitions
│       │   ├── theme/
│       │   │   └── app_colors.dart        # Color palette
│       │   └── widgets/
│       │       ├── category_filter_list.dart
│       │       ├── custom_text_field.dart
│       │       ├── dish_card.dart
│       │       ├── primary_button.dart
│       │       └── stall_card.dart
│       └── features/
│           ├── auth/presentation/screens/login_screen.dart
│           ├── home/presentation/screens/home_feed_screen.dart
│           └── menu/presentation/screens/stall_menu_screen.dart
│
└── lib/                                   # Duplicate Dart backup
    ├── core/
    └── features/
```

---

## Technology Stack Summary

### Web (Vanilla JS)
- **Runtime:** Node.js (server.js on port 8000)
- **Markup:** HTML5
- **Styling:** CSS3 with custom properties
- **Script:** Vanilla JavaScript (ES6+)
- **Storage:** localStorage API
- **Deployment:** Firebase Hosting

### Web (React)
- **Framework:** React 18.2.0
- **Build Tool:** react-scripts 5.0.1
- **Components:** Hooks (useState, useEffect)
- **Styling:** CSS3
- **Storage:** localStorage API
- **Dev Server:** Port 3000 (npm start)
- **Build Output:** /build directory
- **Deployment:** Firebase Hosting

### Mobile (Flutter/Dart)
- **Framework:** Flutter
- **Language:** Dart 3.0.0+
- **Design System:** Material Design 3
- **Widgets:** StatefulWidget, StatelessWidget
- **Build:** pubspec.yaml

### Deployment Infrastructure
- **Hosting:** Firebase Hosting (https://canteendash-1.web.app)
- **Project:** canteendash-1
- **Public Directory:** canteen-dash/
- **Ignored Files:** .dart, pubspec.yaml, *.bat, node_modules, docs

---

## Color Scheme (Unified Across All Platforms)

| Color | Hex Value | Usage |
|-------|-----------|-------|
| Primary Orange | #F27D16 | Buttons, headers, badges, CTAs |
| Primary Dark | #E86E00 | Button hover, active states |
| Primary Light | #FFB366 | Accents, highlights |
| Text Primary | #2C2C2C | Main body text |
| Text Secondary | #666666 | Secondary text, labels |
| Text Hint | #999999 | Placeholder text |
| Text Inverse | #FFFFFF | Text on colored backgrounds |
| Surface Light | #f5f5f5 | Card backgrounds |
| Surface Default | #e8e8e8 | Default backgrounds |
| Background | #fafafa | Page background |
| Border | #e0e0e0 | Border lines, dividers |
| Success | #4CAF50 | Success messages |
| Error | #FF5252 | Error messages, alerts |
| Warning | #FFC107 | Warning messages |
| Info | #2196F3 | Information messages |

---

## Data Models

### Dish Object
```json
{
  "id": "dish_101",
  "stallId": "stall_01",
  "name": "Pad Kra Pao Gai",
  "price": 50.00,
  "description": "Stir-fried chicken with Thai holy basil and garlic",
  "isAvailable": true,
  "imageUrl": "https://picsum.photos/200?random=1"
}
```

### Stall Object
```json
{
  "id": "stall_01",
  "name": "Bangkok Street Eats",
  "description": "Authentic Thai street food specializing in basil and papaya dishes",
  "imageUrl": "https://picsum.photos/300?random=1",
  "isOpen": true,
  "rating": 4.5
}
```

### Cart Item Object
```json
{
  "id": "dish_101",
  "name": "Pad Kra Pao Gai",
  "price": 50.00,
  "imageUrl": "https://picsum.photos/200?random=1",
  "quantity": 2
}
```

### Order Object
```json
{
  "orderId": "ORD-1234567890",
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
  "timestamp": 1234567890000,
  "status": "confirmed"
}
```

---

## Mock Data (Fixed Dataset)

### Dishes (5 items)
1. **Pad Kra Pao Gai** - #50 (Stall 01) - Stir-fried chicken with basil
2. **Tom Yum Goong** - #60 (Stall 02) - Hot/sour soup with shrimp
3. **Pad Thai** - #45 (Stall 03) - Rice noodles with eggs
4. **Som Tam** - #40 (Stall 01) - Green papaya salad
5. **Massaman Gai** - #55 (Stall 02) - Curry with chicken [NOT AVAILABLE]

### Stalls (3 items)
1. **Bangkok Street Eats** (stall_01) - Authentic Thai street food
2. **Thai Spice Corner** (stall_02) - Premium Thai cuisine
3. **Noodle House** (stall_03) - Thai noodle specialties [CLOSED]

### Categories (4 items)
1. Noodles
2. Rice
3. Drinks
4. Snacks

### Currency
**Thai Baht (฿)** - All prices in this denomination

---

## Feature Set

### 1. Authentication
- Student ID + Password login
- User registration with validation
- Session persistence via localStorage
- Password confirmation on registration

### 2. Menu Browsing
- Stall grid/list view
- Stall status (open/closed)
- Category filtering
- Dish cards with images, description, price
- Image error handling with fallbacks
- Availability status per dish

### 3. Shopping Cart
- Add/remove items
- Quantity increment/decrement
- Cart item count badge
- Persistent storage (localStorage)
- Clear cart functionality
- Real-time total calculation

### 4. Checkout Process
- Delivery method selection (Pickup / Delivery)
- Fixed delivery fee (#20 for delivery)
- Address input (shown only for delivery)
- Full name and phone number input
- Payment method selection (Cash / Card / QR Code)
- Conditional payment form (for card payments)
- Form validation before submission
- Empty cart validation

### 5. Order Management
- Order ID generation: ORD-[unix-timestamp]
- Order confirmation page with details
- Order summary display
- Receipt generation option (structure exists)
- Order history via localStorage
- Timestamp tracking

### 6. UI/UX Components
- Toast/Snackbar notifications
- Input validation with feedback
- Responsive design (mobile: <= 480px)
- Loading states
- Error handling with fallbacks
- Smooth animations (slide-up, fade-in)
- Image lazy loading
- Accessibility considerations

---

## Page Navigation Flow

```
Login (index.html)
  ↓
Registration (register.html) - optional
  ↓
Home Feed (home.html)
  ├→ Category Filtering
  └→ Browse Stalls
      ├→ Click Stall → Menu (menu.html)
      │   └→ Add Items to Cart
      │       ↓
      │   Cart (cart.html)
      │       └→ Proceed to Checkout
      │           ↓
      │       Checkout (checkout.html)
      │           ├→ Select Delivery Method
      │           ├→ Enter Full Name & Phone
      │           ├→ Enter Address (if delivery)
      │           ├→ Select Payment Method
      │           └→ Place Order
      │               ↓
      │           Confirmation (confirmation.html)
      │               └→ Continue Shopping → Home (home.html)
      └→ Continue Shopping → Home (home.html)
```

---

## Core JavaScript Functions (Vanilla JS Implementation)

### CartManager Class (Static Methods)
- `getCart()` - Returns cart array from localStorage
- `addItem(dish)` - Adds dish or increments quantity
- `removeItem(dishId)` - Removes dish from cart
- `updateQuantity(dishId, quantity)` - Updates quantity or removes if <= 0
- `clearCart()` - Clears localStorage cart
- `getTotalItems()` - Returns sum of all quantities
- `getTotal()` - Returns cart total price

### Page Functions
- `showToast(message, duration)` - Shows notification
- `handleLogin(event)` - Validates student ID/password, navigates to home
- `handleCategoryFilter(category, element)` - Filters stalls by category
- `navigateToMenu(stallId, stallName)` - Saves selection and goes to menu
- `addToCart(dishId, dishName, price)` - Adds to cart and updates badge
- `updateCartBadge()` - Updates cart item count display
- `renderCart()` - Generates cart HTML
- `renderCheckout()` - Generates checkout HTML
- `placeOrder()` - Creates order object, saves to localStorage, shows confirmation
- `renderStallCards()` - Generates stall cards HTML
- `renderDishCards()` - Generates dish cards HTML
- `setupMenuHeader()` - Sets menu page header
- `initializeCategories()` - Creates category filter buttons

---

## React Implementation Details

### Components Structure

**App.jsx (Root Container)**
```
App
└── MenuPage
```

**MenuPage.jsx (Menu Feature)**
- State: `stallName`, `toast`
- Hooks: `useState`, `useEffect`
- Props: None (reads from localStorage)
- Renders: Menu header + dish grid + toast

**mockData.js (Shared Module)**
- Exports: `CartManager`, `mockDishes`
- Used by: MenuPage.jsx

### Component Props
None - all data from context/localStorage or props passed internally.

### Component State Management
- `stallName` - Stall being browsed (from localStorage on mount)
- `toast` - Current notification message

### Lifecycle Hooks
- `useEffect` - Loads stall name from localStorage on component mount
- Toast auto-dismiss with setTimeout

---

## Flutter Implementation Details

### Layer Architecture
```
main.dart
├── CanteenDashApp (MaterialApp)
│   └── LoginScreen (routing entry)
│
features/
├── auth/presentation/screens/LoginScreen
├── home/presentation/screens/HomeFeedScreen
└── menu/presentation/screens/StallMenuScreen

core/
├── constants/mock_data.dart (Dish, Stall classes)
├── theme/app_colors.dart (Color palette)
└── widgets/ (Reusable components)
    ├── CategoryFilterList
    ├── CustomTextField
    ├── DishCard
    ├── PrimaryButton
    └── StallCard
```

### Widgets Overview

**CategoryFilterList**
- Type: StatefulWidget
- Displays: Horizontal scrollable filter chips
- Categories: Noodles, Rice, Drinks, Snacks
- Selection: Orange background when active

**CustomTextField**
- Type: StatelessWidget
- Props: hintText, prefixIcon, obscureText, controller
- Styling: White background, orange focus border

**DishCard**
- Type: StatelessWidget
- Layout: Vertical - image + content + button
- Image: Rounded corners with error fallback
- Button: Add to cart with + emoji

**PrimaryButton**
- Type: StatelessWidget
- Props: label, onPressed
- Styling: Full width, orange background
- Text: White, bold (16px)

**StallCard**
- Type: StatelessWidget
- Layout: Image with gradient overlay
- Rating: Orange badge with star icon
- Image: Error fallback with restaurant icon

### Screen Components

**LoginScreen**
- Orange logo container
- "UNIVERSITY PORTAL" heading
- Form: Student ID + Password
- Buttons: Login, Forgot Password, Register link

**HomeFeedScreen**
- Orange header with greeting
- CategoryFilterList component
- ListView of StallCards
- SafeArea wrapper

**StallMenuScreen**
- CustomScrollView with pinned SliverAppBar
- Stall image and name in header
- SliverList of DishCards
- Add to cart with SnackBar feedback

### State Management
- No state management library used
- Uses StatefulWidget/StatelessWidget pattern
- Navigator.push for routing

---

## HTML Pages Detailed Breakdown

### index.html (Login)
**Elements:**
- Logo: 🍜 (food symbol)
- Input fields: Student ID (person icon), Password (lock icon)
- Buttons: Login, "Forgot Password?", "Register"
- Styling: Centered card, max-width 400px

**Form Handling:**
- Input validation: Both fields required
- Error: Toast notification if empty
- Success: Redirects to home.html after 500ms

### register.html (Registration)
**Form Fields:**
- Full Name
- Student ID
- Email
- Password
- Confirm Password
- Terms checkbox (optional implementation)

**Validation:**
- Password must match confirm password
- Email format check
- Student ID format check

### home.html (Home Feed)
**Sections:**
1. Header with "CanteenDash" title and cart badge
2. Greeting banner: "Good Morning, Alex! ☀️"
3. Categories section (chips, horizontal scroll)
4. Available Stalls section (grid/cards)

**Dynamic Content:**
- Categories rendered from mockData
- Stalls rendered from mockData
- Category filtering functional

### menu.html (Stall Menu)
**Components:**
- Back button (← symbol)
- Stall name header
- "Menu Items" heading
- Dishes container (grid)

**Per Dish Item:**
- Image (picsum.photos)
- Name
- Description
- Price in ฿
- Add to cart button (+)

**Interactions:**
- Back button → home.html
- Add to cart → Shows toast, updates badge

### cart.html (Shopping Cart)
**Sections:**
1. Cart items list
   - Item image thumbnail
   - Item name
   - Unit price
   - Quantity with +/- buttons
   - Item total
   - Remove button (×)

2. Pricing summary
   - Subtotal
   - Delivery fee: ฿20 (or ฿0)
   - Total

3. Actions
   - "Proceed to Checkout" (primary button)
   - "Continue Shopping" (secondary button)

**Empty State:**
- "Your cart is empty" message
- "Browse Menu" button

### checkout.html (Checkout)
**Sections:**

1. Order Summary
   - Item list with quantities and prices
   - Subtotal
   - Delivery fee
   - Order total

2. Delivery Options
   - Radio buttons: "Pickup" / "Delivery"
   - Address field (show/hide based on selection)

3. Contact Information
   - Full Name input
   - Phone Number input (format: +66XXXXXXXXX)

4. Payment Information
   - Radio buttons: Cash / Card / QR Code
   - Card form (show only if "Card" selected):
     - Cardholder name
     - Card number
     - Expiry (MM/YY)
     - CVV

5. Actions
   - "Place Order" (primary)
   - "Back to Cart" (secondary)

**Validation:**
- All required fields must be filled
- Phone number format check
- Card validation if card payment selected
- Empty cart check

### confirmation.html (Order Confirmation)
**Elements:**
1. Checkmark icon (animated, green)
2. "Order Confirmed!" heading
3. Order Details
   - Order ID: ORD-[timestamp]
   - Order items with quantities
   - Subtotal
   - Delivery fee
   - Total
   - Delivery method
   - Estimated delivery time (if delivery)

4. Actions
   - "Download Receipt" (generates PDF or similar)
   - "Continue Shopping" (navigates to home.html)

**Data Source:**
- Reads from localStorage: 'currentOrder'

---

## CSS Architecture

### Global Variables (Custom Properties)
```css
:root {
  --primary-orange: #F27D16;
  --primary-dark: #E86E00;
  --primary-light: #FFB366;
  --text-primary: #2C2C2C;
  --text-secondary: #666666;
  --text-hint: #999999;
  --text-inverse: #FFFFFF;
  --surface-light: #f5f5f5;
  --surface-default: #e8e8e8;
  --background: #fafafa;
  --border: #e0e0e0;
  --success: #4CAF50;
  --error: #FF5252;
  --warning: #FFC107;
  --info: #2196F3;
}
```

### Component Styles

**Header**
- Background: var(--primary-orange)
- Color: var(--text-inverse)
- Position: sticky
- Padding: 16px
- Display: flex with space-between

**Input Fields**
- Border: 1px solid var(--border)
- Padding: 12px
- Border-radius: 8px
- Focus: 2px solid var(--primary-orange)
- Placeholder color: var(--text-hint)

**Buttons**
- Primary: background var(--primary-orange), white text
- Secondary: outlined style
- Border-radius: 8px
- Padding: 12px 24px
- Hover: background var(--primary-dark)
- Cursor: pointer

**Cards**
- Background: white
- Border-radius: 12px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
- Padding: 16px

**Category Chips**
- Background: var(--surface-light)
- Border: 1px solid var(--border)
- Border-radius: 20px
- Padding: 8px 16px
- Active: background var(--primary-orange), color white

**Dish Cards**
- Layout: flex, align-items: center
- Gap: 16px
- Image: 80px square, rounded
- Flex-grow: 1 for content
- Hover: subtle shadow increase

**Stall Cards**
- Background-image with gradient overlay
- Position: relative
- Gradient: transparent to rgba(0,0,0,0.4) bottom
- Title: positioned absolute bottom-left
- Rating: badge positioned top-right

**Toast/Snackbar**
- Position: fixed, bottom 20px, left 50%
- Transform: translateX(-50%)
- Background: var(--primary-orange)
- Color: white
- Border-radius: 4px
- Padding: 12px 24px
- Animation: slideUp 0.3s ease-out
- Z-index: 9999

**Responsive**
- Mobile breakpoint: max-width 480px
- Grid: 1 column on mobile
- Cards: adjust padding/spacing

---

## Storage Strategy

### localStorage Keys

| Key | Type | Content | Scope |
|-----|------|---------|-------|
| canteenCart | Array (JSON) | Cart items with quantities | Global |
| selectedStallId | String | Current stall ID | Global |
| selectedStallName | String | Current stall name | Global |
| currentOrder | Object (JSON) | Last placed order | Global |
| studentId | String (optional) | Logged-in student ID | Session |
| userSession | Object (JSON) | Session data | Session |

### Data Persistence Strategy
- Cart: Survives page reload, browser close
- Order: Saved after successful placement
- Stall selection: Saved when navigating to menu
- Session: Cleared on logout or browser close (implement via logout button)

---

## Image Handling

### Image Sources
- **Dish images:** https://picsum.photos/200?random=N
- **Stall images:** https://picsum.photos/300?random=N
- **Quality:** 200px for dishes (list), 300px for stalls (cards)

### Error Handling
- React: `onError` handler redirects to placeholder
- Flutter: NetworkImage with error widget fallback
- Vanilla JS: `onerror` attribute on img tags

### Placeholder Fallbacks
- React/JS: Via.placeholder.com with text
- Flutter: Icon (restaurant_menu_icon)

---

## API Integration Points (Current: Mock Only)

**Note:** All data is mocked. To implement real backend:

### Endpoints to Create
1. `POST /api/auth/login` - Student ID + password validation
2. `POST /api/auth/register` - User registration
3. `GET /api/dishes` - Fetch available dishes
4. `GET /api/stalls` - Fetch available stalls
5. `GET /api/categories` - Fetch dish categories
6. `POST /api/orders` - Create new order
7. `GET /api/orders/:orderId` - Fetch order details
8. `POST /api/cart` - Save cart to backend (optional)

### Authentication Method
- JWT tokens recommended
- Store in localStorage or secure HttpOnly cookie
- Add Authorization header to requests

---

## Browser Compatibility

### Minimum Requirements
- ES6 JavaScript support
- CSS3 custom properties support
- localStorage API support
- Flexbox support
- CSS Grid support

### Tested On
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Browsers
- iOS Safari 14+
- Chrome Android 90+
- Samsung Internet 14+

---

## Performance Considerations

### Optimization Already Implemented
- CSS custom properties (no repeated color values)
- Minimal external dependencies
- localStorage caching for cart
- Responsive images with picsum.photos
- CSS Grid/Flexbox for layouts

### Future Optimizations
- Lazy load images with Intersection Observer
- Minify CSS/JS for production
- Gzip compression on server
- Service Worker for offline support
- Code splitting for React routes
- Image optimization/CDN

---

## Security Considerations

### Current Implementation
- No sensitive data in localStorage
- Client-side validation only (UI feedback)
- Student ID/password not persisted
- XSS protection via textContent instead of innerHTML

### Production Recommendations
- Server-side validation for all inputs
- HTTPS enforcement
- CSRF tokens for state-changing operations
- Rate limiting on authentication endpoints
- Input sanitization
- SQL injection prevention (when using database)
- Session timeout after 30 minutes idle
- Secure password hashing (bcrypt)
- API authentication (JWT/OAuth)

---

## Deployment Instructions

### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy
```

**Deployed URL:** https://canteendash-1.web.app

### Vanilla JS Server (Node.js)
```bash
cd canteen-dash
node server.js
# Access at http://localhost:8000
```

### React Development
```bash
cd canteen-dash
npm install
npm start
# Access at http://localhost:3000
```

### React Production Build
```bash
cd canteen-dash
npm install
npm build
# Output: canteen-dash/build/
```

### Flutter
```bash
cd canteen-dash
flutter pub get
flutter run -d <device-id>
```

---

## Testing Checklist

### Functional Testing
- [ ] Login with student ID and password
- [ ] Register new account
- [ ] Browse stalls on home page
- [ ] Filter by category
- [ ] Select stall and view menu
- [ ] Add items to cart
- [ ] Update cart quantities
- [ ] Remove items from cart
- [ ] View cart subtotal and total
- [ ] Checkout with pickup option
- [ ] Checkout with delivery option (show address field)
- [ ] Apply delivery fee correctly (฿20)
- [ ] Pay with cash option
- [ ] Pay with card (show card form)
- [ ] Pay with QR code
- [ ] Place order and see confirmation
- [ ] View order ID and details
- [ ] Toast notifications appear and disappear
- [ ] Cart badge updates correctly

### Responsive Testing
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (320x568)
- [ ] All elements responsive
- [ ] Touch targets at least 44x44px
- [ ] No horizontal scrolling

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Data Persistence Testing
- [ ] Cart persists after page reload
- [ ] Stall selection persists
- [ ] Order saved to localStorage
- [ ] Order details retrievable on confirmation page

---

## Project Statistics

**File Count:**
- HTML files: 7
- CSS files: 2
- JavaScript files: 3 (script.js, mockData.js, server.js)
- React files: 3 (App.jsx, MenuPage.jsx, index.js)
- Dart files: 10 (main.dart + 5 widgets + 3 screens + 1 colors)
- Configuration files: 4 (firebase.json, package.json × 2, pubspec.yaml)
- Documentation files: 5

**Lines of Code (Approximate):**
- HTML: 400 lines
- CSS: 600 lines
- JavaScript (Vanilla): 700 lines
- JavaScript (React): 400 lines
- Dart: 1000 lines

**Total Project Size:** ~3100 lines of code

**Color Variables:** 13 main colors
**Mock Data Items:** 5 dishes + 3 stalls + 4 categories
**Pages:** 7 (HTML)
**Components (React):** 2 main
**Widgets (Flutter):** 5 reusable + 3 screens

---

## Known Limitations

1. **Mock Data Only** - No real backend integration
2. **No Database** - All data stored in localStorage and mock files
3. **No Email Verification** - Registration doesn't validate emails
4. **No Payment Processing** - Payment is mocked
5. **No Order Tracking** - No real-time order updates
6. **No User Accounts Backend** - Student ID validation is not real
7. **No Search/Filters** - Filter by category only
8. **No Reviews/Ratings** - Ratings are hardcoded
9. **No Notifications** - No push/email notifications
10. **No Real Images** - Using placeholder service

---

## Future Enhancement Opportunities

1. **Backend Integration**
   - Express.js/Node.js server with REST API
   - PostgreSQL database
   - User authentication with JWT
   - Real payment gateway (Stripe, PayPal)

2. **Features**
   - Real-time order tracking
   - User profiles and order history
   - Wishlist functionality
   - Dietary preferences
   - Multiple delivery addresses
   - Loyalty points system
   - Review and ratings system
   - Admin dashboard
   - Vendor dashboard

3. **Technical**
   - State management (Redux for React, Bloc for Flutter)
   - Unit and integration tests
   - CI/CD pipeline
   - Performance monitoring
   - Error tracking (Sentry)
   - Analytics
   - Internationalization (i18n)
   - Dark mode support

4. **User Experience**
   - Push notifications
   - Real-time chat with vendors
   - Augmented Reality menu
   - Voice ordering
   - Multiple language support
   - Accessibility improvements

---

## Maintenance Notes

### Updating Mock Data
- **JavaScript:** Edit arrays in script.js (lines 1-50)
- **React:** Edit export in mockData.js
- **Flutter:** Edit classes in lib/core/constants/mock_data.dart

### Changing Colors
- **JavaScript/React:** Update CSS variables in :root block
- **Flutter:** Update AppColors class in app_colors.dart

### Adding New Pages (Vanilla JS)
1. Create new .html file
2. Add route handler in script.js
3. Add navigation link in existing pages
4. Add styling to style.css

### Adding New Components (React)
1. Create new .jsx file in src/components/
2. Import in App.jsx or MenuPage.jsx
3. Add CSS classes to index.css

### Adding New Screens (Flutter)
1. Create new folder in features/
2. Add screen file following Clean Architecture pattern
3. Update routing in main.dart or navigator
4. Add navigation handler in existing screens

---

## Support & Documentation

**Original Project Documentation:** PROJECT_DOCUMENTATION.md  
**React Setup Guide:** canteen-dash/REACT_SETUP.md  
**Project README:** canteen-dash/README.md  
**Firebase Config:** firebase.json, .firebaserc  

**For AI Integration:**
- All data structures defined above
- All functions documented with parameters
- All color/styling values specified
- All mock data provided
- All platforms architecture explained

---

## Summary for AI Context

This documentation provides everything an AI system needs to:
- Understand the project structure and purpose
- Generate code for new features across all platforms
- Modify existing features consistently
- Ensure styling/color compliance
- Generate tests and validation logic
- Create backend API specifications
- Maintain data structure consistency
- Plan new features and refactoring

All information is self-contained and requires no external context.
