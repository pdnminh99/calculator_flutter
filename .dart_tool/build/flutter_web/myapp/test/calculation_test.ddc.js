define(['dart_sdk', 'packages/myapp/calculator'], function(dart_sdk, packages__myapp__calculator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const calculator = packages__myapp__calculator.calculator;
  const calculation_test = Object.create(dart.library);
  const CT = Object.create(null);
  calculation_test.cases = function cases() {
    let calc = new calculator.Calculator.new();
    calc.setOperations("3+5");
    if (!(calc.getResult() === "8")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 6, 10, "calc.getResult() == \"8\"");
    calc.setOperations("3+5+10");
    if (!(calc.getResult() === "18")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 8, 10, "calc.getResult() == \"18\"");
    calc.setOperations("3x2+1");
    if (!(calc.getResult() === "7")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 10, 10, "calc.getResult() == \"7\"");
    calc.setOperations("3x(2+1)");
    if (!(calc.getResult() === "9")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 12, 10, "calc.getResult() == \"9\"");
    calc.setOperations("0+1");
    if (!(calc.getResult() === "1")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 14, 10, "calc.getResult() == \"1\"");
    calc.setOperations("0/0");
    if (!(calc.getResult() === "0")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 16, 10, "calc.getResult() == \"0\"");
    calc.setOperations("3/0");
    if (!(calc.getResult() === "syntax error")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 18, 10, "calc.getResult() == \"syntax error\"");
    calc.setOperations("0++");
    if (!(calc.getResult() === "1")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 20, 10, "calc.getResult() == \"1\"");
    calc.setOperations("12--");
    if (!(calc.getResult() === "11")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 22, 10, "calc.getResult() == \"11\"");
    calc.setOperations(".3+1");
    if (!(calc.getResult() === "1.3")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 24, 10, "calc.getResult() == \"1.3\"");
    calc.setOperations("10.+1");
    if (!(calc.getResult() === "11.0")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 26, 10, "calc.getResult() == \"11.0\"");
    calc.setOperations("sqrt(4)");
    if (!(calc.getResult() === "2")) dart.assertFailed(null, "org-dartlang-app:///test/calculation_test.dart", 28, 10, "calc.getResult() == \"2\"");
  };
  calculation_test.main = function main() {
    calculation_test.cases();
  };
  dart.trackLibraries("test/calculation_test", {
    "org-dartlang-app:///test/calculation_test.dart": calculation_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calculation_test.dart"],"names":[],"mappings":";;;;;;;;;AAGM,eAAO;IACX,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;IAC3B,AAAK,IAAD,eAAe;UACZ,AAAK,AAAY,IAAb,iBAAgB;EAC7B;;IAGE;EACF","file":"calculation_test.ddc.js"}');
  // Exports:
  return {
    test__calculation_test: calculation_test
  };
});

//# sourceMappingURL=calculation_test.ddc.js.map
