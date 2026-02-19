import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

class DishCard extends StatelessWidget {
  final String dishName;
  final String description;
  final double price;
  final String imageUrl;
  final VoidCallback? onAddToCart;

  const DishCard({
    Key? key,
    required this.dishName,
    required this.description,
    required this.price,
    required this.imageUrl,
    this.onAddToCart,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.white,
        border: Border.all(color: AppColors.border),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        children: [
          // Image
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Image.network(
              imageUrl,
              width: 80,
              height: 80,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) => Container(
                width: 80,
                height: 80,
                decoration: BoxDecoration(
                  color: AppColors.surfaceDefault,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: const Icon(Icons.fastfood, size: 32),
              ),
            ),
          ),
          const SizedBox(width: 12),
          // Content Column wrapped in Expanded
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  dishName,
                  style: const TextStyle(
                    color: AppColors.textPrimary,
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 4),
                Text(
                  description,
                  style: const TextStyle(
                    color: AppColors.textSecondary,
                    fontSize: 12,
                  ),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 8),
                Text(
                  '฿${price.toStringAsFixed(2)}',
                  style: const TextStyle(
                    color: AppColors.primary,
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 12),
          // Add to Cart Button
          IconButton(
            onPressed: onAddToCart,
            icon: const Icon(
              Icons.add_circle,
              color: AppColors.primary,
              size: 28,
            ),
          ),
        ],
      ),
    );
  }
}
