import 'package:flutter/material.dart';
import 'calculator.dart';

bool isDarkTheme = true;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculator',
      theme: (() => isDarkTheme ? ThemeData.light() : ThemeData.light())(),
      home: Calculator('Calculator'),
    );
  }

}