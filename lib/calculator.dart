class Calculator {
  String _displayOperations = "";
  String get _displayResult {
    return "";
  }

  String getResult() => _displayResult;

  // this function is for testing purpose.
  String setOperations(String ops) => this._displayOperations = ops;

  void addLabel(String label) {
    switch (label) {
      case "<":
        _displayOperations =
            _displayOperations.substring(0, _displayOperations.length - 1);
        break;
      case "=":
        break;
      case "ln":
      case "\u{221A}":
        _displayOperations += "$label(";
        break;
      default:
        _displayOperations += label;
        break;
    }
  }

  @override
  String toString() => _displayOperations;
}
