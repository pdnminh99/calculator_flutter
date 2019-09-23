import 'package:flutter/material.dart';
import 'package:myapp/calculator.dart';
import 'main.dart';

class Keyboards extends State<MyApp> {
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
          "\u{00F7}",
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
          "\u{221A}",
          "\u{3C0}",
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
            switch (result) {
              case 'theme':
                this.isDarkTheme = !this.isDarkTheme;
                break;
              default:
                break;
            }
          });
        },
        itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
          const PopupMenuItem<String>(
            value: "theme",
            child: Text('Switch Theme'),
          ),
          const PopupMenuItem<String>(
            value: "history",
            child: Text('History'),
          ),
        ],
      );

  Widget button(String character) {
    switch (character) {
      case "<":
        return Container(
          child: IconButton(
            icon: Icon(Icons.arrow_back),
            tooltip: "Delete label",
            onPressed: () {
              setState(() {
                this.calc.addLabel(character);
              });
            },
          ),
        );
      default:
        return Container(
          child: FlatButton(
            onPressed: () {
              setState(() {
                this.calc.addLabel(character);
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
