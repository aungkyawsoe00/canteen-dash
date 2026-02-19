import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/widgets/category_filter_list.dart';
import '../../../../core/widgets/stall_card.dart';
import '../../../../core/constants/mock_data.dart';

class HomeFeedScreen extends StatelessWidget {
  const HomeFeedScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Column(
          children: [
            // Greeting with orange background
            Container(
              width: double.infinity,
              color: AppColors.primary,
              padding: const EdgeInsets.all(16),
              child: const Text(
                'Good Morning, Alex!',
                style: TextStyle(
                  color: AppColors.textInverse,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            // Category Filter List
            const SizedBox(height: 16),
            const CategoryFilterList(),
            const SizedBox(height: 16),
            // Stalls ListView
            Expanded(
              child: ListView.builder(
                itemCount: MockData.stalls.length,
                itemBuilder: (context, index) {
                  final stall = MockData.stalls[index];
                  return StallCard(
                    stallName: stall.name,
                    imageUrl: stall.imageUrl,
                    rating: 4.5 + (index * 0.1),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
