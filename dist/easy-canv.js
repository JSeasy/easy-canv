/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Base.ts":
/*!**************************!*\
  !*** ./src/core/Base.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Base)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Base = /*#__PURE__*/_createClass(function Base() {\n  _classCallCheck(this, Base);\n\n  Object.defineProperty(this, \"activeScale\", {\n    enumerable: true,\n    configurable: true,\n    writable: true,\n    value: void 0\n  });\n  this.activeScale = {\n    scaleX: 1,\n    scaleY: 1\n  };\n});\n\n\n\n//# sourceURL=webpack://easy-canv/./src/core/Base.ts?");

/***/ }),

/***/ "./src/core/Canvas.ts":
/*!****************************!*\
  !*** ./src/core/Canvas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Control */ \"./src/core/Control.ts\");\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Line */ \"./src/core/Line.ts\");\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(_ref) {\n    var el = _ref.el,\n        height = _ref.height,\n        width = _ref.width,\n        _ref$stored = _ref.stored,\n        stored = _ref$stored === void 0 ? false : _ref$stored;\n\n    _classCallCheck(this, Canvas);\n\n    Object.defineProperty(this, \"canvas\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"objects\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"control\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"activeObject\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"ctx\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"height\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"width\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"paddingX\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"paddingY\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"stored\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"controlType\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"mouseActionType\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"mouseDownPosition\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    this.canvas = null;\n    this.objects = [];\n    this.control = null;\n    this.controlType = undefined;\n    this.activeObject = null;\n    this.paddingX = 0;\n    this.paddingY = 0;\n    this.height = height;\n    this.width = width;\n    this.stored = stored;\n    this.ctx = null;\n    this.mouseDownPosition = undefined;\n    this.mouseActionType = \"up\";\n    this.init(el);\n    this.bindEvent();\n  }\n\n  _createClass(Canvas, [{\n    key: \"init\",\n    value: function init(el) {\n      var canvasWrap = document.querySelector(el);\n      var canvas = document.createElement(\"canvas\");\n      canvasWrap && canvasWrap.appendChild(canvas);\n      canvas.height = this.height;\n      canvas.width = this.width;\n      this.canvas = canvas;\n      this.ctx = canvas.getContext(\"2d\");\n    } // 获取在鼠标内的对象\n\n  }, {\n    key: \"getOverMouseObject\",\n    value: function getOverMouseObject(offsetX, offsetY) {\n      var _this = this;\n\n      var filterObjects = this.objects.filter(function (object) {\n        return _this.isIncludesTheRange(offsetX, offsetY, object);\n      });\n      return filterObjects;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.render();\n      this.paddingX = 0;\n      this.paddingY = 0;\n      this.control = null;\n      this.activeObject = null;\n      this.controlType = undefined;\n    }\n  }, {\n    key: \"setMouseDownInfo\",\n    value: function setMouseDownInfo(x, y) {\n      this.mouseDownPosition = {\n        x: x,\n        y: y\n      };\n      this.activeObject.activeScale = {\n        scaleX: this.activeObject.scaleX,\n        scaleY: this.activeObject.scaleY\n      };\n    }\n  }, {\n    key: \"deleteObject\",\n    value: function deleteObject(target) {\n      var index = this.objects.indexOf(target);\n      this.objects.splice(index, 1);\n      this.render();\n    } //绑定事件\n\n  }, {\n    key: \"bindEvent\",\n    value: function bindEvent() {\n      var _this2 = this;\n\n      var canvas = this.canvas;\n      canvas.addEventListener(\"mousedown\", function (e) {\n        var offsetX = e.offsetX,\n            offsetY = e.offsetY;\n        _this2.mouseActionType = \"dwon\";\n\n        var activeObjects = _this2.getOverMouseObject(offsetX, offsetY);\n\n        if (_this2.controlType === \"br\") {\n          _this2.setMouseDownInfo(offsetX, offsetY);\n        } else if (_this2.controlType === \"tr\") {\n          _this2.deleteObject(_this2.activeObject);\n\n          _this2.reset();\n        } else if (!activeObjects.length) {\n          _this2.reset();\n        } else {\n          _this2.activeObject = activeObjects.at(-1);\n\n          _this2.render();\n\n          _this2.drawControl(_this2.activeObject);\n\n          _this2.paddingX = offsetX - _this2.activeObject.x;\n          _this2.paddingY = offsetY - _this2.activeObject.y;\n        }\n      });\n      canvas.addEventListener(\"mousemove\", function (e) {\n        var offsetX = e.offsetX,\n            offsetY = e.offsetY;\n\n        if (_this2.mouseActionType === \"up\" || !_this2.activeObject) {\n          _this2.changeTheCursorStyle(e);\n\n          return;\n        }\n\n        if (_this2.controlType === \"br\") {\n          var _this2$mouseDownPosit = _this2.mouseDownPosition,\n              x = _this2$mouseDownPosit.x,\n              y = _this2$mouseDownPosit.y;\n          var diffX = offsetX - x;\n          var diffY = offsetY - y;\n\n          var _this2$getRealActiveO = _this2.getRealActiveObjectHW(),\n              height = _this2$getRealActiveO.height,\n              width = _this2$getRealActiveO.width;\n\n          var diffHeight = height + diffY;\n          var diffWidth = width + diffX;\n          _this2.activeObject.scaleX = diffWidth * _this2.activeObject.activeScale.scaleX / width;\n          _this2.activeObject.scaleY = diffHeight * _this2.activeObject.activeScale.scaleY / height;\n\n          _this2.render();\n\n          _this2.drawControl(_this2.activeObject);\n\n          return;\n        }\n\n        _this2.activeObject.x = offsetX - _this2.paddingX;\n        _this2.activeObject.y = offsetY - _this2.paddingY;\n\n        _this2.render();\n\n        _this2.drawControl(_this2.activeObject);\n\n        _this2.drawHelpLine();\n      });\n      document.addEventListener(\"mouseup\", function (e) {\n        _this2.mouseActionType = \"up\";\n      });\n    }\n  }, {\n    key: \"getRealActiveObjectHW\",\n    value: function getRealActiveObjectHW() {\n      var _this$activeObject = this.activeObject,\n          height = _this$activeObject.height,\n          width = _this$activeObject.width,\n          activeScale = _this$activeObject.activeScale;\n      return {\n        height: height * activeScale.scaleY,\n        width: width * activeScale.scaleX\n      };\n    }\n  }, {\n    key: \"changeTheCursorStyle\",\n    value: function changeTheCursorStyle(e) {\n      var offsetX = e.offsetX,\n          offsetY = e.offsetY;\n      var activeObjects = this.getOverMouseObject(offsetX, offsetY);\n      activeObjects.length ? this.setCursorStyle(\"pointer\") : this.setCursorStyle(\"auto\");\n      this.control && this.changeTheControlMouseStyle(offsetX, offsetY);\n    }\n  }, {\n    key: \"changeTheControlMouseStyle\",\n    value: function changeTheControlMouseStyle(offsetX, offsetY) {\n      var _this$control = this.control,\n          tr = _this$control.tr,\n          tl = _this$control.tl,\n          br = _this$control.br,\n          bl = _this$control.bl;\n\n      if (this.isIncludesTheRange(offsetX, offsetY, tr)) {\n        this.controlType = \"tr\";\n        this.setCursorStyle(\"pointer\");\n        return;\n      }\n\n      if (this.isIncludesTheRange(offsetX, offsetY, tl)) {\n        this.controlType = \"tl\";\n        this.setCursorStyle(\"pointer\");\n        return;\n      }\n\n      if (this.isIncludesTheRange(offsetX, offsetY, br)) {\n        this.controlType = \"br\";\n        this.setCursorStyle(\"ne-resize\");\n        return;\n      }\n\n      if (this.isIncludesTheRange(offsetX, offsetY, bl)) {\n        this.controlType = \"bl\";\n        this.setCursorStyle(\"ne-resize\");\n        return;\n      }\n\n      this.controlType = undefined;\n    }\n  }, {\n    key: \"setCursorStyle\",\n    value: function setCursorStyle(type) {\n      this.canvas.style.cursor = type;\n    }\n  }, {\n    key: \"setCenter\",\n    value: function setCenter(target) {\n      var centerX = this.width / 2;\n      var centerY = this.height / 2;\n      target.x = centerX - target.width / 2;\n      target.y = centerY - target.height / 2;\n    }\n  }, {\n    key: \"drawHelpLine\",\n    value: function drawHelpLine() {\n      if (this.isCenterY()) {\n        new _Line__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n          points: [{\n            x: 0,\n            y: this.height / 2\n          }, {\n            x: this.width,\n            y: this.height / 2\n          }],\n          lineWidth: 0.5,\n          strokeStyle: \"red\"\n        }).draw(this.ctx);\n      }\n\n      if (this.isCenterX()) {\n        new _Line__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n          points: [{\n            x: this.width / 2,\n            y: 0\n          }, {\n            x: this.width / 2,\n            y: this.height\n          }],\n          lineWidth: 0.5,\n          strokeStyle: \"red\"\n        }).draw(this.ctx);\n      }\n    }\n  }, {\n    key: \"isCenterY\",\n    value: function isCenterY() {\n      var halfHeight = this.height / 2;\n      var centerPositionY = this.activeObject.y + this.activeObject.height / 2;\n\n      if (halfHeight - 1 < centerPositionY && centerPositionY < halfHeight + 1) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"isCenterX\",\n    value: function isCenterX() {\n      var halfWidth = this.width / 2;\n      var centerPositionX = this.activeObject.x + this.activeObject.width / 2;\n\n      if (halfWidth - 1 < centerPositionX && centerPositionX < halfWidth + 1) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"drawControl\",\n    value: function drawControl(target) {\n      var control = new _Control__WEBPACK_IMPORTED_MODULE_7__[\"default\"](target);\n      control.draw(this.ctx);\n      this.control = control;\n    }\n  }, {\n    key: \"isIncludesTheRange\",\n    value: function isIncludesTheRange(offsetX, offsetY, _ref2) {\n      var x = _ref2.x,\n          y = _ref2.y,\n          height = _ref2.height,\n          width = _ref2.width,\n          scaleX = _ref2.scaleX,\n          scaleY = _ref2.scaleY;\n      return offsetX > x && offsetX < x + width * scaleX && offsetY < y + height * scaleY && offsetY > y;\n    }\n  }, {\n    key: \"add\",\n    value: function add(target) {\n      this.objects.push(target);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(item) {\n      var ctx = this.ctx;\n      item.draw(ctx);\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      var _this$canvas = this.canvas,\n          height = _this$canvas.height,\n          width = _this$canvas.width;\n      this.ctx.fillStyle = \"white\";\n      this.ctx.fillRect(0, 0, height, width);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      this.clear();\n      this.objects.forEach(function (item) {\n        _this3.draw(item);\n      });\n    }\n  }]);\n\n  return Canvas;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n//# sourceURL=webpack://easy-canv/./src/core/Canvas.ts?");

/***/ }),

/***/ "./src/core/Control.ts":
/*!*****************************!*\
  !*** ./src/core/Control.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ \"./src/core/Line.ts\");\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rect */ \"./src/core/Rect.ts\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar Control = /*#__PURE__*/function () {\n  function Control(target) {\n    _classCallCheck(this, Control);\n\n    Object.defineProperty(this, \"target\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"tr\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"tl\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"br\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"bl\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    this.target = target;\n    this.tr = null;\n    this.tl = null;\n    this.br = null;\n    this.bl = null;\n  }\n\n  _createClass(Control, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      this.drawBoder(ctx);\n      this.drawRect(ctx);\n    }\n  }, {\n    key: \"getTransformPosition\",\n    value: function getTransformPosition() {\n      var _this$target = this.target,\n          x = _this$target.x,\n          y = _this$target.y,\n          height = _this$target.height,\n          width = _this$target.width,\n          scaleX = _this$target.scaleX,\n          scaleY = _this$target.scaleY;\n      return {\n        x: x,\n        y: y,\n        height: height * scaleY,\n        width: width * scaleX\n      };\n    }\n  }, {\n    key: \"drawBoder\",\n    value: function drawBoder(ctx) {\n      var _this$getTransformPos = this.getTransformPosition(),\n          x = _this$getTransformPos.x,\n          y = _this$getTransformPos.y,\n          height = _this$getTransformPos.height,\n          width = _this$getTransformPos.width;\n\n      new _Line__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        points: [{\n          x: x,\n          y: y\n        }, {\n          x: x + width,\n          y: y\n        }, {\n          x: x + width,\n          y: y + height\n        }, {\n          x: x,\n          y: y + height\n        }, {\n          x: x,\n          y: y\n        }],\n        strokeStyle: \"red\",\n        lineWidth: 2\n      }).draw(ctx);\n    }\n  }, {\n    key: \"drawRect\",\n    value: function drawRect(ctx) {\n      var _this$getTransformPos2 = this.getTransformPosition(),\n          x = _this$getTransformPos2.x,\n          y = _this$getTransformPos2.y,\n          height = _this$getTransformPos2.height,\n          width = _this$getTransformPos2.width;\n\n      var rectWidth = 15;\n      var halfRectWidth = rectWidth / 2;\n      this.tl = new _Rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: x - halfRectWidth,\n        y: y - halfRectWidth,\n        height: rectWidth,\n        width: rectWidth,\n        fillStyle: \"blue\"\n      });\n      this.bl = new _Rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: x - halfRectWidth,\n        y: y + height - halfRectWidth,\n        height: rectWidth,\n        width: rectWidth,\n        fillStyle: \"blue\"\n      });\n      this.tr = new _Rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: x + width - halfRectWidth,\n        y: y - halfRectWidth,\n        height: rectWidth,\n        width: rectWidth,\n        fillStyle: \"blue\"\n      });\n      this.br = new _Rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: x + width - halfRectWidth,\n        y: y + height - halfRectWidth,\n        height: rectWidth,\n        width: rectWidth,\n        fillStyle: \"blue\"\n      });\n      this.tr.draw(ctx);\n      this.tl.draw(ctx);\n      this.br.draw(ctx);\n      this.bl.draw(ctx);\n    }\n  }]);\n\n  return Control;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n//# sourceURL=webpack://easy-canv/./src/core/Control.ts?");

/***/ }),

/***/ "./src/core/Line.ts":
/*!**************************!*\
  !*** ./src/core/Line.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Line = /*#__PURE__*/function () {\n  function Line(_ref) {\n    var points = _ref.points,\n        lineWidth = _ref.lineWidth,\n        strokeStyle = _ref.strokeStyle;\n\n    _classCallCheck(this, Line);\n\n    Object.defineProperty(this, \"type\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"points\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"strokeStyle\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, \"lineWidth\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    this.type = \"Line\";\n    this.points = points;\n    this.strokeStyle = strokeStyle;\n    this.lineWidth = lineWidth;\n  }\n\n  _createClass(Line, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.strokeStyle = this.strokeStyle;\n      ctx.lineWidth = this.lineWidth;\n      this.points.forEach(function (point, index) {\n        index === 0 && ctx.moveTo(point.x, point.y);\n        index !== 0 && ctx.lineTo(point.x, point.y);\n      });\n      ctx.stroke();\n    }\n  }]);\n\n  return Line;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);\n\n//# sourceURL=webpack://easy-canv/./src/core/Line.ts?");

/***/ }),

/***/ "./src/core/Photo.ts":
/*!***************************!*\
  !*** ./src/core/Photo.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.function.bind.js\");\n/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.create.js\");\n/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Base */ \"./src/core/Base.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Photo = /*#__PURE__*/function (_Base) {\n  _inherits(Photo, _Base);\n\n  var _super = _createSuper(Photo);\n\n  function Photo(_ref) {\n    var _this;\n\n    var src = _ref.src,\n        _ref$x = _ref.x,\n        x = _ref$x === void 0 ? 0 : _ref$x,\n        _ref$y = _ref.y,\n        y = _ref$y === void 0 ? 0 : _ref$y,\n        _ref$scaleX = _ref.scaleX,\n        scaleX = _ref$scaleX === void 0 ? 1 : _ref$scaleX,\n        _ref$scaleY = _ref.scaleY,\n        scaleY = _ref$scaleY === void 0 ? 1 : _ref$scaleY;\n\n    _classCallCheck(this, Photo);\n\n    _this = _super.call(this);\n    Object.defineProperty(_assertThisInitialized(_this), \"src\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"height\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"width\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"x\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"y\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"scaleX\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"scaleY\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"type\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    _this.src = src;\n    _this.height = src.height;\n    _this.width = src.width;\n    _this.x = x;\n    _this.y = y;\n    _this.scaleX = scaleX;\n    _this.scaleY = scaleY;\n    _this.type = \"Photo\";\n    return _this;\n  }\n\n  _createClass(Photo, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      var src = this.src,\n          x = this.x,\n          y = this.y,\n          scaleX = this.scaleX,\n          scaleY = this.scaleY;\n      ctx.drawImage(src, x, y, src.width * scaleX, src.height * scaleY);\n    }\n  }]);\n\n  return Photo;\n}(_Base__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);\n\n//# sourceURL=webpack://easy-canv/./src/core/Photo.ts?");

/***/ }),

/***/ "./src/core/Rect.ts":
/*!**************************!*\
  !*** ./src/core/Rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.function.bind.js\");\n/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.create.js\");\n/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Base */ \"./src/core/Base.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Rect = /*#__PURE__*/function (_Base) {\n  _inherits(Rect, _Base);\n\n  var _super = _createSuper(Rect);\n\n  function Rect(_ref) {\n    var _this;\n\n    var x = _ref.x,\n        y = _ref.y,\n        height = _ref.height,\n        width = _ref.width,\n        fillStyle = _ref.fillStyle,\n        _ref$scaleX = _ref.scaleX,\n        scaleX = _ref$scaleX === void 0 ? 1 : _ref$scaleX,\n        _ref$scaleY = _ref.scaleY,\n        scaleY = _ref$scaleY === void 0 ? 1 : _ref$scaleY;\n\n    _classCallCheck(this, Rect);\n\n    _this = _super.call(this);\n    Object.defineProperty(_assertThisInitialized(_this), \"x\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"y\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"height\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"width\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"fillStyle\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"scaleX\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"scaleY\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"type\", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    _this.x = x;\n    _this.y = y;\n    _this.height = height;\n    _this.width = width;\n    _this.fillStyle = fillStyle;\n    _this.scaleX = scaleX;\n    _this.scaleY = scaleY;\n    _this.type = \"Rect\";\n    return _this;\n  }\n\n  _createClass(Rect, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      var fillStyle = this.fillStyle,\n          x = this.x,\n          y = this.y,\n          height = this.height,\n          width = this.width,\n          scaleX = this.scaleX,\n          scaleY = this.scaleY;\n      ctx.fillStyle = fillStyle;\n      ctx.fillRect(x, y, width * scaleX, height * scaleY);\n    }\n  }]);\n\n  return Rect;\n}(_Base__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);\n\n//# sourceURL=webpack://easy-canv/./src/core/Rect.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* reexport safe */ _core_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Line\": () => (/* reexport safe */ _core_Line__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Photo\": () => (/* reexport safe */ _core_Photo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Rect\": () => (/* reexport safe */ _core_Rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _core_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Canvas */ \"./src/core/Canvas.ts\");\n/* harmony import */ var _core_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Line */ \"./src/core/Line.ts\");\n/* harmony import */ var _core_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Rect */ \"./src/core/Rect.ts\");\n/* harmony import */ var _core_Photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Photo */ \"./src/core/Photo.ts\");\n\n\n\n\n\n//# sourceURL=webpack://easy-canv/./src/index.ts?");

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nvar _a, _b;\n\n\nvar EasyCanv = new _index__WEBPACK_IMPORTED_MODULE_0__.Canvas({\n  el: \".canvasWrap\",\n  height: 550,\n  width: 550,\n  stored: true\n});\n(_a = document.querySelector(\"#addRect\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", function () {\n  var rect = new _index__WEBPACK_IMPORTED_MODULE_0__.Rect({\n    x: 100,\n    y: 100,\n    height: 100,\n    width: 100,\n    fillStyle: \"yellow\"\n  });\n  EasyCanv.add(rect);\n  EasyCanv.render();\n});\n(_b = document.querySelector(\"#addPhoto\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", function () {\n  var img = new Image();\n  img.src = \"https://image.s2bdiy.com/1200/r2j4HsirJE1660785264486_1200.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_1000,h_1000/auto-orient,0/quality,Q_100\";\n\n  img.onload = function () {\n    var photo = new _index__WEBPACK_IMPORTED_MODULE_0__.Photo({\n      src: img,\n      x: 100,\n      y: 200,\n      scaleX: 0.5,\n      scaleY: 0.5\n    });\n    EasyCanv.add(photo);\n    EasyCanv.render();\n  };\n});\n\n//# sourceURL=webpack://easy-canv/./src/test.ts?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/a-function.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/a-function.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/a-possible-prototype.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/a-possible-prototype.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/add-to-unscopables.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/add-to-unscopables.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-create.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/an-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/an-object.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js\").forEach);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) { throw it; };\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = { length: -1 };\n\n    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });\n    else O[1] = 1;\n\n    method.call(O, argument0, argument1);\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/classof.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/classof.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/correct-prototype-getter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/correct-prototype-getter.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-iterator-constructor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-iterator-constructor.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/_core-js@3.6.5@core-js/internals/iterators-core.js\").IteratorPrototype);\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/_core-js@3.6.5@core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js ***!
  \*************************************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/define-iterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/define-iterator.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.6.5@core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/_core-js@3.6.5@core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/_core-js@3.6.5@core-js/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/define-well-known-symbol.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/define-well-known-symbol.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/_core-js@3.6.5@core-js/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol-wrapped.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\").f);\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/export.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/export.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.6.5@core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js":
/*!****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/fails.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/_core-js@3.6.5@core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/function-bind.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/function-bind.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/_core-js@3.6.5@core-js/internals/a-function.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nvar slice = [].slice;\nvar factories = {};\n\nvar construct = function (C, argsLength, args) {\n  if (!(argsLength in factories)) {\n    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');\n  } return factories[argsLength](C, args);\n};\n\n// `Function.prototype.bind` method implementation\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = slice.call(arguments, 1);\n  var boundFunction = function bound(/* args... */) {\n    var args = partArgs.concat(slice.call(arguments));\n    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);\n  };\n  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;\n  return boundFunction;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/function-bind.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/_core-js@3.6.5@core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/global.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/has.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/has.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/html.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/html.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-array.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-object.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/iterators-core.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/iterators-core.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/iterators.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/iterators.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-create.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-create.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/_core-js@3.6.5@core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-properties.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-define-properties.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names-external.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names-external.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js\").f);\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-prototype-of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-prototype-of.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/_core-js@3.6.5@core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-keys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-keys.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-set-prototype-of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-set-prototype-of.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/_core-js@3.6.5@core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/path.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/path.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/redefine.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/redefine.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js ***!
  \***********************************************************************************/
/***/ ((module) => {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/set-global.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/set-global.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/set-to-string-tag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/set-to-string-tag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\").f);\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/string-multibyte.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/string-multibyte.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-length.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-length.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-object.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/uid.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/uid.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol-wrapped.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol-wrapped.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar $filter = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js\").filter);\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');\n// Edge 14- issue\nvar USES_TO_LENGTH = arrayMethodUsesToLength('filter');\n\n// `Array.prototype.filter` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.index-of.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.index-of.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar $indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js\").indexOf);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js\");\n\nvar nativeIndexOf = [].indexOf;\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;\nvar STRICT_METHOD = arrayMethodIsStrict('indexOf');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });\n\n// `Array.prototype.indexOf` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.index-of.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/_core-js@3.6.5@core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/_core-js@3.6.5@core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/_core-js@3.6.5@core-js/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.splice.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.splice.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-length.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-object.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });\n\nvar max = Math.max;\nvar min = Math.min;\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';\n\n// `Array.prototype.splice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.splice\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  splice: function splice(start, deleteCount /* , ...items */) {\n    var O = toObject(this);\n    var len = toLength(O.length);\n    var actualStart = toAbsoluteIndex(start, len);\n    var argumentsLength = arguments.length;\n    var insertCount, actualDeleteCount, A, k, from, to;\n    if (argumentsLength === 0) {\n      insertCount = actualDeleteCount = 0;\n    } else if (argumentsLength === 1) {\n      insertCount = 0;\n      actualDeleteCount = len - actualStart;\n    } else {\n      insertCount = argumentsLength - 2;\n      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);\n    }\n    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {\n      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);\n    }\n    A = arraySpeciesCreate(O, actualDeleteCount);\n    for (k = 0; k < actualDeleteCount; k++) {\n      from = actualStart + k;\n      if (from in O) createProperty(A, k, O[from]);\n    }\n    A.length = actualDeleteCount;\n    if (insertCount < actualDeleteCount) {\n      for (k = actualStart; k < len - actualDeleteCount; k++) {\n        from = k + actualDeleteCount;\n        to = k + insertCount;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];\n    } else if (insertCount > actualDeleteCount) {\n      for (k = len - actualDeleteCount; k > actualStart; k--) {\n        from = k + actualDeleteCount - 1;\n        to = k + insertCount - 1;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n    }\n    for (k = 0; k < insertCount; k++) {\n      O[k + actualStart] = arguments[k + 2];\n    }\n    O.length = len - actualDeleteCount + insertCount;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.splice.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.function.bind.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.function.bind.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/_core-js@3.6.5@core-js/internals/function-bind.js\");\n\n// `Function.prototype.bind` method\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\n$({ target: 'Function', proto: true }, {\n  bind: bind\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.function.bind.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.create.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.create.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-create.js\");\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  create: create\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.create.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.get-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.get-prototype-of.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/_core-js@3.6.5@core-js/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.set-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.set-prototype-of.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-set-prototype-of.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n$({ target: 'Object', stat: true }, {\n  setPrototypeOf: setPrototypeOf\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.6.5@core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js\");\n\n// `Object.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.reflect.construct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.reflect.construct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/_core-js@3.6.5@core-js/internals/a-function.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-create.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/_core-js@3.6.5@core-js/internals/function-bind.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nvar nativeConstruct = getBuiltIn('Reflect', 'construct');\n\n// `Reflect.construct` method\n// https://tc39.github.io/ecma262/#sec-reflect.construct\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  nativeConstruct(function () { /* empty */ });\n});\nvar FORCED = NEW_TARGET_BUG || ARGS_BUG;\n\n$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.string.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.string.iterator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/_core-js@3.6.5@core-js/internals/string-multibyte.js\").charAt);\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/_core-js@3.6.5@core-js/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.description.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.description.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// `Symbol.prototype.description` getter\n// https://tc39.github.io/ecma262/#sec-symbol.prototype.description\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\").f);\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\n\nif (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||\n  // Safari 12 bug\n  NativeSymbol().description !== undefined\n)) {\n  var EmptyStringDescriptionStore = {};\n  // wrap Symbol constructor for correct work with undefined description\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var result = this instanceof SymbolWrapper\n      ? new NativeSymbol(description)\n      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n      : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;\n  symbolPrototype.constructor = SymbolWrapper;\n\n  var symbolToString = symbolPrototype.toString;\n  var native = String(NativeSymbol('test')) == 'Symbol(test)';\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  defineProperty(symbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = isObject(this) ? this.valueOf() : this;\n      var string = symbolToString.call(symbol);\n      if (has(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  $({ global: true, forced: true }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.iterator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.6.5@core-js/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol-wrapped.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js\");\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js\").forEach);\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n      while (arguments.length > index) args.push(arguments[index++]);\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.iterator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.iterator.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.iterator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/test.ts");
/******/ 	
/******/ })()
;