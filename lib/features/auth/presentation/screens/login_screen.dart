import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/widgets/primary_button.dart';
import '../../../../core/widgets/custom_text_field.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  late TextEditingController studentIdController;
  late TextEditingController passwordController;

  @override
  void initState() {
    super.initState();
    studentIdController = TextEditingController();
    passwordController = TextEditingController();
  }

  @override
  void dispose() {
    studentIdController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Logo
              Container(
                width: 80,
                height: 80,
                decoration: BoxDecoration(
                  color: AppColors.primary,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: const Icon(
                  Icons.restaurant,
                  size: 40,
                  color: AppColors.textInverse,
                ),
              ),
              const SizedBox(height: 32),
              // Title
              const Text(
                'UNIVERSITY PORTAL',
                style: TextStyle(
                  color: AppColors.textPrimary,
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                'CanteenDash',
                style: TextStyle(
                  color: AppColors.textSecondary,
                  fontSize: 14,
                ),
              ),
              const SizedBox(height: 48),
              // Student ID Input
              CustomTextField(
                hintText: 'Student ID',
                prefixIcon: Icons.person,
                controller: studentIdController,
              ),
              const SizedBox(height: 16),
              // Password Input
              CustomTextField(
                hintText: 'Password',
                prefixIcon: Icons.lock,
                obscureText: true,
                controller: passwordController,
              ),
              const SizedBox(height: 32),
              // Login Button
              PrimaryButton(
                text: 'Login',
                onPressed: () {
                  // Handle login logic here
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Login pressed')),
                  );
                },
              ),
              const SizedBox(height: 16),
              GestureDetector(
                onTap: () {
                  // Handle forgot password
                },
                child: Text(
                  'Forgot Password?',
                  style: TextStyle(
                    color: AppColors.primary,
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
