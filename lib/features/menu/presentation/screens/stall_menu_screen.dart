import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/widgets/dish_card.dart';
import '../../../../core/constants/mock_data.dart';

class StallMenuScreen extends StatelessWidget {
  const StallMenuScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: CustomScrollView(
        slivers: [
          // Pinned SliverAppBar
          SliverAppBar(
            pinned: true,
            expandedHeight: 200,
            backgroundColor: AppColors.primary,
            flexibleSpace: FlexibleSpaceBar(
              title: const Text('Nong\'s Thai Stall'),
              centerTitle: true,
              background: Container(
                color: AppColors.primary,
                child: Image.network(
                  'https://picsum.photos/400/200',
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) => Container(
                    color: AppColors.primary,
                    child: const Icon(
                      Icons.restaurant,
                      size: 60,
                      color: AppColors.textInverse,
                    ),
                  ),
                ),
              ),
            ),
            leading: IconButton(
              icon: const Icon(Icons.arrow_back, color: AppColors.textInverse),
              onPressed: () => Navigator.of(context).pop(),
            ),
          ),
          // SliverList with Dishes
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                final dish = MockData.dishes[index];
                return DishCard(
                  dishName: dish.name,
                  description: dish.description,
                  price: dish.price,
                  imageUrl: dish.imageUrl,
                  onAddToCart: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text('${dish.name} added to cart'),
                        duration: const Duration(milliseconds: 800),
                      ),
                    );
                  },
                );
              },
              childCount: MockData.dishes.length,
            ),
          ),
          // Bottom padding
          SliverPadding(
            padding: const EdgeInsets.only(bottom: 32),
            sliver: SliverToBoxAdapter(
              child: SizedBox.fromSize(size: Size.zero),
            ),
          ),
        ],
      ),
    );
  }
}
