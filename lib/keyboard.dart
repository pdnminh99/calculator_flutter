import 'package:flutter/material.dart';
import 'calculator.dart';

class Keyboards extends State<Calculator> {
  
  bool _isTypeOne = true;
  get _keyset => _isTypeOne ? [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+"
  ] : [
    "", "", "C", "D", "E", "F", "G", "H", "9", "0", "+"
  ];

  @override
  Widget build(BuildContext context) => getScaffold();

  Widget getScaffold() => Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: GridView.count(
        crossAxisCount: 3,
        children: getKeyset(_keyset),
      ),
    );

  List<Widget> getKeyset(List<String> keys) => [
      for (var k in keys) key(k)
    ];

  Widget key(String key) => Container(
    child: RaisedButton(
      onPressed: () {
        setState(() {
          _isTypeOne = !_isTypeOne;
        });
      },
      child: Text(
        key,
        style: TextStyle(
          fontSize: 24,
        ),
      ),
    ),
  );

}
