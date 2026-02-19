import 'package:flutter/material.dart';
import 'features/auth/presentation/screens/login_screen.dart';

void main() {
  runApp(const CanteenDashApp());
}

class CanteenDashApp extends StatelessWidget {
  const CanteenDashApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CanteenDash',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        primarySwatch: Colors.orange,
      ),
      home: const LoginScreen(),
    );
  }
}
