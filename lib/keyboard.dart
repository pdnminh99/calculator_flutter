import 'package:flutter/material.dart';
import 'calculator.dart';

class Keyboards extends State<Calculator> {
  String _selection;
  bool _isTypeOne = true;

  get _keyset => _isTypeOne
      ? [
          "7",
          "8",
          "9",
          "<",
          "4",
          "5",
          "6",
          "/",
          "1",
          "2",
          "3",
          "x",
          "0",
          ".",
          "=",
          "+"
        ]
      : [
          "sin",
          "cos",
          "tan",
          "<",
          "ln",
          "log",
          "sqrt",
          "pi",
          "(",
          ")",
          "^",
          "e",
        ];

  @override
  Widget build(BuildContext context) => getScaffold();

  Widget getScaffold() => Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        actions: <Widget>[popUpButton()],
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Text("Hello World",
                style: TextStyle(
                  letterSpacing: 2,
                  fontSize: 30,
                )),
            Expanded(
                child: GridView.count(
                    crossAxisCount: 4, children: getKeyset(_keyset)))
          ],
        ),
      ));

  List<Widget> getKeyset(List<String> keys) => [for (var k in keys) button(k)];

  Widget popUpButton() => PopupMenuButton<String>(
        onSelected: (String result) {
          setState(() {
            _selection = result;
          });
        },
        itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
          const PopupMenuItem<String>(
            value: "theme",
            child: Text('Switch theme'),
          ),
          const PopupMenuItem<String>(
            value: "history",
            child: Text('History'),
          ),
        ],
      );

  Widget button(String character) => Container(
        child: RawMaterialButton(
          onPressed: () {
            setState(() {
              _isTypeOne = !_isTypeOne;
            });
          },
          child: Text(
            character,
            style: TextStyle(
              fontSize: 24,
            ),
          ),
        ),
      );
}
