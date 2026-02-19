// Cart Management
export class CartManager {
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
export const mockDishes = [
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
    price: 70.00,
    description: 'Massaman curry with chicken, potatoes, and peanuts',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=5'
  },
  {
    id: 'dish_106',
    stallId: 'stall_01',
    name: 'Larb Moo',
    price: 55.00,
    description: 'Spicy minced pork salad with lime and herbs',
    isAvailable: true,
    imageUrl: 'https://picsum.photos/200?random=6'
  }
];
