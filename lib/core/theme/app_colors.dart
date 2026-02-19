import 'package:flutter/material.dart';

class AppColors {
  // Primary Colors
  static const Color primary = Color(0xFFF27D16);
  static const Color primaryDark = Color(0xFFE86E00);
  static const Color primaryLight = Color(0xFFFFB366);

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
