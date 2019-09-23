import 'package:flutter/material.dart';
import 'package:myapp/calculator.dart';
import 'main.dart';

class Keyboards extends State<MyApp> {
  String _selection;
  bool _isTypeOne = true;
  var calc = Calculator();
  String _displayText = "";
  String _displayResult = "";
  bool isDarkTheme = true;

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
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: (() => isDarkTheme ? ThemeData.dark() : ThemeData.light())(),
      home: getScaffold('Calculator'),
    );
  }

  Widget getScaffold(String title) => Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.lightbulb_outline),
        title: Text(title),
        actions: <Widget>[popUpButton(), switchKeyboardAction()],
      ),
      body: Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Card(
                child: Column(
              children: <Widget>[
                Text(
                  "${calc.toString()}",
                  softWrap: false,
                  textAlign: TextAlign.right,
                  overflow: TextOverflow.fade,
                  style: TextStyle(
                    fontSize: 40,
                  ),
                ),
                Text(
                  "${calc.getResult()}",
                  softWrap: false,
                  textAlign: TextAlign.right,
                  overflow: TextOverflow.fade,
                  style: TextStyle(
                    fontSize: 40,
                  ),
                ),
              ],
            )),
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
            if (result == "theme") {
              this.isDarkTheme = !this.isDarkTheme;
            }
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
                color: (() => isOperands(character)
                    ? Colors.blue
                    : this.isDarkTheme ? Colors.white : Colors.black)()),
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
