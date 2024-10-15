
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes loader-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.glp-issue-modal {
  position: absolute;
  display: none;
  padding: 15px;
  background-color: var(--gl-background-color-default, var(--gl-color-neutral-0, #fff));
  border: 1px solid var(--gl-border-color-default);
  border-radius: 0.25rem;
  width: 300px;
  min-height: 300px;
  z-index: 99999;
}
.glp-issue-modal.glp-modal-visible {
  display: flex;
}
.glp-issue-modal .glp-issue-modal-inner {
  display: flex;
  flex-direction: column;
}
.glp-issue-modal .glp-modal-loader {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.glp-issue-modal .glp-modal-loader .glp-modal-loader-inner {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--gl-background-color-subtle, var(--gl-color-neutral-10, #fbfafd));
  animation: linear 1s infinite loader-animation;
  border-radius: 50%;
}
.glp-issue-modal .glp-modal-loader .glp-modal-loader-inner::after {
  content: "";
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  top: 5px;
  left: 50%;
  width: 5px;
  height: 5px;
  transform: translateX(-50%);
}
.glp-issue-modal .glp-block {
  padding: 0.75rem 0 1rem;
  border-bottom-style: solid;
  border-bottom-color: var(--gl-border-color-subtle, var(--gl-color-neutral-50, #ececef));
  border-bottom-width: 1px;
  width: 100%;
}
.glp-issue-modal .assignee-grid {
  margin-top: 4px;
  gap: 4px;
}

.glp-image-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  z-index: 99999;
}
.glp-image-modal.glp-modal-visible {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.glp-image-modal .glp-modal-img {
  max-width: 95%;
  max-height: 95%;
}
.glp-image-modal .glp-modal-close {
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 20px;
  color: black;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 20px;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/issue-preview.scss","webpack://./src/styles/index.scss","webpack://./src/styles/image-preview.scss"],"names":[],"mappings":"AAAA;EACI;IACI,uBAAA;ECCN;EDEE;IACI,yBAAA;ECAN;AACF;ADGA;EACI,kBAAA;EACA,aAAA;EACA,aAAA;EACA,qFAAA;EACA,gDAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;ACDJ;ADGI;EACI,aAAA;ACDR;ADII;EACI,aAAA;EACA,sBAAA;ACFR;ADKI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,SAAA;EACA,QAAA;ACHR;ADKQ;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wFAAA;EACA,8CAAA;EACA,kBAAA;ACHZ;ADKY;EACI,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,2BAAA;ACHhB;ADQI;EACI,uBAAA;EACA,0BAAA;EACA,uFAAA;EACA,wBAAA;EACA,WAAA;ACNR;ADSI;EACI,eAAA;EACA,QAAA;ACPR;;AC/DA;EACI,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,cAAA;ADkEJ;AChEI;EACI,mBAAA;EACA,UAAA;EACA,oBAAA;ADkER;AC/DI;EACI,cAAA;EACA,eAAA;ADiER;AC9DI;EACI,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;ADgER","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Component.ts":
/*!*************************************!*\
  !*** ./src/components/Component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Component {
    constructor(element) {
        this.element = element;
    }
    setStyle(styles) {
        Object.entries(styles).forEach(([key, value]) => {
            this.element.style.setProperty(key, `${value}`);
        });
    }
    setParams(params) {
        Object.entries(params).forEach(([key, value]) => {
            let _value = `${value}`;
            if (value === undefined || value === false) {
                _value = '';
            }
            this.element.setAttribute(key, _value);
        });
    }
    addClassName(className) {
        this.element.classList.add(className);
    }
    event(event, callback) {
        this.element.addEventListener(event, callback);
    }
    getElement() {
        return this.element;
    }
}
exports["default"] = Component;


/***/ }),

/***/ "./src/components/ImageModal.ts":
/*!**************************************!*\
  !*** ./src/components/ImageModal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
const ImageElement_1 = __webpack_require__(/*! ./image/ImageElement */ "./src/components/image/ImageElement.ts");
const CloseModal_1 = __webpack_require__(/*! ./image/CloseModal */ "./src/components/image/CloseModal.ts");
class ImageModal extends Component_1.default {
    constructor() {
        super(document.createElement('div'));
        this.image = new ImageElement_1.default();
        this.close = new CloseModal_1.default();
        this.visibleClassName = 'glp-modal-visible';
        this.addClassName('glp-image-modal');
        this.element.appendChild(this.image.getElement());
        this.element.appendChild(this.close.getElement());
        this.close.onClick(this.hide.bind(this));
        document.body.appendChild(this.element);
    }
    show(src) {
        this.image.updateSrc(src);
        this.element.classList.add(this.visibleClassName);
    }
    hide() {
        this.element.classList.remove(this.visibleClassName);
        this.image.updateSrc('');
    }
}
exports["default"] = ImageModal;


/***/ }),

/***/ "./src/components/IssueModal.ts":
/*!**************************************!*\
  !*** ./src/components/IssueModal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
const IssueLoader_1 = __webpack_require__(/*! ./issue/IssueLoader */ "./src/components/issue/IssueLoader.ts");
const IssueModalContent_1 = __webpack_require__(/*! ./issue/IssueModalContent */ "./src/components/issue/IssueModalContent.ts");
class IssueModal extends Component_1.default {
    constructor() {
        super(document.createElement('div'));
        this.loader = new IssueLoader_1.default();
        this.content = new IssueModalContent_1.IssueModalContent();
        this.visibleClassName = 'glp-modal-visible';
        this.addClassName('glp-issue-modal');
        document.body.appendChild(this.element);
    }
    show(event) {
        this.element.appendChild(this.loader.getElement());
        this.element.style.left = `${event.pageX + 5}px`;
        this.element.style.top = `${event.pageY + 5}px`;
        this.element.classList.add(this.visibleClassName);
    }
    hide() {
        this.element.classList.remove(this.visibleClassName);
        this.clear();
    }
    clear() {
        this.element.innerHTML = '';
    }
    updateContent(issue) {
        this.content.update(issue);
        this.clear();
        this.element.appendChild(this.content.getElement());
    }
}
exports["default"] = IssueModal;


/***/ }),

/***/ "./src/components/image/CloseModal.ts":
/*!********************************************!*\
  !*** ./src/components/image/CloseModal.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/Component.ts");
class CloseModal extends Component_1.default {
    constructor() {
        super(document.createElement('div'));
        this.addClassName('glp-modal-close');
        this.element.innerHTML = 'X';
    }
    onClick(callback) {
        this.element.addEventListener('click', callback);
    }
}
exports["default"] = CloseModal;


/***/ }),

/***/ "./src/components/image/ImageElement.ts":
/*!**********************************************!*\
  !*** ./src/components/image/ImageElement.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/Component.ts");
class ImageElement extends Component_1.default {
    constructor() {
        super(document.createElement('img'));
        this.addClassName('glp-modal-img');
    }
    updateSrc(src) {
        this.element.src = src;
    }
}
exports["default"] = ImageElement;


/***/ }),

/***/ "./src/components/issue/IssueAssignee.ts":
/*!***********************************************!*\
  !*** ./src/components/issue/IssueAssignee.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue/IssueBlock.ts");
class IssueAssignee extends IssueBlock_1.default {
    constructor() {
        super('Assignee');
    }
    update(issue) {
        this.updateContent(issue.assignees.map((assignee) => this.createContent(assignee)).join(''));
    }
    createContent(assignee) {
        return `
<div class="assignee-grid gl-flex gl-w-full gl-items-center">
    <img src="${assignee.avatar_url}" alt="${assignee.name}'s avatar" class="gl-avatar gl-avatar-circle gl-avatar-s24"   >
    <span>${assignee.name}</span>
</div>`;
    }
}
exports["default"] = IssueAssignee;


/***/ }),

/***/ "./src/components/issue/IssueBlock.ts":
/*!********************************************!*\
  !*** ./src/components/issue/IssueBlock.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/Component.ts");
class IssueBlock extends Component_1.default {
    constructor(title = '', content = '') {
        super(document.createElement('div'));
        this.titleComponent = document.createElement('div');
        this.contentComponent = document.createElement('div');
        this.addClassName('glp-block');
        this.element.appendChild(this.titleComponent);
        this.titleComponent.classList.add('gl-flex', 'gl-items-center', 'gl-font-bold', 'gl-leading-20', 'gl-text-gray-900');
        this.updateTitle(title);
        this.element.appendChild(this.contentComponent);
        this.updateContent(content);
    }
    updateTitle(title) {
        this.titleComponent.innerHTML = title;
    }
    updateContent(content) {
        this.contentComponent.innerHTML = content;
    }
}
exports["default"] = IssueBlock;


/***/ }),

/***/ "./src/components/issue/IssueIteration.ts":
/*!************************************************!*\
  !*** ./src/components/issue/IssueIteration.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue/IssueBlock.ts");
class IssueIteration extends IssueBlock_1.default {
    constructor() {
        super('Iteration');
    }
    update(issue) {
        this.updateContent(issue.iteration
            ? [issue.iteration.start_date, issue.iteration.due_date].join(' - ')
            : '');
    }
}
exports["default"] = IssueIteration;


/***/ }),

/***/ "./src/components/issue/IssueLabels.ts":
/*!*********************************************!*\
  !*** ./src/components/issue/IssueLabels.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue/IssueBlock.ts");
class IssueLabels extends IssueBlock_1.default {
    constructor() {
        super('Labels');
    }
    update(issue) {
        this.updateContent(issue.labels.map((label) => this.createLabel(label)).join(''));
    }
    createLabel(label) {
        let content = `<span class="gl-label-text">${label.name}</span>`;
        let classNames = `gl-label hide-collapsed ${'#FFFFFF' === label.text_color
            ? 'gl-label-text-light'
            : 'gl-label-text-dark'}`;
        if (label.name.includes('::')) {
            const [scope, text] = label.name.split('::');
            content = `<span class="gl-label-text">${scope}</span><span class="gl-label-text-scoped">${text}</span>`;
            classNames += ' gl-label-scoped';
        }
        return `
<span class=" ${classNames}" style="--label-background-color: ${label.color}; --label-inset-border: inset 0 0 0 2px ${label.color};">
  <span class="gl-link gl-label-link gl-label-link-underline">
    ${content}
  </span>
</span>
`;
    }
}
exports["default"] = IssueLabels;


/***/ }),

/***/ "./src/components/issue/IssueLoader.ts":
/*!*********************************************!*\
  !*** ./src/components/issue/IssueLoader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/Component.ts");
class IssueLoader extends Component_1.default {
    constructor() {
        super(document.createElement('div'));
        this.addClassName('glp-modal-loader');
        const loaderInner = document.createElement('div');
        loaderInner.classList.add('glp-modal-loader-inner');
        this.element.appendChild(loaderInner);
    }
}
exports["default"] = IssueLoader;


/***/ }),

/***/ "./src/components/issue/IssueMilestone.ts":
/*!************************************************!*\
  !*** ./src/components/issue/IssueMilestone.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue/IssueBlock.ts");
class IssueMilestone extends IssueBlock_1.default {
    constructor() {
        super('Milestone');
    }
    update(issue) {
        this.updateContent(issue.milestone ? issue.milestone.title : '');
    }
}
exports["default"] = IssueMilestone;


/***/ }),

/***/ "./src/components/issue/IssueModalContent.ts":
/*!***************************************************!*\
  !*** ./src/components/issue/IssueModalContent.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueModalContent = void 0;
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/Component.ts");
const IssueTitle_1 = __webpack_require__(/*! ./IssueTitle */ "./src/components/issue/IssueTitle.ts");
const IssueAssignee_1 = __webpack_require__(/*! ./IssueAssignee */ "./src/components/issue/IssueAssignee.ts");
const IssueLabels_1 = __webpack_require__(/*! ./IssueLabels */ "./src/components/issue/IssueLabels.ts");
const IssueMilestone_1 = __webpack_require__(/*! ./IssueMilestone */ "./src/components/issue/IssueMilestone.ts");
const IssueIteration_1 = __webpack_require__(/*! ./IssueIteration */ "./src/components/issue/IssueIteration.ts");
class IssueModalContent extends Component_1.default {
    constructor() {
        super(document.createElement('div'));
        this.components = [
            new IssueTitle_1.default(),
            new IssueAssignee_1.default(),
            new IssueLabels_1.default(),
            new IssueMilestone_1.default(),
            new IssueIteration_1.default(),
        ];
        this.addClassName('glp-issue-modal-inner');
    }
    update(issue) {
        this.element.innerHTML = '';
        this.components.forEach((component) => {
            component.update(issue);
            this.element.appendChild(component.getElement());
        });
    }
}
exports.IssueModalContent = IssueModalContent;


/***/ }),

/***/ "./src/components/issue/IssueTitle.ts":
/*!********************************************!*\
  !*** ./src/components/issue/IssueTitle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue/IssueBlock.ts");
class IssueTitle extends IssueBlock_1.default {
    update(issue) {
        this.updateTitle(issue.title);
    }
}
exports["default"] = IssueTitle;


/***/ }),

/***/ "./src/helpers/ImageLinks.ts":
/*!***********************************!*\
  !*** ./src/helpers/ImageLinks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageLinks = void 0;
class ImageLinks {
    constructor() {
        this.linkReady = 'glp-link-ready';
    }
    getLinks() {
        const elements = [
            ...document.querySelectorAll('.no-attachment-icon'),
        ].filter((link) => !link.classList.contains(this.linkReady) &&
            /\.(png|jpg|jpeg|heic)$/.test(link.href));
        elements.forEach((link) => {
            link.classList.add(this.linkReady);
        });
        return elements;
    }
}
exports.ImageLinks = ImageLinks;


/***/ }),

/***/ "./src/helpers/IssueLinks.ts":
/*!***********************************!*\
  !*** ./src/helpers/IssueLinks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueLinks = void 0;
class IssueLinks {
    constructor() {
        this.linkReady = 'glp-link-ready';
    }
    parseLink(link) {
        const [url, issueId] = link.split('/-/issues/');
        const [_, projectId] = url.split('.com/');
        return {
            projectId: projectId.replace(/\//g, '%2F'),
            issueId: issueId.replace(/\D+/g, ''),
        };
    }
    getLinks() {
        const elements = [
            ...document.querySelectorAll('a[href*=issues]'),
        ].filter((link) => !link.classList.contains(this.linkReady) &&
            /issues\/\d+/.test(link.href));
        elements.forEach((link) => {
            link.classList.add(this.linkReady);
        });
        return elements;
    }
}
exports.IssueLinks = IssueLinks;


/***/ }),

/***/ "./src/helpers/intendHover.ts":
/*!************************************!*\
  !*** ./src/helpers/intendHover.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function intendHover(element, listener) {
    let hover = false;
    let id = 0;
    const onHover = (ev) => {
        hover = true;
        id = window.setTimeout(() => {
            if (hover) {
                listener.call(element, ev);
            }
        }, 1000);
    };
    element.addEventListener('mouseenter', onHover);
    element.addEventListener('mouseleave', () => {
        clearTimeout(id);
        hover = false;
    });
}
exports["default"] = intendHover;


/***/ }),

/***/ "./src/providers/IssueProvider.ts":
/*!****************************************!*\
  !*** ./src/providers/IssueProvider.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueProvider = void 0;
const Cache_1 = __webpack_require__(/*! ../services/Cache */ "./src/services/Cache.ts");
class IssueProvider {
    constructor() {
        this.cache = new Cache_1.default();
        this.url = 'https://gitlab.com/api/v4/';
        this.path = 'projects/:PROJECT_ID/issues?iids[]=:ISSUE_ID&with_labels_details=true';
    }
    async get(key, path) {
        const cacheValue = this.cache.get(key);
        if (cacheValue) {
            return cacheValue;
        }
        const response = await fetch(`${this.url}${path}`);
        const issues = await response.json();
        this.cache.set(key, issues[0]);
        return issues[0];
    }
    async getIssue(projectId, issueId) {
        return this.get(`glp-issue-${projectId}-${issueId}`, this.path
            .replace(':PROJECT_ID', projectId)
            .replace(':ISSUE_ID', issueId));
    }
}
exports.IssueProvider = IssueProvider;


/***/ }),

/***/ "./src/services/Cache.ts":
/*!*******************************!*\
  !*** ./src/services/Cache.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Cache {
    get(key) {
        try {
            const data = sessionStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        }
        catch (_) {
            return undefined;
        }
        return undefined;
    }
    set(key, value) {
        try {
            const data = JSON.stringify(value);
            sessionStorage.setItem(key, data);
        }
        catch (_) {
            return;
        }
    }
}
exports["default"] = Cache;


/***/ }),

/***/ "./src/services/ImagePreview.ts":
/*!**************************************!*\
  !*** ./src/services/ImagePreview.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ImageModal_1 = __webpack_require__(/*! ../components/ImageModal */ "./src/components/ImageModal.ts");
const ImageLinks_1 = __webpack_require__(/*! ../helpers/ImageLinks */ "./src/helpers/ImageLinks.ts");
class ImagePreview {
    constructor() {
        this.modal = new ImageModal_1.default();
        this.imageLink = new ImageLinks_1.ImageLinks();
    }
    init() {
        this.initLinks();
        setInterval(this.initLinks.bind(this), 3000);
    }
    initLinks() {
        this.imageLink.getLinks().forEach((link) => {
            link.addEventListener('click', this.onClick.bind(this));
        });
    }
    onClick(event) {
        if (!event.target) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.modal.show(this.elementSrc(event.target));
        return false;
    }
    elementSrc(element) {
        if (element instanceof HTMLAnchorElement) {
            return element.href;
        }
        if (element instanceof HTMLImageElement) {
            return element.parentElement.href;
        }
        return '';
    }
}
exports["default"] = ImagePreview;


/***/ }),

/***/ "./src/services/IssuePreview.ts":
/*!**************************************!*\
  !*** ./src/services/IssuePreview.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueModal_1 = __webpack_require__(/*! ../components/IssueModal */ "./src/components/IssueModal.ts");
const IssueLinks_1 = __webpack_require__(/*! ../helpers/IssueLinks */ "./src/helpers/IssueLinks.ts");
const intendHover_1 = __webpack_require__(/*! ../helpers/intendHover */ "./src/helpers/intendHover.ts");
const IssueProvider_1 = __webpack_require__(/*! ../providers/IssueProvider */ "./src/providers/IssueProvider.ts");
class IssuePreview {
    constructor() {
        this.modal = new IssueModal_1.default();
        this.issue = new IssueProvider_1.IssueProvider();
        this.issueLink = new IssueLinks_1.IssueLinks();
    }
    init() {
        this.initLinks();
        setInterval(this.initLinks.bind(this), 3000);
    }
    initLinks() {
        this.issueLink.getLinks().forEach((link) => {
            (0, intendHover_1.default)(link, this.onHover.bind(this));
            link.addEventListener('mouseleave', this.onLeave.bind(this));
        });
    }
    async onHover(event) {
        this.modal.show(event);
        const element = event.target;
        const { projectId, issueId } = this.issueLink.parseLink(element.href);
        const issue = await this.issue.getIssue(projectId, issueId);
        this.modal.updateContent(issue);
    }
    onLeave() {
        this.modal.hide();
    }
}
exports["default"] = IssuePreview;


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
const IssuePreview_1 = __webpack_require__(/*! ./services/IssuePreview */ "./src/services/IssuePreview.ts");
const ImagePreview_1 = __webpack_require__(/*! ./services/ImagePreview */ "./src/services/ImagePreview.ts");
[ImagePreview_1.default, IssuePreview_1.default].forEach((Service) => new Service().init());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ3JDRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUIsbUJBQU8sQ0FBQyxnRUFBMEI7QUFDdkQscUJBQXFCLG1CQUFPLENBQUMsMERBQXVCO0FBQ3BELHNCQUFzQixtQkFBTyxDQUFDLDREQUF3QjtBQUN0RCx3QkFBd0IsbUJBQU8sQ0FBQyxvRUFBNEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7OztVQ2pDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLG9EQUFxQjtBQUM3Qix1QkFBdUIsbUJBQU8sQ0FBQywrREFBeUI7QUFDeEQsdUJBQXVCLG1CQUFPLENBQUMsK0RBQXlCO0FBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VNb2RhbC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL0lzc3VlTW9kYWwudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9pbWFnZS9DbG9zZU1vZGFsLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UvSW1hZ2VFbGVtZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUvSXNzdWVBc3NpZ25lZS50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2lzc3VlL0lzc3VlQmxvY2sudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9pc3N1ZS9Jc3N1ZUl0ZXJhdGlvbi50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2lzc3VlL0lzc3VlTGFiZWxzLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUvSXNzdWVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9pc3N1ZS9Jc3N1ZU1pbGVzdG9uZS50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2lzc3VlL0lzc3VlTW9kYWxDb250ZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUvSXNzdWVUaXRsZS50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9oZWxwZXJzL0ltYWdlTGlua3MudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvaGVscGVycy9Jc3N1ZUxpbmtzLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2hlbHBlcnMvaW50ZW5kSG92ZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL0lzc3VlUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc2VydmljZXMvQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc2VydmljZXMvSW1hZ2VQcmV2aWV3LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL3NlcnZpY2VzL0lzc3VlUHJldmlldy50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdGxhYi1wbHVzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBsb2FkZXItYW5pbWF0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5nbHAtaXNzdWUtbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdsLWJhY2tncm91bmQtY29sb3ItZGVmYXVsdCwgdmFyKC0tZ2wtY29sb3ItbmV1dHJhbC0wLCAjZmZmKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdsLWJvcmRlci1jb2xvci1kZWZhdWx0KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgei1pbmRleDogOTk5OTk7XG59XG4uZ2xwLWlzc3VlLW1vZGFsLmdscC1tb2RhbC12aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5nbHAtaXNzdWUtbW9kYWwgLmdscC1pc3N1ZS1tb2RhbC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZ2xwLWlzc3VlLW1vZGFsIC5nbHAtbW9kYWwtbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbn1cbi5nbHAtaXNzdWUtbW9kYWwgLmdscC1tb2RhbC1sb2FkZXIgLmdscC1tb2RhbC1sb2FkZXItaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdsLWJhY2tncm91bmQtY29sb3Itc3VidGxlLCB2YXIoLS1nbC1jb2xvci1uZXV0cmFsLTEwLCAjZmJmYWZkKSk7XG4gIGFuaW1hdGlvbjogbGluZWFyIDFzIGluZmluaXRlIGxvYWRlci1hbmltYXRpb247XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5nbHAtaXNzdWUtbW9kYWwgLmdscC1tb2RhbC1sb2FkZXIgLmdscC1tb2RhbC1sb2FkZXItaW5uZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uZ2xwLWlzc3VlLW1vZGFsIC5nbHAtYmxvY2sge1xuICBwYWRkaW5nOiAwLjc1cmVtIDAgMXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWdsLWJvcmRlci1jb2xvci1zdWJ0bGUsIHZhcigtLWdsLWNvbG9yLW5ldXRyYWwtNTAsICNlY2VjZWYpKTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5nbHAtaXNzdWUtbW9kYWwgLmFzc2lnbmVlLWdyaWQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGdhcDogNHB4O1xufVxuXG4uZ2xwLWltYWdlLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuLmdscC1pbWFnZS1tb2RhbC5nbHAtbW9kYWwtdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLmdscC1pbWFnZS1tb2RhbCAuZ2xwLW1vZGFsLWltZyB7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiA5NSU7XG59XG4uZ2xwLWltYWdlLW1vZGFsIC5nbHAtbW9kYWwtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2lzc3VlLXByZXZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2ltYWdlLXByZXZpZXcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJO0lBQ0ksdUJBQUE7RUNDTjtFREVFO0lBQ0kseUJBQUE7RUNBTjtBQUNGO0FER0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUZBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0k7RUFDSSxhQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0ZSO0FES0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0hSO0FES1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0ZBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FDSFo7QURLWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNIaEI7QURRSTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1RkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQ05SO0FEU0k7RUFDSSxlQUFBO0VBQ0EsUUFBQTtBQ1BSOztBQy9EQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRGtFSjtBQ2hFSTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FEa0VSO0FDL0RJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QURpRVI7QUM5REk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURnRVJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIHNldFN0eWxlKHN0eWxlcykge1xuICAgICAgICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgYCR7dmFsdWV9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBsZXQgX3ZhbHVlID0gYCR7dmFsdWV9YDtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF92YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIF92YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRDbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9Db21wb25lbnRcIik7XG5jb25zdCBJbWFnZUVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuL2ltYWdlL0ltYWdlRWxlbWVudFwiKTtcbmNvbnN0IENsb3NlTW9kYWxfMSA9IHJlcXVpcmUoXCIuL2ltYWdlL0Nsb3NlTW9kYWxcIik7XG5jbGFzcyBJbWFnZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZUVsZW1lbnRfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBuZXcgQ2xvc2VNb2RhbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2xhc3NOYW1lID0gJ2dscC1tb2RhbC12aXNpYmxlJztcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2dscC1pbWFnZS1tb2RhbCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbWFnZS5nZXRFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZS5nZXRFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLmNsb3NlLm9uQ2xpY2sodGhpcy5oaWRlLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHNob3coc3JjKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UudXBkYXRlU3JjKHNyYyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuaW1hZ2UudXBkYXRlU3JjKCcnKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZU1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKTtcbmNvbnN0IElzc3VlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9pc3N1ZS9Jc3N1ZUxvYWRlclwiKTtcbmNvbnN0IElzc3VlTW9kYWxDb250ZW50XzEgPSByZXF1aXJlKFwiLi9pc3N1ZS9Jc3N1ZU1vZGFsQ29udGVudFwiKTtcbmNsYXNzIElzc3VlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBJc3N1ZUxvYWRlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbmV3IElzc3VlTW9kYWxDb250ZW50XzEuSXNzdWVNb2RhbENvbnRlbnQoKTtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2xhc3NOYW1lID0gJ2dscC1tb2RhbC12aXNpYmxlJztcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2dscC1pc3N1ZS1tb2RhbCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHNob3coZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubG9hZGVyLmdldEVsZW1lbnQoKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQucGFnZVggKyA1fXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke2V2ZW50LnBhZ2VZICsgNX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgdXBkYXRlQ29udGVudChpc3N1ZSkge1xuICAgICAgICB0aGlzLmNvbnRlbnQudXBkYXRlKGlzc3VlKTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50LmdldEVsZW1lbnQoKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSXNzdWVNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgQ2xvc2VNb2RhbCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdnbHAtbW9kYWwtY2xvc2UnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICdYJztcbiAgICB9XG4gICAgb25DbGljayhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xvc2VNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgSW1hZ2VFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2dscC1tb2RhbC1pbWcnKTtcbiAgICB9XG4gICAgdXBkYXRlU3JjKHNyYykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gc3JjO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSXNzdWVCbG9ja18xID0gcmVxdWlyZShcIi4vSXNzdWVCbG9ja1wiKTtcbmNsYXNzIElzc3VlQXNzaWduZWUgZXh0ZW5kcyBJc3N1ZUJsb2NrXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdBc3NpZ25lZScpO1xuICAgIH1cbiAgICB1cGRhdGUoaXNzdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KGlzc3VlLmFzc2lnbmVlcy5tYXAoKGFzc2lnbmVlKSA9PiB0aGlzLmNyZWF0ZUNvbnRlbnQoYXNzaWduZWUpKS5qb2luKCcnKSk7XG4gICAgfVxuICAgIGNyZWF0ZUNvbnRlbnQoYXNzaWduZWUpIHtcbiAgICAgICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9XCJhc3NpZ25lZS1ncmlkIGdsLWZsZXggZ2wtdy1mdWxsIGdsLWl0ZW1zLWNlbnRlclwiPlxuICAgIDxpbWcgc3JjPVwiJHthc3NpZ25lZS5hdmF0YXJfdXJsfVwiIGFsdD1cIiR7YXNzaWduZWUubmFtZX0ncyBhdmF0YXJcIiBjbGFzcz1cImdsLWF2YXRhciBnbC1hdmF0YXItY2lyY2xlIGdsLWF2YXRhci1zMjRcIiAgID5cbiAgICA8c3Bhbj4ke2Fzc2lnbmVlLm5hbWV9PC9zcGFuPlxuPC9kaXY+YDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJc3N1ZUFzc2lnbmVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRcIik7XG5jbGFzcyBJc3N1ZUJsb2NrIGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUgPSAnJywgY29udGVudCA9ICcnKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGhpcy50aXRsZUNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRlbnRDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2dscC1ibG9jaycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMudGl0bGVDb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZ2wtZmxleCcsICdnbC1pdGVtcy1jZW50ZXInLCAnZ2wtZm9udC1ib2xkJywgJ2dsLWxlYWRpbmctMjAnLCAnZ2wtdGV4dC1ncmF5LTkwMCcpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKHRpdGxlKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudChjb250ZW50KTtcbiAgICB9XG4gICAgdXBkYXRlVGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZUNvbXBvbmVudC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICB9XG4gICAgdXBkYXRlQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudENvbXBvbmVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlQmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElzc3VlQmxvY2tfMSA9IHJlcXVpcmUoXCIuL0lzc3VlQmxvY2tcIik7XG5jbGFzcyBJc3N1ZUl0ZXJhdGlvbiBleHRlbmRzIElzc3VlQmxvY2tfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ0l0ZXJhdGlvbicpO1xuICAgIH1cbiAgICB1cGRhdGUoaXNzdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KGlzc3VlLml0ZXJhdGlvblxuICAgICAgICAgICAgPyBbaXNzdWUuaXRlcmF0aW9uLnN0YXJ0X2RhdGUsIGlzc3VlLml0ZXJhdGlvbi5kdWVfZGF0ZV0uam9pbignIC0gJylcbiAgICAgICAgICAgIDogJycpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlSXRlcmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJc3N1ZUJsb2NrXzEgPSByZXF1aXJlKFwiLi9Jc3N1ZUJsb2NrXCIpO1xuY2xhc3MgSXNzdWVMYWJlbHMgZXh0ZW5kcyBJc3N1ZUJsb2NrXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdMYWJlbHMnKTtcbiAgICB9XG4gICAgdXBkYXRlKGlzc3VlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudChpc3N1ZS5sYWJlbHMubWFwKChsYWJlbCkgPT4gdGhpcy5jcmVhdGVMYWJlbChsYWJlbCkpLmpvaW4oJycpKTtcbiAgICB9XG4gICAgY3JlYXRlTGFiZWwobGFiZWwpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBgPHNwYW4gY2xhc3M9XCJnbC1sYWJlbC10ZXh0XCI+JHtsYWJlbC5uYW1lfTwvc3Bhbj5gO1xuICAgICAgICBsZXQgY2xhc3NOYW1lcyA9IGBnbC1sYWJlbCBoaWRlLWNvbGxhcHNlZCAkeycjRkZGRkZGJyA9PT0gbGFiZWwudGV4dF9jb2xvclxuICAgICAgICAgICAgPyAnZ2wtbGFiZWwtdGV4dC1saWdodCdcbiAgICAgICAgICAgIDogJ2dsLWxhYmVsLXRleHQtZGFyayd9YDtcbiAgICAgICAgaWYgKGxhYmVsLm5hbWUuaW5jbHVkZXMoJzo6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IFtzY29wZSwgdGV4dF0gPSBsYWJlbC5uYW1lLnNwbGl0KCc6OicpO1xuICAgICAgICAgICAgY29udGVudCA9IGA8c3BhbiBjbGFzcz1cImdsLWxhYmVsLXRleHRcIj4ke3Njb3BlfTwvc3Bhbj48c3BhbiBjbGFzcz1cImdsLWxhYmVsLXRleHQtc2NvcGVkXCI+JHt0ZXh0fTwvc3Bhbj5gO1xuICAgICAgICAgICAgY2xhc3NOYW1lcyArPSAnIGdsLWxhYmVsLXNjb3BlZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBcbjxzcGFuIGNsYXNzPVwiICR7Y2xhc3NOYW1lc31cIiBzdHlsZT1cIi0tbGFiZWwtYmFja2dyb3VuZC1jb2xvcjogJHtsYWJlbC5jb2xvcn07IC0tbGFiZWwtaW5zZXQtYm9yZGVyOiBpbnNldCAwIDAgMCAycHggJHtsYWJlbC5jb2xvcn07XCI+XG4gIDxzcGFuIGNsYXNzPVwiZ2wtbGluayBnbC1sYWJlbC1saW5rIGdsLWxhYmVsLWxpbmstdW5kZXJsaW5lXCI+XG4gICAgJHtjb250ZW50fVxuICA8L3NwYW4+XG48L3NwYW4+XG5gO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlTGFiZWxzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRcIik7XG5jbGFzcyBJc3N1ZUxvYWRlciBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdnbHAtbW9kYWwtbG9hZGVyJyk7XG4gICAgICAgIGNvbnN0IGxvYWRlcklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvYWRlcklubmVyLmNsYXNzTGlzdC5hZGQoJ2dscC1tb2RhbC1sb2FkZXItaW5uZXInKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGxvYWRlcklubmVyKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJc3N1ZUxvYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSXNzdWVCbG9ja18xID0gcmVxdWlyZShcIi4vSXNzdWVCbG9ja1wiKTtcbmNsYXNzIElzc3VlTWlsZXN0b25lIGV4dGVuZHMgSXNzdWVCbG9ja18xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignTWlsZXN0b25lJyk7XG4gICAgfVxuICAgIHVwZGF0ZShpc3N1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoaXNzdWUubWlsZXN0b25lID8gaXNzdWUubWlsZXN0b25lLnRpdGxlIDogJycpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlTWlsZXN0b25lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklzc3VlTW9kYWxDb250ZW50ID0gdm9pZCAwO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY29uc3QgSXNzdWVUaXRsZV8xID0gcmVxdWlyZShcIi4vSXNzdWVUaXRsZVwiKTtcbmNvbnN0IElzc3VlQXNzaWduZWVfMSA9IHJlcXVpcmUoXCIuL0lzc3VlQXNzaWduZWVcIik7XG5jb25zdCBJc3N1ZUxhYmVsc18xID0gcmVxdWlyZShcIi4vSXNzdWVMYWJlbHNcIik7XG5jb25zdCBJc3N1ZU1pbGVzdG9uZV8xID0gcmVxdWlyZShcIi4vSXNzdWVNaWxlc3RvbmVcIik7XG5jb25zdCBJc3N1ZUl0ZXJhdGlvbl8xID0gcmVxdWlyZShcIi4vSXNzdWVJdGVyYXRpb25cIik7XG5jbGFzcyBJc3N1ZU1vZGFsQ29udGVudCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIG5ldyBJc3N1ZVRpdGxlXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgbmV3IElzc3VlQXNzaWduZWVfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgSXNzdWVMYWJlbHNfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgSXNzdWVNaWxlc3RvbmVfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICBuZXcgSXNzdWVJdGVyYXRpb25fMS5kZWZhdWx0KCksXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdnbHAtaXNzdWUtbW9kYWwtaW5uZXInKTtcbiAgICB9XG4gICAgdXBkYXRlKGlzc3VlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LnVwZGF0ZShpc3N1ZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50LmdldEVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuSXNzdWVNb2RhbENvbnRlbnQgPSBJc3N1ZU1vZGFsQ29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSXNzdWVCbG9ja18xID0gcmVxdWlyZShcIi4vSXNzdWVCbG9ja1wiKTtcbmNsYXNzIElzc3VlVGl0bGUgZXh0ZW5kcyBJc3N1ZUJsb2NrXzEuZGVmYXVsdCB7XG4gICAgdXBkYXRlKGlzc3VlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGl0bGUoaXNzdWUudGl0bGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlVGl0bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW1hZ2VMaW5rcyA9IHZvaWQgMDtcbmNsYXNzIEltYWdlTGlua3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpbmtSZWFkeSA9ICdnbHAtbGluay1yZWFkeSc7XG4gICAgfVxuICAgIGdldExpbmtzKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uby1hdHRhY2htZW50LWljb24nKSxcbiAgICAgICAgXS5maWx0ZXIoKGxpbmspID0+ICFsaW5rLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmxpbmtSZWFkeSkgJiZcbiAgICAgICAgICAgIC9cXC4ocG5nfGpwZ3xqcGVnfGhlaWMpJC8udGVzdChsaW5rLmhyZWYpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKHRoaXMubGlua1JlYWR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICB9XG59XG5leHBvcnRzLkltYWdlTGlua3MgPSBJbWFnZUxpbmtzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklzc3VlTGlua3MgPSB2b2lkIDA7XG5jbGFzcyBJc3N1ZUxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saW5rUmVhZHkgPSAnZ2xwLWxpbmstcmVhZHknO1xuICAgIH1cbiAgICBwYXJzZUxpbmsobGluaykge1xuICAgICAgICBjb25zdCBbdXJsLCBpc3N1ZUlkXSA9IGxpbmsuc3BsaXQoJy8tL2lzc3Vlcy8nKTtcbiAgICAgICAgY29uc3QgW18sIHByb2plY3RJZF0gPSB1cmwuc3BsaXQoJy5jb20vJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZC5yZXBsYWNlKC9cXC8vZywgJyUyRicpLFxuICAgICAgICAgICAgaXNzdWVJZDogaXNzdWVJZC5yZXBsYWNlKC9cXEQrL2csICcnKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0TGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmKj1pc3N1ZXNdJyksXG4gICAgICAgIF0uZmlsdGVyKChsaW5rKSA9PiAhbGluay5jbGFzc0xpc3QuY29udGFpbnModGhpcy5saW5rUmVhZHkpICYmXG4gICAgICAgICAgICAvaXNzdWVzXFwvXFxkKy8udGVzdChsaW5rLmhyZWYpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKHRoaXMubGlua1JlYWR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICB9XG59XG5leHBvcnRzLklzc3VlTGlua3MgPSBJc3N1ZUxpbmtzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpbnRlbmRIb3ZlcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgIGxldCBob3ZlciA9IGZhbHNlO1xuICAgIGxldCBpZCA9IDA7XG4gICAgY29uc3Qgb25Ib3ZlciA9IChldikgPT4ge1xuICAgICAgICBob3ZlciA9IHRydWU7XG4gICAgICAgIGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhvdmVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbChlbGVtZW50LCBldik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25Ib3Zlcik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICBob3ZlciA9IGZhbHNlO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gaW50ZW5kSG92ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSXNzdWVQcm92aWRlciA9IHZvaWQgMDtcbmNvbnN0IENhY2hlXzEgPSByZXF1aXJlKFwiLi4vc2VydmljZXMvQ2FjaGVcIik7XG5jbGFzcyBJc3N1ZVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBDYWNoZV8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9naXRsYWIuY29tL2FwaS92NC8nO1xuICAgICAgICB0aGlzLnBhdGggPSAncHJvamVjdHMvOlBST0pFQ1RfSUQvaXNzdWVzP2lpZHNbXT06SVNTVUVfSUQmd2l0aF9sYWJlbHNfZGV0YWlscz10cnVlJztcbiAgICB9XG4gICAgYXN5bmMgZ2V0KGtleSwgcGF0aCkge1xuICAgICAgICBjb25zdCBjYWNoZVZhbHVlID0gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGNhY2hlVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy51cmx9JHtwYXRofWApO1xuICAgICAgICBjb25zdCBpc3N1ZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgaXNzdWVzWzBdKTtcbiAgICAgICAgcmV0dXJuIGlzc3Vlc1swXTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0SXNzdWUocHJvamVjdElkLCBpc3N1ZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgZ2xwLWlzc3VlLSR7cHJvamVjdElkfS0ke2lzc3VlSWR9YCwgdGhpcy5wYXRoXG4gICAgICAgICAgICAucmVwbGFjZSgnOlBST0pFQ1RfSUQnLCBwcm9qZWN0SWQpXG4gICAgICAgICAgICAucmVwbGFjZSgnOklTU1VFX0lEJywgaXNzdWVJZCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuSXNzdWVQcm92aWRlciA9IElzc3VlUHJvdmlkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIENhY2hlIHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FjaGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEltYWdlTW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0ltYWdlTW9kYWxcIik7XG5jb25zdCBJbWFnZUxpbmtzXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9JbWFnZUxpbmtzXCIpO1xuY2xhc3MgSW1hZ2VQcmV2aWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBJbWFnZU1vZGFsXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmltYWdlTGluayA9IG5ldyBJbWFnZUxpbmtzXzEuSW1hZ2VMaW5rcygpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXRMaW5rcygpO1xuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmluaXRMaW5rcy5iaW5kKHRoaXMpLCAzMDAwKTtcbiAgICB9XG4gICAgaW5pdExpbmtzKCkge1xuICAgICAgICB0aGlzLmltYWdlTGluay5nZXRMaW5rcygpLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubW9kYWwuc2hvdyh0aGlzLmVsZW1lbnRTcmMoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxlbWVudFNyYyhlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmhyZWY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5wYXJlbnRFbGVtZW50LmhyZWY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlUHJldmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSXNzdWVNb2RhbF8xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvSXNzdWVNb2RhbFwiKTtcbmNvbnN0IElzc3VlTGlua3NfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0lzc3VlTGlua3NcIik7XG5jb25zdCBpbnRlbmRIb3Zlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvaW50ZW5kSG92ZXJcIik7XG5jb25zdCBJc3N1ZVByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vcHJvdmlkZXJzL0lzc3VlUHJvdmlkZXJcIik7XG5jbGFzcyBJc3N1ZVByZXZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IElzc3VlTW9kYWxfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaXNzdWUgPSBuZXcgSXNzdWVQcm92aWRlcl8xLklzc3VlUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZUxpbmsgPSBuZXcgSXNzdWVMaW5rc18xLklzc3VlTGlua3MoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0TGlua3MoKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5pbml0TGlua3MuYmluZCh0aGlzKSwgMzAwMCk7XG4gICAgfVxuICAgIGluaXRMaW5rcygpIHtcbiAgICAgICAgdGhpcy5pc3N1ZUxpbmsuZ2V0TGlua3MoKS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAoMCwgaW50ZW5kSG92ZXJfMS5kZWZhdWx0KShsaW5rLCB0aGlzLm9uSG92ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBvbkhvdmVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubW9kYWwuc2hvdyhldmVudCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHsgcHJvamVjdElkLCBpc3N1ZUlkIH0gPSB0aGlzLmlzc3VlTGluay5wYXJzZUxpbmsoZWxlbWVudC5ocmVmKTtcbiAgICAgICAgY29uc3QgaXNzdWUgPSBhd2FpdCB0aGlzLmlzc3VlLmdldElzc3VlKHByb2plY3RJZCwgaXNzdWVJZCk7XG4gICAgICAgIHRoaXMubW9kYWwudXBkYXRlQ29udGVudChpc3N1ZSk7XG4gICAgfVxuICAgIG9uTGVhdmUoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlUHJldmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vc3R5bGVzL2luZGV4LnNjc3NcIik7XG5jb25zdCBJc3N1ZVByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL0lzc3VlUHJldmlld1wiKTtcbmNvbnN0IEltYWdlUHJldmlld18xID0gcmVxdWlyZShcIi4vc2VydmljZXMvSW1hZ2VQcmV2aWV3XCIpO1xuW0ltYWdlUHJldmlld18xLmRlZmF1bHQsIElzc3VlUHJldmlld18xLmRlZmF1bHRdLmZvckVhY2goKFNlcnZpY2UpID0+IG5ldyBTZXJ2aWNlKCkuaW5pdCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==