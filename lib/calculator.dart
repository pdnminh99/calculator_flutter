class Calculator {
  var _displayOperations = "";
  var _displayResult = "";

  String getResult() => _displayResult;

  void addLabel(String label) {
    switch (label) {
      case "<":
        _displayOperations =
            _displayOperations.substring(0, _displayOperations.length - 1);
        break;
      case "=":
        break;
      default:
        _displayOperations += label;
        break;
    }
  }

  @override
  String toString() => _displayOperations;
}
