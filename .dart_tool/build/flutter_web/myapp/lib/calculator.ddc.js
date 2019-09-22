define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const button = packages__flutter__material.src__material__button;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const keyboard = Object.create(dart.library);
  const calculator = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let PopupMenuButtonOfString = () => (PopupMenuButtonOfString = dart.constFn(popup_menu.PopupMenuButton$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let PopupMenuItemOfString = () => (PopupMenuItemOfString = dart.constFn(popup_menu.PopupMenuItem$(core.String)))();
  let PopupMenuEntryOfString = () => (PopupMenuEntryOfString = dart.constFn(popup_menu.PopupMenuEntry$(core.String)))();
  let JSArrayOfPopupMenuEntryOfString = () => (JSArrayOfPopupMenuEntryOfString = dart.constFn(_interceptors.JSArray$(PopupMenuEntryOfString())))();
  let ListOfPopupMenuEntryOfString = () => (ListOfPopupMenuEntryOfString = dart.constFn(core.List$(PopupMenuEntryOfString())))();
  let BuildContextToListOfPopupMenuEntryOfString = () => (BuildContextToListOfPopupMenuEntryOfString = dart.constFn(dart.fnType(ListOfPopupMenuEntryOfString(), [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Switch theme"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C16 || CT.C16,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "theme"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "History"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C18 || CT.C18,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "history"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    }
  });
  const _selection = dart.privateName(keyboard, "_selection");
  const _isTypeOne = dart.privateName(keyboard, "_isTypeOne");
  const _keyset = dart.privateName(keyboard, "_keyset");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C16;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_textStyle = dart.privateName(popup_menu, "PopupMenuItem.textStyle");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C15;
  let C18;
  let C17;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C32;
  let C31;
  const Calculator_title = dart.privateName(calculator, "Calculator.title");
  calculator.Calculator = class Calculator extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new keyboard.Keyboards.new();
    }
  };
  (calculator.Calculator.new = function(title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    calculator.Calculator.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = calculator.Calculator.prototype;
  dart.addTypeTests(calculator.Calculator);
  const title$ = Calculator_title;
  dart.setMethodSignature(calculator.Calculator, () => ({
    __proto__: dart.getMethods(calculator.Calculator.__proto__),
    createState: dart.fnType(keyboard.Keyboards, [])
  }));
  dart.setLibraryUri(calculator.Calculator, "package:myapp/calculator.dart");
  dart.setFieldSignature(calculator.Calculator, () => ({
    __proto__: dart.getFields(calculator.Calculator.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  keyboard.Keyboards = class Keyboards extends framework.State$(calculator.Calculator) {
    get [_keyset]() {
      return dart.test(this[_isTypeOne]) ? JSArrayOfString().of(["7", "8", "9", "<", "4", "5", "6", "/", "1", "2", "3", "x", "0", ".", "=", "+"]) : JSArrayOfString().of(["sin", "cos", "tan", "<", "ln", "log", "sqrt", "pi", "(", ")", "^", "e"]);
    }
    build(context) {
      return this.getScaffold();
    }
    getScaffold() {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), actions: JSArrayOfWidget().of([this.popUpButton()]), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new scroll_view.GridView.count({crossAxisCount: 4, children: this.getKeyset(ListOfString()._check(this[_keyset])), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
    getKeyset(keys) {
      return (() => {
        let t0 = JSArrayOfWidget().of([]);
        for (let k of keys)
          t0[$add](this.button(k));
        return t0;
      })();
    }
    popUpButton() {
      return new (PopupMenuButtonOfString()).new({onSelected: dart.fn(result => {
          this.setState(dart.fn(() => {
            this[_selection] = result;
          }, VoidToNull()));
        }, StringToNull()), itemBuilder: dart.fn(context => JSArrayOfPopupMenuEntryOfString().of([C15 || CT.C15, C17 || CT.C17]), BuildContextToListOfPopupMenuEntryOfString()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
    }
    button(character) {
      return new container.Container.new({child: new button.RawMaterialButton.new({onPressed: dart.fn(() => {
            this.setState(dart.fn(() => {
              this[_isTypeOne] = !dart.test(this[_isTypeOne]);
            }, VoidToNull()));
          }, VoidToNull()), child: new text.Text.new(character, {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
    display() {
    }
  };
  (keyboard.Keyboards.new = function() {
    this[_selection] = null;
    this[_isTypeOne] = true;
    keyboard.Keyboards.__proto__.new.call(this);
    ;
  }).prototype = keyboard.Keyboards.prototype;
  dart.addTypeTests(keyboard.Keyboards);
  dart.setMethodSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getMethods(keyboard.Keyboards.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getScaffold: dart.fnType(framework.Widget, []),
    getKeyset: dart.fnType(core.List$(framework.Widget), [core.List$(core.String)]),
    popUpButton: dart.fnType(framework.Widget, []),
    button: dart.fnType(framework.Widget, [core.String]),
    display: dart.fnType(framework.Widget, [])
  }));
  dart.setGetterSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getGetters(keyboard.Keyboards.__proto__),
    [_keyset]: dart.dynamic
  }));
  dart.setLibraryUri(keyboard.Keyboards, "package:myapp/keyboard.dart");
  dart.setFieldSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getFields(keyboard.Keyboards.__proto__),
    [_selection]: dart.fieldType(core.String),
    [_isTypeOne]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/myapp/calculator", {
    "package:myapp/keyboard.dart": keyboard,
    "package:myapp/calculator.dart": calculator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calculator.dart","keyboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;;AAGc;IAAW;;wCALtB;;;AAAhB;;EAAsB;;;;;;;;;;;;;;ACIP,2CACT,sBACE,KAAK,KAAK,KAAK,KACf,KAAK,KAAK,KAAK,KACf,KAAK,KAAK,KAAK,KACf,KAAK,KAAK,KAAK,QAEjB,sBACE,OAAO,OAAO,OAAO,KACrB,MAAM,OAAO,QAAQ,MACrB,KAAK,KAAK,KAAK;IAChB;UAGmB;AAAY;IAAa;;AAE3B,gDACV,+BACC,kBAAK,AAAO,oFACF,sBAAC,mFAEL,gDACG,aACN,qCAAU;IAEvB;cAE+B;AAAS;;AAAC,iBAAS,IAAK,KAAI;mBAAE,YAAO,CAAC;;;IAAE;;AAEpD,8DACN,QAAQ;UAClB,cAAS;YACP,mBAAa,MAAM;;yCAGV,QAAc,WAAoC;IAUhE;WAEgB;AAAc,iDACtB,6CACM;YACT,cAAS;cACP,mBAAa,WAAC;;mCAGX,kBACL,SAAS,UACF,wCACK;IAIjB;;IAIL;;;IApEO;IACF,mBAAa;;;EAoEpB","file":"calculator.ddc.js"}');
  // Exports:
  return {
    keyboard: keyboard,
    calculator: calculator
  };
});

//# sourceMappingURL=calculator.ddc.js.map
