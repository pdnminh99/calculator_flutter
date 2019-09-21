import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculator',
      theme: ThemeData.dark(),
      home: Calculator('Calculator'),
    );
  }
}

class Calculator extends StatefulWidget {
  Calculator(this.title);

  final String title;

  @override
  _Keyboards createState() => _Keyboards();
}

class _Keyboards extends State<Calculator> {
  
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
