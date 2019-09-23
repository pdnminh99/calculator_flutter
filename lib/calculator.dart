class Calculator {
  var _displayOperations = "";
  var _displayResult = "";

  String getResult() => _displayResult;

  void addLabel(String label) => _displayOperations += label;

  @override
  String toString() => _displayOperations;
}
