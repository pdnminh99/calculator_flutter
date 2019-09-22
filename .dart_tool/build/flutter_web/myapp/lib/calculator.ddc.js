define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icons = packages__flutter__material.src__material__icons;
  const card = packages__flutter__material.src__material__card;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const colors = packages__flutter__material.src__material__colors;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const keyboard = Object.create(dart.library);
  const calculator = Object.create(dart.library);
  const $add = dartx.add;
  const $substring = dartx.substring;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let PopupMenuButtonOfString = () => (PopupMenuButtonOfString = dart.constFn(popup_menu.PopupMenuButton$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let PopupMenuItemOfString = () => (PopupMenuItemOfString = dart.constFn(popup_menu.PopupMenuItem$(core.String)))();
  let PopupMenuEntryOfString = () => (PopupMenuEntryOfString = dart.constFn(popup_menu.PopupMenuEntry$(core.String)))();
  let JSArrayOfPopupMenuEntryOfString = () => (JSArrayOfPopupMenuEntryOfString = dart.constFn(_interceptors.JSArray$(PopupMenuEntryOfString())))();
  let ListOfPopupMenuEntryOfString = () => (ListOfPopupMenuEntryOfString = dart.constFn(core.List$(PopupMenuEntryOfString())))();
  let BuildContextToListOfPopupMenuEntryOfString = () => (BuildContextToListOfPopupMenuEntryOfString = dart.constFn(dart.fnType(ListOfPopupMenuEntryOfString(), [framework.BuildContext])))();
  let VoidToColor = () => (VoidToColor = dart.constFn(dart.fnType(ui.Color, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 48,
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
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 40,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
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
    get C47() {
      return C47 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C48 || CT.C48,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "theme"
      });
    },
    get C50() {
      return C50 = dart.const({
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
    get C49() {
      return C49 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C50 || CT.C50,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "history"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    }
  });
  const _selection = dart.privateName(keyboard, "_selection");
  const _isTypeOne = dart.privateName(keyboard, "_isTypeOne");
  const _displayText = dart.privateName(keyboard, "_displayText");
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
  let C4;
  let C3;
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C12;
  let C11;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C46;
  let C43;
  let C42;
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
  let C48;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_textStyle = dart.privateName(popup_menu, "PopupMenuItem.textStyle");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C47;
  let C50;
  let C49;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C64;
  let C63;
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
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new icon.Icon.new(icons.Icons.lightbulb_outline, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), actions: JSArrayOfWidget().of([this.popUpButton(), this.switchKeyboardAction()]), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), body: new container.Container.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new card.Card.new({child: new text.Text.new(dart.str(this[_displayText]), {softWrap: true, maxLines: 3, overflow: paragraph.TextOverflow.fade, style: new text_style.TextStyle.new({fontSize: 40.0}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new basic.Expanded.new({child: new scroll_view.GridView.count({crossAxisCount: 4, children: this.getKeyset(ListOfString()._check(this[_keyset])), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
    getKeyset(keys) {
      return (() => {
        let t0 = JSArrayOfWidget().of([]);
        for (let k of keys)
          t0[$add](this.button(k));
        return t0;
      })();
    }
    switchKeyboardAction() {
      return new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.loop, {$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), tooltip: "Toggle between keyboards", onPressed: dart.fn(() => {
          this.setState(dart.fn(() => {
            this[_isTypeOne] = !dart.test(this[_isTypeOne]);
          }, VoidToNull()));
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
    popUpButton() {
      return new (PopupMenuButtonOfString()).new({onSelected: dart.fn(result => {
          this.setState(dart.fn(() => {
            this[_selection] = result;
          }, VoidToNull()));
        }, StringToNull()), itemBuilder: dart.fn(context => JSArrayOfPopupMenuEntryOfString().of([C47 || CT.C47, C49 || CT.C49]), BuildContextToListOfPopupMenuEntryOfString()), $creationLocationd_0dea112b090073317d4: C51 || CT.C51});
    }
    button(character) {
      return new container.Container.new({child: new flat_button.FlatButton.new({onPressed: dart.fn(() => {
            this.setState(dart.fn(() => {
              this.buttonClicked(character);
            }, VoidToNull()));
          }, VoidToNull()), child: new text.Text.new(character, {style: new text_style.TextStyle.new({fontSize: 30.0, color: dart.fn(() => dart.test(this.isOperands(character)) ? colors.Colors.blue : colors.Colors.white, VoidToColor())()}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63});
    }
    buttonClicked(buttonType) {
      switch (buttonType) {
        case "<":
        {
          this[_displayText] = this[_displayText][$substring](0, this[_displayText].length - 1);
          break;
        }
        case "=":
        {
          break;
        }
        default:
        {
          this[_displayText] = dart.notNull(this[_displayText]) + dart.notNull(buttonType);
          break;
        }
      }
    }
    isOperands(buttonType) {
      switch (buttonType) {
        case "<":
        case "/":
        case "x":
        case "+":
        case "=":
        case "-":
        {
          return true;
        }
        default:
        {
          return false;
        }
      }
    }
  };
  (keyboard.Keyboards.new = function() {
    this[_selection] = null;
    this[_isTypeOne] = true;
    this[_displayText] = "";
    keyboard.Keyboards.__proto__.new.call(this);
    ;
  }).prototype = keyboard.Keyboards.prototype;
  dart.addTypeTests(keyboard.Keyboards);
  dart.setMethodSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getMethods(keyboard.Keyboards.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getScaffold: dart.fnType(framework.Widget, []),
    getKeyset: dart.fnType(core.List$(framework.Widget), [core.List$(core.String)]),
    switchKeyboardAction: dart.fnType(framework.Widget, []),
    popUpButton: dart.fnType(framework.Widget, []),
    button: dart.fnType(framework.Widget, [core.String]),
    buttonClicked: dart.fnType(dart.void, [core.String]),
    isOperands: dart.fnType(core.bool, [core.String])
  }));
  dart.setGetterSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getGetters(keyboard.Keyboards.__proto__),
    [_keyset]: dart.dynamic
  }));
  dart.setLibraryUri(keyboard.Keyboards, "package:myapp/keyboard.dart");
  dart.setFieldSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getFields(keyboard.Keyboards.__proto__),
    [_selection]: dart.fieldType(core.String),
    [_isTypeOne]: dart.fieldType(core.bool),
    [_displayText]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/myapp/calculator", {
    "package:myapp/keyboard.dart": keyboard,
    "package:myapp/calculator.dart": calculator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calculator.dart","keyboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;;AAGc;IAAW;;wCALtB;;;AAAhB;;EAAsB;;;;;;;;;;;;;;ACIP,2CACT,sBACE,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,QAEF,sBACE,OACA,OACA,OACA,KACA,MACA,OACA,QACA,MACA,KACA,KACA,KACA;IACD;UAGmB;AAAY;IAAa;;AAE3B,gDACZ,iCACG,kBAAW,8FACb,kBAAK,AAAO,oFACF,sBAAC,oBAAe,4FAE7B,oCACG,0CACkC,2CACrB,sBAChB,0BACS,kBACU,SAAb,gCACQ,gBACA,aACa,oCAChB,wCACK,0HAIhB,+BACoB,gDACI,aAAa,qCAAU;IAGnD;cAE8B;AAAS;;AAAC,iBAAS,IAAK,KAAI;mBAAE,YAAO,CAAC;;;IAAE;;AAE3C,mDACrB,kBAAW,qFACR,uCACE;UACT,cAAS;YACP,mBAAa,WAAC;;;IAGnB;;AAEmB,8DACN,QAAQ;UAClB,cAAS;YACP,mBAAa,MAAM;;yCAGV,QAAc,WAAoC;IAUhE;WAEgB;AAAc,iDACtB,2CACM;YACT,cAAS;cACP,mBAAc,SAAS;;mCAGpB,kBACL,SAAS,UACF,wCACK,aACF,AAAyD,wBAAnD,gBAAW,SAAS,KAAW,qBAAc;IAIlE;kBAEqB;cAChB,UAAU;;;UAEd,qBAAe,AAAa,+BAAU,GAAG,AAAa,AAAO,4BAAE;AAC/D;;;;AAEA;;;;UAEA,qBAAa,aAAb,mCAAgB,UAAU;AAC1B;;;IAEN;eAEuB;AACnB,cAAQ,UAAU;;;;;;;;AAOd,gBAAO;;;;AAEP,gBAAO;;;IAEb;;;IA7IK;IACF,mBAAa;IACX,qBAAe;;;EA4IxB","file":"calculator.ddc.js"}');
  // Exports:
  return {
    keyboard: keyboard,
    calculator: calculator
  };
});

//# sourceMappingURL=calculator.ddc.js.map
