define(['dart_sdk', 'packages/test_api/src/backend/closed_exception', 'packages/test_api/src/backend/metadata', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/gestures', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/widgets/actions', 'packages/matcher/src/core_matchers', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/semantics/binding', 'packages/path/path', 'packages/flutter/src/cupertino/action_sheet', 'packages/stack_trace/src/chain', 'packages/quiver/testing/async', 'packages/quiver/time', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__test_api__src__backend__closed_exception, packages__test_api__src__backend__metadata, packages__flutter__src__foundation___bitfield_web, packages__flutter__gestures, packages__flutter__src__gestures__arena, packages__flutter__src__widgets__actions, packages__matcher__src__core_matchers, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__semantics__binding, packages__path__path, packages__flutter__src__cupertino__action_sheet, packages__stack_trace__src__chain, packages__quiver__testing__async, packages__quiver__time, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const typed_data = dart_sdk.typed_data;
  const _engine = dart_sdk._engine;
  const math = dart_sdk.math;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const live_test = packages__test_api__src__backend__closed_exception.src__backend__live_test;
  const test$ = packages__test_api__src__backend__closed_exception.src__backend__test;
  const state$ = packages__test_api__src__backend__closed_exception.src__backend__state;
  const message$ = packages__test_api__src__backend__closed_exception.src__backend__message;
  const group$ = packages__test_api__src__backend__closed_exception.src__backend__group;
  const invoker = packages__test_api__src__backend__closed_exception.src__backend__invoker;
  const declarer$ = packages__test_api__src__backend__closed_exception.src__backend__declarer;
  const suite$ = packages__test_api__src__backend__closed_exception.src__backend__suite;
  const expect = packages__test_api__src__backend__closed_exception.src__frontend__expect;
  const async_matcher = packages__test_api__src__backend__closed_exception.src__frontend__async_matcher;
  const throws_matcher = packages__test_api__src__backend__closed_exception.src__frontend__throws_matcher;
  const test_api = packages__test_api__src__backend__closed_exception.test_api;
  const suite_platform = packages__test_api__src__backend__metadata.src__backend__suite_platform;
  const runtime = packages__test_api__src__backend__metadata.src__backend__runtime;
  const timeout = packages__test_api__src__backend__metadata.src__frontend__timeout;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const basic_types = packages__flutter__src__foundation___bitfield_web.src__foundation__basic_types;
  const key$ = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const print = packages__flutter__src__foundation___bitfield_web.src__foundation__print;
  const debug = packages__flutter__src__foundation___bitfield_web.src__foundation__debug;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const ticker = packages__flutter__gestures.src__scheduler__ticker;
  const binding$ = packages__flutter__gestures.src__scheduler__binding;
  const binding$0 = packages__flutter__src__gestures__arena.src__services__binding;
  const system_channels = packages__flutter__src__gestures__arena.src__services__system_channels;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const binary_messenger = packages__flutter__src__gestures__arena.src__services__binary_messenger;
  const events = packages__flutter__src__gestures__arena.src__gestures__events;
  const hit_test = packages__flutter__src__gestures__arena.src__gestures__hit_test;
  const constants = packages__flutter__src__gestures__arena.src__gestures__constants;
  const debug$ = packages__flutter__src__gestures__arena.src__gestures__debug;
  const debug$0 = packages__flutter__src__gestures__arena.src__scheduler__debug;
  const binding$1 = packages__flutter__src__gestures__arena.src__gestures__binding;
  const binding$2 = packages__flutter__src__widgets__actions.src__widgets__binding;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const scrollable = packages__flutter__src__widgets__actions.src__widgets__scrollable;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const debug$1 = packages__flutter__src__widgets__actions.src__widgets__debug;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const interfaces = packages__matcher__src__core_matchers.src__interfaces;
  const type_matcher = packages__matcher__src__core_matchers.src__type_matcher;
  const card = packages__flutter__material.src__material__card;
  const tooltip = packages__flutter__material.src__material__tooltip;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const layer$ = packages__flutter__src__rendering__animated_size.src__rendering__layer;
  const box$ = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const debug$2 = packages__flutter__src__rendering__animated_size.src__rendering__debug;
  const view = packages__flutter__src__rendering__animated_size.src__rendering__view;
  const binding$3 = packages__flutter__src__rendering__animated_size.src__rendering__binding;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const circle_border = packages__flutter__src__painting___network_image_web.src__painting__circle_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const matrix_utils = packages__flutter__src__painting___network_image_web.src__painting__matrix_utils;
  const debug$3 = packages__flutter__src__painting___network_image_web.src__painting__debug;
  const binding$4 = packages__flutter__src__painting___network_image_web.src__painting__binding;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const semantics = packages__flutter__src__semantics__binding.src__semantics__semantics;
  const binding$5 = packages__flutter__src__semantics__binding.src__semantics__binding;
  const path = packages__path__path.path;
  const nav_bar = packages__flutter__src__cupertino__action_sheet.src__cupertino__nav_bar;
  const chain = packages__stack_trace__src__chain.src__chain;
  const trace = packages__stack_trace__src__chain.src__trace;
  const async$ = packages__quiver__testing__async.testing__async;
  const time = packages__quiver__time.time;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const test_compat = Object.create(dart.library);
  const stack_manipulation = Object.create(dart.library);
  const test_vsync = Object.create(dart.library);
  const window = Object.create(dart.library);
  const test_text_input = Object.create(dart.library);
  const _binding_web = Object.create(dart.library);
  const flutter_test = Object.create(dart.library);
  const matchers = Object.create(dart.library);
  const test_pointer = Object.create(dart.library);
  const controller = Object.create(dart.library);
  const all_elements = Object.create(dart.library);
  const finders = Object.create(dart.library);
  const _goldens_web = Object.create(dart.library);
  const nonconst = Object.create(dart.library);
  const accessibility = Object.create(dart.library);
  const widget_tester = Object.create(dart.library);
  const test_exception_reporter = Object.create(dart.library);
  const test_async_utils = Object.create(dart.library);
  const goldens = Object.create(dart.library);
  const binding$6 = Object.create(dart.library);
  const platform = Object.create(dart.library);
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $isNotEmpty = dartx.isNotEmpty;
  const $padLeft = dartx.padLeft;
  const $modulo = dartx['%'];
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $times = dartx['*'];
  const $split = dartx.split;
  const $first = dartx.first;
  const $skip = dartx.skip;
  const $take = dartx.take;
  const $last = dartx.last;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $iterator = dartx.iterator;
  const $single = dartx.single;
  const $contains = dartx.contains;
  const $trim = dartx.trim;
  const $replaceAll = dartx.replaceAll;
  const $containsKey = dartx.containsKey;
  const $endsWith = dartx.endsWith;
  const $substring = dartx.substring;
  const $trimRight = dartx.trimRight;
  const $startsWith = dartx.startsWith;
  const $runtimeType = dartx.runtimeType;
  const $abs = dartx.abs;
  const $keys = dartx.keys;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  const $values = dartx.values;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $sort = dartx.sort;
  const $codeUnitAt = dartx.codeUnitAt;
  const $toDouble = dartx.toDouble;
  const $whereType = dartx.whereType;
  const $round = dartx.round;
  const $truncate = dartx.truncate;
  const $sign = dartx.sign;
  const $removeLast = dartx.removeLast;
  const $addAll = dartx.addAll;
  const $reversed = dartx.reversed;
  const $elementAt = dartx.elementAt;
  const $where = dartx.where;
  const $expand = dartx.expand;
  const $toSet = dartx.toSet;
  const $insertAll = dartx.insertAll;
  const $join = dartx.join;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $ceil = dartx.ceil;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getUint8 = dartx.getUint8;
  const $entries = dartx.entries;
  const $firstWhere = dartx.firstWhere;
  const $lastWhere = dartx.lastWhere;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $_equals = dartx._equals;
  const $indexOf = dartx.indexOf;
  const $forEach = dartx.forEach;
  let JSArrayOfLiveTest = () => (JSArrayOfLiveTest = dart.constFn(_interceptors.JSArray$(live_test.LiveTest)))();
  let JSArrayOfTest = () => (JSArrayOfTest = dart.constFn(_interceptors.JSArray$(test$.Test)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let LinkedHashSetOfStreamSubscriptionOfvoid = () => (LinkedHashSetOfStreamSubscriptionOfvoid = dart.constFn(collection.LinkedHashSet$(StreamSubscriptionOfvoid())))();
  let StateTovoid = () => (StateTovoid = dart.constFn(dart.fnType(dart.void, [state$.State])))();
  let AsyncErrorTovoid = () => (AsyncErrorTovoid = dart.constFn(dart.fnType(dart.void, [async.AsyncError])))();
  let MessageToNull = () => (MessageToNull = dart.constFn(dart.fnType(core.Null, [message$.Message])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfGroup = () => (JSArrayOfGroup = dart.constFn(_interceptors.JSArray$(group$.Group)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ByteDataTovoid = () => (ByteDataTovoid = dart.constFn(dart.fnType(dart.void, [typed_data.ByteData])))();
  let StringAndByteDataAndFnTovoid = () => (StringAndByteDataAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.String, typed_data.ByteData, ByteDataTovoid()])))();
  let DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  let PointerDataPacketTovoid = () => (PointerDataPacketTovoid = dart.constFn(dart.fnType(dart.void, [ui.PointerDataPacket])))();
  let intAndSemanticsActionAndByteDataTovoid = () => (intAndSemanticsActionAndByteDataTovoid = dart.constFn(dart.fnType(dart.void, [core.int, ui.SemanticsAction, typed_data.ByteData])))();
  let ListOfLocale = () => (ListOfLocale = dart.constFn(core.List$(ui.Locale)))();
  let ListOfFrameTiming = () => (ListOfFrameTiming = dart.constFn(core.List$(ui.FrameTiming)))();
  let ListOfFrameTimingTovoid = () => (ListOfFrameTimingTovoid = dart.constFn(dart.fnType(dart.void, [ListOfFrameTiming()])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let WidgetTobool = () => (WidgetTobool = dart.constFn(dart.fnType(core.bool, [framework.Widget])))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let FutureOfImage = () => (FutureOfImage = dart.constFn(async.Future$(ui.Image)))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [])))();
  let intToCustomSemanticsAction = () => (intToCustomSemanticsAction = dart.constFn(dart.fnType(semantics.CustomSemanticsAction, [core.int])))();
  let JSArrayOfCustomSemanticsAction = () => (JSArrayOfCustomSemanticsAction = dart.constFn(_interceptors.JSArray$(semantics.CustomSemanticsAction)))();
  let CustomSemanticsActionAndCustomSemanticsActionToint = () => (CustomSemanticsActionAndCustomSemanticsActionToint = dart.constFn(dart.fnType(core.int, [semantics.CustomSemanticsAction, semantics.CustomSemanticsAction])))();
  let SemanticsNodeTobool = () => (SemanticsNodeTobool = dart.constFn(dart.fnType(core.bool, [semantics.SemanticsNode])))();
  let _IsWithinDistanceOfRect = () => (_IsWithinDistanceOfRect = dart.constFn(matchers._IsWithinDistance$(ui.Rect)))();
  let RectAndRectTodouble = () => (RectAndRectTodouble = dart.constFn(dart.fnType(core.double, [ui.Rect, ui.Rect])))();
  let _IsWithinDistanceOfOffset = () => (_IsWithinDistanceOfOffset = dart.constFn(matchers._IsWithinDistance$(ui.Offset)))();
  let OffsetAndOffsetTodouble = () => (OffsetAndOffsetTodouble = dart.constFn(dart.fnType(core.double, [ui.Offset, ui.Offset])))();
  let JSArrayOfSemanticsFlag = () => (JSArrayOfSemanticsFlag = dart.constFn(_interceptors.JSArray$(ui.SemanticsFlag)))();
  let JSArrayOfSemanticsAction = () => (JSArrayOfSemanticsAction = dart.constFn(_interceptors.JSArray$(ui.SemanticsAction)))();
  let ColorAndColorTodouble = () => (ColorAndColorTodouble = dart.constFn(dart.fnType(core.double, [ui.Color, ui.Color])))();
  let HSVColorAndHSVColorTodouble = () => (HSVColorAndHSVColorTodouble = dart.constFn(dart.fnType(core.double, [colors$.HSVColor, colors$.HSVColor])))();
  let HSLColorAndHSLColorTodouble = () => (HSLColorAndHSLColorTodouble = dart.constFn(dart.fnType(core.double, [colors$.HSLColor, colors$.HSLColor])))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let doubleAnddoubleTodouble = () => (doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))();
  let SizeAndSizeTodouble = () => (SizeAndSizeTodouble = dart.constFn(dart.fnType(core.double, [ui.Size, ui.Size])))();
  let NullAndNullTonum = () => (NullAndNullTonum = dart.constFn(dart.fnType(core.num, [core.Null, core.Null])))();
  let ElementToWidget = () => (ElementToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.Element])))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let StatefulElementToStateOfStatefulWidget = () => (StatefulElementToStateOfStatefulWidget = dart.constFn(dart.fnType(StateOfStatefulWidget(), [framework.StatefulElement])))();
  let ElementToRenderObject = () => (ElementToRenderObject = dart.constFn(dart.fnType(object.RenderObject, [framework.Element])))();
  let SyncIterableOfLayer = () => (SyncIterableOfLayer = dart.constFn(_js_helper.SyncIterable$(layer$.Layer)))();
  let FutureOfTestGesture = () => (FutureOfTestGesture = dart.constFn(async.Future$(test_pointer.TestGesture)))();
  let VoidToFutureOfTestGesture = () => (VoidToFutureOfTestGesture = dart.constFn(dart.fnType(FutureOfTestGesture(), [])))();
  let SizeToOffset = () => (SizeToOffset = dart.constFn(dart.fnType(ui.Offset, [ui.Size])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(framework.Element)))();
  let CachingIterableOfElement = () => (CachingIterableOfElement = dart.constFn(basic_types.CachingIterable$(framework.Element)))();
  let SyncIterableOfElement = () => (SyncIterableOfElement = dart.constFn(_js_helper.SyncIterable$(framework.Element)))();
  let IterableOfElement = () => (IterableOfElement = dart.constFn(core.Iterable$(framework.Element)))();
  let ElementToIterableOfElement = () => (ElementToIterableOfElement = dart.constFn(dart.fnType(IterableOfElement(), [framework.Element])))();
  let SemanticsNodeToEvaluation = () => (SemanticsNodeToEvaluation = dart.constFn(dart.fnType(accessibility.Evaluation, [semantics.SemanticsNode])))();
  let FutureOfByteData = () => (FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))();
  let VoidToFutureOfByteData = () => (VoidToFutureOfByteData = dart.constFn(dart.fnType(FutureOfByteData(), [])))();
  let JSArrayOfSemanticsNode = () => (JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))();
  let FutureOfEvaluation = () => (FutureOfEvaluation = dart.constFn(async.Future$(accessibility.Evaluation)))();
  let SemanticsNodeToFutureOfEvaluation = () => (SemanticsNodeToFutureOfEvaluation = dart.constFn(dart.fnType(FutureOfEvaluation(), [semantics.SemanticsNode])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let dynamicAndStackTraceTovoid = () => (dynamicAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])))();
  let voidToint = () => (voidToint = dart.constFn(dart.fnType(core.int, [dart.void])))();
  let HitTestEntryTobool = () => (HitTestEntryTobool = dart.constFn(dart.fnType(core.bool, [hit_test.HitTestEntry])))();
  let ValueKeyOfint = () => (ValueKeyOfint = dart.constFn(key$.ValueKey$(core.int)))();
  let ValueKeyOfdouble = () => (ValueKeyOfdouble = dart.constFn(key$.ValueKey$(core.double)))();
  let ValueKeyOfbool = () => (ValueKeyOfbool = dart.constFn(key$.ValueKey$(core.bool)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key$.ValueKey$(core.String)))();
  let LinkedHashSetOf_TestTicker = () => (LinkedHashSetOf_TestTicker = dart.constFn(collection.LinkedHashSet$(widget_tester._TestTicker)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FlutterErrorDetailsAndStringTovoid = () => (FlutterErrorDetailsAndStringTovoid = dart.constFn(dart.fnType(dart.void, [assertions.FlutterErrorDetails, core.String])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let JSArrayOf_AsyncScope = () => (JSArrayOf_AsyncScope = dart.constFn(_interceptors.JSArray$(test_async_utils._AsyncScope)))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let JSArrayOfFutureOfByteData = () => (JSArrayOfFutureOfByteData = dart.constFn(_interceptors.JSArray$(FutureOfByteData())))();
  let JSArrayOfLocale = () => (JSArrayOfLocale = dart.constFn(_interceptors.JSArray$(ui.Locale)))();
  let FlutterErrorDetailsToNull = () => (FlutterErrorDetailsToNull = dart.constFn(dart.fnType(core.Null, [assertions.FlutterErrorDetails])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let IterableOfStringToIterableOfString = () => (IterableOfStringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [IterableOfString()])))();
  let DiagnosticsPropertyOfDiagnosticsNode = () => (DiagnosticsPropertyOfDiagnosticsNode = dart.constFn(diagnostics.DiagnosticsProperty$(diagnostics.DiagnosticsNode)))();
  let DiagnosticsPropertyOfString = () => (DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async.Zone, async.ZoneDelegate, async.Zone, dart.dynamic, core.StackTrace])))();
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], {wrapWidth: core.int})))();
  let ZoneAndZoneDelegateAndZone__ToNull$ = () => (ZoneAndZoneDelegateAndZone__ToNull$ = dart.constFn(dart.fnType(core.Null, [async.Zone, async.ZoneDelegate, async.Zone, VoidTovoid()])))();
  let ZoneAndZoneDelegateAndZone__ToTimer = () => (ZoneAndZoneDelegateAndZone__ToTimer = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, VoidTovoid()])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let ZoneAndZoneDelegateAndZone__ToTimer$ = () => (ZoneAndZoneDelegateAndZone__ToTimer$ = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, TimerTovoid()])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let FakeAsyncToNull = () => (FakeAsyncToNull = dart.constFn(dart.fnType(core.Null, [async$.FakeAsync])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let IdentityMapOfint$_LiveTestPointerRecord = () => (IdentityMapOfint$_LiveTestPointerRecord = dart.constFn(_js_helper.IdentityMap$(core.int, binding$6._LiveTestPointerRecord)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _internal.Symbol.new('test.declarer'));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_onLocaleChanged', _onLocaleChanged));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_onAccessibilityFeaturesChanged', _onAccessibilityFeaturesChanged));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_onPlatformMessage', _onPlatformMessage));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_onBeginFrame', _onBeginFrame));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_onDrawFrame', _onDrawFrame));
    },
    get C6() {
      return C6 = dart.const(new _js_helper.PrivateSymbol.new('_onPointerDataPacket', _onPointerDataPacket));
    },
    get C7() {
      return C7 = dart.const(new _js_helper.PrivateSymbol.new('_onReportTimingsZone', _onReportTimingsZone));
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_textScaleFactor', _textScaleFactor));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_alwaysUse24HourFormat', _alwaysUse24HourFormat));
    },
    get C10() {
      return C10 = dart.const(new _js_helper.PrivateSymbol.new('_initialLifecycleState', _initialLifecycleState));
    },
    get C11() {
      return C11 = dart.const(new _js_helper.PrivateSymbol.new('_accessibilityFeatures', _accessibilityFeatures));
    },
    get C12() {
      return C12 = dart.const(new _js_helper.PrivateSymbol.new('_rasterizer', _rasterizer));
    },
    get C13() {
      return C13 = dart.const(new _js_helper.PrivateSymbol.new('_onSemanticsAction', _onSemanticsAction));
    },
    get C14() {
      return C14 = dart.const(new _js_helper.PrivateSymbol.new('_onTextScaleFactorChanged', _onTextScaleFactorChanged));
    },
    get C15() {
      return C15 = dart.const(new _js_helper.PrivateSymbol.new('_locales', _locales));
    },
    get C16() {
      return C16 = dart.const(new _js_helper.PrivateSymbol.new('_onSemanticsEnabledChanged', _onSemanticsEnabledChanged));
    },
    get C17() {
      return C17 = dart.const(new _js_helper.PrivateSymbol.new('_onReportTimings', _onReportTimings));
    },
    get C18() {
      return C18 = dart.const(new _js_helper.PrivateSymbol.new('_onPlatformBrightnessChanged', _onPlatformBrightnessChanged));
    },
    get C19() {
      return C19 = dart.const(new _js_helper.PrivateSymbol.new('_onMetricsChanged', _onMetricsChanged));
    },
    get C20() {
      return C20 = dart.const(new _js_helper.PrivateSymbol.new('_onLocaleChanged=', _onLocaleChanged_));
    },
    get C21() {
      return C21 = dart.const(new _js_helper.PrivateSymbol.new('_onAccessibilityFeaturesChanged=', _onAccessibilityFeaturesChanged_));
    },
    get C22() {
      return C22 = dart.const(new _js_helper.PrivateSymbol.new('_onPlatformMessage=', _onPlatformMessage_));
    },
    get C23() {
      return C23 = dart.const(new _js_helper.PrivateSymbol.new('_onBeginFrame=', _onBeginFrame_));
    },
    get C24() {
      return C24 = dart.const(new _js_helper.PrivateSymbol.new('_onDrawFrame=', _onDrawFrame_));
    },
    get C25() {
      return C25 = dart.const(new _js_helper.PrivateSymbol.new('_onPointerDataPacket=', _onPointerDataPacket_));
    },
    get C26() {
      return C26 = dart.const(new _js_helper.PrivateSymbol.new('_onReportTimingsZone=', _onReportTimingsZone_));
    },
    get C27() {
      return C27 = dart.const(new _js_helper.PrivateSymbol.new('_textScaleFactor=', _textScaleFactor_));
    },
    get C28() {
      return C28 = dart.const(new _js_helper.PrivateSymbol.new('_alwaysUse24HourFormat=', _alwaysUse24HourFormat_));
    },
    get C29() {
      return C29 = dart.const(new _js_helper.PrivateSymbol.new('_initialLifecycleState=', _initialLifecycleState_));
    },
    get C30() {
      return C30 = dart.const(new _js_helper.PrivateSymbol.new('_accessibilityFeatures=', _accessibilityFeatures_));
    },
    get C31() {
      return C31 = dart.const(new _js_helper.PrivateSymbol.new('_onSemanticsAction=', _onSemanticsAction_));
    },
    get C32() {
      return C32 = dart.const(new _js_helper.PrivateSymbol.new('_onTextScaleFactorChanged=', _onTextScaleFactorChanged_));
    },
    get C33() {
      return C33 = dart.const(new _js_helper.PrivateSymbol.new('_locales=', _locales_));
    },
    get C34() {
      return C34 = dart.const(new _js_helper.PrivateSymbol.new('_onSemanticsEnabledChanged=', _onSemanticsEnabledChanged_));
    },
    get C35() {
      return C35 = dart.const(new _js_helper.PrivateSymbol.new('_onReportTimings=', _onReportTimings_));
    },
    get C36() {
      return C36 = dart.const(new _js_helper.PrivateSymbol.new('_onPlatformBrightnessChanged=', _onPlatformBrightnessChanged_));
    },
    get C37() {
      return C37 = dart.const(new _js_helper.PrivateSymbol.new('_onMetricsChanged=', _onMetricsChanged_));
    },
    get C38() {
      return C38 = dart.wrapType(proxy_box.RenderClipPath);
    },
    get C39() {
      return C39 = dart.wrapType(proxy_box.RenderClipOval);
    },
    get C40() {
      return C40 = dart.wrapType(proxy_box.RenderClipRect);
    },
    get C41() {
      return C41 = dart.wrapType(proxy_box.RenderClipRRect);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 60000000
      });
    },
    get C43() {
      return C43 = dart.fn(matchers._rectDistance, RectAndRectTodouble());
    },
    get C44() {
      return C44 = dart.fn(matchers._offsetDistance, OffsetAndOffsetTodouble());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: matchers._FindsWidgetMatcher.prototype,
        [_FindsWidgetMatcher_max]: 0,
        [_FindsWidgetMatcher_min]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: matchers._FindsWidgetMatcher.prototype,
        [_FindsWidgetMatcher_max]: null,
        [_FindsWidgetMatcher_min]: 1
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: matchers._FindsWidgetMatcher.prototype,
        [_FindsWidgetMatcher_max]: 1,
        [_FindsWidgetMatcher_min]: 1
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: matchers._IsOffstage.prototype
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: matchers._IsOnstage.prototype
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: matchers._IsInCard.prototype
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: matchers._IsNotInCard.prototype
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: matchers._HasOneLineDescription.prototype
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: matchers._HasGoodToStringDeep.prototype
      });
    },
    get C55() {
      return C55 = dart.wrapType(ui.Color);
    },
    get C56() {
      return C56 = dart.fn(matchers._maxComponentColorDistance, ColorAndColorTodouble());
    },
    get C57() {
      return C57 = dart.wrapType(colors$.HSVColor);
    },
    get C58() {
      return C58 = dart.fn(matchers._maxComponentHSVColorDistance, HSVColorAndHSVColorTodouble());
    },
    get C59() {
      return C59 = dart.wrapType(colors$.HSLColor);
    },
    get C60() {
      return C60 = dart.fn(matchers._maxComponentHSLColorDistance, HSLColorAndHSLColorTodouble());
    },
    get C61() {
      return C61 = dart.wrapType(ui.Offset);
    },
    get C62() {
      return C62 = dart.wrapType(core.int);
    },
    get C63() {
      return C63 = dart.fn(matchers._intDistance, intAndintToint());
    },
    get C64() {
      return C64 = dart.wrapType(core.double);
    },
    get C65() {
      return C65 = dart.fn(matchers._doubleDistance, doubleAnddoubleTodouble());
    },
    get C66() {
      return C66 = dart.wrapType(ui.Rect);
    },
    get C67() {
      return C67 = dart.wrapType(ui.Size);
    },
    get C68() {
      return C68 = dart.fn(matchers._sizeDistance, SizeAndSizeTodouble());
    },
    get C54() {
      return C54 = dart.constMap(core.Type, NullAndNullTonum(), [C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C44 || CT.C44, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C43 || CT.C43, C67 || CT.C67, C68 || CT.C68]);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: matchers._ClipsWithBoundingRect.prototype
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: matchers._MatchAnythingExceptClip.prototype
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.unknown",
        index: 4
      });
    },
    get C76() {
      return C76 = dart.wrapType(events.PointerDownEvent);
    },
    get C77() {
      return C77 = dart.wrapType(events.PointerUpEvent);
    },
    get C78() {
      return C78 = dart.wrapType(events.PointerCancelEvent);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 16000
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: finders.CommonFinders.prototype
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: accessibility.Evaluation.prototype,
        [Evaluation_reason]: null,
        [Evaluation_passed]: true
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 4,
        [OffsetBase__dx]: 4
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 48,
        [OffsetBase__dx]: 48
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: accessibility.MinimumTapTargetGuideline.prototype,
        [MinimumTapTargetGuideline_link]: "https://support.google.com/accessibility/android/answer/7101858?hl=en",
        [MinimumTapTargetGuideline_size]: C88 || CT.C88
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 44,
        [OffsetBase__dx]: 44
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: accessibility.MinimumTapTargetGuideline.prototype,
        [MinimumTapTargetGuideline_link]: "https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/",
        [MinimumTapTargetGuideline_size]: C90 || CT.C90
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: accessibility.MinimumTextContrastGuideline.prototype
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: accessibility.LabeledTapTargetGuideline.prototype
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.sendSemanticsUpdate",
        index: 6
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 600000000
      });
    },
    get C96() {
      return C96 = dart.fn(test_exception_reporter._defaultTestExceptionReporter, FlutterErrorDetailsAndStringTovoid());
    },
    get C97() {
      return C97 = dart.constList([], trace.Trace);
    },
    get C98() {
      return C98 = dart.fn(test_async_utils.TestAsyncUtils._stripAsynchronousSuspensions, StringTobool());
    },
    get C99() {
      return C99 = dart.const({
        __proto__: goldens.TrivialComparator.prototype
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.build",
        index: 0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.layout",
        index: 1
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.compositingBits",
        index: 2
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.paint",
        index: 3
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.composite",
        index: 4
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: binding$6.EnginePhase.prototype,
        [_name$]: "EnginePhase.flushSemantics",
        index: 5
      });
    },
    get C106() {
      return C106 = dart.constList([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C93 || CT.C93], binding$6.EnginePhase);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: binding$6.TestBindingEventSource.prototype,
        [_name$]: "TestBindingEventSource.test",
        index: 0
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: binding$6.TestBindingEventSource.prototype,
        [_name$]: "TestBindingEventSource.device",
        index: 1
      });
    },
    get C109() {
      return C109 = dart.constList([C107 || CT.C107, C108 || CT.C108], binding$6.TestBindingEventSource);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 22,
        [_Location_line]: 687,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 40,
        [_Location_line]: 687,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 687,
        [_Location_file]: "org-dartlang-app:///packages/flutter_test/src/binding.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 24,
        [_Location_line]: 702,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 42,
        [_Location_line]: 702,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 702,
        [_Location_file]: "org-dartlang-app:///packages/flutter_test/src/binding.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4287725567.0
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C119 || CT.C119,
        [TextStyle_inherit]: true
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: text$.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: C122 || CT.C122,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C118 || CT.C118,
        [Text_textSpan]: null,
        [Text_data]: "Test starting..."
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C121 || CT.C121,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C83 || CT.C83
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: text$.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: C122 || CT.C122,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C118 || CT.C118,
        [Text_textSpan]: null,
        [Text_data]: "Test finished."
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C124 || CT.C124,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C83 || CT.C83
      });
    },
    get C125() {
      return C125 = dart.fn(print.debugPrintSynchronously, String__Tovoid());
    },
    get C126() {
      return C126 = dart.const({
        __proto__: timeout.Timeout.prototype,
        [Timeout_scaleFactor]: null,
        [Timeout_duration]: C95 || CT.C95
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: binding$6.LiveTestWidgetsFlutterBindingFramePolicy.prototype,
        [_name$]: "LiveTestWidgetsFlutterBindingFramePolicy.onlyPumps",
        index: 0
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: binding$6.LiveTestWidgetsFlutterBindingFramePolicy.prototype,
        [_name$]: "LiveTestWidgetsFlutterBindingFramePolicy.fadePointers",
        index: 1
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: binding$6.LiveTestWidgetsFlutterBindingFramePolicy.prototype,
        [_name$]: "LiveTestWidgetsFlutterBindingFramePolicy.fullyLive",
        index: 2
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: binding$6.LiveTestWidgetsFlutterBindingFramePolicy.prototype,
        [_name$]: "LiveTestWidgetsFlutterBindingFramePolicy.benchmark",
        index: 3
      });
    },
    get C132() {
      return C132 = dart.constList([C128 || CT.C128, C129 || CT.C129, C130 || CT.C130, C131 || CT.C131], binding$6.LiveTestWidgetsFlutterBindingFramePolicy);
    },
    get C134() {
      return C134 = dart.fn(time.systemTime, VoidToDateTime());
    },
    get C133() {
      return C133 = dart.const({
        __proto__: time.Clock.prototype,
        [Clock__time]: C134 || CT.C134
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 600,
        [OffsetBase__dx]: 800
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 0
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "sans-serif",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    }
  });
  const _stopwatch = dart.privateName(test_compat, "_stopwatch");
  const _lastProgressPassed = dart.privateName(test_compat, "_lastProgressPassed");
  const _lastProgressSkipped = dart.privateName(test_compat, "_lastProgressSkipped");
  const _lastProgressFailed = dart.privateName(test_compat, "_lastProgressFailed");
  const _lastProgressMessage = dart.privateName(test_compat, "_lastProgressMessage");
  const _lastProgressSuffix = dart.privateName(test_compat, "_lastProgressSuffix");
  const _subscriptions = dart.privateName(test_compat, "_subscriptions");
  const _printPath = dart.privateName(test_compat, "_printPath");
  const _green = dart.privateName(test_compat, "_green");
  const _red = dart.privateName(test_compat, "_red");
  const _yellow = dart.privateName(test_compat, "_yellow");
  const _bold = dart.privateName(test_compat, "_bold");
  const _noColor = dart.privateName(test_compat, "_noColor");
  const _description = dart.privateName(test_compat, "_description");
  const _progressLine = dart.privateName(test_compat, "_progressLine");
  const _onStateChange = dart.privateName(test_compat, "_onStateChange");
  const _onError = dart.privateName(test_compat, "_onError");
  const _onTestStarted = dart.privateName(test_compat, "_onTestStarted");
  const _onDone = dart.privateName(test_compat, "_onDone");
  const _timeString = dart.privateName(test_compat, "_timeString");
  test_compat._Reporter = class _Reporter extends core.Object {
    [_onTestStarted](liveTest) {
      if (!dart.test(this[_stopwatch].isRunning)) {
        this[_stopwatch].start();
      }
      this[_progressLine](this[_description](liveTest));
      this[_subscriptions].add(liveTest.onStateChange.listen(dart.fn(state => this[_onStateChange](liveTest, state), StateTovoid())));
      this[_subscriptions].add(liveTest.onError.listen(dart.fn(error => this[_onError](liveTest, error.error, error.stackTrace), AsyncErrorTovoid())));
      this[_subscriptions].add(liveTest.onMessage.listen(dart.fn(message => {
        this[_progressLine](this[_description](liveTest));
        let text = message.text;
        if (dart.equals(message.type, message$.MessageType.skip)) {
          text = "  " + dart.str(this[_yellow]) + dart.str(text) + dart.str(this[_noColor]);
        }
        core.print(text);
      }, MessageToNull())));
    }
    [_onStateChange](liveTest, state) {
      if (!dart.equals(state.status, state$.Status.complete)) {
        return;
      }
    }
    [_onError](liveTest, error, stackTrace) {
      if (!dart.equals(liveTest.state.status, state$.Status.complete)) {
        return;
      }
      this[_progressLine](this[_description](liveTest), {suffix: " " + dart.str(this[_bold]) + dart.str(this[_red]) + "[E]" + dart.str(this[_noColor])});
      core.print(test_compat._indent(dart.toString(error)));
      core.print(test_compat._indent(dart.str(stackTrace)));
    }
    [_onDone]() {
      let success = this.failed[$isEmpty];
      if (success == null) {
        return;
      }
      if (!dart.test(success)) {
        this[_progressLine]("Some tests failed.", {color: this[_red]});
      } else if (dart.test(this.passed[$isEmpty])) {
        this[_progressLine]("All tests skipped.");
      } else {
        this[_progressLine]("All tests passed!");
      }
    }
    [_progressLine](message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let suffix = opts && 'suffix' in opts ? opts.suffix : null;
      if (this.passed[$length] == this[_lastProgressPassed] && this.skipped[$length] == this[_lastProgressSkipped] && this.failed[$length] == this[_lastProgressFailed] && message == this[_lastProgressMessage] && (suffix == null || suffix == this[_lastProgressSuffix])) {
        return;
      }
      this[_lastProgressPassed] = this.passed[$length];
      this[_lastProgressSkipped] = this.skipped[$length];
      this[_lastProgressFailed] = this.failed[$length];
      this[_lastProgressMessage] = message;
      this[_lastProgressSuffix] = suffix;
      if (suffix != null) {
        message = dart.notNull(message) + dart.notNull(suffix);
      }
      color == null ? color = "" : null;
      let duration = this[_stopwatch].elapsed;
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str(this[_timeString](duration)) + " ");
      buffer.write(this[_green]);
      buffer.write("+");
      buffer.write(this.passed[$length]);
      buffer.write(this[_noColor]);
      if (dart.test(this.skipped[$isNotEmpty])) {
        buffer.write(this[_yellow]);
        buffer.write(" ~");
        buffer.write(this.skipped[$length]);
        buffer.write(this[_noColor]);
      }
      if (dart.test(this.failed[$isNotEmpty])) {
        buffer.write(this[_red]);
        buffer.write(" -");
        buffer.write(this.failed[$length]);
        buffer.write(this[_noColor]);
      }
      buffer.write(": ");
      buffer.write(color);
      buffer.write(message);
      buffer.write(this[_noColor]);
      core.print(buffer.toString());
    }
    [_timeString](duration) {
      let minutes = dart.toString(duration.inMinutes)[$padLeft](2, "0");
      let seconds = duration.inSeconds[$modulo](60)[$toString]()[$padLeft](2, "0");
      return minutes + ":" + seconds;
    }
    [_description](liveTest) {
      let name = liveTest.test.name;
      if (dart.test(this[_printPath]) && liveTest.suite.path != null) {
        name = dart.str(liveTest.suite.path) + ": " + dart.str(name);
      }
      return name;
    }
  };
  (test_compat._Reporter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : true;
    let printPath = opts && 'printPath' in opts ? opts.printPath : true;
    this.passed = JSArrayOfLiveTest().of([]);
    this.failed = JSArrayOfLiveTest().of([]);
    this.skipped = JSArrayOfTest().of([]);
    this[_stopwatch] = new core.Stopwatch.new();
    this[_lastProgressPassed] = null;
    this[_lastProgressSkipped] = null;
    this[_lastProgressFailed] = null;
    this[_lastProgressMessage] = null;
    this[_lastProgressSuffix] = null;
    this[_subscriptions] = LinkedHashSetOfStreamSubscriptionOfvoid().new();
    this[_printPath] = printPath;
    this[_green] = dart.test(color) ? "[32m" : "";
    this[_red] = dart.test(color) ? "[31m" : "";
    this[_yellow] = dart.test(color) ? "[33m" : "";
    this[_bold] = dart.test(color) ? "[1m" : "";
    this[_noColor] = dart.test(color) ? "[0m" : "";
    ;
  }).prototype = test_compat._Reporter.prototype;
  dart.addTypeTests(test_compat._Reporter);
  dart.setMethodSignature(test_compat._Reporter, () => ({
    __proto__: dart.getMethods(test_compat._Reporter.__proto__),
    [_onTestStarted]: dart.fnType(dart.void, [live_test.LiveTest]),
    [_onStateChange]: dart.fnType(dart.void, [live_test.LiveTest, state$.State]),
    [_onError]: dart.fnType(dart.void, [live_test.LiveTest, core.Object, core.StackTrace]),
    [_onDone]: dart.fnType(dart.void, []),
    [_progressLine]: dart.fnType(dart.void, [core.String], {color: core.String, suffix: core.String}),
    [_timeString]: dart.fnType(core.String, [core.Duration]),
    [_description]: dart.fnType(core.String, [live_test.LiveTest])
  }));
  dart.setLibraryUri(test_compat._Reporter, "package:flutter_test/src/test_compat.dart");
  dart.setFieldSignature(test_compat._Reporter, () => ({
    __proto__: dart.getFields(test_compat._Reporter.__proto__),
    passed: dart.finalFieldType(core.List$(live_test.LiveTest)),
    failed: dart.finalFieldType(core.List$(live_test.LiveTest)),
    skipped: dart.finalFieldType(core.List$(test$.Test)),
    [_green]: dart.finalFieldType(core.String),
    [_red]: dart.finalFieldType(core.String),
    [_yellow]: dart.finalFieldType(core.String),
    [_bold]: dart.finalFieldType(core.String),
    [_noColor]: dart.finalFieldType(core.String),
    [_printPath]: dart.finalFieldType(core.bool),
    [_stopwatch]: dart.finalFieldType(core.Stopwatch),
    [_lastProgressPassed]: dart.fieldType(core.int),
    [_lastProgressSkipped]: dart.fieldType(core.int),
    [_lastProgressFailed]: dart.fieldType(core.int),
    [_lastProgressMessage]: dart.fieldType(core.String),
    [_lastProgressSuffix]: dart.fieldType(core.String),
    [_subscriptions]: dart.finalFieldType(core.Set$(async.StreamSubscription$(dart.void)))
  }));
  test_compat._runGroup = function _runGroup(suiteConfig, group, parents, reporter) {
    return async.async(dart.void, function* _runGroup() {
      parents[$add](group);
      try {
        let skipGroup = group.metadata.skip;
        let setUpAllSucceeded = true;
        if (!dart.test(skipGroup) && group.setUpAll != null) {
          let liveTest = group.setUpAll.load(suiteConfig, {groups: parents});
          yield test_compat._runLiveTest(suiteConfig, liveTest, reporter, {countSuccess: false});
          setUpAllSucceeded = liveTest.state.result.isPassing;
        }
        if (dart.test(setUpAllSucceeded)) {
          for (let entry of group.entries) {
            if (group$.Group.is(entry)) {
              yield test_compat._runGroup(suiteConfig, entry, parents, reporter);
            } else if (dart.test(entry.metadata.skip)) {
              yield test_compat._runSkippedTest(suiteConfig, test$.Test._check(entry), parents, reporter);
            } else {
              let test = test$.Test._check(entry);
              yield test_compat._runLiveTest(suiteConfig, test.load(suiteConfig, {groups: parents}), reporter);
            }
          }
        }
        if (!dart.test(skipGroup) && group.tearDownAll != null) {
          let liveTest = group.tearDownAll.load(suiteConfig, {groups: parents});
          yield test_compat._runLiveTest(suiteConfig, liveTest, reporter, {countSuccess: false});
        }
      } finally {
        parents[$remove](group);
      }
    });
  };
  test_compat._runLiveTest = function _runLiveTest(suiteConfig, liveTest, reporter, opts) {
    let countSuccess = opts && 'countSuccess' in opts ? opts.countSuccess : true;
    return async.async(dart.void, function* _runLiveTest() {
      reporter[_onTestStarted](liveTest);
      yield FutureOfvoid().microtask(dart.bind(liveTest, 'run'));
      yield null;
      let isSuccess = liveTest.state.result.isPassing;
      if (dart.test(isSuccess)) {
        reporter.passed[$add](liveTest);
      } else {
        reporter.failed[$add](liveTest);
      }
    });
  };
  test_compat._runSkippedTest = function _runSkippedTest(suiteConfig, test, parents, reporter) {
    return async.async(dart.void, function* _runSkippedTest() {
      let skipped = new invoker.LocalTest.new(test.name, test.metadata, dart.fn(() => {
      }, VoidToNull()), {trace: test.trace});
      if (skipped.metadata.skipReason != null) {
        core.print("Skip: " + dart.str(skipped.metadata.skipReason));
      }
      let liveTest = skipped.load(suiteConfig);
      reporter[_onTestStarted](liveTest);
      reporter.skipped[$add](skipped);
    });
  };
  test_compat.test = function test(description, body, opts) {
    let testOn = opts && 'testOn' in opts ? opts.testOn : null;
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    let skip = opts && 'skip' in opts ? opts.skip : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let onPlatform = opts && 'onPlatform' in opts ? opts.onPlatform : null;
    let retry = opts && 'retry' in opts ? opts.retry : null;
    test_compat._declarer.test(dart.toString(description), VoidTodynamic()._check(body), {testOn: testOn, timeout: timeout, skip: skip, onPlatform: onPlatform, tags: tags, retry: retry});
  };
  test_compat.group = function group(description, body, opts) {
    let skip = opts && 'skip' in opts ? opts.skip : null;
    test_compat._declarer.group(dart.toString(description), VoidTovoid()._check(body), {skip: skip});
  };
  test_compat.setUp = function setUp(body) {
    test_compat._declarer.setUp(VoidTodynamic()._check(body));
  };
  test_compat.tearDown = function tearDown(body) {
    test_compat._declarer.tearDown(VoidTodynamic()._check(body));
  };
  test_compat.setUpAll = function setUpAll(body) {
    test_compat._declarer.setUpAll(VoidTodynamic()._check(body));
  };
  test_compat.tearDownAll = function tearDownAll(body) {
    test_compat._declarer.tearDownAll(VoidTodynamic()._check(body));
  };
  test_compat._indent = function _indent(string, opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let first = opts && 'first' in opts ? opts.first : null;
    size == null ? size = first == null ? 2 : first.length : null;
    return test_compat._prefixLines(string, " "[$times](size), {first: first});
  };
  test_compat._prefixLines = function _prefixLines(text, prefix, opts) {
    let t0, t0$;
    let first = opts && 'first' in opts ? opts.first : null;
    let last = opts && 'last' in opts ? opts.last : null;
    let single = opts && 'single' in opts ? opts.single : null;
    first == null ? first = prefix : null;
    last == null ? last = prefix : null;
    single == null ? single = (t0$ = (t0 = first, t0 == null ? last : t0), t0$ == null ? prefix : t0$) : null;
    let lines = text[$split]("\n");
    if (lines[$length] === 1) {
      return dart.str(single) + dart.str(text);
    }
    let buffer = new core.StringBuffer.new(dart.str(first) + dart.str(lines[$first]) + "\n");
    for (let line of lines[$skip](1)[$take](dart.notNull(lines[$length]) - 2)) {
      buffer.writeln(dart.str(prefix) + dart.str(line));
    }
    buffer.write(dart.str(last) + dart.str(lines[$last]));
    return buffer.toString();
  };
  let C0;
  dart.copyProperties(test_compat, {
    get _declarer() {
      let declarer = declarer$.Declarer._check(async.Zone.current._get(C0 || CT.C0));
      if (declarer != null) {
        return declarer;
      }
      if (test_compat._localDeclarer == null) {
        test_compat._localDeclarer = new declarer$.Declarer.new();
        FutureOfvoid().new(dart.fn(() => {
          invoker.Invoker.guard(FutureOfvoid(), dart.fn(() => async.async(core.Null, function*() {
            let reporter = new test_compat._Reporter.new({color: false});
            let group = test_compat._declarer.build();
            let suite = new suite$.Suite.new(group, new suite_platform.SuitePlatform.new(runtime.Runtime.vm));
            yield test_compat._runGroup(suite, group, JSArrayOfGroup().of([]), reporter);
            reporter[_onDone]();
          }), VoidToFutureOfNull()));
        }, VoidToNull()));
      }
      return test_compat._localDeclarer;
    }
  });
  dart.defineLazy(test_compat, {
    /*test_compat._localDeclarer*/get _localDeclarer() {
      return null;
    },
    set _localDeclarer(_) {}
  });
  stack_manipulation.reportExpectCall = function reportExpectCall(stack, information) {
    let line0 = core.RegExp.new("^#0 +fail \\(.+\\)$");
    let line1 = core.RegExp.new("^#1 +_expect \\(.+\\)$");
    let line2 = core.RegExp.new("^#2 +expect \\(.+\\)$");
    let line3 = core.RegExp.new("^#3 +expect \\(.+\\)$");
    let line4 = core.RegExp.new("^#4 +[^(]+ \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
    let stackLines = dart.toString(stack)[$split]("\n");
    if (line0.firstMatch(stackLines[$_get](0)) != null && line1.firstMatch(stackLines[$_get](1)) != null && line2.firstMatch(stackLines[$_get](2)) != null && line3.firstMatch(stackLines[$_get](3)) != null) {
      let expectMatch = line4.firstMatch(stackLines[$_get](4));
      if (!(expectMatch != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/stack_manipulation.dart", 29, 12, "expectMatch != null");
      if (!(expectMatch.groupCount === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/stack_manipulation.dart", 30, 12, "expectMatch.groupCount == 2");
      information[$add](new assertions.DiagnosticsStackTrace.singleFrame("This was caught by the test expectation on the following line", {frame: dart.str(expectMatch.group(1)) + " line " + dart.str(expectMatch.group(2))}));
      return 4;
    }
    return 0;
  };
  test_vsync.TestVSync = class TestVSync extends core.Object {
    createTicker(onTick) {
      return new ticker.Ticker.new(onTick);
    }
  };
  (test_vsync.TestVSync.new = function() {
    ;
  }).prototype = test_vsync.TestVSync.prototype;
  dart.addTypeTests(test_vsync.TestVSync);
  test_vsync.TestVSync[dart.implements] = () => [ticker.TickerProvider];
  dart.setMethodSignature(test_vsync.TestVSync, () => ({
    __proto__: dart.getMethods(test_vsync.TestVSync.__proto__),
    createTicker: dart.fnType(ticker.Ticker, [dart.fnType(dart.void, [core.Duration])])
  }));
  dart.setLibraryUri(test_vsync.TestVSync, "package:flutter_test/src/test_vsync.dart");
  const _devicePixelRatio = dart.privateName(window, "_devicePixelRatio");
  const _physicalSizeTestValue = dart.privateName(window, "_physicalSizeTestValue");
  const _physicalDepthTestValue = dart.privateName(window, "_physicalDepthTestValue");
  const _viewInsetsTestValue = dart.privateName(window, "_viewInsetsTestValue");
  const _viewPaddingTestValue = dart.privateName(window, "_viewPaddingTestValue");
  const _paddingTestValue = dart.privateName(window, "_paddingTestValue");
  const _systemGestureInsetsTestValue = dart.privateName(window, "_systemGestureInsetsTestValue");
  const _localeTestValue = dart.privateName(window, "_localeTestValue");
  const _localesTestValue = dart.privateName(window, "_localesTestValue");
  const _initialLifecycleStateTestValue = dart.privateName(window, "_initialLifecycleStateTestValue");
  const _textScaleFactorTestValue = dart.privateName(window, "_textScaleFactorTestValue");
  const _platformBrightnessTestValue = dart.privateName(window, "_platformBrightnessTestValue");
  const _alwaysUse24HourFormatTestValue = dart.privateName(window, "_alwaysUse24HourFormatTestValue");
  const _defaultRouteNameTestValue = dart.privateName(window, "_defaultRouteNameTestValue");
  const _semanticsEnabledTestValue = dart.privateName(window, "_semanticsEnabledTestValue");
  const _accessibilityFeaturesTestValue = dart.privateName(window, "_accessibilityFeaturesTestValue");
  const _window = dart.privateName(window, "_window");
  const _onLocaleChanged = dart.privateName(window, "_onLocaleChanged");
  let C1;
  const _onLocaleChanged$ = dart.privateName(ui, "_onLocaleChanged");
  const _onAccessibilityFeaturesChanged = dart.privateName(window, "_onAccessibilityFeaturesChanged");
  let C2;
  const _onAccessibilityFeaturesChanged$ = dart.privateName(ui, "_onAccessibilityFeaturesChanged");
  const _onPlatformMessage = dart.privateName(window, "_onPlatformMessage");
  let C3;
  const _onPlatformMessage$ = dart.privateName(ui, "_onPlatformMessage");
  const _onBeginFrame = dart.privateName(window, "_onBeginFrame");
  let C4;
  const _onBeginFrame$ = dart.privateName(ui, "_onBeginFrame");
  const _onDrawFrame = dart.privateName(window, "_onDrawFrame");
  let C5;
  const _onDrawFrame$ = dart.privateName(ui, "_onDrawFrame");
  const _onPointerDataPacket = dart.privateName(window, "_onPointerDataPacket");
  let C6;
  const _onPointerDataPacket$ = dart.privateName(ui, "_onPointerDataPacket");
  const _onReportTimingsZone = dart.privateName(window, "_onReportTimingsZone");
  let C7;
  const _onReportTimingsZone$ = dart.privateName(ui, "_onReportTimingsZone");
  const _textScaleFactor = dart.privateName(window, "_textScaleFactor");
  let C8;
  const _textScaleFactor$ = dart.privateName(ui, "_textScaleFactor");
  const _alwaysUse24HourFormat = dart.privateName(window, "_alwaysUse24HourFormat");
  let C9;
  const _alwaysUse24HourFormat$ = dart.privateName(ui, "_alwaysUse24HourFormat");
  const _initialLifecycleState = dart.privateName(window, "_initialLifecycleState");
  let C10;
  const _initialLifecycleState$ = dart.privateName(ui, "_initialLifecycleState");
  const _accessibilityFeatures = dart.privateName(window, "_accessibilityFeatures");
  let C11;
  const _accessibilityFeatures$ = dart.privateName(ui, "_accessibilityFeatures");
  const _rasterizer = dart.privateName(window, "_rasterizer");
  let C12;
  const _rasterizer$ = dart.privateName(ui, "_rasterizer");
  const _onSemanticsAction = dart.privateName(window, "_onSemanticsAction");
  let C13;
  const _onSemanticsAction$ = dart.privateName(ui, "_onSemanticsAction");
  const _onTextScaleFactorChanged = dart.privateName(window, "_onTextScaleFactorChanged");
  let C14;
  const _onTextScaleFactorChanged$ = dart.privateName(ui, "_onTextScaleFactorChanged");
  const _locales = dart.privateName(window, "_locales");
  let C15;
  const _locales$ = dart.privateName(ui, "_locales");
  const _onSemanticsEnabledChanged = dart.privateName(window, "_onSemanticsEnabledChanged");
  let C16;
  const _onSemanticsEnabledChanged$ = dart.privateName(ui, "_onSemanticsEnabledChanged");
  const _onReportTimings = dart.privateName(window, "_onReportTimings");
  let C17;
  const _onReportTimings$ = dart.privateName(ui, "_onReportTimings");
  const _onPlatformBrightnessChanged = dart.privateName(window, "_onPlatformBrightnessChanged");
  let C18;
  const _onPlatformBrightnessChanged$ = dart.privateName(ui, "_onPlatformBrightnessChanged");
  const _onMetricsChanged = dart.privateName(window, "_onMetricsChanged");
  let C19;
  const _onMetricsChanged$ = dart.privateName(ui, "_onMetricsChanged");
  const _onLocaleChanged_ = dart.privateName(window, "_onLocaleChanged=");
  let C20;
  const _onAccessibilityFeaturesChanged_ = dart.privateName(window, "_onAccessibilityFeaturesChanged=");
  let C21;
  const _onPlatformMessage_ = dart.privateName(window, "_onPlatformMessage=");
  let C22;
  const _onBeginFrame_ = dart.privateName(window, "_onBeginFrame=");
  let C23;
  const _onDrawFrame_ = dart.privateName(window, "_onDrawFrame=");
  let C24;
  const _onPointerDataPacket_ = dart.privateName(window, "_onPointerDataPacket=");
  let C25;
  const _onReportTimingsZone_ = dart.privateName(window, "_onReportTimingsZone=");
  let C26;
  const _textScaleFactor_ = dart.privateName(window, "_textScaleFactor=");
  let C27;
  const _alwaysUse24HourFormat_ = dart.privateName(window, "_alwaysUse24HourFormat=");
  let C28;
  const _initialLifecycleState_ = dart.privateName(window, "_initialLifecycleState=");
  let C29;
  const _accessibilityFeatures_ = dart.privateName(window, "_accessibilityFeatures=");
  let C30;
  const _onSemanticsAction_ = dart.privateName(window, "_onSemanticsAction=");
  let C31;
  const _onTextScaleFactorChanged_ = dart.privateName(window, "_onTextScaleFactorChanged=");
  let C32;
  const _locales_ = dart.privateName(window, "_locales=");
  let C33;
  const _onSemanticsEnabledChanged_ = dart.privateName(window, "_onSemanticsEnabledChanged=");
  let C34;
  const _onReportTimings_ = dart.privateName(window, "_onReportTimings=");
  let C35;
  const _onPlatformBrightnessChanged_ = dart.privateName(window, "_onPlatformBrightnessChanged=");
  let C36;
  const _onMetricsChanged_ = dart.privateName(window, "_onMetricsChanged=");
  let C37;
  window.TestWindow = class TestWindow extends core.Object {
    get devicePixelRatio() {
      let t0;
      t0 = this[_devicePixelRatio];
      return t0 == null ? this[_window].devicePixelRatio : t0;
    }
    set devicePixelRatioTestValue(devicePixelRatio) {
      this[_devicePixelRatio] = devicePixelRatio;
      this.onMetricsChanged();
    }
    clearDevicePixelRatioTestValue() {
      this[_devicePixelRatio] = null;
      this.onMetricsChanged();
    }
    get physicalSize() {
      let t0;
      t0 = this[_physicalSizeTestValue];
      return t0 == null ? this[_window].physicalSize : t0;
    }
    set physicalSizeTestValue(physicalSizeTestValue) {
      this[_physicalSizeTestValue] = physicalSizeTestValue;
      this.onMetricsChanged();
    }
    clearPhysicalSizeTestValue() {
      this[_physicalSizeTestValue] = null;
      this.onMetricsChanged();
    }
    get physicalDepth() {
      let t0;
      t0 = this[_physicalDepthTestValue];
      return t0 == null ? this[_window].physicalDepth : t0;
    }
    set physicalDepthTestValue(physicalDepthTestValue) {
      this[_physicalDepthTestValue] = physicalDepthTestValue;
      this.onMetricsChanged();
    }
    clearPhysicalDepthTestValue() {
      this[_physicalDepthTestValue] = null;
      this.onMetricsChanged();
    }
    get viewInsets() {
      let t0;
      t0 = this[_viewInsetsTestValue];
      return t0 == null ? this[_window].viewInsets : t0;
    }
    set viewInsetsTestValue(viewInsetsTestValue) {
      this[_viewInsetsTestValue] = viewInsetsTestValue;
      this.onMetricsChanged();
    }
    clearViewInsetsTestValue() {
      this[_viewInsetsTestValue] = null;
      this.onMetricsChanged();
    }
    get viewPadding() {
      let t0;
      t0 = this[_viewPaddingTestValue];
      return t0 == null ? this[_window].padding : t0;
    }
    set viewPaddingTestValue(viewPaddingTestValue) {
      this[_viewPaddingTestValue] = viewPaddingTestValue;
      this.onMetricsChanged();
    }
    clearViewPaddingTestValue() {
      this[_viewPaddingTestValue] = null;
      this.onMetricsChanged();
    }
    get padding() {
      let t0;
      t0 = this[_paddingTestValue];
      return t0 == null ? this[_window].padding : t0;
    }
    set paddingTestValue(paddingTestValue) {
      this[_paddingTestValue] = paddingTestValue;
      this.onMetricsChanged();
    }
    clearPaddingTestValue() {
      this[_paddingTestValue] = null;
      this.onMetricsChanged();
    }
    get systemGestureInsets() {
      let t0;
      t0 = this[_systemGestureInsetsTestValue];
      return t0 == null ? this[_window].systemGestureInsets : t0;
    }
    set systemGestureInsetsTestValue(systemGestureInsetsTestValue) {
      this[_systemGestureInsetsTestValue] = systemGestureInsetsTestValue;
      this.onMetricsChanged();
    }
    clearSystemGestureInsetsTestValue() {
      this[_systemGestureInsetsTestValue] = null;
      this.onMetricsChanged();
    }
    get onMetricsChanged() {
      return this[_window].onMetricsChanged;
    }
    set onMetricsChanged(callback) {
      this[_window].onMetricsChanged = callback;
    }
    get locale() {
      let t0;
      t0 = this[_localeTestValue];
      return t0 == null ? this[_window].locale : t0;
    }
    set localeTestValue(localeTestValue) {
      this[_localeTestValue] = localeTestValue;
      this.onLocaleChanged();
    }
    clearLocaleTestValue() {
      this[_localeTestValue] = null;
      this.onLocaleChanged();
    }
    get locales() {
      let t0;
      t0 = this[_localesTestValue];
      return t0 == null ? this[_window].locales : t0;
    }
    set localesTestValue(localesTestValue) {
      this[_localesTestValue] = localesTestValue;
      this.onLocaleChanged();
    }
    clearLocalesTestValue() {
      this[_localesTestValue] = null;
      this.onLocaleChanged();
    }
    get onLocaleChanged() {
      return this[_window].onLocaleChanged;
    }
    set onLocaleChanged(callback) {
      this[_window].onLocaleChanged = callback;
    }
    get initialLifecycleState() {
      return this[_initialLifecycleStateTestValue];
    }
    set initialLifecycleStateTestValue(state) {
      this[_initialLifecycleStateTestValue] = state;
    }
    get textScaleFactor() {
      let t0;
      t0 = this[_textScaleFactorTestValue];
      return t0 == null ? this[_window].textScaleFactor : t0;
    }
    set textScaleFactorTestValue(textScaleFactorTestValue) {
      this[_textScaleFactorTestValue] = textScaleFactorTestValue;
      this.onTextScaleFactorChanged();
    }
    clearTextScaleFactorTestValue() {
      this[_textScaleFactorTestValue] = null;
      this.onTextScaleFactorChanged();
    }
    get platformBrightness() {
      let t0;
      t0 = this[_platformBrightnessTestValue];
      return t0 == null ? this[_window].platformBrightness : t0;
    }
    get onPlatformBrightnessChanged() {
      return this[_window].onPlatformBrightnessChanged;
    }
    set onPlatformBrightnessChanged(callback) {
      this[_window].onPlatformBrightnessChanged = callback;
    }
    set platformBrightnessTestValue(platformBrightnessTestValue) {
      this[_platformBrightnessTestValue] = platformBrightnessTestValue;
      this.onPlatformBrightnessChanged();
    }
    clearPlatformBrightnessTestValue() {
      this[_platformBrightnessTestValue] = null;
      this.onPlatformBrightnessChanged();
    }
    get alwaysUse24HourFormat() {
      let t0;
      t0 = this[_alwaysUse24HourFormatTestValue];
      return t0 == null ? this[_window].alwaysUse24HourFormat : t0;
    }
    set alwaysUse24HourFormatTestValue(alwaysUse24HourFormatTestValue) {
      this[_alwaysUse24HourFormatTestValue] = alwaysUse24HourFormatTestValue;
    }
    clearAlwaysUse24HourTestValue() {
      this[_alwaysUse24HourFormatTestValue] = null;
    }
    get onTextScaleFactorChanged() {
      return this[_window].onTextScaleFactorChanged;
    }
    set onTextScaleFactorChanged(callback) {
      this[_window].onTextScaleFactorChanged = callback;
    }
    get onBeginFrame() {
      return this[_window].onBeginFrame;
    }
    set onBeginFrame(callback) {
      this[_window].onBeginFrame = callback;
    }
    get onDrawFrame() {
      return this[_window].onDrawFrame;
    }
    set onDrawFrame(callback) {
      this[_window].onDrawFrame = callback;
    }
    get onReportTimings() {
      return this[_window].onReportTimings;
    }
    set onReportTimings(callback) {
      this[_window].onReportTimings = callback;
    }
    get onPointerDataPacket() {
      return this[_window].onPointerDataPacket;
    }
    set onPointerDataPacket(callback) {
      this[_window].onPointerDataPacket = callback;
    }
    get defaultRouteName() {
      let t0;
      t0 = this[_defaultRouteNameTestValue];
      return t0 == null ? this[_window].defaultRouteName : t0;
    }
    set defaultRouteNameTestValue(defaultRouteNameTestValue) {
      this[_defaultRouteNameTestValue] = defaultRouteNameTestValue;
    }
    clearDefaultRouteNameTestValue() {
      this[_defaultRouteNameTestValue] = null;
    }
    scheduleFrame() {
      this[_window].scheduleFrame();
    }
    render(scene) {
      this[_window].render(scene);
    }
    get semanticsEnabled() {
      let t0;
      t0 = this[_semanticsEnabledTestValue];
      return t0 == null ? this[_window].semanticsEnabled : t0;
    }
    set semanticsEnabledTestValue(semanticsEnabledTestValue) {
      this[_semanticsEnabledTestValue] = semanticsEnabledTestValue;
      this.onSemanticsEnabledChanged();
    }
    clearSemanticsEnabledTestValue() {
      this[_semanticsEnabledTestValue] = null;
      this.onSemanticsEnabledChanged();
    }
    get onSemanticsEnabledChanged() {
      return this[_window].onSemanticsEnabledChanged;
    }
    set onSemanticsEnabledChanged(callback) {
      this[_window].onSemanticsEnabledChanged = callback;
    }
    get onSemanticsAction() {
      return this[_window].onSemanticsAction;
    }
    set onSemanticsAction(callback) {
      this[_window].onSemanticsAction = callback;
    }
    get accessibilityFeatures() {
      let t0;
      t0 = this[_accessibilityFeaturesTestValue];
      return t0 == null ? this[_window].accessibilityFeatures : t0;
    }
    set accessibilityFeaturesTestValue(accessibilityFeaturesTestValue) {
      this[_accessibilityFeaturesTestValue] = accessibilityFeaturesTestValue;
      this.onAccessibilityFeaturesChanged();
    }
    clearAccessibilityFeaturesTestValue() {
      this[_accessibilityFeaturesTestValue] = null;
      this.onAccessibilityFeaturesChanged();
    }
    get onAccessibilityFeaturesChanged() {
      return this[_window].onAccessibilityFeaturesChanged;
    }
    set onAccessibilityFeaturesChanged(callback) {
      this[_window].onAccessibilityFeaturesChanged = callback;
    }
    updateSemantics(update) {
      this[_window].updateSemantics(update);
    }
    setIsolateDebugName(name) {
      this[_window].setIsolateDebugName(name);
    }
    sendPlatformMessage(name, data, callback) {
      this[_window].sendPlatformMessage(name, data, callback);
    }
    get onPlatformMessage() {
      return this[_window].onPlatformMessage;
    }
    set onPlatformMessage(callback) {
      this[_window].onPlatformMessage = callback;
    }
    clearAllTestValues() {
      this.clearAccessibilityFeaturesTestValue();
      this.clearAlwaysUse24HourTestValue();
      this.clearDefaultRouteNameTestValue();
      this.clearDevicePixelRatioTestValue();
      this.clearPlatformBrightnessTestValue();
      this.clearLocaleTestValue();
      this.clearLocalesTestValue();
      this.clearPaddingTestValue();
      this.clearPhysicalSizeTestValue();
      this.clearPhysicalDepthTestValue();
      this.clearSemanticsEnabledTestValue();
      this.clearTextScaleFactorTestValue();
      this.clearViewInsetsTestValue();
    }
    noSuchMethod(invocation) {
      return null;
    }
    get [_onLocaleChanged$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C1 || CT.C1)));
    }
    get [_onAccessibilityFeaturesChanged$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C2 || CT.C2)));
    }
    get [_onPlatformMessage$]() {
      return StringAndByteDataAndFnTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C3 || CT.C3)));
    }
    get [_onBeginFrame$]() {
      return DurationTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_onDrawFrame$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C5 || CT.C5)));
    }
    get [_onPointerDataPacket$]() {
      return PointerDataPacketTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C6 || CT.C6)));
    }
    get [_onReportTimingsZone$]() {
      return async.Zone._check(this.noSuchMethod(new core._Invocation.getter(C7 || CT.C7)));
    }
    get [_textScaleFactor$]() {
      return core.double._check(this.noSuchMethod(new core._Invocation.getter(C8 || CT.C8)));
    }
    get [_alwaysUse24HourFormat$]() {
      return core.bool._check(this.noSuchMethod(new core._Invocation.getter(C9 || CT.C9)));
    }
    get [_initialLifecycleState$]() {
      return core.String._check(this.noSuchMethod(new core._Invocation.getter(C10 || CT.C10)));
    }
    get [_accessibilityFeatures$]() {
      return ui.AccessibilityFeatures._check(this.noSuchMethod(new core._Invocation.getter(C11 || CT.C11)));
    }
    get [_rasterizer$]() {
      return _engine.Rasterizer._check(this.noSuchMethod(new core._Invocation.getter(C12 || CT.C12)));
    }
    get [_onSemanticsAction$]() {
      return intAndSemanticsActionAndByteDataTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C13 || CT.C13)));
    }
    get [_onTextScaleFactorChanged$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C14 || CT.C14)));
    }
    get [_locales$]() {
      return ListOfLocale()._check(this.noSuchMethod(new core._Invocation.getter(C15 || CT.C15)));
    }
    get [_onSemanticsEnabledChanged$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C16 || CT.C16)));
    }
    get [_onReportTimings$]() {
      return ListOfFrameTimingTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C17 || CT.C17)));
    }
    get [_onPlatformBrightnessChanged$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C18 || CT.C18)));
    }
    get [_onMetricsChanged$]() {
      return VoidTovoid()._check(this.noSuchMethod(new core._Invocation.getter(C19 || CT.C19)));
    }
    set [_onLocaleChanged$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C20 || CT.C20, value));
    }
    set [_onAccessibilityFeaturesChanged$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C21 || CT.C21, value));
    }
    set [_onPlatformMessage$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C22 || CT.C22, value));
    }
    set [_onBeginFrame$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C23 || CT.C23, value));
    }
    set [_onDrawFrame$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C24 || CT.C24, value));
    }
    set [_onPointerDataPacket$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C25 || CT.C25, value));
    }
    set [_onReportTimingsZone$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C26 || CT.C26, value));
    }
    set [_textScaleFactor$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C27 || CT.C27, value));
    }
    set [_alwaysUse24HourFormat$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C28 || CT.C28, value));
    }
    set [_initialLifecycleState$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C29 || CT.C29, value));
    }
    set [_accessibilityFeatures$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C30 || CT.C30, value));
    }
    set [_onSemanticsAction$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C31 || CT.C31, value));
    }
    set [_onTextScaleFactorChanged$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C32 || CT.C32, value));
    }
    set [_locales$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C33 || CT.C33, value));
    }
    set [_onSemanticsEnabledChanged$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C34 || CT.C34, value));
    }
    set [_onReportTimings$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C35 || CT.C35, value));
    }
    set [_onPlatformBrightnessChanged$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C36 || CT.C36, value));
    }
    set [_onMetricsChanged$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C37 || CT.C37, value));
    }
  };
  (window.TestWindow.new = function(opts) {
    let window = opts && 'window' in opts ? opts.window : null;
    this[_devicePixelRatio] = null;
    this[_physicalSizeTestValue] = null;
    this[_physicalDepthTestValue] = null;
    this[_viewInsetsTestValue] = null;
    this[_viewPaddingTestValue] = null;
    this[_paddingTestValue] = null;
    this[_systemGestureInsetsTestValue] = null;
    this[_localeTestValue] = null;
    this[_localesTestValue] = null;
    this[_initialLifecycleStateTestValue] = null;
    this[_textScaleFactorTestValue] = null;
    this[_platformBrightnessTestValue] = null;
    this[_alwaysUse24HourFormatTestValue] = null;
    this[_defaultRouteNameTestValue] = null;
    this[_semanticsEnabledTestValue] = null;
    this[_accessibilityFeaturesTestValue] = null;
    this[_window] = window;
    ;
  }).prototype = window.TestWindow.prototype;
  dart.addTypeTests(window.TestWindow);
  window.TestWindow[dart.implements] = () => [ui.Window];
  dart.setMethodSignature(window.TestWindow, () => ({
    __proto__: dart.getMethods(window.TestWindow.__proto__),
    clearDevicePixelRatioTestValue: dart.fnType(dart.void, []),
    clearPhysicalSizeTestValue: dart.fnType(dart.void, []),
    clearPhysicalDepthTestValue: dart.fnType(dart.void, []),
    clearViewInsetsTestValue: dart.fnType(dart.void, []),
    clearViewPaddingTestValue: dart.fnType(dart.void, []),
    clearPaddingTestValue: dart.fnType(dart.void, []),
    clearSystemGestureInsetsTestValue: dart.fnType(dart.void, []),
    clearLocaleTestValue: dart.fnType(dart.void, []),
    clearLocalesTestValue: dart.fnType(dart.void, []),
    clearTextScaleFactorTestValue: dart.fnType(dart.void, []),
    clearPlatformBrightnessTestValue: dart.fnType(dart.void, []),
    clearAlwaysUse24HourTestValue: dart.fnType(dart.void, []),
    clearDefaultRouteNameTestValue: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    render: dart.fnType(dart.void, [ui.Scene]),
    clearSemanticsEnabledTestValue: dart.fnType(dart.void, []),
    clearAccessibilityFeaturesTestValue: dart.fnType(dart.void, []),
    updateSemantics: dart.fnType(dart.void, [ui.SemanticsUpdate]),
    setIsolateDebugName: dart.fnType(dart.void, [core.String]),
    sendPlatformMessage: dart.fnType(dart.void, [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    clearAllTestValues: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(window.TestWindow, () => ({
    __proto__: dart.getGetters(window.TestWindow.__proto__),
    devicePixelRatio: core.double,
    physicalSize: ui.Size,
    physicalDepth: core.double,
    viewInsets: ui.WindowPadding,
    viewPadding: ui.WindowPadding,
    padding: ui.WindowPadding,
    systemGestureInsets: ui.WindowPadding,
    onMetricsChanged: dart.fnType(dart.void, []),
    locale: ui.Locale,
    locales: core.List$(ui.Locale),
    onLocaleChanged: dart.fnType(dart.void, []),
    initialLifecycleState: core.String,
    textScaleFactor: core.double,
    platformBrightness: ui.Brightness,
    onPlatformBrightnessChanged: dart.fnType(dart.void, []),
    alwaysUse24HourFormat: core.bool,
    onTextScaleFactorChanged: dart.fnType(dart.void, []),
    onBeginFrame: dart.fnType(dart.void, [core.Duration]),
    onDrawFrame: dart.fnType(dart.void, []),
    onReportTimings: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    onPointerDataPacket: dart.fnType(dart.void, [ui.PointerDataPacket]),
    defaultRouteName: core.String,
    semanticsEnabled: core.bool,
    onSemanticsEnabledChanged: dart.fnType(dart.void, []),
    onSemanticsAction: dart.fnType(dart.void, [core.int, ui.SemanticsAction, typed_data.ByteData]),
    accessibilityFeatures: ui.AccessibilityFeatures,
    onAccessibilityFeaturesChanged: dart.fnType(dart.void, []),
    onPlatformMessage: dart.fnType(dart.void, [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    [_onLocaleChanged$]: dart.fnType(dart.void, []),
    [_onAccessibilityFeaturesChanged$]: dart.fnType(dart.void, []),
    [_onPlatformMessage$]: dart.fnType(dart.void, [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    [_onBeginFrame$]: dart.fnType(dart.void, [core.Duration]),
    [_onDrawFrame$]: dart.fnType(dart.void, []),
    [_onPointerDataPacket$]: dart.fnType(dart.void, [ui.PointerDataPacket]),
    [_onReportTimingsZone$]: async.Zone,
    [_textScaleFactor$]: core.double,
    [_alwaysUse24HourFormat$]: core.bool,
    [_initialLifecycleState$]: core.String,
    [_accessibilityFeatures$]: ui.AccessibilityFeatures,
    [_rasterizer$]: _engine.Rasterizer,
    [_onSemanticsAction$]: dart.fnType(dart.void, [core.int, ui.SemanticsAction, typed_data.ByteData]),
    [_onTextScaleFactorChanged$]: dart.fnType(dart.void, []),
    [_locales$]: core.List$(ui.Locale),
    [_onSemanticsEnabledChanged$]: dart.fnType(dart.void, []),
    [_onReportTimings$]: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    [_onPlatformBrightnessChanged$]: dart.fnType(dart.void, []),
    [_onMetricsChanged$]: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(window.TestWindow, () => ({
    __proto__: dart.getSetters(window.TestWindow.__proto__),
    devicePixelRatioTestValue: core.double,
    physicalSizeTestValue: ui.Size,
    physicalDepthTestValue: core.double,
    viewInsetsTestValue: ui.WindowPadding,
    viewPaddingTestValue: ui.WindowPadding,
    paddingTestValue: ui.WindowPadding,
    systemGestureInsetsTestValue: ui.WindowPadding,
    onMetricsChanged: dart.fnType(dart.void, []),
    localeTestValue: ui.Locale,
    localesTestValue: core.List$(ui.Locale),
    onLocaleChanged: dart.fnType(dart.void, []),
    initialLifecycleStateTestValue: core.String,
    textScaleFactorTestValue: core.double,
    onPlatformBrightnessChanged: dart.fnType(dart.void, []),
    platformBrightnessTestValue: ui.Brightness,
    alwaysUse24HourFormatTestValue: core.bool,
    onTextScaleFactorChanged: dart.fnType(dart.void, []),
    onBeginFrame: dart.fnType(dart.void, [core.Duration]),
    onDrawFrame: dart.fnType(dart.void, []),
    onReportTimings: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    onPointerDataPacket: dart.fnType(dart.void, [ui.PointerDataPacket]),
    defaultRouteNameTestValue: core.String,
    semanticsEnabledTestValue: core.bool,
    onSemanticsEnabledChanged: dart.fnType(dart.void, []),
    onSemanticsAction: dart.fnType(dart.void, [core.int, ui.SemanticsAction, typed_data.ByteData]),
    accessibilityFeaturesTestValue: ui.AccessibilityFeatures,
    onAccessibilityFeaturesChanged: dart.fnType(dart.void, []),
    onPlatformMessage: dart.fnType(dart.void, [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    [_onLocaleChanged$]: dart.fnType(dart.void, []),
    [_onAccessibilityFeaturesChanged$]: dart.fnType(dart.void, []),
    [_onPlatformMessage$]: dart.fnType(dart.void, [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    [_onBeginFrame$]: dart.fnType(dart.void, [core.Duration]),
    [_onDrawFrame$]: dart.fnType(dart.void, []),
    [_onPointerDataPacket$]: dart.fnType(dart.void, [ui.PointerDataPacket]),
    [_onReportTimingsZone$]: async.Zone,
    [_textScaleFactor$]: core.double,
    [_alwaysUse24HourFormat$]: core.bool,
    [_initialLifecycleState$]: core.String,
    [_accessibilityFeatures$]: ui.AccessibilityFeatures,
    [_onSemanticsAction$]: dart.fnType(dart.void, [core.int, ui.SemanticsAction, typed_data.ByteData]),
    [_onTextScaleFactorChanged$]: dart.fnType(dart.void, []),
    [_locales$]: core.List$(ui.Locale),
    [_onSemanticsEnabledChanged$]: dart.fnType(dart.void, []),
    [_onReportTimings$]: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    [_onPlatformBrightnessChanged$]: dart.fnType(dart.void, []),
    [_onMetricsChanged$]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(window.TestWindow, "package:flutter_test/src/window.dart");
  dart.setFieldSignature(window.TestWindow, () => ({
    __proto__: dart.getFields(window.TestWindow.__proto__),
    [_window]: dart.finalFieldType(ui.Window),
    [_devicePixelRatio]: dart.fieldType(core.double),
    [_physicalSizeTestValue]: dart.fieldType(ui.Size),
    [_physicalDepthTestValue]: dart.fieldType(core.double),
    [_viewInsetsTestValue]: dart.fieldType(ui.WindowPadding),
    [_viewPaddingTestValue]: dart.fieldType(ui.WindowPadding),
    [_paddingTestValue]: dart.fieldType(ui.WindowPadding),
    [_systemGestureInsetsTestValue]: dart.fieldType(ui.WindowPadding),
    [_localeTestValue]: dart.fieldType(ui.Locale),
    [_localesTestValue]: dart.fieldType(core.List$(ui.Locale)),
    [_initialLifecycleStateTestValue]: dart.fieldType(core.String),
    [_textScaleFactorTestValue]: dart.fieldType(core.double),
    [_platformBrightnessTestValue]: dart.fieldType(ui.Brightness),
    [_alwaysUse24HourFormatTestValue]: dart.fieldType(core.bool),
    [_defaultRouteNameTestValue]: dart.fieldType(core.String),
    [_semanticsEnabledTestValue]: dart.fieldType(core.bool),
    [_accessibilityFeaturesTestValue]: dart.fieldType(ui.AccessibilityFeatures)
  }));
  dart.defineExtensionMethods(window.TestWindow, ['noSuchMethod']);
  const _isRegistered = dart.privateName(test_text_input, "_isRegistered");
  const _client = dart.privateName(test_text_input, "_client");
  const _isVisible = dart.privateName(test_text_input, "_isVisible");
  const _binaryMessenger = dart.privateName(test_text_input, "_binaryMessenger");
  const _handleTextInputCall = dart.privateName(test_text_input, "_handleTextInputCall");
  const TestTextInput_onCleared = dart.privateName(test_text_input, "TestTextInput.onCleared");
  const TestTextInput_setClientArgs = dart.privateName(test_text_input, "TestTextInput.setClientArgs");
  const TestTextInput_editingState = dart.privateName(test_text_input, "TestTextInput.editingState");
  test_text_input.TestTextInput = class TestTextInput extends core.Object {
    get onCleared() {
      return this[onCleared$];
    }
    set onCleared(value) {
      super.onCleared = value;
    }
    get setClientArgs() {
      return this[setClientArgs];
    }
    set setClientArgs(value) {
      this[setClientArgs] = value;
    }
    get editingState() {
      return this[editingState];
    }
    set editingState(value) {
      this[editingState] = value;
    }
    get [_binaryMessenger]() {
      return binding$0.ServicesBinding.instance.defaultBinaryMessenger;
    }
    register() {
      system_channels.SystemChannels.textInput.setMockMethodCallHandler(dart.bind(this, _handleTextInputCall));
      this[_isRegistered] = true;
    }
    unregister() {
      system_channels.SystemChannels.textInput.setMockMethodCallHandler(null);
      this[_isRegistered] = false;
    }
    get isRegistered() {
      return this[_isRegistered];
    }
    get hasAnyClients() {
      return dart.notNull(this[_client]) > 0;
    }
    [_handleTextInputCall](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputCall() {
        switch (methodCall.method) {
          case "TextInput.setClient":
          {
            this[_client] = core.int._check(dart.dsend(methodCall.arguments, '_get', [0]));
            this.setClientArgs = MapOfString$dynamic()._check(dart.dsend(methodCall.arguments, '_get', [1]));
            break;
          }
          case "TextInput.clearClient":
          {
            this[_client] = 0;
            this[_isVisible] = false;
            if (this.onCleared != null) this.onCleared();
            break;
          }
          case "TextInput.setEditingState":
          {
            this.editingState = MapOfString$dynamic()._check(methodCall.arguments);
            break;
          }
          case "TextInput.show":
          {
            this[_isVisible] = true;
            break;
          }
          case "TextInput.hide":
          {
            this[_isVisible] = false;
            break;
          }
        }
      }).bind(this));
    }
    get isVisible() {
      return this[_isVisible];
    }
    updateEditingValue(value) {
      if (this[_client] === 0) dart.throw(new expect.TestFailure.new("Tried to use TestTextInput with no keyboard attached. You must use WidgetTester.showKeyboard() first."));
      this[_binaryMessenger].handlePlatformMessage(system_channels.SystemChannels.textInput.name, system_channels.SystemChannels.textInput.codec.encodeMethodCall(new message_codec.MethodCall.new("TextInputClient.updateEditingState", [this[_client], value.toJSON()])), dart.fn(data => {
      }, ByteDataToNull()));
    }
    enterText(text) {
      this.updateEditingValue(new text_input.TextEditingValue.new({text: text}));
    }
    receiveAction(action) {
      return async.async(dart.void, (function* receiveAction() {
        return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => {
          if (this[_client] === 0) {
            dart.throw(new expect.TestFailure.new("Tried to use TestTextInput with no keyboard attached. You must use WidgetTester.showKeyboard() first."));
          }
          let completer = CompleterOfvoid().new();
          this[_binaryMessenger].handlePlatformMessage(system_channels.SystemChannels.textInput.name, system_channels.SystemChannels.textInput.codec.encodeMethodCall(new message_codec.MethodCall.new("TextInputClient.performAction", [this[_client], dart.toString(action)])), dart.fn(data => {
            try {
              system_channels.SystemChannels.textInput.codec.decodeEnvelope(data);
              completer.complete();
            } catch (e) {
              let error = dart.getThrown(e);
              completer.completeError(error);
            }
          }, ByteDataToNull()));
          return completer.future;
        }, VoidToFutureOfvoid()));
      }).bind(this));
    }
    hide() {
      this[_isVisible] = false;
    }
  };
  (test_text_input.TestTextInput.new = function(opts) {
    let onCleared = opts && 'onCleared' in opts ? opts.onCleared : null;
    this[_isRegistered] = false;
    this[_client] = 0;
    this[setClientArgs] = null;
    this[editingState] = null;
    this[_isVisible] = false;
    this[onCleared$] = onCleared;
    ;
  }).prototype = test_text_input.TestTextInput.prototype;
  dart.addTypeTests(test_text_input.TestTextInput);
  const onCleared$ = TestTextInput_onCleared;
  const setClientArgs = TestTextInput_setClientArgs;
  const editingState = TestTextInput_editingState;
  dart.setMethodSignature(test_text_input.TestTextInput, () => ({
    __proto__: dart.getMethods(test_text_input.TestTextInput.__proto__),
    register: dart.fnType(dart.void, []),
    unregister: dart.fnType(dart.void, []),
    [_handleTextInputCall]: dart.fnType(async.Future, [message_codec.MethodCall]),
    updateEditingValue: dart.fnType(dart.void, [text_input.TextEditingValue]),
    enterText: dart.fnType(dart.void, [core.String]),
    receiveAction: dart.fnType(async.Future$(dart.void), [text_input.TextInputAction]),
    hide: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(test_text_input.TestTextInput, () => ({
    __proto__: dart.getGetters(test_text_input.TestTextInput.__proto__),
    [_binaryMessenger]: binary_messenger.BinaryMessenger,
    isRegistered: core.bool,
    hasAnyClients: core.bool,
    isVisible: core.bool
  }));
  dart.setLibraryUri(test_text_input.TestTextInput, "package:flutter_test/src/test_text_input.dart");
  dart.setFieldSignature(test_text_input.TestTextInput, () => ({
    __proto__: dart.getFields(test_text_input.TestTextInput.__proto__),
    onCleared: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_isRegistered]: dart.fieldType(core.bool),
    [_client]: dart.fieldType(core.int),
    setClientArgs: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    editingState: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    [_isVisible]: dart.fieldType(core.bool)
  }));
  _binding_web.ensureInitialized = function ensureInitialized(environment) {
    if (environment === void 0) environment = null;
    if (binding$2.WidgetsBinding.instance == null) {
      new binding$6.AutomatedTestWidgetsFlutterBinding.new();
    }
    if (!binding$6.TestWidgetsFlutterBinding.is(binding$2.WidgetsBinding.instance)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/_binding_web.dart", 14, 10, "WidgetsBinding.instance is TestWidgetsFlutterBinding");
    return binding$2.WidgetsBinding.instance;
  };
  _binding_web.setupHttpOverrides = function setupHttpOverrides() {
  };
  _binding_web.mockFlutterAssets = function mockFlutterAssets() {
  };
  const _FindsWidgetMatcher_min = dart.privateName(matchers, "_FindsWidgetMatcher.min");
  const _FindsWidgetMatcher_max = dart.privateName(matchers, "_FindsWidgetMatcher.max");
  matchers._FindsWidgetMatcher = class _FindsWidgetMatcher extends interfaces.Matcher {
    get min() {
      return this[min$];
    }
    set min(value) {
      super.min = value;
    }
    get max() {
      return this[max$];
    }
    set max(value) {
      super.max = value;
    }
    matches(finder, matchState) {
      finders.Finder._check(finder);
      if (!(this.min != null || this.max != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 602, 12, "ssert(min != null || max !");
      if (!(this.min == null || this.max == null || dart.notNull(this.min) <= dart.notNull(this.max))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 603, 12, "ssert(min == null || max == null || min ");
      matchState[$_set](dart.wrapType(finders.Finder), finder);
      let count = 0;
      let iterator = finder.evaluate()[$iterator];
      if (this.min != null) {
        while (count < dart.notNull(this.min) && dart.test(iterator.moveNext()))
          count = count + 1;
        if (count < dart.notNull(this.min)) return false;
      }
      if (this.max != null) {
        while (count <= dart.notNull(this.max) && dart.test(iterator.moveNext()))
          count = count + 1;
        if (count > dart.notNull(this.max)) return false;
      }
      return true;
    }
    describe(description) {
      if (!(this.min != null || this.max != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 624, 12, "ssert(min != null || max !");
      if (this.min == this.max) {
        if (this.min === 1) return description.add("exactly one matching node in the widget tree");
        return description.add("exactly " + dart.str(this.min) + " matching nodes in the widget tree");
      }
      if (this.min == null) {
        if (this.max === 0) return description.add("no matching nodes in the widget tree");
        if (this.max === 1) return description.add("at most one matching node in the widget tree");
        return description.add("at most " + dart.str(this.max) + " matching nodes in the widget tree");
      }
      if (this.max == null) {
        if (this.min === 1) return description.add("at least one matching node in the widget tree");
        return description.add("at least " + dart.str(this.min) + " matching nodes in the widget tree");
      }
      return description.add("between " + dart.str(this.min) + " and " + dart.str(this.max) + " matching nodes in the widget tree (inclusive)");
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      let finder = finders.Finder._check(matchState[$_get](dart.wrapType(finders.Finder)));
      let count = finder.evaluate()[$length];
      if (count === 0) {
        if (!(this.min != null && dart.notNull(this.min) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 655, 14, "ssert(min != null && m");
        if (this.min === 1 && this.max === 1) return mismatchDescription.add("means none were found but one was expected");
        return mismatchDescription.add("means none were found but some were expected");
      }
      if (this.max === 0) {
        if (count === 1) return mismatchDescription.add("means one was found but none were expected");
        return mismatchDescription.add("means some were found but none were expected");
      }
      if (this.min != null && dart.notNull(count) < dart.notNull(this.min)) return mismatchDescription.add("is not enough");
      if (!(this.max != null && dart.notNull(count) > dart.notNull(this.min))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 667, 12, "ssert(max != null && count");
      return mismatchDescription.add("is too many");
    }
  };
  (matchers._FindsWidgetMatcher.new = function(min, max) {
    this[min$] = min;
    this[max$] = max;
    matchers._FindsWidgetMatcher.__proto__.new.call(this);
    ;
  }).prototype = matchers._FindsWidgetMatcher.prototype;
  dart.addTypeTests(matchers._FindsWidgetMatcher);
  const min$ = _FindsWidgetMatcher_min;
  const max$ = _FindsWidgetMatcher_max;
  dart.setMethodSignature(matchers._FindsWidgetMatcher, () => ({
    __proto__: dart.getMethods(matchers._FindsWidgetMatcher.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._FindsWidgetMatcher, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._FindsWidgetMatcher, () => ({
    __proto__: dart.getFields(matchers._FindsWidgetMatcher.__proto__),
    min: dart.finalFieldType(core.int),
    max: dart.finalFieldType(core.int)
  }));
  matchers._IsOffstage = class _IsOffstage extends interfaces.Matcher {
    matches(finder, matchState) {
      finders.Finder._check(finder);
      return matchers._hasAncestorMatching(finder, dart.fn(widget => {
        if (basic.Offstage.is(widget)) return widget.offstage;
        return false;
      }, WidgetTobool()));
    }
    describe(description) {
      return description.add("offstage");
    }
  };
  (matchers._IsOffstage.new = function() {
    matchers._IsOffstage.__proto__.new.call(this);
    ;
  }).prototype = matchers._IsOffstage.prototype;
  dart.addTypeTests(matchers._IsOffstage);
  dart.setMethodSignature(matchers._IsOffstage, () => ({
    __proto__: dart.getMethods(matchers._IsOffstage.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._IsOffstage, "package:flutter_test/src/matchers.dart");
  matchers._IsOnstage = class _IsOnstage extends interfaces.Matcher {
    matches(finder, matchState) {
      finders.Finder._check(finder);
      let nodes = finder.evaluate();
      if (nodes[$length] !== 1) return false;
      let result = true;
      nodes[$single].visitAncestorElements(dart.fn(ancestor => {
        let widget = ancestor.widget;
        if (basic.Offstage.is(widget)) {
          result = !dart.test(widget.offstage);
          return false;
        }
        return true;
      }, ElementTobool()));
      return result;
    }
    describe(description) {
      return description.add("onstage");
    }
  };
  (matchers._IsOnstage.new = function() {
    matchers._IsOnstage.__proto__.new.call(this);
    ;
  }).prototype = matchers._IsOnstage.prototype;
  dart.addTypeTests(matchers._IsOnstage);
  dart.setMethodSignature(matchers._IsOnstage, () => ({
    __proto__: dart.getMethods(matchers._IsOnstage.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._IsOnstage, "package:flutter_test/src/matchers.dart");
  matchers._IsInCard = class _IsInCard extends interfaces.Matcher {
    matches(finder, matchState) {
      finders.Finder._check(finder);
      return matchers._hasAncestorOfType(finder, dart.wrapType(card.Card));
    }
    describe(description) {
      return description.add("in card");
    }
  };
  (matchers._IsInCard.new = function() {
    matchers._IsInCard.__proto__.new.call(this);
    ;
  }).prototype = matchers._IsInCard.prototype;
  dart.addTypeTests(matchers._IsInCard);
  dart.setMethodSignature(matchers._IsInCard, () => ({
    __proto__: dart.getMethods(matchers._IsInCard.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._IsInCard, "package:flutter_test/src/matchers.dart");
  matchers._IsNotInCard = class _IsNotInCard extends interfaces.Matcher {
    matches(finder, matchState) {
      finders.Finder._check(finder);
      return !dart.test(matchers._hasAncestorOfType(finder, dart.wrapType(card.Card)));
    }
    describe(description) {
      return description.add("not in card");
    }
  };
  (matchers._IsNotInCard.new = function() {
    matchers._IsNotInCard.__proto__.new.call(this);
    ;
  }).prototype = matchers._IsNotInCard.prototype;
  dart.addTypeTests(matchers._IsNotInCard);
  dart.setMethodSignature(matchers._IsNotInCard, () => ({
    __proto__: dart.getMethods(matchers._IsNotInCard.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._IsNotInCard, "package:flutter_test/src/matchers.dart");
  matchers._HasOneLineDescription = class _HasOneLineDescription extends interfaces.Matcher {
    matches(object, matchState) {
      let description = dart.toString(object);
      return description[$isNotEmpty] && !description[$contains]("\n") && !description[$contains]("Instance of ") && description[$trim]() === description;
    }
    describe(description) {
      return description.add("one line description");
    }
  };
  (matchers._HasOneLineDescription.new = function() {
    matchers._HasOneLineDescription.__proto__.new.call(this);
    ;
  }).prototype = matchers._HasOneLineDescription.prototype;
  dart.addTypeTests(matchers._HasOneLineDescription);
  dart.setMethodSignature(matchers._HasOneLineDescription, () => ({
    __proto__: dart.getMethods(matchers._HasOneLineDescription.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._HasOneLineDescription, "package:flutter_test/src/matchers.dart");
  const _value = dart.privateName(matchers, "_value");
  matchers._EqualsIgnoringHashCodes = class _EqualsIgnoringHashCodes extends interfaces.Matcher {
    static _normalize(s) {
      return s[$replaceAll](core.RegExp.new("#[0-9a-fA-F]{5}"), "#00000");
    }
    matches(object, matchState) {
      let description = matchers._EqualsIgnoringHashCodes._normalize(core.String._check(object));
      if (this[_value] != description) {
        matchState[$_set](matchers._EqualsIgnoringHashCodes._mismatchedValueKey, description);
        return false;
      }
      return true;
    }
    describe(description) {
      return description.add("multi line description equals " + dart.str(this[_value]));
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (dart.test(matchState[$containsKey](matchers._EqualsIgnoringHashCodes._mismatchedValueKey))) {
        let actualValue = core.String._check(matchState[$_get](matchers._EqualsIgnoringHashCodes._mismatchedValueKey));
        return mismatchDescription.add("expected normalized value\n  ").addDescriptionOf(this[_value]).add("\nbut got\n  ").addDescriptionOf(actualValue);
      }
      return mismatchDescription;
    }
  };
  (matchers._EqualsIgnoringHashCodes.new = function(v) {
    this[_value] = matchers._EqualsIgnoringHashCodes._normalize(v);
    matchers._EqualsIgnoringHashCodes.__proto__.new.call(this);
    ;
  }).prototype = matchers._EqualsIgnoringHashCodes.prototype;
  dart.addTypeTests(matchers._EqualsIgnoringHashCodes);
  dart.setMethodSignature(matchers._EqualsIgnoringHashCodes, () => ({
    __proto__: dart.getMethods(matchers._EqualsIgnoringHashCodes.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._EqualsIgnoringHashCodes, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._EqualsIgnoringHashCodes, () => ({
    __proto__: dart.getFields(matchers._EqualsIgnoringHashCodes.__proto__),
    [_value]: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(matchers._EqualsIgnoringHashCodes, {
    /*matchers._EqualsIgnoringHashCodes._mismatchedValueKey*/get _mismatchedValueKey() {
      return new core.Object.new();
    }
  });
  matchers._HasGoodToStringDeep = class _HasGoodToStringDeep extends interfaces.Matcher {
    matches(object, matchState) {
      let issues = JSArrayOfString().of([]);
      let description = core.String._check(dart.dsend(object, 'toStringDeep', []));
      if (description[$endsWith]("\n")) {
        description = description[$substring](0, description.length - 1);
      } else {
        issues[$add]("Not terminated with a line break.");
      }
      if (description[$trim]() !== description) issues[$add]("Has trailing whitespace.");
      let lines = description[$split]("\n");
      if (dart.notNull(lines[$length]) < 2) issues[$add]("Does not have multiple lines.");
      if (description[$contains]("Instance of ")) issues[$add]("Contains text \"Instance of \".");
      for (let i = 0; i < dart.notNull(lines[$length]); i = i + 1) {
        let line = lines[$_get](i);
        if (line[$isEmpty]) issues[$add]("Line " + dart.str(i + 1) + " is empty.");
        if (line[$trimRight]() !== line) issues[$add]("Line " + dart.str(i + 1) + " has trailing whitespace.");
      }
      if (dart.test(matchers._isAllTreeConnectorCharacters(lines[$last]))) issues[$add]("Last line is all tree connector characters.");
      let prefixIssues = JSArrayOfString().of([]);
      let descriptionWithPrefixes = core.String._check(dart.dsend(object, 'toStringDeep', [], {prefixLineOne: "PREFIX_LINE_ONE____", prefixOtherLines: "PREFIX_OTHER_LINES_"}));
      if (descriptionWithPrefixes[$endsWith]("\n")) {
        descriptionWithPrefixes = descriptionWithPrefixes[$substring](0, descriptionWithPrefixes.length - 1);
      }
      let linesWithPrefixes = descriptionWithPrefixes[$split]("\n");
      if (!linesWithPrefixes[$first][$startsWith]("PREFIX_LINE_ONE____")) prefixIssues[$add]("First line does not contain expected prefix.");
      for (let i = 1; i < dart.notNull(linesWithPrefixes[$length]); i = i + 1) {
        if (!linesWithPrefixes[$_get](i)[$startsWith]("PREFIX_OTHER_LINES_")) prefixIssues[$add]("Line " + dart.str(i + 1) + " does not contain the expected prefix.");
      }
      let errorDescription = new core.StringBuffer.new();
      if (dart.test(issues[$isNotEmpty])) {
        errorDescription.writeln("Bad toStringDeep():");
        errorDescription.writeln(description);
        errorDescription.writeAll(issues, "\n");
      }
      if (dart.test(prefixIssues[$isNotEmpty])) {
        errorDescription.writeln("Bad toStringDeep(prefixLineOne: \"" + "PREFIX_LINE_ONE____" + "\", prefixOtherLines: \"" + "PREFIX_OTHER_LINES_" + "\"):");
        errorDescription.writeln(descriptionWithPrefixes);
        errorDescription.writeAll(prefixIssues, "\n");
      }
      if (dart.test(errorDescription.isNotEmpty)) {
        matchState[$_set](matchers._HasGoodToStringDeep._toStringDeepErrorDescriptionKey, errorDescription.toString());
        return false;
      }
      return true;
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (dart.test(matchState[$containsKey](matchers._HasGoodToStringDeep._toStringDeepErrorDescriptionKey))) {
        return mismatchDescription.add(core.String._check(matchState[$_get](matchers._HasGoodToStringDeep._toStringDeepErrorDescriptionKey)));
      }
      return mismatchDescription;
    }
    describe(description) {
      return description.add("multi line description");
    }
  };
  (matchers._HasGoodToStringDeep.new = function() {
    matchers._HasGoodToStringDeep.__proto__.new.call(this);
    ;
  }).prototype = matchers._HasGoodToStringDeep.prototype;
  dart.addTypeTests(matchers._HasGoodToStringDeep);
  dart.setMethodSignature(matchers._HasGoodToStringDeep, () => ({
    __proto__: dart.getMethods(matchers._HasGoodToStringDeep.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._HasGoodToStringDeep, "package:flutter_test/src/matchers.dart");
  dart.defineLazy(matchers._HasGoodToStringDeep, {
    /*matchers._HasGoodToStringDeep._toStringDeepErrorDescriptionKey*/get _toStringDeepErrorDescriptionKey() {
      return new core.Object.new();
    }
  });
  const _is__IsWithinDistance_default = Symbol('_is__IsWithinDistance_default');
  const _IsWithinDistance_distanceFunction = dart.privateName(matchers, "_IsWithinDistance.distanceFunction");
  const _IsWithinDistance_value = dart.privateName(matchers, "_IsWithinDistance.value");
  const _IsWithinDistance_epsilon = dart.privateName(matchers, "_IsWithinDistance.epsilon");
  matchers._IsWithinDistance$ = dart.generic(T => {
    class _IsWithinDistance extends interfaces.Matcher {
      get distanceFunction() {
        return this[distanceFunction$];
      }
      set distanceFunction(value) {
        super.distanceFunction = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get epsilon() {
        return this[epsilon$];
      }
      set epsilon(value) {
        super.epsilon = value;
      }
      matches(object, matchState) {
        if (!T.is(object)) return false;
        if (dart.equals(object, this.value)) return true;
        let test = T._check(object);
        let distance = this.distanceFunction(test, this.value);
        if (dart.notNull(distance) < 0) {
          dart.throw(new core.ArgumentError.new("Invalid distance function was used to compare a " + dart.str(dart.runtimeType(this.value)) + " " + "to a " + dart.str(dart.runtimeType(object)) + ". The function must return a non-negative " + "double value, but it returned " + dart.str(distance) + "."));
        }
        matchState[$_set]("distance", distance);
        return dart.notNull(distance) <= dart.notNull(this.epsilon);
      }
      describe(description) {
        return description.add(dart.str(this.value) + " (±" + dart.str(this.epsilon) + ")");
      }
      describeMismatch(object, mismatchDescription, matchState, verbose) {
        mismatchDescription.add("was " + dart.str(matchState[$_get]("distance")) + " away from the desired value.");
        return mismatchDescription;
      }
    }
    (_IsWithinDistance.new = function(distanceFunction, value, epsilon) {
      this[distanceFunction$] = distanceFunction;
      this[value$] = value;
      this[epsilon$] = epsilon;
      _IsWithinDistance.__proto__.new.call(this);
      ;
    }).prototype = _IsWithinDistance.prototype;
    dart.addTypeTests(_IsWithinDistance);
    _IsWithinDistance.prototype[_is__IsWithinDistance_default] = true;
    const distanceFunction$ = _IsWithinDistance_distanceFunction;
    const value$ = _IsWithinDistance_value;
    const epsilon$ = _IsWithinDistance_epsilon;
    dart.setMethodSignature(_IsWithinDistance, () => ({
      __proto__: dart.getMethods(_IsWithinDistance.__proto__),
      matches: dart.fnType(core.bool, [core.Object, core.Map]),
      describe: dart.fnType(interfaces.Description, [interfaces.Description]),
      describeMismatch: dart.fnType(interfaces.Description, [core.Object, interfaces.Description, core.Map, core.bool])
    }));
    dart.setLibraryUri(_IsWithinDistance, "package:flutter_test/src/matchers.dart");
    dart.setFieldSignature(_IsWithinDistance, () => ({
      __proto__: dart.getFields(_IsWithinDistance.__proto__),
      distanceFunction: dart.finalFieldType(dart.fnType(core.num, [T, T])),
      value: dart.finalFieldType(T),
      epsilon: dart.finalFieldType(core.num)
    }));
    return _IsWithinDistance;
  });
  matchers._IsWithinDistance = matchers._IsWithinDistance$();
  dart.addTypeTests(matchers._IsWithinDistance, _is__IsWithinDistance_default);
  const _MoreOrLessEquals_value = dart.privateName(matchers, "_MoreOrLessEquals.value");
  const _MoreOrLessEquals_epsilon = dart.privateName(matchers, "_MoreOrLessEquals.epsilon");
  matchers._MoreOrLessEquals = class _MoreOrLessEquals extends interfaces.Matcher {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get epsilon() {
      return this[epsilon$];
    }
    set epsilon(value) {
      super.epsilon = value;
    }
    matches(object, matchState) {
      if (!(typeof object == 'number')) return false;
      if (dart.equals(object, this.value)) return true;
      let test = core.double._check(object);
      return (dart.notNull(test) - dart.notNull(this.value))[$abs]() <= dart.notNull(this.epsilon);
    }
    describe(description) {
      return description.add(dart.str(this.value) + " (±" + dart.str(this.epsilon) + ")");
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      let t1;
      t1 = super.describeMismatch(item, mismatchDescription, matchState, verbose);
      t1.add(dart.str(item) + " is not in the range of " + dart.str(this.value) + " (±" + dart.str(this.epsilon) + ").");
      return t1;
    }
  };
  (matchers._MoreOrLessEquals.new = function(value, epsilon) {
    this[value$] = value;
    this[epsilon$] = epsilon;
    if (!(dart.notNull(epsilon) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 1109, 14, "    : assert");
    matchers._MoreOrLessEquals.__proto__.new.call(this);
    ;
  }).prototype = matchers._MoreOrLessEquals.prototype;
  dart.addTypeTests(matchers._MoreOrLessEquals);
  const value$ = _MoreOrLessEquals_value;
  const epsilon$ = _MoreOrLessEquals_epsilon;
  dart.setMethodSignature(matchers._MoreOrLessEquals, () => ({
    __proto__: dart.getMethods(matchers._MoreOrLessEquals.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description]),
    describeMismatch: dart.fnType(interfaces.Description, [core.Object, interfaces.Description, core.Map, core.bool])
  }));
  dart.setLibraryUri(matchers._MoreOrLessEquals, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._MoreOrLessEquals, () => ({
    __proto__: dart.getFields(matchers._MoreOrLessEquals.__proto__),
    value: dart.finalFieldType(core.double),
    epsilon: dart.finalFieldType(core.double)
  }));
  const _deepEquals = dart.privateName(matchers, "_deepEquals");
  const _deepEqualsList = dart.privateName(matchers, "_deepEqualsList");
  const _deepEqualsMap = dart.privateName(matchers, "_deepEqualsMap");
  const _IsMethodCall_name = dart.privateName(matchers, "_IsMethodCall.name");
  const _IsMethodCall_arguments = dart.privateName(matchers, "_IsMethodCall.arguments");
  matchers._IsMethodCall = class _IsMethodCall extends interfaces.Matcher {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    matches(item, matchState) {
      if (!message_codec.MethodCall.is(item)) return false;
      if (!dart.equals(dart.dload(item, 'method'), this.name)) return false;
      return this[_deepEquals](dart.dload(item, 'arguments'), this.arguments);
    }
    [_deepEquals](a, b) {
      if (dart.equals(a, b)) return true;
      if (core.List.is(a)) return core.List.is(b) && dart.test(this[_deepEqualsList](a, b));
      if (core.Map.is(a)) return core.Map.is(b) && dart.test(this[_deepEqualsMap](a, b));
      return false;
    }
    [_deepEqualsList](a, b) {
      if (a[$length] != b[$length]) return false;
      for (let i = 0; i < dart.notNull(a[$length]); i = i + 1) {
        if (!dart.test(this[_deepEquals](a[$_get](i), b[$_get](i)))) return false;
      }
      return true;
    }
    [_deepEqualsMap](a, b) {
      if (a[$length] != b[$length]) return false;
      for (let key of a[$keys]) {
        if (!dart.test(b[$containsKey](key)) || !dart.test(this[_deepEquals](a[$_get](key), b[$_get](key)))) return false;
      }
      return true;
    }
    describe(description) {
      return description.add("has method name: ").addDescriptionOf(this.name).add(" with arguments: ").addDescriptionOf(this.arguments);
    }
  };
  (matchers._IsMethodCall.new = function(name, arguments$0) {
    this[name$] = name;
    this[arguments$] = arguments$0;
    matchers._IsMethodCall.__proto__.new.call(this);
    ;
  }).prototype = matchers._IsMethodCall.prototype;
  dart.addTypeTests(matchers._IsMethodCall);
  const name$ = _IsMethodCall_name;
  const arguments$ = _IsMethodCall_arguments;
  dart.setMethodSignature(matchers._IsMethodCall, () => ({
    __proto__: dart.getMethods(matchers._IsMethodCall.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    [_deepEquals]: dart.fnType(core.bool, [dart.dynamic, dart.dynamic]),
    [_deepEqualsList]: dart.fnType(core.bool, [core.List, core.List]),
    [_deepEqualsMap]: dart.fnType(core.bool, [core.Map, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._IsMethodCall, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._IsMethodCall, () => ({
    __proto__: dart.getFields(matchers._IsMethodCall.__proto__),
    name: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  matchers._FailWithDescriptionMatcher = class _FailWithDescriptionMatcher extends interfaces.Matcher {
    failWithDescription(matchState, description) {
      matchState[$_set]("failure", description);
      return false;
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription.add(core.String._check(matchState[$_get]("failure")));
    }
  };
  (matchers._FailWithDescriptionMatcher.new = function() {
    matchers._FailWithDescriptionMatcher.__proto__.new.call(this);
    ;
  }).prototype = matchers._FailWithDescriptionMatcher.prototype;
  dart.addTypeTests(matchers._FailWithDescriptionMatcher);
  dart.setMethodSignature(matchers._FailWithDescriptionMatcher, () => ({
    __proto__: dart.getMethods(matchers._FailWithDescriptionMatcher.__proto__),
    failWithDescription: dart.fnType(core.bool, [core.Map, core.String])
  }));
  dart.setLibraryUri(matchers._FailWithDescriptionMatcher, "package:flutter_test/src/matchers.dart");
  let C38;
  let C39;
  let C40;
  let C41;
  matchers._MatchAnythingExceptClip = class _MatchAnythingExceptClip extends matchers._FailWithDescriptionMatcher {
    matches(finder, matchState) {
      finders.Finder._check(finder);
      let nodes = finder.evaluate();
      if (nodes[$length] !== 1) return this.failWithDescription(matchState, "did not have a exactly one child element");
      let renderObject = nodes[$single].renderObject;
      switch (dart.runtimeType(renderObject)) {
        case C38 || CT.C38:
        case C39 || CT.C39:
        case C40 || CT.C40:
        case C41 || CT.C41:
        {
          return this.failWithDescription(matchState, "had a root render object of type: " + dart.str(dart.runtimeType(renderObject)));
        }
        default:
        {
          return true;
        }
      }
    }
    describe(description) {
      return description.add("does not have a clip as an immediate child");
    }
  };
  (matchers._MatchAnythingExceptClip.new = function() {
    matchers._MatchAnythingExceptClip.__proto__.new.call(this);
    ;
  }).prototype = matchers._MatchAnythingExceptClip.prototype;
  dart.addTypeTests(matchers._MatchAnythingExceptClip);
  dart.setMethodSignature(matchers._MatchAnythingExceptClip, () => ({
    __proto__: dart.getMethods(matchers._MatchAnythingExceptClip.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._MatchAnythingExceptClip, "package:flutter_test/src/matchers.dart");
  const _is__MatchRenderObject_default = Symbol('_is__MatchRenderObject_default');
  matchers._MatchRenderObject$ = dart.generic((M, T) => {
    class _MatchRenderObject extends matchers._FailWithDescriptionMatcher {
      matches(finder, matchState) {
        finders.Finder._check(finder);
        let nodes = finder.evaluate();
        if (nodes[$length] !== 1) return this.failWithDescription(matchState, "did not have a exactly one child element");
        let renderObject = nodes[$single].renderObject;
        if (dart.equals(dart.runtimeType(renderObject), dart.wrapType(T))) return this.renderObjectMatchesT(matchState, T._check(renderObject));
        if (dart.equals(dart.runtimeType(renderObject), dart.wrapType(M))) return this.renderObjectMatchesM(matchState, M._check(renderObject));
        return this.failWithDescription(matchState, "had a root render object of type: " + dart.str(dart.runtimeType(renderObject)));
      }
    }
    (_MatchRenderObject.new = function() {
      _MatchRenderObject.__proto__.new.call(this);
      ;
    }).prototype = _MatchRenderObject.prototype;
    dart.addTypeTests(_MatchRenderObject);
    _MatchRenderObject.prototype[_is__MatchRenderObject_default] = true;
    dart.setMethodSignature(_MatchRenderObject, () => ({
      __proto__: dart.getMethods(_MatchRenderObject.__proto__),
      matches: dart.fnType(core.bool, [core.Object, core.Map])
    }));
    dart.setLibraryUri(_MatchRenderObject, "package:flutter_test/src/matchers.dart");
    return _MatchRenderObject;
  });
  matchers._MatchRenderObject = matchers._MatchRenderObject$();
  dart.addTypeTests(matchers._MatchRenderObject, _is__MatchRenderObject_default);
  const _RendersOnPhysicalModel_shape = dart.privateName(matchers, "_RendersOnPhysicalModel.shape");
  const _RendersOnPhysicalModel_borderRadius = dart.privateName(matchers, "_RendersOnPhysicalModel.borderRadius");
  const _RendersOnPhysicalModel_elevation = dart.privateName(matchers, "_RendersOnPhysicalModel.elevation");
  matchers._RendersOnPhysicalModel = class _RendersOnPhysicalModel extends matchers._MatchRenderObject$(proxy_box.RenderPhysicalShape, proxy_box.RenderPhysicalModel) {
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    renderObjectMatchesT(matchState, renderObject) {
      proxy_box.RenderPhysicalModel._check(renderObject);
      if (this.shape != null && !dart.equals(renderObject.shape, this.shape)) return this.failWithDescription(matchState, "had shape: " + dart.str(renderObject.shape));
      if (this.borderRadius != null && !dart.equals(renderObject.borderRadius, this.borderRadius)) return this.failWithDescription(matchState, "had borderRadius: " + dart.str(renderObject.borderRadius));
      if (this.elevation != null && renderObject.elevation != this.elevation) return this.failWithDescription(matchState, "had elevation: " + dart.str(renderObject.elevation));
      return true;
    }
    renderObjectMatchesM(matchState, renderObject) {
      proxy_box.RenderPhysicalShape._check(renderObject);
      if (!dart.equals(dart.runtimeType(renderObject.clipper), dart.wrapType(proxy_box.ShapeBorderClipper))) return this.failWithDescription(matchState, "clipper was: " + dart.str(renderObject.clipper));
      let shapeClipper = proxy_box.ShapeBorderClipper._check(renderObject.clipper);
      if (this.borderRadius != null && !dart.test(this.assertRoundedRectangle(shapeClipper, this.borderRadius, matchState))) return false;
      if (this.borderRadius == null && dart.equals(this.shape, box_border.BoxShape.rectangle) && !dart.test(this.assertRoundedRectangle(shapeClipper, border_radius.BorderRadius.zero, matchState))) {
        return false;
      }
      if (this.borderRadius == null && dart.equals(this.shape, box_border.BoxShape.circle) && !dart.test(this.assertCircle(shapeClipper, matchState))) {
        return false;
      }
      if (this.elevation != null && renderObject.elevation != this.elevation) return this.failWithDescription(matchState, "had elevation: " + dart.str(renderObject.elevation));
      return true;
    }
    assertRoundedRectangle(shapeClipper, borderRadius, matchState) {
      if (!dart.equals(dart.runtimeType(shapeClipper.shape), dart.wrapType(rounded_rectangle_border.RoundedRectangleBorder))) return this.failWithDescription(matchState, "had shape border: " + dart.str(shapeClipper.shape));
      let border = rounded_rectangle_border.RoundedRectangleBorder._check(shapeClipper.shape);
      if (!dart.equals(border.borderRadius, borderRadius)) return this.failWithDescription(matchState, "had borderRadius: " + dart.str(border.borderRadius));
      return true;
    }
    assertCircle(shapeClipper, matchState) {
      if (!dart.equals(dart.runtimeType(shapeClipper.shape), dart.wrapType(circle_border.CircleBorder))) return this.failWithDescription(matchState, "had shape border: " + dart.str(shapeClipper.shape));
      return true;
    }
    describe(description) {
      description.add("renders on a physical model");
      if (this.shape != null) description.add(" with shape " + dart.str(this.shape));
      if (this.borderRadius != null) description.add(" with borderRadius " + dart.str(this.borderRadius));
      if (this.elevation != null) description.add(" with elevation " + dart.str(this.elevation));
      return description;
    }
  };
  (matchers._RendersOnPhysicalModel.new = function(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    this[shape$] = shape;
    this[borderRadius$] = borderRadius;
    this[elevation$] = elevation;
    matchers._RendersOnPhysicalModel.__proto__.new.call(this);
    ;
  }).prototype = matchers._RendersOnPhysicalModel.prototype;
  dart.addTypeTests(matchers._RendersOnPhysicalModel);
  const shape$ = _RendersOnPhysicalModel_shape;
  const borderRadius$ = _RendersOnPhysicalModel_borderRadius;
  const elevation$ = _RendersOnPhysicalModel_elevation;
  dart.setMethodSignature(matchers._RendersOnPhysicalModel, () => ({
    __proto__: dart.getMethods(matchers._RendersOnPhysicalModel.__proto__),
    renderObjectMatchesT: dart.fnType(core.bool, [core.Map, core.Object]),
    renderObjectMatchesM: dart.fnType(core.bool, [core.Map, core.Object]),
    assertRoundedRectangle: dart.fnType(core.bool, [proxy_box.ShapeBorderClipper, border_radius.BorderRadius, core.Map]),
    assertCircle: dart.fnType(core.bool, [proxy_box.ShapeBorderClipper, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._RendersOnPhysicalModel, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._RendersOnPhysicalModel, () => ({
    __proto__: dart.getFields(matchers._RendersOnPhysicalModel.__proto__),
    shape: dart.finalFieldType(box_border.BoxShape),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    elevation: dart.finalFieldType(core.double)
  }));
  const _RendersOnPhysicalShape_shape = dart.privateName(matchers, "_RendersOnPhysicalShape.shape");
  const _RendersOnPhysicalShape_elevation = dart.privateName(matchers, "_RendersOnPhysicalShape.elevation");
  matchers._RendersOnPhysicalShape = class _RendersOnPhysicalShape extends matchers._MatchRenderObject$(proxy_box.RenderPhysicalShape, proxy_box.RenderPhysicalModel) {
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    get elevation() {
      return this[elevation$0];
    }
    set elevation(value) {
      super.elevation = value;
    }
    renderObjectMatchesM(matchState, renderObject) {
      proxy_box.RenderPhysicalShape._check(renderObject);
      if (!dart.equals(dart.runtimeType(renderObject.clipper), dart.wrapType(proxy_box.ShapeBorderClipper))) return this.failWithDescription(matchState, "clipper was: " + dart.str(renderObject.clipper));
      let shapeClipper = proxy_box.ShapeBorderClipper._check(renderObject.clipper);
      if (!dart.equals(shapeClipper.shape, this.shape)) return this.failWithDescription(matchState, "shape was: " + dart.str(shapeClipper.shape));
      if (this.elevation != null && renderObject.elevation != this.elevation) return this.failWithDescription(matchState, "had elevation: " + dart.str(renderObject.elevation));
      return true;
    }
    renderObjectMatchesT(matchState, renderObject) {
      proxy_box.RenderPhysicalModel._check(renderObject);
      return false;
    }
    describe(description) {
      description.add("renders on a physical model with shape " + dart.str(this.shape));
      if (this.elevation != null) description.add(" with elevation " + dart.str(this.elevation));
      return description;
    }
  };
  (matchers._RendersOnPhysicalShape.new = function(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    this[shape$0] = shape;
    this[elevation$0] = elevation;
    matchers._RendersOnPhysicalShape.__proto__.new.call(this);
    ;
  }).prototype = matchers._RendersOnPhysicalShape.prototype;
  dart.addTypeTests(matchers._RendersOnPhysicalShape);
  const shape$0 = _RendersOnPhysicalShape_shape;
  const elevation$0 = _RendersOnPhysicalShape_elevation;
  dart.setMethodSignature(matchers._RendersOnPhysicalShape, () => ({
    __proto__: dart.getMethods(matchers._RendersOnPhysicalShape.__proto__),
    renderObjectMatchesM: dart.fnType(core.bool, [core.Map, core.Object]),
    renderObjectMatchesT: dart.fnType(core.bool, [core.Map, core.Object]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._RendersOnPhysicalShape, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._RendersOnPhysicalShape, () => ({
    __proto__: dart.getFields(matchers._RendersOnPhysicalShape.__proto__),
    shape: dart.finalFieldType(borders.ShapeBorder),
    elevation: dart.finalFieldType(core.double)
  }));
  matchers._ClipsWithBoundingRect = class _ClipsWithBoundingRect extends matchers._MatchRenderObject$(proxy_box.RenderClipPath, proxy_box.RenderClipRect) {
    renderObjectMatchesT(matchState, renderObject) {
      proxy_box.RenderClipRect._check(renderObject);
      if (renderObject.clipper != null) return this.failWithDescription(matchState, "had a non null clipper " + dart.str(renderObject.clipper));
      return true;
    }
    renderObjectMatchesM(matchState, renderObject) {
      proxy_box.RenderClipPath._check(renderObject);
      if (!dart.equals(dart.runtimeType(renderObject.clipper), dart.wrapType(proxy_box.ShapeBorderClipper))) return this.failWithDescription(matchState, "clipper was: " + dart.str(renderObject.clipper));
      let shapeClipper = proxy_box.ShapeBorderClipper._check(renderObject.clipper);
      if (!dart.equals(dart.runtimeType(shapeClipper.shape), dart.wrapType(rounded_rectangle_border.RoundedRectangleBorder))) return this.failWithDescription(matchState, "shape was: " + dart.str(shapeClipper.shape));
      let border = rounded_rectangle_border.RoundedRectangleBorder._check(shapeClipper.shape);
      if (!dart.equals(border.borderRadius, border_radius.BorderRadius.zero)) return this.failWithDescription(matchState, "borderRadius was: " + dart.str(border.borderRadius));
      return true;
    }
    describe(description) {
      return description.add("clips with bounding rectangle");
    }
  };
  (matchers._ClipsWithBoundingRect.new = function() {
    matchers._ClipsWithBoundingRect.__proto__.new.call(this);
    ;
  }).prototype = matchers._ClipsWithBoundingRect.prototype;
  dart.addTypeTests(matchers._ClipsWithBoundingRect);
  dart.setMethodSignature(matchers._ClipsWithBoundingRect, () => ({
    __proto__: dart.getMethods(matchers._ClipsWithBoundingRect.__proto__),
    renderObjectMatchesT: dart.fnType(core.bool, [core.Map, core.Object]),
    renderObjectMatchesM: dart.fnType(core.bool, [core.Map, core.Object]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._ClipsWithBoundingRect, "package:flutter_test/src/matchers.dart");
  const _ClipsWithBoundingRRect_borderRadius = dart.privateName(matchers, "_ClipsWithBoundingRRect.borderRadius");
  matchers._ClipsWithBoundingRRect = class _ClipsWithBoundingRRect extends matchers._MatchRenderObject$(proxy_box.RenderClipPath, proxy_box.RenderClipRRect) {
    get borderRadius() {
      return this[borderRadius$0];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    renderObjectMatchesT(matchState, renderObject) {
      proxy_box.RenderClipRRect._check(renderObject);
      if (renderObject.clipper != null) return this.failWithDescription(matchState, "had a non null clipper " + dart.str(renderObject.clipper));
      if (!dart.equals(renderObject.borderRadius, this.borderRadius)) return this.failWithDescription(matchState, "had borderRadius: " + dart.str(renderObject.borderRadius));
      return true;
    }
    renderObjectMatchesM(matchState, renderObject) {
      proxy_box.RenderClipPath._check(renderObject);
      if (!dart.equals(dart.runtimeType(renderObject.clipper), dart.wrapType(proxy_box.ShapeBorderClipper))) return this.failWithDescription(matchState, "clipper was: " + dart.str(renderObject.clipper));
      let shapeClipper = proxy_box.ShapeBorderClipper._check(renderObject.clipper);
      if (!dart.equals(dart.runtimeType(shapeClipper.shape), dart.wrapType(rounded_rectangle_border.RoundedRectangleBorder))) return this.failWithDescription(matchState, "shape was: " + dart.str(shapeClipper.shape));
      let border = rounded_rectangle_border.RoundedRectangleBorder._check(shapeClipper.shape);
      if (!dart.equals(border.borderRadius, this.borderRadius)) return this.failWithDescription(matchState, "had borderRadius: " + dart.str(border.borderRadius));
      return true;
    }
    describe(description) {
      return description.add("clips with bounding rounded rectangle with borderRadius: " + dart.str(this.borderRadius));
    }
  };
  (matchers._ClipsWithBoundingRRect.new = function(opts) {
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    this[borderRadius$0] = borderRadius;
    matchers._ClipsWithBoundingRRect.__proto__.new.call(this);
    ;
  }).prototype = matchers._ClipsWithBoundingRRect.prototype;
  dart.addTypeTests(matchers._ClipsWithBoundingRRect);
  const borderRadius$0 = _ClipsWithBoundingRRect_borderRadius;
  dart.setMethodSignature(matchers._ClipsWithBoundingRRect, () => ({
    __proto__: dart.getMethods(matchers._ClipsWithBoundingRRect.__proto__),
    renderObjectMatchesT: dart.fnType(core.bool, [core.Map, core.Object]),
    renderObjectMatchesM: dart.fnType(core.bool, [core.Map, core.Object]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._ClipsWithBoundingRRect, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._ClipsWithBoundingRRect, () => ({
    __proto__: dart.getFields(matchers._ClipsWithBoundingRRect.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius)
  }));
  const _ClipsWithShapeBorder_shape = dart.privateName(matchers, "_ClipsWithShapeBorder.shape");
  matchers._ClipsWithShapeBorder = class _ClipsWithShapeBorder extends matchers._MatchRenderObject$(proxy_box.RenderClipPath, proxy_box.RenderClipRRect) {
    get shape() {
      return this[shape$1];
    }
    set shape(value) {
      super.shape = value;
    }
    renderObjectMatchesM(matchState, renderObject) {
      proxy_box.RenderClipPath._check(renderObject);
      if (!dart.equals(dart.runtimeType(renderObject.clipper), dart.wrapType(proxy_box.ShapeBorderClipper))) return this.failWithDescription(matchState, "clipper was: " + dart.str(renderObject.clipper));
      let shapeClipper = proxy_box.ShapeBorderClipper._check(renderObject.clipper);
      if (!dart.equals(shapeClipper.shape, this.shape)) return this.failWithDescription(matchState, "shape was: " + dart.str(shapeClipper.shape));
      return true;
    }
    renderObjectMatchesT(matchState, renderObject) {
      proxy_box.RenderClipRRect._check(renderObject);
      return false;
    }
    describe(description) {
      return description.add("clips with shape: " + dart.str(this.shape));
    }
  };
  (matchers._ClipsWithShapeBorder.new = function(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    this[shape$1] = shape;
    matchers._ClipsWithShapeBorder.__proto__.new.call(this);
    ;
  }).prototype = matchers._ClipsWithShapeBorder.prototype;
  dart.addTypeTests(matchers._ClipsWithShapeBorder);
  const shape$1 = _ClipsWithShapeBorder_shape;
  dart.setMethodSignature(matchers._ClipsWithShapeBorder, () => ({
    __proto__: dart.getMethods(matchers._ClipsWithShapeBorder.__proto__),
    renderObjectMatchesM: dart.fnType(core.bool, [core.Map, core.Object]),
    renderObjectMatchesT: dart.fnType(core.bool, [core.Map, core.Object]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._ClipsWithShapeBorder, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._ClipsWithShapeBorder, () => ({
    __proto__: dart.getFields(matchers._ClipsWithShapeBorder.__proto__),
    shape: dart.finalFieldType(borders.ShapeBorder)
  }));
  const _samplePoint = dart.privateName(matchers, "_samplePoint");
  matchers._CoversSameAreaAs = class _CoversSameAreaAs extends interfaces.Matcher {
    matches(actualPath, matchState) {
      ui.Path._check(actualPath);
      for (let i = 0; i < dart.notNull(this.sampleSize); i = i + 1) {
        for (let j = 0; j < dart.notNull(this.sampleSize); j = j + 1) {
          let offset = new ui.Offset.new(i * (dart.notNull(this.areaToCompare.width) / dart.notNull(this.sampleSize)), j * (dart.notNull(this.areaToCompare.height) / dart.notNull(this.sampleSize)));
          if (!dart.test(this[_samplePoint](matchState, actualPath, offset))) return false;
          let noise = new ui.Offset.new(dart.notNull(this.maxHorizontalNoise) * dart.notNull(this.random.nextDouble()), dart.notNull(this.maxVerticalNoise) * dart.notNull(this.random.nextDouble()));
          if (!dart.test(this[_samplePoint](matchState, actualPath, offset['+'](noise)))) return false;
        }
      }
      return true;
    }
    [_samplePoint](matchState, actualPath, offset) {
      if (dart.equals(this.expectedPath.contains(offset), actualPath.contains(offset))) return true;
      if (dart.test(actualPath.contains(offset)))
        return this.failWithDescription(matchState, dart.str(offset) + " is contained in the actual path but not in the expected path");
      else
        return this.failWithDescription(matchState, dart.str(offset) + " is contained in the expected path but not in the actual path");
    }
    failWithDescription(matchState, description) {
      matchState[$_set]("failure", description);
      return false;
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription.add(core.String._check(matchState[$_get]("failure")));
    }
    describe(description) {
      return description.add("covers expected area and only expected area");
    }
  };
  (matchers._CoversSameAreaAs.new = function(expectedPath, opts) {
    let areaToCompare = opts && 'areaToCompare' in opts ? opts.areaToCompare : null;
    let sampleSize = opts && 'sampleSize' in opts ? opts.sampleSize : 20;
    this.random = null;
    this.expectedPath = expectedPath;
    this.areaToCompare = areaToCompare;
    this.sampleSize = sampleSize;
    this.maxHorizontalNoise = dart.notNull(areaToCompare.width) / dart.notNull(sampleSize);
    this.maxVerticalNoise = dart.notNull(areaToCompare.height) / dart.notNull(sampleSize);
    matchers._CoversSameAreaAs.__proto__.new.call(this);
    this.random = math.Random.new(1);
  }).prototype = matchers._CoversSameAreaAs.prototype;
  dart.addTypeTests(matchers._CoversSameAreaAs);
  dart.setMethodSignature(matchers._CoversSameAreaAs, () => ({
    __proto__: dart.getMethods(matchers._CoversSameAreaAs.__proto__),
    matches: dart.fnType(core.bool, [core.Object, core.Map]),
    [_samplePoint]: dart.fnType(core.bool, [core.Map, ui.Path, ui.Offset]),
    failWithDescription: dart.fnType(core.bool, [core.Map, core.String]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._CoversSameAreaAs, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._CoversSameAreaAs, () => ({
    __proto__: dart.getFields(matchers._CoversSameAreaAs.__proto__),
    expectedPath: dart.finalFieldType(ui.Path),
    areaToCompare: dart.finalFieldType(ui.Rect),
    sampleSize: dart.finalFieldType(core.int),
    maxHorizontalNoise: dart.finalFieldType(core.double),
    maxVerticalNoise: dart.finalFieldType(core.double),
    random: dart.fieldType(math.Random)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C42;
  const _MatchesReferenceImage_referenceImage = dart.privateName(matchers, "_MatchesReferenceImage.referenceImage");
  matchers._MatchesReferenceImage = class _MatchesReferenceImage extends async_matcher.AsyncMatcher {
    get referenceImage() {
      return this[referenceImage$];
    }
    set referenceImage(value) {
      super.referenceImage = value;
    }
    matchAsync(item) {
      return async.async(core.String, (function* matchAsync() {
        let imageFuture = null;
        if (FutureOfImage().is(item)) {
          imageFuture = item;
        } else if (ui.Image.is(item)) {
          imageFuture = FutureOfImage().value(item);
        } else {
          let finder = finders.Finder._check(item);
          let elements = finder.evaluate();
          if (dart.test(elements[$isEmpty])) {
            return "could not be rendered because no widget was found";
          } else if (dart.notNull(elements[$length]) > 1) {
            return "matched too many widgets";
          }
          imageFuture = matchers._captureImage(elements[$single]);
        }
        let binding = binding$6.TestWidgetsFlutterBinding._check(binding$6.TestWidgetsFlutterBinding.ensureInitialized());
        return binding.runAsync(core.String, dart.fn(() => async.async(core.String, (function*() {
          let image = (yield imageFuture);
          let bytes = (yield image.toByteData());
          if (bytes == null) return "could not be encoded.";
          let referenceBytes = (yield this.referenceImage.toByteData());
          if (referenceBytes == null) return "could not have its reference image encoded.";
          if (this.referenceImage.height != image.height || this.referenceImage.width != image.width) return "does not match as width or height do not match. " + dart.str(image) + " != " + dart.str(this.referenceImage);
          let countDifferentPixels = matchers._countDifferentPixels(typed_data.Uint8List.view(bytes[$buffer]), typed_data.Uint8List.view(referenceBytes[$buffer]));
          return countDifferentPixels === 0 ? null : "does not match on " + dart.str(countDifferentPixels) + " pixels";
        }).bind(this)), VoidToFutureOfString()), {additionalTime: C42 || CT.C42});
      }).bind(this));
    }
    describe(description) {
      return description.add("rasterized image matches that of a " + dart.str(this.referenceImage) + " reference image");
    }
  };
  (matchers._MatchesReferenceImage.new = function(referenceImage) {
    this[referenceImage$] = referenceImage;
    matchers._MatchesReferenceImage.__proto__.new.call(this);
    ;
  }).prototype = matchers._MatchesReferenceImage.prototype;
  dart.addTypeTests(matchers._MatchesReferenceImage);
  const referenceImage$ = _MatchesReferenceImage_referenceImage;
  dart.setMethodSignature(matchers._MatchesReferenceImage, () => ({
    __proto__: dart.getMethods(matchers._MatchesReferenceImage.__proto__),
    matchAsync: dart.fnType(async.Future$(core.String), [dart.dynamic]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._MatchesReferenceImage, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._MatchesReferenceImage, () => ({
    __proto__: dart.getFields(matchers._MatchesReferenceImage.__proto__),
    referenceImage: dart.finalFieldType(ui.Image)
  }));
  const _MatchesGoldenFile_key = dart.privateName(matchers, "_MatchesGoldenFile.key");
  const _MatchesGoldenFile_version = dart.privateName(matchers, "_MatchesGoldenFile.version");
  matchers._MatchesGoldenFile = class _MatchesGoldenFile extends async_matcher.AsyncMatcher {
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    matchAsync(item) {
      return async.async(core.String, (function* matchAsync() {
        let imageFuture = null;
        if (FutureOfImage().is(item)) {
          imageFuture = item;
        } else if (ui.Image.is(item)) {
          imageFuture = FutureOfImage().value(item);
        } else {
          let finder = finders.Finder._check(item);
          let elements = finder.evaluate();
          if (dart.test(elements[$isEmpty])) {
            return "could not be rendered because no widget was found";
          } else if (dart.notNull(elements[$length]) > 1) {
            return "matched too many widgets";
          }
          imageFuture = matchers._captureImage(elements[$single]);
        }
        let testNameUri = goldens.goldenFileComparator.getTestUri(this.key, this.version);
        let binding = binding$6.TestWidgetsFlutterBinding._check(binding$6.TestWidgetsFlutterBinding.ensureInitialized());
        return binding.runAsync(core.String, dart.fn(() => async.async(core.String, function*() {
          let image = (yield imageFuture);
          let bytes = (yield image.toByteData({format: ui.ImageByteFormat.png}));
          if (bytes == null) return "could not encode screenshot.";
          if (dart.test(goldens.autoUpdateGoldenFiles)) {
            yield goldens.goldenFileComparator.update(testNameUri, bytes[$buffer][$asUint8List]());
            return null;
          }
          try {
            let success = (yield goldens.goldenFileComparator.compare(bytes[$buffer][$asUint8List](), testNameUri));
            return dart.test(success) ? null : "does not match";
          } catch (e) {
            let ex = dart.getThrown(e);
            if (expect.TestFailure.is(ex)) {
              return ex.message;
            } else
              throw e;
          }
        }), VoidToFutureOfString()), {additionalTime: C42 || CT.C42});
      }).bind(this));
    }
    describe(description) {
      let testNameUri = goldens.goldenFileComparator.getTestUri(this.key, this.version);
      return description.add("one widget whose rasterized image matches golden image \"" + dart.str(testNameUri) + "\"");
    }
  };
  (matchers._MatchesGoldenFile.new = function(key, version) {
    this[key$0] = key;
    this[version$] = version;
    matchers._MatchesGoldenFile.__proto__.new.call(this);
    ;
  }).prototype = matchers._MatchesGoldenFile.prototype;
  (matchers._MatchesGoldenFile.forStringPath = function(path, version) {
    this[version$] = version;
    this[key$0] = core.Uri.parse(path);
    matchers._MatchesGoldenFile.__proto__.new.call(this);
    ;
  }).prototype = matchers._MatchesGoldenFile.prototype;
  dart.addTypeTests(matchers._MatchesGoldenFile);
  const key$0 = _MatchesGoldenFile_key;
  const version$ = _MatchesGoldenFile_version;
  dart.setMethodSignature(matchers._MatchesGoldenFile, () => ({
    __proto__: dart.getMethods(matchers._MatchesGoldenFile.__proto__),
    matchAsync: dart.fnType(async.Future$(core.String), [dart.dynamic]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(matchers._MatchesGoldenFile, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._MatchesGoldenFile, () => ({
    __proto__: dart.getFields(matchers._MatchesGoldenFile.__proto__),
    key: dart.finalFieldType(core.Uri),
    version: dart.finalFieldType(core.int)
  }));
  matchers._MatchesSemanticsData = class _MatchesSemanticsData extends interfaces.Matcher {
    describe(description) {
      description.add("has semantics");
      if (this.label != null) description.add(" with label: " + dart.str(this.label));
      if (this.value != null) description.add(" with value: " + dart.str(this.value));
      if (this.hint != null) description.add(" with hint: " + dart.str(this.hint));
      if (this.increasedValue != null) description.add(" with increasedValue: " + dart.str(this.increasedValue) + " ");
      if (this.decreasedValue != null) description.add(" with decreasedValue: " + dart.str(this.decreasedValue) + " ");
      if (this.actions != null) description.add(" with actions: ").addDescriptionOf(this.actions);
      if (this.flags != null) description.add(" with flags: ").addDescriptionOf(this.flags);
      if (this.textDirection != null) description.add(" with textDirection: " + dart.str(this.textDirection) + " ");
      if (this.rect != null) description.add(" with rect: " + dart.str(this.rect));
      if (this.size != null) description.add(" with size: " + dart.str(this.size));
      if (this.elevation != null) description.add(" with elevation: " + dart.str(this.elevation));
      if (this.thickness != null) description.add(" with thickness: " + dart.str(this.thickness));
      if (this.platformViewId != null) description.add(" with platformViewId: " + dart.str(this.platformViewId));
      if (this.maxValueLength != null) description.add(" with maxValueLength: " + dart.str(this.maxValueLength));
      if (this.currentValueLength != null) description.add(" with currentValueLength: " + dart.str(this.currentValueLength));
      if (this.customActions != null) description.add(" with custom actions: " + dart.str(this.customActions));
      if (this.hintOverrides != null) description.add(" with custom hints: " + dart.str(this.hintOverrides));
      if (this.children != null) {
        description.add(" with children:\n");
        for (let t2 of this.children) {
          let child = matchers._MatchesSemanticsData._check(t2);
          child.describe(description);
        }
      }
      return description;
    }
    matches(node, matchState) {
      let t4, t4$, t4$0, t4$1;
      if (node == null) return this.failWithDescription(matchState, "No SemanticsData provided. " + "Maybe you forgot to enable semantics?");
      let data = semantics.SemanticsData._check(semantics.SemanticsNode.is(node) ? node.getSemanticsData() : node);
      if (this.label != null && this.label != data.label) return this.failWithDescription(matchState, "label was: " + dart.str(data.label));
      if (this.hint != null && this.hint != data.hint) return this.failWithDescription(matchState, "hint was: " + dart.str(data.hint));
      if (this.value != null && this.value != data.value) return this.failWithDescription(matchState, "value was: " + dart.str(data.value));
      if (this.increasedValue != null && this.increasedValue != data.increasedValue) return this.failWithDescription(matchState, "increasedValue was: " + dart.str(data.increasedValue));
      if (this.decreasedValue != null && this.decreasedValue != data.decreasedValue) return this.failWithDescription(matchState, "decreasedValue was: " + dart.str(data.decreasedValue));
      if (this.textDirection != null && !dart.equals(this.textDirection, data.textDirection)) return this.failWithDescription(matchState, "textDirection was: " + dart.str(this.textDirection));
      if (this.rect != null && !dart.equals(this.rect, data.rect)) return this.failWithDescription(matchState, "rect was: " + dart.str(data.rect));
      if (this.size != null && !dart.equals(this.size, data.rect.size)) return this.failWithDescription(matchState, "size was: " + dart.str(data.rect.size));
      if (this.elevation != null && this.elevation != data.elevation) return this.failWithDescription(matchState, "elevation was: " + dart.str(data.elevation));
      if (this.thickness != null && this.thickness != data.thickness) return this.failWithDescription(matchState, "thickness was: " + dart.str(data.thickness));
      if (this.platformViewId != null && this.platformViewId != data.platformViewId) return this.failWithDescription(matchState, "platformViewId was: " + dart.str(data.platformViewId));
      if (this.currentValueLength != null && this.currentValueLength != data.currentValueLength) return this.failWithDescription(matchState, "currentValueLength was: " + dart.str(data.currentValueLength));
      if (this.maxValueLength != null && this.maxValueLength != data.maxValueLength) return this.failWithDescription(matchState, "maxValueLength was: " + dart.str(data.maxValueLength));
      if (this.actions != null) {
        let actionBits = 0;
        for (let action of this.actions)
          actionBits = (actionBits | dart.notNull(action.index)) >>> 0;
        if (actionBits !== data.actions) {
          let actionSummary = (() => {
            let t3 = JSArrayOfString().of([]);
            for (let action of ui.SemanticsAction.values[$values])
              if ((dart.notNull(data.actions) & dart.notNull(action.index)) !== 0) t3[$add](diagnostics.describeEnum(action));
            return t3;
          })();
          return this.failWithDescription(matchState, "actions were: " + dart.str(actionSummary));
        }
      }
      if (this.customActions != null || this.hintOverrides != null) {
        let providedCustomActions = data.customSemanticsActionIds[$map](semantics.CustomSemanticsAction, dart.fn(id => semantics.CustomSemanticsAction.getAction(id), intToCustomSemanticsAction()))[$toList]();
        let expectedCustomActions = (t4$ = (t4 = this.customActions, t4 == null ? null : t4[$toList]()), t4$ == null ? JSArrayOfCustomSemanticsAction().of([]) : t4$);
        if ((t4$0 = this.hintOverrides, t4$0 == null ? null : t4$0.onTapHint) != null) expectedCustomActions[$add](new semantics.CustomSemanticsAction.overridingAction({hint: this.hintOverrides.onTapHint, action: ui.SemanticsAction.tap}));
        if ((t4$1 = this.hintOverrides, t4$1 == null ? null : t4$1.onLongPressHint) != null) expectedCustomActions[$add](new semantics.CustomSemanticsAction.overridingAction({hint: this.hintOverrides.onLongPressHint, action: ui.SemanticsAction.longPress}));
        if (expectedCustomActions[$length] != providedCustomActions[$length]) return this.failWithDescription(matchState, "custom actions where: " + dart.str(providedCustomActions));
        function sortActions(left, right) {
          return dart.notNull(semantics.CustomSemanticsAction.getIdentifier(left)) - dart.notNull(semantics.CustomSemanticsAction.getIdentifier(right));
        }
        dart.fn(sortActions, CustomSemanticsActionAndCustomSemanticsActionToint());
        expectedCustomActions[$sort](sortActions);
        providedCustomActions[$sort](sortActions);
        for (let i = 0; i < dart.notNull(expectedCustomActions[$length]); i = i + 1) {
          if (!dart.equals(expectedCustomActions[$_get](i), providedCustomActions[$_get](i))) return this.failWithDescription(matchState, "custom actions where: " + dart.str(providedCustomActions));
        }
      }
      if (this.flags != null) {
        let flagBits = 0;
        for (let flag of this.flags)
          flagBits = (flagBits | dart.notNull(flag.index)) >>> 0;
        if (flagBits !== data.flags) {
          let flagSummary = (() => {
            let t4 = JSArrayOfString().of([]);
            for (let flag of ui.SemanticsFlag.values[$values])
              if ((dart.notNull(data.flags) & dart.notNull(flag.index)) !== 0) t4[$add](diagnostics.describeEnum(flag));
            return t4;
          })();
          return this.failWithDescription(matchState, "flags were: " + dart.str(flagSummary));
        }
      }
      let allMatched = true;
      if (this.children != null) {
        let i = 0;
        dart.dsend(node, 'visitChildren', [dart.fn(child => {
            allMatched = dart.test(this.children[$_get](i).matches(child, matchState)) && allMatched;
            i = i + 1;
            return allMatched;
          }, SemanticsNodeTobool())]);
      }
      return allMatched;
    }
    failWithDescription(matchState, description) {
      matchState[$_set]("failure", description);
      return false;
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription.add(core.String._check(matchState[$_get]("failure")));
    }
  };
  (matchers._MatchesSemanticsData.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let flags = opts && 'flags' in opts ? opts.flags : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let platformViewId = opts && 'platformViewId' in opts ? opts.platformViewId : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let customActions = opts && 'customActions' in opts ? opts.customActions : null;
    let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this.label = label;
    this.value = value;
    this.increasedValue = increasedValue;
    this.decreasedValue = decreasedValue;
    this.hint = hint;
    this.flags = flags;
    this.actions = actions;
    this.textDirection = textDirection;
    this.rect = rect;
    this.size = size;
    this.elevation = elevation;
    this.thickness = thickness;
    this.platformViewId = platformViewId;
    this.maxValueLength = maxValueLength;
    this.currentValueLength = currentValueLength;
    this.customActions = customActions;
    this.hintOverrides = hintOverrides;
    this.children = children;
    matchers._MatchesSemanticsData.__proto__.new.call(this);
    ;
  }).prototype = matchers._MatchesSemanticsData.prototype;
  dart.addTypeTests(matchers._MatchesSemanticsData);
  dart.setMethodSignature(matchers._MatchesSemanticsData, () => ({
    __proto__: dart.getMethods(matchers._MatchesSemanticsData.__proto__),
    describe: dart.fnType(interfaces.Description, [interfaces.Description]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    failWithDescription: dart.fnType(core.bool, [core.Map, core.String])
  }));
  dart.setLibraryUri(matchers._MatchesSemanticsData, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._MatchesSemanticsData, () => ({
    __proto__: dart.getFields(matchers._MatchesSemanticsData.__proto__),
    label: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    increasedValue: dart.finalFieldType(core.String),
    decreasedValue: dart.finalFieldType(core.String),
    hintOverrides: dart.finalFieldType(semantics.SemanticsHintOverrides),
    actions: dart.finalFieldType(core.List$(ui.SemanticsAction)),
    customActions: dart.finalFieldType(core.List$(semantics.CustomSemanticsAction)),
    flags: dart.finalFieldType(core.List$(ui.SemanticsFlag)),
    textDirection: dart.finalFieldType(ui.TextDirection),
    rect: dart.finalFieldType(ui.Rect),
    size: dart.finalFieldType(ui.Size),
    elevation: dart.finalFieldType(core.double),
    thickness: dart.finalFieldType(core.double),
    platformViewId: dart.finalFieldType(core.int),
    maxValueLength: dart.finalFieldType(core.int),
    currentValueLength: dart.finalFieldType(core.int),
    children: dart.finalFieldType(core.List$(interfaces.Matcher))
  }));
  matchers._MatchesAccessibilityGuideline = class _MatchesAccessibilityGuideline extends async_matcher.AsyncMatcher {
    describe(description) {
      return description.add(this.guideline.description);
    }
    matchAsync(tester) {
      widget_tester.WidgetTester._check(tester);
      return async.async(core.String, (function* matchAsync() {
        let result = (yield this.guideline.evaluate(tester));
        if (dart.test(result.passed)) return null;
        return result.reason;
      }).bind(this));
    }
  };
  (matchers._MatchesAccessibilityGuideline.new = function(guideline) {
    this.guideline = guideline;
    matchers._MatchesAccessibilityGuideline.__proto__.new.call(this);
    ;
  }).prototype = matchers._MatchesAccessibilityGuideline.prototype;
  dart.addTypeTests(matchers._MatchesAccessibilityGuideline);
  dart.setMethodSignature(matchers._MatchesAccessibilityGuideline, () => ({
    __proto__: dart.getMethods(matchers._MatchesAccessibilityGuideline.__proto__),
    describe: dart.fnType(interfaces.Description, [interfaces.Description]),
    matchAsync: dart.fnType(async.Future$(core.String), [core.Object])
  }));
  dart.setLibraryUri(matchers._MatchesAccessibilityGuideline, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._MatchesAccessibilityGuideline, () => ({
    __proto__: dart.getFields(matchers._MatchesAccessibilityGuideline.__proto__),
    guideline: dart.finalFieldType(accessibility.AccessibilityGuideline)
  }));
  matchers._DoesNotMatchAccessibilityGuideline = class _DoesNotMatchAccessibilityGuideline extends async_matcher.AsyncMatcher {
    describe(description) {
      return description.add("Does not " + dart.notNull(this.guideline.description));
    }
    matchAsync(tester) {
      widget_tester.WidgetTester._check(tester);
      return async.async(core.String, (function* matchAsync() {
        let result = (yield this.guideline.evaluate(tester));
        if (dart.test(result.passed)) return "Failed";
        return null;
      }).bind(this));
    }
  };
  (matchers._DoesNotMatchAccessibilityGuideline.new = function(guideline) {
    this.guideline = guideline;
    matchers._DoesNotMatchAccessibilityGuideline.__proto__.new.call(this);
    ;
  }).prototype = matchers._DoesNotMatchAccessibilityGuideline.prototype;
  dart.addTypeTests(matchers._DoesNotMatchAccessibilityGuideline);
  dart.setMethodSignature(matchers._DoesNotMatchAccessibilityGuideline, () => ({
    __proto__: dart.getMethods(matchers._DoesNotMatchAccessibilityGuideline.__proto__),
    describe: dart.fnType(interfaces.Description, [interfaces.Description]),
    matchAsync: dart.fnType(async.Future$(core.String), [core.Object])
  }));
  dart.setLibraryUri(matchers._DoesNotMatchAccessibilityGuideline, "package:flutter_test/src/matchers.dart");
  dart.setFieldSignature(matchers._DoesNotMatchAccessibilityGuideline, () => ({
    __proto__: dart.getFields(matchers._DoesNotMatchAccessibilityGuideline.__proto__),
    guideline: dart.finalFieldType(accessibility.AccessibilityGuideline)
  }));
  let C43;
  let C44;
  matchers.findsNWidgets = function findsNWidgets(n) {
    return new matchers._FindsWidgetMatcher.new(n, n);
  };
  matchers.isInstanceOf = function isInstanceOf(T) {
    return new (type_matcher.TypeMatcher$(T)).new();
  };
  matchers.moreOrLessEquals = function moreOrLessEquals(value, opts) {
    let epsilon = opts && 'epsilon' in opts ? opts.epsilon : 1e-10;
    return new matchers._MoreOrLessEquals.new(value, epsilon);
  };
  matchers.rectMoreOrLessEquals = function rectMoreOrLessEquals(value, opts) {
    let epsilon = opts && 'epsilon' in opts ? opts.epsilon : 1e-10;
    return new (_IsWithinDistanceOfRect()).new(C43 || CT.C43, value, epsilon);
  };
  matchers.offsetMoreOrLessEquals = function offsetMoreOrLessEquals(value, opts) {
    let epsilon = opts && 'epsilon' in opts ? opts.epsilon : 1e-10;
    return new (_IsWithinDistanceOfOffset()).new(C44 || CT.C44, value, epsilon);
  };
  matchers.equalsIgnoringHashCodes = function equalsIgnoringHashCodes(value) {
    return new matchers._EqualsIgnoringHashCodes.new(value);
  };
  matchers.isMethodCall = function isMethodCall(name, opts) {
    let arguments$0 = opts && 'arguments' in opts ? opts.arguments : null;
    return new matchers._IsMethodCall.new(name, arguments$0);
  };
  matchers.coversSameAreaAs = function coversSameAreaAs(expectedPath, opts) {
    let areaToCompare = opts && 'areaToCompare' in opts ? opts.areaToCompare : null;
    let sampleSize = opts && 'sampleSize' in opts ? opts.sampleSize : 20;
    return new matchers._CoversSameAreaAs.new(expectedPath, {areaToCompare: areaToCompare, sampleSize: sampleSize});
  };
  matchers.matchesGoldenFile = function matchesGoldenFile(key, opts) {
    let version = opts && 'version' in opts ? opts.version : null;
    if (core.Uri.is(key)) {
      return new matchers._MatchesGoldenFile.new(key, version);
    } else if (typeof key == 'string') {
      return new matchers._MatchesGoldenFile.forStringPath(key, version);
    }
    dart.throw(new core.ArgumentError.new("Unexpected type for golden file: " + dart.str(dart.runtimeType(key))));
  };
  matchers.matchesReferenceImage = function matchesReferenceImage(image) {
    return new matchers._MatchesReferenceImage.new(image);
  };
  matchers.matchesSemantics = function matchesSemantics(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let platformViewId = opts && 'platformViewId' in opts ? opts.platformViewId : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let hasCheckedState = opts && 'hasCheckedState' in opts ? opts.hasCheckedState : false;
    let isChecked = opts && 'isChecked' in opts ? opts.isChecked : false;
    let isSelected = opts && 'isSelected' in opts ? opts.isSelected : false;
    let isButton = opts && 'isButton' in opts ? opts.isButton : false;
    let isFocused = opts && 'isFocused' in opts ? opts.isFocused : false;
    let isTextField = opts && 'isTextField' in opts ? opts.isTextField : false;
    let isReadOnly = opts && 'isReadOnly' in opts ? opts.isReadOnly : false;
    let hasEnabledState = opts && 'hasEnabledState' in opts ? opts.hasEnabledState : false;
    let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : false;
    let isInMutuallyExclusiveGroup = opts && 'isInMutuallyExclusiveGroup' in opts ? opts.isInMutuallyExclusiveGroup : false;
    let isHeader = opts && 'isHeader' in opts ? opts.isHeader : false;
    let isObscured = opts && 'isObscured' in opts ? opts.isObscured : false;
    let isMultiline = opts && 'isMultiline' in opts ? opts.isMultiline : false;
    let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : false;
    let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : false;
    let isHidden = opts && 'isHidden' in opts ? opts.isHidden : false;
    let isImage = opts && 'isImage' in opts ? opts.isImage : false;
    let isLiveRegion = opts && 'isLiveRegion' in opts ? opts.isLiveRegion : false;
    let hasToggledState = opts && 'hasToggledState' in opts ? opts.hasToggledState : false;
    let isToggled = opts && 'isToggled' in opts ? opts.isToggled : false;
    let hasImplicitScrolling = opts && 'hasImplicitScrolling' in opts ? opts.hasImplicitScrolling : false;
    let hasTapAction = opts && 'hasTapAction' in opts ? opts.hasTapAction : false;
    let hasLongPressAction = opts && 'hasLongPressAction' in opts ? opts.hasLongPressAction : false;
    let hasScrollLeftAction = opts && 'hasScrollLeftAction' in opts ? opts.hasScrollLeftAction : false;
    let hasScrollRightAction = opts && 'hasScrollRightAction' in opts ? opts.hasScrollRightAction : false;
    let hasScrollUpAction = opts && 'hasScrollUpAction' in opts ? opts.hasScrollUpAction : false;
    let hasScrollDownAction = opts && 'hasScrollDownAction' in opts ? opts.hasScrollDownAction : false;
    let hasIncreaseAction = opts && 'hasIncreaseAction' in opts ? opts.hasIncreaseAction : false;
    let hasDecreaseAction = opts && 'hasDecreaseAction' in opts ? opts.hasDecreaseAction : false;
    let hasShowOnScreenAction = opts && 'hasShowOnScreenAction' in opts ? opts.hasShowOnScreenAction : false;
    let hasMoveCursorForwardByCharacterAction = opts && 'hasMoveCursorForwardByCharacterAction' in opts ? opts.hasMoveCursorForwardByCharacterAction : false;
    let hasMoveCursorBackwardByCharacterAction = opts && 'hasMoveCursorBackwardByCharacterAction' in opts ? opts.hasMoveCursorBackwardByCharacterAction : false;
    let hasMoveCursorForwardByWordAction = opts && 'hasMoveCursorForwardByWordAction' in opts ? opts.hasMoveCursorForwardByWordAction : false;
    let hasMoveCursorBackwardByWordAction = opts && 'hasMoveCursorBackwardByWordAction' in opts ? opts.hasMoveCursorBackwardByWordAction : false;
    let hasSetSelectionAction = opts && 'hasSetSelectionAction' in opts ? opts.hasSetSelectionAction : false;
    let hasCopyAction = opts && 'hasCopyAction' in opts ? opts.hasCopyAction : false;
    let hasCutAction = opts && 'hasCutAction' in opts ? opts.hasCutAction : false;
    let hasPasteAction = opts && 'hasPasteAction' in opts ? opts.hasPasteAction : false;
    let hasDidGainAccessibilityFocusAction = opts && 'hasDidGainAccessibilityFocusAction' in opts ? opts.hasDidGainAccessibilityFocusAction : false;
    let hasDidLoseAccessibilityFocusAction = opts && 'hasDidLoseAccessibilityFocusAction' in opts ? opts.hasDidLoseAccessibilityFocusAction : false;
    let hasDismissAction = opts && 'hasDismissAction' in opts ? opts.hasDismissAction : false;
    let onTapHint = opts && 'onTapHint' in opts ? opts.onTapHint : null;
    let onLongPressHint = opts && 'onLongPressHint' in opts ? opts.onLongPressHint : null;
    let customActions = opts && 'customActions' in opts ? opts.customActions : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let flags = (() => {
      let t5 = JSArrayOfSemanticsFlag().of([]);
      if (dart.test(hasCheckedState)) t5[$add](ui.SemanticsFlag.hasCheckedState);
      if (dart.test(isChecked)) t5[$add](ui.SemanticsFlag.isChecked);
      if (dart.test(isSelected)) t5[$add](ui.SemanticsFlag.isSelected);
      if (dart.test(isButton)) t5[$add](ui.SemanticsFlag.isButton);
      if (dart.test(isTextField)) t5[$add](ui.SemanticsFlag.isTextField);
      if (dart.test(isReadOnly)) t5[$add](ui.SemanticsFlag.isReadOnly);
      if (dart.test(isFocused)) t5[$add](ui.SemanticsFlag.isFocused);
      if (dart.test(hasEnabledState)) t5[$add](ui.SemanticsFlag.hasEnabledState);
      if (dart.test(isEnabled)) t5[$add](ui.SemanticsFlag.isEnabled);
      if (dart.test(isInMutuallyExclusiveGroup)) t5[$add](ui.SemanticsFlag.isInMutuallyExclusiveGroup);
      if (dart.test(isHeader)) t5[$add](ui.SemanticsFlag.isHeader);
      if (dart.test(isObscured)) t5[$add](ui.SemanticsFlag.isObscured);
      if (dart.test(isMultiline)) t5[$add](ui.SemanticsFlag.isMultiline);
      if (dart.test(namesRoute)) t5[$add](ui.SemanticsFlag.namesRoute);
      if (dart.test(scopesRoute)) t5[$add](ui.SemanticsFlag.scopesRoute);
      if (dart.test(isHidden)) t5[$add](ui.SemanticsFlag.isHidden);
      if (dart.test(isImage)) t5[$add](ui.SemanticsFlag.isImage);
      if (dart.test(isLiveRegion)) t5[$add](ui.SemanticsFlag.isLiveRegion);
      if (dart.test(hasToggledState)) t5[$add](ui.SemanticsFlag.hasToggledState);
      if (dart.test(isToggled)) t5[$add](ui.SemanticsFlag.isToggled);
      if (dart.test(hasImplicitScrolling)) t5[$add](ui.SemanticsFlag.hasImplicitScrolling);
      return t5;
    })();
    let actions = (() => {
      let t6 = JSArrayOfSemanticsAction().of([]);
      if (dart.test(hasTapAction)) t6[$add](ui.SemanticsAction.tap);
      if (dart.test(hasLongPressAction)) t6[$add](ui.SemanticsAction.longPress);
      if (dart.test(hasScrollLeftAction)) t6[$add](ui.SemanticsAction.scrollLeft);
      if (dart.test(hasScrollRightAction)) t6[$add](ui.SemanticsAction.scrollRight);
      if (dart.test(hasScrollUpAction)) t6[$add](ui.SemanticsAction.scrollUp);
      if (dart.test(hasScrollDownAction)) t6[$add](ui.SemanticsAction.scrollDown);
      if (dart.test(hasIncreaseAction)) t6[$add](ui.SemanticsAction.increase);
      if (dart.test(hasDecreaseAction)) t6[$add](ui.SemanticsAction.decrease);
      if (dart.test(hasShowOnScreenAction)) t6[$add](ui.SemanticsAction.showOnScreen);
      if (dart.test(hasMoveCursorForwardByCharacterAction)) t6[$add](ui.SemanticsAction.moveCursorForwardByCharacter);
      if (dart.test(hasMoveCursorBackwardByCharacterAction)) t6[$add](ui.SemanticsAction.moveCursorBackwardByCharacter);
      if (dart.test(hasSetSelectionAction)) t6[$add](ui.SemanticsAction.setSelection);
      if (dart.test(hasCopyAction)) t6[$add](ui.SemanticsAction.copy);
      if (dart.test(hasCutAction)) t6[$add](ui.SemanticsAction.cut);
      if (dart.test(hasPasteAction)) t6[$add](ui.SemanticsAction.paste);
      if (dart.test(hasDidGainAccessibilityFocusAction)) t6[$add](ui.SemanticsAction.didGainAccessibilityFocus);
      if (dart.test(hasDidLoseAccessibilityFocusAction)) t6[$add](ui.SemanticsAction.didLoseAccessibilityFocus);
      if (customActions != null && dart.test(customActions[$isNotEmpty])) t6[$add](ui.SemanticsAction.customAction);
      if (dart.test(hasDismissAction)) t6[$add](ui.SemanticsAction.dismiss);
      if (dart.test(hasMoveCursorForwardByWordAction)) t6[$add](ui.SemanticsAction.moveCursorForwardByWord);
      if (dart.test(hasMoveCursorBackwardByWordAction)) t6[$add](ui.SemanticsAction.moveCursorBackwardByWord);
      return t6;
    })();
    let hintOverrides = null;
    if (onTapHint != null || onLongPressHint != null) hintOverrides = new semantics.SemanticsHintOverrides.new({onTapHint: onTapHint, onLongPressHint: onLongPressHint});
    return new matchers._MatchesSemanticsData.new({label: label, hint: hint, value: value, increasedValue: increasedValue, decreasedValue: decreasedValue, actions: actions, flags: flags, textDirection: textDirection, rect: rect, size: size, elevation: elevation, thickness: thickness, platformViewId: platformViewId, customActions: customActions, hintOverrides: hintOverrides, currentValueLength: currentValueLength, maxValueLength: maxValueLength, children: children});
  };
  matchers.meetsGuideline = function meetsGuideline(guideline) {
    return new matchers._MatchesAccessibilityGuideline.new(guideline);
  };
  matchers.doesNotMeetGuideline = function doesNotMeetGuideline(guideline) {
    return new matchers._DoesNotMatchAccessibilityGuideline.new(guideline);
  };
  matchers._hasAncestorMatching = function _hasAncestorMatching(finder, predicate) {
    let nodes = finder.evaluate();
    if (nodes[$length] !== 1) return false;
    let result = false;
    nodes[$single].visitAncestorElements(dart.fn(ancestor => {
      if (dart.test(predicate(ancestor.widget))) {
        result = true;
        return false;
      }
      return true;
    }, ElementTobool()));
    return result;
  };
  matchers._hasAncestorOfType = function _hasAncestorOfType(finder, targetType) {
    return matchers._hasAncestorMatching(finder, dart.fn(widget => dart.equals(dart.runtimeType(widget), targetType), WidgetTobool()));
  };
  matchers._isWhitespace = function _isWhitespace(c) {
    return dart.notNull(c) <= 13 && dart.notNull(c) >= 9 || c === 32;
  };
  matchers._isVerticalLine = function _isVerticalLine(c) {
    return c === 9474 || c === 9475 || c === 9553 || c === 9550;
  };
  matchers._isAllTreeConnectorCharacters = function _isAllTreeConnectorCharacters(line) {
    for (let i = 0; i < line.length; i = i + 1) {
      let c = line[$codeUnitAt](i);
      if (!dart.test(matchers._isWhitespace(c)) && !dart.test(matchers._isVerticalLine(c))) return false;
    }
    return true;
  };
  matchers._intDistance = function _intDistance(a, b) {
    return (dart.notNull(b) - dart.notNull(a))[$abs]();
  };
  matchers._doubleDistance = function _doubleDistance(a, b) {
    return (dart.notNull(b) - dart.notNull(a))[$abs]();
  };
  matchers._offsetDistance = function _offsetDistance(a, b) {
    return b['-'](a).distance;
  };
  matchers._maxComponentColorDistance = function _maxComponentColorDistance(a, b) {
    let delta = math.max(core.int, (dart.notNull(a.red) - dart.notNull(b.red))[$abs](), (dart.notNull(a.green) - dart.notNull(b.green))[$abs]());
    delta = math.max(core.int, delta, (dart.notNull(a.blue) - dart.notNull(b.blue))[$abs]());
    delta = math.max(core.int, delta, (dart.notNull(a.alpha) - dart.notNull(b.alpha))[$abs]());
    return delta[$toDouble]();
  };
  matchers._maxComponentHSVColorDistance = function _maxComponentHSVColorDistance(a, b) {
    let delta = math.max(core.double, (dart.notNull(a.saturation) - dart.notNull(b.saturation))[$abs](), (dart.notNull(a.value) - dart.notNull(b.value))[$abs]());
    delta = math.max(core.double, delta, ((dart.notNull(a.hue) - dart.notNull(b.hue)) / 360.0)[$abs]());
    return math.max(core.double, delta, (dart.notNull(a.alpha) - dart.notNull(b.alpha))[$abs]());
  };
  matchers._maxComponentHSLColorDistance = function _maxComponentHSLColorDistance(a, b) {
    let delta = math.max(core.double, (dart.notNull(a.saturation) - dart.notNull(b.saturation))[$abs](), (dart.notNull(a.lightness) - dart.notNull(b.lightness))[$abs]());
    delta = math.max(core.double, delta, ((dart.notNull(a.hue) - dart.notNull(b.hue)) / 360.0)[$abs]());
    return math.max(core.double, delta, (dart.notNull(a.alpha) - dart.notNull(b.alpha))[$abs]());
  };
  matchers._rectDistance = function _rectDistance(a, b) {
    let delta = math.max(core.double, (dart.notNull(a.left) - dart.notNull(b.left))[$abs](), (dart.notNull(a.top) - dart.notNull(b.top))[$abs]());
    delta = math.max(core.double, delta, (dart.notNull(a.right) - dart.notNull(b.right))[$abs]());
    delta = math.max(core.double, delta, (dart.notNull(a.bottom) - dart.notNull(b.bottom))[$abs]());
    return delta;
  };
  matchers._sizeDistance = function _sizeDistance(a, b) {
    let delta = ui.Offset._check(b['-'](a));
    return delta.distance;
  };
  matchers.within = function within(T, opts) {
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let distanceFunction = opts && 'distanceFunction' in opts ? opts.distanceFunction : null;
    distanceFunction == null ? distanceFunction = dart.fnType(core.num, [T, T])._check(matchers._kStandardDistanceFunctions[$_get](dart.runtimeType(from))) : null;
    if (distanceFunction == null) {
      dart.throw(new core.ArgumentError.new("The specified distanceFunction was null, and a standard distance " + "function was not found for type " + dart.str(dart.runtimeType(from)) + " of the provided " + "`from` argument."));
    }
    return new (matchers._IsWithinDistance$(T)).new(distanceFunction, from, distance);
  };
  matchers.clipsWithBoundingRRect = function clipsWithBoundingRRect(opts) {
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    return new matchers._ClipsWithBoundingRRect.new({borderRadius: borderRadius});
  };
  matchers.clipsWithShapeBorder = function clipsWithShapeBorder(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    return new matchers._ClipsWithShapeBorder.new({shape: shape});
  };
  matchers.rendersOnPhysicalModel = function rendersOnPhysicalModel(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    return new matchers._RendersOnPhysicalModel.new({shape: shape, borderRadius: borderRadius, elevation: elevation});
  };
  matchers.rendersOnPhysicalShape = function rendersOnPhysicalShape(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    return new matchers._RendersOnPhysicalShape.new({shape: shape, elevation: elevation});
  };
  matchers._captureImage = function _captureImage(element) {
    let renderObject = element.renderObject;
    while (!dart.test(renderObject.isRepaintBoundary)) {
      renderObject = object.RenderObject._check(renderObject.parent);
      if (!(renderObject != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 1611, 12, "nt;\n    assert(rende");
    }
    if (!!dart.test(renderObject.debugNeedsPaint)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 1613, 10, ";\n  }\n  assert(!renderObject.");
    let layer = layer$.OffsetLayer._check(renderObject.debugLayer);
    return layer.toImage(renderObject.paintBounds);
  };
  matchers._countDifferentPixels = function _countDifferentPixels(imageA, imageB) {
    if (!(imageA[$length] == imageB[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/matchers.dart", 1619, 10, "eB) {\n  assert(imageA.length =");
    let delta = 0;
    for (let i = 0; i < dart.notNull(imageA[$length]); i = i + 4) {
      if (imageA[$_get](i) != imageB[$_get](i) || imageA[$_get](i + 1) != imageB[$_get](i + 1) || imageA[$_get](i + 2) != imageB[$_get](i + 2) || imageA[$_get](i + 3) != imageB[$_get](i + 3)) {
        delta = delta + 1;
      }
    }
    return delta;
  };
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C53;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C54;
  let C69;
  let C70;
  dart.defineLazy(matchers, {
    /*matchers.findsNothing*/get findsNothing() {
      return C45 || CT.C45;
    },
    /*matchers.findsWidgets*/get findsWidgets() {
      return C46 || CT.C46;
    },
    /*matchers.findsOneWidget*/get findsOneWidget() {
      return C47 || CT.C47;
    },
    /*matchers.isOffstage*/get isOffstage() {
      return C48 || CT.C48;
    },
    /*matchers.isOnstage*/get isOnstage() {
      return C49 || CT.C49;
    },
    /*matchers.isInCard*/get isInCard() {
      return C50 || CT.C50;
    },
    /*matchers.isNotInCard*/get isNotInCard() {
      return C51 || CT.C51;
    },
    /*matchers.hasOneLineDescription*/get hasOneLineDescription() {
      return C52 || CT.C52;
    },
    /*matchers.hasAGoodToStringDeep*/get hasAGoodToStringDeep() {
      return C53 || CT.C53;
    },
    /*matchers.throwsFlutterError*/get throwsFlutterError() {
      return throws_matcher.throwsA(matchers.isFlutterError);
    },
    /*matchers.throwsAssertionError*/get throwsAssertionError() {
      return throws_matcher.throwsA(matchers.isAssertionError);
    },
    /*matchers.isFlutterError*/get isFlutterError() {
      return matchers.isInstanceOf(assertions.FlutterError);
    },
    /*matchers.isAssertionError*/get isAssertionError() {
      return matchers.isInstanceOf(core.AssertionError);
    },
    /*matchers._kStandardDistanceFunctions*/get _kStandardDistanceFunctions() {
      return C54 || CT.C54;
    },
    /*matchers.clipsWithBoundingRect*/get clipsWithBoundingRect() {
      return C69 || CT.C69;
    },
    /*matchers.hasNoImmediateClip*/get hasNoImmediateClip() {
      return C70 || CT.C70;
    }
  });
  const _name = dart.privateName(ui, "_name");
  let C71;
  const _isDown = dart.privateName(test_pointer, "_isDown");
  const _location = dart.privateName(test_pointer, "_location");
  const _device$ = dart.privateName(test_pointer, "_device");
  const _buttons = dart.privateName(test_pointer, "_buttons");
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  const TestPointer_pointer = dart.privateName(test_pointer, "TestPointer.pointer");
  const TestPointer_kind = dart.privateName(test_pointer, "TestPointer.kind");
  test_pointer.TestPointer = class TestPointer extends core.Object {
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[_device$];
    }
    get buttons() {
      return this[_buttons];
    }
    get isDown() {
      return this[_isDown];
    }
    get location() {
      return this[_location];
    }
    setDownInfo(event, newLocation, opts) {
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      this[_location] = newLocation;
      if (buttons != null) this[_buttons] = buttons;
      switch (dart.runtimeType(event)) {
        case C76 || CT.C76:
        {
          if (!!dart.test(this.isDown)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 95, 16, "!isDown");
          this[_isDown] = true;
          break;
        }
        case C77 || CT.C77:
        case C78 || CT.C78:
        {
          if (!dart.test(this.isDown)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 100, 16, "isDown");
          this[_isDown] = false;
          break;
        }
        default:
        {
          break;
        }
      }
      return this.isDown;
    }
    down(newLocation, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      if (!!dart.test(this.isDown)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 121, 12, "!isDown");
      this[_isDown] = true;
      this[_location] = newLocation;
      if (buttons != null) this[_buttons] = buttons;
      return new events.PointerDownEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], pointer: this.pointer, position: this.location, buttons: this[_buttons]});
    }
    move(newLocation, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      if (!dart.test(this.isDown)) dart.assertFailed("Move events can only be generated when the pointer is down. To " + "create a movement event simulating a pointer move when the pointer is " + "up, use hover() instead.", "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 152, 9, "isDown");
      let delta = newLocation['-'](this.location);
      this[_location] = newLocation;
      if (buttons != null) this[_buttons] = buttons;
      return new events.PointerMoveEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], pointer: this.pointer, position: newLocation, delta: delta, buttons: this[_buttons]});
    }
    up(opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      if (!dart.test(this.isDown)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 178, 12, "isDown");
      this[_isDown] = false;
      return new events.PointerUpEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], pointer: this.pointer, position: this.location});
    }
    cancel(opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      if (!dart.test(this.isDown)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 196, 12, "isDown");
      this[_isDown] = false;
      return new events.PointerCancelEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], pointer: this.pointer, position: this.location});
    }
    addPointer(opts) {
      let t7, t7$;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      let location = opts && 'location' in opts ? opts.location : null;
      if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 216, 12, "timeStamp != null");
      this[_location] = (t7 = location, t7 == null ? this[_location] : t7);
      return new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], position: (t7$ = this[_location], t7$ == null ? ui.Offset.zero : t7$)});
    }
    removePointer(opts) {
      let t7, t7$;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      let location = opts && 'location' in opts ? opts.location : null;
      if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 235, 12, "timeStamp != null");
      this[_location] = (t7 = location, t7 == null ? this[_location] : t7);
      return new events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], position: (t7$ = this[_location], t7$ == null ? ui.Offset.zero : t7$)});
    }
    hover(newLocation, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      if (!(newLocation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 256, 12, "newLocation != null");
      if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 257, 12, "timeStamp != null");
      if (!!dart.test(this.isDown)) dart.assertFailed("Hover events can only be generated when the pointer is up. To " + "simulate movement when the pointer is down, use move() instead.", "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 259, 9, "!isDown");
      if (!!dart.equals(this.kind, ui.PointerDeviceKind.touch)) dart.assertFailed("Touch pointers can't generate hover events", "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 262, 12, "kind != PointerDeviceKind.touch");
      let delta = this.location != null ? newLocation['-'](this.location) : ui.Offset.zero;
      this[_location] = newLocation;
      return new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], position: newLocation, delta: delta});
    }
    scroll(scrollDelta, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      if (!(scrollDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 283, 12, "scrollDelta != null");
      if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 284, 12, "timeStamp != null");
      if (!!dart.equals(this.kind, ui.PointerDeviceKind.touch)) dart.assertFailed("Touch pointers can't generate pointer signal events", "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 285, 12, "kind != PointerDeviceKind.touch");
      return new events.PointerScrollEvent.new({timeStamp: timeStamp, kind: this.kind, device: this[_device$], position: this.location, scrollDelta: scrollDelta});
    }
  };
  (test_pointer.TestPointer.new = function(pointer, kind, _device, buttons) {
    if (pointer === void 0) pointer = 1;
    if (kind === void 0) kind = C71 || CT.C71;
    if (_device === void 0) _device = null;
    if (buttons === void 0) buttons = 1;
    this[_isDown] = false;
    this[_location] = null;
    this[pointer$] = pointer;
    this[kind$] = kind;
    this[_device$] = _device;
    if (!(kind != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 31, 16, "kind != null");
    if (!(pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 32, 16, "pointer != null");
    if (!(buttons != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 33, 16, "buttons != null");
    this[_buttons] = buttons;
    switch (this.kind) {
      case C72 || CT.C72:
      {
        this[_device$] == null ? this[_device$] = 1 : null;
        break;
      }
      case C73 || CT.C73:
      case C74 || CT.C74:
      case C71 || CT.C71:
      case C75 || CT.C75:
      {
        this[_device$] == null ? this[_device$] = 0 : null;
        break;
      }
    }
  }).prototype = test_pointer.TestPointer.prototype;
  dart.addTypeTests(test_pointer.TestPointer);
  const pointer$ = TestPointer_pointer;
  const kind$ = TestPointer_kind;
  dart.setMethodSignature(test_pointer.TestPointer, () => ({
    __proto__: dart.getMethods(test_pointer.TestPointer.__proto__),
    setDownInfo: dart.fnType(core.bool, [events.PointerEvent, ui.Offset], {buttons: core.int}),
    down: dart.fnType(events.PointerDownEvent, [ui.Offset], {buttons: core.int, timeStamp: core.Duration}),
    move: dart.fnType(events.PointerMoveEvent, [ui.Offset], {buttons: core.int, timeStamp: core.Duration}),
    up: dart.fnType(events.PointerUpEvent, [], {timeStamp: core.Duration}),
    cancel: dart.fnType(events.PointerCancelEvent, [], {timeStamp: core.Duration}),
    addPointer: dart.fnType(events.PointerAddedEvent, [], {location: ui.Offset, timeStamp: core.Duration}),
    removePointer: dart.fnType(events.PointerRemovedEvent, [], {location: ui.Offset, timeStamp: core.Duration}),
    hover: dart.fnType(events.PointerHoverEvent, [ui.Offset], {timeStamp: core.Duration}),
    scroll: dart.fnType(events.PointerScrollEvent, [ui.Offset], {timeStamp: core.Duration})
  }));
  dart.setGetterSignature(test_pointer.TestPointer, () => ({
    __proto__: dart.getGetters(test_pointer.TestPointer.__proto__),
    device: core.int,
    buttons: core.int,
    isDown: core.bool,
    location: ui.Offset
  }));
  dart.setLibraryUri(test_pointer.TestPointer, "package:flutter_test/src/test_pointer.dart");
  dart.setFieldSignature(test_pointer.TestPointer, () => ({
    __proto__: dart.getFields(test_pointer.TestPointer.__proto__),
    [_device$]: dart.fieldType(core.int),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    [_buttons]: dart.fieldType(core.int),
    [_isDown]: dart.fieldType(core.bool),
    [_location]: dart.fieldType(ui.Offset)
  }));
  const _dispatcher = dart.privateName(test_pointer, "_dispatcher");
  const _hitTester = dart.privateName(test_pointer, "_hitTester");
  const _pointer = dart.privateName(test_pointer, "_pointer");
  const _result = dart.privateName(test_pointer, "_result");
  test_pointer.TestGesture = class TestGesture extends core.Object {
    down(downLocation) {
      return async.async(dart.void, (function* down() {
        return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(dart.void, (function*() {
          this[_result] = this[_hitTester](downLocation);
          return this[_dispatcher](this[_pointer].down(downLocation), this[_result]);
        }).bind(this)), VoidToFutureOfvoid()));
      }).bind(this));
    }
    downWithCustomEvent(downLocation, event) {
      return async.async(dart.void, (function* downWithCustomEvent() {
        this[_pointer].setDownInfo(event, downLocation);
        return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(dart.void, (function*() {
          this[_result] = this[_hitTester](downLocation);
          return this[_dispatcher](event, this[_result]);
        }).bind(this)), VoidToFutureOfvoid()));
      }).bind(this));
    }
    updateWithCustomEvent(event, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      this[_pointer].setDownInfo(event, event.position);
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => this[_dispatcher](event, this[_result]), VoidToFutureOfvoid()));
    }
    addPointer(opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => this[_dispatcher](this[_pointer].addPointer({timeStamp: timeStamp, location: this[_pointer].location}), null), VoidToFutureOfvoid()));
    }
    removePointer(opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => this[_dispatcher](this[_pointer].removePointer({timeStamp: timeStamp, location: this[_pointer].location}), null), VoidToFutureOfvoid()));
    }
    moveBy(offset, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      return this.moveTo(this[_pointer].location['+'](offset), {timeStamp: timeStamp});
    }
    moveTo(location, opts) {
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C79 || CT.C79;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => {
        if (dart.test(this[_pointer][_isDown])) {
          if (!(this[_result] != null)) dart.assertFailed("Move events with the pointer down must be preceded by a down " + "event that captures a hit test result.", "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 406, 16, "_result != null");
          return this[_dispatcher](this[_pointer].move(location, {timeStamp: timeStamp}), this[_result]);
        } else {
          if (!!dart.equals(this[_pointer].kind, ui.PointerDeviceKind.touch)) dart.assertFailed("Touch device move events can only be sent if the pointer is down.", "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 411, 16, "_pointer.kind != PointerDeviceKind.touch");
          return this[_dispatcher](this[_pointer].hover(location, {timeStamp: timeStamp}), null);
        }
      }, VoidToFutureOfvoid()));
    }
    up() {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        if (!dart.test(this[_pointer][_isDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 421, 14, "_pointer._isDown");
        yield this[_dispatcher](this[_pointer].up(), this[_result]);
        if (!!dart.test(this[_pointer][_isDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 423, 14, "!_pointer._isDown");
        this[_result] = null;
      }).bind(this)), VoidToFutureOfNull()));
    }
    cancel() {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        if (!dart.test(this[_pointer][_isDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 433, 14, "_pointer._isDown");
        yield this[_dispatcher](this[_pointer].cancel(), this[_result]);
        if (!!dart.test(this[_pointer][_isDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 435, 14, "!_pointer._isDown");
        this[_result] = null;
      }).bind(this)), VoidToFutureOfNull()));
    }
  };
  (test_pointer.TestGesture.new = function(opts) {
    let dispatcher = opts && 'dispatcher' in opts ? opts.dispatcher : null;
    let hitTester = opts && 'hitTester' in opts ? opts.hitTester : null;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 1;
    let kind = opts && 'kind' in opts ? opts.kind : C71 || CT.C71;
    let device = opts && 'device' in opts ? opts.device : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    if (!(dispatcher != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 332, 15, "dispatcher != null");
    if (!(hitTester != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 333, 15, "hitTester != null");
    if (!(pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 334, 15, "pointer != null");
    if (!(kind != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 335, 15, "kind != null");
    if (!(buttons != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_pointer.dart", 336, 15, "buttons != null");
    this[_dispatcher] = dispatcher;
    this[_hitTester] = hitTester;
    this[_pointer] = new test_pointer.TestPointer.new(pointer, kind, device, buttons);
    this[_result] = null;
    ;
  }).prototype = test_pointer.TestGesture.prototype;
  dart.addTypeTests(test_pointer.TestGesture);
  dart.setMethodSignature(test_pointer.TestGesture, () => ({
    __proto__: dart.getMethods(test_pointer.TestGesture.__proto__),
    down: dart.fnType(async.Future$(dart.void), [ui.Offset]),
    downWithCustomEvent: dart.fnType(async.Future$(dart.void), [ui.Offset, events.PointerDownEvent]),
    updateWithCustomEvent: dart.fnType(async.Future$(dart.void), [events.PointerEvent], {timeStamp: core.Duration}),
    addPointer: dart.fnType(async.Future$(dart.void), [], {timeStamp: core.Duration}),
    removePointer: dart.fnType(async.Future$(dart.void), [], {timeStamp: core.Duration}),
    moveBy: dart.fnType(async.Future$(dart.void), [ui.Offset], {timeStamp: core.Duration}),
    moveTo: dart.fnType(async.Future$(dart.void), [ui.Offset], {timeStamp: core.Duration}),
    up: dart.fnType(async.Future$(dart.void), []),
    cancel: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(test_pointer.TestGesture, "package:flutter_test/src/test_pointer.dart");
  dart.setFieldSignature(test_pointer.TestGesture, () => ({
    __proto__: dart.getFields(test_pointer.TestGesture.__proto__),
    [_dispatcher]: dart.finalFieldType(dart.fnType(async.Future$(dart.void), [events.PointerEvent, hit_test.HitTestResult])),
    [_hitTester]: dart.finalFieldType(dart.fnType(hit_test.HitTestResult, [ui.Offset])),
    [_pointer]: dart.finalFieldType(test_pointer.TestPointer),
    [_result]: dart.fieldType(hit_test.HitTestResult)
  }));
  const _stateOf = dart.privateName(controller, "_stateOf");
  const _walkLayers = dart.privateName(controller, "_walkLayers");
  let C80;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C81;
  let C82;
  const _getNextPointer = dart.privateName(controller, "_getNextPointer");
  const _getElementPoint = dart.privateName(controller, "_getElementPoint");
  const WidgetController_binding = dart.privateName(controller, "WidgetController.binding");
  const WidgetController_nextPointer = dart.privateName(controller, "WidgetController.nextPointer");
  controller.WidgetController = class WidgetController extends core.Object {
    get binding() {
      return this[binding$7];
    }
    set binding(value) {
      super.binding = value;
    }
    get nextPointer() {
      return this[nextPointer];
    }
    set nextPointer(value) {
      this[nextPointer] = value;
    }
    any(finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return finder.evaluate()[$isNotEmpty];
    }
    get allWidgets() {
      test_async_utils.TestAsyncUtils.guardSync();
      return this.allElements[$map](framework.Widget, dart.fn(element => element.widget, ElementToWidget()));
    }
    widget(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return T._check(finder.evaluate()[$single].widget);
    }
    firstWidget(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return T._check(finder.evaluate()[$first].widget);
    }
    widgetList(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return finder.evaluate()[$map](T, dart.fn(element => {
        let result = T._check(element.widget);
        return result;
      }, dart.fnType(T, [framework.Element])));
    }
    get allElements() {
      test_async_utils.TestAsyncUtils.guardSync();
      return all_elements.collectAllElementsFrom(this.binding.renderViewElement, {skipOffstage: false});
    }
    element(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return T._check(finder.evaluate()[$single]);
    }
    firstElement(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return T._check(finder.evaluate()[$first]);
    }
    elementList(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return core.Iterable$(T)._check(finder.evaluate());
    }
    get allStates() {
      test_async_utils.TestAsyncUtils.guardSync();
      return this.allElements[$whereType](framework.StatefulElement)[$map](StateOfStatefulWidget(), dart.fn(element => element.state, StatefulElementToStateOfStatefulWidget()));
    }
    state(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return this[_stateOf](T, finder.evaluate()[$single], finder);
    }
    firstState(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return this[_stateOf](T, finder.evaluate()[$first], finder);
    }
    stateList(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return finder.evaluate()[$map](T, dart.fn(element => this[_stateOf](T, element, finder), dart.fnType(T, [framework.Element])));
    }
    [_stateOf](T, element, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      if (framework.StatefulElement.is(element)) return T._check(element.state);
      dart.throw(new core.StateError.new("Widget of type " + dart.str(dart.runtimeType(element.widget)) + ", with " + dart.str(finder.description) + ", is not a StatefulWidget."));
    }
    get allRenderObjects() {
      test_async_utils.TestAsyncUtils.guardSync();
      return this.allElements[$map](object.RenderObject, dart.fn(element => element.renderObject, ElementToRenderObject()));
    }
    renderObject(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return T._check(finder.evaluate()[$single].renderObject);
    }
    firstRenderObject(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return T._check(finder.evaluate()[$first].renderObject);
    }
    renderObjectList(T, finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      return finder.evaluate()[$map](T, dart.fn(element => {
        let result = T._check(element.renderObject);
        return result;
      }, dart.fnType(T, [framework.Element])));
    }
    get layers() {
      return this[_walkLayers](this.binding.renderView.debugLayer)[$toList]();
    }
    [_walkLayers](layer) {
      return new (SyncIterableOfLayer()).new((function* _walkLayers$() {
        test_async_utils.TestAsyncUtils.guardSync();
        yield layer;
        if (layer$.ContainerLayer.is(layer)) {
          let root = layer;
          let child = root.firstChild;
          while (child != null) {
            yield* this[_walkLayers](child);
            child = child.nextSibling;
          }
        }
      }).bind(this));
    }
    tap(finder, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return this.tapAt(this.getCenter(finder), {pointer: pointer, buttons: buttons});
    }
    tapAt(location, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        let gesture = (yield this.startGesture(location, {pointer: pointer, buttons: buttons}));
        yield gesture.up();
      }).bind(this)), VoidToFutureOfNull()));
    }
    press(finder, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return test_async_utils.TestAsyncUtils.guard(test_pointer.TestGesture, dart.fn(() => this.startGesture(this.getCenter(finder), {pointer: pointer, buttons: buttons}), VoidToFutureOfTestGesture()));
    }
    longPress(finder, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return this.longPressAt(this.getCenter(finder), {pointer: pointer, buttons: buttons});
    }
    longPressAt(location, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        let gesture = (yield this.startGesture(location, {pointer: pointer, buttons: buttons}));
        yield this.pump(constants.kLongPressTimeout['+'](constants.kPressTimeout));
        yield gesture.up();
      }).bind(this)), VoidToFutureOfNull()));
    }
    fling(finder, offset, speed, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      let frameInterval = opts && 'frameInterval' in opts ? opts.frameInterval : C80 || CT.C80;
      let initialOffset = opts && 'initialOffset' in opts ? opts.initialOffset : C81 || CT.C81;
      let initialOffsetDelay = opts && 'initialOffsetDelay' in opts ? opts.initialOffsetDelay : C82 || CT.C82;
      return this.flingFrom(this.getCenter(finder), offset, speed, {pointer: pointer, buttons: buttons, frameInterval: frameInterval, initialOffset: initialOffset, initialOffsetDelay: initialOffsetDelay});
    }
    flingFrom(startLocation, offset, speed, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      let frameInterval = opts && 'frameInterval' in opts ? opts.frameInterval : C80 || CT.C80;
      let initialOffset = opts && 'initialOffset' in opts ? opts.initialOffset : C81 || CT.C81;
      let initialOffsetDelay = opts && 'initialOffsetDelay' in opts ? opts.initialOffsetDelay : C82 || CT.C82;
      if (!(dart.notNull(offset.distance) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 375, 12, "offset.distance > 0.0");
      if (!(dart.notNull(speed) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 376, 12, "speed > 0.0");
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        let t7;
        let testPointer = new test_pointer.TestPointer.new((t7 = pointer, t7 == null ? this[_getNextPointer]() : t7), ui.PointerDeviceKind.touch, null, buttons);
        let result = this.hitTestOnBinding(startLocation);
        let timeStampDelta = 1000.0 * dart.notNull(offset.distance) / (50 * dart.notNull(speed));
        let timeStamp = 0.0;
        let lastTimeStamp = timeStamp;
        yield this.sendEventToBinding(testPointer.down(startLocation, {timeStamp: new core.Duration.new({milliseconds: timeStamp[$round]()})}), result);
        if (dart.notNull(initialOffset.distance) > 0.0) {
          yield this.sendEventToBinding(testPointer.move(startLocation['+'](initialOffset), {timeStamp: new core.Duration.new({milliseconds: timeStamp[$round]()})}), result);
          timeStamp = timeStamp + dart.notNull(initialOffsetDelay.inMilliseconds);
          yield this.pump(initialOffsetDelay);
        }
        for (let i = 0; i <= 50; i = i + 1) {
          let location = startLocation['+'](initialOffset)['+'](ui.Offset.lerp(ui.Offset.zero, offset, i / 50));
          yield this.sendEventToBinding(testPointer.move(location, {timeStamp: new core.Duration.new({milliseconds: timeStamp[$round]()})}), result);
          timeStamp = timeStamp + timeStampDelta;
          if (timeStamp - lastTimeStamp > dart.notNull(frameInterval.inMilliseconds)) {
            yield this.pump(new core.Duration.new({milliseconds: (timeStamp - lastTimeStamp)[$truncate]()}));
            lastTimeStamp = timeStamp;
          }
        }
        yield this.sendEventToBinding(testPointer.up({timeStamp: new core.Duration.new({milliseconds: timeStamp[$round]()})}), result);
      }).bind(this)), VoidToFutureOfNull()));
    }
    drag(finder, offset, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      let touchSlopX = opts && 'touchSlopX' in opts ? opts.touchSlopX : 20;
      let touchSlopY = opts && 'touchSlopY' in opts ? opts.touchSlopY : 20;
      if (!(20 > 18)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 448, 12, "kDragSlopDefault > kTouchSlop");
      return this.dragFrom(this.getCenter(finder), offset, {pointer: pointer, buttons: buttons, touchSlopX: touchSlopX, touchSlopY: touchSlopY});
    }
    dragFrom(startLocation, offset, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      let touchSlopX = opts && 'touchSlopX' in opts ? opts.touchSlopX : 20;
      let touchSlopY = opts && 'touchSlopY' in opts ? opts.touchSlopY : 20;
      if (!(20 > 18)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 475, 12, "kDragSlopDefault > kTouchSlop");
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        let gesture = (yield this.startGesture(startLocation, {pointer: pointer, buttons: buttons}));
        if (!(gesture != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 478, 14, "gesture != null");
        let xSign = offset.dx[$sign];
        let ySign = offset.dy[$sign];
        let offsetX = offset.dx;
        let offsetY = offset.dy;
        let separateX = offset.dx[$abs]() > dart.notNull(touchSlopX) && dart.notNull(touchSlopX) > 0;
        let separateY = offset.dy[$abs]() > dart.notNull(touchSlopY) && dart.notNull(touchSlopY) > 0;
        if (separateY || separateX) {
          let offsetSlope = dart.notNull(offsetY) / dart.notNull(offsetX);
          let inverseOffsetSlope = dart.notNull(offsetX) / dart.notNull(offsetY);
          let slopSlope = dart.notNull(touchSlopY) / dart.notNull(touchSlopX);
          let absoluteOffsetSlope = offsetSlope[$abs]();
          let signedSlopX = dart.notNull(touchSlopX) * xSign;
          let signedSlopY = dart.notNull(touchSlopY) * ySign;
          if (absoluteOffsetSlope !== slopSlope) {
            if (absoluteOffsetSlope < slopSlope) {
              if (!(offsetX[$abs]() > dart.notNull(touchSlopX))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 499, 20, "offsetX.abs() > touchSlopX");
              let diffY = offsetSlope[$abs]() * dart.notNull(touchSlopX) * ySign;
              yield gesture.moveBy(new ui.Offset.new(signedSlopX, diffY));
              if (offsetY[$abs]() <= dart.notNull(touchSlopY)) {
                yield gesture.moveBy(new ui.Offset.new(dart.notNull(offsetX) - signedSlopX, dart.notNull(offsetY) - diffY));
              } else {
                let diffY2 = signedSlopY - diffY;
                let diffX2 = inverseOffsetSlope * diffY2;
                yield gesture.moveBy(new ui.Offset.new(diffX2, diffY2));
                yield gesture.moveBy(new ui.Offset.new(dart.notNull(offsetX) - diffX2 - signedSlopX, dart.notNull(offsetY) - signedSlopY));
              }
            } else {
              if (!(offsetY[$abs]() > dart.notNull(touchSlopY))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 518, 20, "offsetY.abs() > touchSlopY");
              let diffX = inverseOffsetSlope[$abs]() * dart.notNull(touchSlopY) * xSign;
              yield gesture.moveBy(new ui.Offset.new(diffX, signedSlopY));
              if (offsetX[$abs]() <= dart.notNull(touchSlopX)) {
                yield gesture.moveBy(new ui.Offset.new(dart.notNull(offsetX) - diffX, dart.notNull(offsetY) - signedSlopY));
              } else {
                let diffX2 = signedSlopX - diffX;
                let diffY2 = offsetSlope * diffX2;
                yield gesture.moveBy(new ui.Offset.new(diffX2, diffY2));
                yield gesture.moveBy(new ui.Offset.new(dart.notNull(offsetX) - signedSlopX, dart.notNull(offsetY) - diffY2 - signedSlopY));
              }
            }
          } else {
            yield gesture.moveBy(new ui.Offset.new(signedSlopX, signedSlopY));
            yield gesture.moveBy(new ui.Offset.new(dart.notNull(offsetX) - signedSlopX, dart.notNull(offsetY) - signedSlopY));
          }
        } else {
          yield gesture.moveBy(offset);
        }
        yield gesture.up();
      }).bind(this)), VoidToFutureOfNull()));
    }
    [_getNextPointer]() {
      let result = this.nextPointer;
      this.nextPointer = dart.notNull(this.nextPointer) + 1;
      return result;
    }
    createGesture(opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : C71 || CT.C71;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return async.async(test_pointer.TestGesture, (function* createGesture() {
        let t7;
        return new test_pointer.TestGesture.new({hitTester: dart.bind(this, 'hitTestOnBinding'), dispatcher: dart.bind(this, 'sendEventToBinding'), kind: kind, pointer: (t7 = pointer, t7 == null ? this[_getNextPointer]() : t7), buttons: buttons});
      }).bind(this));
    }
    startGesture(downLocation, opts) {
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : C71 || CT.C71;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
      return async.async(test_pointer.TestGesture, (function* startGesture() {
        let result = (yield this.createGesture({pointer: pointer, kind: kind, buttons: buttons}));
        yield result.down(downLocation);
        return result;
      }).bind(this));
    }
    hitTestOnBinding(location) {
      let result = new hit_test.HitTestResult.new();
      this.binding.hitTest(result, location);
      return result;
    }
    sendEventToBinding(event, result) {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        this.binding.dispatchEvent(event, result);
      }).bind(this)), VoidToFutureOfNull()));
    }
    getCenter(finder) {
      return this[_getElementPoint](finder, dart.fn(size => size.center(ui.Offset.zero), SizeToOffset()));
    }
    getTopLeft(finder) {
      return this[_getElementPoint](finder, dart.fn(size => ui.Offset.zero, SizeToOffset()));
    }
    getTopRight(finder) {
      return this[_getElementPoint](finder, dart.fn(size => size.topRight(ui.Offset.zero), SizeToOffset()));
    }
    getBottomLeft(finder) {
      return this[_getElementPoint](finder, dart.fn(size => size.bottomLeft(ui.Offset.zero), SizeToOffset()));
    }
    getBottomRight(finder) {
      return this[_getElementPoint](finder, dart.fn(size => size.bottomRight(ui.Offset.zero), SizeToOffset()));
    }
    [_getElementPoint](finder, sizeToPoint) {
      test_async_utils.TestAsyncUtils.guardSync();
      let element = finder.evaluate()[$single];
      let box = box$.RenderBox._check(element.renderObject);
      if (!(box != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 648, 12, "box != null");
      return box.localToGlobal(sizeToPoint(box.size));
    }
    getSize(finder) {
      test_async_utils.TestAsyncUtils.guardSync();
      let element = finder.evaluate()[$single];
      let box = box$.RenderBox._check(element.renderObject);
      if (!(box != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/controller.dart", 658, 12, "box != null");
      return box.size;
    }
    getRect(finder) {
      return this.getTopLeft(finder)['&'](this.getSize(finder));
    }
  };
  (controller.WidgetController.new = function(binding) {
    this[nextPointer] = 1;
    this[binding$7] = binding;
    ;
  }).prototype = controller.WidgetController.prototype;
  dart.addTypeTests(controller.WidgetController);
  const binding$7 = WidgetController_binding;
  const nextPointer = WidgetController_nextPointer;
  dart.setMethodSignature(controller.WidgetController, () => ({
    __proto__: dart.getMethods(controller.WidgetController.__proto__),
    any: dart.fnType(core.bool, [finders.Finder]),
    widget: dart.gFnType(T => [T, [finders.Finder]], T => [framework.Widget]),
    firstWidget: dart.gFnType(T => [T, [finders.Finder]], T => [framework.Widget]),
    widgetList: dart.gFnType(T => [core.Iterable$(T), [finders.Finder]], T => [framework.Widget]),
    element: dart.gFnType(T => [T, [finders.Finder]], T => [framework.Element]),
    firstElement: dart.gFnType(T => [T, [finders.Finder]], T => [framework.Element]),
    elementList: dart.gFnType(T => [core.Iterable$(T), [finders.Finder]], T => [framework.Element]),
    state: dart.gFnType(T => [T, [finders.Finder]], T => [framework.State$(framework.StatefulWidget)]),
    firstState: dart.gFnType(T => [T, [finders.Finder]], T => [framework.State$(framework.StatefulWidget)]),
    stateList: dart.gFnType(T => [core.Iterable$(T), [finders.Finder]], T => [framework.State$(framework.StatefulWidget)]),
    [_stateOf]: dart.gFnType(T => [T, [framework.Element, finders.Finder]], T => [framework.State$(framework.StatefulWidget)]),
    renderObject: dart.gFnType(T => [T, [finders.Finder]], T => [object.RenderObject]),
    firstRenderObject: dart.gFnType(T => [T, [finders.Finder]], T => [object.RenderObject]),
    renderObjectList: dart.gFnType(T => [core.Iterable$(T), [finders.Finder]], T => [object.RenderObject]),
    [_walkLayers]: dart.fnType(core.Iterable$(layer$.Layer), [layer$.Layer]),
    tap: dart.fnType(async.Future$(dart.void), [finders.Finder], {buttons: core.int, pointer: core.int}),
    tapAt: dart.fnType(async.Future$(dart.void), [ui.Offset], {buttons: core.int, pointer: core.int}),
    press: dart.fnType(async.Future$(test_pointer.TestGesture), [finders.Finder], {buttons: core.int, pointer: core.int}),
    longPress: dart.fnType(async.Future$(dart.void), [finders.Finder], {buttons: core.int, pointer: core.int}),
    longPressAt: dart.fnType(async.Future$(dart.void), [ui.Offset], {buttons: core.int, pointer: core.int}),
    fling: dart.fnType(async.Future$(dart.void), [finders.Finder, ui.Offset, core.double], {buttons: core.int, frameInterval: core.Duration, initialOffset: ui.Offset, initialOffsetDelay: core.Duration, pointer: core.int}),
    flingFrom: dart.fnType(async.Future$(dart.void), [ui.Offset, ui.Offset, core.double], {buttons: core.int, frameInterval: core.Duration, initialOffset: ui.Offset, initialOffsetDelay: core.Duration, pointer: core.int}),
    drag: dart.fnType(async.Future$(dart.void), [finders.Finder, ui.Offset], {buttons: core.int, pointer: core.int, touchSlopX: core.double, touchSlopY: core.double}),
    dragFrom: dart.fnType(async.Future$(dart.void), [ui.Offset, ui.Offset], {buttons: core.int, pointer: core.int, touchSlopX: core.double, touchSlopY: core.double}),
    [_getNextPointer]: dart.fnType(core.int, []),
    createGesture: dart.fnType(async.Future$(test_pointer.TestGesture), [], {buttons: core.int, kind: ui.PointerDeviceKind, pointer: core.int}),
    startGesture: dart.fnType(async.Future$(test_pointer.TestGesture), [ui.Offset], {buttons: core.int, kind: ui.PointerDeviceKind, pointer: core.int}),
    hitTestOnBinding: dart.fnType(hit_test.HitTestResult, [ui.Offset]),
    sendEventToBinding: dart.fnType(async.Future$(dart.void), [events.PointerEvent, hit_test.HitTestResult]),
    getCenter: dart.fnType(ui.Offset, [finders.Finder]),
    getTopLeft: dart.fnType(ui.Offset, [finders.Finder]),
    getTopRight: dart.fnType(ui.Offset, [finders.Finder]),
    getBottomLeft: dart.fnType(ui.Offset, [finders.Finder]),
    getBottomRight: dart.fnType(ui.Offset, [finders.Finder]),
    [_getElementPoint]: dart.fnType(ui.Offset, [finders.Finder, dart.fnType(ui.Offset, [ui.Size])]),
    getSize: dart.fnType(ui.Size, [finders.Finder]),
    getRect: dart.fnType(ui.Rect, [finders.Finder])
  }));
  dart.setGetterSignature(controller.WidgetController, () => ({
    __proto__: dart.getGetters(controller.WidgetController.__proto__),
    allWidgets: core.Iterable$(framework.Widget),
    allElements: core.Iterable$(framework.Element),
    allStates: core.Iterable$(framework.State$(framework.StatefulWidget)),
    allRenderObjects: core.Iterable$(object.RenderObject),
    layers: core.List$(layer$.Layer)
  }));
  dart.setLibraryUri(controller.WidgetController, "package:flutter_test/src/controller.dart");
  dart.setFieldSignature(controller.WidgetController, () => ({
    __proto__: dart.getFields(controller.WidgetController.__proto__),
    binding: dart.finalFieldType(binding$2.WidgetsBinding),
    nextPointer: dart.fieldType(core.int)
  }));
  controller.LiveWidgetController = class LiveWidgetController extends controller.WidgetController {
    pump(duration) {
      return async.async(dart.void, (function* pump() {
        if (duration != null) yield FutureOfvoid().delayed(duration);
        this.binding.scheduleFrame();
        yield this.binding.endOfFrame;
      }).bind(this));
    }
  };
  (controller.LiveWidgetController.new = function(binding) {
    controller.LiveWidgetController.__proto__.new.call(this, binding);
    ;
  }).prototype = controller.LiveWidgetController.prototype;
  dart.addTypeTests(controller.LiveWidgetController);
  dart.setMethodSignature(controller.LiveWidgetController, () => ({
    __proto__: dart.getMethods(controller.LiveWidgetController.__proto__),
    pump: dart.fnType(async.Future$(dart.void), [core.Duration])
  }));
  dart.setLibraryUri(controller.LiveWidgetController, "package:flutter_test/src/controller.dart");
  dart.defineLazy(controller, {
    /*controller.kDragSlopDefault*/get kDragSlopDefault() {
      return 20;
    }
  });
  const _current = dart.privateName(all_elements, "_current");
  const _stack = dart.privateName(all_elements, "_stack");
  all_elements._DepthFirstChildIterator = class _DepthFirstChildIterator extends core.Object {
    get current() {
      return this[_current];
    }
    moveNext() {
      if (dart.test(this[_stack][$isEmpty])) return false;
      this[_current] = this[_stack][$removeLast]();
      this[_stack][$addAll](all_elements._DepthFirstChildIterator._reverseChildrenOf(this[_current], this.skipOffstage));
      return true;
    }
    static _reverseChildrenOf(element, skipOffstage) {
      if (!(element != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/all_elements.dart", 52, 12, "element != null");
      let children = JSArrayOfElement().of([]);
      if (dart.test(skipOffstage)) {
        element.debugVisitOnstageChildren(dart.bind(children, $add));
      } else {
        element.visitChildren(dart.bind(children, $add));
      }
      return children[$reversed];
    }
  };
  (all_elements._DepthFirstChildIterator.new = function(rootElement, skipOffstage) {
    this[_current] = null;
    this.skipOffstage = skipOffstage;
    this[_stack] = all_elements._DepthFirstChildIterator._reverseChildrenOf(rootElement, skipOffstage)[$toList]();
    ;
  }).prototype = all_elements._DepthFirstChildIterator.prototype;
  dart.addTypeTests(all_elements._DepthFirstChildIterator);
  all_elements._DepthFirstChildIterator[dart.implements] = () => [core.Iterator$(framework.Element)];
  dart.setMethodSignature(all_elements._DepthFirstChildIterator, () => ({
    __proto__: dart.getMethods(all_elements._DepthFirstChildIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(all_elements._DepthFirstChildIterator, () => ({
    __proto__: dart.getGetters(all_elements._DepthFirstChildIterator.__proto__),
    current: framework.Element
  }));
  dart.setLibraryUri(all_elements._DepthFirstChildIterator, "package:flutter_test/src/all_elements.dart");
  dart.setFieldSignature(all_elements._DepthFirstChildIterator, () => ({
    __proto__: dart.getFields(all_elements._DepthFirstChildIterator.__proto__),
    skipOffstage: dart.finalFieldType(core.bool),
    [_current]: dart.fieldType(framework.Element),
    [_stack]: dart.finalFieldType(core.List$(framework.Element))
  }));
  all_elements.collectAllElementsFrom = function collectAllElementsFrom(rootElement, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : null;
    return new (CachingIterableOfElement()).new(new all_elements._DepthFirstChildIterator.new(rootElement, skipOffstage));
  };
  finders.CommonFinders = class CommonFinders extends core.Object {
    text(text, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._TextFinder.new(text, {skipOffstage: skipOffstage});
    }
    widgetWithText(widgetType, text, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return finders.find.ancestor({of: finders.find.text(text, {skipOffstage: skipOffstage}), matching: finders.find.byType(widgetType, {skipOffstage: skipOffstage})});
    }
    byKey(key, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._KeyFinder.new(key, {skipOffstage: skipOffstage});
    }
    byType(type, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._WidgetTypeFinder.new(type, {skipOffstage: skipOffstage});
    }
    byIcon(icon, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._WidgetIconFinder.new(icon, {skipOffstage: skipOffstage});
    }
    widgetWithIcon(widgetType, icon, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return finders.find.ancestor({of: finders.find.byIcon(icon), matching: finders.find.byType(widgetType)});
    }
    byElementType(type, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._ElementTypeFinder.new(type, {skipOffstage: skipOffstage});
    }
    byWidget(widget, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._WidgetFinder.new(widget, {skipOffstage: skipOffstage});
    }
    byWidgetPredicate(predicate, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._WidgetPredicateFinder.new(predicate, {description: description, skipOffstage: skipOffstage});
    }
    byTooltip(message, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return this.byWidgetPredicate(dart.fn(widget => tooltip.Tooltip.is(widget) && widget.message == message, WidgetTobool()), {skipOffstage: skipOffstage});
    }
    byElementPredicate(predicate, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._ElementPredicateFinder.new(predicate, {description: description, skipOffstage: skipOffstage});
    }
    descendant(opts) {
      let of = opts && 'of' in opts ? opts.of : null;
      let matching = opts && 'matching' in opts ? opts.matching : null;
      let matchRoot = opts && 'matchRoot' in opts ? opts.matchRoot : false;
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      return new finders._DescendantFinder.new(of, matching, {matchRoot: matchRoot, skipOffstage: skipOffstage});
    }
    ancestor(opts) {
      let of = opts && 'of' in opts ? opts.of : null;
      let matching = opts && 'matching' in opts ? opts.matching : null;
      let matchRoot = opts && 'matchRoot' in opts ? opts.matchRoot : false;
      return new finders._AncestorFinder.new(of, matching, {matchRoot: matchRoot});
    }
    bySemanticsLabel(label, opts) {
      let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
      if (binding$2.WidgetsBinding.instance.pipelineOwner.semanticsOwner == null) dart.throw(new core.StateError.new("Semantics are not enabled. " + "Make sure to call tester.enableSemantics() before using " + "this finder, and call dispose on its return value after."));
      return this.byElementPredicate(dart.fn(element => {
        let t7, t7$;
        if (!framework.RenderObjectElement.is(element)) {
          return false;
        }
        let semanticsLabel = (t7$ = (t7 = element.renderObject, t7 == null ? null : t7.debugSemantics), t7$ == null ? null : t7$.label);
        if (semanticsLabel == null) {
          return false;
        }
        return core.RegExp.is(label) ? label.hasMatch(semanticsLabel) : dart.equals(label, semanticsLabel);
      }, ElementTobool()), {skipOffstage: skipOffstage});
    }
  };
  (finders.CommonFinders.__ = function() {
    ;
  }).prototype = finders.CommonFinders.prototype;
  dart.addTypeTests(finders.CommonFinders);
  dart.setMethodSignature(finders.CommonFinders, () => ({
    __proto__: dart.getMethods(finders.CommonFinders.__proto__),
    text: dart.fnType(finders.Finder, [core.String], {skipOffstage: core.bool}),
    widgetWithText: dart.fnType(finders.Finder, [core.Type, core.String], {skipOffstage: core.bool}),
    byKey: dart.fnType(finders.Finder, [key$.Key], {skipOffstage: core.bool}),
    byType: dart.fnType(finders.Finder, [core.Type], {skipOffstage: core.bool}),
    byIcon: dart.fnType(finders.Finder, [icon_data.IconData], {skipOffstage: core.bool}),
    widgetWithIcon: dart.fnType(finders.Finder, [core.Type, icon_data.IconData], {skipOffstage: core.bool}),
    byElementType: dart.fnType(finders.Finder, [core.Type], {skipOffstage: core.bool}),
    byWidget: dart.fnType(finders.Finder, [framework.Widget], {skipOffstage: core.bool}),
    byWidgetPredicate: dart.fnType(finders.Finder, [dart.fnType(core.bool, [framework.Widget])], {description: core.String, skipOffstage: core.bool}),
    byTooltip: dart.fnType(finders.Finder, [core.String], {skipOffstage: core.bool}),
    byElementPredicate: dart.fnType(finders.Finder, [dart.fnType(core.bool, [framework.Element])], {description: core.String, skipOffstage: core.bool}),
    descendant: dart.fnType(finders.Finder, [], {matchRoot: core.bool, matching: finders.Finder, of: finders.Finder, skipOffstage: core.bool}),
    ancestor: dart.fnType(finders.Finder, [], {matchRoot: core.bool, matching: finders.Finder, of: finders.Finder}),
    bySemanticsLabel: dart.fnType(finders.Finder, [core.Pattern], {skipOffstage: core.bool})
  }));
  dart.setLibraryUri(finders.CommonFinders, "package:flutter_test/src/finders.dart");
  const _cachedResult = dart.privateName(finders, "_cachedResult");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C83;
  const Finder_skipOffstage = dart.privateName(finders, "Finder.skipOffstage");
  finders.Finder = class Finder extends core.Object {
    get skipOffstage() {
      return this[skipOffstage$];
    }
    set skipOffstage(value) {
      super.skipOffstage = value;
    }
    get allCandidates() {
      return all_elements.collectAllElementsFrom(binding$2.WidgetsBinding.instance.renderViewElement, {skipOffstage: this.skipOffstage});
    }
    evaluate() {
      let t7;
      let result = (t7 = this[_cachedResult], t7 == null ? this.apply(this.allCandidates) : t7);
      this[_cachedResult] = null;
      return result;
    }
    precache() {
      if (!(this[_cachedResult] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/finders.dart", 388, 12, "_cachedResult == null");
      let result = this.apply(this.allCandidates);
      if (dart.test(result[$isNotEmpty])) {
        this[_cachedResult] = result;
        return true;
      }
      this[_cachedResult] = null;
      return false;
    }
    get first() {
      return new finders._FirstFinder.new(this);
    }
    get last() {
      return new finders._LastFinder.new(this);
    }
    at(index) {
      return new finders._IndexFinder.new(this, index);
    }
    hitTestable(opts) {
      let at = opts && 'at' in opts ? opts.at : C83 || CT.C83;
      return new finders._HitTestableFinder.new(this, at);
    }
    toString() {
      let additional = dart.test(this.skipOffstage) ? " (ignoring offstage widgets)" : "";
      let widgets = this.evaluate()[$toList]();
      let count = widgets[$length];
      if (count === 0) return "zero widgets with " + dart.str(this.description) + additional;
      if (count === 1) return "exactly one widget with " + dart.str(this.description) + additional + ": " + dart.str(widgets[$single]);
      if (dart.notNull(count) < 4) return dart.str(count) + " widgets with " + dart.str(this.description) + additional + ": " + dart.str(widgets);
      return dart.str(count) + " widgets with " + dart.str(this.description) + additional + ": " + dart.str(widgets[$_get](0)) + ", " + dart.str(widgets[$_get](1)) + ", " + dart.str(widgets[$_get](2)) + ", ...";
    }
  };
  (finders.Finder.new = function(opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this[_cachedResult] = null;
    this[skipOffstage$] = skipOffstage;
    ;
  }).prototype = finders.Finder.prototype;
  dart.addTypeTests(finders.Finder);
  const skipOffstage$ = Finder_skipOffstage;
  dart.setMethodSignature(finders.Finder, () => ({
    __proto__: dart.getMethods(finders.Finder.__proto__),
    evaluate: dart.fnType(core.Iterable$(framework.Element), []),
    precache: dart.fnType(core.bool, []),
    at: dart.fnType(finders.Finder, [core.int]),
    hitTestable: dart.fnType(finders.Finder, [], {at: alignment.Alignment})
  }));
  dart.setGetterSignature(finders.Finder, () => ({
    __proto__: dart.getGetters(finders.Finder.__proto__),
    allCandidates: core.Iterable$(framework.Element),
    first: finders.Finder,
    last: finders.Finder
  }));
  dart.setLibraryUri(finders.Finder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders.Finder, () => ({
    __proto__: dart.getFields(finders.Finder.__proto__),
    skipOffstage: dart.finalFieldType(core.bool),
    [_cachedResult]: dart.fieldType(core.Iterable$(framework.Element))
  }));
  dart.defineExtensionMethods(finders.Finder, ['toString']);
  const ChainedFinder_parent = dart.privateName(finders, "ChainedFinder.parent");
  finders.ChainedFinder = class ChainedFinder extends finders.Finder {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    apply(candidates) {
      return this.filter(this.parent.apply(candidates));
    }
    get allCandidates() {
      return this.parent.allCandidates;
    }
  };
  (finders.ChainedFinder.new = function(parent) {
    this[parent$] = parent;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/finders.dart", 435, 39, "parent != null");
    finders.ChainedFinder.__proto__.new.call(this);
    ;
  }).prototype = finders.ChainedFinder.prototype;
  dart.addTypeTests(finders.ChainedFinder);
  const parent$ = ChainedFinder_parent;
  dart.setMethodSignature(finders.ChainedFinder, () => ({
    __proto__: dart.getMethods(finders.ChainedFinder.__proto__),
    apply: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setLibraryUri(finders.ChainedFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders.ChainedFinder, () => ({
    __proto__: dart.getFields(finders.ChainedFinder.__proto__),
    parent: dart.finalFieldType(finders.Finder)
  }));
  finders._FirstFinder = class _FirstFinder extends finders.ChainedFinder {
    get description() {
      return dart.str(this.parent.description) + " (ignoring all but first)";
    }
    filter(parentCandidates) {
      return new (SyncIterableOfElement()).new(function* filter() {
        yield parentCandidates[$first];
      });
    }
  };
  (finders._FirstFinder.new = function(parent) {
    finders._FirstFinder.__proto__.new.call(this, parent);
    ;
  }).prototype = finders._FirstFinder.prototype;
  dart.addTypeTests(finders._FirstFinder);
  dart.setMethodSignature(finders._FirstFinder, () => ({
    __proto__: dart.getMethods(finders._FirstFinder.__proto__),
    filter: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setGetterSignature(finders._FirstFinder, () => ({
    __proto__: dart.getGetters(finders._FirstFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._FirstFinder, "package:flutter_test/src/finders.dart");
  finders._LastFinder = class _LastFinder extends finders.ChainedFinder {
    get description() {
      return dart.str(this.parent.description) + " (ignoring all but last)";
    }
    filter(parentCandidates) {
      return new (SyncIterableOfElement()).new(function* filter() {
        yield parentCandidates[$last];
      });
    }
  };
  (finders._LastFinder.new = function(parent) {
    finders._LastFinder.__proto__.new.call(this, parent);
    ;
  }).prototype = finders._LastFinder.prototype;
  dart.addTypeTests(finders._LastFinder);
  dart.setMethodSignature(finders._LastFinder, () => ({
    __proto__: dart.getMethods(finders._LastFinder.__proto__),
    filter: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setGetterSignature(finders._LastFinder, () => ({
    __proto__: dart.getGetters(finders._LastFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._LastFinder, "package:flutter_test/src/finders.dart");
  finders._IndexFinder = class _IndexFinder extends finders.ChainedFinder {
    get description() {
      return dart.str(this.parent.description) + " (ignoring all but index " + dart.str(this.index) + ")";
    }
    filter(parentCandidates) {
      return new (SyncIterableOfElement()).new((function* filter() {
        yield parentCandidates[$elementAt](this.index);
      }).bind(this));
    }
  };
  (finders._IndexFinder.new = function(parent, index) {
    this.index = index;
    finders._IndexFinder.__proto__.new.call(this, parent);
    ;
  }).prototype = finders._IndexFinder.prototype;
  dart.addTypeTests(finders._IndexFinder);
  dart.setMethodSignature(finders._IndexFinder, () => ({
    __proto__: dart.getMethods(finders._IndexFinder.__proto__),
    filter: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setGetterSignature(finders._IndexFinder, () => ({
    __proto__: dart.getGetters(finders._IndexFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._IndexFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._IndexFinder, () => ({
    __proto__: dart.getFields(finders._IndexFinder.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  finders._HitTestableFinder = class _HitTestableFinder extends finders.ChainedFinder {
    get description() {
      return dart.str(this.parent.description) + " (considering only hit-testable ones)";
    }
    filter(parentCandidates) {
      return new (SyncIterableOfElement()).new((function* filter() {
        for (let candidate of parentCandidates) {
          let box = box$.RenderBox._check(candidate.renderObject);
          if (!(box != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/finders.dart", 505, 14, "box != null");
          let absoluteOffset = box.localToGlobal(this.alignment.alongSize(box.size));
          let hitResult = new hit_test.HitTestResult.new();
          binding$2.WidgetsBinding.instance.hitTest(hitResult, absoluteOffset);
          for (let entry of hitResult.path) {
            if (dart.equals(entry.target, candidate.renderObject)) {
              yield candidate;
              break;
            }
          }
        }
      }).bind(this));
    }
  };
  (finders._HitTestableFinder.new = function(parent, alignment) {
    this.alignment = alignment;
    finders._HitTestableFinder.__proto__.new.call(this, parent);
    ;
  }).prototype = finders._HitTestableFinder.prototype;
  dart.addTypeTests(finders._HitTestableFinder);
  dart.setMethodSignature(finders._HitTestableFinder, () => ({
    __proto__: dart.getMethods(finders._HitTestableFinder.__proto__),
    filter: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setGetterSignature(finders._HitTestableFinder, () => ({
    __proto__: dart.getGetters(finders._HitTestableFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._HitTestableFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._HitTestableFinder, () => ({
    __proto__: dart.getFields(finders._HitTestableFinder.__proto__),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  finders.MatchFinder = class MatchFinder extends finders.Finder {
    apply(candidates) {
      return candidates[$where](dart.bind(this, 'matches'));
    }
  };
  (finders.MatchFinder.new = function(opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    finders.MatchFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders.MatchFinder.prototype;
  dart.addTypeTests(finders.MatchFinder);
  dart.setMethodSignature(finders.MatchFinder, () => ({
    __proto__: dart.getMethods(finders.MatchFinder.__proto__),
    apply: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setLibraryUri(finders.MatchFinder, "package:flutter_test/src/finders.dart");
  finders._TextFinder = class _TextFinder extends finders.MatchFinder {
    get description() {
      return "text \"" + dart.str(this.text) + "\"";
    }
    matches(candidate) {
      if (text$.Text.is(candidate.widget)) {
        let textWidget = text$.Text._check(candidate.widget);
        if (textWidget.data != null) return textWidget.data == this.text;
        return textWidget.textSpan.toPlainText() == this.text;
      } else if (editable_text.EditableText.is(candidate.widget)) {
        let editable = editable_text.EditableText._check(candidate.widget);
        return editable.controller.text == this.text;
      }
      return false;
    }
  };
  (finders._TextFinder.new = function(text, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.text = text;
    finders._TextFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._TextFinder.prototype;
  dart.addTypeTests(finders._TextFinder);
  dart.setMethodSignature(finders._TextFinder, () => ({
    __proto__: dart.getMethods(finders._TextFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._TextFinder, () => ({
    __proto__: dart.getGetters(finders._TextFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._TextFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._TextFinder, () => ({
    __proto__: dart.getFields(finders._TextFinder.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  finders._KeyFinder = class _KeyFinder extends finders.MatchFinder {
    get description() {
      return "key " + dart.str(this.key);
    }
    matches(candidate) {
      return dart.equals(candidate.widget.key, this.key);
    }
  };
  (finders._KeyFinder.new = function(key, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.key = key;
    finders._KeyFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._KeyFinder.prototype;
  dart.addTypeTests(finders._KeyFinder);
  dart.setMethodSignature(finders._KeyFinder, () => ({
    __proto__: dart.getMethods(finders._KeyFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._KeyFinder, () => ({
    __proto__: dart.getGetters(finders._KeyFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._KeyFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._KeyFinder, () => ({
    __proto__: dart.getFields(finders._KeyFinder.__proto__),
    key: dart.finalFieldType(key$.Key)
  }));
  finders._WidgetTypeFinder = class _WidgetTypeFinder extends finders.MatchFinder {
    get description() {
      return "type \"" + dart.str(this.widgetType) + "\"";
    }
    matches(candidate) {
      return dart.equals(dart.runtimeType(candidate.widget), this.widgetType);
    }
  };
  (finders._WidgetTypeFinder.new = function(widgetType, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.widgetType = widgetType;
    finders._WidgetTypeFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._WidgetTypeFinder.prototype;
  dart.addTypeTests(finders._WidgetTypeFinder);
  dart.setMethodSignature(finders._WidgetTypeFinder, () => ({
    __proto__: dart.getMethods(finders._WidgetTypeFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._WidgetTypeFinder, () => ({
    __proto__: dart.getGetters(finders._WidgetTypeFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._WidgetTypeFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._WidgetTypeFinder, () => ({
    __proto__: dart.getFields(finders._WidgetTypeFinder.__proto__),
    widgetType: dart.finalFieldType(core.Type)
  }));
  finders._WidgetIconFinder = class _WidgetIconFinder extends finders.MatchFinder {
    get description() {
      return "icon \"" + dart.str(this.icon) + "\"";
    }
    matches(candidate) {
      let widget = candidate.widget;
      return icon.Icon.is(widget) && dart.equals(widget.icon, this.icon);
    }
  };
  (finders._WidgetIconFinder.new = function(icon, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.icon = icon;
    finders._WidgetIconFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._WidgetIconFinder.prototype;
  dart.addTypeTests(finders._WidgetIconFinder);
  dart.setMethodSignature(finders._WidgetIconFinder, () => ({
    __proto__: dart.getMethods(finders._WidgetIconFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._WidgetIconFinder, () => ({
    __proto__: dart.getGetters(finders._WidgetIconFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._WidgetIconFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._WidgetIconFinder, () => ({
    __proto__: dart.getFields(finders._WidgetIconFinder.__proto__),
    icon: dart.finalFieldType(icon_data.IconData)
  }));
  finders._ElementTypeFinder = class _ElementTypeFinder extends finders.MatchFinder {
    get description() {
      return "type \"" + dart.str(this.elementType) + "\"";
    }
    matches(candidate) {
      return dart.equals(dart.runtimeType(candidate), this.elementType);
    }
  };
  (finders._ElementTypeFinder.new = function(elementType, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.elementType = elementType;
    finders._ElementTypeFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._ElementTypeFinder.prototype;
  dart.addTypeTests(finders._ElementTypeFinder);
  dart.setMethodSignature(finders._ElementTypeFinder, () => ({
    __proto__: dart.getMethods(finders._ElementTypeFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._ElementTypeFinder, () => ({
    __proto__: dart.getGetters(finders._ElementTypeFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._ElementTypeFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._ElementTypeFinder, () => ({
    __proto__: dart.getFields(finders._ElementTypeFinder.__proto__),
    elementType: dart.finalFieldType(core.Type)
  }));
  finders._WidgetFinder = class _WidgetFinder extends finders.MatchFinder {
    get description() {
      return "the given widget (" + dart.str(this.widget) + ")";
    }
    matches(candidate) {
      return dart.equals(candidate.widget, this.widget);
    }
  };
  (finders._WidgetFinder.new = function(widget, opts) {
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.widget = widget;
    finders._WidgetFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._WidgetFinder.prototype;
  dart.addTypeTests(finders._WidgetFinder);
  dart.setMethodSignature(finders._WidgetFinder, () => ({
    __proto__: dart.getMethods(finders._WidgetFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._WidgetFinder, () => ({
    __proto__: dart.getGetters(finders._WidgetFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._WidgetFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._WidgetFinder, () => ({
    __proto__: dart.getFields(finders._WidgetFinder.__proto__),
    widget: dart.finalFieldType(framework.Widget)
  }));
  const _description$ = dart.privateName(finders, "_description");
  finders._WidgetPredicateFinder = class _WidgetPredicateFinder extends finders.MatchFinder {
    get description() {
      let t7;
      t7 = this[_description$];
      return t7 == null ? "widget matching predicate (" + dart.str(this.predicate) + ")" : t7;
    }
    matches(candidate) {
      return this.predicate(candidate.widget);
    }
  };
  (finders._WidgetPredicateFinder.new = function(predicate, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.predicate = predicate;
    this[_description$] = description;
    finders._WidgetPredicateFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._WidgetPredicateFinder.prototype;
  dart.addTypeTests(finders._WidgetPredicateFinder);
  dart.setMethodSignature(finders._WidgetPredicateFinder, () => ({
    __proto__: dart.getMethods(finders._WidgetPredicateFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._WidgetPredicateFinder, () => ({
    __proto__: dart.getGetters(finders._WidgetPredicateFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._WidgetPredicateFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._WidgetPredicateFinder, () => ({
    __proto__: dart.getFields(finders._WidgetPredicateFinder.__proto__),
    predicate: dart.finalFieldType(dart.fnType(core.bool, [framework.Widget])),
    [_description$]: dart.finalFieldType(core.String)
  }));
  finders._ElementPredicateFinder = class _ElementPredicateFinder extends finders.MatchFinder {
    get description() {
      let t7;
      t7 = this[_description$];
      return t7 == null ? "element matching predicate (" + dart.str(this.predicate) + ")" : t7;
    }
    matches(candidate) {
      return this.predicate(candidate);
    }
  };
  (finders._ElementPredicateFinder.new = function(predicate, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.predicate = predicate;
    this[_description$] = description;
    finders._ElementPredicateFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._ElementPredicateFinder.prototype;
  dart.addTypeTests(finders._ElementPredicateFinder);
  dart.setMethodSignature(finders._ElementPredicateFinder, () => ({
    __proto__: dart.getMethods(finders._ElementPredicateFinder.__proto__),
    matches: dart.fnType(core.bool, [framework.Element])
  }));
  dart.setGetterSignature(finders._ElementPredicateFinder, () => ({
    __proto__: dart.getGetters(finders._ElementPredicateFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._ElementPredicateFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._ElementPredicateFinder, () => ({
    __proto__: dart.getFields(finders._ElementPredicateFinder.__proto__),
    predicate: dart.finalFieldType(dart.fnType(core.bool, [framework.Element])),
    [_description$]: dart.finalFieldType(core.String)
  }));
  finders._DescendantFinder = class _DescendantFinder extends finders.Finder {
    get description() {
      if (dart.test(this.matchRoot)) return dart.str(this.descendant.description) + " in the subtree(s) beginning with " + dart.str(this.ancestor.description);
      return dart.str(this.descendant.description) + " that has ancestor(s) with " + dart.str(this.ancestor.description);
    }
    apply(candidates) {
      return candidates[$where](dart.fn(element => this.descendant.evaluate()[$contains](element), ElementTobool()));
    }
    get allCandidates() {
      let ancestorElements = this.ancestor.evaluate();
      let candidates = ancestorElements[$expand](framework.Element, dart.fn(element => all_elements.collectAllElementsFrom(element, {skipOffstage: this.skipOffstage}), ElementToIterableOfElement()))[$toSet]()[$toList]();
      if (dart.test(this.matchRoot)) candidates[$insertAll](0, ancestorElements);
      return candidates;
    }
  };
  (finders._DescendantFinder.new = function(ancestor, descendant, opts) {
    let matchRoot = opts && 'matchRoot' in opts ? opts.matchRoot : false;
    let skipOffstage = opts && 'skipOffstage' in opts ? opts.skipOffstage : true;
    this.ancestor = ancestor;
    this.descendant = descendant;
    this.matchRoot = matchRoot;
    finders._DescendantFinder.__proto__.new.call(this, {skipOffstage: skipOffstage});
    ;
  }).prototype = finders._DescendantFinder.prototype;
  dart.addTypeTests(finders._DescendantFinder);
  dart.setMethodSignature(finders._DescendantFinder, () => ({
    __proto__: dart.getMethods(finders._DescendantFinder.__proto__),
    apply: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setGetterSignature(finders._DescendantFinder, () => ({
    __proto__: dart.getGetters(finders._DescendantFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._DescendantFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._DescendantFinder, () => ({
    __proto__: dart.getFields(finders._DescendantFinder.__proto__),
    ancestor: dart.finalFieldType(finders.Finder),
    descendant: dart.finalFieldType(finders.Finder),
    matchRoot: dart.finalFieldType(core.bool)
  }));
  finders._AncestorFinder = class _AncestorFinder extends finders.Finder {
    get description() {
      if (dart.test(this.matchRoot)) return "ancestor " + dart.str(this.ancestor.description) + " beginning with " + dart.str(this.descendant.description);
      return dart.str(this.ancestor.description) + " which is an ancestor of " + dart.str(this.descendant.description);
    }
    apply(candidates) {
      return candidates[$where](dart.fn(element => this.ancestor.evaluate()[$contains](element), ElementTobool()));
    }
    get allCandidates() {
      let candidates = JSArrayOfElement().of([]);
      for (let root of this.descendant.evaluate()) {
        let ancestors = JSArrayOfElement().of([]);
        if (dart.test(this.matchRoot)) ancestors[$add](root);
        root.visitAncestorElements(dart.fn(element => {
          ancestors[$add](element);
          return true;
        }, ElementTobool()));
        candidates[$addAll](ancestors);
      }
      return candidates;
    }
  };
  (finders._AncestorFinder.new = function(descendant, ancestor, opts) {
    let matchRoot = opts && 'matchRoot' in opts ? opts.matchRoot : false;
    this.descendant = descendant;
    this.ancestor = ancestor;
    this.matchRoot = matchRoot;
    finders._AncestorFinder.__proto__.new.call(this, {skipOffstage: false});
    ;
  }).prototype = finders._AncestorFinder.prototype;
  dart.addTypeTests(finders._AncestorFinder);
  dart.setMethodSignature(finders._AncestorFinder, () => ({
    __proto__: dart.getMethods(finders._AncestorFinder.__proto__),
    apply: dart.fnType(core.Iterable$(framework.Element), [core.Iterable$(framework.Element)])
  }));
  dart.setGetterSignature(finders._AncestorFinder, () => ({
    __proto__: dart.getGetters(finders._AncestorFinder.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(finders._AncestorFinder, "package:flutter_test/src/finders.dart");
  dart.setFieldSignature(finders._AncestorFinder, () => ({
    __proto__: dart.getFields(finders._AncestorFinder.__proto__),
    ancestor: dart.finalFieldType(finders.Finder),
    descendant: dart.finalFieldType(finders.Finder),
    matchRoot: dart.finalFieldType(core.bool)
  }));
  let C84;
  dart.defineLazy(finders, {
    /*finders.find*/get find() {
      return C84 || CT.C84;
    }
  });
  goldens.GoldenFileComparator = class GoldenFileComparator extends core.Object {
    getTestUri(key, version) {
      if (version == null) return key;
      let keyString = dart.toString(key);
      let extension = path.extension(keyString);
      return core.Uri.parse(dart.notNull(keyString[$split](extension)[$join]()) + "." + dart.toString(version) + dart.notNull(extension));
    }
    static compareLists(test, master) {
      return _goldens_web.compareLists(test, master);
    }
  };
  (goldens.GoldenFileComparator.new = function() {
    ;
  }).prototype = goldens.GoldenFileComparator.prototype;
  dart.addTypeTests(goldens.GoldenFileComparator);
  dart.setMethodSignature(goldens.GoldenFileComparator, () => ({
    __proto__: dart.getMethods(goldens.GoldenFileComparator.__proto__),
    getTestUri: dart.fnType(core.Uri, [core.Uri, core.int])
  }));
  dart.setLibraryUri(goldens.GoldenFileComparator, "package:flutter_test/src/goldens.dart");
  _goldens_web.LocalFileComparator = class LocalFileComparator extends goldens.GoldenFileComparator {
    compare(imageBytes, golden) {
      dart.throw(new core.UnsupportedError.new("LocalFileComparator is not supported on the web."));
    }
    update(golden, imageBytes) {
      dart.throw(new core.UnsupportedError.new("LocalFileComparator is not supported on the web."));
    }
  };
  (_goldens_web.LocalFileComparator.new = function() {
    ;
  }).prototype = _goldens_web.LocalFileComparator.prototype;
  dart.addTypeTests(_goldens_web.LocalFileComparator);
  dart.setMethodSignature(_goldens_web.LocalFileComparator, () => ({
    __proto__: dart.getMethods(_goldens_web.LocalFileComparator.__proto__),
    compare: dart.fnType(async.Future$(core.bool), [typed_data.Uint8List, core.Uri]),
    update: dart.fnType(async.Future$(dart.void), [core.Uri, typed_data.Uint8List])
  }));
  dart.setLibraryUri(_goldens_web.LocalFileComparator, "package:flutter_test/src/_goldens_web.dart");
  _goldens_web.compareLists = function compareLists(test, master) {
    dart.throw(new core.UnsupportedError.new("Golden testing is not supported on the web."));
  };
  nonconst.nonconst = function nonconst$(T, t) {
    return t;
  };
  const Evaluation_passed = dart.privateName(accessibility, "Evaluation.passed");
  const Evaluation_reason = dart.privateName(accessibility, "Evaluation.reason");
  accessibility.Evaluation = class Evaluation extends core.Object {
    get passed() {
      return this[passed$];
    }
    set passed(value) {
      super.passed = value;
    }
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
    ['+'](other) {
      if (other == null) return this;
      let buffer = new core.StringBuffer.new();
      if (this.reason != null) {
        buffer.write(this.reason);
        buffer.write(" ");
      }
      if (other.reason != null) buffer.write(other.reason);
      return new accessibility.Evaluation.__(dart.test(this.passed) && dart.test(other.passed), dart.test(buffer.isEmpty) ? null : buffer.toString());
    }
  };
  (accessibility.Evaluation.pass = function() {
    this[passed$] = true;
    this[reason$] = null;
    ;
  }).prototype = accessibility.Evaluation.prototype;
  (accessibility.Evaluation.fail = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$] = reason;
    this[passed$] = false;
    ;
  }).prototype = accessibility.Evaluation.prototype;
  (accessibility.Evaluation.__ = function(passed, reason) {
    this[passed$] = passed;
    this[reason$] = reason;
    ;
  }).prototype = accessibility.Evaluation.prototype;
  dart.addTypeTests(accessibility.Evaluation);
  const passed$ = Evaluation_passed;
  const reason$ = Evaluation_reason;
  dart.setMethodSignature(accessibility.Evaluation, () => ({
    __proto__: dart.getMethods(accessibility.Evaluation.__proto__),
    '+': dart.fnType(accessibility.Evaluation, [accessibility.Evaluation])
  }));
  dart.setLibraryUri(accessibility.Evaluation, "package:flutter_test/src/accessibility.dart");
  dart.setFieldSignature(accessibility.Evaluation, () => ({
    __proto__: dart.getFields(accessibility.Evaluation.__proto__),
    passed: dart.finalFieldType(core.bool),
    reason: dart.finalFieldType(core.String)
  }));
  accessibility.AccessibilityGuideline = class AccessibilityGuideline extends core.Object {};
  (accessibility.AccessibilityGuideline.new = function() {
    ;
  }).prototype = accessibility.AccessibilityGuideline.prototype;
  dart.addTypeTests(accessibility.AccessibilityGuideline);
  dart.setLibraryUri(accessibility.AccessibilityGuideline, "package:flutter_test/src/accessibility.dart");
  let C85;
  const MinimumTapTargetGuideline_size = dart.privateName(accessibility, "MinimumTapTargetGuideline.size");
  const MinimumTapTargetGuideline_link = dart.privateName(accessibility, "MinimumTapTargetGuideline.link");
  accessibility.MinimumTapTargetGuideline = class MinimumTapTargetGuideline extends accessibility.AccessibilityGuideline {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
    evaluate(tester) {
      let root = tester.binding.pipelineOwner.semanticsOwner.rootSemanticsNode;
      const traverse = node => {
        let result = C85 || CT.C85;
        node.visitChildren(dart.fn(child => {
          result = result['+'](traverse(child));
          return true;
        }, SemanticsNodeTobool()));
        if (dart.test(node.isMergedIntoParent)) return result;
        let data = node.getSemanticsData();
        if (!dart.test(data.hasAction(ui.SemanticsAction.longPress)) && !dart.test(data.hasAction(ui.SemanticsAction.tap)) || dart.test(data.hasFlag(ui.SemanticsFlag.isHidden))) return result;
        let paintBounds = node.rect;
        let current = node;
        while (current != null) {
          if (current.transform != null) paintBounds = matrix_utils.MatrixUtils.transformRect(current.transform, paintBounds);
          current = current.parent;
        }
        if (dart.notNull(paintBounds.left) <= 0.001 || dart.notNull(paintBounds.top) <= 0.001 || (dart.notNull(paintBounds.bottom) - dart.notNull(tester.binding.window.physicalSize.height))[$abs]() <= 0.001 || (dart.notNull(paintBounds.right) - dart.notNull(tester.binding.window.physicalSize.width))[$abs]() <= 0.001) return result;
        let candidateSize = paintBounds.size['/'](tester.binding.window.devicePixelRatio);
        if (dart.notNull(candidateSize.width) < dart.notNull(this.size.width) - 0.001 || dart.notNull(candidateSize.height) < dart.notNull(this.size.height) - 0.001) {
          result = result['+'](new accessibility.Evaluation.fail(dart.str(node) + ": expected tap target size of at least " + dart.str(this.size) + ", but found " + dart.str(candidateSize) + "\n" + "See also: " + dart.str(this.link)));
        }
        return result;
      };
      dart.fn(traverse, SemanticsNodeToEvaluation());
      return traverse(root);
    }
    get description() {
      return "Tappable objects should be at least " + dart.str(this.size);
    }
  };
  (accessibility.MinimumTapTargetGuideline.__ = function(size, link) {
    this[size$] = size;
    this[link$] = link;
    accessibility.MinimumTapTargetGuideline.__proto__.new.call(this);
    ;
  }).prototype = accessibility.MinimumTapTargetGuideline.prototype;
  dart.addTypeTests(accessibility.MinimumTapTargetGuideline);
  const size$ = MinimumTapTargetGuideline_size;
  const link$ = MinimumTapTargetGuideline_link;
  dart.setMethodSignature(accessibility.MinimumTapTargetGuideline, () => ({
    __proto__: dart.getMethods(accessibility.MinimumTapTargetGuideline.__proto__),
    evaluate: dart.fnType(async.FutureOr$(accessibility.Evaluation), [widget_tester.WidgetTester])
  }));
  dart.setGetterSignature(accessibility.MinimumTapTargetGuideline, () => ({
    __proto__: dart.getGetters(accessibility.MinimumTapTargetGuideline.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(accessibility.MinimumTapTargetGuideline, "package:flutter_test/src/accessibility.dart");
  dart.setFieldSignature(accessibility.MinimumTapTargetGuideline, () => ({
    __proto__: dart.getFields(accessibility.MinimumTapTargetGuideline.__proto__),
    size: dart.finalFieldType(ui.Size),
    link: dart.finalFieldType(core.String)
  }));
  accessibility.LabeledTapTargetGuideline = class LabeledTapTargetGuideline extends accessibility.AccessibilityGuideline {
    get description() {
      return "Tappable widgets should have a semantic label";
    }
    evaluate(tester) {
      let root = tester.binding.pipelineOwner.semanticsOwner.rootSemanticsNode;
      function traverse(node) {
        let result = C85 || CT.C85;
        node.visitChildren(dart.fn(child => {
          result = result['+'](traverse(child));
          return true;
        }, SemanticsNodeTobool()));
        if (dart.test(node.isMergedIntoParent) || dart.test(node.isInvisible) || dart.test(node.hasFlag(ui.SemanticsFlag.isHidden))) return result;
        let data = node.getSemanticsData();
        if (!dart.test(data.hasAction(ui.SemanticsAction.longPress)) && !dart.test(data.hasAction(ui.SemanticsAction.tap))) return result;
        if (data.label == null || data.label[$isEmpty]) {
          result = result['+'](new accessibility.Evaluation.fail(dart.str(node) + ": expected tappable node to have semantic label, but none was found\n"));
        }
        return result;
      }
      dart.fn(traverse, SemanticsNodeToEvaluation());
      return traverse(root);
    }
  };
  (accessibility.LabeledTapTargetGuideline.__ = function() {
    accessibility.LabeledTapTargetGuideline.__proto__.new.call(this);
    ;
  }).prototype = accessibility.LabeledTapTargetGuideline.prototype;
  dart.addTypeTests(accessibility.LabeledTapTargetGuideline);
  dart.setMethodSignature(accessibility.LabeledTapTargetGuideline, () => ({
    __proto__: dart.getMethods(accessibility.LabeledTapTargetGuideline.__proto__),
    evaluate: dart.fnType(async.FutureOr$(accessibility.Evaluation), [widget_tester.WidgetTester])
  }));
  dart.setGetterSignature(accessibility.LabeledTapTargetGuideline, () => ({
    __proto__: dart.getGetters(accessibility.LabeledTapTargetGuideline.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(accessibility.LabeledTapTargetGuideline, "package:flutter_test/src/accessibility.dart");
  const _shouldSkipNode = dart.privateName(accessibility, "_shouldSkipNode");
  let C86;
  const _isNodeOffScreen = dart.privateName(accessibility, "_isNodeOffScreen");
  const _subsetToRect = dart.privateName(accessibility, "_subsetToRect");
  accessibility.MinimumTextContrastGuideline = class MinimumTextContrastGuideline extends accessibility.AccessibilityGuideline {
    evaluate(tester) {
      return async.async(accessibility.Evaluation, (function* evaluate() {
        let root = tester.binding.pipelineOwner.semanticsOwner.rootSemanticsNode;
        let renderView = tester.binding.renderView;
        let layer = layer$.OffsetLayer._check(renderView.debugLayer);
        let image = null;
        let byteData = (yield tester.binding.runAsync(typed_data.ByteData, dart.fn(() => async.async(typed_data.ByteData, function*() {
          image = (yield layer.toImage(renderView.paintBounds, {pixelRatio: 1 / dart.notNull(tester.binding.window.devicePixelRatio)}));
          return image.toByteData();
        }), VoidToFutureOfByteData())));
        const evaluateNode = node => {
          return async.async(accessibility.Evaluation, (function* evaluateNode$() {
            let t7, t7$;
            let result = C85 || CT.C85;
            if (dart.test(node.isInvisible) || dart.test(node.isMergedIntoParent) || dart.test(node.hasFlag(ui.SemanticsFlag.isHidden))) return result;
            let data = node.getSemanticsData();
            let children = JSArrayOfSemanticsNode().of([]);
            node.visitChildren(dart.fn(child => {
              children[$add](child);
              return true;
            }, SemanticsNodeTobool()));
            for (let child of children) {
              result = result['+'](yield evaluateNode(child));
            }
            if (dart.test(this[_shouldSkipNode](data))) {
              return result;
            }
            let fontSize = null;
            let isBold = null;
            let text = dart.equals((t7 = data.label, t7 == null ? null : t7[$isEmpty]), true) ? data.value : data.label;
            let elements = finders.find.text(text).hitTestable().evaluate()[$toList]();
            let paintBounds = null;
            if (elements[$length] === 1) {
              let element = elements[$single];
              let renderObject = box$.RenderBox._check(element.renderObject);
              element.renderObject.paintBounds;
              paintBounds = new ui.Rect.fromPoints(renderObject.localToGlobal(element.renderObject.paintBounds.topLeft['-'](C86 || CT.C86)), renderObject.localToGlobal(element.renderObject.paintBounds.bottomRight['+'](C86 || CT.C86)));
              let widget = element.widget;
              let defaultTextStyle = text$.DefaultTextStyle.of(element);
              if (text$.Text.is(widget)) {
                let effectiveTextStyle = widget.style;
                if (widget.style == null || dart.test(widget.style.inherit)) {
                  effectiveTextStyle = defaultTextStyle.style.merge(widget.style);
                }
                fontSize = effectiveTextStyle.fontSize;
                isBold = dart.equals(effectiveTextStyle.fontWeight, ui.FontWeight.bold);
              } else if (editable_text.EditableText.is(widget)) {
                isBold = dart.equals(widget.style.fontWeight, ui.FontWeight.bold);
                fontSize = widget.style.fontSize;
              } else {
                if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/accessibility.dart", 253, 18, "false");
              }
            } else if (dart.notNull(elements[$length]) > 1) {
              return new accessibility.Evaluation.fail("Multiple nodes with the same label: " + dart.str(data.label) + "\n");
            } else {
              return result;
            }
            if (dart.test(this[_isNodeOffScreen](paintBounds, tester.binding.window))) {
              return result;
            }
            let subset = this[_subsetToRect](byteData, paintBounds, image.width, image.height);
            if (dart.test(subset[$isEmpty])) {
              return result;
            }
            let report = accessibility._ContrastReport.new(subset);
            let contrastRatio = report.contrastRatio();
            let targetContrastRatio = null;
            if (dart.test(isBold) && dart.notNull(fontSize) > 14 || dart.notNull((t7$ = fontSize, t7$ == null ? 12.0 : t7$)) > 18) {
              targetContrastRatio = 3;
            } else {
              targetContrastRatio = 4.5;
            }
            if (dart.notNull(contrastRatio) - dart.notNull(targetContrastRatio) >= -0.01) {
              return result['+'](C85 || CT.C85);
            }
            return result['+'](new accessibility.Evaluation.fail(dart.str(node) + ":\nExpected contrast ratio of at least " + dart.str(targetContrastRatio) + " but found " + contrastRatio[$toStringAsFixed](2) + " for a font size of " + dart.str(fontSize) + ". " + "The computed light color was: " + dart.str(report.lightColor) + ", " + "The computed dark color was: " + dart.str(report.darkColor) + "\n" + "See also: https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"));
          }).bind(this));
        };
        dart.fn(evaluateNode, SemanticsNodeToFutureOfEvaluation());
        return evaluateNode(root);
      }).bind(this));
    }
    [_shouldSkipNode](data) {
      let t7, t7$, t7$0, t7$1;
      if (dart.test(data.hasFlag(ui.SemanticsFlag.scopesRoute))) return true;
      if (dart.equals((t7$ = (t7 = data.label, t7 == null ? null : t7[$trim]()), t7$ == null ? null : t7$[$isEmpty]), true) && dart.equals((t7$1 = (t7$0 = data.value, t7$0 == null ? null : t7$0[$trim]()), t7$1 == null ? null : t7$1[$isEmpty]), true)) return true;
      return false;
    }
    [_isNodeOffScreen](paintBounds, window) {
      return dart.notNull(paintBounds.top) < -50.0 || dart.notNull(paintBounds.left) < -50.0 || dart.notNull(paintBounds.bottom) > dart.notNull(window.physicalSize.height) * dart.notNull(window.devicePixelRatio) + 50.0 || dart.notNull(paintBounds.right) > dart.notNull(window.physicalSize.width) * dart.notNull(window.devicePixelRatio) + 50.0;
    }
    [_subsetToRect](data, paintBounds, width, height) {
      let newWidth = paintBounds.size.width[$ceil]();
      let newHeight = paintBounds.size.height[$ceil]();
      let leftX = paintBounds.topLeft.dx[$ceil]();
      let rightX = leftX + newWidth;
      let topY = paintBounds.topLeft.dy[$ceil]();
      let bottomY = topY + newHeight;
      let buffer = JSArrayOfint().of([]);
      for (let i = 0; i < dart.notNull(data[$lengthInBytes]); i = i + 4) {
        let index = (i / 4)[$truncate]();
        let dx = index[$modulo](width);
        let dy = (index / dart.notNull(width))[$truncate]();
        if (dx >= leftX && dx <= rightX && dy >= topY && dy <= bottomY) {
          let r = data[$getUint8](i);
          let g = data[$getUint8](i + 1);
          let b = data[$getUint8](i + 2);
          let a = data[$getUint8](i + 3);
          let color = (((dart.notNull(a) & 255) << 24 | (dart.notNull(r) & 255) << 16 | (dart.notNull(g) & 255) << 8 | (dart.notNull(b) & 255) << 0) & 4294967295) >>> 0;
          buffer[$add](color);
        }
      }
      return buffer;
    }
    get description() {
      return "Text contrast should follow WCAG guidelines";
    }
  };
  (accessibility.MinimumTextContrastGuideline.__ = function() {
    accessibility.MinimumTextContrastGuideline.__proto__.new.call(this);
    ;
  }).prototype = accessibility.MinimumTextContrastGuideline.prototype;
  dart.addTypeTests(accessibility.MinimumTextContrastGuideline);
  dart.setMethodSignature(accessibility.MinimumTextContrastGuideline, () => ({
    __proto__: dart.getMethods(accessibility.MinimumTextContrastGuideline.__proto__),
    evaluate: dart.fnType(async.Future$(accessibility.Evaluation), [widget_tester.WidgetTester]),
    [_shouldSkipNode]: dart.fnType(core.bool, [semantics.SemanticsData]),
    [_isNodeOffScreen]: dart.fnType(core.bool, [ui.Rect, ui.Window]),
    [_subsetToRect]: dart.fnType(core.List$(core.int), [typed_data.ByteData, ui.Rect, core.int, core.int])
  }));
  dart.setGetterSignature(accessibility.MinimumTextContrastGuideline, () => ({
    __proto__: dart.getGetters(accessibility.MinimumTextContrastGuideline.__proto__),
    description: core.String
  }));
  dart.setLibraryUri(accessibility.MinimumTextContrastGuideline, "package:flutter_test/src/accessibility.dart");
  dart.defineLazy(accessibility.MinimumTextContrastGuideline, {
    /*accessibility.MinimumTextContrastGuideline.kLargeTextMinimumSize*/get kLargeTextMinimumSize() {
      return 18;
    },
    /*accessibility.MinimumTextContrastGuideline.kBoldTextMinimumSize*/get kBoldTextMinimumSize() {
      return 14;
    },
    /*accessibility.MinimumTextContrastGuideline.kMinimumRatioNormalText*/get kMinimumRatioNormalText() {
      return 4.5;
    },
    /*accessibility.MinimumTextContrastGuideline.kMinimumRatioLargeText*/get kMinimumRatioLargeText() {
      return 3;
    }
  });
  const _ContrastReport_lightColor = dart.privateName(accessibility, "_ContrastReport.lightColor");
  const _ContrastReport_darkColor = dart.privateName(accessibility, "_ContrastReport.darkColor");
  accessibility._ContrastReport = class _ContrastReport extends core.Object {
    get lightColor() {
      return this[lightColor$];
    }
    set lightColor(value) {
      super.lightColor = value;
    }
    get darkColor() {
      return this[darkColor$];
    }
    set darkColor(value) {
      super.darkColor = value;
    }
    static new(colors) {
      let t7;
      let colorHistogram = new (IdentityMapOfint$int()).new();
      for (let color of colors) {
        colorHistogram[$_set](color, dart.notNull((t7 = colorHistogram[$_get](color), t7 == null ? 0 : t7)) + 1);
      }
      if (colorHistogram[$length] === 1) {
        let hslColor = new ui.Color.new(colorHistogram[$keys][$first]);
        return new accessibility._ContrastReport.__(hslColor, hslColor);
      }
      let averageLightness = 0.0;
      for (let color of colorHistogram[$keys]) {
        let hslColor = colors$.HSLColor.fromColor(new ui.Color.new(color));
        averageLightness = averageLightness + dart.notNull(hslColor.lightness) * dart.notNull(colorHistogram[$_get](color));
      }
      averageLightness = averageLightness / dart.notNull(colors[$length]);
      if (!(averageLightness !== 0 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/accessibility.dart", 366, 12, "averageLightness != double.nan");
      let lightColor = 0;
      let darkColor = 0;
      let lightCount = 0;
      let darkCount = 0;
      for (let entry of colorHistogram[$entries]) {
        let color = colors$.HSLColor.fromColor(new ui.Color.new(entry.key));
        let count = entry.value;
        if (dart.notNull(color.lightness) <= averageLightness && dart.notNull(count) > dart.notNull(darkCount)) {
          darkColor = entry.key;
          darkCount = count;
        } else if (dart.notNull(color.lightness) > averageLightness && dart.notNull(count) > dart.notNull(lightCount)) {
          lightColor = entry.key;
          lightCount = count;
        }
      }
      if (!(lightColor !== 0 && darkColor !== 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/accessibility.dart", 383, 13, "lightColor != 0 && darkColor != 0");
      return new accessibility._ContrastReport.__(new ui.Color.new(lightColor), new ui.Color.new(darkColor));
    }
    contrastRatio() {
      return (dart.notNull(accessibility._ContrastReport._luminance(this.lightColor)) + 0.05) / (dart.notNull(accessibility._ContrastReport._luminance(this.darkColor)) + 0.05);
    }
    static _luminance(color) {
      let r = dart.notNull(color.red) / 255.0;
      let g = dart.notNull(color.green) / 255.0;
      let b = dart.notNull(color.blue) / 255.0;
      if (r <= 0.03928)
        r = r / 12.92;
      else
        r = math.pow((r + 0.055) / 1.055, 2.4);
      if (g <= 0.03928)
        g = g / 12.92;
      else
        g = math.pow((g + 0.055) / 1.055, 2.4);
      if (b <= 0.03928)
        b = b / 12.92;
      else
        b = math.pow((b + 0.055) / 1.055, 2.4);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
  };
  (accessibility._ContrastReport.__ = function(lightColor, darkColor) {
    this[lightColor$] = lightColor;
    this[darkColor$] = darkColor;
    ;
  }).prototype = accessibility._ContrastReport.prototype;
  dart.addTypeTests(accessibility._ContrastReport);
  const lightColor$ = _ContrastReport_lightColor;
  const darkColor$ = _ContrastReport_darkColor;
  dart.setMethodSignature(accessibility._ContrastReport, () => ({
    __proto__: dart.getMethods(accessibility._ContrastReport.__proto__),
    contrastRatio: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(accessibility._ContrastReport, "package:flutter_test/src/accessibility.dart");
  dart.setFieldSignature(accessibility._ContrastReport, () => ({
    __proto__: dart.getFields(accessibility._ContrastReport.__proto__),
    lightColor: dart.finalFieldType(ui.Color),
    darkColor: dart.finalFieldType(ui.Color)
  }));
  let C88;
  let C87;
  let C90;
  let C89;
  let C91;
  let C92;
  dart.defineLazy(accessibility, {
    /*accessibility.androidTapTargetGuideline*/get androidTapTargetGuideline() {
      return C87 || CT.C87;
    },
    /*accessibility.iOSTapTargetGuideline*/get iOSTapTargetGuideline() {
      return C89 || CT.C89;
    },
    /*accessibility.textContrastGuideline*/get textContrastGuideline() {
      return C91 || CT.C91;
    },
    /*accessibility.labeledTapTargetGuideline*/get labeledTapTargetGuideline() {
      return C92 || CT.C92;
    }
  });
  const _tickers = dart.privateName(widget_tester, "_tickers");
  const _lastRecordedSemanticsHandles = dart.privateName(widget_tester, "_lastRecordedSemanticsHandles");
  const _name$ = dart.privateName(binding$6, "_name");
  let C93;
  let C94;
  let C95;
  const _isPrivate = dart.privateName(widget_tester, "_isPrivate");
  const _removeTicker = dart.privateName(widget_tester, "_removeTicker");
  const _verifySemanticsHandlesWereDisposed = dart.privateName(widget_tester, "_verifySemanticsHandlesWereDisposed");
  const _endOfTestVerifications = dart.privateName(widget_tester, "_endOfTestVerifications");
  const _recordNumberOfSemanticsHandles = dart.privateName(widget_tester, "_recordNumberOfSemanticsHandles");
  widget_tester.WidgetTester = class WidgetTester extends controller.WidgetController {
    get binding() {
      return binding$6.TestWidgetsFlutterBinding._check(super.binding);
    }
    pumpWidget(widget, duration, phase) {
      if (duration === void 0) duration = null;
      if (phase === void 0) phase = C93 || CT.C93;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => {
        this.binding.attachRootWidget(widget);
        this.binding.scheduleFrame();
        return this.binding.pump(duration, phase);
      }, VoidToFutureOfvoid()));
    }
    pump(duration, phase) {
      if (duration === void 0) duration = null;
      if (phase === void 0) phase = C93 || CT.C93;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => this.binding.pump(duration, phase), VoidToFutureOfvoid()));
    }
    pumpBenchmark(duration) {
      return async.async(dart.void, (function* pumpBenchmark() {
        if (!dart.test(dart.fn(() => {
          let widgetsBinding = this.binding;
          return binding$6.LiveTestWidgetsFlutterBinding.is(widgetsBinding) && dart.equals(widgetsBinding.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark);
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 350, 12, "s enables driving an artificially high CPU load by rendering frames in\n  /// a tight loop. It must be used with the frame policy set to\n  /// [LiveTestWidgetsFlutterBindingFramePolicy.benchmark].\n  ///\n  /// Similarly to [pump], this do");
        let caughtException = null;
        function handleError(error, stackTrace) {
          let t7;
          t7 = caughtException;
          return t7 == null ? caughtException = error : t7;
        }
        dart.fn(handleError, dynamicAndStackTraceTovoid());
        yield FutureOfvoid().microtask(dart.fn(() => {
          this.binding.handleBeginFrame(duration);
        }, VoidToNull())).catchError(handleError);
        yield this.idle();
        yield FutureOfvoid().microtask(dart.fn(() => {
          this.binding.handleDrawFrame();
        }, VoidToNull())).catchError(handleError);
        yield this.idle();
        if (caughtException != null) {
          dart.throw(caughtException);
        }
      }).bind(this));
    }
    pumpAndSettle(duration, phase, timeout) {
      if (duration === void 0) duration = C94 || CT.C94;
      if (phase === void 0) phase = C93 || CT.C93;
      if (timeout === void 0) timeout = C95 || CT.C95;
      if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 398, 12, "frame later than");
      if (!dart.test(duration['>'](core.Duration.zero))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 399, 12, "///\n  /// Alternatively,");
      if (!(timeout != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 400, 12, " that the retur");
      if (!dart.test(timeout['>'](core.Duration.zero))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 401, 12, "his function\n  /// matc");
      if (!dart.test(dart.fn(() => {
        let binding = this.binding;
        if (binding$6.LiveTestWidgetsFlutterBinding.is(binding) && dart.equals(binding.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark)) {
          dart.throw("When using LiveTestWidgetsFlutterBindingFramePolicy.benchmark, " + "hasScheduledFrame is never set to true. This means that pumpAndSettle() " + "cannot be used, because it has no way to know if the application has " + "stopped registering new frames.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 402, 12, "ed number of pumps.\n  Future<int> pumpAndSettle([\n    Duration duration = const Duration(milliseconds: 100),\n    EnginePhase phase = EnginePhase.sendSemanticsUpdate,\n    Duration timeout = const Duration(minutes: 10),\n  ]) {\n    assert(duration != null);\n    assert(duration > Duration.zero);\n    assert(timeout != null);\n    assert(timeout > Duration.zero);\n    assert(() {\n      final WidgetsBinding binding = this.binding;\n      if (binding is LiveTestWidgetsFlutterBinding &&\n          binding.framePolicy == LiveTestWidgetsFlutter");
      let count = 0;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        let endTime = this.binding.clock.fromNowBy(timeout);
        do {
          if (dart.test(this.binding.clock.now().isAfter(endTime))) dart.throw(assertions.FlutterError.new("pumpAndSettle timed out"));
          yield this.binding.pump(duration, phase);
          count = count + 1;
        } while (dart.test(this.binding.hasScheduledFrame));
      }).bind(this)), VoidToFutureOfNull())).then(core.int, dart.fn(_ => count, voidToint()));
    }
    runAsync(T, callback, opts) {
      let additionalTime = opts && 'additionalTime' in opts ? opts.additionalTime : C82 || CT.C82;
      return this.binding.runAsync(T, callback, {additionalTime: additionalTime});
    }
    get hasRunningAnimations() {
      return dart.notNull(this.binding.transientCallbackCount) > 0;
    }
    hitTestOnBinding(location) {
      location = this.binding.localToGlobal(location);
      return super.hitTestOnBinding(location);
    }
    sendEventToBinding(event, result) {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        this.binding.dispatchEvent(event, result, {source: binding$6.TestBindingEventSource.test});
      }).bind(this)), VoidToFutureOfNull()));
    }
    dispatchEvent(event, result) {
      if (events.PointerDownEvent.is(event)) {
        let innerTarget = object.RenderObject._check(result.path[$firstWhere](dart.fn(candidate => object.RenderObject.is(candidate.target), HitTestEntryTobool())).target);
        let innerTargetElement = all_elements.collectAllElementsFrom(this.binding.renderViewElement, {skipOffstage: true})[$lastWhere](dart.fn(element => dart.equals(element.renderObject, innerTarget), ElementTobool()), {orElse: dart.fn(() => null, VoidToNull())});
        if (innerTargetElement == null) {
          print.debugPrint("No widgets found at " + dart.str(this.binding.globalToLocal(event.position)) + ".");
          return;
        }
        let candidates = JSArrayOfElement().of([]);
        innerTargetElement.visitAncestorElements(dart.fn(element => {
          candidates[$add](element);
          return true;
        }, ElementTobool()));
        if (!dart.test(candidates[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 502, 14, "se: () => null,\n     ");
        let descendantText = null;
        let numberOfWithTexts = 0;
        let numberOfTypes = 0;
        let totalNumber = 0;
        print.debugPrint("Some possible finders for the widgets at " + dart.str(this.binding.globalToLocal(event.position)) + ":");
        for (let element of candidates) {
          if (totalNumber > 13) break;
          totalNumber = totalNumber + 1;
          if (tooltip.Tooltip.is(element.widget)) {
            let widget = tooltip.Tooltip._check(element.widget);
            let matches = finders.find.byTooltip(widget.message).evaluate();
            if (matches[$length] === 1) {
              print.debugPrint("  find.byTooltip('" + dart.str(widget.message) + "')");
              continue;
            }
          }
          if (text$.Text.is(element.widget)) {
            if (!(descendantText == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 523, 18, "(element.widget is Too");
            let widget = text$.Text._check(element.widget);
            let matches = finders.find.text(widget.data).evaluate();
            descendantText = widget.data;
            if (matches[$length] === 1) {
              print.debugPrint("  find.text('" + dart.str(widget.data) + "')");
              continue;
            }
          }
          if (key$.ValueKey.is(element.widget.key)) {
            let key = key$.ValueKey._check(element.widget.key);
            let keyLabel = null;
            if (ValueKeyOfint().is(key) || ValueKeyOfdouble().is(key) || ValueKeyOfbool().is(key)) {
              keyLabel = "const " + dart.str(dart.runtimeType(element.widget.key)) + "(" + dart.str(key.value) + ")";
            } else if (ValueKeyOfString().is(key)) {
              keyLabel = "const Key('" + dart.str(key.value) + "')";
            }
            if (keyLabel != null) {
              let matches = finders.find.byKey(key).evaluate();
              if (matches[$length] === 1) {
                print.debugPrint("  find.byKey(" + dart.str(keyLabel) + ")");
                continue;
              }
            }
          }
          if (!dart.test(this[_isPrivate](dart.runtimeType(element.widget)))) {
            if (numberOfTypes < 5) {
              let matches = finders.find.byType(dart.runtimeType(element.widget)).evaluate();
              if (matches[$length] === 1) {
                print.debugPrint("  find.byType(" + dart.str(dart.runtimeType(element.widget)) + ")");
                numberOfTypes = numberOfTypes + 1;
                continue;
              }
            }
            if (descendantText != null && numberOfWithTexts < 5) {
              let matches = finders.find.widgetWithText(dart.runtimeType(element.widget), descendantText).evaluate();
              if (matches[$length] === 1) {
                print.debugPrint("  find.widgetWithText(" + dart.str(dart.runtimeType(element.widget)) + ", '" + dart.str(descendantText) + "')");
                numberOfWithTexts = numberOfWithTexts + 1;
                continue;
              }
            }
          }
          if (!dart.test(this[_isPrivate](dart.runtimeType(element)))) {
            let matches = finders.find.byElementType(dart.runtimeType(element)).evaluate();
            if (matches[$length] === 1) {
              print.debugPrint("  find.byElementType(" + dart.str(dart.runtimeType(element)) + ")");
              continue;
            }
          }
          totalNumber = totalNumber - 1;
        }
        if (totalNumber === 0) print.debugPrint("  <could not come up with any unique finders>");
      }
    }
    [_isPrivate](type) {
      return "_"[$matchAsPrefix](dart.toString(type)) != null;
    }
    takeException() {
      return this.binding.takeException();
    }
    idle() {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => this.binding.idle(), VoidToFutureOfvoid()));
    }
    createTicker(onTick) {
      this[_tickers] == null ? this[_tickers] = LinkedHashSetOf_TestTicker().new() : null;
      let result = new widget_tester._TestTicker.new(onTick, dart.bind(this, _removeTicker));
      this[_tickers].add(result);
      return result;
    }
    [_removeTicker](ticker) {
      if (!(this[_tickers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 621, 12, "void> idle() {\n ");
      if (!dart.test(this[_tickers].contains(ticker))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 622, 12, "AsyncUtils.guard<void>(()");
      this[_tickers].remove(ticker);
    }
    verifyTickersWereDisposed(when) {
      if (when === void 0) when = "when none should have been";
      if (!(when != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 633, 12, "dgetTester] ");
      if (this[_tickers] != null) {
        for (let ticker of this[_tickers]) {
          if (dart.test(ticker.isActive)) {
            dart.throw(assertions.FlutterError.new("A Ticker was active " + dart.str(when) + ".\n" + "All Tickers must be disposed. Tickers used by AnimationControllers " + "should be disposed by calling dispose() on the AnimationController itself. " + "Otherwise, the ticker will leak.\n" + "The offending ticker was: " + dart.str(ticker.toString({debugIncludeStack: true}))));
          }
        }
      }
    }
    [_endOfTestVerifications]() {
      this.verifyTickersWereDisposed("at the end of the test");
      this[_verifySemanticsHandlesWereDisposed]();
    }
    [_verifySemanticsHandlesWereDisposed]() {
      if (!(this[_lastRecordedSemanticsHandles] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 655, 12, "         'Otherwise, the ticker will ");
      if (dart.notNull(this.binding.pipelineOwner.debugOutstandingSemanticsHandles) > dart.notNull(this[_lastRecordedSemanticsHandles])) {
        dart.throw(assertions.FlutterError.new("A SemanticsHandle was active at the end of the test.\n" + "All SemanticsHandle instances must be disposed by calling dispose() on " + "the SemanticsHandle. If your test uses SemanticsTester, it is " + "sufficient to call dispose() on SemanticsTester. Otherwise, the " + "existing handle will leak into another test and alter its behavior."));
      }
      this[_lastRecordedSemanticsHandles] = null;
    }
    [_recordNumberOfSemanticsHandles]() {
      this[_lastRecordedSemanticsHandles] = this.binding.pipelineOwner.debugOutstandingSemanticsHandles;
    }
    get testTextInput() {
      return this.binding.testTextInput;
    }
    showKeyboard(finder) {
      return async.async(dart.void, (function* showKeyboard() {
        return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
          let editable = this.state(editable_text.EditableTextState, finders.find.descendant({of: finder, matching: finders.find.byType(dart.wrapType(editable_text.EditableText)), matchRoot: true}));
          this.binding.focusedEditable = editable;
          yield this.pump();
        }).bind(this)), VoidToFutureOfNull()));
      }).bind(this));
    }
    enterText(finder, text) {
      return async.async(dart.void, (function* enterText() {
        return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
          yield this.showKeyboard(finder);
          this.testTextInput.enterText(text);
          yield this.idle();
        }).bind(this)), VoidToFutureOfNull()));
      }).bind(this));
    }
    pageBack() {
      return async.async(dart.void, (function* pageBack() {
        return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
          let backButton = finders.find.byTooltip("Back");
          if (dart.test(backButton.evaluate()[$isEmpty])) {
            backButton = finders.find.byType(dart.wrapType(nav_bar.CupertinoNavigationBarBackButton));
          }
          widget_tester.expectSync(backButton, matchers.findsOneWidget, {reason: "One back button expected on screen"});
          yield this.tap(backButton);
        }).bind(this)), VoidToFutureOfNull()));
      }).bind(this));
    }
    getSemantics(finder) {
      let t7, t7$;
      if (this.binding.pipelineOwner.semanticsOwner == null) dart.throw(new core.StateError.new("Semantics are not enabled."));
      let candidates = finder.evaluate();
      if (dart.test(candidates[$isEmpty])) {
        dart.throw(new core.StateError.new("Finder returned no matching elements."));
      }
      if (dart.notNull(candidates[$length]) > 1) {
        dart.throw(new core.StateError.new("Finder returned more than one element."));
      }
      let element = candidates[$single];
      let renderObject = element.findRenderObject();
      let result = renderObject.debugSemantics;
      while (renderObject != null && result == null) {
        renderObject = object.RenderObject._check((t7 = renderObject, t7 == null ? null : t7.parent));
        result = (t7$ = renderObject, t7$ == null ? null : t7$.debugSemantics);
      }
      if (result == null) dart.throw(new core.StateError.new("No Semantics data found."));
      return result;
    }
    ensureSemantics() {
      return this.binding.pipelineOwner.ensureSemantics();
    }
    ensureVisible(finder) {
      return scrollable.Scrollable.ensureVisible(this.element(framework.Element, finder));
    }
  };
  (widget_tester.WidgetTester.__ = function(binding) {
    this[_tickers] = null;
    this[_lastRecordedSemanticsHandles] = null;
    widget_tester.WidgetTester.__proto__.new.call(this, binding);
    if (binding$6.LiveTestWidgetsFlutterBinding.is(binding)) binding.deviceEventDispatcher = this;
  }).prototype = widget_tester.WidgetTester.prototype;
  dart.addTypeTests(widget_tester.WidgetTester);
  widget_tester.WidgetTester[dart.implements] = () => [hit_test.HitTestDispatcher, ticker.TickerProvider];
  dart.setMethodSignature(widget_tester.WidgetTester, () => ({
    __proto__: dart.getMethods(widget_tester.WidgetTester.__proto__),
    pumpWidget: dart.fnType(async.Future$(dart.void), [framework.Widget], [core.Duration, binding$6.EnginePhase]),
    pump: dart.fnType(async.Future$(dart.void), [], [core.Duration, binding$6.EnginePhase]),
    pumpBenchmark: dart.fnType(async.Future$(dart.void), [core.Duration]),
    pumpAndSettle: dart.fnType(async.Future$(core.int), [], [core.Duration, binding$6.EnginePhase, core.Duration]),
    runAsync: dart.gFnType(T => [async.Future$(T), [dart.fnType(async.Future$(T), [])], {additionalTime: core.Duration}]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestResult]),
    [_isPrivate]: dart.fnType(core.bool, [core.Type]),
    takeException: dart.fnType(dart.dynamic, []),
    idle: dart.fnType(async.Future$(dart.void), []),
    createTicker: dart.fnType(ticker.Ticker, [dart.fnType(dart.void, [core.Duration])]),
    [_removeTicker]: dart.fnType(dart.void, [widget_tester._TestTicker]),
    verifyTickersWereDisposed: dart.fnType(dart.void, [], [core.String]),
    [_endOfTestVerifications]: dart.fnType(dart.void, []),
    [_verifySemanticsHandlesWereDisposed]: dart.fnType(dart.void, []),
    [_recordNumberOfSemanticsHandles]: dart.fnType(dart.void, []),
    showKeyboard: dart.fnType(async.Future$(dart.void), [finders.Finder]),
    enterText: dart.fnType(async.Future$(dart.void), [finders.Finder, core.String]),
    pageBack: dart.fnType(async.Future$(dart.void), []),
    getSemantics: dart.fnType(semantics.SemanticsNode, [finders.Finder]),
    ensureSemantics: dart.fnType(object.SemanticsHandle, []),
    ensureVisible: dart.fnType(async.Future$(dart.void), [finders.Finder])
  }));
  dart.setGetterSignature(widget_tester.WidgetTester, () => ({
    __proto__: dart.getGetters(widget_tester.WidgetTester.__proto__),
    binding: binding$6.TestWidgetsFlutterBinding,
    hasRunningAnimations: core.bool,
    testTextInput: test_text_input.TestTextInput
  }));
  dart.setLibraryUri(widget_tester.WidgetTester, "package:flutter_test/src/widget_tester.dart");
  dart.setFieldSignature(widget_tester.WidgetTester, () => ({
    __proto__: dart.getFields(widget_tester.WidgetTester.__proto__),
    [_tickers]: dart.fieldType(core.Set$(ticker.Ticker)),
    [_lastRecordedSemanticsHandles]: dart.fieldType(core.int)
  }));
  const _onDispose$ = dart.privateName(widget_tester, "_onDispose");
  widget_tester._TestTicker = class _TestTicker extends ticker.Ticker {
    dispose() {
      if (this[_onDispose$] != null) this[_onDispose$](this);
      super.dispose();
    }
  };
  (widget_tester._TestTicker.new = function(onTick, _onDispose) {
    this[_onDispose$] = _onDispose;
    widget_tester._TestTicker.__proto__.new.call(this, onTick);
    ;
  }).prototype = widget_tester._TestTicker.prototype;
  dart.addTypeTests(widget_tester._TestTicker);
  dart.setLibraryUri(widget_tester._TestTicker, "package:flutter_test/src/widget_tester.dart");
  dart.setFieldSignature(widget_tester._TestTicker, () => ({
    __proto__: dart.getFields(widget_tester._TestTicker.__proto__),
    [_onDispose$]: dart.finalFieldType(dart.fnType(dart.void, [widget_tester._TestTicker]))
  }));
  widget_tester.testWidgets = function testWidgets(description, callback, opts) {
    let t7;
    let skip = opts && 'skip' in opts ? opts.skip : false;
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    let initialTimeout = opts && 'initialTimeout' in opts ? opts.initialTimeout : null;
    let semanticsEnabled = opts && 'semanticsEnabled' in opts ? opts.semanticsEnabled : true;
    let binding = binding$6.TestWidgetsFlutterBinding._check(binding$6.TestWidgetsFlutterBinding.ensureInitialized());
    let tester = new widget_tester.WidgetTester.__(binding);
    test_compat.test(description, dart.fn(() => {
      let t7;
      let semanticsHandle = null;
      if (dart.equals(semanticsEnabled, true)) {
        semanticsHandle = tester.ensureSemantics();
      }
      tester[_recordNumberOfSemanticsHandles]();
      test_api.addTearDown(dart.bind(binding, 'postTest'));
      return binding.runTest(dart.fn(() => async.async(core.Null, function*() {
        let t7;
        semantics.debugResetSemanticsIdCounter();
        yield callback(tester);
        t7 = semanticsHandle;
        t7 == null ? null : t7.dispose();
      }), VoidToFutureOfNull()), dart.bind(tester, _endOfTestVerifications), {description: (t7 = description, t7 == null ? "" : t7), timeout: initialTimeout});
    }, VoidToFutureOfvoid()), {skip: skip, timeout: (t7 = timeout, t7 == null ? binding.defaultTestTimeout : t7)});
  };
  widget_tester.benchmarkWidgets = function benchmarkWidgets(callback, opts) {
    let t7;
    let mayRunWithAsserts = opts && 'mayRunWithAsserts' in opts ? opts.mayRunWithAsserts : false;
    let semanticsEnabled = opts && 'semanticsEnabled' in opts ? opts.semanticsEnabled : false;
    if (!dart.test(dart.fn(() => {
      if (dart.test(mayRunWithAsserts)) return true;
      core.print("┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓");
      core.print("┇ ⚠ THIS BENCHMARK IS BEING RUN WITH ASSERTS ENABLED ⚠  ┇");
      core.print("┡╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┦");
      core.print("│                                                       │");
      core.print("│  Numbers obtained from a benchmark while asserts are  │");
      core.print("│  enabled will not accurately reflect the performance  │");
      core.print("│  that will be experienced by end users using release  ╎");
      core.print("│  builds. Benchmarks should be run using this command  ┆");
      core.print("│  line:  flutter run --release benchmark.dart          ┊");
      core.print("│                                                        ");
      core.print("└─────────────────────────────────────────────────╌┄┈  🐢");
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 179, 10, "() {\n    if (mayRunWithAsserts)\n      return true;\n\n    print('┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓');\n    print('┇ ⚠ THIS BENCHMARK IS BEING RUN WITH ASSERTS ENABLED ⚠  ┇');\n    print('┡╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┦');\n    print('│                                                       │');\n    print('│  Numbers obtained from a benchmark while asserts are  │');\n    print('│  enabled will not accurately reflect the performance  │');\n    print('│  that will be experienced by end users using release  ╎');\n    print('│  builds. Benchmarks should be run using thi");
    let binding = binding$6.TestWidgetsFlutterBinding._check(binding$6.TestWidgetsFlutterBinding.ensureInitialized());
    if (!!binding$6.AutomatedTestWidgetsFlutterBinding.is(binding)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/widget_tester.dart", 197, 10, "('│                                         ");
    let tester = new widget_tester.WidgetTester.__(binding);
    let semanticsHandle = null;
    if (dart.equals(semanticsEnabled, true)) {
      semanticsHandle = tester.ensureSemantics();
    }
    tester[_recordNumberOfSemanticsHandles]();
    t7 = binding.runTest(dart.fn(() => async.async(core.Null, function*() {
      let t7;
      yield callback(tester);
      t7 = semanticsHandle;
      t7 == null ? null : t7.dispose();
    }), VoidToFutureOfNull()), dart.bind(tester, _endOfTestVerifications));
    return t7 == null ? FutureOfvoid().value() : t7;
  };
  widget_tester.expect = function expect$(actual, matcher, opts) {
    let reason = opts && 'reason' in opts ? opts.reason : null;
    let skip = opts && 'skip' in opts ? opts.skip : null;
    test_async_utils.TestAsyncUtils.guardSync();
    expect.expect(actual, matcher, {reason: reason, skip: skip});
  };
  widget_tester.expectSync = function expectSync(actual, matcher, opts) {
    let reason = opts && 'reason' in opts ? opts.reason : null;
    expect.expect(actual, matcher, {reason: reason});
  };
  widget_tester.expectLater = function expectLater(actual, matcher, opts) {
    let reason = opts && 'reason' in opts ? opts.reason : null;
    let skip = opts && 'skip' in opts ? opts.skip : null;
    test_async_utils.TestAsyncUtils.guardSync();
    return expect.expectLater(actual, matcher, {reason: reason, skip: skip}).then(dart.void, dart.fn(value => null, dynamicToNull()));
  };
  test_exception_reporter._defaultTestExceptionReporter = function _defaultTestExceptionReporter(errorDetails, testDescription) {
    assertions.FlutterError.dumpErrorToConsole(errorDetails, {forceReport: true});
    let additional = "";
    if (testDescription[$isNotEmpty]) additional = "\nThe test description was: " + dart.str(testDescription);
    test_api.registerException("Test failed. See exception logs above." + additional, test_exception_reporter._emptyStackTrace);
  };
  dart.copyProperties(test_exception_reporter, {
    get reportTestException() {
      return test_exception_reporter._reportTestException;
    },
    set reportTestException(handler) {
      if (!(handler != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_exception_reporter.dart", 25, 10, "handler != null");
      test_exception_reporter._reportTestException = handler;
    }
  });
  let C96;
  let C97;
  dart.defineLazy(test_exception_reporter, {
    /*test_exception_reporter._reportTestException*/get _reportTestException() {
      return C96 || CT.C96;
    },
    set _reportTestException(_) {},
    /*test_exception_reporter._emptyStackTrace*/get _emptyStackTrace() {
      return new chain.Chain.new(C97 || CT.C97);
    }
  });
  test_async_utils._AsyncScope = class _AsyncScope extends core.Object {};
  (test_async_utils._AsyncScope.new = function(creationStack, zone) {
    this.creationStack = creationStack;
    this.zone = zone;
    ;
  }).prototype = test_async_utils._AsyncScope.prototype;
  dart.addTypeTests(test_async_utils._AsyncScope);
  dart.setLibraryUri(test_async_utils._AsyncScope, "package:flutter_test/src/test_async_utils.dart");
  dart.setFieldSignature(test_async_utils._AsyncScope, () => ({
    __proto__: dart.getFields(test_async_utils._AsyncScope.__proto__),
    creationStack: dart.finalFieldType(core.StackTrace),
    zone: dart.finalFieldType(async.Zone)
  }));
  let C98;
  test_async_utils.TestAsyncUtils = class TestAsyncUtils extends core.Object {
    static guard(T, body) {
      test_async_utils.TestAsyncUtils.guardSync();
      let zone = async.Zone.current.fork({zoneValues: new _js_helper.LinkedMap.from([test_async_utils.TestAsyncUtils._scopeStack, true])});
      let scope = new test_async_utils._AsyncScope.new(core.StackTrace.current, zone);
      test_async_utils.TestAsyncUtils._scopeStack[$add](scope);
      let result = scope.zone.run(async.Future$(T), body);
      let resultValue = null;
      function completionHandler(error, stack) {
        if (!dart.test(test_async_utils.TestAsyncUtils._scopeStack[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 72, 14, "_scopeStack.isNotEmpty");
        if (!dart.test(test_async_utils.TestAsyncUtils._scopeStack[$contains](scope))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 73, 14, "_scopeStack.contains(scope)");
        let leaked = false;
        let closedScope = null;
        let information = JSArrayOfDiagnosticsNode().of([]);
        while (dart.test(test_async_utils.TestAsyncUtils._scopeStack[$isNotEmpty])) {
          closedScope = test_async_utils.TestAsyncUtils._scopeStack[$removeLast]();
          if (dart.equals(closedScope, scope)) break;
          if (!leaked) {
            information[$add](new assertions.ErrorSummary.new("Asynchronous call to guarded function leaked."));
            information[$add](new assertions.ErrorHint.new("You must use \"await\" with all Future-returning test APIs."));
            leaked = true;
          }
          let originalGuarder = test_async_utils.TestAsyncUtils._findResponsibleMethod(closedScope.creationStack, "guard", information);
          if (originalGuarder != null) {
            information[$add](new assertions.ErrorDescription.new("The test API method \"" + dart.str(originalGuarder.methodName) + "\" " + "from class " + dart.str(originalGuarder.className) + " " + "was called from " + dart.str(originalGuarder.callerFile) + " " + "on line " + dart.str(originalGuarder.callerLine) + ", " + "but never completed before its parent scope closed."));
          }
        }
        if (leaked) {
          if (error != null) {
            information[$add](new diagnostics.DiagnosticsProperty.new("An uncaught exception may have caused the guarded function leak. The exception was", error, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            information[$add](new assertions.DiagnosticsStackTrace.new("The stack trace associated with this exception was", stack));
          }
          dart.throw(new assertions.FlutterError.fromParts(information));
        }
        if (error != null) return async.Future$(T).error(error, stack);
        return async.Future$(T).value(resultValue);
      }
      dart.fn(completionHandler, dart.fnType(async.Future$(T), [dart.dynamic, core.StackTrace]));
      return result.then(T, dart.fn(value => {
        resultValue = value;
        return completionHandler(null, null);
      }, dart.fnType(async.Future$(T), [T])), {onError: completionHandler});
    }
    static get _currentScopeZone() {
      let zone = async.Zone.current;
      while (zone != null) {
        if (dart.equals(zone._get(test_async_utils.TestAsyncUtils._scopeStack), true)) return zone;
        zone = zone.parent;
      }
      return null;
    }
    static guardSync() {
      if (dart.test(test_async_utils.TestAsyncUtils._scopeStack[$isEmpty])) {
        return;
      }
      let zone = test_async_utils.TestAsyncUtils._currentScopeZone;
      if (dart.equals(zone, test_async_utils.TestAsyncUtils._scopeStack[$last].zone)) {
        return;
      }
      let skipCount = 0;
      let candidateScope = test_async_utils.TestAsyncUtils._scopeStack[$last];
      let scope = null;
      do {
        skipCount = skipCount + 1;
        scope = candidateScope;
        if (skipCount >= dart.notNull(test_async_utils.TestAsyncUtils._scopeStack[$length])) {
          if (zone == null) break;
          return;
        }
        candidateScope = test_async_utils.TestAsyncUtils._scopeStack[$_get](dart.notNull(test_async_utils.TestAsyncUtils._scopeStack[$length]) - skipCount - 1);
        if (!(candidateScope != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 184, 14, "candidateScope != null");
        if (!(candidateScope.zone != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 185, 14, "candidateScope.zone != null");
      } while (!dart.equals(candidateScope.zone, zone));
      if (!(scope != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 187, 12, "scope != null");
      let information = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Guarded function conflict."), new assertions.ErrorHint.new("You must use \"await\" with all Future-returning test APIs.")]);
      let originalGuarder = test_async_utils.TestAsyncUtils._findResponsibleMethod(scope.creationStack, "guard", information);
      let collidingGuarder = test_async_utils.TestAsyncUtils._findResponsibleMethod(core.StackTrace.current, "guardSync", information);
      if (originalGuarder != null && collidingGuarder != null) {
        let originalName = null;
        if (originalGuarder.className == null) {
          originalName = "(" + dart.str(originalGuarder.methodName) + ") ";
          information[$add](new assertions.ErrorDescription.new("The guarded \"" + dart.str(originalGuarder.methodName) + "\" function " + "was called from " + dart.str(originalGuarder.callerFile) + " " + "on line " + dart.str(originalGuarder.callerLine) + "."));
        } else {
          originalName = "(" + dart.str(originalGuarder.className) + "." + dart.str(originalGuarder.methodName) + ") ";
          information[$add](new assertions.ErrorDescription.new("The guarded method \"" + dart.str(originalGuarder.methodName) + "\" " + "from class " + dart.str(originalGuarder.className) + " " + "was called from " + dart.str(originalGuarder.callerFile) + " " + "on line " + dart.str(originalGuarder.callerLine) + "."));
        }
        let again = originalGuarder.callerFile == collidingGuarder.callerFile && originalGuarder.callerLine == collidingGuarder.callerLine ? "again " : "";
        let collidingName = null;
        if (originalGuarder.className == collidingGuarder.className && originalGuarder.methodName == collidingGuarder.methodName) {
          originalName = "";
          collidingName = "";
          information[$add](new assertions.ErrorDescription.new("Then, it " + "was called " + again + "from " + dart.str(collidingGuarder.callerFile) + " " + "on line " + dart.str(collidingGuarder.callerLine) + "."));
        } else if (collidingGuarder.className == null) {
          collidingName = "(" + dart.str(collidingGuarder.methodName) + ") ";
          information[$add](new assertions.ErrorDescription.new("Then, the \"" + dart.str(collidingGuarder.methodName) + "\" function " + "was called " + again + "from " + dart.str(collidingGuarder.callerFile) + " " + "on line " + dart.str(collidingGuarder.callerLine) + "."));
        } else {
          collidingName = "(" + dart.str(collidingGuarder.className) + "." + dart.str(collidingGuarder.methodName) + ") ";
          information[$add](new assertions.ErrorDescription.new("Then, the \"" + dart.str(collidingGuarder.methodName) + "\" method " + (originalGuarder.className == collidingGuarder.className ? "(also from class " + dart.str(collidingGuarder.className) + ")" : "from class " + dart.str(collidingGuarder.className)) + " " + "was called " + again + "from " + dart.str(collidingGuarder.callerFile) + " " + "on line " + dart.str(collidingGuarder.callerLine) + "."));
        }
        information[$add](new assertions.ErrorDescription.new("The first " + (originalGuarder.className == null ? "function" : "method") + " " + dart.str(originalName) + "had not yet finished executing at the time that " + "the second " + (collidingGuarder.className == null ? "function" : "method") + " " + dart.str(collidingName) + "was called. Since both are guarded, and the second was not a nested call inside the first, the " + "first must complete its execution before the second can be called. Typically, this is achieved by " + "putting an \"await\" statement in front of the call to the first."));
        if (collidingGuarder.className == null && collidingGuarder.methodName === "expect") {
          information[$add](new assertions.ErrorHint.new("If you are confident that all test APIs are being called using \"await\", and " + "this expect() call is not being called at the top level but is itself being " + "called from some sort of callback registered before the " + dart.str(originalGuarder.methodName) + " " + "method was called, then consider using expectSync() instead."));
        }
        information[$add](new assertions.DiagnosticsStackTrace.new("\nWhen the first " + (originalGuarder.className == null ? "function" : "method") + " " + dart.str(originalName) + "was called, this was the stack", scope.creationStack));
      }
      dart.throw(new assertions.FlutterError.fromParts(information));
    }
    static verifyAllScopesClosed() {
      if (dart.test(test_async_utils.TestAsyncUtils._scopeStack[$isNotEmpty])) {
        let information = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Asynchronous call to guarded function leaked."), new assertions.ErrorHint.new("You must use \"await\" with all Future-returning test APIs.")]);
        for (let scope of test_async_utils.TestAsyncUtils._scopeStack) {
          let guarder = test_async_utils.TestAsyncUtils._findResponsibleMethod(scope.creationStack, "guard", information);
          if (guarder != null) {
            information[$add](new assertions.ErrorDescription.new("The guarded method \"" + dart.str(guarder.methodName) + "\" " + (guarder.className != null ? "from class " + dart.str(guarder.className) + " " : "") + "was called from " + dart.str(guarder.callerFile) + " " + "on line " + dart.str(guarder.callerLine) + ", " + "but never completed before its parent scope closed."));
          }
        }
        dart.throw(new assertions.FlutterError.fromParts(information));
      }
    }
    static _stripAsynchronousSuspensions(line) {
      return line !== "<asynchronous suspension>";
    }
    static _findResponsibleMethod(rawStack, method, information) {
      let t7;
      if (!(method === "guard" || method === "guardSync")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 298, 12, "method == 'guard' || method == 'guardSync'");
      let stack = dart.toString(rawStack)[$split]("\n")[$where](C98 || CT.C98)[$toList]();
      if (!(stack[$last] === "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 300, 12, "stack.last == ''");
      stack[$removeLast]();
      let getClassPattern = core.RegExp.new("^#[0-9]+ +([^. ]+)");
      let lineMatch = null;
      let index = -1;
      do {
        index = index + 1;
        if (!(index < dart.notNull(stack[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 307, 14, "index < stack.length");
        lineMatch = getClassPattern[$matchAsPrefix](stack[$_get](index));
        if (!(lineMatch != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 309, 14, "lineMatch != null");
        if (!(lineMatch.groupCount === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 310, 14, "lineMatch.groupCount == 1");
      } while (lineMatch.group(1) === "TestAsyncUtils");
      if (index < dart.notNull(stack[$length])) {
        let guardPattern = core.RegExp.new("^#[0-9]+ +(?:([^. ]+)\\.)?([^. ]+)");
        let guardMatch = guardPattern[$matchAsPrefix](stack[$_get](index));
        if (guardMatch != null) {
          if (!(guardMatch.groupCount === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 317, 16, "guardMatch.groupCount == 2");
          let guardClass = guardMatch.group(1);
          let guardMethod = guardMatch.group(2);
          while (index < dart.notNull(stack[$length])) {
            lineMatch = getClassPattern[$matchAsPrefix](stack[$_get](index));
            if (lineMatch != null) {
              if (!(lineMatch.groupCount === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 323, 20, "lineMatch.groupCount == 1");
              if (lineMatch.group(1) == (t7 = guardClass, t7 == null ? guardMethod : t7)) {
                index = index + 1;
                continue;
              }
            }
            break;
          }
          if (index < dart.notNull(stack[$length])) {
            let callerPattern = core.RegExp.new("^#[0-9]+ .* \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
            let callerMatch = callerPattern[$matchAsPrefix](stack[$_get](index));
            if (callerMatch != null) {
              if (!(callerMatch.groupCount === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/test_async_utils.dart", 335, 20, "callerMatch.groupCount == 2");
              let callerFile = callerMatch.group(1);
              let callerLine = callerMatch.group(2);
              return new test_async_utils._StackEntry.new(guardClass, guardMethod, callerFile, callerLine);
            } else {
              information[$add](new assertions.ErrorSummary.new("(Unable to parse the stack frame of the method that called the method that called " + "TestAsyncUtils" + "." + dart.str(method) + "(). The stack may be incomplete or bogus.)"));
              information[$add](new assertions.ErrorDescription.new(dart.str(stack[$_get](index))));
            }
          } else {
            information[$add](new assertions.ErrorSummary.new("(Unable to find the stack frame of the method that called the method that called " + "TestAsyncUtils" + "." + dart.str(method) + "(). The stack may be incomplete or bogus.)"));
          }
        } else {
          information[$add](new assertions.ErrorSummary.new("(Unable to parse the stack frame of the method that called " + "TestAsyncUtils" + "." + dart.str(method) + "(). The stack may be incomplete or bogus.)"));
          information[$add](new assertions.ErrorDescription.new(dart.str(stack[$_get](index))));
        }
      } else {
        information[$add](new assertions.ErrorSummary.new("(Unable to find the method that called " + "TestAsyncUtils" + "." + dart.str(method) + "(). The stack may be incomplete or bogus.)"));
      }
      return null;
    }
  };
  (test_async_utils.TestAsyncUtils.__ = function() {
    ;
  }).prototype = test_async_utils.TestAsyncUtils.prototype;
  dart.addTypeTests(test_async_utils.TestAsyncUtils);
  dart.setLibraryUri(test_async_utils.TestAsyncUtils, "package:flutter_test/src/test_async_utils.dart");
  dart.defineLazy(test_async_utils.TestAsyncUtils, {
    /*test_async_utils.TestAsyncUtils._className*/get _className() {
      return "TestAsyncUtils";
    },
    /*test_async_utils.TestAsyncUtils._scopeStack*/get _scopeStack() {
      return JSArrayOf_AsyncScope().of([]);
    }
  });
  const _StackEntry_className = dart.privateName(test_async_utils, "_StackEntry.className");
  const _StackEntry_methodName = dart.privateName(test_async_utils, "_StackEntry.methodName");
  const _StackEntry_callerFile = dart.privateName(test_async_utils, "_StackEntry.callerFile");
  const _StackEntry_callerLine = dart.privateName(test_async_utils, "_StackEntry.callerLine");
  test_async_utils._StackEntry = class _StackEntry extends core.Object {
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    get methodName() {
      return this[methodName$];
    }
    set methodName(value) {
      super.methodName = value;
    }
    get callerFile() {
      return this[callerFile$];
    }
    set callerFile(value) {
      super.callerFile = value;
    }
    get callerLine() {
      return this[callerLine$];
    }
    set callerLine(value) {
      super.callerLine = value;
    }
  };
  (test_async_utils._StackEntry.new = function(className, methodName, callerFile, callerLine) {
    this[className$] = className;
    this[methodName$] = methodName;
    this[callerFile$] = callerFile;
    this[callerLine$] = callerLine;
    ;
  }).prototype = test_async_utils._StackEntry.prototype;
  dart.addTypeTests(test_async_utils._StackEntry);
  const className$ = _StackEntry_className;
  const methodName$ = _StackEntry_methodName;
  const callerFile$ = _StackEntry_callerFile;
  const callerLine$ = _StackEntry_callerLine;
  dart.setLibraryUri(test_async_utils._StackEntry, "package:flutter_test/src/test_async_utils.dart");
  dart.setFieldSignature(test_async_utils._StackEntry, () => ({
    __proto__: dart.getFields(test_async_utils._StackEntry.__proto__),
    className: dart.finalFieldType(core.String),
    methodName: dart.finalFieldType(core.String),
    callerFile: dart.finalFieldType(core.String),
    callerLine: dart.finalFieldType(core.String)
  }));
  goldens.TrivialComparator = class TrivialComparator extends core.Object {
    compare(imageBytes, golden) {
      print.debugPrint("Golden file comparison requested for \"" + dart.str(golden) + "\"; skipping...");
      return FutureOfbool().value(true);
    }
    update(golden, imageBytes) {
      dart.throw(new core.StateError.new("goldenFileComparator has not been initialized"));
    }
    getTestUri(key, version) {
      return key;
    }
  };
  (goldens.TrivialComparator.__ = function() {
    ;
  }).prototype = goldens.TrivialComparator.prototype;
  dart.addTypeTests(goldens.TrivialComparator);
  goldens.TrivialComparator[dart.implements] = () => [goldens.GoldenFileComparator];
  dart.setMethodSignature(goldens.TrivialComparator, () => ({
    __proto__: dart.getMethods(goldens.TrivialComparator.__proto__),
    compare: dart.fnType(async.Future$(core.bool), [typed_data.Uint8List, core.Uri]),
    update: dart.fnType(async.Future$(dart.void), [core.Uri, typed_data.Uint8List]),
    getTestUri: dart.fnType(core.Uri, [core.Uri, core.int])
  }));
  dart.setLibraryUri(goldens.TrivialComparator, "package:flutter_test/src/goldens.dart");
  const ComparisonResult_passed = dart.privateName(goldens, "ComparisonResult.passed");
  const ComparisonResult_error = dart.privateName(goldens, "ComparisonResult.error");
  const ComparisonResult_diffs = dart.privateName(goldens, "ComparisonResult.diffs");
  goldens.ComparisonResult = class ComparisonResult extends core.Object {
    get passed() {
      return this[passed$0];
    }
    set passed(value) {
      super.passed = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get diffs() {
      return this[diffs$];
    }
    set diffs(value) {
      super.diffs = value;
    }
  };
  (goldens.ComparisonResult.new = function(opts) {
    let passed = opts && 'passed' in opts ? opts.passed : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let diffs = opts && 'diffs' in opts ? opts.diffs : null;
    this[passed$0] = passed;
    this[error$] = error;
    this[diffs$] = diffs;
    if (!(passed != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/goldens.dart", 199, 15, "passed != null");
    ;
  }).prototype = goldens.ComparisonResult.prototype;
  dart.addTypeTests(goldens.ComparisonResult);
  const passed$0 = ComparisonResult_passed;
  const error$ = ComparisonResult_error;
  const diffs$ = ComparisonResult_diffs;
  dart.setLibraryUri(goldens.ComparisonResult, "package:flutter_test/src/goldens.dart");
  dart.setFieldSignature(goldens.ComparisonResult, () => ({
    __proto__: dart.getFields(goldens.ComparisonResult.__proto__),
    passed: dart.finalFieldType(core.bool),
    error: dart.finalFieldType(core.String),
    diffs: dart.finalFieldType(core.Map$(core.String, core.Object))
  }));
  dart.copyProperties(goldens, {
    get goldenFileComparator() {
      return goldens._goldenFileComparator;
    },
    set goldenFileComparator(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/goldens.dart", 133, 10, "value != null");
      goldens._goldenFileComparator = value;
    }
  });
  let C99;
  dart.defineLazy(goldens, {
    /*goldens._goldenFileComparator*/get _goldenFileComparator() {
      return C99 || CT.C99;
    },
    set _goldenFileComparator(_) {},
    /*goldens.autoUpdateGoldenFiles*/get autoUpdateGoldenFiles() {
      return false;
    },
    set autoUpdateGoldenFiles(_) {}
  });
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  binding$6.EnginePhase = class EnginePhase extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (binding$6.EnginePhase.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = binding$6.EnginePhase.prototype;
  dart.addTypeTests(binding$6.EnginePhase);
  dart.setLibraryUri(binding$6.EnginePhase, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.EnginePhase, () => ({
    __proto__: dart.getFields(binding$6.EnginePhase.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(binding$6.EnginePhase, ['toString']);
  binding$6.EnginePhase.build = C100 || CT.C100;
  binding$6.EnginePhase.layout = C101 || CT.C101;
  binding$6.EnginePhase.compositingBits = C102 || CT.C102;
  binding$6.EnginePhase.paint = C103 || CT.C103;
  binding$6.EnginePhase.composite = C104 || CT.C104;
  binding$6.EnginePhase.flushSemantics = C105 || CT.C105;
  binding$6.EnginePhase.sendSemanticsUpdate = C93 || CT.C93;
  binding$6.EnginePhase.values = C106 || CT.C106;
  let C107;
  let C108;
  let C109;
  binding$6.TestBindingEventSource = class TestBindingEventSource extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (binding$6.TestBindingEventSource.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = binding$6.TestBindingEventSource.prototype;
  dart.addTypeTests(binding$6.TestBindingEventSource);
  dart.setLibraryUri(binding$6.TestBindingEventSource, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.TestBindingEventSource, () => ({
    __proto__: dart.getFields(binding$6.TestBindingEventSource.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(binding$6.TestBindingEventSource, ['toString']);
  binding$6.TestBindingEventSource.test = C107 || CT.C107;
  binding$6.TestBindingEventSource.device = C108 || CT.C108;
  binding$6.TestBindingEventSource.values = C109 || CT.C109;
  const _pendingMessages = dart.privateName(binding$6, "_pendingMessages");
  const TestDefaultBinaryMessenger_delegate = dart.privateName(binding$6, "TestDefaultBinaryMessenger.delegate");
  binding$6.TestDefaultBinaryMessenger = class TestDefaultBinaryMessenger extends binary_messenger.BinaryMessenger {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    get pendingMessageCount() {
      return this[_pendingMessages][$length];
    }
    send(channel, message) {
      let resultFuture = this.delegate.send(channel, message);
      if (resultFuture != null) {
        this[_pendingMessages][$add](resultFuture);
        resultFuture.whenComplete(dart.fn(() => this[_pendingMessages][$remove](resultFuture), VoidTobool()));
      }
      return resultFuture;
    }
    get platformMessagesFinished() {
      return async.Future.wait(dart.void, this[_pendingMessages]);
    }
    handlePlatformMessage(channel, data, callback) {
      return this.delegate.handlePlatformMessage(channel, data, callback);
    }
    setMessageHandler(channel, handler) {
      this.delegate.setMessageHandler(channel, handler);
    }
    setMockMessageHandler(channel, handler) {
      this.delegate.setMockMessageHandler(channel, handler);
    }
  };
  (binding$6.TestDefaultBinaryMessenger.new = function(delegate) {
    this[_pendingMessages] = JSArrayOfFutureOfByteData().of([]);
    this[delegate$] = delegate;
    if (!(delegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 91, 53, "delegate != null");
    binding$6.TestDefaultBinaryMessenger.__proto__.new.call(this);
    ;
  }).prototype = binding$6.TestDefaultBinaryMessenger.prototype;
  dart.addTypeTests(binding$6.TestDefaultBinaryMessenger);
  const delegate$ = TestDefaultBinaryMessenger_delegate;
  dart.setMethodSignature(binding$6.TestDefaultBinaryMessenger, () => ({
    __proto__: dart.getMethods(binding$6.TestDefaultBinaryMessenger.__proto__),
    send: dart.fnType(async.Future$(typed_data.ByteData), [core.String, typed_data.ByteData]),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData])]),
    setMockMessageHandler: dart.fnType(dart.void, [core.String, dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData])])
  }));
  dart.setGetterSignature(binding$6.TestDefaultBinaryMessenger, () => ({
    __proto__: dart.getGetters(binding$6.TestDefaultBinaryMessenger.__proto__),
    pendingMessageCount: core.int,
    platformMessagesFinished: async.Future$(dart.void)
  }));
  dart.setLibraryUri(binding$6.TestDefaultBinaryMessenger, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.TestDefaultBinaryMessenger, () => ({
    __proto__: dart.getFields(binding$6.TestDefaultBinaryMessenger.__proto__),
    delegate: dart.finalFieldType(binary_messenger.BinaryMessenger),
    [_pendingMessages]: dart.finalFieldType(core.List$(async.Future$(typed_data.ByteData)))
  }));
  const _surfaceSize = dart.privateName(binding$6, "_surfaceSize");
  const _testTextInput = dart.privateName(binding$6, "_testTextInput");
  const _focusedEditable = dart.privateName(binding$6, "_focusedEditable");
  const _oldExceptionHandler = dart.privateName(binding$6, "_oldExceptionHandler");
  const _pendingExceptionDetails = dart.privateName(binding$6, "_pendingExceptionDetails");
  const _parentZone = dart.privateName(binding$6, "_parentZone");
  const _window$ = dart.privateName(binding$6, "_window");
  const _resetFocusedEditable = dart.privateName(binding$6, "_resetFocusedEditable");
  const _createTestCompletionHandler = dart.privateName(binding$6, "_createTestCompletionHandler");
  const _runTestBody = dart.privateName(binding$6, "_runTestBody");
  const _runTest = dart.privateName(binding$6, "_runTest");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C112;
  let C113;
  let C111;
  let C110;
  let C116;
  let C117;
  let C115;
  let C114;
  const _verifyAutoUpdateGoldensUnset = dart.privateName(binding$6, "_verifyAutoUpdateGoldensUnset");
  const _verifyReportTestExceptionUnset = dart.privateName(binding$6, "_verifyReportTestExceptionUnset");
  const _verifyErrorWidgetBuilderUnset = dart.privateName(binding$6, "_verifyErrorWidgetBuilderUnset");
  const _verifyInvariants = dart.privateName(binding$6, "_verifyInvariants");
  const TestWidgetsFlutterBinding_showAppDumpInErrors = dart.privateName(binding$6, "TestWidgetsFlutterBinding.showAppDumpInErrors");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color__value = dart.privateName(ui, "Color._value");
  let C119;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C118;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text$, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text$, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text$, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text$, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text$, "Text.overflow");
  const Text_softWrap = dart.privateName(text$, "Text.softWrap");
  const Text_locale = dart.privateName(text$, "Text.locale");
  let C122;
  const Text_textDirection = dart.privateName(text$, "Text.textDirection");
  const Text_textAlign = dart.privateName(text$, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text$, "Text.strutStyle");
  const Text_style = dart.privateName(text$, "Text.style");
  const Text_textSpan = dart.privateName(text$, "Text.textSpan");
  const Text_data = dart.privateName(text$, "Text.data");
  let C121;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  const Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  const Align_alignment = dart.privateName(basic, "Align.alignment");
  let C120;
  let C124;
  let C123;
  const BindingBase_ServicesBinding$ = class BindingBase_ServicesBinding extends binding.BindingBase {};
  (BindingBase_ServicesBinding$.new = function() {
    binding$0.ServicesBinding[dart.mixinNew].call(this);
    BindingBase_ServicesBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_ServicesBinding$.prototype;
  dart.applyMixin(BindingBase_ServicesBinding$, binding$0.ServicesBinding);
  const BindingBase_SchedulerBinding$ = class BindingBase_SchedulerBinding extends BindingBase_ServicesBinding$ {};
  (BindingBase_SchedulerBinding$.new = function() {
    binding$.SchedulerBinding[dart.mixinNew].call(this);
    BindingBase_SchedulerBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_SchedulerBinding$.prototype;
  dart.applyMixin(BindingBase_SchedulerBinding$, binding$.SchedulerBinding);
  const BindingBase_GestureBinding$ = class BindingBase_GestureBinding extends BindingBase_SchedulerBinding$ {};
  (BindingBase_GestureBinding$.new = function() {
    binding$1.GestureBinding[dart.mixinNew].call(this);
    BindingBase_GestureBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_GestureBinding$.prototype;
  dart.applyMixin(BindingBase_GestureBinding$, binding$1.GestureBinding);
  const BindingBase_SemanticsBinding$ = class BindingBase_SemanticsBinding extends BindingBase_GestureBinding$ {};
  (BindingBase_SemanticsBinding$.new = function() {
    binding$5.SemanticsBinding[dart.mixinNew].call(this);
    BindingBase_SemanticsBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_SemanticsBinding$.prototype;
  dart.applyMixin(BindingBase_SemanticsBinding$, binding$5.SemanticsBinding);
  const BindingBase_RendererBinding$ = class BindingBase_RendererBinding extends BindingBase_SemanticsBinding$ {};
  (BindingBase_RendererBinding$.new = function() {
    binding$3.RendererBinding[dart.mixinNew].call(this);
    BindingBase_RendererBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_RendererBinding$.prototype;
  dart.applyMixin(BindingBase_RendererBinding$, binding$3.RendererBinding);
  const BindingBase_PaintingBinding$ = class BindingBase_PaintingBinding extends BindingBase_RendererBinding$ {};
  (BindingBase_PaintingBinding$.new = function() {
    binding$4.PaintingBinding[dart.mixinNew].call(this);
    BindingBase_PaintingBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_PaintingBinding$.prototype;
  dart.applyMixin(BindingBase_PaintingBinding$, binding$4.PaintingBinding);
  const BindingBase_WidgetsBinding$ = class BindingBase_WidgetsBinding extends BindingBase_PaintingBinding$ {};
  (BindingBase_WidgetsBinding$.new = function() {
    binding$2.WidgetsBinding[dart.mixinNew].call(this);
    BindingBase_WidgetsBinding$.__proto__.new.call(this);
  }).prototype = BindingBase_WidgetsBinding$.prototype;
  dart.applyMixin(BindingBase_WidgetsBinding$, binding$2.WidgetsBinding);
  binding$6.TestWidgetsFlutterBinding = class TestWidgetsFlutterBinding extends BindingBase_WidgetsBinding$ {
    get showAppDumpInErrors() {
      return this[showAppDumpInErrors];
    }
    set showAppDumpInErrors(value) {
      this[showAppDumpInErrors] = value;
    }
    get window() {
      return this[_window$];
    }
    get debugPrintOverride() {
      return print.debugPrint;
    }
    get disableShadows() {
      return false;
    }
    get checkIntrinsicSizes() {
      return false;
    }
    static ensureInitialized(environment) {
      if (environment === void 0) environment = null;
      return _binding_web.ensureInitialized(environment);
    }
    initInstances() {
      let t7;
      super.initInstances();
      binding$.timeDilation = 1.0;
      _binding_web.setupHttpOverrides();
      this[_testTextInput] = (t7 = new test_text_input.TestTextInput.new({onCleared: dart.bind(this, _resetFocusedEditable)}), t7.register(), t7);
    }
    initLicenses() {
    }
    createBinaryMessenger() {
      return new binding$6.TestDefaultBinaryMessenger.new(super.createBinaryMessenger());
    }
    setLocale(languageCode, countryCode) {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 344, 14, "inTest");
        let locale = new ui.Locale.new(languageCode, countryCode === "" ? null : countryCode);
        if (dart.test(platform.isBrowser)) {
          return;
        }
        this.dispatchLocalesChanged(JSArrayOfLocale().of([locale]));
      }).bind(this)), VoidToFutureOfNull()));
    }
    setLocales(locales) {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 357, 14, "inTest");
        this.dispatchLocalesChanged(locales);
      }).bind(this)), VoidToFutureOfNull()));
    }
    readTestInitialLifecycleStateFromNativeWindow() {
      this.readInitialLifecycleStateFromNativeWindow();
    }
    setSurfaceSize(size) {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => async.async(core.Null, (function*() {
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 376, 14, "inTest");
        if (dart.equals(this[_surfaceSize], size)) return;
        this[_surfaceSize] = size;
        this.handleMetricsChanged();
      }).bind(this)), VoidToFutureOfNull()));
    }
    createViewConfiguration() {
      let t7;
      let devicePixelRatio = this.window.devicePixelRatio;
      let size = (t7 = this[_surfaceSize], t7 == null ? this.window.physicalSize['/'](devicePixelRatio) : t7);
      return new view.ViewConfiguration.new({size: size, devicePixelRatio: devicePixelRatio});
    }
    idle() {
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => {
        let completer = CompleterOfvoid().new();
        async.Timer.run(dart.fn(() => {
          completer.complete();
        }, VoidToNull()));
        return completer.future;
      }, VoidToFutureOfvoid()));
    }
    globalToLocal(point) {
      return point;
    }
    localToGlobal(point) {
      return point;
    }
    dispatchEvent(event, hitTestResult, opts) {
      let source = opts && 'source' in opts ? opts.source : C108 || CT.C108;
      if (!dart.equals(source, binding$6.TestBindingEventSource.test)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 429, 12, "source == TestBindingEventSource.test");
      super.dispatchEvent(event, hitTestResult);
    }
    get testTextInput() {
      return this[_testTextInput];
    }
    get focusedEditable() {
      return this[_focusedEditable];
    }
    set focusedEditable(value) {
      let t7;
      if (!dart.equals(this[_focusedEditable], value)) {
        this[_focusedEditable] = value;
        t7 = value;
        t7 == null ? null : t7.requestKeyboard();
      }
    }
    [_resetFocusedEditable]() {
      this[_focusedEditable] = null;
    }
    takeException() {
      let t7;
      if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 472, 12, "inTest");
      let result = (t7 = this[_pendingExceptionDetails], t7 == null ? null : t7.exception);
      this[_pendingExceptionDetails] = null;
      return result;
    }
    asyncBarrier() {
      test_async_utils.TestAsyncUtils.verifyAllScopesClosed();
    }
    [_createTestCompletionHandler](testDescription, completer) {
      return dart.fn(() => {
        if (!dart.equals(async.Zone.current, this[_parentZone])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 539, 14, "Zone.current == _parentZone");
        if (this[_pendingExceptionDetails] != null) {
          print.debugPrint = this.debugPrintOverride;
          test_exception_reporter.reportTestException(this[_pendingExceptionDetails], testDescription);
          this[_pendingExceptionDetails] = null;
        }
        if (!dart.test(completer.isCompleted)) completer.complete();
      }, VoidToNull());
    }
    reportExceptionNoticed(exception) {
    }
    [_runTest](testBody, invariantTester, description, opts) {
      let t8;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      if (!(description != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 568, 12, "description != null");
      if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 569, 12, "inTest");
      this[_oldExceptionHandler] = assertions.FlutterError.onError;
      let _exceptionCount = 0;
      assertions.FlutterError.onError = dart.fn(details => {
        if (this[_pendingExceptionDetails] != null) {
          print.debugPrint = this.debugPrintOverride;
          if (_exceptionCount === 0) {
            _exceptionCount = 2;
            assertions.FlutterError.dumpErrorToConsole(this[_pendingExceptionDetails], {forceReport: true});
          } else {
            _exceptionCount = _exceptionCount + 1;
          }
          assertions.FlutterError.dumpErrorToConsole(details, {forceReport: true});
          this[_pendingExceptionDetails] = new assertions.FlutterErrorDetails.new({exception: "Multiple exceptions (" + dart.str(_exceptionCount) + ") were detected during the running of the current test, and at least one was unexpected.", library: "Flutter test framework"});
        } else {
          this.reportExceptionNoticed(details);
          this[_pendingExceptionDetails] = details;
        }
      }, FlutterErrorDetailsToNull());
      let testCompleter = CompleterOfvoid().new();
      let testCompletionHandler = this[_createTestCompletionHandler](description, testCompleter);
      const handleUncaughtError = (exception, stack) => {
        let t7, t7$;
        if (dart.test(testCompleter.isCompleted)) {
          print.debugPrint = this.debugPrintOverride;
          assertions.FlutterError.dumpErrorToConsole(new assertions.FlutterErrorDetails.new({exception: exception, stack: binding$6._unmangle(stack), context: new assertions.ErrorDescription.new("running a test (but after the test had completed)"), library: "Flutter test framework"}), {forceReport: true});
          return;
        }
        let treeDump = null;
        try {
          treeDump = (t7$ = (t7 = this.renderViewElement, t7 == null ? null : t7.toDiagnosticsNode()), t7$ == null ? diagnostics.DiagnosticsNode.message("<no tree>") : t7$);
          treeDump.toStringDeep();
        } catch (e) {
          let exception = dart.getThrown(e);
          treeDump = diagnostics.DiagnosticsNode.message("<additional error caught while dumping tree: " + dart.str(exception) + ">", {level: diagnostics.DiagnosticLevel.error});
        }
        let omittedFrames = JSArrayOfDiagnosticsNode().of([]);
        let stackLinesToOmit = stack_manipulation.reportExpectCall(stack, omittedFrames);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: binding$6._unmangle(stack), context: new assertions.ErrorDescription.new("running a test"), library: "Flutter test framework", stackFilter: dart.fn(frames => assertions.FlutterError.defaultStackFilter(frames[$skip](stackLinesToOmit)), IterableOfStringToIterableOfString()), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            if (dart.notNull(stackLinesToOmit) > 0) yield* omittedFrames;
            if (dart.test(this.showAppDumpInErrors)) {
              yield new (DiagnosticsPropertyOfDiagnosticsNode()).new("At the time of the failure, the widget tree looked as follows", treeDump, {linePrefix: "# ", style: diagnostics.DiagnosticsTreeStyle.flat});
            }
            if (description[$isNotEmpty]) yield new (DiagnosticsPropertyOfString()).new("The test description was", description, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
        if (!(this[_parentZone] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 667, 14, "_parentZone != null");
        if (!(this[_pendingExceptionDetails] != null)) dart.assertFailed("A test overrode FlutterError.onError but either failed to return it to its original state, or had unexpected additional errors that it could not handle. Typically, this is caused by using expect() before restoring FlutterError.onError.", "org-dartlang-app:///packages/flutter_test/src/binding.dart", 668, 14, "_pendingExceptionDetails != null");
        this[_parentZone].run(dart.void, testCompletionHandler);
      };
      dart.fn(handleUncaughtError, dynamicAndStackTraceTovoid());
      let errorHandlingZoneSpecification = new async._ZoneSpecification.new({handleUncaughtError: dart.fn((self, parent, zone, exception, stack) => {
          handleUncaughtError(exception, stack);
        }, ZoneAndZoneDelegateAndZone__ToNull())});
      this[_parentZone] = async.Zone.current;
      let testZone = this[_parentZone].fork({specification: errorHandlingZoneSpecification});
      testZone.runBinary(FutureOfvoid(), VoidToFutureOfvoid(), VoidTovoid(), dart.bind(this, _runTestBody), testBody, invariantTester).whenComplete(testCompletionHandler);
      t8 = timeout;
      t8 == null ? null : t8.catchError(handleUncaughtError);
      return testCompleter.future;
    }
    [_runTestBody](testBody, invariantTester) {
      return async.async(dart.void, (function* _runTestBody() {
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 685, 12, "inTest");
        binding$2.runApp(new container.Container.new({key: new framework.UniqueKey.new(), child: binding$6.TestWidgetsFlutterBinding._preTestMessage, $creationLocationd_0dea112b090073317d4: C110 || CT.C110}));
        yield this.pump();
        let autoUpdateGoldensBeforeTest = dart.test(goldens.autoUpdateGoldenFiles) && !dart.test(platform.isBrowser);
        let reportTestExceptionBeforeTest = test_exception_reporter.reportTestException;
        let errorWidgetBuilderBeforeTest = framework.ErrorWidget.builder;
        yield testBody();
        this.asyncBarrier();
        if (this[_pendingExceptionDetails] == null) {
          binding$2.runApp(new container.Container.new({key: new framework.UniqueKey.new(), child: binding$6.TestWidgetsFlutterBinding._postTestMessage, $creationLocationd_0dea112b090073317d4: C114 || CT.C114}));
          yield this.pump();
          invariantTester();
          this[_verifyAutoUpdateGoldensUnset](autoUpdateGoldensBeforeTest && !dart.test(platform.isBrowser));
          this[_verifyReportTestExceptionUnset](reportTestExceptionBeforeTest);
          this[_verifyErrorWidgetBuilderUnset](errorWidgetBuilderBeforeTest);
          this[_verifyInvariants]();
        }
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 711, 12, "inTest");
        this.asyncBarrier();
      }).bind(this));
    }
    [_verifyInvariants]() {
      if (!dart.test(this.debugAssertNoTransientCallbacks("An animation is still running even after the widget tree was disposed."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 716, 12, "debugAssertNoTransientCallbacks(\n      'An animation is still running even after the widget tree was disposed.'\n    )");
      if (!dart.test(debug.debugAssertAllFoundationVarsUnset("The value of a foundation debug variable was changed by the test.", {debugPrintOverride: this.debugPrintOverride}))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 719, 12, "debugAssertAllFoundationVarsUnset(\n      'The value of a foundation debug variable was changed by the test.',\n      debugPrintOverride: debugPrintOverride,\n    )");
      if (!dart.test(debug$.debugAssertAllGesturesVarsUnset("The value of a gestures debug variable was changed by the test."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 723, 12, "debugAssertAllGesturesVarsUnset(\n      'The value of a gestures debug variable was changed by the test.',\n    )");
      if (!dart.test(debug$3.debugAssertAllPaintingVarsUnset("The value of a painting debug variable was changed by the test.", {debugDisableShadowsOverride: this.disableShadows}))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 726, 12, "debugAssertAllPaintingVarsUnset(\n      'The value of a painting debug variable was changed by the test.',\n      debugDisableShadowsOverride: disableShadows,\n    )");
      if (!dart.test(debug$2.debugAssertAllRenderVarsUnset("The value of a rendering debug variable was changed by the test.", {debugCheckIntrinsicSizesOverride: this.checkIntrinsicSizes}))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 730, 12, "debugAssertAllRenderVarsUnset(\n      'The value of a rendering debug variable was changed by the test.',\n      debugCheckIntrinsicSizesOverride: checkIntrinsicSizes,\n    )");
      if (!dart.test(debug$1.debugAssertAllWidgetVarsUnset("The value of a widget debug variable was changed by the test."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 734, 12, "debugAssertAllWidgetVarsUnset(\n      'The value of a widget debug variable was changed by the test.',\n    )");
      if (!dart.test(debug$0.debugAssertAllSchedulerVarsUnset("The value of a scheduler debug variable was changed by the test."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 737, 12, "debugAssertAllSchedulerVarsUnset(\n      'The value of a scheduler debug variable was changed by the test.',\n    )");
    }
    [_verifyAutoUpdateGoldensUnset](valueBeforeTest) {
      if (!dart.test(dart.fn(() => {
        if (!dart.equals(goldens.autoUpdateGoldenFiles, valueBeforeTest)) {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: assertions.FlutterError.new("The value of autoUpdateGoldenFiles was changed by the test."), stack: core.StackTrace.current, library: "Flutter test framework"}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 743, 12, "() {\n      if (autoUpdateGoldenFiles != valueBeforeTest) {\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: FlutterError(\n              'The value of autoUpdateGoldenFiles was changed by the test.',\n          ),\n          stack: StackTrace.current,\n          library: 'Flutter test framework',\n        ));\n      }\n      return true;\n    }()");
    }
    [_verifyReportTestExceptionUnset](valueBeforeTest) {
      if (!dart.test(dart.fn(() => {
        if (!dart.equals(test_exception_reporter.reportTestException, valueBeforeTest)) {
          test_exception_reporter.reportTestException = valueBeforeTest;
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: assertions.FlutterError.new("The value of reportTestException was changed by the test."), stack: core.StackTrace.current, library: "Flutter test framework"}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 758, 12, "() {\n      if (reportTestException != valueBeforeTest) {\n        // We can't report this error to their modified reporter because we\n        // can't be guaranteed that their reporter will cause the test to fail.\n        // So we reset the error reporter to its initial value and then report\n        // this error.\n        reportTestException = valueBeforeTest;\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: FlutterError(\n            'The value of reportTestException was changed by the test.',\n          ),\n          stack: StackTrace.current,\n          library: 'Flutter test framework',\n        ));\n      }\n      return true;\n    }()");
    }
    [_verifyErrorWidgetBuilderUnset](valueBeforeTest) {
      if (!dart.test(dart.fn(() => {
        if (!dart.equals(framework.ErrorWidget.builder, valueBeforeTest)) {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: assertions.FlutterError.new("The value of ErrorWidget.builder was changed by the test."), stack: core.StackTrace.current, library: "Flutter test framework"}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 778, 12, "() {\n      if (ErrorWidget.builder != valueBeforeTest) {\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: FlutterError(\n              'The value of ErrorWidget.builder was changed by the test.',\n          ),\n          stack: StackTrace.current,\n          library: 'Flutter test framework',\n        ));\n      }\n      return true;\n    }()");
    }
    postTest() {
      if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 794, 12, "inTest");
      assertions.FlutterError.onError = this[_oldExceptionHandler];
      this[_pendingExceptionDetails] = null;
      this[_parentZone] = null;
      this.buildOwner.focusManager = new focus_manager.FocusManager.new();
      if (!!dart.test(binding$3.RendererBinding.instance.mouseTracker.mouseIsConnected)) dart.assertFailed("The MouseTracker thinks that there is still a mouse connected, which indicates that a " + "test has not removed the mouse pointer which it added. Call removePointer on the " + "active mouse gesture to remove the mouse pointer.", "org-dartlang-app:///packages/flutter_test/src/binding.dart", 799, 12, "!RendererBinding.instance.mouseTracker.mouseIsConnected");
    }
  };
  (binding$6.TestWidgetsFlutterBinding.new = function() {
    this[_surfaceSize] = null;
    this[_testTextInput] = null;
    this[_focusedEditable] = null;
    this[_oldExceptionHandler] = null;
    this[_pendingExceptionDetails] = null;
    this[showAppDumpInErrors] = false;
    this[_parentZone] = null;
    this[_window$] = new window.TestWindow.new({window: ui.window});
    binding$6.TestWidgetsFlutterBinding.__proto__.new.call(this);
    print.debugPrint = this.debugPrintOverride;
    debug$3.debugDisableShadows = this.disableShadows;
    debug$2.debugCheckIntrinsicSizes = this.checkIntrinsicSizes;
  }).prototype = binding$6.TestWidgetsFlutterBinding.prototype;
  dart.addTypeTests(binding$6.TestWidgetsFlutterBinding);
  const showAppDumpInErrors = TestWidgetsFlutterBinding_showAppDumpInErrors;
  dart.setMethodSignature(binding$6.TestWidgetsFlutterBinding, () => ({
    __proto__: dart.getMethods(binding$6.TestWidgetsFlutterBinding.__proto__),
    setLocale: dart.fnType(async.Future$(dart.void), [core.String, core.String]),
    setLocales: dart.fnType(async.Future$(dart.void), [core.List$(ui.Locale)]),
    readTestInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    setSurfaceSize: dart.fnType(async.Future$(dart.void), [ui.Size]),
    idle: dart.fnType(async.Future$(dart.void), []),
    globalToLocal: dart.fnType(ui.Offset, [ui.Offset]),
    localToGlobal: dart.fnType(ui.Offset, [ui.Offset]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestResult], {source: binding$6.TestBindingEventSource}),
    [_resetFocusedEditable]: dart.fnType(dart.void, []),
    takeException: dart.fnType(dart.dynamic, []),
    asyncBarrier: dart.fnType(dart.void, []),
    [_createTestCompletionHandler]: dart.fnType(dart.fnType(dart.void, []), [core.String, async.Completer$(dart.void)]),
    reportExceptionNoticed: dart.fnType(dart.void, [assertions.FlutterErrorDetails]),
    [_runTest]: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), []), dart.fnType(dart.void, []), core.String], {timeout: async.Future$(dart.void)}),
    [_runTestBody]: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), []), dart.fnType(dart.void, [])]),
    [_verifyInvariants]: dart.fnType(dart.void, []),
    [_verifyAutoUpdateGoldensUnset]: dart.fnType(dart.void, [core.bool]),
    [_verifyReportTestExceptionUnset]: dart.fnType(dart.void, [dart.fnType(dart.void, [assertions.FlutterErrorDetails, core.String])]),
    [_verifyErrorWidgetBuilderUnset]: dart.fnType(dart.void, [dart.fnType(framework.Widget, [assertions.FlutterErrorDetails])]),
    postTest: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(binding$6.TestWidgetsFlutterBinding, () => ({
    __proto__: dart.getGetters(binding$6.TestWidgetsFlutterBinding.__proto__),
    window: window.TestWindow,
    debugPrintOverride: dart.fnType(dart.void, [core.String], {wrapWidth: core.int}),
    disableShadows: core.bool,
    checkIntrinsicSizes: core.bool,
    testTextInput: test_text_input.TestTextInput,
    focusedEditable: editable_text.EditableTextState
  }));
  dart.setSetterSignature(binding$6.TestWidgetsFlutterBinding, () => ({
    __proto__: dart.getSetters(binding$6.TestWidgetsFlutterBinding.__proto__),
    focusedEditable: editable_text.EditableTextState
  }));
  dart.setLibraryUri(binding$6.TestWidgetsFlutterBinding, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.TestWidgetsFlutterBinding, () => ({
    __proto__: dart.getFields(binding$6.TestWidgetsFlutterBinding.__proto__),
    [_window$]: dart.finalFieldType(window.TestWindow),
    [_surfaceSize]: dart.fieldType(ui.Size),
    [_testTextInput]: dart.fieldType(test_text_input.TestTextInput),
    [_focusedEditable]: dart.fieldType(editable_text.EditableTextState),
    [_oldExceptionHandler]: dart.fieldType(dart.fnType(dart.void, [assertions.FlutterErrorDetails])),
    [_pendingExceptionDetails]: dart.fieldType(assertions.FlutterErrorDetails),
    showAppDumpInErrors: dart.fieldType(core.bool),
    [_parentZone]: dart.fieldType(async.Zone)
  }));
  dart.defineLazy(binding$6.TestWidgetsFlutterBinding, {
    /*binding$6.TestWidgetsFlutterBinding._messageStyle*/get _messageStyle() {
      return C118 || CT.C118;
    },
    /*binding$6.TestWidgetsFlutterBinding._preTestMessage*/get _preTestMessage() {
      return C120 || CT.C120;
    },
    /*binding$6.TestWidgetsFlutterBinding._postTestMessage*/get _postTestMessage() {
      return C123 || CT.C123;
    }
  });
  const _currentFakeAsync = dart.privateName(binding$6, "_currentFakeAsync");
  const _pendingAsyncTasks = dart.privateName(binding$6, "_pendingAsyncTasks");
  const _clock = dart.privateName(binding$6, "_clock");
  const _phase = dart.privateName(binding$6, "_phase");
  const _timeout = dart.privateName(binding$6, "_timeout");
  const _timeoutStopwatch = dart.privateName(binding$6, "_timeoutStopwatch");
  const _timeoutTimer = dart.privateName(binding$6, "_timeoutTimer");
  const _timeoutCompleter = dart.privateName(binding$6, "_timeoutCompleter");
  let C125;
  const Timeout_scaleFactor = dart.privateName(timeout, "Timeout.scaleFactor");
  const Timeout_duration = dart.privateName(timeout, "Timeout.duration");
  let C126;
  let C127;
  const _checkTimeout = dart.privateName(binding$6, "_checkTimeout");
  binding$6.AutomatedTestWidgetsFlutterBinding = class AutomatedTestWidgetsFlutterBinding extends binding$6.TestWidgetsFlutterBinding {
    initInstances() {
      super.initInstances();
      _binding_web.mockFlutterAssets();
    }
    get clock() {
      return this[_clock];
    }
    get debugPrintOverride() {
      return C125 || CT.C125;
    }
    get disableShadows() {
      return true;
    }
    get checkIntrinsicSizes() {
      return true;
    }
    get defaultTestTimeout() {
      return C126 || CT.C126;
    }
    get inTest() {
      return this[_currentFakeAsync] != null;
    }
    get microtaskCount() {
      return this[_currentFakeAsync].microtaskCount;
    }
    pump(duration, newPhase) {
      if (duration === void 0) duration = null;
      if (newPhase === void 0) newPhase = C93 || CT.C93;
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => {
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 849, 14, "inTest");
        if (!(this[_clock] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 850, 14, "_clock != null");
        if (duration != null) this[_currentFakeAsync].elapse(duration);
        this[_phase] = newPhase;
        if (dart.test(this.hasScheduledFrame)) {
          this.addTime(C127 || CT.C127);
          this[_currentFakeAsync].flushMicrotasks();
          this.handleBeginFrame(new core.Duration.new({milliseconds: this[_clock].now().millisecondsSinceEpoch}));
          this[_currentFakeAsync].flushMicrotasks();
          this.handleDrawFrame();
        }
        this[_currentFakeAsync].flushMicrotasks();
        return FutureOfvoid().value();
      }, VoidToFutureOfvoid()));
    }
    runAsync(T, callback, opts) {
      let additionalTime = opts && 'additionalTime' in opts ? opts.additionalTime : C82 || CT.C82;
      if (!(additionalTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 873, 12, "additionalTime != null");
      if (!dart.test(dart.fn(() => {
        if (this[_pendingAsyncTasks] == null) return true;
        dart.throw(new expect.TestFailure.new("Reentrant call to runAsync() denied.\n" + "runAsync() was called, then before its future completed, it " + "was called again. You must wait for the first returned future " + "to complete before calling runAsync() again."));
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 874, 12, "() {\n      if (_pendingAsyncTasks == null)\n        return true;\n      throw test_package.TestFailure(\n          'Reentrant call to runAsync() denied.\\n'\n          'runAsync() was called, then before its future completed, it '\n          'was called again. You must wait for the first returned future '\n          'to complete before calling runAsync() again.'\n      );\n    }()");
      let realAsyncZone = async.Zone.current.fork({specification: new async._ZoneSpecification.new({scheduleMicrotask: dart.fn((self, parent, zone, f) => {
            async.Zone.root.scheduleMicrotask(f);
          }, ZoneAndZoneDelegateAndZone__ToNull$()), createTimer: dart.fn((self, parent, zone, duration, f) => async.Zone.root.createTimer(duration, f), ZoneAndZoneDelegateAndZone__ToTimer()), createPeriodicTimer: dart.fn((self, parent, zone, period, f) => async.Zone.root.createPeriodicTimer(period, f), ZoneAndZoneDelegateAndZone__ToTimer$())})});
      this.addTime(additionalTime);
      return realAsyncZone.run(async.Future$(T), dart.fn(() => {
        this[_pendingAsyncTasks] = CompleterOfvoid().new();
        return callback().catchError(dart.fn((exception, stack) => {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "Flutter test framework", context: new assertions.ErrorDescription.new("while running async test code")}));
          return null;
        }, dynamicAndStackTraceToNull())).whenComplete(dart.fn(() => {
          this[_pendingAsyncTasks].complete();
          this[_pendingAsyncTasks] = null;
        }, VoidToNull()));
      }, dart.fnType(async.Future$(T), [])));
    }
    ensureFrameCallbacksRegistered() {
      if (!(this.window.onDrawFrame == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 926, 12, "window.onDrawFrame == null");
      if (!(this.window.onBeginFrame == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 927, 12, "window.onBeginFrame == null");
    }
    scheduleWarmUpFrame() {
      this.handleBeginFrame(null);
      this[_currentFakeAsync].flushMicrotasks();
      this.handleDrawFrame();
      this[_currentFakeAsync].flushMicrotasks();
    }
    scheduleAttachRootWidget(rootWidget) {
      this.attachRootWidget(rootWidget);
      this[_currentFakeAsync].flushMicrotasks();
    }
    idle() {
      let result = super.idle();
      this[_currentFakeAsync].elapse(core.Duration.zero);
      return result;
    }
    drawFrame() {
      if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 960, 12, "inTest");
      try {
        this.debugBuildingDirtyElements = true;
        this.buildOwner.buildScope(this.renderViewElement);
        if (!dart.equals(this[_phase], binding$6.EnginePhase.build)) {
          if (!(this.renderView != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 965, 16, "renderView != null");
          this.pipelineOwner.flushLayout();
          if (!dart.equals(this[_phase], binding$6.EnginePhase.layout)) {
            this.pipelineOwner.flushCompositingBits();
            if (!dart.equals(this[_phase], binding$6.EnginePhase.compositingBits)) {
              this.pipelineOwner.flushPaint();
              if (!dart.equals(this[_phase], binding$6.EnginePhase.paint)) {
                this.renderView.compositeFrame();
                if (!dart.equals(this[_phase], binding$6.EnginePhase.composite)) {
                  this.pipelineOwner.flushSemantics();
                  if (!(dart.equals(this[_phase], binding$6.EnginePhase.flushSemantics) || dart.equals(this[_phase], binding$6.EnginePhase.sendSemanticsUpdate))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 975, 24, "_phase == EnginePhase.flushSemantics ||\n                       _phase == EnginePhase.sendSemanticsUpdate");
                }
              }
            }
          }
        }
        this.buildOwner.finalizeTree();
      } finally {
        this.debugBuildingDirtyElements = false;
      }
    }
    [_checkTimeout](timer) {
      if (!dart.equals(this[_timeoutTimer], timer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 994, 12, "_timeoutTimer == timer");
      if (!(this[_timeout] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 995, 12, "_timeout != null");
      if (dart.test(this[_timeoutStopwatch].elapsed['>'](this[_timeout]))) {
        this[_timeoutCompleter].completeError(new async.TimeoutException.new("The test exceeded the timeout. It may have hung.\n" + "Consider using \"tester.binding.addTime\" to increase the timeout before expensive operations.", this[_timeout]));
      }
    }
    addTime(duration) {
      if (this[_timeout] != null) this[_timeout] = this[_timeout]['+'](duration);
    }
    runTest(testBody, invariantTester, opts) {
      let t8;
      let description = opts && 'description' in opts ? opts.description : "";
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      if (!(description != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1020, 12, "description != null");
      if (!!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1021, 12, "!inTest");
      if (!(this[_currentFakeAsync] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1022, 12, "_currentFakeAsync == null");
      if (!(this[_clock] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1023, 12, "_clock == null");
      this[_timeout] = timeout;
      if (this[_timeout] != null) {
        this[_timeoutStopwatch] = (t8 = new core.Stopwatch.new(), t8.start(), t8);
        this[_timeoutTimer] = async.Timer.periodic(C82 || CT.C82, dart.bind(this, _checkTimeout));
        this[_timeoutCompleter] = CompleterOfvoid().new();
      }
      let fakeAsync = new async$._FakeAsync.new();
      this[_currentFakeAsync] = fakeAsync;
      this[_clock] = fakeAsync.getClock(new core.DateTime.utc(2015, 1, 1));
      let testBodyResult = null;
      fakeAsync.run(dart.fn(localFakeAsync => {
        let t8;
        if (!fakeAsync[$_equals](this[_currentFakeAsync])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1037, 14, "fakeAsync == _currentFakeAsync");
        if (!fakeAsync[$_equals](localFakeAsync)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1038, 14, "fakeAsync == localFakeAsync");
        testBodyResult = this[_runTest](testBody, invariantTester, description, {timeout: (t8 = this[_timeoutCompleter], t8 == null ? null : t8.future)});
        if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1040, 14, "inTest");
      }, FakeAsyncToNull()));
      return FutureOfvoid().microtask(dart.fn(() => async.async(dart.void, (function*() {
        let resultFuture = testBodyResult.then(dart.void, dart.fn(_ => {
        }, voidToNull()));
        fakeAsync.flushMicrotasks();
        while (this[_pendingAsyncTasks] != null) {
          yield this[_pendingAsyncTasks].future;
          fakeAsync.flushMicrotasks();
        }
        return resultFuture;
      }).bind(this)), VoidToFutureOfvoid()));
    }
    asyncBarrier() {
      if (!(this[_currentFakeAsync] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1066, 12, "_currentFakeAsync != null");
      this[_currentFakeAsync].flushMicrotasks();
      super.asyncBarrier();
    }
    [_verifyInvariants]() {
      super[_verifyInvariants]();
      if (!dart.test(dart.fn(() => {
        if (this[_currentFakeAsync].periodicTimerCount === 0 && this[_currentFakeAsync].nonPeriodicTimerCount === 0) {
          return true;
        }
        print.debugPrint("Pending timers:");
        for (let timerInfo of this[_currentFakeAsync].pendingTimersDebugInfo) {
          let firstLineEnd = timerInfo[$indexOf]("\n");
          if (!(firstLineEnd !== -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1084, 16, "firstLineEnd != -1");
          let firstLine = timerInfo[$substring](0, firstLineEnd);
          let stackTrace = timerInfo[$substring](firstLineEnd + 1);
          print.debugPrint(firstLine);
          assertions.debugPrintStack({stackTrace: new core._StringStackTrace.new(stackTrace)});
          print.debugPrint("");
        }
        return false;
      }, VoidTobool())())) dart.assertFailed("A Timer is still pending even after the widget tree was disposed.", "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1075, 12, "() {\n      if (   _currentFakeAsync.periodicTimerCount == 0\n          && _currentFakeAsync.nonPeriodicTimerCount == 0) {\n        return true;\n      }\n\n      debugPrint('Pending timers:');\n      for (String timerInfo in _currentFakeAsync.pendingTimersDebugInfo) {\n        final int firstLineEnd = timerInfo.indexOf('\\n');\n        assert(firstLineEnd != -1);\n\n        // No need to include the newline.\n        final String firstLine = timerInfo.substring(0, firstLineEnd);\n        final String stackTrace = timerInfo.substring(firstLineEnd + 1);\n\n        debugPrint(firstLine);\n        debugPrintStack(stackTrace: StackTrace.fromString(stackTrace));\n        debugPrint('');\n      }\n      return false;\n    }()");
      if (!(this[_currentFakeAsync].microtaskCount === 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1097, 12, "_currentFakeAsync.microtaskCount == 0");
    }
    postTest() {
      let t8;
      super.postTest();
      if (!(this[_currentFakeAsync] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1103, 12, "_currentFakeAsync != null");
      if (!(this[_clock] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1104, 12, "_clock != null");
      this[_clock] = null;
      this[_currentFakeAsync] = null;
      this[_timeoutCompleter] = null;
      t8 = this[_timeoutTimer];
      t8 == null ? null : t8.cancel();
      this[_timeoutTimer] = null;
      this[_timeoutStopwatch] = null;
      this[_timeout] = null;
    }
  };
  (binding$6.AutomatedTestWidgetsFlutterBinding.new = function() {
    this[_currentFakeAsync] = null;
    this[_pendingAsyncTasks] = null;
    this[_clock] = null;
    this[_phase] = binding$6.EnginePhase.sendSemanticsUpdate;
    this[_timeout] = null;
    this[_timeoutStopwatch] = null;
    this[_timeoutTimer] = null;
    this[_timeoutCompleter] = null;
    binding$6.AutomatedTestWidgetsFlutterBinding.__proto__.new.call(this);
    ;
  }).prototype = binding$6.AutomatedTestWidgetsFlutterBinding.prototype;
  dart.addTypeTests(binding$6.AutomatedTestWidgetsFlutterBinding);
  dart.setMethodSignature(binding$6.AutomatedTestWidgetsFlutterBinding, () => ({
    __proto__: dart.getMethods(binding$6.AutomatedTestWidgetsFlutterBinding.__proto__),
    pump: dart.fnType(async.Future$(dart.void), [], [core.Duration, binding$6.EnginePhase]),
    runAsync: dart.gFnType(T => [async.Future$(T), [dart.fnType(async.Future$(T), [])], {additionalTime: core.Duration}]),
    [_checkTimeout]: dart.fnType(dart.void, [async.Timer]),
    addTime: dart.fnType(dart.void, [core.Duration]),
    runTest: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), []), dart.fnType(dart.void, [])], {description: core.String, timeout: core.Duration})
  }));
  dart.setGetterSignature(binding$6.AutomatedTestWidgetsFlutterBinding, () => ({
    __proto__: dart.getGetters(binding$6.AutomatedTestWidgetsFlutterBinding.__proto__),
    clock: time.Clock,
    defaultTestTimeout: timeout.Timeout,
    inTest: core.bool,
    microtaskCount: core.int
  }));
  dart.setLibraryUri(binding$6.AutomatedTestWidgetsFlutterBinding, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.AutomatedTestWidgetsFlutterBinding, () => ({
    __proto__: dart.getFields(binding$6.AutomatedTestWidgetsFlutterBinding.__proto__),
    [_currentFakeAsync]: dart.fieldType(async$.FakeAsync),
    [_pendingAsyncTasks]: dart.fieldType(async.Completer$(dart.void)),
    [_clock]: dart.fieldType(time.Clock),
    [_phase]: dart.fieldType(binding$6.EnginePhase),
    [_timeout]: dart.fieldType(core.Duration),
    [_timeoutStopwatch]: dart.fieldType(core.Stopwatch),
    [_timeoutTimer]: dart.fieldType(async.Timer),
    [_timeoutCompleter]: dart.fieldType(async.Completer$(dart.void))
  }));
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  binding$6.LiveTestWidgetsFlutterBindingFramePolicy = class LiveTestWidgetsFlutterBindingFramePolicy extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (binding$6.LiveTestWidgetsFlutterBindingFramePolicy.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = binding$6.LiveTestWidgetsFlutterBindingFramePolicy.prototype;
  dart.addTypeTests(binding$6.LiveTestWidgetsFlutterBindingFramePolicy);
  dart.setLibraryUri(binding$6.LiveTestWidgetsFlutterBindingFramePolicy, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.LiveTestWidgetsFlutterBindingFramePolicy, () => ({
    __proto__: dart.getFields(binding$6.LiveTestWidgetsFlutterBindingFramePolicy.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(binding$6.LiveTestWidgetsFlutterBindingFramePolicy, ['toString']);
  binding$6.LiveTestWidgetsFlutterBindingFramePolicy.onlyPumps = C128 || CT.C128;
  binding$6.LiveTestWidgetsFlutterBindingFramePolicy.fadePointers = C129 || CT.C129;
  binding$6.LiveTestWidgetsFlutterBindingFramePolicy.fullyLive = C130 || CT.C130;
  binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark = C131 || CT.C131;
  binding$6.LiveTestWidgetsFlutterBindingFramePolicy.values = C132 || CT.C132;
  const _inTest = dart.privateName(binding$6, "_inTest");
  const _pendingFrame = dart.privateName(binding$6, "_pendingFrame");
  const _expectingFrame = dart.privateName(binding$6, "_expectingFrame");
  const _viewNeedsPaint = dart.privateName(binding$6, "_viewNeedsPaint");
  const _runningAsyncTasks = dart.privateName(binding$6, "_runningAsyncTasks");
  const _doDrawThisFrame = dart.privateName(binding$6, "_doDrawThisFrame");
  let C134;
  const Clock__time = dart.privateName(time, "Clock._time");
  let C133;
  const _handleViewNeedsPaint = dart.privateName(binding$6, "_handleViewNeedsPaint");
  const _pointers = dart.privateName(binding$6, "_pointers");
  const _setDescription = dart.privateName(binding$6, "_setDescription");
  const LiveTestWidgetsFlutterBinding_framePolicy = dart.privateName(binding$6, "LiveTestWidgetsFlutterBinding.framePolicy");
  const LiveTestWidgetsFlutterBinding_deviceEventDispatcher = dart.privateName(binding$6, "LiveTestWidgetsFlutterBinding.deviceEventDispatcher");
  binding$6.LiveTestWidgetsFlutterBinding = class LiveTestWidgetsFlutterBinding extends binding$6.TestWidgetsFlutterBinding {
    get framePolicy() {
      return this[framePolicy];
    }
    set framePolicy(value) {
      this[framePolicy] = value;
    }
    get deviceEventDispatcher() {
      return this[deviceEventDispatcher];
    }
    set deviceEventDispatcher(value) {
      this[deviceEventDispatcher] = value;
    }
    get inTest() {
      return this[_inTest];
    }
    get clock() {
      return C133 || CT.C133;
    }
    get microtaskCount() {
      if (!false) dart.assertFailed("microtaskCount cannot be reported when running in real time", "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1199, 12, "false");
      return -1;
    }
    get defaultTestTimeout() {
      return timeout.Timeout.none;
    }
    addTime(duration) {
    }
    scheduleFrame() {
      if (dart.equals(this.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark)) return;
      super.scheduleFrame();
    }
    scheduleForcedFrame() {
      if (dart.equals(this.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark)) return;
      super.scheduleForcedFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      if (!(this[_doDrawThisFrame] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1284, 12, "_doDrawThisFrame == null");
      if (dart.test(this[_expectingFrame]) || dart.equals(this.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.fullyLive) || dart.equals(this.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark) || dart.equals(this.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.fadePointers) && dart.test(this[_viewNeedsPaint])) {
        this[_doDrawThisFrame] = true;
        super.handleBeginFrame(rawTimeStamp);
      } else {
        this[_doDrawThisFrame] = false;
      }
    }
    handleDrawFrame() {
      if (!(this[_doDrawThisFrame] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1298, 12, "_doDrawThisFrame != null");
      if (dart.test(this[_doDrawThisFrame])) super.handleDrawFrame();
      this[_doDrawThisFrame] = null;
      this[_viewNeedsPaint] = false;
      if (dart.test(this[_expectingFrame])) {
        if (!(this[_pendingFrame] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1304, 14, "_pendingFrame != null");
        this[_pendingFrame].complete();
        this[_pendingFrame] = null;
        this[_expectingFrame] = false;
      } else if (!dart.equals(this.framePolicy, binding$6.LiveTestWidgetsFlutterBindingFramePolicy.benchmark)) {
        this.window.scheduleFrame();
      }
    }
    initRenderView() {
      if (!(this.renderView == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1315, 12, "renderView == null");
      this.renderView = new binding$6._LiveTestRenderView.new({configuration: this.createViewConfiguration(), onNeedPaint: dart.bind(this, _handleViewNeedsPaint), window: this.window});
      this.renderView.prepareInitialFrame();
    }
    get renderView() {
      return binding$6._LiveTestRenderView._check(super.renderView);
    }
    set renderView(value) {
      super.renderView = value;
    }
    [_handleViewNeedsPaint]() {
      this[_viewNeedsPaint] = true;
      this.renderView.markNeedsPaint();
    }
    dispatchEvent(event, hitTestResult, opts) {
      let source = opts && 'source' in opts ? opts.source : C108 || CT.C108;
      switch (source) {
        case C107 || CT.C107:
        {
          if (!dart.test(this.renderView[_pointers][$containsKey](event.pointer))) {
            if (!dart.test(event.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1350, 18, "event.down");
            this.renderView[_pointers][$_set](event.pointer, new binding$6._LiveTestPointerRecord.new(event.pointer, event.position));
          } else {
            this.renderView[_pointers][$_get](event.pointer).position = event.position;
            if (!dart.test(event.down)) this.renderView[_pointers][$_get](event.pointer).decay = -2;
          }
          this[_handleViewNeedsPaint]();
          super.dispatchEvent(event, hitTestResult, {source: source});
          break;
        }
        case C108 || CT.C108:
        {
          if (this.deviceEventDispatcher != null) this.deviceEventDispatcher.dispatchEvent(event, hitTestResult);
          break;
        }
      }
    }
    pump(duration, newPhase) {
      if (duration === void 0) duration = null;
      if (newPhase === void 0) newPhase = C93 || CT.C93;
      if (!dart.equals(newPhase, binding$6.EnginePhase.sendSemanticsUpdate)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1369, 12, "newPhase == EnginePhase.sendSemanticsUpdate");
      if (!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1370, 12, "inTest");
      if (!!dart.test(this[_expectingFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1371, 12, "!_expectingFrame");
      if (!(this[_pendingFrame] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1372, 12, "_pendingFrame == null");
      return test_async_utils.TestAsyncUtils.guard(dart.void, dart.fn(() => {
        if (duration != null) {
          async.Timer.new(duration, dart.fn(() => {
            this[_expectingFrame] = true;
            this.scheduleFrame();
          }, VoidToNull()));
        } else {
          this[_expectingFrame] = true;
          this.scheduleFrame();
        }
        this[_pendingFrame] = CompleterOfvoid().new();
        return this[_pendingFrame].future;
      }, VoidToFutureOfvoid()));
    }
    runAsync(T, callback, opts) {
      let additionalTime = opts && 'additionalTime' in opts ? opts.additionalTime : C82 || CT.C82;
      return async.async(T, (function* runAsync() {
        if (!dart.test(dart.fn(() => {
          if (!dart.test(this[_runningAsyncTasks])) return true;
          dart.throw(new expect.TestFailure.new("Reentrant call to runAsync() denied.\n" + "runAsync() was called, then before its future completed, it " + "was called again. You must wait for the first returned future " + "to complete before calling runAsync() again."));
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1393, 12, "() {\n      if (!_runningAsyncTasks)\n        return true;\n      throw test_package.TestFailure(\n          'Reentrant call to runAsync() denied.\\n'\n          'runAsync() was called, then before its future completed, it '\n          'was called again. You must wait for the first returned future '\n          'to complete before calling runAsync() again.'\n      );\n    }()");
        this.addTime(additionalTime);
        this[_runningAsyncTasks] = true;
        try {
          return yield callback();
        } catch (e) {
          let error = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: error, stack: stack, library: "Flutter test framework", context: new assertions.ErrorSummary.new("while running async test code")}));
          return null;
        } finally {
          this[_runningAsyncTasks] = false;
        }
      }).bind(this));
    }
    runTest(testBody, invariantTester, opts) {
      let description = opts && 'description' in opts ? opts.description : "";
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      return async.async(dart.void, (function* runTest() {
        if (!(description != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1424, 12, "description != null");
        if (!!dart.test(this.inTest)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1425, 12, "!inTest");
        this[_inTest] = true;
        this.renderView[_setDescription](description);
        return this[_runTest](testBody, invariantTester, description);
      }).bind(this));
    }
    reportExceptionNoticed(exception) {
      let testPrint = print.debugPrint;
      print.debugPrint = this.debugPrintOverride;
      print.debugPrint("(The following exception is now available via WidgetTester.takeException:)");
      assertions.FlutterError.dumpErrorToConsole(exception, {forceReport: true});
      print.debugPrint("(If WidgetTester.takeException is called, the above exception will be ignored. " + "If it is not, then the above exception will be dumped when another exception is " + "caught by the framework or when the test ends, whichever happens first, and then " + "the test will fail due to having not caught or expected the exception.)");
      print.debugPrint = testPrint;
    }
    postTest() {
      super.postTest();
      if (!!dart.test(this[_expectingFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1453, 12, "!_expectingFrame");
      if (!(this[_pendingFrame] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1454, 12, "_pendingFrame == null");
      this[_inTest] = false;
    }
    createViewConfiguration() {
      let t9;
      return binding$6.TestViewConfiguration.new({size: (t9 = this[_surfaceSize], t9 == null ? binding$6._kDefaultTestViewportSize : t9), window: this.window});
    }
    globalToLocal(point) {
      let transform = this.renderView.configuration.toHitTestMatrix();
      let det = transform.invert();
      if (!(det !== 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1470, 12, "det != 0.0");
      let result = matrix_utils.MatrixUtils.transformPoint(transform, point);
      return result;
    }
    localToGlobal(point) {
      let transform = this.renderView.configuration.toHitTestMatrix();
      return matrix_utils.MatrixUtils.transformPoint(transform, point);
    }
  };
  (binding$6.LiveTestWidgetsFlutterBinding.new = function() {
    this[_inTest] = false;
    this[_pendingFrame] = null;
    this[_expectingFrame] = false;
    this[_viewNeedsPaint] = false;
    this[_runningAsyncTasks] = false;
    this[framePolicy] = binding$6.LiveTestWidgetsFlutterBindingFramePolicy.fadePointers;
    this[_doDrawThisFrame] = null;
    this[deviceEventDispatcher] = null;
    binding$6.LiveTestWidgetsFlutterBinding.__proto__.new.call(this);
    ;
  }).prototype = binding$6.LiveTestWidgetsFlutterBinding.prototype;
  dart.addTypeTests(binding$6.LiveTestWidgetsFlutterBinding);
  const framePolicy = LiveTestWidgetsFlutterBinding_framePolicy;
  const deviceEventDispatcher = LiveTestWidgetsFlutterBinding_deviceEventDispatcher;
  dart.setMethodSignature(binding$6.LiveTestWidgetsFlutterBinding, () => ({
    __proto__: dart.getMethods(binding$6.LiveTestWidgetsFlutterBinding.__proto__),
    addTime: dart.fnType(dart.void, [core.Duration]),
    [_handleViewNeedsPaint]: dart.fnType(dart.void, []),
    pump: dart.fnType(async.Future$(dart.void), [], [core.Duration, binding$6.EnginePhase]),
    runAsync: dart.gFnType(T => [async.Future$(T), [dart.fnType(async.Future$(T), [])], {additionalTime: core.Duration}]),
    runTest: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), []), dart.fnType(dart.void, [])], {description: core.String, timeout: core.Duration})
  }));
  dart.setGetterSignature(binding$6.LiveTestWidgetsFlutterBinding, () => ({
    __proto__: dart.getGetters(binding$6.LiveTestWidgetsFlutterBinding.__proto__),
    inTest: core.bool,
    clock: time.Clock,
    microtaskCount: core.int,
    defaultTestTimeout: timeout.Timeout,
    renderView: binding$6._LiveTestRenderView
  }));
  dart.setLibraryUri(binding$6.LiveTestWidgetsFlutterBinding, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.LiveTestWidgetsFlutterBinding, () => ({
    __proto__: dart.getFields(binding$6.LiveTestWidgetsFlutterBinding.__proto__),
    [_inTest]: dart.fieldType(core.bool),
    [_pendingFrame]: dart.fieldType(async.Completer$(dart.void)),
    [_expectingFrame]: dart.fieldType(core.bool),
    [_viewNeedsPaint]: dart.fieldType(core.bool),
    [_runningAsyncTasks]: dart.fieldType(core.bool),
    framePolicy: dart.fieldType(binding$6.LiveTestWidgetsFlutterBindingFramePolicy),
    [_doDrawThisFrame]: dart.fieldType(core.bool),
    deviceEventDispatcher: dart.fieldType(hit_test.HitTestDispatcher)
  }));
  const _paintMatrix = dart.privateName(binding$6, "_paintMatrix");
  const _hitTestMatrix = dart.privateName(binding$6, "_hitTestMatrix");
  let C135;
  binding$6.TestViewConfiguration = class TestViewConfiguration extends view.ViewConfiguration {
    static new(opts) {
      let t9;
      let size = opts && 'size' in opts ? opts.size : C135 || CT.C135;
      let window = opts && 'window' in opts ? opts.window : null;
      return new binding$6.TestViewConfiguration.__(size, (t9 = window, t9 == null ? ui.window : t9));
    }
    static _getMatrix(size, devicePixelRatio, window) {
      let inverseRatio = dart.notNull(devicePixelRatio) / dart.notNull(window.devicePixelRatio);
      let actualWidth = dart.notNull(window.physicalSize.width) * inverseRatio;
      let actualHeight = dart.notNull(window.physicalSize.height) * inverseRatio;
      let desiredWidth = size.width;
      let desiredHeight = size.height;
      let scale = null;
      let shiftX = null;
      let shiftY = null;
      if (actualWidth / actualHeight > dart.notNull(desiredWidth) / dart.notNull(desiredHeight)) {
        scale = actualHeight / dart.notNull(desiredHeight);
        shiftX = (actualWidth - dart.notNull(desiredWidth) * dart.notNull(scale)) / 2.0;
        shiftY = 0.0;
      } else {
        scale = actualWidth / dart.notNull(desiredWidth);
        shiftX = 0.0;
        shiftY = (actualHeight - dart.notNull(desiredHeight) * dart.notNull(scale)) / 2.0;
      }
      let matrix = vector_math_64.Matrix4.compose(vector_math_64.Vector3.new(shiftX, shiftY, 0.0), vector_math_64.Quaternion.identity(), vector_math_64.Vector3.new(scale, scale, 1.0));
      return matrix;
    }
    toMatrix() {
      return this[_paintMatrix].clone();
    }
    toHitTestMatrix() {
      return this[_hitTestMatrix].clone();
    }
    toString() {
      return "TestViewConfiguration";
    }
  };
  (binding$6.TestViewConfiguration.__ = function(size, window) {
    this[_paintMatrix] = binding$6.TestViewConfiguration._getMatrix(size, window.devicePixelRatio, window);
    this[_hitTestMatrix] = binding$6.TestViewConfiguration._getMatrix(size, 1.0, window);
    binding$6.TestViewConfiguration.__proto__.new.call(this, {size: size});
    ;
  }).prototype = binding$6.TestViewConfiguration.prototype;
  dart.addTypeTests(binding$6.TestViewConfiguration);
  dart.setMethodSignature(binding$6.TestViewConfiguration, () => ({
    __proto__: dart.getMethods(binding$6.TestViewConfiguration.__proto__),
    toHitTestMatrix: dart.fnType(vector_math_64.Matrix4, [])
  }));
  dart.setLibraryUri(binding$6.TestViewConfiguration, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6.TestViewConfiguration, () => ({
    __proto__: dart.getFields(binding$6.TestViewConfiguration.__proto__),
    [_paintMatrix]: dart.finalFieldType(vector_math_64.Matrix4),
    [_hitTestMatrix]: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  dart.defineExtensionMethods(binding$6.TestViewConfiguration, ['toString']);
  binding$6._LiveTestPointerRecord = class _LiveTestPointerRecord extends core.Object {};
  (binding$6._LiveTestPointerRecord.new = function(pointer, position) {
    this.pointer = pointer;
    this.position = position;
    this.color = new colors$.HSVColor.fromAHSV(0.8, (35.0 * dart.notNull(pointer))[$modulo](360.0), 1.0, 1.0).toColor();
    this.decay = 1;
    ;
  }).prototype = binding$6._LiveTestPointerRecord.prototype;
  dart.addTypeTests(binding$6._LiveTestPointerRecord);
  dart.setLibraryUri(binding$6._LiveTestPointerRecord, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6._LiveTestPointerRecord, () => ({
    __proto__: dart.getFields(binding$6._LiveTestPointerRecord.__proto__),
    pointer: dart.finalFieldType(core.int),
    color: dart.finalFieldType(ui.Color),
    position: dart.fieldType(ui.Offset),
    decay: dart.fieldType(core.int)
  }));
  const _label = dart.privateName(binding$6, "_label");
  let C136;
  let C137;
  binding$6._LiveTestRenderView = class _LiveTestRenderView extends view.RenderView {
    get configuration() {
      return binding$6.TestViewConfiguration._check(super.configuration);
    }
    set configuration(value) {
      binding$6.TestViewConfiguration._check(value);
      super.configuration = value;
    }
    [_setDescription](value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1581, 12, "value != null");
      if (value[$isEmpty]) {
        this[_label] = null;
        return;
      }
      this[_label] == null ? this[_label] = new text_painter.TextPainter.new({textAlign: ui.TextAlign.left, textDirection: ui.TextDirection.ltr}) : null;
      this[_label].text = new text_span.TextSpan.new({text: value, style: binding$6._LiveTestRenderView._labelStyle});
      this[_label].layout();
      if (this.onNeedPaint != null) this.onNeedPaint();
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let transform = this.configuration.toHitTestMatrix();
      let det = transform.invert();
      if (!(det !== 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1598, 12, "det != 0.0");
      position = matrix_utils.MatrixUtils.transformPoint(transform, position);
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      let t9, t9$, t9$0, t9$1;
      if (!dart.equals(offset, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_test/src/binding.dart", 1605, 12, "offset == Offset.zero");
      super.paint(context, offset);
      if (dart.test(this[_pointers][$isNotEmpty])) {
        let radius = dart.notNull(this.configuration.size.shortestSide) * 0.05;
        let path = (t9 = ui.Path.new(), t9.addOval(new ui.Rect.fromCircle({center: ui.Offset.zero, radius: radius})), t9.moveTo(0.0, -radius * 2.0), t9.lineTo(0.0, radius * 2.0), t9.moveTo(-radius * 2.0, 0.0), t9.lineTo(radius * 2.0, 0.0), t9);
        let canvas = context.canvas;
        let paint = (t9$ = new ui.Paint.new(), t9$.strokeWidth = radius / 10.0, t9$.style = ui.PaintingStyle.stroke, t9$);
        let dirty = false;
        for (let pointer of this[_pointers][$keys]) {
          let record = this[_pointers][$_get](pointer);
          paint.color = record.color.withOpacity(dart.notNull(record.decay) < 0 ? dart.notNull(record.decay) / (-2 - 1) : 1.0);
          canvas.drawPath(path.shift(record.position), paint);
          if (dart.notNull(record.decay) < 0) dirty = true;
          t9$0 = record;
          t9$0.decay = dart.notNull(t9$0.decay) + 1;
        }
        this[_pointers][$keys][$where](dart.fn(pointer => this[_pointers][$_get](pointer).decay === 0, intTobool()))[$toList]()[$forEach](dart.bind(this[_pointers], $remove));
        if (dirty && this.onNeedPaint != null) async.scheduleMicrotask(this.onNeedPaint);
      }
      t9$1 = this[_label];
      t9$1 == null ? null : t9$1.paint(context.canvas, offset['-'](C136 || CT.C136));
    }
  };
  (binding$6._LiveTestRenderView.new = function(opts) {
    let configuration = opts && 'configuration' in opts ? opts.configuration : null;
    let onNeedPaint = opts && 'onNeedPaint' in opts ? opts.onNeedPaint : null;
    let window = opts && 'window' in opts ? opts.window : null;
    this[_pointers] = new (IdentityMapOfint$_LiveTestPointerRecord()).new();
    this[_label] = null;
    this.onNeedPaint = onNeedPaint;
    binding$6._LiveTestRenderView.__proto__.new.call(this, {configuration: configuration, window: window});
    ;
  }).prototype = binding$6._LiveTestRenderView.prototype;
  dart.addTypeTests(binding$6._LiveTestRenderView);
  dart.setMethodSignature(binding$6._LiveTestRenderView, () => ({
    __proto__: dart.getMethods(binding$6._LiveTestRenderView.__proto__),
    [_setDescription]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(binding$6._LiveTestRenderView, () => ({
    __proto__: dart.getGetters(binding$6._LiveTestRenderView.__proto__),
    configuration: binding$6.TestViewConfiguration
  }));
  dart.setSetterSignature(binding$6._LiveTestRenderView, () => ({
    __proto__: dart.getSetters(binding$6._LiveTestRenderView.__proto__),
    configuration: core.Object
  }));
  dart.setLibraryUri(binding$6._LiveTestRenderView, "package:flutter_test/src/binding.dart");
  dart.setFieldSignature(binding$6._LiveTestRenderView, () => ({
    __proto__: dart.getFields(binding$6._LiveTestRenderView.__proto__),
    onNeedPaint: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_pointers]: dart.finalFieldType(core.Map$(core.int, binding$6._LiveTestPointerRecord)),
    [_label]: dart.fieldType(text_painter.TextPainter)
  }));
  dart.defineLazy(binding$6._LiveTestRenderView, {
    /*binding$6._LiveTestRenderView._labelStyle*/get _labelStyle() {
      return C137 || CT.C137;
    }
  });
  binding$6._unmangle = function _unmangle(stack) {
    if (trace.Trace.is(stack)) return stack.vmTrace;
    if (chain.Chain.is(stack)) return stack.toTrace().vmTrace;
    return stack;
  };
  dart.defineLazy(binding$6, {
    /*binding$6._kDefaultTestViewportSize*/get _kDefaultTestViewportSize() {
      return C135 || CT.C135;
    },
    /*binding$6._kPointerDecay*/get _kPointerDecay() {
      return -2;
    }
  });
  dart.copyProperties(platform, {
    get isWindows() {
      if (true) {
        return false;
      }
      return io.Platform.isWindows;
    },
    get isMacOS() {
      if (true) {
        return false;
      }
      return io.Platform.isMacOS;
    },
    get isLinux() {
      if (true) {
        return false;
      }
      return io.Platform.isLinux;
    },
    get isBrowser() {
      return true;
    }
  });
  dart.defineLazy(platform, {
    /*platform._kIsCompiledToJavaScript*/get _kIsCompiledToJavaScript() {
      return true;
    }
  });
  dart.trackLibraries("packages/flutter_test/flutter_test", {
    "package:flutter_test/src/test_compat.dart": test_compat,
    "package:flutter_test/src/stack_manipulation.dart": stack_manipulation,
    "package:flutter_test/src/test_vsync.dart": test_vsync,
    "package:flutter_test/src/window.dart": window,
    "package:flutter_test/src/test_text_input.dart": test_text_input,
    "package:flutter_test/src/_binding_web.dart": _binding_web,
    "package:flutter_test/flutter_test.dart": flutter_test,
    "package:flutter_test/src/matchers.dart": matchers,
    "package:flutter_test/src/test_pointer.dart": test_pointer,
    "package:flutter_test/src/controller.dart": controller,
    "package:flutter_test/src/all_elements.dart": all_elements,
    "package:flutter_test/src/finders.dart": finders,
    "package:flutter_test/src/_goldens_web.dart": _goldens_web,
    "package:flutter_test/src/nonconst.dart": nonconst,
    "package:flutter_test/src/accessibility.dart": accessibility,
    "package:flutter_test/src/widget_tester.dart": widget_tester,
    "package:flutter_test/src/test_exception_reporter.dart": test_exception_reporter,
    "package:flutter_test/src/test_async_utils.dart": test_async_utils,
    "package:flutter_test/src/goldens.dart": goldens,
    "package:flutter_test/src/binding.dart": binding$6,
    "package:flutter_test/src/platform.dart": platform
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/test_compat.dart","src/stack_manipulation.dart","src/test_vsync.dart","src/window.dart","src/test_text_input.dart","src/_binding_web.dart","src/matchers.dart","src/test_pointer.dart","src/controller.dart","src/all_elements.dart","src/finders.dart","src/goldens.dart","src/_goldens_web.dart","src/nonconst.dart","src/accessibility.dart","src/widget_tester.dart","src/test_exception_reporter.dart","src/test_async_utils.dart","src/binding.dart","src/platform.dart"],"names":[],"mappings":"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","file":"flutter_test.ddc.js"}');
  // Exports:
  return {
    src__test_compat: test_compat,
    src__stack_manipulation: stack_manipulation,
    src__test_vsync: test_vsync,
    src__window: window,
    src__test_text_input: test_text_input,
    src___binding_web: _binding_web,
    flutter_test: flutter_test,
    src__matchers: matchers,
    src__test_pointer: test_pointer,
    src__controller: controller,
    src__all_elements: all_elements,
    src__finders: finders,
    src___goldens_web: _goldens_web,
    src__nonconst: nonconst,
    src__accessibility: accessibility,
    src__widget_tester: widget_tester,
    src__test_exception_reporter: test_exception_reporter,
    src__test_async_utils: test_async_utils,
    src__goldens: goldens,
    src__binding: binding$6,
    src__platform: platform
  };
});

//# sourceMappingURL=flutter_test.ddc.js.map
