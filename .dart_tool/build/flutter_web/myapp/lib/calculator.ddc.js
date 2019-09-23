define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const calculator = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $toString = dartx.toString;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $indexOf = dartx.indexOf;
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $_get = dartx._get;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let RegExpMatchToNull = () => (RegExpMatchToNull = dart.constFn(dart.fnType(core.Null, [core.RegExpMatch])))();
  const CT = Object.create(null);
  const _displayOperations = dart.privateName(calculator, "_displayOperations");
  const _rawOperations = dart.privateName(calculator, "_rawOperations");
  const _parseToQueue = dart.privateName(calculator, "_parseToQueue");
  const _calculate = dart.privateName(calculator, "_calculate");
  const _displayResult = dart.privateName(calculator, "_displayResult");
  calculator.Calculator = class Calculator extends core.Object {
    get [_displayResult]() {
      try {
        if (this[_rawOperations] === "") return "";
        let queue = this[_parseToQueue](this[_rawOperations]);
        let result = this[_calculate](queue);
        return result[$modulo](1) === 0 ? result[$toStringAsFixed](0) : dart.toString(result);
      } catch (e$) {
        let e = dart.getThrown(e$);
        return "";
      }
    }
    reset() {
      this[_displayOperations] = "";
      this[_rawOperations] = "";
    }
    getResult() {
      return this[_displayResult];
    }
    setOperations(ops) {
      return this[_displayOperations] = ops;
    }
    convertLabel(label) {
      switch (label) {
        case "/":
        {
          return "÷";
        }
        case "*":
        {
          return "×";
        }
        case "sqrt":
        {
          return "√";
        }
        case "pi":
        {
          return "π";
        }
        default:
        {
          return label;
        }
      }
    }
    addLabel(label) {
      switch (label) {
        case "<":
        {
          this[_displayOperations] = this[_displayOperations][$substring](0, this[_displayOperations].length - 1);
          this[_rawOperations] = this[_rawOperations][$substring](0, this[_rawOperations].length - 1);
          break;
        }
        case "=":
        {
          break;
        }
        case "ln":
        case "sqrt":
        {
          this[_rawOperations] = dart.notNull(this[_rawOperations]) + (dart.str(label) + "(");
          this[_displayOperations] = dart.notNull(this[_displayOperations]) + (dart.str(this.convertLabel(label)) + "(");
          break;
        }
        default:
        {
          this[_rawOperations] = dart.notNull(this[_rawOperations]) + dart.notNull(label);
          this[_displayOperations] = dart.notNull(this[_displayOperations]) + dart.notNull(this.convertLabel(label));
          break;
        }
      }
    }
    [_parseToQueue](raw) {
      let regex = core.RegExp.new("(\\^|\\/|\\*|(\\-|\\+)?(\\d*\\.?\\d+|pi))");
      let result = JSArrayOfString().of([]);
      regex.allMatches(raw)[$forEach](dart.fn(match => {
        switch (match._get(0)) {
          case "pi":
          {
            result[$add](3.141592653589793[$toString]());
            break;
          }
          default:
          {
            result[$add](match._get(0));
            break;
          }
        }
      }, RegExpMatchToNull()));
      return result;
    }
    [_calculate](queue) {
      let result = 0.0;
      let index = queue[$indexOf]("^");
      if (index === 0 || index === dart.notNull(queue[$length]) - 1) dart.throw("SYNTAX ERROR");
      if (dart.notNull(index) > 0 && dart.notNull(index) < dart.notNull(queue[$length]) - 1) {
        queue = (() => {
          let t1 = JSArrayOfString().of([]);
          let t2 = queue[$sublist](0, dart.notNull(index) - 1);
          if (t2 != null) for (let t3 of t2)
            t1[$add](t3);
          t1[$add](math.pow(core.double.parse(queue[$_get](dart.notNull(index) - 1)), core.double.parse(queue[$_get](dart.notNull(index) + 1)))[$toString]());
          let t4 = queue[$sublist](dart.notNull(index) + 2);
          if (t4 != null) for (let t5 of t4)
            t1[$add](t5);
          return t1;
        })();
      }
      while (dart.notNull(queue[$indexOf]("*")) >= 0 || dart.notNull(queue[$indexOf]("/")) >= 0) {
        index = -1;
        for (let i of queue) {
          if (i === "*" || i === "/") {
            index = queue[$indexOf](i);
            break;
          }
        }
        if (dart.notNull(index) <= 0) dart.throw("SYNTAX ERROR");
        queue = (() => {
          let t6 = JSArrayOfString().of([]);
          let t7 = queue[$sublist](0, dart.notNull(index) - 1);
          if (t7 != null) for (let t8 of t7)
            t6[$add](t8);
          if (queue[$_get](index) === "*")
            t6[$add](dart.str(dart.notNull(core.double.parse(queue[$_get](dart.notNull(index) - 1))) * dart.notNull(core.double.parse(queue[$_get](dart.notNull(index) + 1)))));
          else
            t6[$add](dart.str(dart.notNull(core.double.parse(queue[$_get](dart.notNull(index) - 1))) / dart.notNull(core.double.parse(queue[$_get](dart.notNull(index) + 1)))));
          let t9 = queue[$sublist](dart.notNull(index) + 2);
          if (t9 != null) for (let t10 of t9)
            t6[$add](t10);
          return t6;
        })();
      }
      for (let numb of queue) {
        result = result + dart.notNull(core.double.parse(numb));
      }
      return result;
    }
    toString(opts) {
      let isRaw = opts && 'isRaw' in opts ? opts.isRaw : false;
      return dart.test(isRaw) ? this[_rawOperations] : this[_displayOperations];
    }
  };
  (calculator.Calculator.new = function() {
    this[_displayOperations] = "";
    this[_rawOperations] = "";
    ;
  }).prototype = calculator.Calculator.prototype;
  dart.addTypeTests(calculator.Calculator);
  dart.setMethodSignature(calculator.Calculator, () => ({
    __proto__: dart.getMethods(calculator.Calculator.__proto__),
    reset: dart.fnType(dart.void, []),
    getResult: dart.fnType(core.String, []),
    setOperations: dart.fnType(core.String, [core.String]),
    convertLabel: dart.fnType(core.String, [core.String]),
    addLabel: dart.fnType(dart.void, [core.String]),
    [_parseToQueue]: dart.fnType(core.List$(core.String), [core.String]),
    [_calculate]: dart.fnType(core.double, [core.List$(core.String)]),
    toString: dart.fnType(core.String, [], {isRaw: core.bool}),
    [$toString]: dart.fnType(core.String, [], {isRaw: core.bool})
  }));
  dart.setGetterSignature(calculator.Calculator, () => ({
    __proto__: dart.getGetters(calculator.Calculator.__proto__),
    [_displayResult]: core.String
  }));
  dart.setLibraryUri(calculator.Calculator, "package:myapp/calculator.dart");
  dart.setFieldSignature(calculator.Calculator, () => ({
    __proto__: dart.getFields(calculator.Calculator.__proto__),
    [_displayOperations]: dart.fieldType(core.String),
    [_rawOperations]: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(calculator.Calculator, ['toString']);
  dart.trackLibraries("packages/myapp/calculator", {
    "package:myapp/calculator.dart": calculator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calculator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOM,YAAI,AAAe,yBAAG,IAAI,MAAO;AAC7B,oBAAQ,oBAAc;AACtB,qBAAS,iBAAW,KAAK;AAC7B,cAAO,AAAO,AAAI,OAAL,UAAG,OAAK,IAAI,AAAO,MAAD,mBAAiB,KAAY,cAAP,MAAM;;YACpD;AACP,cAAO;;IAEX;;MAGO,2BAAqB;MACrB,uBAAiB;IACxB;;AAEsB;IAAc;kBAGR;AAAQ,YAAK,4BAAqB,GAAG;;iBAEtC;AACzB,cAAQ,KAAK;;;AAET,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO,MAAK;;;IAElB;aAEqB;cACX,KAAK;;;UAET,2BACI,AAAmB,qCAAU,GAAG,AAAmB,AAAO,kCAAE;UAChE,uBAAiB,AAAe,iCAAU,GAAG,AAAe,AAAO,8BAAE;AACrE;;;;AAEA;;;;;UAGA,uBAAe,aAAf,yBAA2B,SAAP,KAAK;UACzB,2BAAmB,aAAnB,6BAA+C,SAAtB,kBAAa,KAAK,KAAE;AAC7C;;;;UAEA,uBAAe,aAAf,qCAAkB,KAAK;UACvB,2BAAmB,aAAnB,yCAAsB,kBAAa,KAAK;AACxC;;;IAEN;oBAEkC;AAC5B,kBAAQ,gBAAO;AACf,mBAAS;MACb,AAAM,AAAgB,KAAjB,YAAY,GAAG,YAAU,QAAC;gBACrB,AAAK,KAAA,MAAC;;;YAEV,AAAO,MAAD,OAAa;AACnB;;;;YAEA,AAAO,MAAD,OAAK,AAAK,KAAA,MAAC;AACjB;;;;AAGN,YAAO,OAAM;IACf;iBAE+B;AACtB,mBAAS;AACZ,kBAAQ,AAAM,KAAD,WAAS;AAC1B,UAAI,AAAM,KAAD,KAAI,KAAK,AAAM,KAAD,KAAiB,aAAb,AAAM,KAAD,aAAU,GAAG,WAAM;AACnD,UAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAgB,aAAb,AAAM,KAAD,aAAU;QACtC;;mBACM,AAAM,KAAD,WAAS,GAAS,aAAN,KAAK,IAAG;;;mBAC7B,AAEK,SADW,kBAAM,AAAK,KAAA,QAAO,aAAN,KAAK,IAAG,KAAY,kBAAM,AAAK,KAAA,QAAO,aAAN,KAAK,IAAG;mBAEhE,AAAM,KAAD,WAAe,aAAN,KAAK,IAAG;;;;;;AAG9B,aAA0B,aAAnB,AAAM,KAAD,WAAS,SAAQ,KAAwB,aAAnB,AAAM,KAAD,WAAS,SAAQ;QACtD,QAAQ,CAAC;iBACA,IAAK,MAAK;AACjB,cAAI,AAAE,CAAD,KAAI,OAAO,AAAE,CAAD,KAAI;YACnB,QAAQ,AAAM,KAAD,WAAS,CAAC;AACvB;;;AAGJ,YAAU,aAAN,KAAK,KAAI,GAAG,WAAM;QACtB;;mBACM,AAAM,KAAD,WAAS,GAAS,aAAN,KAAK,IAAG;;;AAC7B,cAAI,AAAK,AAAQ,KAAR,QAAC,KAAK,MAAK;qBAEpB,SADoC,aAAxB,kBAAM,AAAK,KAAA,QAAO,aAAN,KAAK,IAAG,oBAAa,kBAAM,AAAK,KAAA,QAAO,aAAN,KAAK,IAAG;;qBAEK,SAAlC,aAAxB,kBAAM,AAAK,KAAA,QAAO,aAAN,KAAK,IAAG,oBAAa,kBAAM,AAAK,KAAA,QAAO,aAAN,KAAK,IAAG;mBAC7D,AAAM,KAAD,WAAe,aAAN,KAAK,IAAG;;;;;;AAG9B,eAAS,OAAQ,MAAK;QACpB,SAAA,AAAO,MAAD,gBAAW,kBAAM,IAAI;;AAE7B,YAAO,OAAM;IACf;;UAGsB;AAClB,4BAAK,IAAG,uBAAiB;IAAkB;;;IAlHxC,2BAAqB;IACrB,uBAAiB;;EAkH1B","file":"calculator.ddc.js"}');
  // Exports:
  return {
    calculator: calculator
  };
});

//# sourceMappingURL=calculator.ddc.js.map
