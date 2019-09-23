import 'package:myapp/calculator.dart';

void cases() {
  var calc = Calculator();
  calc.setOperations("3+5");
  assert(calc.getResult() == "8");
  calc.setOperations("3+5+10");
  assert(calc.getResult() == "18");
  calc.setOperations("3x2+1");
  assert(calc.getResult() == "7");
  calc.setOperations("3x(2+1)");
  assert(calc.getResult() == "9");
  calc.setOperations("0+1");
  assert(calc.getResult() == "1");
  calc.setOperations("0/0");
  assert(calc.getResult() == "0");
  calc.setOperations("3/0");
  assert(calc.getResult() == "syntax error");
  calc.setOperations("0++");
  assert(calc.getResult() == "1");
  calc.setOperations("12--");
  assert(calc.getResult() == "11");
  calc.setOperations(".3+1");
  assert(calc.getResult() == "1.3");
  calc.setOperations("10.+1");
  assert(calc.getResult() == "11.0");
  calc.setOperations("sqrt(4)");
  assert(calc.getResult() == "2");
}

main() {
  cases();
}
