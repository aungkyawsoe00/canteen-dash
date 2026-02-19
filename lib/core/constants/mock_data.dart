class Dish {
  final String id;
  final String stallId;
  final String name;
  final double price;
  final String description;
  final bool isAvailable;
  final String imageUrl;

  Dish({
    required this.id,
    required this.stallId,
    required this.name,
    required this.price,
    required this.description,
    required this.isAvailable,
    required this.imageUrl,
  });
}

class Stall {
  final String id;
  final String name;
  final String description;
  final String imageUrl;
  final bool isOpen;

  Stall({
    required this.id,
    required this.name,
    required this.description,
    required this.imageUrl,
    required this.isOpen,
  });
}

class MockData {
  // Mock Dishes
  static final List<Dish> dishes = [
    Dish(
      id: 'dish_101',
      stallId: 'stall_01',
      name: 'Pad Kra Pao Gai',
      price: 50.00,
      description: 'Stir-fried chicken with Thai holy basil and garlic',
      isAvailable: true,
      imageUrl: 'https://picsum.photos/200?random=1',
    ),
    Dish(
      id: 'dish_102',
      stallId: 'stall_02',
      name: 'Tom Yum Goong',
      price: 60.00,
      description: 'Hot and sour soup with shrimp, lemongrass, and galangal',
      isAvailable: true,
      imageUrl: 'https://picsum.photos/200?random=2',
    ),
    Dish(
      id: 'dish_103',
      stallId: 'stall_03',
      name: 'Pad Thai',
      price: 45.00,
      description: 'Stir-fried rice noodles with eggs, tofu, and bean sprouts',
      isAvailable: true,
      imageUrl: 'https://picsum.photos/200?random=3',
    ),
    Dish(
      id: 'dish_104',
      stallId: 'stall_01',
      name: 'Som Tam',
      price: 40.00,
      description: 'Green papaya salad with lime juice, fish sauce, and chilies',
      isAvailable: true,
      imageUrl: 'https://picsum.photos/200?random=4',
    ),
    Dish(
      id: 'dish_105',
      stallId: 'stall_02',
      name: 'Massaman Gai',
      price: 55.00,
      description: 'Muslim-style curry with chicken, potatoes, and peanuts',
      isAvailable: false,
      imageUrl: 'https://picsum.photos/200?random=5',
    ),
  ];

  // Mock Stalls
  static final List<Stall> stalls = [
    Stall(
      id: 'stall_01',
      name: 'Bangkok Street Eats',
      description: 'Authentic Thai street food specializing in basil and papaya dishes',
      imageUrl: 'https://picsum.photos/300?random=1',
      isOpen: true,
    ),
    Stall(
      id: 'stall_02',
      name: 'Thai Spice Corner',
      description: 'Premium Thai cuisine featuring soups and curries',
      imageUrl: 'https://picsum.photos/300?random=2',
      isOpen: true,
    ),
    Stall(
      id: 'stall_03',
      name: 'Noodle House',
      description: 'Specializing in various Thai noodle dishes and stir-fries',
      imageUrl: 'https://picsum.photos/300?random=3',
      isOpen: false,
    ),
  ];
}
