# React Menu Page Setup

I've added React to the menu page! Here's what was created:

## Files Created:
- **package.json** - React dependencies and scripts
- **public/index.html** - React entry point
- **src/index.js** - React DOM initialization
- **src/App.jsx** - Main App component
- **src/components/MenuPage.jsx** - Menu page React component
- **src/mockData.js** - Mock dishes data and cart management
- **src/index.css** - Styling for the menu page

## How to Run:

### Option 1: React Development Server
```bash
npm install
npm start
```
This will start the React development server at http://localhost:3000

### Option 2: Build for Production
```bash
npm install
npm build
```
Then update your server to serve the built files from the `/build` directory.

## Features:
✅ Menu page UI converted to React
✅ Displays all menu items with images
✅ Add to cart functionality with toast notifications
✅ Cart data persisted to localStorage
✅ Back button navigation
✅ Responsive design matching original styling
✅ Same styling as original HTML version

## Next Steps:
1. Run `npm install` to install React dependencies
2. Run `npm start` to start the development server
3. Visit http://localhost:3000 to see the menu page

The menu page maintains all the functionality from the original HTML version while being built with React components!
