import 'package:flutter/material.dart';
import 'calculator.dart';

class Keyboards extends State<Calculator> {
  String _selection;
  bool _isTypeOne = true;
  String _displayText = "";

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
        leading: Icon(Icons.lightbulb_outline),
        title: Text(widget.title),
        actions: <Widget>[popUpButton(), switchKeyboardAction()],
      ),
      body: Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Card(
              child: Text(
                "$_displayText",
                softWrap: true,
                maxLines: 3,
                overflow: TextOverflow.fade,
                style: TextStyle(
                  fontSize: 40,
                ),
              ),
            ),
            Expanded(
                child: GridView.count(
                    crossAxisCount: 4, children: getKeyset(_keyset)))
          ],
        ),
      ));

  List<Widget> getKeyset(List<String> keys) => [for (var k in keys) button(k)];

  Widget switchKeyboardAction() => IconButton(
        icon: Icon(Icons.loop),
        tooltip: "Toggle between keyboards",
        onPressed: () {
          setState(() {
            _isTypeOne = !_isTypeOne;
          });
        },
      );

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
        child: FlatButton(
          onPressed: () {
            setState(() {
              buttonClicked(character);
            });
          },
          child: Text(
            character,
            style: TextStyle(
              fontSize: 30,
              color: (() => isOperands(character) ? Colors.blue : Colors.white)()
            ),
          ),
        ),
      );

  void buttonClicked(String buttonType) {
    switch (buttonType) {
      case "<":
        _displayText = _displayText.substring(0, _displayText.length - 1);
        break;
      case "=":
        break;
      default:
        _displayText += buttonType;
        break;
    }
  }

  bool isOperands(String buttonType) {
      switch (buttonType) {
        case "<":
        case "/":
        case "x":
        case "+":
        case "=":
        case "-":
          return true;
        default:
          return false;
      }
    }
}
