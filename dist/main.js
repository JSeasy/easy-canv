/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/core/Canvas.ts":
      /*!****************************!*\
  !*** ./src/core/Canvas.ts ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(_ref) {\n    var el = _ref.el,\n        height = _ref.height,\n        width = _ref.width,\n        _ref$stored = _ref.stored,\n        stored = _ref$stored === void 0 ? false : _ref$stored;\n\n    _classCallCheck(this, Canvas);\n\n    Object.defineProperty(this, "canvas", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "objects", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "controls", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "redo", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "undo", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "activeObject", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "ctx", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "height", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "width", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "paddingX", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "paddingY", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "stored", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    this.canvas = null;\n    this.objects = [];\n    this.controls = [];\n    this.redo = [];\n    this.undo = [];\n    this.activeObject = null;\n    this.paddingX = 0;\n    this.paddingY = 0;\n    this.height = height;\n    this.width = width;\n    this.stored = stored;\n    this.ctx = null;\n    this.init(el);\n    this.bindEvent();\n  }\n\n  _createClass(Canvas, [{\n    key: "init",\n    value: function init(el) {\n      var canvasWrap = document.querySelector(el);\n      var canvas = document.createElement("canvas");\n      canvasWrap && canvasWrap.appendChild(canvas);\n      canvas.height = this.height;\n      canvas.width = this.width;\n      this.canvas = canvas;\n      this.ctx = canvas.getContext("2d");\n    } //绑定事件\n\n  }, {\n    key: "bindEvent",\n    value: function bindEvent() {\n      var _this = this;\n\n      var canvas = this.canvas;\n      canvas.addEventListener("mousedown", function (e) {\n        var offsetX = e.offsetX,\n            offsetY = e.offsetY;\n\n        var filterObjects = _this.objects.filter(function (object) {\n          return _this.isIncludesTheRange(offsetX, offsetY, object);\n        });\n\n        if (!filterObjects.length) {\n          _this.render();\n\n          return;\n        }\n\n        _this.activeObject = filterObjects.length === 1 ? filterObjects[0] : filterObjects[filterObjects.length - 1];\n\n        _this.render();\n\n        _this.drawControl(_this.activeObject);\n\n        _this.paddingX = offsetX - _this.activeObject.x;\n        _this.paddingY = offsetY - _this.activeObject.y;\n      });\n      canvas.addEventListener("mousemove", function (e) {\n        if (!_this.activeObject) return;\n        var offsetX = e.offsetX,\n            offsetY = e.offsetY;\n        _this.activeObject.x = offsetX - _this.paddingX;\n        _this.activeObject.y = offsetY - _this.paddingY;\n\n        _this.render();\n\n        _this.drawControl(_this.activeObject);\n\n        _this.drawHelpLine();\n      });\n      document.addEventListener("mouseup", function (e) {\n        _this.activeObject && _this.reset();\n        _this.activeObject && _this.stored && _this.save();\n      });\n      canvas.addEventListener("contextmenu", function (e) {\n        if (_this.activeObject) {\n          console.log(123);\n        }\n\n        e.preventDefault();\n      });\n    }\n  }, {\n    key: "setCenter",\n    value: function setCenter(target) {\n      var centerX = this.width / 2;\n      var centerY = this.height / 2;\n      target.x = centerX - target.width / 2;\n      target.y = centerY - target.height / 2;\n    }\n  }, {\n    key: "drawHelpLine",\n    value: function drawHelpLine() {\n      if (this.isCenterY()) {\n        this.drawLine({\n          beginPoint: {\n            x: 0,\n            y: this.height / 2\n          },\n          endPoint: {\n            x: this.width,\n            y: this.height / 2\n          },\n          lineWidth: 0.5,\n          strokeStyle: "red"\n        }, this.ctx);\n      }\n\n      if (this.isCenterX()) {\n        this.drawLine({\n          beginPoint: {\n            x: this.width / 2,\n            y: 0\n          },\n          endPoint: {\n            x: this.width / 2,\n            y: this.height\n          },\n          lineWidth: 0.5,\n          strokeStyle: "red"\n        }, this.ctx);\n      }\n    }\n  }, {\n    key: "isCenterY",\n    value: function isCenterY() {\n      var halfHeight = this.height / 2;\n      var centerPositionY = this.activeObject.y + this.activeObject.height / 2;\n\n      if (halfHeight - 2 < centerPositionY && centerPositionY < halfHeight + 2) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: "isCenterX",\n    value: function isCenterX() {\n      var halfWidth = this.width / 2;\n      var centerPositionX = this.activeObject.x + this.activeObject.width / 2;\n\n      if (halfWidth - 2 < centerPositionX && centerPositionX < halfWidth + 2) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: "save",\n    value: function save() {\n      this.redo.push(this.objects);\n    }\n  }, {\n    key: "reset",\n    value: function reset() {\n      this.activeObject = null;\n      this.paddingX = 0;\n      this.paddingY = 0;\n    }\n  }, {\n    key: "drawControl",\n    value: function drawControl(target) {\n      var x = target.x,\n          y = target.y,\n          height = target.height,\n          width = target.width;\n      this.drawLine({\n        beginPoint: {\n          x: x,\n          y: y\n        },\n        endPoint: {\n          x: x + width,\n          y: y\n        },\n        lineWidth: 2,\n        strokeStyle: "red"\n      }, this.ctx);\n      this.drawLine({\n        beginPoint: {\n          x: x,\n          y: y\n        },\n        endPoint: {\n          x: x,\n          y: y + height\n        },\n        lineWidth: 2,\n        strokeStyle: "red"\n      }, this.ctx);\n      this.drawLine({\n        beginPoint: {\n          x: x + width,\n          y: y\n        },\n        endPoint: {\n          x: x + width,\n          y: y + height\n        },\n        lineWidth: 2,\n        strokeStyle: "red"\n      }, this.ctx);\n      this.drawLine({\n        beginPoint: {\n          x: x,\n          y: y + height\n        },\n        endPoint: {\n          x: x + width,\n          y: y + height\n        },\n        lineWidth: 2,\n        strokeStyle: "red"\n      }, this.ctx);\n    }\n  }, {\n    key: "isIncludesTheRange",\n    value: function isIncludesTheRange(offsetX, offsetY, _ref2) {\n      var x = _ref2.x,\n          y = _ref2.y,\n          height = _ref2.height,\n          width = _ref2.width;\n      return offsetX > x && offsetX < x + width && offsetY < y + height && offsetY > y;\n    }\n  }, {\n    key: "add",\n    value: function add(target) {\n      this.objects.push(target);\n    }\n  }, {\n    key: "draw",\n    value: function draw(item) {\n      var ctx = this.ctx;\n\n      item._draw(ctx);\n    }\n  }, {\n    key: "drawLine",\n    value: function drawLine(_ref3, ctx) {\n      var beginPoint = _ref3.beginPoint,\n          endPoint = _ref3.endPoint,\n          lineWidth = _ref3.lineWidth,\n          strokeStyle = _ref3.strokeStyle;\n      ctx.beginPath();\n      ctx.strokeStyle = strokeStyle;\n      ctx.lineWidth = lineWidth;\n      ctx.moveTo(beginPoint.x, beginPoint.y);\n      ctx.lineTo(endPoint.x, endPoint.y); // ctx.setLineDash([5, 10]);\n\n      ctx.stroke();\n    }\n  }, {\n    key: "clear",\n    value: function clear() {\n      var _this$canvas = this.canvas,\n          height = _this$canvas.height,\n          width = _this$canvas.width;\n      this.ctx.fillStyle = "white";\n      this.ctx.fillRect(0, 0, height, width);\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      this.clear();\n      this.objects.forEach(function (item) {\n        console.log("123");\n\n        _this2.draw(item);\n      });\n    }\n  }]);\n\n  return Canvas;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n//# sourceURL=webpack://easy-canv/./src/core/Canvas.ts?'
        );

        /***/
      },

    /***/ "./src/core/Line.ts":
      /*!**************************!*\
  !*** ./src/core/Line.ts ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Line = /*#__PURE__*/_createClass(function Line(_ref) {\n  var endPoint = _ref.endPoint,\n      beginPoint = _ref.beginPoint,\n      lineWidth = _ref.lineWidth,\n      strokeStyle = _ref.strokeStyle;\n\n  _classCallCheck(this, Line);\n\n  Object.defineProperty(this, "type", {\n    enumerable: true,\n    configurable: true,\n    writable: true,\n    value: void 0\n  });\n  Object.defineProperty(this, "endPoint", {\n    enumerable: true,\n    configurable: true,\n    writable: true,\n    value: void 0\n  });\n  Object.defineProperty(this, "beginPoint", {\n    enumerable: true,\n    configurable: true,\n    writable: true,\n    value: void 0\n  });\n  Object.defineProperty(this, "strokeStyle", {\n    enumerable: true,\n    configurable: true,\n    writable: true,\n    value: void 0\n  });\n  Object.defineProperty(this, "lineWidth", {\n    enumerable: true,\n    configurable: true,\n    writable: true,\n    value: void 0\n  });\n  this.type = "Line";\n  this.endPoint = endPoint;\n  this.beginPoint = beginPoint;\n  this.strokeStyle = strokeStyle;\n  this.lineWidth = lineWidth;\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);\n\n//# sourceURL=webpack://easy-canv/./src/core/Line.ts?'
        );

        /***/
      },

    /***/ "./src/core/Photo.ts":
      /*!***************************!*\
  !*** ./src/core/Photo.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nvar Photo = /*#__PURE__*/function () {\n  function Photo(_ref) {\n    var src = _ref.src,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, Photo);\n\n    Object.defineProperty(this, "src", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "height", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "width", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "x", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "y", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "type", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    this.src = src;\n    this.height = src.height;\n    this.width = src.width;\n    this.x = x;\n    this.y = y;\n    this.type = "Photo";\n  }\n\n  _createClass(Photo, [{\n    key: "_draw",\n    value: function _draw(ctx) {\n      var src = this.src,\n          x = this.x,\n          y = this.y;\n      ctx.drawImage(src, x, y, src.width, src.height);\n    }\n  }]);\n\n  return Photo;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);\n\n//# sourceURL=webpack://easy-canv/./src/core/Photo.ts?'
        );

        /***/
      },

    /***/ "./src/core/Rect.ts":
      /*!**************************!*\
  !*** ./src/core/Rect.ts ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nvar Rect = /*#__PURE__*/function () {\n  function Rect(_ref) {\n    var x = _ref.x,\n        y = _ref.y,\n        height = _ref.height,\n        width = _ref.width,\n        fillStyle = _ref.fillStyle;\n\n    _classCallCheck(this, Rect);\n\n    Object.defineProperty(this, "x", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "y", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "height", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "width", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "fillStyle", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, "type", {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0\n    });\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.width = width;\n    this.fillStyle = fillStyle;\n    this.type = "Rect";\n  }\n\n  _createClass(Rect, [{\n    key: "_draw",\n    value: function _draw(ctx) {\n      var fillStyle = this.fillStyle,\n          x = this.x,\n          y = this.y,\n          height = this.height,\n          width = this.width;\n      ctx.fillStyle = fillStyle;\n      ctx.fillRect(x, y, height, width);\n    }\n  }]);\n\n  return Rect;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);\n\n//# sourceURL=webpack://easy-canv/./src/core/Rect.ts?'
        );

        /***/
      },

    /***/ "./src/index.ts":
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Canvas */ "./src/core/Canvas.ts");\n/* harmony import */ var _core_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Line */ "./src/core/Line.ts");\n/* harmony import */ var _core_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Rect */ "./src/core/Rect.ts");\n/* harmony import */ var _core_Photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Photo */ "./src/core/Photo.ts");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  Canvas: _core_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"],\n  Line: _core_Line__WEBPACK_IMPORTED_MODULE_1__["default"],\n  Rect: _core_Rect__WEBPACK_IMPORTED_MODULE_2__["default"],\n  Photo: _core_Photo__WEBPACK_IMPORTED_MODULE_3__["default"]\n});\n\n//# sourceURL=webpack://easy-canv/./src/index.ts?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/a-function.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/a-function.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/a-function.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/an-object.js":
      /*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/an-object.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/an-object.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js").forEach);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js");\n\nvar STRICT_METHOD = arrayMethodIsStrict(\'forEach\');\nvar USES_TO_LENGTH = arrayMethodUsesToLength(\'forEach\');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.5@core-js/internals/to-length.js");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js ***!
  \**************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.5@core-js/internals/to-object.js");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.5@core-js/internals/to-length.js");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js":
      /*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js ***!
  \*******************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js");\n\nvar SPECIES = wellKnownSymbol(\'species\');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can\'t use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js ***!
  \*********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '\nvar fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-method-is-strict.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js":
      /*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js ***!
  \**************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js");\nvar fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js");\nvar has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.5@core-js/internals/has.js");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) { throw it; };\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, \'ACCESSORS\') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = { length: -1 };\n\n    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });\n    else O[1] = 1;\n\n    method.call(O, argument0, argument1);\n  });\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js ***!
  \*******************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.5@core-js/internals/is-object.js");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/_core-js@3.6.5@core-js/internals/is-array.js");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js");\n\nvar SPECIES = wellKnownSymbol(\'species\');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == \'function\' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/array-species-create.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          "var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/classof.js":
      /*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/classof.js ***!
  \******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/classof.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js":
      /*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js ***!
  \**************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.5@core-js/internals/has.js");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js":
      /*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js ***!
  \*****************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js":
      /*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js ***!
  \*************************************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js ***!
  \**********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js");\n\n// Thank\'s IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.5@core-js/internals/is-object.js");\n\nvar document = global.document;\n// typeof document.createElement is \'object\' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js":
      /*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js ***!
  \************************************************************************/
      /***/ (module) => {
        eval(
          "// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/_core-js@3.6.5@core-js/internals/engine-user-agent.js");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split(\'.\');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/engine-v8-version.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js":
      /*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js ***!
  \************************************************************************/
      /***/ (module) => {
        eval(
          "// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/export.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/export.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.5@core-js/internals/redefine.js");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/_core-js@3.6.5@core-js/internals/set-global.js");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? \'.\' : \'#\') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, \'sham\', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/export.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js":
      /*!****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/fails.js ***!
  \****************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/fails.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js ***!
  \********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/_core-js@3.6.5@core-js/internals/a-function.js");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/function-bind-context.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js ***!
  \***********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var path = __webpack_require__(/*! ../internals/path */ "./node_modules/_core-js@3.6.5@core-js/internals/path.js");\nvar global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\n\nvar aFunction = function (variable) {\n  return typeof variable == \'function\' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/global.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/global.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/global.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/has.js":
      /*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/has.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/has.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = {};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js");\nvar fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js");\n\n// Thank\'s IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement(\'div\'), \'a\', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js ***!
  \*************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js");\nvar global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.5@core-js/internals/is-object.js");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js");\nvar objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.5@core-js/internals/has.js");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError(\'Incompatible receiver, \' + TYPE + \' required\');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey(\'state\');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-array.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-array.js ***!
  \*******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-array.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js":
      /*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-object.js":
      /*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-object.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-object.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js":
      /*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js ***!
  \******************************************************************/
      /***/ (module) => {
        eval(
          "module.exports = false;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js":
      /*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js ***!
  \************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js ***!
  \**************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === \'function\' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js ***!
  \*********************************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          "var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js":
      /*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js ***!
  \*********************************************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          'var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js");\nvar has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.5@core-js/internals/has.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js ***!
  \****************************************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          "var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js":
      /*!******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js ***!
  \******************************************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          "exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js ***!
  \*******************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.5@core-js/internals/has.js");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don\'t enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js ***!
  \****************************************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        "use strict";
        eval(
          "\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js ***!
  \***************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js ***!
  \*******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.5@core-js/internals/an-object.js");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn(\'Reflect\', \'ownKeys\') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/path.js":
      /*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/path.js ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/path.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/redefine.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/redefine.js ***!
  \*******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/redefine.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js":
      /*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js ***!
  \***********************************************************************************/
      /***/ (module) => {
        eval(
          '// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError("Can\'t call method on " + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/set-global.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/set-global.js ***!
  \*********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/set-global.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js ***!
  \*********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/_core-js@3.6.5@core-js/internals/shared.js");\nvar uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/_core-js@3.6.5@core-js/internals/uid.js");\n\nvar keys = shared(\'keys\');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js ***!
  \***********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/_core-js@3.6.5@core-js/internals/set-global.js");\n\nvar SHARED = \'__core-js_shared__\';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared.js ***!
  \*****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/shared.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-length.js":
      /*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-length.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-length.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-object.js":
      /*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-object.js ***!
  \********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-object.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js ***!
  \***********************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js ***!
  \********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/uid.js":
      /*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/uid.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/uid.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js?"
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js ***!
  \****************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/_core-js@3.6.5@core-js/internals/shared.js");\nvar has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.5@core-js/internals/has.js");\nvar uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/_core-js@3.6.5@core-js/internals/uid.js");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js");\n\nvar WellKnownSymbolsStore = shared(\'wks\');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol(\'Symbol.\' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js":
      /*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '\nvar $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.5@core-js/internals/export.js");\nvar $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.5@core-js/internals/array-iteration.js").filter);\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-has-species-support.js");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.5@core-js/internals/array-method-uses-to-length.js");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport(\'filter\');\n// Edge 14- issue\nvar USES_TO_LENGTH = arrayMethodUsesToLength(\'filter\');\n\n// `Array.prototype.filter` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: \'Array\', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '\nvar $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.5@core-js/internals/export.js");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: \'Array\', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js ***!
  \**********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        eval(
          'var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.5@core-js/internals/export.js");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: \'Object\', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.define-property.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        eval(
          'var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/_core-js@3.6.5@core-js/internals/to-string-tag-support.js");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.5@core-js/internals/redefine.js");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/_core-js@3.6.5@core-js/internals/object-to-string.js");\n\n// `Object.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, \'toString\', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js?'
        );

        /***/
      },

    /***/ "./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js":
      /*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js ***!
  \*************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        eval(
          'var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.5@core-js/internals/global.js");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/_core-js@3.6.5@core-js/internals/dom-iterables.js");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/_core-js@3.6.5@core-js/internals/array-for-each.js");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, \'forEach\', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack://easy-canv/./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.ts");
  /******/
  /******/
})();
