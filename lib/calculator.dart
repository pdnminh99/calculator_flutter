class Calculator {
  String _displayOperations = "";
  String _rawOperations = "";
  String get _displayResult {
    return "";
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

  @override
  String toString({bool isRaw: false}) =>
      isRaw ? _rawOperations : _displayOperations;
}
