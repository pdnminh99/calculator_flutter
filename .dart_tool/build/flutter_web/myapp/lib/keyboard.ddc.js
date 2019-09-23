define(['dart_sdk', 'packages/myapp/calculator', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__myapp__calculator, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const calculator = packages__myapp__calculator.calculator;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icons = packages__flutter__material.src__material__icons;
  const card = packages__flutter__material.src__material__card;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const colors = packages__flutter__material.src__material__colors;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const keyboard = Object.create(dart.library);
  const main = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToThemeData = () => (VoidToThemeData = dart.constFn(dart.fnType(theme_data.ThemeData, [])))();
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
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 51,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 19,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 19,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 54,
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
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 21,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 40,
        [_Location_line]: 78,
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
        [_Location_column]: 33,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
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
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
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
        [Text_data]: "Switch Theme"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C62 || CT.C62,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "theme"
      });
    },
    get C64() {
      return C64 = dart.const({
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
    get C63() {
      return C63 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C64 || CT.C64,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "history"
      });
    },
    get C66() {
      return C66 = dart.const({
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
        [Text_data]: "Reset"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C66 || CT.C66,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "reset"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 30,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/myapp/keyboard.dart"
      });
    },
    get C95() {
      return C95 = dart.constList([], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 4,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    }
  });
  const _isTypeOne = dart.privateName(keyboard, "_isTypeOne");
  const _keyset = dart.privateName(keyboard, "_keyset");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C16;
  let C15;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C23;
  let C22;
  let C31;
  let C30;
  let C29;
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
  let C43;
  let C42;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
  let C58;
  let C59;
  let C60;
  let C57;
  let C56;
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
  let C62;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_textStyle = dart.privateName(popup_menu, "PopupMenuItem.textStyle");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C61;
  let C64;
  let C63;
  let C66;
  let C65;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C78;
  let C79;
  let C75;
  let C74;
  let C82;
  let C81;
  let C80;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C92;
  let C91;
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new keyboard.Keyboards.new();
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(keyboard.Keyboards, [])
  }));
  dart.setLibraryUri(main.MyApp, "package:myapp/main.dart");
  const Keyboards_calc = dart.privateName(keyboard, "Keyboards.calc");
  const Keyboards_isDarkTheme = dart.privateName(keyboard, "Keyboards.isDarkTheme");
  keyboard.Keyboards = class Keyboards extends framework.State$(main.MyApp) {
    get calc() {
      return this[calc];
    }
    set calc(value) {
      this[calc] = value;
    }
    get isDarkTheme() {
      return this[isDarkTheme];
    }
    set isDarkTheme(value) {
      this[isDarkTheme] = value;
    }
    get [_keyset]() {
      return dart.test(this[_isTypeOne]) ? JSArrayOfString().of(["7", "8", "9", "<", "4", "5", "6", "/", "1", "2", "3", "*", "0", ".", "-", "+"]) : JSArrayOfString().of(["pi", "^", "<"]);
    }
    build(context) {
      return new app.MaterialApp.new({theme: dart.fn(() => dart.test(this.isDarkTheme) ? theme_data.ThemeData.dark() : theme_data.ThemeData.light(), VoidToThemeData())(), home: this.getScaffold("Calculator"), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    getScaffold(title) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new icon.Icon.new(icons.Icons.lightbulb_outline, {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), title: new text.Text.new(title, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), actions: JSArrayOfWidget().of([this.popUpButton(), this.switchKeyboardAction()]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), body: new container.Container.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new card.Card.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new(dart.str(this.calc.toString({isRaw: false})), {softWrap: false, textAlign: ui.TextAlign.right, overflow: paragraph.TextOverflow.fade, style: new text_style.TextStyle.new({fontSize: 40.0}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new text.Text.new(dart.str(this.calc.getResult()), {softWrap: false, textAlign: ui.TextAlign.right, overflow: paragraph.TextOverflow.fade, style: new text_style.TextStyle.new({fontSize: 40.0}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})]), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new basic.Expanded.new({child: new scroll_view.GridView.count({crossAxisCount: 4, children: this.getKeyset(ListOfString()._check(this[_keyset])), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49});
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
      return new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.loop, {$creationLocationd_0dea112b090073317d4: C53 || CT.C53}), tooltip: "Toggle between keyboards", onPressed: dart.fn(() => {
          this.setState(dart.fn(() => {
            this[_isTypeOne] = !dart.test(this[_isTypeOne]);
          }, VoidToNull()));
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
    }
    popUpButton() {
      return new (PopupMenuButtonOfString()).new({onSelected: dart.fn(result => {
          this.setState(dart.fn(() => {
            switch (result) {
              case "theme":
              {
                this.isDarkTheme = !dart.test(this.isDarkTheme);
                break;
              }
              case "reset":
              {
                this.calc.reset();
                break;
              }
              default:
              {
                break;
              }
            }
          }, VoidToNull()));
        }, StringToNull()), itemBuilder: dart.fn(context => JSArrayOfPopupMenuEntryOfString().of([C61 || CT.C61, C63 || CT.C63, C65 || CT.C65]), BuildContextToListOfPopupMenuEntryOfString()), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
    }
    button(character) {
      switch (character) {
        case "<":
        {
          return new container.Container.new({child: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back, {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), color: colors.Colors.blue, tooltip: "Delete label", onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.calc.addLabel(character);
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
        }
        default:
        {
          return new container.Container.new({child: new flat_button.FlatButton.new({onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.calc.addLabel(character);
                }, VoidToNull()));
              }, VoidToNull()), child: new text.Text.new(this.calc.convertLabel(character), {style: new text_style.TextStyle.new({fontSize: 30.0, color: dart.fn(() => dart.test(this.isOperands(character)) ? colors.Colors.blue : dart.test(this.isDarkTheme) ? colors.Colors.white : colors.Colors.black, VoidToColor())()}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91});
        }
      }
    }
    isOperands(buttonType) {
      switch (buttonType) {
        case "<":
        case "/":
        case "*":
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
    this[_isTypeOne] = true;
    this[calc] = new calculator.Calculator.new();
    this[isDarkTheme] = true;
    keyboard.Keyboards.__proto__.new.call(this);
    ;
  }).prototype = keyboard.Keyboards.prototype;
  dart.addTypeTests(keyboard.Keyboards);
  const calc = Keyboards_calc;
  const isDarkTheme = Keyboards_isDarkTheme;
  dart.setMethodSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getMethods(keyboard.Keyboards.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getScaffold: dart.fnType(framework.Widget, [core.String]),
    getKeyset: dart.fnType(core.List$(framework.Widget), [core.List$(core.String)]),
    switchKeyboardAction: dart.fnType(framework.Widget, []),
    popUpButton: dart.fnType(framework.Widget, []),
    button: dart.fnType(framework.Widget, [core.String]),
    isOperands: dart.fnType(core.bool, [core.String])
  }));
  dart.setGetterSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getGetters(keyboard.Keyboards.__proto__),
    [_keyset]: dart.dynamic
  }));
  dart.setLibraryUri(keyboard.Keyboards, "package:myapp/keyboard.dart");
  dart.setFieldSignature(keyboard.Keyboards, () => ({
    __proto__: dart.getFields(keyboard.Keyboards.__proto__),
    [_isTypeOne]: dart.fieldType(core.bool),
    calc: dart.fieldType(calculator.Calculator),
    isDarkTheme: dart.fieldType(core.bool)
  }));
  let C95;
  let C94;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C94 || CT.C94}));
  };
  dart.trackLibraries("packages/myapp/keyboard", {
    "package:myapp/keyboard.dart": keyboard,
    "package:myapp/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","keyboard.dart"],"names":[],"mappings":"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","file":"keyboard.ddc.js"}');
  // Exports:
  return {
    keyboard: keyboard,
    main: main
  };
});

//# sourceMappingURL=keyboard.ddc.js.map
