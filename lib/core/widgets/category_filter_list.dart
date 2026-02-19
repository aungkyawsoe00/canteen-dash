import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

class CategoryFilterList extends StatefulWidget {
  const CategoryFilterList({Key? key}) : super(key: key);

  @override
  State<CategoryFilterList> createState() => _CategoryFilterListState();
}

class _CategoryFilterListState extends State<CategoryFilterList> {
  final List<String> categories = ['Noodles', 'Rice', 'Drinks', 'Snacks'];
  late String selectedCategory;

  @override
  void initState() {
    super.initState();
    selectedCategory = categories[0];
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 50,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        itemCount: categories.length,
        itemBuilder: (context, index) {
          final category = categories[index];
          final isSelected = category == selectedCategory;

          return Padding(
            padding: const EdgeInsets.only(right: 12),
            child: FilterChip(
              label: Text(
                category,
                style: TextStyle(
                  color: isSelected
                      ? AppColors.textInverse
                      : AppColors.textPrimary,
                  fontWeight: FontWeight.w500,
                ),
              ),
              backgroundColor: isSelected ? AppColors.primary : AppColors.surfaceLight,
              side: BorderSide(
                color: isSelected ? AppColors.primary : AppColors.border,
              ),
              onSelected: (bool selected) {
                setState(() {
                  selectedCategory = category;
                });
              },
            ),
          );
        },
      ),
    );
  }
}
