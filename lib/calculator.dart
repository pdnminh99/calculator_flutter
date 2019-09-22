import 'package:flutter/material.dart';
import 'keyboard.dart';

class Calculator extends StatefulWidget {
  Calculator(this.title);

  final String title;

  @override
  Keyboards createState() => Keyboards();
}