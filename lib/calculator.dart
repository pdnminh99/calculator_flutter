import 'dart:math' as math;

class Calculator {
  String _displayOperations = "";
  String _rawOperations = "";
  String get _displayResult {
    try {
      if (_rawOperations == "") return "";
      var queue = _parseToQueue(_rawOperations);
      var result = _calculate(queue);
      return result % 1 == 0 ? result.toStringAsFixed(0) : result.toString();
    } catch (e) {
      return "";
    }
  }

  void reset() {
    this._displayOperations = "";
    this._rawOperations = "";
  }

  String getResult() => _displayResult;

  // this function is for testing purpose.
  String setOperations(String ops) => this._displayOperations = ops;

  String convertLabel(String label) {
    switch (label) {
      case "/":
        return "\u{00F7}";
      case "*":
        return "\u{00D7}";
      case "sqrt":
        return "\u{221A}";
      case "pi":
        return "\u{3C0}";
      default:
        return label;
    }
  }

  void addLabel(String label) {
    switch (label) {
      case "<":
        _displayOperations =
            _displayOperations.substring(0, _displayOperations.length - 1);
        _rawOperations = _rawOperations.substring(0, _rawOperations.length - 1);
        break;
      case "=":
        break;
      case "ln":
      case "sqrt":
        _rawOperations += "$label(";
        _displayOperations += "${convertLabel(label)}(";
        break;
      default:
        _rawOperations += label;
        _displayOperations += convertLabel(label);
        break;
    }
  }

  List<String> _parseToQueue(String raw) {
    var regex = RegExp(r'(\^|\/|\*|(\-|\+)?(\d*\.?\d+|pi))');
    var result = List<String>();
    regex.allMatches(raw).forEach((match) {
      switch (match[0]) {
        case "pi":
          result.add(math.pi.toString());
          break;
        default:
          result.add(match[0]);
          break;
      }
    });
    return result;
  }

  double _calculate(List<String> queue) {
    double result = 0;
    var index = queue.indexOf('^');
    if (index == 0 || index == queue.length - 1) throw "SYNTAX ERROR";
    if (index > 0 && index < queue.length - 1) {
      queue = [
        ...?queue.sublist(0, index - 1),
        math
            .pow(double.parse(queue[index - 1]), double.parse(queue[index + 1]))
            .toString(),
        ...?queue.sublist(index + 2)
      ];
    }
    while (queue.indexOf('*') >= 0 || queue.indexOf('/') >= 0) {
      index = -1;
      for (var i in queue) {
        if (i == '*' || i == '/') {
          index = queue.indexOf(i);
          break;
        }
      }
      if (index <= 0) throw "SYNTAX ERROR";
      queue = [
        ...?queue.sublist(0, index - 1),
        if (queue[index] == '*')
          "${double.parse(queue[index - 1]) * double.parse(queue[index + 1])}"
        else
          "${double.parse(queue[index - 1]) / double.parse(queue[index + 1])}",
        ...?queue.sublist(index + 2)
      ];
    }
    for (var numb in queue) {
      result += double.parse(numb);
    }
    return result;
  }

  @override
  String toString({bool isRaw: false}) =>
      isRaw ? _rawOperations : _displayOperations;
}
