// Cart Management
class CartManager {
  static getCart() {
    const cart = localStorage.getItem('canteenCart');
    return cart ? JSON.parse(cart) : [];
  }

  static addItem(dish) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === dish.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        imageUrl: dish.imageUrl,
        quantity: 1
      });
    }
    
    localStorage.setItem('canteenCart', JSON.stringify(cart));
  }

  static removeItem(dishId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== dishId);
    localStorage.setItem('canteenCart', JSON.stringify(cart));
  }

  static updateQuantity(dishId, quantity) {
    let cart = this.getCart();
    const item = cart.find(item => item.id === dishId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(dishId);
      } else {
        item.quantity = quantity;
        localStorage.setItem('canteenCart', JSON.stringify(cart));
      }
    }
  }

  static clearCart() {
    localStorage.removeItem('canteenCart');
  }

  static getTotalItems() {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  static getTotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}

// Mock Data
const mockDishes = [
  {
    id: 'dish_101',
    stallId: 'stall_01',
    name: 'Pad Kra Pao Gai',
    price: 50.00,
    description: 'Stir-fried chicken with Thai holy basil and garlic',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=1'
  },
  {
    id: 'dish_102',
    stallId: 'stall_02',
    name: 'Tom Yum Goong',
    price: 60.00,
    description: 'Hot and sour soup with shrimp, lemongrass, and galangal',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=2'
  },
  {
    id: 'dish_103',
    stallId: 'stall_03',
    name: 'Pad Thai',
    price: 45.00,
    description: 'Stir-fried rice noodles with eggs, tofu, and bean sprouts',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=3'
  },
  {
    id: 'dish_104',
    stallId: 'stall_01',
    name: 'Som Tam',
    price: 40.00,
    description: 'Green papaya salad with lime juice, fish sauce, and chilies',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=4'
  },
  {
    id: 'dish_105',
    stallId: 'stall_02',
    name: 'Massaman Gai',
    price: 55.00,
    description: 'Muslim-style curry with chicken, potatoes, and peanuts',
    isAvailable: false,
    imageUrl: 'https://picsum.photos/200?random=5'
  }
];

const mockStalls = [
  {
    id: 'stall_01',
    name: 'Bangkok Street Eats',
    description: 'Authentic Thai street food specializing in basil and papaya dishes',
    imageUrl: 'https://picsum.photos/300?random=1',
    isOpen: true
  },
  {
    id: 'stall_02',
    name: 'Thai Spice Corner',
    description: 'Premium Thai cuisine featuring soups and curries',
    imageUrl: 'https://picsum.photos/300?random=2',
    isOpen: true
  },
  {
    id: 'stall_03',
    name: 'Noodle House',
    description: 'Specializing in various Thai noodle dishes and stir-fries',
    imageUrl: 'https://picsum.photos/300?random=3',
    isOpen: false
  }
];

const categories = ['Noodles', 'Rice', 'Drinks', 'Snacks'];

// Toast/Snackbar function
function showToast(message, duration = 1500) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideUp 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Handle Login
function handleLogin(event) {
  event.preventDefault();
  const studentId = document.getElementById('studentId').value;
  const password = document.getElementById('password').value;

  if (!studentId || !password) {
    showToast('Please enter Student ID and Password');
    return;
  }

  showToast('Login successful! Redirecting...');
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 500);
}

// Handle Category Filter
function handleCategoryFilter(category, element) {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  element.classList.add('active');
  showToast(`Filtered by: ${category}`);
}

// Handle Stall Navigation
function navigateToMenu(stallId, stallName = "Nong's Thai Stall") {
  localStorage.setItem('selectedStallId', stallId);
  localStorage.setItem('selectedStallName', stallName);
  window.location.href = 'menu.html';
}

// Handle Add to Cart
function addToCart(dishId, dishName, price) {
  const dish = mockDishes.find(d => d.id === dishId);
  if (dish) {
    CartManager.addItem(dish);
    updateCartBadge();
    showToast(`${dishName} added to cart ✓`);
  }
}

// Update cart badge
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const count = CartManager.getTotalItems();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Render cart page
function renderCart() {
  const cart = CartManager.getCart();
  const container = document.getElementById('cartContainer');
  const summary = document.getElementById('cartSummary');
  const empty = document.getElementById('emptyCart');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    summary.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  summary.style.display = 'block';

  container.innerHTML = `
    <h3 style="margin-bottom: 16px; color: var(--text-primary);">Items in Cart (${cart.length})</h3>
    ${cart.map(item => `
      <div class="dish-card" style="margin-bottom: 12px;">
        <img src="${item.imageUrl}" alt="${item.name}" class="dish-image" onerror="this.src='https://via.placeholder.com/80?text=No+Image'">
        <div class="dish-content">
          <div>
            <div class="dish-name">${item.name}</div>
            <div class="dish-price">฿${item.price.toFixed(2)}</div>
          </div>
          <div class="dish-footer" style="margin-top: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <button style="width: 32px; height: 32px; border: 1px solid var(--border); background: var(--surface-light); border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">−</button>
              <span style="min-width: 30px; text-align: center; font-weight: bold;">${item.quantity}</span>
              <button style="width: 32px; height: 32px; border: 1px solid var(--border); background: var(--surface-light); border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <button style="background: none; border: none; color: var(--error); cursor: pointer; font-size: 18px;" onclick="removeFromCart('${item.id}')">🗑️</button>
          </div>
        </div>
      </div>
    `).join('')}
  `;

  // Update totals
  const subtotal = CartManager.getTotal();
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  document.getElementById('subtotal').textContent = `฿${subtotal.toFixed(2)}`;
  document.getElementById('total').textContent = `฿${total.toFixed(2)}`;
}

function updateCartQuantity(dishId, newQuantity) {
  CartManager.updateQuantity(dishId, newQuantity);
  renderCart();
}

function removeFromCart(dishId) {
  CartManager.removeItem(dishId);
  renderCart();
  updateCartBadge();
}

function proceedToCheckout() {
  if (CartManager.getTotalItems() === 0) {
    showToast('Cart is empty!');
    return;
  }
  window.location.href = 'checkout.html';
}

// Render checkout page
function renderCheckout() {
  const cart = CartManager.getCart();
  const container = document.getElementById('orderItems');
  
  if (!container) return;

  container.innerHTML = cart.map(item => `
    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--border);">
      <div>
        <div style="font-weight: 500;">${item.name}</div>
        <div style="font-size: 12px; color: var(--text-secondary);">Qty: ${item.quantity}</div>
      </div>
      <div style="font-weight: bold;">฿${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  `).join('');

  const subtotal = CartManager.getTotal();
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  document.getElementById('checkoutTotal').textContent = `฿${total.toFixed(2)}`;
}

function placeOrder() {
  const fullName = document.getElementById('fullName').value;
  const phone = document.getElementById('phone').value;
  const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  const address = deliveryMethod === 'delivery' ? document.getElementById('address').value : 'Pickup';

  if (!fullName || !phone) {
    showToast('Please fill in all required fields');
    return;
  }

  if (deliveryMethod === 'delivery' && !address) {
    showToast('Please enter delivery address');
    return;
  }

  // Create order object
  const order = {
    id: 'ORD-' + Date.now(),
    customerName: fullName,
    phone: phone,
    items: CartManager.getCart(),
    subtotal: CartManager.getTotal(),
    deliveryFee: deliveryMethod === 'delivery' ? 20 : 0,
    total: CartManager.getTotal() + (deliveryMethod === 'delivery' ? 20 : 0),
    deliveryMethod: deliveryMethod,
    address: address,
    paymentMethod: paymentMethod,
    status: 'confirmed',
    timestamp: new Date().toLocaleString()
  };

  // Save order to localStorage
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Clear cart
  CartManager.clearCart();

  // Redirect to confirmation
  localStorage.setItem('lastOrder', JSON.stringify(order));
  window.location.href = 'confirmation.html';
}

// Generate Stall Cards
function renderStallCards() {
  const container = document.getElementById('stallsContainer');
  if (!container) return;

  container.innerHTML = mockStalls.map((stall, index) => {
    const rating = (4.5 + index * 0.1).toFixed(1);
    return `
      <div class="stall-card" style="background-image: url('${stall.imageUrl}');" onclick="navigateToMenu('${stall.id}', '${stall.name}')">
        <div class="stall-card-overlay">
          <div class="stall-card-name">${stall.name}</div>
          <div class="stall-rating">
            <span>⭐</span>
            ${rating}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Generate Dish Cards
function renderDishCards() {
  const container = document.getElementById('dishesContainer');
  if (!container) return;

  container.innerHTML = mockDishes.map(dish => {
    return `
      <div class="dish-card">
        <img src="${dish.imageUrl}" alt="${dish.name}" class="dish-image" onerror="this.src='https://via.placeholder.com/80?text=No+Image'">
        <div class="dish-content">
          <div>
            <div class="dish-name">${dish.name}</div>
            <div class="dish-description">${dish.description}</div>
          </div>
          <div class="dish-footer">
            <div class="dish-price">฿${dish.price.toFixed(2)}</div>
            <button class="btn-add-cart" onclick="addToCart('${dish.id}', '${dish.name}', ${dish.price})">➕</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Setup Menu Header
function setupMenuHeader() {
  const stallName = localStorage.getItem('selectedStallName') || "Nong's Thai Stall";
  const header = document.getElementById('menuHeader');
  if (header) {
    header.innerHTML = `
      <button class="back-button" onclick="window.location.href='home.html'">←</button>
      <h2>${stallName}</h2>
    `;
  }
}

// Initialize Categories
function initializeCategories() {
  const container = document.getElementById('categoriesContainer');
  if (!container) return;

  container.innerHTML = categories.map((cat, index) => `
    <button class="filter-chip ${index === 0 ? 'active' : ''}" onclick="handleCategoryFilter('${cat}', this)">
      ${cat}
    </button>
  `).join('');
}

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
  // Render components based on page
  renderStallCards();
  renderDishCards();
  setupMenuHeader();
  initializeCategories();

  // Login form submit
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
});
