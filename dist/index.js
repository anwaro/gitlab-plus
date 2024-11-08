
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
.glp-issue-preview-modal {
  position: absolute;
  display: flex;
  padding: 15px;
  background-color: var(--gl-background-color-default, var(--gl-color-neutral-0, #fff));
  border: 1px solid var(--gl-border-color-default);
  border-radius: 0.25rem;
  width: 300px;
  min-height: 300px;
  z-index: 99999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-out;
  transition-property: visibility, opacity, transform;
}
.glp-issue-preview-modal.glp-modal-visible {
  visibility: visible;
  opacity: 1;
}
.glp-issue-preview-modal .glp-issue-modal-inner {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.glp-issue-preview-modal .glp-modal-loader {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.glp-issue-preview-modal .glp-modal-loader .glp-modal-loader-inner {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--gl-background-color-subtle, var(--gl-color-neutral-10, #fbfafd));
  animation: linear 1s infinite loader-animation;
  border-radius: 50%;
}
.glp-issue-preview-modal .glp-modal-loader .glp-modal-loader-inner::after {
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
.glp-issue-preview-modal .glp-block {
  padding: 0.75rem 0 1rem;
  border-bottom-style: solid;
  border-bottom-color: var(--gl-border-color-subtle, var(--gl-color-neutral-50, #ececef));
  border-bottom-width: 1px;
  width: 100%;
}
.glp-issue-preview-modal .assignee-grid {
  margin-top: 4px;
  gap: 4px;
}

.glp-image-preview-modal {
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
.glp-image-preview-modal.glp-modal-visible {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.glp-image-preview-modal .glp-modal-img {
  max-width: 95%;
  max-height: 95%;
}
.glp-image-preview-modal .glp-modal-close {
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
}

@keyframes loader-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.glp-create-related-issue-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: none;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
}
.glp-create-related-issue-layer.glp-modal-visible {
  display: flex;
}
.glp-create-related-issue-layer .glp-create-related-issue-modal {
  width: 700px;
  max-width: 95vw;
}`, "",{"version":3,"sources":["webpack://./src/styles/issue-preview.scss","webpack://./src/styles/index.scss","webpack://./src/styles/image-preview.scss","webpack://./src/styles/create-related-issue.scss"],"names":[],"mappings":"AAAA;EACI;IACI,uBAAA;ECCN;EDEE;IACI,yBAAA;ECAN;AACF;ADGA;EACI,kBAAA;EACA,aAAA;EACA,aAAA;EACA,qFAAA;EACA,gDAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,6BAAA;EACA,mDAAA;ACDJ;ADGI;EACI,mBAAA;EACA,UAAA;ACDR;ADII;EACI,aAAA;EACA,sBAAA;EACA,eAAA;ACFR;ADKI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,SAAA;EACA,QAAA;ACHR;ADKQ;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wFAAA;EACA,8CAAA;EACA,kBAAA;ACHZ;ADKY;EACI,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,2BAAA;ACHhB;ADQI;EACI,uBAAA;EACA,0BAAA;EACA,uFAAA;EACA,wBAAA;EACA,WAAA;ACNR;ADSI;EACI,eAAA;EACA,QAAA;ACPR;;ACtEA;EACI,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,cAAA;ADyEJ;ACvEI;EACI,mBAAA;EACA,UAAA;EACA,oBAAA;ADyER;ACtEI;EACI,cAAA;EACA,eAAA;ADwER;ACrEI;EACI,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;ADuER;;AE9GA;EACI;IACI,uBAAA;EFiHN;EE9GE;IACI,yBAAA;EFgHN;AACF;AE7GA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;AF+GJ;AE7GI;EACI,aAAA;AF+GR;AE5GI;EACI,YAAA;EACA,eAAA;AF8GR","sourceRoot":""}]);
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

/***/ "./src/components/CreateRelatedIssueModal.ts":
/*!***************************************************!*\
  !*** ./src/components/CreateRelatedIssueModal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./common/Component */ "./src/components/common/Component.ts");
const CreateRelatedIssueModalHeader_1 = __webpack_require__(/*! ./create-related-issue/CreateRelatedIssueModalHeader */ "./src/components/create-related-issue/CreateRelatedIssueModalHeader.ts");
const CreateRelatedIssueModalContent_1 = __webpack_require__(/*! ./create-related-issue/CreateRelatedIssueModalContent */ "./src/components/create-related-issue/CreateRelatedIssueModalContent.ts");
const Dom_1 = __webpack_require__(/*! ../helpers/Dom */ "./src/helpers/Dom.ts");
const IssueLinks_1 = __webpack_require__(/*! ../helpers/IssueLinks */ "./src/helpers/IssueLinks.ts");
class CreateRelatedIssueModal extends Component_1.default {
    constructor() {
        const container = Dom_1.Dom.create({
            tag: 'div',
            classes: 'glp-create-related-issue-modal crud gl-border gl-rounded-form gl-border-section gl-bg-subtle gl-mt-5',
        });
        super('div', {
            classes: 'glp-create-related-issue-layer',
            children: [container],
        });
        this.visibleClassName = 'glp-modal-visible';
        const link = IssueLinks_1.IssueLinks.parseLink(window.location.href);
        if (link) {
            const form = new CreateRelatedIssueModalContent_1.default(link, this.hide.bind(this));
            container.append(new CreateRelatedIssueModalHeader_1.default(() => {
                this.hide();
                form.reset();
            }).getElement(), form.getElement());
        }
    }
    init() {
        this.mount(document.body);
    }
    show() {
        this.element.classList.add(this.visibleClassName);
    }
    hide() {
        this.element.classList.remove(this.visibleClassName);
    }
}
exports["default"] = CreateRelatedIssueModal;


/***/ }),

/***/ "./src/components/ImagePreviewModal.ts":
/*!*********************************************!*\
  !*** ./src/components/ImagePreviewModal.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./common/Component */ "./src/components/common/Component.ts");
const ImageElement_1 = __webpack_require__(/*! ./image-preview/ImageElement */ "./src/components/image-preview/ImageElement.ts");
const CloseModal_1 = __webpack_require__(/*! ./image-preview/CloseModal */ "./src/components/image-preview/CloseModal.ts");
class ImagePreviewModal extends Component_1.default {
    constructor() {
        super('div', { classes: 'glp-image-preview-modal' });
        this.image = new ImageElement_1.default();
        this.visibleClassName = 'glp-modal-visible';
        this.element.append(this.image.getElement(), new CloseModal_1.default(this.hide.bind(this)).getElement());
        this.mount(document.body);
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
exports["default"] = ImagePreviewModal;


/***/ }),

/***/ "./src/components/IssuePreviewModal.ts":
/*!*********************************************!*\
  !*** ./src/components/IssuePreviewModal.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./common/Component */ "./src/components/common/Component.ts");
const IssueLoader_1 = __webpack_require__(/*! ./issue-preview/IssueLoader */ "./src/components/issue-preview/IssueLoader.ts");
const IssueModalContent_1 = __webpack_require__(/*! ./issue-preview/IssueModalContent */ "./src/components/issue-preview/IssueModalContent.ts");
class IssuePreviewModal extends Component_1.default {
    constructor() {
        super('div', { classes: 'glp-issue-preview-modal' });
        this.loader = new IssueLoader_1.default();
        this.content = new IssueModalContent_1.IssueModalContent();
        this.visibleClassName = 'glp-modal-visible';
        this.mount(document.body);
    }
    show(event) {
        this.element.appendChild(this.loader.getElement());
        this.element.style.left = `${event.pageX + 10}px`;
        this.element.style.top = `${event.pageY + 10}px`;
        this.element.style.transform = 'translateY(0px)';
        this.element.classList.add(this.visibleClassName);
    }
    fixPosition(event) {
        const dY = event.screenY +
            this.element.getBoundingClientRect().height -
            window.innerHeight;
        if (dY > 0) {
            this.element.style.transform = `translateY(-${dY + 15}px)`;
        }
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
exports["default"] = IssuePreviewModal;


/***/ }),

/***/ "./src/components/RelatedIssuesAutocompleteModal.ts":
/*!**********************************************************!*\
  !*** ./src/components/RelatedIssuesAutocompleteModal.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const AutocompleteModal_1 = __webpack_require__(/*! ./related-issue-autocomplete/AutocompleteModal */ "./src/components/related-issue-autocomplete/AutocompleteModal.ts");
const Dom_1 = __webpack_require__(/*! ../helpers/Dom */ "./src/helpers/Dom.ts");
const IssueProvider_1 = __webpack_require__(/*! ../providers/IssueProvider */ "./src/providers/IssueProvider.ts");
const IssueLinks_1 = __webpack_require__(/*! ../helpers/IssueLinks */ "./src/helpers/IssueLinks.ts");
const IconComponent_1 = __webpack_require__(/*! ./common/IconComponent */ "./src/components/common/IconComponent.ts");
class RelatedIssuesAutocompleteModal {
    constructor() {
        this.readyClass = 'glp-input-ready';
        this.input = Dom_1.Dom.element('input');
        this.issueProvider = new IssueProvider_1.IssueProvider();
        this.search = this.issueProvider.debounce(this.load.bind(this));
        this.link = IssueLinks_1.IssueLinks.parseLink(window.location.href);
        this.autocompleteModal = new AutocompleteModal_1.default(this.onSelect.bind(this), this.renderItem.bind(this), this.search.bind(this));
        document.body.addEventListener('click', (e) => {
            if (e.target !== this.input && !this.input.contains(e.target)) {
                this.autocompleteModal.setVisible(false);
            }
        });
    }
    init(input) {
        if (this.isMounted(input)) {
            return;
        }
        const container = input.closest('.add-issuable-form-input-wrapper');
        if (!container) {
            return;
        }
        this.autocompleteModal.mount(container);
        this.input = input;
        this.input.classList.add(this.readyClass);
        this.input.addEventListener('focus', this.show.bind(this));
    }
    isMounted(input) {
        return input.classList.contains(this.readyClass);
    }
    show() {
        this.autocompleteModal.setVisible(true);
        this.search('');
    }
    async load(term = '') {
        var _a, _b, _c;
        if (!this.link) {
            return;
        }
        const response = await this.issueProvider.getIssues(this.link.workspacePath, term);
        this.autocompleteModal.updateItems([
            ...(((_a = response.data.workspace.workItems) === null || _a === void 0 ? void 0 : _a.nodes) || []),
            ...(((_b = response.data.workspace.workItemsByIid) === null || _b === void 0 ? void 0 : _b.nodes) || []),
            ...(((_c = response.data.workspace.workItemsEmpty) === null || _c === void 0 ? void 0 : _c.nodes) || []),
        ]);
    }
    onSelect(item) {
        this.input.value = `${item.project.fullPath}#${item.iid} `;
        this.input.dispatchEvent(new Event('input'));
        this.input.dispatchEvent(new Event('change'));
        this.autocompleteModal.setVisible(false);
    }
    renderItem(item) {
        return Dom_1.Dom.create({
            tag: 'div',
            classes: 'gl-flex gl-gap-x-2 gl-py-2',
            children: [
                new IconComponent_1.IconComponent('issue-type-issue', 's16').getIcon(),
                { tag: 'small', children: item.iid },
                { tag: 'span', classes: 'gl-flex gl-flex-wrap', children: item.title },
            ],
        });
    }
}
exports["default"] = RelatedIssuesAutocompleteModal;


/***/ }),

/***/ "./src/components/common/CloseButton.ts":
/*!**********************************************!*\
  !*** ./src/components/common/CloseButton.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/common/Component.ts");
const IconComponent_1 = __webpack_require__(/*! ./IconComponent */ "./src/components/common/IconComponent.ts");
class CloseButton extends Component_1.default {
    constructor(onClick) {
        super('button', {
            classes: 'btn js-issue-item-remove-button gl-mr-2 btn-default btn-sm gl-button btn-default-tertiary btn-icon',
            attrs: {
                type: 'button',
            },
            events: {
                click: onClick,
            },
            children: [new IconComponent_1.IconComponent('close-xs', 's16').getIcon()],
        });
    }
}
exports["default"] = CloseButton;


/***/ }),

/***/ "./src/components/common/Component.ts":
/*!********************************************!*\
  !*** ./src/components/common/Component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
class Component {
    constructor(tag, props = {}) {
        this.element = Dom_1.Dom.create({ tag, ...props });
    }
    addClassName(...className) {
        this.element.classList.add(...className);
    }
    event(event, callback) {
        this.element.addEventListener(event, callback);
    }
    getElement() {
        return this.element;
    }
    mount(parent) {
        parent.appendChild(this.element);
    }
}
exports["default"] = Component;


/***/ }),

/***/ "./src/components/common/IconComponent.ts":
/*!************************************************!*\
  !*** ./src/components/common/IconComponent.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconComponent = void 0;
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/common/Component.ts");
class IconComponent extends Component_1.default {
    constructor(icon, size = 's12', ...cls) {
        super('span');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        svg.classList.add('gl-icon', size, 'gl-fill-current', ...cls);
        use.setAttribute('href', `/assets/icons-236e3b687d786d9dfe4709143a94d4c53b8d5a1f235775401e5825148297fa84.svg#${icon}`);
        svg.appendChild(use);
        this.element.append(svg);
    }
    getIcon() {
        return super.getElement().children[0];
    }
}
exports.IconComponent = IconComponent;


/***/ }),

/***/ "./src/components/common/LabelComponent.ts":
/*!*************************************************!*\
  !*** ./src/components/common/LabelComponent.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LabelComponent = void 0;
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/common/Component.ts");
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
const IconComponent_1 = __webpack_require__(/*! ./IconComponent */ "./src/components/common/IconComponent.ts");
class LabelComponent extends Component_1.default {
    constructor(label, onRemove) {
        super('span');
        this.setClasses(label);
        this.element.append(...this.html(label, onRemove));
    }
    html(label, onRemove) {
        const [scope, text] = label.title.split('::');
        const items = [
            {
                tag: 'span',
                classes: 'gl-label-text',
                children: scope,
            },
        ];
        if (text) {
            items.push({
                tag: 'span',
                classes: 'gl-label-text-scoped',
                children: text,
            });
        }
        const elements = [
            Dom_1.Dom.create({
                tag: 'span',
                classes: 'gl-link gl-label-link gl-label-link-underline',
                children: items,
            }),
        ];
        if (onRemove) {
            elements.push(Dom_1.Dom.create({
                tag: 'button',
                classes: 'btn gl-label-close !gl-p-0 btn-reset btn-sm gl-button btn-reset-tertiary',
                attrs: {
                    type: 'button',
                },
                events: { click: onRemove },
                children: [
                    {
                        tag: 'span',
                        classes: 'gl-button-text',
                        children: [new IconComponent_1.IconComponent('close-xs').getIcon()],
                    },
                ],
            }));
        }
        return elements;
    }
    setClasses(label) {
        this.addClassName('gl-label', 'hide-collapsed', label.textColor === '#FFFFFF'
            ? 'gl-label-text-light'
            : 'gl-label-text-dark');
        if (label.title.includes('::')) {
            this.addClassName('gl-label-scoped');
        }
        this.element.style.setProperty('--label-background-color', label.color);
        this.element.style.setProperty('--label-inset-border', `inset 0 0 0 2px ${label.color}`);
    }
}
exports.LabelComponent = LabelComponent;


/***/ }),

/***/ "./src/components/common/MergeRequestComponent.ts":
/*!********************************************************!*\
  !*** ./src/components/common/MergeRequestComponent.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MergeRequestComponent = void 0;
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/common/Component.ts");
const IconComponent_1 = __webpack_require__(/*! ./IconComponent */ "./src/components/common/IconComponent.ts");
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
const UserComponent_1 = __webpack_require__(/*! ./UserComponent */ "./src/components/common/UserComponent.ts");
const iconMap = {
    merged: 'merge',
    opened: 'merge-request',
    closed: 'merge-request-close',
    locked: 'search',
};
class MergeRequestComponent extends Component_1.default {
    constructor(mr) {
        super('div', {
            styles: {
                marginTop: '10px',
            },
            classes: `item-body `,
            children: [
                Dom_1.Dom.element('div', 'item-title gl-flex gl-min-w-0 gl-gap-3', [
                    new IconComponent_1.IconComponent(iconMap[mr.state] || 'empty', 's16', 'merge-request-status', mr.state).getIcon(),
                    {
                        tag: 'span',
                        classes: 'gl-text-gray-500',
                        children: `!${mr.iid}`,
                    },
                    new UserComponent_1.UserComponent(mr.author, 's16').getElement(),
                ]),
                {
                    tag: 'div',
                    classes: 'item-title sortable-link',
                    styles: {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    children: mr.title,
                },
            ],
        });
    }
}
exports.MergeRequestComponent = MergeRequestComponent;


/***/ }),

/***/ "./src/components/common/StatusComponent.ts":
/*!**************************************************!*\
  !*** ./src/components/common/StatusComponent.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusComponent = void 0;
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/common/Component.ts");
const IconComponent_1 = __webpack_require__(/*! ./IconComponent */ "./src/components/common/IconComponent.ts");
class StatusComponent extends Component_1.default {
    constructor(isOpen) {
        super('span', {
            classes: `gl-badge badge badge-pill ${isOpen ? 'badge-success' : 'badge-info'}`,
            children: [
                new IconComponent_1.IconComponent(isOpen ? 'issue-open-m' : 'issue-close', 's16').getIcon(),
                {
                    tag: 'span',
                    classes: 'gl-badge-content',
                    children: isOpen ? 'Open' : 'Closed',
                },
            ],
        });
    }
}
exports.StatusComponent = StatusComponent;


/***/ }),

/***/ "./src/components/common/UserComponent.ts":
/*!************************************************!*\
  !*** ./src/components/common/UserComponent.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserComponent = void 0;
const Component_1 = __webpack_require__(/*! ./Component */ "./src/components/common/Component.ts");
class UserComponent extends Component_1.default {
    constructor(user, size = 's24') {
        super('div', {
            classes: 'gl-flex gl-w-full gl-items-center',
            children: [
                {
                    tag: 'img',
                    classes: `gl-avatar gl-avatar-circle gl-avatar-${size}`,
                    attrs: {
                        src: user.avatarUrl,
                        alt: "${assignee.name}'s avatar",
                    },
                },
                {
                    tag: 'span',
                    classes: 'gl-ml-3',
                    children: user.name,
                },
            ],
        });
    }
}
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/components/common/form/Dropdown.ts":
/*!************************************************!*\
  !*** ./src/components/common/form/Dropdown.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Field_1 = __webpack_require__(/*! ./Field */ "./src/components/common/form/Field.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const DropdownSearch_1 = __webpack_require__(/*! ./DropdownSearch */ "./src/components/common/form/DropdownSearch.ts");
const DropdownList_1 = __webpack_require__(/*! ./DropdownList */ "./src/components/common/form/DropdownList.ts");
const DropdownButton_1 = __webpack_require__(/*! ./DropdownButton */ "./src/components/common/form/DropdownButton.ts");
const DropdownModal_1 = __webpack_require__(/*! ./DropdownModal */ "./src/components/common/form/DropdownModal.ts");
class Dropdown extends Field_1.default {
    constructor(title, isMultiselect = false) {
        const container = Dom_1.Dom.element('div', 'gl-relative gl-w-full gl-new-dropdown !gl-block');
        super(title, container);
        this.isMultiselect = isMultiselect;
        this.value = [];
        this.items = [];
        this.recently = [];
        this.extra = Dom_1.Dom.element('div');
        this.search = new DropdownSearch_1.DropdownSearch(this.filter.bind(this));
        this.list = new DropdownList_1.DropdownList(this.renderItem.bind(this), this.onSelect.bind(this));
        this.modal = new DropdownModal_1.DropdownModal(this.search.getElement(), this.list.getElement());
        this.button = new DropdownButton_1.DropdownButton(this.renderLabel.bind(this), this.modal.setVisible.bind(this.modal), this.reset.bind(this));
        container.append(this.extra, this.button.getElement(), this.modal.getElement());
        this.button.render(this.value);
        this.list.render(this.items, this.recently, this.value);
    }
    updateItems(items, recently = []) {
        const recentlyIds = recently.map((i) => i.id);
        this.recently = recently;
        this.items = items.filter((i) => !recentlyIds.includes(i.id));
        this.list.render(this.items, this.recently, this.value);
    }
    onSelect(item) {
        if (this.isMultiselect) {
            if (this.value.find((i) => i.id === item.id)) {
                this.value = this.value.filter((i) => i.id !== item.id);
            }
            else {
                this.value.push(item);
            }
        }
        else {
            this.value = [item];
            this.modal.setVisible(false);
        }
        this.button.render(this.value);
        this.list.render(this.items, this.recently, this.value);
        this.onChange();
    }
    reset() {
        this.value = [];
        this.button.render(this.value);
        this.list.render(this.items, this.recently, this.value);
        this.onChange();
    }
}
exports["default"] = Dropdown;


/***/ }),

/***/ "./src/components/common/form/DropdownButton.ts":
/*!******************************************************!*\
  !*** ./src/components/common/form/DropdownButton.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownButton = void 0;
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const IconComponent_1 = __webpack_require__(/*! ../IconComponent */ "./src/components/common/IconComponent.ts");
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/common/Component.ts");
class DropdownButton extends Component_1.default {
    constructor(renderLabel, setVisible, reset) {
        super('button', {
            classes: 'btn btn-default btn-md btn-block gl-button gl-new-dropdown-toggle',
            attrs: {
                type: 'button',
            },
            events: {
                click: () => setVisible(true),
            },
        });
        this.renderLabel = renderLabel;
        this.reset = reset;
        this.buttonLabel = Dom_1.Dom.element('span', 'gl-new-dropdown-button-text');
        this.icon = Dom_1.Dom.create({
            tag: 'span',
            children: [new IconComponent_1.IconComponent('chevron-lg-down', 's16').getIcon()],
        });
        document.body.addEventListener('click', (e) => {
            if (e.target !== this.element &&
                !this.element.contains(e.target)) {
                setVisible(false);
            }
        });
        this.element.append(this.buttonInner());
    }
    buttonInner() {
        return Dom_1.Dom.create({
            tag: 'span',
            classes: 'gl-button-text gl-w-full',
            children: [this.buttonLabel, this.icon],
        });
    }
    render(items) {
        this.buttonLabel.replaceChildren(this.renderLabel(items));
        const icon = new IconComponent_1.IconComponent(items.length ? 'close-xs' : 'chevron-lg-down', 's16').getIcon();
        if (items.length) {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                this.reset();
            });
        }
        this.icon.replaceChildren(icon);
    }
}
exports.DropdownButton = DropdownButton;


/***/ }),

/***/ "./src/components/common/form/DropdownList.ts":
/*!****************************************************!*\
  !*** ./src/components/common/form/DropdownList.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownList = void 0;
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const IconComponent_1 = __webpack_require__(/*! ../IconComponent */ "./src/components/common/IconComponent.ts");
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/common/Component.ts");
class DropdownList extends Component_1.default {
    constructor(renderItem, onClick) {
        super('div', {
            classes: 'gl-new-dropdown-contents gl-new-dropdown-contents-with-scrim-overlay bottom-scrim-visible gl-new-dropdown-contents',
        });
        this.renderItem = renderItem;
        this.onClick = onClick;
        this.list = Dom_1.Dom.element('ul', 'gl-mb-0 gl-pl-0');
        this.element.append(this.list);
    }
    render(items, recently, selected) {
        this.list.replaceChildren();
        if (recently.length) {
            this.list.append(Dom_1.Dom.create({
                tag: 'li',
                classes: 'gl-pb-2 gl-pl-4 gl-pt-3 gl-text-sm gl-font-bold gl-text-strong',
                children: 'Recently used',
            }));
            this.list.append(...recently.map((item) => this.listItem(item, selected)));
        }
        if (items.length) {
            this.list.append(Dom_1.Dom.create({
                tag: 'li',
                classes: 'gl-pb-2 gl-pl-4 gl-pt-3 gl-text-sm gl-font-bold gl-text-strong gl-border-t',
            }));
            this.list.append(...items.map((item) => this.listItem(item, selected)));
        }
        if (items.length + recently.length === 0) {
            this.list.append(Dom_1.Dom.create({
                tag: 'li',
                classes: 'gl-p-4',
                children: 'No options',
            }));
        }
    }
    listItem(item, selected) {
        return Dom_1.Dom.create({
            tag: 'li',
            classes: 'gl-new-dropdown-item',
            events: {
                click: () => this.onClick(item),
            },
            children: [
                {
                    tag: 'span',
                    classes: 'gl-new-dropdown-item-content',
                    children: [
                        this.renderCheck(item, selected),
                        this.renderItem(item),
                    ],
                },
            ],
        });
    }
    renderCheck(item, selected) {
        const selectedIds = selected.map((i) => i.id);
        return new IconComponent_1.IconComponent(selectedIds.includes(item.id) ? 'mobile-issue-close' : '').getIcon();
    }
}
exports.DropdownList = DropdownList;


/***/ }),

/***/ "./src/components/common/form/DropdownModal.ts":
/*!*****************************************************!*\
  !*** ./src/components/common/form/DropdownModal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownModal = void 0;
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/common/Component.ts");
class DropdownModal extends Component_1.default {
    constructor(search, list) {
        super('div', {
            classes: 'gl-new-dropdown-panel gl-absolute',
            styles: {
                top: '100%',
                left: '0',
                width: '100%',
                maxWidth: '800px',
            },
            events: {
                click: (e) => e.stopPropagation(),
            },
            children: [
                {
                    tag: 'div',
                    classes: 'gl-new-dropdown-inner',
                    children: [search, list],
                },
            ],
        });
    }
    setVisible(visible) {
        if (visible) {
            this.element.classList.add('!gl-block');
        }
        else {
            this.element.classList.remove('!gl-block');
        }
    }
}
exports.DropdownModal = DropdownModal;


/***/ }),

/***/ "./src/components/common/form/DropdownSearch.ts":
/*!******************************************************!*\
  !*** ./src/components/common/form/DropdownSearch.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownSearch = void 0;
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const IconComponent_1 = __webpack_require__(/*! ../IconComponent */ "./src/components/common/IconComponent.ts");
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/common/Component.ts");
const CloseButton_1 = __webpack_require__(/*! ../CloseButton */ "./src/components/common/CloseButton.ts");
class DropdownSearch extends Component_1.default {
    constructor(onChange) {
        super('div', {
            classes: 'gl-border-b-1 gl-border-b-solid gl-border-b-dropdown',
        });
        this.onChange = onChange;
        this.input = this.getSearchInput();
        this.element.append(this.getSearch());
    }
    getSearch() {
        return Dom_1.Dom.create({
            tag: 'div',
            classes: 'gl-listbox-search gl-listbox-topmost',
            children: [
                new IconComponent_1.IconComponent('search', 's16', 'gl-search-box-by-type-search-icon').getIcon(),
                this.input,
                {
                    tag: 'div',
                    classes: 'gl-search-box-by-type-right-icons',
                    styles: { top: '0' },
                    children: [
                        new CloseButton_1.default(() => {
                            this.input.value = '';
                            this.onChange('');
                        }).getElement(),
                    ],
                },
            ],
        });
    }
    getSearchInput() {
        return Dom_1.Dom.create({
            tag: 'input',
            classes: 'gl-listbox-search-input',
            events: {
                input: () => this.onChange(this.input.value),
            },
        });
    }
}
exports.DropdownSearch = DropdownSearch;


/***/ }),

/***/ "./src/components/common/form/Field.ts":
/*!*********************************************!*\
  !*** ./src/components/common/form/Field.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../Component */ "./src/components/common/Component.ts");
class Field extends Component_1.default {
    constructor(title, input, hint = '') {
        super('fieldset', {
            classes: 'form-group gl-form-group gl-w-full is-valid',
            children: [
                {
                    tag: 'legend',
                    classes: 'bv-no-focus-ring col-form-label pt-0 col-form-label',
                    children: title,
                },
                input,
                {
                    tag: 'small',
                    children: hint,
                },
            ],
        });
    }
}
exports["default"] = Field;


/***/ }),

/***/ "./src/components/create-related-issue/CreateButton.ts":
/*!*************************************************************!*\
  !*** ./src/components/create-related-issue/CreateButton.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
class CreateButton extends Component_1.default {
    constructor() {
        super('button', {
            classes: 'btn btn-default btn-sm gl-button',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-button-text',
                    children: 'Create related issue',
                },
            ],
        });
    }
    init() {
        const parent = document.querySelector('#related-issues [data-testid="crud-actions"]');
        if (parent) {
            this.mount(parent);
        }
    }
}
exports["default"] = CreateButton;


/***/ }),

/***/ "./src/components/create-related-issue/CreateRelatedIssueModalContent.ts":
/*!*******************************************************************************!*\
  !*** ./src/components/create-related-issue/CreateRelatedIssueModalContent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
const IssueLinks_1 = __webpack_require__(/*! ../../helpers/IssueLinks */ "./src/helpers/IssueLinks.ts");
const IssueProvider_1 = __webpack_require__(/*! ../../providers/IssueProvider */ "./src/providers/IssueProvider.ts");
const FormTitle_1 = __webpack_require__(/*! ./form/FormTitle */ "./src/components/create-related-issue/form/FormTitle.ts");
const FormProject_1 = __webpack_require__(/*! ./form/FormProject */ "./src/components/create-related-issue/form/FormProject.ts");
const FormLabels_1 = __webpack_require__(/*! ./form/FormLabels */ "./src/components/create-related-issue/form/FormLabels.ts");
const FormMilestone_1 = __webpack_require__(/*! ./form/FormMilestone */ "./src/components/create-related-issue/form/FormMilestone.ts");
const FormIteration_1 = __webpack_require__(/*! ./form/FormIteration */ "./src/components/create-related-issue/form/FormIteration.ts");
const FormAssignees_1 = __webpack_require__(/*! ./form/FormAssignees */ "./src/components/create-related-issue/form/FormAssignees.ts");
const FormRelation_1 = __webpack_require__(/*! ./form/FormRelation */ "./src/components/create-related-issue/form/FormRelation.ts");
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
class CreateRelatedIssueModalContent extends Component_1.default {
    constructor(link, onClose) {
        super('form', {
            classes: 'crud-body add-tree-form gl-mx-5 gl-my-4 gl-rounded-b-form',
        });
        this.link = link;
        this.onClose = onClose;
        this.issueProvider = new IssueProvider_1.IssueProvider();
        this.title = new FormTitle_1.default();
        this.project = new FormProject_1.default(this.link);
        this.labels = new FormLabels_1.default(this.link);
        this.milestone = new FormMilestone_1.default(this.link);
        this.iteration = new FormIteration_1.default(this.link);
        this.assignees = new FormAssignees_1.default(this.link);
        this.relation = new FormRelation_1.default();
        this.element.append(this.title.getElement(), this.row(this.project.getElement(), this.milestone.getElement()), this.row(this.iteration.getElement(), this.assignees.getElement()), this.row(this.labels.getElement()), this.row(this.relation.getElement()), Dom_1.Dom.create({
            tag: 'button',
            classes: 'btn btn-confirm btn-sm gl-button',
            attrs: {
                type: 'button',
            },
            events: {
                click: this.createIssue.bind(this),
            },
            children: [
                {
                    tag: 'span',
                    classes: 'gl-button-text',
                    children: 'Add',
                },
            ],
        }));
    }
    row(...items) {
        return Dom_1.Dom.create({
            tag: 'div',
            classes: 'gl-flex gl-gap-x-3',
            children: items,
        });
    }
    reset() {
        this.element.reset();
        this.title.reset();
        this.relation.reset();
        this.project.reset();
        this.milestone.reset();
        this.iteration.reset();
        this.assignees.reset();
        this.labels.reset();
    }
    async createIssue() {
        const data = this.getFormValue();
        const link = IssueLinks_1.IssueLinks.parseLink(window.location.href);
        if (!data || !link) {
            return;
        }
        const response = await this.issueProvider.createIssue(data);
        if (this.relation.value) {
            await this.issueProvider.createIssueRelation({
                issueId: response.data.createIssuable.issuable.iid,
                projectId: response.data.createIssuable.issuable.projectId,
                targetProjectId: link.projectPath.replace(/\//g, '%2F'),
                targetIssueIid: link.issue,
                linkType: this.relation.value,
            });
        }
        this.onClose();
        this.reset();
    }
    getFormValue() {
        const project = this.project.getValue();
        if (!project) {
            return;
        }
        const data = {
            title: this.title.value,
            projectPath: project.fullPath,
        };
        const milestone = this.milestone.getValue();
        if (milestone) {
            data['milestoneId'] = milestone.id;
        }
        const iteration = this.iteration.getValue();
        if (iteration) {
            data['iterationId'] = iteration.id;
            data['iterationCadenceId'] = iteration.iterationCadence.id;
        }
        const assignees = this.assignees.getValue();
        if (assignees) {
            data['assigneeIds'] = [assignees.id];
        }
        const labels = this.labels.getValue();
        data['labelIds'] = labels.map((label) => label.id);
        return data;
    }
}
exports["default"] = CreateRelatedIssueModalContent;


/***/ }),

/***/ "./src/components/create-related-issue/CreateRelatedIssueModalHeader.ts":
/*!******************************************************************************!*\
  !*** ./src/components/create-related-issue/CreateRelatedIssueModalHeader.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
const CloseButton_1 = __webpack_require__(/*! ../common/CloseButton */ "./src/components/common/CloseButton.ts");
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
class CreateRelatedIssueModalHeader extends Component_1.default {
    constructor(onClose) {
        super('div', {
            classes: 'crud-header gl-border-b gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-2 gl-rounded-t-form gl-border-section gl-bg-section gl-px-5 gl-py-4 gl-relative',
            children: [
                Dom_1.Dom.create({
                    tag: 'h2',
                    classes: 'gl-m-0 gl-inline-flex gl-items-center gl-gap-3 gl-text-form gl-font-bold gl-leading-normal',
                    children: 'Create related issue',
                }),
                new CloseButton_1.default(onClose).getElement(),
            ],
        });
    }
}
exports["default"] = CreateRelatedIssueModalHeader;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormAssignees.ts":
/*!*******************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormAssignees.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(/*! ../../common/form/Dropdown */ "./src/components/common/form/Dropdown.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const UsersProvider_1 = __webpack_require__(/*! ../../../providers/UsersProvider */ "./src/providers/UsersProvider.ts");
const RecentProvider_1 = __webpack_require__(/*! ../../../providers/RecentProvider */ "./src/providers/RecentProvider.ts");
class FormAssignees extends Dropdown_1.default {
    constructor(link) {
        super('Assignees');
        this.link = link;
        this.recent = new RecentProvider_1.RecentProvider('assignees');
        this.assignees = new UsersProvider_1.UsersProvider();
        this.load('');
        this.searchUser = this.assignees.debounce(this.load.bind(this));
    }
    async load(serach) {
        const response = await this.assignees.getUsers(this.link.projectPath, serach);
        this.updateItems(response.data.workspace.users, this.recent.get());
    }
    getValue() {
        const [value] = this.value;
        if (value) {
            this.recent.add(value);
        }
        return value;
    }
    renderItem(item) {
        const image = Dom_1.Dom.create({
            tag: 'img',
            classes: 'gl-avatar gl-avatar-circle gl-avatar-s32',
            attrs: { src: item.avatarUrl },
        });
        const label = Dom_1.Dom.create({
            tag: 'div',
            classes: 'gl-avatar-labeled-labels !gl-text-left',
            children: [
                {
                    tag: 'div',
                    classes: '-gl-mx-1 -gl-my-1 gl-flex gl-flex-wrap gl-items-center !gl-text-left',
                    children: [
                        {
                            tag: 'span',
                            classes: 'gl-avatar-labeled-label',
                            children: item.name,
                        },
                    ],
                },
                {
                    tag: 'span',
                    classes: 'gl-avatar-labeled-sublabel',
                    children: item.username,
                },
            ],
        });
        return Dom_1.Dom.create({
            tag: 'span',
            classes: 'gl-avatar-labeled sidebar-participant gl-relative gl-items-center gl-new-dropdown-item-text-wrapper',
            children: [image, label],
        });
    }
    renderLabel([item]) {
        return Dom_1.Dom.create({
            tag: 'div',
            children: item ? item.name : 'Select assignee',
        });
    }
    onChange() { }
    filter(search) {
        this.searchUser(search);
    }
}
exports["default"] = FormAssignees;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormIteration.ts":
/*!*******************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormIteration.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(/*! ../../common/form/Dropdown */ "./src/components/common/form/Dropdown.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const IterationsProvider_1 = __webpack_require__(/*! ../../../providers/IterationsProvider */ "./src/providers/IterationsProvider.ts");
const RecentProvider_1 = __webpack_require__(/*! ../../../providers/RecentProvider */ "./src/providers/RecentProvider.ts");
class FormIteration extends Dropdown_1.default {
    constructor(link) {
        super('Iteration');
        this.link = link;
        this.iterations = new IterationsProvider_1.IterationsProvider();
        this.recent = new RecentProvider_1.RecentProvider('iterations');
        this.searchIterations = this.iterations.debounce(this.load.bind(this));
        this.load();
    }
    async load(title = '') {
        const response = await this.iterations.getIterations(this.link.workspacePath, title);
        const iterationsNamed = response.data.workspace.attributes.nodes
            .map((iteration) => ({
            ...iteration,
            name: this.iterationName(iteration),
        }))
            .toSorted((a, b) => a.name.localeCompare(b.name));
        this.updateItems(iterationsNamed, this.recent.get());
    }
    getValue() {
        const [value] = this.value;
        if (value) {
            this.recent.add(value);
        }
        return value;
    }
    iterationName(iteration) {
        const start = new Date(iteration.startDate).toLocaleDateString();
        const end = new Date(iteration.dueDate).toLocaleDateString();
        return `${iteration.iterationCadence.title}: ${start} - ${end}`;
    }
    renderItem(item) {
        return Dom_1.Dom.create({
            tag: 'span',
            classes: 'gl-new-dropdown-item-text-wrapper',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-flex gl-w-full gl-items-center',
                    children: [
                        { tag: 'span', classes: 'gl-mr-2 gl-block', children: item.name },
                    ],
                },
            ],
        });
    }
    renderLabel([item]) {
        return Dom_1.Dom.create({
            tag: 'div',
            children: item ? item.name : 'Select iteration',
        });
    }
    onChange() { }
    filter(search) {
        this.searchIterations(search);
    }
}
exports["default"] = FormIteration;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormLabels.ts":
/*!****************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormLabels.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(/*! ../../common/form/Dropdown */ "./src/components/common/form/Dropdown.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const LabelsProvider_1 = __webpack_require__(/*! ../../../providers/LabelsProvider */ "./src/providers/LabelsProvider.ts");
const RecentProvider_1 = __webpack_require__(/*! ../../../providers/RecentProvider */ "./src/providers/RecentProvider.ts");
const LabelComponent_1 = __webpack_require__(/*! ../../common/LabelComponent */ "./src/components/common/LabelComponent.ts");
class FormLabel extends Dropdown_1.default {
    constructor(link) {
        super('Labels', true);
        this.link = link;
        this.labels = new LabelsProvider_1.LabelsProvider();
        this.recent = new RecentProvider_1.RecentProvider('labels');
        this.extra.classList.add('gl-mt-1', 'gl-pb-2', 'gl-flex', 'gl-flex-wrap', 'gl-gap-2');
        this.searchLabels = this.labels.debounce(this.load.bind(this));
        this.load();
    }
    async load(name = '') {
        const labels = await this.labels.getLabels(this.link.projectPath, name);
        this.updateItems(labels.data.workspace.labels.nodes, this.recent.get());
    }
    getValue() {
        if (this.value) {
            this.recent.add(...this.value);
        }
        return this.value;
    }
    renderItem(item) {
        return Dom_1.Dom.create({
            tag: 'div',
            classes: 'gl-flex gl-break-anywhere gl-pb-2 gl-pl-4 gl-pt-3',
            children: [
                {
                    tag: 'span',
                    classes: 'dropdown-label-box gl-top-0 gl-mr-3 gl-shrink-0',
                    styles: {
                        backgroundColor: item.color,
                    },
                },
                {
                    tag: 'span',
                    children: item.title,
                },
            ],
        });
    }
    renderLabel(items) {
        let label = 'Select label';
        if (items.length !== 0) {
            label = items
                .slice(0, 2)
                .map((i) => i.title)
                .join(', ');
        }
        if (items.length > 2) {
            label += `, ${items.length - 2}+`;
        }
        return Dom_1.Dom.create({
            tag: 'div',
            children: label,
        });
    }
    onChange() {
        this.extra.replaceChildren(...this.value.map((item) => new LabelComponent_1.LabelComponent(item, () => this.onSelect(item)).getElement()));
    }
    filter(search) {
        this.searchLabels(search);
    }
}
exports["default"] = FormLabel;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormMilestone.ts":
/*!*******************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormMilestone.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(/*! ../../common/form/Dropdown */ "./src/components/common/form/Dropdown.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const MilestonesProvider_1 = __webpack_require__(/*! ../../../providers/MilestonesProvider */ "./src/providers/MilestonesProvider.ts");
const RecentProvider_1 = __webpack_require__(/*! ../../../providers/RecentProvider */ "./src/providers/RecentProvider.ts");
class FormMilestone extends Dropdown_1.default {
    constructor(link) {
        super('Milestone');
        this.link = link;
        this.milestones = new MilestonesProvider_1.MilestonesProvider();
        this.recent = new RecentProvider_1.RecentProvider('milestones');
        this.searchMilestones = this.milestones.debounce(this.load.bind(this));
        this.load();
    }
    async load(title = '') {
        const milestones = await this.milestones.getMilestones(this.link.projectPath, title);
        this.updateItems(milestones.data.workspace.attributes.nodes, this.recent.get());
    }
    getValue() {
        const [value] = this.value;
        if (value) {
            this.recent.add(value);
        }
        return value;
    }
    renderItem(item) {
        return Dom_1.Dom.create({
            tag: 'span',
            classes: 'gl-new-dropdown-item-text-wrapper',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-flex gl-w-full gl-items-center',
                    children: [
                        { tag: 'span', classes: 'gl-mr-2 gl-block', children: item.title },
                    ],
                },
            ],
        });
    }
    renderLabel([item]) {
        return Dom_1.Dom.create({
            tag: 'div',
            children: item ? item.title : 'Select milestone',
        });
    }
    onChange() { }
    filter(search) {
        this.searchMilestones(search);
    }
}
exports["default"] = FormMilestone;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormProject.ts":
/*!*****************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormProject.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(/*! ../../common/form/Dropdown */ "./src/components/common/form/Dropdown.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const ProjectsProvider_1 = __webpack_require__(/*! ../../../providers/ProjectsProvider */ "./src/providers/ProjectsProvider.ts");
const RecentProvider_1 = __webpack_require__(/*! ../../../providers/RecentProvider */ "./src/providers/RecentProvider.ts");
class FormProject extends Dropdown_1.default {
    constructor(link) {
        super('Project');
        this.link = link;
        this.projects = new ProjectsProvider_1.ProjectsProvider();
        this.recent = new RecentProvider_1.RecentProvider('projects');
        this.searchProjects = this.projects.debounce(this.load.bind(this));
        this.load();
    }
    async load(search = '') {
        const projects = await this.projects.getProjects(this.link.workspacePath, search);
        this.updateItems(projects.data.group.projects.nodes, this.recent.get());
    }
    getValue() {
        const [value] = this.value;
        if (value) {
            this.recent.add(value);
        }
        return value;
    }
    renderItem(item) {
        const image = item.avatarUrl
            ? Dom_1.Dom.create({
                tag: 'img',
                attrs: {
                    src: item.avatarUrl,
                    alt: item.name,
                },
                classes: 'gl-mr-3 gl-avatar gl-avatar-s32',
            })
            : Dom_1.Dom.create({
                tag: 'div',
                classes: 'gl-mr-3 gl-avatar gl-avatar-identicon gl-avatar-s32 gl-avatar-identicon-bg1',
                children: item.name[0].toUpperCase(),
            });
        const label = Dom_1.Dom.create({
            tag: 'span',
            children: [
                { tag: 'span', classes: 'gl-mr-2 gl-block', children: item.name },
                {
                    tag: 'span',
                    classes: 'gl-block gl-text-secondary',
                    children: item.nameWithNamespace,
                },
            ],
        });
        return Dom_1.Dom.create({
            tag: 'span',
            classes: 'gl-new-dropdown-item-text-wrapper',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-flex gl-w-full gl-items-center',
                    children: [image, label],
                },
            ],
        });
    }
    renderLabel([item]) {
        return Dom_1.Dom.create({
            tag: 'div',
            children: item ? item.nameWithNamespace : 'Select project',
        });
    }
    onChange() { }
    filter(search) {
        this.searchProjects(search);
    }
}
exports["default"] = FormProject;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormRelation.ts":
/*!******************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormRelation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Field_1 = __webpack_require__(/*! ../../common/form/Field */ "./src/components/common/form/Field.ts");
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
class FormRelation extends Field_1.default {
    constructor() {
        const container = Dom_1.Dom.element('div', 'linked-issue-type-radio');
        super('New issue', container);
        this.value = '';
        container.append(this.radio('blocks current issue', 'blocks'), this.radio('is blocked by current issue', 'is_blocked_by'), this.radio('relates to current issue', 'related'));
    }
    onChange(e) {
        this.value = e.target.value;
    }
    radio(label, value) {
        const id = `input-${Math.random()}`;
        return Dom_1.Dom.create({
            tag: 'div',
            classes: 'gl-form-radio custom-control custom-radio',
            children: [
                {
                    tag: 'input',
                    classes: 'custom-control-input',
                    attrs: {
                        id,
                        name: 'linked-issue-type-radio',
                        value: value,
                        type: 'radio',
                    },
                    events: {
                        change: this.onChange.bind(this),
                    },
                },
                {
                    tag: 'label',
                    classes: 'custom-control-label',
                    attrs: {
                        for: id,
                    },
                    children: label,
                },
            ],
        });
    }
    reset() {
        this.value = '';
    }
}
exports["default"] = FormRelation;


/***/ }),

/***/ "./src/components/create-related-issue/form/FormTitle.ts":
/*!***************************************************************!*\
  !*** ./src/components/create-related-issue/form/FormTitle.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dom_1 = __webpack_require__(/*! ../../../helpers/Dom */ "./src/helpers/Dom.ts");
const Field_1 = __webpack_require__(/*! ../../common/form/Field */ "./src/components/common/form/Field.ts");
class FormTitle extends Field_1.default {
    constructor() {
        const input = Dom_1.Dom.create({
            tag: 'input',
            classes: 'gl-form-input gl-mb-3 form-control is-valid',
            attrs: { placeholder: 'Add a title' },
        });
        super('Title', input, 'Maximum of 255 characters');
        this.value = '';
        input.addEventListener('input', this.onChange.bind(this));
    }
    onChange(e) {
        this.value = e.target.value;
    }
    reset() {
        this.value = '';
    }
}
exports["default"] = FormTitle;


/***/ }),

/***/ "./src/components/image-preview/CloseModal.ts":
/*!****************************************************!*\
  !*** ./src/components/image-preview/CloseModal.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
const IconComponent_1 = __webpack_require__(/*! ../common/IconComponent */ "./src/components/common/IconComponent.ts");
class CloseModal extends Component_1.default {
    constructor(onClick) {
        super('div', {
            classes: 'glp-modal-close',
            children: [new IconComponent_1.IconComponent('close-xs', 's24').getIcon()],
            events: {
                click: onClick,
            },
        });
    }
}
exports["default"] = CloseModal;


/***/ }),

/***/ "./src/components/image-preview/ImageElement.ts":
/*!******************************************************!*\
  !*** ./src/components/image-preview/ImageElement.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
class ImageElement extends Component_1.default {
    constructor() {
        super('img', { classes: 'glp-modal-img' });
    }
    updateSrc(src) {
        this.element.src = src;
    }
}
exports["default"] = ImageElement;


/***/ }),

/***/ "./src/components/issue-preview/IssueAssignee.ts":
/*!*******************************************************!*\
  !*** ./src/components/issue-preview/IssueAssignee.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue-preview/IssueBlock.ts");
const UserComponent_1 = __webpack_require__(/*! ../common/UserComponent */ "./src/components/common/UserComponent.ts");
class IssueAssignee extends IssueBlock_1.default {
    constructor(issue) {
        super('Assignee', issue.assignees.nodes.map((assignee) => new UserComponent_1.UserComponent(assignee).getElement()), 'gl-flex gl-flex-col gl-gap-3');
    }
}
exports["default"] = IssueAssignee;


/***/ }),

/***/ "./src/components/issue-preview/IssueBlock.ts":
/*!****************************************************!*\
  !*** ./src/components/issue-preview/IssueBlock.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
class IssueBlock extends Component_1.default {
    constructor(title = '', content, classes = '') {
        super('div', {
            classes: 'glp-block',
            children: [
                {
                    tag: 'div',
                    classes: 'gl-flex gl-items-center gl-font-bold gl-leading-20 gl-text-gray-900',
                    children: title,
                },
                {
                    tag: 'div',
                    classes,
                    ...(typeof content === 'string'
                        ? { children: content }
                        : { children: Array.isArray(content) ? content : [content] }),
                },
            ],
        });
    }
}
exports["default"] = IssueBlock;


/***/ }),

/***/ "./src/components/issue-preview/IssueIteration.ts":
/*!********************************************************!*\
  !*** ./src/components/issue-preview/IssueIteration.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue-preview/IssueBlock.ts");
class IssueIteration extends IssueBlock_1.default {
    constructor(issue) {
        super('Iteration', issue.iteration
            ? [
                issue.iteration.iterationCadence.title,
                ': ',
                new Date(issue.iteration.startDate).toLocaleDateString(),
                ' - ',
                new Date(issue.iteration.dueDate).toLocaleDateString(),
            ].join('')
            : '');
    }
}
exports["default"] = IssueIteration;


/***/ }),

/***/ "./src/components/issue-preview/IssueLabels.ts":
/*!*****************************************************!*\
  !*** ./src/components/issue-preview/IssueLabels.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue-preview/IssueBlock.ts");
const LabelComponent_1 = __webpack_require__(/*! ../common/LabelComponent */ "./src/components/common/LabelComponent.ts");
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
class IssueLabels extends IssueBlock_1.default {
    constructor(issue) {
        super('Labels', Dom_1.Dom.create({
            tag: 'div',
            classes: 'issuable-show-labels',
            children: issue.labels.nodes.map((label) => new LabelComponent_1.LabelComponent(label).getElement()),
        }));
    }
}
exports["default"] = IssueLabels;


/***/ }),

/***/ "./src/components/issue-preview/IssueLoader.ts":
/*!*****************************************************!*\
  !*** ./src/components/issue-preview/IssueLoader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
class IssueLoader extends Component_1.default {
    constructor() {
        super('div');
        this.addClassName('glp-modal-loader');
        const loaderInner = document.createElement('div');
        loaderInner.classList.add('glp-modal-loader-inner');
        this.element.appendChild(loaderInner);
    }
}
exports["default"] = IssueLoader;


/***/ }),

/***/ "./src/components/issue-preview/IssueMergeRequests.ts":
/*!************************************************************!*\
  !*** ./src/components/issue-preview/IssueMergeRequests.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue-preview/IssueBlock.ts");
const MergeRequestComponent_1 = __webpack_require__(/*! ../common/MergeRequestComponent */ "./src/components/common/MergeRequestComponent.ts");
class IssueMergeRequests extends IssueBlock_1.default {
    constructor(issue) {
        super('Merge requests', issue.relatedMergeRequests.nodes.map((mr) => new MergeRequestComponent_1.MergeRequestComponent(mr).getElement()));
    }
}
exports["default"] = IssueMergeRequests;


/***/ }),

/***/ "./src/components/issue-preview/IssueMilestone.ts":
/*!********************************************************!*\
  !*** ./src/components/issue-preview/IssueMilestone.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue-preview/IssueBlock.ts");
class IssueMilestone extends IssueBlock_1.default {
    constructor(issue) {
        super('Milestone', issue.milestone ? issue.milestone.title : '');
    }
}
exports["default"] = IssueMilestone;


/***/ }),

/***/ "./src/components/issue-preview/IssueModalContent.ts":
/*!***********************************************************!*\
  !*** ./src/components/issue-preview/IssueModalContent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueModalContent = void 0;
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
const IssueTitle_1 = __webpack_require__(/*! ./IssueTitle */ "./src/components/issue-preview/IssueTitle.ts");
const IssueAssignee_1 = __webpack_require__(/*! ./IssueAssignee */ "./src/components/issue-preview/IssueAssignee.ts");
const IssueLabels_1 = __webpack_require__(/*! ./IssueLabels */ "./src/components/issue-preview/IssueLabels.ts");
const IssueMilestone_1 = __webpack_require__(/*! ./IssueMilestone */ "./src/components/issue-preview/IssueMilestone.ts");
const IssueIteration_1 = __webpack_require__(/*! ./IssueIteration */ "./src/components/issue-preview/IssueIteration.ts");
const IssueMergeRequests_1 = __webpack_require__(/*! ./IssueMergeRequests */ "./src/components/issue-preview/IssueMergeRequests.ts");
class IssueModalContent extends Component_1.default {
    constructor() {
        super('div', { classes: 'glp-issue-modal-inner' });
    }
    update(issue) {
        const components = [
            IssueTitle_1.default,
            IssueAssignee_1.default,
            IssueLabels_1.default,
            IssueMilestone_1.default,
            IssueIteration_1.default,
            IssueMergeRequests_1.default,
        ];
        this.element.replaceChildren(...components.map((Component) => new Component(issue).getElement()));
    }
}
exports.IssueModalContent = IssueModalContent;


/***/ }),

/***/ "./src/components/issue-preview/IssueTitle.ts":
/*!****************************************************!*\
  !*** ./src/components/issue-preview/IssueTitle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(/*! ./IssueBlock */ "./src/components/issue-preview/IssueBlock.ts");
const StatusComponent_1 = __webpack_require__(/*! ../common/StatusComponent */ "./src/components/common/StatusComponent.ts");
const Dom_1 = __webpack_require__(/*! ../../helpers/Dom */ "./src/helpers/Dom.ts");
class IssueTitle extends IssueBlock_1.default {
    constructor(issue) {
        super(issue.title, Dom_1.Dom.element('div', '', [
            new StatusComponent_1.StatusComponent(issue.state === 'opened').getElement(),
            Dom_1.Dom.create({
                tag: 'div',
                styles: { maxHeight: '100px' },
                classes: 'gl-text-sm gl-text-gray-500, gl-truncate',
                children: issue.description,
            }),
        ]));
    }
}
exports["default"] = IssueTitle;


/***/ }),

/***/ "./src/components/related-issue-autocomplete/AutocompleteModal.ts":
/*!************************************************************************!*\
  !*** ./src/components/related-issue-autocomplete/AutocompleteModal.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../common/Component */ "./src/components/common/Component.ts");
const DropdownList_1 = __webpack_require__(/*! ../common/form/DropdownList */ "./src/components/common/form/DropdownList.ts");
const DropdownSearch_1 = __webpack_require__(/*! ../common/form/DropdownSearch */ "./src/components/common/form/DropdownSearch.ts");
const DropdownModal_1 = __webpack_require__(/*! ../common/form/DropdownModal */ "./src/components/common/form/DropdownModal.ts");
class AutocompleteModal extends Component_1.default {
    constructor(onSelect, renderItem, search) {
        super('div', { classes: 'gl-relative gl-w-full gl-new-dropdown !gl-block' });
        const modalSearch = new DropdownSearch_1.DropdownSearch(search);
        this.list = new DropdownList_1.DropdownList(renderItem, onSelect);
        this.modal = new DropdownModal_1.DropdownModal(modalSearch.getElement(), this.list.getElement());
        this.element.append(this.modal.getElement());
        this.updateItems([]);
    }
    updateItems(items) {
        this.list.render(items, [], []);
    }
    setVisible(visible) {
        this.modal.setVisible(visible);
    }
}
exports["default"] = AutocompleteModal;


/***/ }),

/***/ "./src/helpers/Cache.ts":
/*!******************************!*\
  !*** ./src/helpers/Cache.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Cache {
    isValid(item) {
        if (item) {
            return (item.expirationDate === 'lifetime' ||
                new Date(item.expirationDate) > new Date());
        }
        return false;
    }
    getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key) || '');
        }
        catch (e) {
        }
        return undefined;
    }
    get(key) {
        try {
            const data = this.getItem(this.key(key));
            if (this.isValid(data)) {
                return data.value;
            }
        }
        catch (e) {
        }
        return undefined;
    }
    set(key, value, minutes) {
        localStorage.setItem(this.key(key), JSON.stringify({
            expirationDate: this.expirationDate(minutes),
            value,
        }));
    }
    expirationDate(minutes) {
        if (typeof minutes === 'string') {
            return minutes;
        }
        const time = new Date();
        time.setMinutes(time.getMinutes() + minutes);
        return time;
    }
    key(key) {
        return `${Cache.prefix}${key}`;
    }
    clearInvalid() {
        for (const key in localStorage) {
            if (key.startsWith(Cache.prefix) && !this.isValid(this.getItem(key))) {
                localStorage.removeItem(key);
            }
        }
    }
}
Cache.prefix = 'glp-';
exports["default"] = Cache;


/***/ }),

/***/ "./src/helpers/Dom.ts":
/*!****************************!*\
  !*** ./src/helpers/Dom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dom = void 0;
class Dom {
    static create(data) {
        const element = document.createElement(data.tag);
        if (data.classes) {
            element.className = data.classes;
        }
        if (typeof data.children === 'string') {
            element.innerHTML = data.children;
        }
        else if (data.children) {
            element.append(...data.children.map((item) => item instanceof HTMLElement || item instanceof SVGElement
                ? item
                : Dom.create(item)));
        }
        if (data.attrs) {
            Object.entries(data.attrs).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
        }
        if (data.events) {
            Object.entries(data.events).forEach(([name, callback]) => {
                element.addEventListener(name, callback);
            });
        }
        if (data.styles) {
            Object.entries(data.styles).forEach(([key, value]) => {
                const name = key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
                element.style.setProperty(name, value);
            });
        }
        return element;
    }
    static element(tag, classes, children) {
        return Dom.create({ tag, classes, children });
    }
}
exports.Dom = Dom;


/***/ }),

/***/ "./src/helpers/GraphQl.ts":
/*!********************************!*\
  !*** ./src/helpers/GraphQl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class GraphQl {
    static body(query, variables) {
        return JSON.stringify({
            variables,
            query,
        });
    }
    static operationName(query) {
        const data = /query (?<name>\w+)/.exec(query);
        if (data && data.groups) {
            return data.groups.name;
        }
        return '';
    }
}
exports["default"] = GraphQl;


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
    static parseLink(link) {
        if (!link.includes('/-/issues/')) {
            return undefined;
        }
        const [projectPath, issue] = new URL(link).pathname
            .replace(/^\//, '')
            .split('/-/issues/');
        const slashCount = (projectPath.match(/\//g) || []).length;
        const workspacePath = slashCount === 1 ? projectPath : projectPath.replace(/\/[^/]+$/, '');
        return {
            issue: issue.replace(/\D/g, ''),
            projectPath,
            workspacePath,
        };
    }
    static getLinks() {
        const elements = [
            ...document.querySelectorAll('a[href*=issues]'),
        ].filter((link) => !link.classList.contains(IssueLinks.linkReady) &&
            /issues\/\d+/.test(link.href));
        elements.forEach((link) => {
            link.classList.add(IssueLinks.linkReady);
        });
        return elements;
    }
}
exports.IssueLinks = IssueLinks;
IssueLinks.linkReady = 'glp-link-ready';


/***/ }),

/***/ "./src/helpers/intendHover.ts":
/*!************************************!*\
  !*** ./src/helpers/intendHover.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function intendHover(element, listener, timeout = 500) {
    let hover = false;
    let id = 0;
    const onHover = (ev) => {
        hover = true;
        id = window.setTimeout(() => {
            if (hover) {
                listener.call(element, ev);
            }
        }, timeout);
    };
    element.addEventListener('mouseenter', onHover);
    element.addEventListener('mouseleave', () => {
        clearTimeout(id);
        hover = false;
    });
}
exports["default"] = intendHover;


/***/ }),

/***/ "./src/providers/GitlabProvider.ts":
/*!*****************************************!*\
  !*** ./src/providers/GitlabProvider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitlabProvider = void 0;
const Cache_1 = __webpack_require__(/*! ../helpers/Cache */ "./src/helpers/Cache.ts");
const GraphQl_1 = __webpack_require__(/*! ../helpers/GraphQl */ "./src/helpers/GraphQl.ts");
class GitlabProvider {
    constructor() {
        this.cache = new Cache_1.default();
        this.url = 'https://gitlab.com/api/v4/';
        this.graphqlApi = 'https://gitlab.com/api/graphql';
    }
    async get(path) {
        const response = await fetch(`${this.url}${path}`, {
            headers: this.headers(),
        });
        return response.json();
    }
    async post(path, body) {
        const response = await fetch(`${this.url}${path}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: this.headers(),
        });
        return response.json();
    }
    async query(query, variables) {
        const response = await fetch(this.graphqlApi, {
            method: 'POST',
            body: GraphQl_1.default.body(query, variables),
            headers: this.headers(),
        });
        return response.json();
    }
    async getCached(key, path, minutes) {
        const cacheValue = this.cache.get(key);
        if (cacheValue) {
            return cacheValue;
        }
        const value = await this.get(path);
        this.cache.set(key, value, minutes);
        return value;
    }
    async queryCached(key, query, variables, minutes) {
        const cacheValue = this.cache.get(key);
        if (cacheValue) {
            return cacheValue;
        }
        const value = await this.query(query, variables);
        this.cache.set(key, value, minutes);
        return value;
    }
    csrf() {
        const token = document.querySelector('meta[name=csrf-token]');
        if (token) {
            return token.getAttribute('content');
        }
        return '';
    }
    headers() {
        const headers = {
            'content-type': 'application/json',
        };
        const csrf = this.csrf();
        if (csrf) {
            headers['X-CSRF-Token'] = csrf;
        }
        return headers;
    }
    debounce(callback, wait = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = window.setTimeout(() => callback(...args), wait);
        };
    }
}
exports.GitlabProvider = GitlabProvider;


/***/ }),

/***/ "./src/providers/IssueProvider.ts":
/*!****************************************!*\
  !*** ./src/providers/IssueProvider.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueProvider = void 0;
const GitlabProvider_1 = __webpack_require__(/*! ./GitlabProvider */ "./src/providers/GitlabProvider.ts");
const issue_1 = __webpack_require__(/*! ./query/issue */ "./src/providers/query/issue.ts");
class IssueProvider extends GitlabProvider_1.GitlabProvider {
    async getIssue(projectId, issueId) {
        return await this.queryCached(`issue-${projectId}-${issueId}`, issue_1.issueQuery, {
            projectPath: projectId,
            iid: issueId,
        }, 2);
    }
    async getIssues(projectId, search) {
        const searchById = !!search.match(/^\d+$/);
        return await this.query(issue_1.issuesQuery, {
            iid: searchById ? search : null,
            searchByIid: searchById,
            searchEmpty: !search,
            searchByText: Boolean(search),
            fullPath: projectId,
            searchTerm: search,
            includeAncestors: true,
            includeDescendants: true,
            types: ['ISSUE'],
            in: 'TITLE',
        });
    }
    async createIssue(input) {
        return await this.query(issue_1.issueMutation, { input });
    }
    async createIssueRelation(input) {
        const path = [
            'projects/:PROJECT_ID',
            '/issues/:ISSUE_ID/links',
            '?target_project_id=:TARGET_PROJECT_ID',
            '&target_issue_iid=:TARGET_ISSUE_IID',
            '&link_type=:LINK_TYPE',
        ]
            .join('')
            .replace(':PROJECT_ID', `${input.projectId}`)
            .replace(':ISSUE_ID', `${input.issueId}`)
            .replace(':TARGET_PROJECT_ID', input.targetProjectId)
            .replace(':TARGET_ISSUE_IID', input.targetIssueIid)
            .replace(':LINK_TYPE', input.linkType);
        return await this.post(path, {});
    }
}
exports.IssueProvider = IssueProvider;


/***/ }),

/***/ "./src/providers/IterationsProvider.ts":
/*!*********************************************!*\
  !*** ./src/providers/IterationsProvider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IterationsProvider = void 0;
const GitlabProvider_1 = __webpack_require__(/*! ./GitlabProvider */ "./src/providers/GitlabProvider.ts");
const iteration_1 = __webpack_require__(/*! ./query/iteration */ "./src/providers/query/iteration.ts");
class IterationsProvider extends GitlabProvider_1.GitlabProvider {
    async getIterations(projectId, title = '') {
        return await this.queryCached(`iterations-${projectId} `, iteration_1.iterationQuery, {
            fullPath: projectId,
            title,
            state: 'opened',
        }, title !== '' ? 0.5 : 20);
    }
}
exports.IterationsProvider = IterationsProvider;


/***/ }),

/***/ "./src/providers/LabelsProvider.ts":
/*!*****************************************!*\
  !*** ./src/providers/LabelsProvider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LabelsProvider = void 0;
const GitlabProvider_1 = __webpack_require__(/*! ./GitlabProvider */ "./src/providers/GitlabProvider.ts");
const label_1 = __webpack_require__(/*! ./query/label */ "./src/providers/query/label.ts");
class LabelsProvider extends GitlabProvider_1.GitlabProvider {
    async getLabels(projectId, search = '') {
        return this.queryCached(`labels-${projectId}-${search}`, label_1.labelsQuery, {
            fullPath: projectId,
            searchTerm: search,
        }, search === '' ? 20 : 0.5);
    }
}
exports.LabelsProvider = LabelsProvider;


/***/ }),

/***/ "./src/providers/MilestonesProvider.ts":
/*!*********************************************!*\
  !*** ./src/providers/MilestonesProvider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MilestonesProvider = void 0;
const GitlabProvider_1 = __webpack_require__(/*! ./GitlabProvider */ "./src/providers/GitlabProvider.ts");
const milestone_1 = __webpack_require__(/*! ./query/milestone */ "./src/providers/query/milestone.ts");
class MilestonesProvider extends GitlabProvider_1.GitlabProvider {
    async getMilestones(projectId, title = '') {
        return await this.queryCached(`milestones-${projectId}-${title}`, milestone_1.milestoneQuery, {
            fullPath: projectId,
            state: 'active',
            title,
        }, title === '' ? 20 : 0.5);
    }
}
exports.MilestonesProvider = MilestonesProvider;


/***/ }),

/***/ "./src/providers/ProjectsProvider.ts":
/*!*******************************************!*\
  !*** ./src/providers/ProjectsProvider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsProvider = void 0;
const GitlabProvider_1 = __webpack_require__(/*! ./GitlabProvider */ "./src/providers/GitlabProvider.ts");
const project_1 = __webpack_require__(/*! ./query/project */ "./src/providers/query/project.ts");
class ProjectsProvider extends GitlabProvider_1.GitlabProvider {
    async getProjects(projectId, search = '') {
        return await this.queryCached(`projects-${projectId}-${search}`, project_1.projectsQuery, {
            fullPath: projectId,
            search,
        }, search === '' ? 20 : 0.5);
    }
}
exports.ProjectsProvider = ProjectsProvider;


/***/ }),

/***/ "./src/providers/RecentProvider.ts":
/*!*****************************************!*\
  !*** ./src/providers/RecentProvider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecentProvider = void 0;
const Cache_1 = __webpack_require__(/*! ../helpers/Cache */ "./src/helpers/Cache.ts");
class RecentProvider {
    constructor(key) {
        this.cache = new Cache_1.default();
        this.key = `recent-${key}`;
    }
    get() {
        return this.cache.get(this.key) || [];
    }
    add(...items) {
        const itemsId = items.map((i) => i.id);
        this.cache.set(this.key, [...items, ...this.get().filter((el) => !itemsId.includes(el.id))], 'lifetime');
    }
}
exports.RecentProvider = RecentProvider;


/***/ }),

/***/ "./src/providers/UsersProvider.ts":
/*!****************************************!*\
  !*** ./src/providers/UsersProvider.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersProvider = void 0;
const GitlabProvider_1 = __webpack_require__(/*! ./GitlabProvider */ "./src/providers/GitlabProvider.ts");
const user_1 = __webpack_require__(/*! ./query/user */ "./src/providers/query/user.ts");
class UsersProvider extends GitlabProvider_1.GitlabProvider {
    async getUsers(projectId, search = '') {
        return await this.queryCached(`users-${projectId}-${search}`, user_1.userQuery, {
            fullPath: projectId,
            search,
        }, search === '' ? 20 : 0.5);
    }
}
exports.UsersProvider = UsersProvider;


/***/ }),

/***/ "./src/providers/query/issue.ts":
/*!**************************************!*\
  !*** ./src/providers/query/issue.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueMutation = exports.issuesQuery = exports.issueQuery = void 0;
const label_1 = __webpack_require__(/*! ./label */ "./src/providers/query/label.ts");
const user_1 = __webpack_require__(/*! ./user */ "./src/providers/query/user.ts");
exports.issueQuery = `query issueEE($projectPath: ID!, $iid: String!) {
  project(fullPath: $projectPath) {
    id
    issue(iid: $iid) {
      id
      iid
      title
      description
      createdAt
      state
      confidential
      dueDate
      milestone {
        id
        title
        startDate
        dueDate
        __typename
      }
      labels {
        nodes {
          ...Label
        }
      }
      relatedMergeRequests {
        nodes {
          iid
          title
          state
          author {
            ...User
          }
        }
      }
      assignees {
        nodes {
          ...User
        }
      }
      weight
      type
      __typename
    }
    __typename
  }
}

${label_1.labelFragment}
${user_1.userFragment}
`;
exports.issuesQuery = `query groupWorkItems($searchTerm: String, $fullPath: ID!, $types: [IssueType!], $in: [IssuableSearchableField!], $includeAncestors: Boolean = false, $includeDescendants: Boolean = false, $iid: String = null, $searchByIid: Boolean = false, $searchByText: Boolean = true, $searchEmpty: Boolean = true) {
  workspace: group(fullPath: $fullPath) {
    id
    workItems(
      search: $searchTerm
      types: $types
      in: $in
      includeAncestors: $includeAncestors
      includeDescendants: $includeDescendants
    ) @include(if: $searchByText) {
      nodes {
        id
        iid
        title
        confidential
        project {
          fullPath
        }
        __typename
      }
      __typename
    }
    workItemsByIid: workItems(
      iid: $iid
      types: $types
      includeAncestors: $includeAncestors
      includeDescendants: $includeDescendants
    ) @include(if: $searchByIid) {
      nodes {
        id
        iid
        title
        confidential
        project {
          fullPath
        }
        __typename
      }
      __typename
    }
    workItemsEmpty: workItems(
      types: $types
      includeAncestors: $includeAncestors
      includeDescendants: $includeDescendants
    ) @include(if: $searchEmpty) {
      nodes {
        id
        iid
        title
        confidential
        project {
          fullPath
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`;
exports.issueMutation = `
mutation CreateIssue($input: CreateIssueInput!) {
  createIssuable: createIssue(input: $input) {
    issuable: issue {
      ...Issue
      __typename
    }
    errors
    __typename
  }
}

fragment Issue on Issue {
  ...IssueNode
  id
  weight
  blocked
  blockedByCount
  epic {
    id
    __typename
  }
  iteration {
    id
    title
    startDate
    dueDate
    iterationCadence {
      id
      title
      __typename
    }
    __typename
  }
  healthStatus
  __typename
}

fragment IssueNode on Issue {
  id
  iid
  title
  referencePath: reference(full: true)
  closedAt
  dueDate
  timeEstimate
  totalTimeSpent
  humanTimeEstimate
  humanTotalTimeSpent
  emailsDisabled
  confidential
  hidden
  webUrl
  relativePosition
  projectId
  type
  severity
  milestone {
    ...MilestoneFragment
    __typename
  }
  assignees {
    nodes {
      ...User
      __typename
    }
    __typename
  }
  labels {
    nodes {
      id
      title
      color
      description
      __typename
    }
    __typename
  }
  __typename
}

fragment MilestoneFragment on Milestone {
  expired
  id
  state
  title
  __typename
}

fragment User on User {
  id
  avatarUrl
  name
  username
  webUrl
  webPath
  __typename
}
`;


/***/ }),

/***/ "./src/providers/query/iteration.ts":
/*!******************************************!*\
  !*** ./src/providers/query/iteration.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iterationQuery = exports.iterationFragment = void 0;
exports.iterationFragment = `fragment IterationFragment on Iteration {
  id
  title
  startDate
  dueDate
  webUrl
  iterationCadence {
    id
    title
    __typename
  }
  __typename
}`;
exports.iterationQuery = `query issueIterationsAliased($fullPath: ID!, $title: String, $state: IterationState) {
  workspace: group(fullPath: $fullPath) {
    id
    attributes: iterations(
      search: $title
      in: [TITLE, CADENCE_TITLE]
      state: $state
    ) {
      nodes {
        ...IterationFragment
        state
        __typename
      }
      __typename
    }
    __typename
  }
}
${exports.iterationFragment}
`;


/***/ }),

/***/ "./src/providers/query/label.ts":
/*!**************************************!*\
  !*** ./src/providers/query/label.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.labelsQuery = exports.labelFragment = void 0;
exports.labelFragment = `
  fragment Label on Label {
    id
    title
    description
    color
    textColor
    __typename
  }
`;
exports.labelsQuery = `query projectLabels($fullPath: ID!, $searchTerm: String) {
  workspace: project(fullPath: $fullPath) {
    id
    labels(searchTerm: $searchTerm, includeAncestorGroups: true) {
      nodes {
        ...Label
        __typename
      }
      __typename
    }
    __typename
  }
}

${exports.labelFragment}
`;


/***/ }),

/***/ "./src/providers/query/milestone.ts":
/*!******************************************!*\
  !*** ./src/providers/query/milestone.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.milestoneQuery = void 0;
exports.milestoneQuery = `query projectMilestones($fullPath: ID!, $title: String, $state: MilestoneStateEnum) {
  workspace: project(fullPath: $fullPath) {
    id
    attributes: milestones(
      searchTitle: $title
      state: $state
      sort: EXPIRED_LAST_DUE_DATE_ASC
      first: 20
      includeAncestors: true
    ) {
      nodes {
        ...MilestoneFragment
        state
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment MilestoneFragment on Milestone {
  id
  iid
  title
  webUrl: webPath
  dueDate
  expired
  __typename
}

`;


/***/ }),

/***/ "./src/providers/query/project.ts":
/*!****************************************!*\
  !*** ./src/providers/query/project.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectsQuery = void 0;
exports.projectsQuery = `query boardsGetGroupProjects($fullPath: ID!, $search: String, $after: String) {
  group(fullPath: $fullPath) {
    id
    projects(search: $search, after: $after, first: 100, includeSubgroups: true) {
      nodes {
        id
        name
        avatarUrl
        fullPath
        nameWithNamespace
        archived
        __typename
      }
      pageInfo {
        ...PageInfo
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
  __typename
}

`;


/***/ }),

/***/ "./src/providers/query/user.ts":
/*!*************************************!*\
  !*** ./src/providers/query/user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userQuery = exports.userFragment = void 0;
exports.userFragment = `
fragment User on User {
  id
  avatarUrl
  name
  username
  webUrl
  webPath
  __typename
}
`;
exports.userQuery = `
query workspaceAutocompleteUsersSearch($search: String!, $fullPath: ID!, $isProject: Boolean = true) {
  groupWorkspace: group(fullPath: $fullPath) @skip(if: $isProject) {
    id
    users: autocompleteUsers(search: $search) {
      ...User
      ...UserAvailability
      __typename
    }
    __typename
  }
  workspace: project(fullPath: $fullPath) {
    id
    users: autocompleteUsers(search: $search) {
      ...User
      ...UserAvailability
      __typename
    }
    __typename
  }
}

${exports.userFragment}
fragment UserAvailability on User {
  status {
    availability
    __typename
  }
  __typename
}
`;


/***/ }),

/***/ "./src/services/ClearCacheService.ts":
/*!*******************************************!*\
  !*** ./src/services/ClearCacheService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Cache_1 = __webpack_require__(/*! ../helpers/Cache */ "./src/helpers/Cache.ts");
class ClearCacheService {
    constructor() {
        this.cache = new Cache_1.default();
    }
    init() {
        this.cache.clearInvalid();
        window.setInterval(this.cache.clearInvalid.bind(this.cache), 60 * 1000);
    }
}
exports["default"] = ClearCacheService;


/***/ }),

/***/ "./src/services/CreateRelatedIssue.ts":
/*!********************************************!*\
  !*** ./src/services/CreateRelatedIssue.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const CreateRelatedIssueModal_1 = __webpack_require__(/*! ../components/CreateRelatedIssueModal */ "./src/components/CreateRelatedIssueModal.ts");
const CreateButton_1 = __webpack_require__(/*! ../components/create-related-issue/CreateButton */ "./src/components/create-related-issue/CreateButton.ts");
class CreateRelatedIssue {
    constructor() {
        this.modal = new CreateRelatedIssueModal_1.default();
        this.addButton = new CreateButton_1.default();
    }
    init() {
        this.modal.init();
        this.addButton.event('click', this.modal.show.bind(this.modal));
        this.mountButton();
    }
    mountButton() {
        setTimeout(this.addButton.init.bind(this.addButton), 1000);
        setTimeout(this.addButton.init.bind(this.addButton), 3000);
    }
}
exports["default"] = CreateRelatedIssue;


/***/ }),

/***/ "./src/services/ImagePreview.ts":
/*!**************************************!*\
  !*** ./src/services/ImagePreview.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ImagePreviewModal_1 = __webpack_require__(/*! ../components/ImagePreviewModal */ "./src/components/ImagePreviewModal.ts");
const ImageLinks_1 = __webpack_require__(/*! ../helpers/ImageLinks */ "./src/helpers/ImageLinks.ts");
class ImagePreview {
    constructor() {
        this.modal = new ImagePreviewModal_1.default();
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
const IssuePreviewModal_1 = __webpack_require__(/*! ../components/IssuePreviewModal */ "./src/components/IssuePreviewModal.ts");
const IssueLinks_1 = __webpack_require__(/*! ../helpers/IssueLinks */ "./src/helpers/IssueLinks.ts");
const intendHover_1 = __webpack_require__(/*! ../helpers/intendHover */ "./src/helpers/intendHover.ts");
const IssueProvider_1 = __webpack_require__(/*! ../providers/IssueProvider */ "./src/providers/IssueProvider.ts");
class IssuePreview {
    constructor() {
        this.modal = new IssuePreviewModal_1.default();
        this.issue = new IssueProvider_1.IssueProvider();
    }
    init() {
        this.initLinks();
        setInterval(this.initLinks.bind(this), 3000);
    }
    initLinks() {
        IssueLinks_1.IssueLinks.getLinks().forEach((link) => {
            (0, intendHover_1.default)(link, this.onHover.bind(this));
            link.addEventListener('mouseleave', this.onLeave.bind(this));
        });
    }
    async onHover(event) {
        this.modal.show(event);
        const element = event.target;
        const link = IssueLinks_1.IssueLinks.parseLink(element.href);
        if (link) {
            const issue = await this.issue.getIssue(link.projectPath, link.issue);
            this.modal.updateContent(issue.data.project.issue);
            this.modal.fixPosition(event);
        }
    }
    onLeave() {
        this.modal.hide();
    }
}
exports["default"] = IssuePreview;


/***/ }),

/***/ "./src/services/RelatedIssueAutocomplete.ts":
/*!**************************************************!*\
  !*** ./src/services/RelatedIssueAutocomplete.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const RelatedIssuesAutocompleteModal_1 = __webpack_require__(/*! ../components/RelatedIssuesAutocompleteModal */ "./src/components/RelatedIssuesAutocompleteModal.ts");
class RelatedIssueAutocomplete {
    constructor() {
        this.modal = new RelatedIssuesAutocompleteModal_1.default();
        this.ready = false;
    }
    init() {
        this.initObserver();
        window.setTimeout(this.initObserver.bind(this), 1000);
        window.setTimeout(this.initObserver.bind(this), 3000);
        window.setTimeout(this.initObserver.bind(this), 5000);
    }
    initObserver() {
        const section = document.querySelector('#related-issues');
        if (this.ready || !section) {
            return;
        }
        this.ready = true;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    this.initAutocomplete(section);
                }
            });
        });
        observer.observe(section, {
            childList: true,
        });
    }
    initAutocomplete(section) {
        const input = section.querySelector('#add-related-issues-form-input');
        if (input) {
            this.modal.init(input);
        }
    }
}
exports["default"] = RelatedIssueAutocomplete;


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
const CreateRelatedIssue_1 = __webpack_require__(/*! ./services/CreateRelatedIssue */ "./src/services/CreateRelatedIssue.ts");
const RelatedIssueAutocomplete_1 = __webpack_require__(/*! ./services/RelatedIssueAutocomplete */ "./src/services/RelatedIssueAutocomplete.ts");
const ClearCacheService_1 = __webpack_require__(/*! ./services/ClearCacheService */ "./src/services/ClearCacheService.ts");
[
    ClearCacheService_1.default,
    ImagePreview_1.default,
    IssuePreview_1.default,
    CreateRelatedIssue_1.default,
    RelatedIssueAutocomplete_1.default,
].forEach((Service) => new Service().init());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXguc2NzcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9DcmVhdGVSZWxhdGVkSXNzdWVNb2RhbC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL0ltYWdlUHJldmlld01vZGFsLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvSXNzdWVQcmV2aWV3TW9kYWwudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9SZWxhdGVkSXNzdWVzQXV0b2NvbXBsZXRlTW9kYWwudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2xvc2VCdXR0b24udHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jb21tb24vTGFiZWxDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jb21tb24vTWVyZ2VSZXF1ZXN0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL1N0YXR1c0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Vc2VyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0vRHJvcGRvd24udHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZm9ybS9Ecm9wZG93bkJ1dHRvbi50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mb3JtL0Ryb3Bkb3duTGlzdC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mb3JtL0Ryb3Bkb3duTW9kYWwudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZm9ybS9Ecm9wZG93blNlYXJjaC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mb3JtL0ZpZWxkLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLXJlbGF0ZWQtaXNzdWUvQ3JlYXRlQnV0dG9uLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLXJlbGF0ZWQtaXNzdWUvQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxDb250ZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLXJlbGF0ZWQtaXNzdWUvQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9mb3JtL0Zvcm1Bc3NpZ25lZXMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9mb3JtL0Zvcm1JdGVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9mb3JtL0Zvcm1MYWJlbHMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9mb3JtL0Zvcm1NaWxlc3RvbmUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9mb3JtL0Zvcm1Qcm9qZWN0LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLXJlbGF0ZWQtaXNzdWUvZm9ybS9Gb3JtUmVsYXRpb24udHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9mb3JtL0Zvcm1UaXRsZS50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2ltYWdlLXByZXZpZXcvQ2xvc2VNb2RhbC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2ltYWdlLXByZXZpZXcvSW1hZ2VFbGVtZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUtcHJldmlldy9Jc3N1ZUFzc2lnbmVlLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUtcHJldmlldy9Jc3N1ZUJsb2NrLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUtcHJldmlldy9Jc3N1ZUl0ZXJhdGlvbi50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2lzc3VlLXByZXZpZXcvSXNzdWVMYWJlbHMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9pc3N1ZS1wcmV2aWV3L0lzc3VlTG9hZGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUtcHJldmlldy9Jc3N1ZU1lcmdlUmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvY29tcG9uZW50cy9pc3N1ZS1wcmV2aWV3L0lzc3VlTWlsZXN0b25lLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2NvbXBvbmVudHMvaXNzdWUtcHJldmlldy9Jc3N1ZU1vZGFsQ29udGVudC50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL2lzc3VlLXByZXZpZXcvSXNzdWVUaXRsZS50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9jb21wb25lbnRzL3JlbGF0ZWQtaXNzdWUtYXV0b2NvbXBsZXRlL0F1dG9jb21wbGV0ZU1vZGFsLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2hlbHBlcnMvQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvaGVscGVycy9Eb20udHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvaGVscGVycy9HcmFwaFFsLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2hlbHBlcnMvSW1hZ2VMaW5rcy50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9oZWxwZXJzL0lzc3VlTGlua3MudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvaGVscGVycy9pbnRlbmRIb3Zlci50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9wcm92aWRlcnMvR2l0bGFiUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL0lzc3VlUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL0l0ZXJhdGlvbnNQcm92aWRlci50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9wcm92aWRlcnMvTGFiZWxzUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL01pbGVzdG9uZXNQcm92aWRlci50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9wcm92aWRlcnMvUHJvamVjdHNQcm92aWRlci50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9wcm92aWRlcnMvUmVjZW50UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL1VzZXJzUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL3F1ZXJ5L2lzc3VlLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL3Byb3ZpZGVycy9xdWVyeS9pdGVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL3F1ZXJ5L2xhYmVsLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL3Byb3ZpZGVycy9xdWVyeS9taWxlc3RvbmUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL3F1ZXJ5L3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvcHJvdmlkZXJzL3F1ZXJ5L3VzZXIudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc2VydmljZXMvQ2xlYXJDYWNoZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc2VydmljZXMvQ3JlYXRlUmVsYXRlZElzc3VlLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL3NlcnZpY2VzL0ltYWdlUHJldmlldy50cyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy8uL3NyYy9zZXJ2aWNlcy9Jc3N1ZVByZXZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvLi9zcmMvc2VydmljZXMvUmVsYXRlZElzc3VlQXV0b2NvbXBsZXRlLnRzIiwid2VicGFjazovL2dpdGxhYi1wbHVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGxhYi1wbHVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dpdGxhYi1wbHVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRsYWItcGx1cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGxhYi1wbHVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0bGFiLXBsdXMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dpdGxhYi1wbHVzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIGxvYWRlci1hbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmdscC1pc3N1ZS1wcmV2aWV3LW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nbC1iYWNrZ3JvdW5kLWNvbG9yLWRlZmF1bHQsIHZhcigtLWdsLWNvbG9yLW5ldXRyYWwtMCwgI2ZmZikpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nbC1ib3JkZXItY29sb3ItZGVmYXVsdCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdmlzaWJpbGl0eSwgb3BhY2l0eSwgdHJhbnNmb3JtO1xufVxuLmdscC1pc3N1ZS1wcmV2aWV3LW1vZGFsLmdscC1tb2RhbC12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cbi5nbHAtaXNzdWUtcHJldmlldy1tb2RhbCAuZ2xwLWlzc3VlLW1vZGFsLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmdscC1pc3N1ZS1wcmV2aWV3LW1vZGFsIC5nbHAtbW9kYWwtbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbn1cbi5nbHAtaXNzdWUtcHJldmlldy1tb2RhbCAuZ2xwLW1vZGFsLWxvYWRlciAuZ2xwLW1vZGFsLWxvYWRlci1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2wtYmFja2dyb3VuZC1jb2xvci1zdWJ0bGUsIHZhcigtLWdsLWNvbG9yLW5ldXRyYWwtMTAsICNmYmZhZmQpKTtcbiAgYW5pbWF0aW9uOiBsaW5lYXIgMXMgaW5maW5pdGUgbG9hZGVyLWFuaW1hdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmdscC1pc3N1ZS1wcmV2aWV3LW1vZGFsIC5nbHAtbW9kYWwtbG9hZGVyIC5nbHAtbW9kYWwtbG9hZGVyLWlubmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmdscC1pc3N1ZS1wcmV2aWV3LW1vZGFsIC5nbHAtYmxvY2sge1xuICBwYWRkaW5nOiAwLjc1cmVtIDAgMXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWdsLWJvcmRlci1jb2xvci1zdWJ0bGUsIHZhcigtLWdsLWNvbG9yLW5ldXRyYWwtNTAsICNlY2VjZWYpKTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5nbHAtaXNzdWUtcHJldmlldy1tb2RhbCAuYXNzaWduZWUtZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZ2FwOiA0cHg7XG59XG5cbi5nbHAtaW1hZ2UtcHJldmlldy1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cbi5nbHAtaW1hZ2UtcHJldmlldy1tb2RhbC5nbHAtbW9kYWwtdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLmdscC1pbWFnZS1wcmV2aWV3LW1vZGFsIC5nbHAtbW9kYWwtaW1nIHtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIG1heC1oZWlnaHQ6IDk1JTtcbn1cbi5nbHAtaW1hZ2UtcHJldmlldy1tb2RhbCAuZ2xwLW1vZGFsLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRlci1hbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmdscC1jcmVhdGUtcmVsYXRlZC1pc3N1ZS1sYXllciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nbHAtY3JlYXRlLXJlbGF0ZWQtaXNzdWUtbGF5ZXIuZ2xwLW1vZGFsLXZpc2libGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdscC1jcmVhdGUtcmVsYXRlZC1pc3N1ZS1sYXllciAuZ2xwLWNyZWF0ZS1yZWxhdGVkLWlzc3VlLW1vZGFsIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBtYXgtd2lkdGg6IDk1dnc7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2lzc3VlLXByZXZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2ltYWdlLXByZXZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0k7SUFDSSx1QkFBQTtFQ0NOO0VERUU7SUFDSSx5QkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxRkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1EQUFBO0FDREo7QURHSTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRlI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDSFI7QURLUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3RkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0hoQjtBRFFJO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVGQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDTlI7QURTSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0FDUFI7O0FDdEVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FEeUVKO0FDdkVJO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUR5RVI7QUN0RUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBRHdFUjtBQ3JFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHVFUjs7QUU5R0E7RUFDSTtJQUNJLHVCQUFBO0VGaUhOO0VFOUdFO0lBQ0kseUJBQUE7RUZnSE47QUFDRjtBRTdHQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUYrR0o7QUU3R0k7RUFDSSxhQUFBO0FGK0dSO0FFNUdJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUY4R1JcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21tb24vQ29tcG9uZW50XCIpO1xuY29uc3QgQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxIZWFkZXJfMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1yZWxhdGVkLWlzc3VlL0NyZWF0ZVJlbGF0ZWRJc3N1ZU1vZGFsSGVhZGVyXCIpO1xuY29uc3QgQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxDb250ZW50XzEgPSByZXF1aXJlKFwiLi9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9DcmVhdGVSZWxhdGVkSXNzdWVNb2RhbENvbnRlbnRcIik7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0RvbVwiKTtcbmNvbnN0IElzc3VlTGlua3NfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0lzc3VlTGlua3NcIik7XG5jbGFzcyBDcmVhdGVSZWxhdGVkSXNzdWVNb2RhbCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2xwLWNyZWF0ZS1yZWxhdGVkLWlzc3VlLW1vZGFsIGNydWQgZ2wtYm9yZGVyIGdsLXJvdW5kZWQtZm9ybSBnbC1ib3JkZXItc2VjdGlvbiBnbC1iZy1zdWJ0bGUgZ2wtbXQtNScsXG4gICAgICAgIH0pO1xuICAgICAgICBzdXBlcignZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NlczogJ2dscC1jcmVhdGUtcmVsYXRlZC1pc3N1ZS1sYXllcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NvbnRhaW5lcl0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2libGVDbGFzc05hbWUgPSAnZ2xwLW1vZGFsLXZpc2libGUnO1xuICAgICAgICBjb25zdCBsaW5rID0gSXNzdWVMaW5rc18xLklzc3VlTGlua3MucGFyc2VMaW5rKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxDb250ZW50XzEuZGVmYXVsdChsaW5rLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKG5ldyBDcmVhdGVSZWxhdGVkSXNzdWVNb2RhbEhlYWRlcl8xLmRlZmF1bHQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIH0pLmdldEVsZW1lbnQoKSwgZm9ybS5nZXRFbGVtZW50KCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubW91bnQoZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tbW9uL0NvbXBvbmVudFwiKTtcbmNvbnN0IEltYWdlRWxlbWVudF8xID0gcmVxdWlyZShcIi4vaW1hZ2UtcHJldmlldy9JbWFnZUVsZW1lbnRcIik7XG5jb25zdCBDbG9zZU1vZGFsXzEgPSByZXF1aXJlKFwiLi9pbWFnZS1wcmV2aWV3L0Nsb3NlTW9kYWxcIik7XG5jbGFzcyBJbWFnZVByZXZpZXdNb2RhbCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgeyBjbGFzc2VzOiAnZ2xwLWltYWdlLXByZXZpZXctbW9kYWwnIH0pO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlRWxlbWVudF8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2xhc3NOYW1lID0gJ2dscC1tb2RhbC12aXNpYmxlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmltYWdlLmdldEVsZW1lbnQoKSwgbmV3IENsb3NlTW9kYWxfMS5kZWZhdWx0KHRoaXMuaGlkZS5iaW5kKHRoaXMpKS5nZXRFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLm1vdW50KGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgICBzaG93KHNyYykge1xuICAgICAgICB0aGlzLmltYWdlLnVwZGF0ZVNyYyhzcmMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnZpc2libGVDbGFzc05hbWUpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZpc2libGVDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLmltYWdlLnVwZGF0ZVNyYygnJyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2VQcmV2aWV3TW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tbW9uL0NvbXBvbmVudFwiKTtcbmNvbnN0IElzc3VlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9pc3N1ZS1wcmV2aWV3L0lzc3VlTG9hZGVyXCIpO1xuY29uc3QgSXNzdWVNb2RhbENvbnRlbnRfMSA9IHJlcXVpcmUoXCIuL2lzc3VlLXByZXZpZXcvSXNzdWVNb2RhbENvbnRlbnRcIik7XG5jbGFzcyBJc3N1ZVByZXZpZXdNb2RhbCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgeyBjbGFzc2VzOiAnZ2xwLWlzc3VlLXByZXZpZXctbW9kYWwnIH0pO1xuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBJc3N1ZUxvYWRlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbmV3IElzc3VlTW9kYWxDb250ZW50XzEuSXNzdWVNb2RhbENvbnRlbnQoKTtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2xhc3NOYW1lID0gJ2dscC1tb2RhbC12aXNpYmxlJztcbiAgICAgICAgdGhpcy5tb3VudChkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc2hvdyhldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sb2FkZXIuZ2V0RWxlbWVudCgpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtldmVudC5wYWdlWCArIDEwfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke2V2ZW50LnBhZ2VZICsgMTB9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMudmlzaWJsZUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGZpeFBvc2l0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRZID0gZXZlbnQuc2NyZWVuWSArXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cbiAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgaWYgKGRZID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke2RZICsgMTV9cHgpYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZpc2libGVDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICAgIHVwZGF0ZUNvbnRlbnQoaXNzdWUpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnVwZGF0ZShpc3N1ZSk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudC5nZXRFbGVtZW50KCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlUHJldmlld01vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBBdXRvY29tcGxldGVNb2RhbF8xID0gcmVxdWlyZShcIi4vcmVsYXRlZC1pc3N1ZS1hdXRvY29tcGxldGUvQXV0b2NvbXBsZXRlTW9kYWxcIik7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0RvbVwiKTtcbmNvbnN0IElzc3VlUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuLi9wcm92aWRlcnMvSXNzdWVQcm92aWRlclwiKTtcbmNvbnN0IElzc3VlTGlua3NfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0lzc3VlTGlua3NcIik7XG5jb25zdCBJY29uQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21tb24vSWNvbkNvbXBvbmVudFwiKTtcbmNsYXNzIFJlbGF0ZWRJc3N1ZXNBdXRvY29tcGxldGVNb2RhbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVhZHlDbGFzcyA9ICdnbHAtaW5wdXQtcmVhZHknO1xuICAgICAgICB0aGlzLmlucHV0ID0gRG9tXzEuRG9tLmVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuaXNzdWVQcm92aWRlciA9IG5ldyBJc3N1ZVByb3ZpZGVyXzEuSXNzdWVQcm92aWRlcigpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRoaXMuaXNzdWVQcm92aWRlci5kZWJvdW5jZSh0aGlzLmxvYWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubGluayA9IElzc3VlTGlua3NfMS5Jc3N1ZUxpbmtzLnBhcnNlTGluayh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlTW9kYWwgPSBuZXcgQXV0b2NvbXBsZXRlTW9kYWxfMS5kZWZhdWx0KHRoaXMub25TZWxlY3QuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcyksIHRoaXMuc2VhcmNoLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCAmJiAhdGhpcy5pbnB1dC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZU1vZGFsLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdChpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaW5wdXQuY2xvc2VzdCgnLmFkZC1pc3N1YWJsZS1mb3JtLWlucHV0LXdyYXBwZXInKTtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZU1vZGFsLm1vdW50KGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5pbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMucmVhZHlDbGFzcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnNob3cuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGlzTW91bnRlZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMucmVhZHlDbGFzcyk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlTW9kYWwuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zZWFyY2goJycpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkKHRlcm0gPSAnJykge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgaWYgKCF0aGlzLmxpbmspIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaXNzdWVQcm92aWRlci5nZXRJc3N1ZXModGhpcy5saW5rLndvcmtzcGFjZVBhdGgsIHRlcm0pO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZU1vZGFsLnVwZGF0ZUl0ZW1zKFtcbiAgICAgICAgICAgIC4uLigoKF9hID0gcmVzcG9uc2UuZGF0YS53b3Jrc3BhY2Uud29ya0l0ZW1zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZXMpIHx8IFtdKSxcbiAgICAgICAgICAgIC4uLigoKF9iID0gcmVzcG9uc2UuZGF0YS53b3Jrc3BhY2Uud29ya0l0ZW1zQnlJaWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ub2RlcykgfHwgW10pLFxuICAgICAgICAgICAgLi4uKCgoX2MgPSByZXNwb25zZS5kYXRhLndvcmtzcGFjZS53b3JrSXRlbXNFbXB0eSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm5vZGVzKSB8fCBbXSksXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBvblNlbGVjdChpdGVtKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBgJHtpdGVtLnByb2plY3QuZnVsbFBhdGh9IyR7aXRlbS5paWR9IGA7XG4gICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlTW9kYWwuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NlczogJ2dsLWZsZXggZ2wtZ2FwLXgtMiBnbC1weS0yJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IEljb25Db21wb25lbnRfMS5JY29uQ29tcG9uZW50KCdpc3N1ZS10eXBlLWlzc3VlJywgJ3MxNicpLmdldEljb24oKSxcbiAgICAgICAgICAgICAgICB7IHRhZzogJ3NtYWxsJywgY2hpbGRyZW46IGl0ZW0uaWlkIH0sXG4gICAgICAgICAgICAgICAgeyB0YWc6ICdzcGFuJywgY2xhc3NlczogJ2dsLWZsZXggZ2wtZmxleC13cmFwJywgY2hpbGRyZW46IGl0ZW0udGl0bGUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbGF0ZWRJc3N1ZXNBdXRvY29tcGxldGVNb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9Db21wb25lbnRcIik7XG5jb25zdCBJY29uQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9JY29uQ29tcG9uZW50XCIpO1xuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihvbkNsaWNrKSB7XG4gICAgICAgIHN1cGVyKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnYnRuIGpzLWlzc3VlLWl0ZW0tcmVtb3ZlLWJ1dHRvbiBnbC1tci0yIGJ0bi1kZWZhdWx0IGJ0bi1zbSBnbC1idXR0b24gYnRuLWRlZmF1bHQtdGVydGlhcnkgYnRuLWljb24nLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBjbGljazogb25DbGljayxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW25ldyBJY29uQ29tcG9uZW50XzEuSWNvbkNvbXBvbmVudCgnY2xvc2UteHMnLCAnczE2JykuZ2V0SWNvbigpXSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xvc2VCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcsIHByb3BzID0ge30pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gRG9tXzEuRG9tLmNyZWF0ZSh7IHRhZywgLi4ucHJvcHMgfSk7XG4gICAgfVxuICAgIGFkZENsYXNzTmFtZSguLi5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgZXZlbnQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIG1vdW50KHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSWNvbkNvbXBvbmVudCA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGljb24sIHNpemUgPSAnczEyJywgLi4uY2xzKSB7XG4gICAgICAgIHN1cGVyKCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG4gICAgICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdnbC1pY29uJywgc2l6ZSwgJ2dsLWZpbGwtY3VycmVudCcsIC4uLmNscyk7XG4gICAgICAgIHVzZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgL2Fzc2V0cy9pY29ucy0yMzZlM2I2ODdkNzg2ZDlkZmU0NzA5MTQzYTk0ZDRjNTNiOGQ1YTFmMjM1Nzc1NDAxZTU4MjUxNDgyOTdmYTg0LnN2ZyMke2ljb259YCk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZCh1c2UpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHN2Zyk7XG4gICAgfVxuICAgIGdldEljb24oKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5nZXRFbGVtZW50KCkuY2hpbGRyZW5bMF07XG4gICAgfVxufVxuZXhwb3J0cy5JY29uQ29tcG9uZW50ID0gSWNvbkNvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MYWJlbENvbXBvbmVudCA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vQ29tcG9uZW50XCIpO1xuY29uc3QgRG9tXzEgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9Eb21cIik7XG5jb25zdCBJY29uQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9JY29uQ29tcG9uZW50XCIpO1xuY2xhc3MgTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihsYWJlbCwgb25SZW1vdmUpIHtcbiAgICAgICAgc3VwZXIoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKGxhYmVsKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCguLi50aGlzLmh0bWwobGFiZWwsIG9uUmVtb3ZlKSk7XG4gICAgfVxuICAgIGh0bWwobGFiZWwsIG9uUmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0IFtzY29wZSwgdGV4dF0gPSBsYWJlbC50aXRsZS5zcGxpdCgnOjonKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLWxhYmVsLXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBzY29wZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbGFiZWwtdGV4dC1zY29wZWQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbGluayBnbC1sYWJlbC1saW5rIGdsLWxhYmVsLWxpbmstdW5kZXJsaW5lJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKG9uUmVtb3ZlKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2J0biBnbC1sYWJlbC1jbG9zZSAhZ2wtcC0wIGJ0bi1yZXNldCBidG4tc20gZ2wtYnV0dG9uIGJ0bi1yZXNldC10ZXJ0aWFyeScsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudHM6IHsgY2xpY2s6IG9uUmVtb3ZlIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtYnV0dG9uLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtuZXcgSWNvbkNvbXBvbmVudF8xLkljb25Db21wb25lbnQoJ2Nsb3NlLXhzJykuZ2V0SWNvbigpXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICB9XG4gICAgc2V0Q2xhc3NlcyhsYWJlbCkge1xuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgnZ2wtbGFiZWwnLCAnaGlkZS1jb2xsYXBzZWQnLCBsYWJlbC50ZXh0Q29sb3IgPT09ICcjRkZGRkZGJ1xuICAgICAgICAgICAgPyAnZ2wtbGFiZWwtdGV4dC1saWdodCdcbiAgICAgICAgICAgIDogJ2dsLWxhYmVsLXRleHQtZGFyaycpO1xuICAgICAgICBpZiAobGFiZWwudGl0bGUuaW5jbHVkZXMoJzo6JykpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdnbC1sYWJlbC1zY29wZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtYmFja2dyb3VuZC1jb2xvcicsIGxhYmVsLmNvbG9yKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWluc2V0LWJvcmRlcicsIGBpbnNldCAwIDAgMCAycHggJHtsYWJlbC5jb2xvcn1gKTtcbiAgICB9XG59XG5leHBvcnRzLkxhYmVsQ29tcG9uZW50ID0gTGFiZWxDb21wb25lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVyZ2VSZXF1ZXN0Q29tcG9uZW50ID0gdm9pZCAwO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9Db21wb25lbnRcIik7XG5jb25zdCBJY29uQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9JY29uQ29tcG9uZW50XCIpO1xuY29uc3QgRG9tXzEgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9Eb21cIik7XG5jb25zdCBVc2VyQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9Vc2VyQ29tcG9uZW50XCIpO1xuY29uc3QgaWNvbk1hcCA9IHtcbiAgICBtZXJnZWQ6ICdtZXJnZScsXG4gICAgb3BlbmVkOiAnbWVyZ2UtcmVxdWVzdCcsXG4gICAgY2xvc2VkOiAnbWVyZ2UtcmVxdWVzdC1jbG9zZScsXG4gICAgbG9ja2VkOiAnc2VhcmNoJyxcbn07XG5jbGFzcyBNZXJnZVJlcXVlc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihtcikge1xuICAgICAgICBzdXBlcignZGl2Jywge1xuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NlczogYGl0ZW0tYm9keSBgLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBEb21fMS5Eb20uZWxlbWVudCgnZGl2JywgJ2l0ZW0tdGl0bGUgZ2wtZmxleCBnbC1taW4tdy0wIGdsLWdhcC0zJywgW1xuICAgICAgICAgICAgICAgICAgICBuZXcgSWNvbkNvbXBvbmVudF8xLkljb25Db21wb25lbnQoaWNvbk1hcFttci5zdGF0ZV0gfHwgJ2VtcHR5JywgJ3MxNicsICdtZXJnZS1yZXF1ZXN0LXN0YXR1cycsIG1yLnN0YXRlKS5nZXRJY29uKCksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLXRleHQtZ3JheS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGAhJHttci5paWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJDb21wb25lbnRfMS5Vc2VyQ29tcG9uZW50KG1yLmF1dGhvciwgJ3MxNicpLmdldEVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpdGVtLXRpdGxlIHNvcnRhYmxlLWxpbmsnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IG1yLnRpdGxlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLk1lcmdlUmVxdWVzdENvbXBvbmVudCA9IE1lcmdlUmVxdWVzdENvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGF0dXNDb21wb25lbnQgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKTtcbmNvbnN0IEljb25Db21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0ljb25Db21wb25lbnRcIik7XG5jbGFzcyBTdGF0dXNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpc09wZW4pIHtcbiAgICAgICAgc3VwZXIoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBgZ2wtYmFkZ2UgYmFkZ2UgYmFkZ2UtcGlsbCAke2lzT3BlbiA/ICdiYWRnZS1zdWNjZXNzJyA6ICdiYWRnZS1pbmZvJ31gLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgSWNvbkNvbXBvbmVudF8xLkljb25Db21wb25lbnQoaXNPcGVuID8gJ2lzc3VlLW9wZW4tbScgOiAnaXNzdWUtY2xvc2UnLCAnczE2JykuZ2V0SWNvbigpLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1iYWRnZS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGlzT3BlbiA/ICdPcGVuJyA6ICdDbG9zZWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlN0YXR1c0NvbXBvbmVudCA9IFN0YXR1c0NvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyQ29tcG9uZW50ID0gdm9pZCAwO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9Db21wb25lbnRcIik7XG5jbGFzcyBVc2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IodXNlciwgc2l6ZSA9ICdzMjQnKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtZmxleCBnbC13LWZ1bGwgZ2wtaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBgZ2wtYXZhdGFyIGdsLWF2YXRhci1jaXJjbGUgZ2wtYXZhdGFyLSR7c2l6ZX1gLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCIke2Fzc2lnbmVlLm5hbWV9J3MgYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbWwtMycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlckNvbXBvbmVudCA9IFVzZXJDb21wb25lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEZpZWxkXzEgPSByZXF1aXJlKFwiLi9GaWVsZFwiKTtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY29uc3QgRHJvcGRvd25TZWFyY2hfMSA9IHJlcXVpcmUoXCIuL0Ryb3Bkb3duU2VhcmNoXCIpO1xuY29uc3QgRHJvcGRvd25MaXN0XzEgPSByZXF1aXJlKFwiLi9Ecm9wZG93bkxpc3RcIik7XG5jb25zdCBEcm9wZG93bkJ1dHRvbl8xID0gcmVxdWlyZShcIi4vRHJvcGRvd25CdXR0b25cIik7XG5jb25zdCBEcm9wZG93bk1vZGFsXzEgPSByZXF1aXJlKFwiLi9Ecm9wZG93bk1vZGFsXCIpO1xuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBGaWVsZF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBpc011bHRpc2VsZWN0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRG9tXzEuRG9tLmVsZW1lbnQoJ2RpdicsICdnbC1yZWxhdGl2ZSBnbC13LWZ1bGwgZ2wtbmV3LWRyb3Bkb3duICFnbC1ibG9jaycpO1xuICAgICAgICBzdXBlcih0aXRsZSwgY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5pc011bHRpc2VsZWN0ID0gaXNNdWx0aXNlbGVjdDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMucmVjZW50bHkgPSBbXTtcbiAgICAgICAgdGhpcy5leHRyYSA9IERvbV8xLkRvbS5lbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgRHJvcGRvd25TZWFyY2hfMS5Ecm9wZG93blNlYXJjaCh0aGlzLmZpbHRlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IERyb3Bkb3duTGlzdF8xLkRyb3Bkb3duTGlzdCh0aGlzLnJlbmRlckl0ZW0uYmluZCh0aGlzKSwgdGhpcy5vblNlbGVjdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBEcm9wZG93bk1vZGFsXzEuRHJvcGRvd25Nb2RhbCh0aGlzLnNlYXJjaC5nZXRFbGVtZW50KCksIHRoaXMubGlzdC5nZXRFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBEcm9wZG93bkJ1dHRvbl8xLkRyb3Bkb3duQnV0dG9uKHRoaXMucmVuZGVyTGFiZWwuYmluZCh0aGlzKSwgdGhpcy5tb2RhbC5zZXRWaXNpYmxlLmJpbmQodGhpcy5tb2RhbCksIHRoaXMucmVzZXQuYmluZCh0aGlzKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5leHRyYSwgdGhpcy5idXR0b24uZ2V0RWxlbWVudCgpLCB0aGlzLm1vZGFsLmdldEVsZW1lbnQoKSk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnJlbmRlcih0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0LnJlbmRlcih0aGlzLml0ZW1zLCB0aGlzLnJlY2VudGx5LCB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlSXRlbXMoaXRlbXMsIHJlY2VudGx5ID0gW10pIHtcbiAgICAgICAgY29uc3QgcmVjZW50bHlJZHMgPSByZWNlbnRseS5tYXAoKGkpID0+IGkuaWQpO1xuICAgICAgICB0aGlzLnJlY2VudGx5ID0gcmVjZW50bHk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5maWx0ZXIoKGkpID0+ICFyZWNlbnRseUlkcy5pbmNsdWRlcyhpLmlkKSk7XG4gICAgICAgIHRoaXMubGlzdC5yZW5kZXIodGhpcy5pdGVtcywgdGhpcy5yZWNlbnRseSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIG9uU2VsZWN0KGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5maWx0ZXIoKGkpID0+IGkuaWQgIT09IGl0ZW0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFtpdGVtXTtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idXR0b24ucmVuZGVyKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmxpc3QucmVuZGVyKHRoaXMuaXRlbXMsIHRoaXMucmVjZW50bHksIHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgIHRoaXMuYnV0dG9uLnJlbmRlcih0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0LnJlbmRlcih0aGlzLml0ZW1zLCB0aGlzLnJlY2VudGx5LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERyb3Bkb3duO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRyb3Bkb3duQnV0dG9uID0gdm9pZCAwO1xuY29uc3QgRG9tXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaGVscGVycy9Eb21cIik7XG5jb25zdCBJY29uQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vSWNvbkNvbXBvbmVudFwiKTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudFwiKTtcbmNsYXNzIERyb3Bkb3duQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyTGFiZWwsIHNldFZpc2libGUsIHJlc2V0KSB7XG4gICAgICAgIHN1cGVyKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnYnRuIGJ0bi1kZWZhdWx0IGJ0bi1tZCBidG4tYmxvY2sgZ2wtYnV0dG9uIGdsLW5ldy1kcm9wZG93bi10b2dnbGUnLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlckxhYmVsID0gcmVuZGVyTGFiZWw7XG4gICAgICAgIHRoaXMucmVzZXQgPSByZXNldDtcbiAgICAgICAgdGhpcy5idXR0b25MYWJlbCA9IERvbV8xLkRvbS5lbGVtZW50KCdzcGFuJywgJ2dsLW5ldy1kcm9wZG93bi1idXR0b24tdGV4dCcpO1xuICAgICAgICB0aGlzLmljb24gPSBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtuZXcgSWNvbkNvbXBvbmVudF8xLkljb25Db21wb25lbnQoJ2NoZXZyb24tbGctZG93bicsICdzMTYnKS5nZXRJY29uKCldLFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuZWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuYnV0dG9uSW5uZXIoKSk7XG4gICAgfVxuICAgIGJ1dHRvbklubmVyKCkge1xuICAgICAgICByZXR1cm4gRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1idXR0b24tdGV4dCBnbC13LWZ1bGwnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt0aGlzLmJ1dHRvbkxhYmVsLCB0aGlzLmljb25dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uTGFiZWwucmVwbGFjZUNoaWxkcmVuKHRoaXMucmVuZGVyTGFiZWwoaXRlbXMpKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJY29uQ29tcG9uZW50XzEuSWNvbkNvbXBvbmVudChpdGVtcy5sZW5ndGggPyAnY2xvc2UteHMnIDogJ2NoZXZyb24tbGctZG93bicsICdzMTYnKS5nZXRJY29uKCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmljb24ucmVwbGFjZUNoaWxkcmVuKGljb24pO1xuICAgIH1cbn1cbmV4cG9ydHMuRHJvcGRvd25CdXR0b24gPSBEcm9wZG93bkJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ecm9wZG93bkxpc3QgPSB2b2lkIDA7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL0RvbVwiKTtcbmNvbnN0IEljb25Db21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9JY29uQ29tcG9uZW50XCIpO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IocmVuZGVySXRlbSwgb25DbGljaykge1xuICAgICAgICBzdXBlcignZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NlczogJ2dsLW5ldy1kcm9wZG93bi1jb250ZW50cyBnbC1uZXctZHJvcGRvd24tY29udGVudHMtd2l0aC1zY3JpbS1vdmVybGF5IGJvdHRvbS1zY3JpbS12aXNpYmxlIGdsLW5ldy1kcm9wZG93bi1jb250ZW50cycsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlckl0ZW0gPSByZW5kZXJJdGVtO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuICAgICAgICB0aGlzLmxpc3QgPSBEb21fMS5Eb20uZWxlbWVudCgndWwnLCAnZ2wtbWItMCBnbC1wbC0wJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5saXN0KTtcbiAgICB9XG4gICAgcmVuZGVyKGl0ZW1zLCByZWNlbnRseSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5saXN0LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBpZiAocmVjZW50bHkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYXBwZW5kKERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xpJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtcGItMiBnbC1wbC00IGdsLXB0LTMgZ2wtdGV4dC1zbSBnbC1mb250LWJvbGQgZ2wtdGV4dC1zdHJvbmcnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnUmVjZW50bHkgdXNlZCcsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYXBwZW5kKC4uLnJlY2VudGx5Lm1hcCgoaXRlbSkgPT4gdGhpcy5saXN0SXRlbShpdGVtLCBzZWxlY3RlZCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYXBwZW5kKERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xpJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtcGItMiBnbC1wbC00IGdsLXB0LTMgZ2wtdGV4dC1zbSBnbC1mb250LWJvbGQgZ2wtdGV4dC1zdHJvbmcgZ2wtYm9yZGVyLXQnLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZCguLi5pdGVtcy5tYXAoKGl0ZW0pID0+IHRoaXMubGlzdEl0ZW0oaXRlbSwgc2VsZWN0ZWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCArIHJlY2VudGx5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZChEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLXAtNCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdObyBvcHRpb25zJyxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaXN0SXRlbShpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbmV3LWRyb3Bkb3duLWl0ZW0nLFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMub25DbGljayhpdGVtKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1uZXctZHJvcGRvd24taXRlbS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hlY2soaXRlbSwgc2VsZWN0ZWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtKGl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyQ2hlY2soaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBzZWxlY3RlZC5tYXAoKGkpID0+IGkuaWQpO1xuICAgICAgICByZXR1cm4gbmV3IEljb25Db21wb25lbnRfMS5JY29uQ29tcG9uZW50KHNlbGVjdGVkSWRzLmluY2x1ZGVzKGl0ZW0uaWQpID8gJ21vYmlsZS1pc3N1ZS1jbG9zZScgOiAnJykuZ2V0SWNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuRHJvcGRvd25MaXN0ID0gRHJvcGRvd25MaXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRyb3Bkb3duTW9kYWwgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRcIik7XG5jbGFzcyBEcm9wZG93bk1vZGFsIGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3Ioc2VhcmNoLCBsaXN0KSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbmV3LWRyb3Bkb3duLXBhbmVsIGdsLWFic29sdXRlJyxcbiAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnODAwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLW5ldy1kcm9wZG93bi1pbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbc2VhcmNoLCBsaXN0XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJyFnbC1ibG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJyFnbC1ibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Ecm9wZG93bk1vZGFsID0gRHJvcGRvd25Nb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ecm9wZG93blNlYXJjaCA9IHZvaWQgMDtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY29uc3QgSWNvbkNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0ljb25Db21wb25lbnRcIik7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRcIik7XG5jb25zdCBDbG9zZUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL0Nsb3NlQnV0dG9uXCIpO1xuY2xhc3MgRHJvcGRvd25TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihvbkNoYW5nZSkge1xuICAgICAgICBzdXBlcignZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NlczogJ2dsLWJvcmRlci1iLTEgZ2wtYm9yZGVyLWItc29saWQgZ2wtYm9yZGVyLWItZHJvcGRvd24nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5nZXRTZWFyY2hJbnB1dCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZ2V0U2VhcmNoKCkpO1xuICAgIH1cbiAgICBnZXRTZWFyY2goKSB7XG4gICAgICAgIHJldHVybiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbGlzdGJveC1zZWFyY2ggZ2wtbGlzdGJveC10b3Btb3N0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IEljb25Db21wb25lbnRfMS5JY29uQ29tcG9uZW50KCdzZWFyY2gnLCAnczE2JywgJ2dsLXNlYXJjaC1ib3gtYnktdHlwZS1zZWFyY2gtaWNvbicpLmdldEljb24oKSxcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLXNlYXJjaC1ib3gtYnktdHlwZS1yaWdodC1pY29ucycsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogeyB0b3A6ICcwJyB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENsb3NlQnV0dG9uXzEuZGVmYXVsdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZ2V0RWxlbWVudCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U2VhcmNoSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1saXN0Ym94LXNlYXJjaC1pbnB1dCcsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogKCkgPT4gdGhpcy5vbkNoYW5nZSh0aGlzLmlucHV0LnZhbHVlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuRHJvcGRvd25TZWFyY2ggPSBEcm9wZG93blNlYXJjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgRmllbGQgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgaW5wdXQsIGhpbnQgPSAnJykge1xuICAgICAgICBzdXBlcignZmllbGRzZXQnLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnZm9ybS1ncm91cCBnbC1mb3JtLWdyb3VwIGdsLXctZnVsbCBpcy12YWxpZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnbGVnZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2J2LW5vLWZvY3VzLXJpbmcgY29sLWZvcm0tbGFiZWwgcHQtMCBjb2wtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0aXRsZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc21hbGwnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaGludCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Db21wb25lbnRcIik7XG5jbGFzcyBDcmVhdGVCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGNsYXNzZXM6ICdidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGdsLWJ1dHRvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1idXR0b24tdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnQ3JlYXRlIHJlbGF0ZWQgaXNzdWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbGF0ZWQtaXNzdWVzIFtkYXRhLXRlc3RpZD1cImNydWQtYWN0aW9uc1wiXScpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1vdW50KHBhcmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDcmVhdGVCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Db21wb25lbnRcIik7XG5jb25zdCBJc3N1ZUxpbmtzXzEgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9Jc3N1ZUxpbmtzXCIpO1xuY29uc3QgSXNzdWVQcm92aWRlcl8xID0gcmVxdWlyZShcIi4uLy4uL3Byb3ZpZGVycy9Jc3N1ZVByb3ZpZGVyXCIpO1xuY29uc3QgRm9ybVRpdGxlXzEgPSByZXF1aXJlKFwiLi9mb3JtL0Zvcm1UaXRsZVwiKTtcbmNvbnN0IEZvcm1Qcm9qZWN0XzEgPSByZXF1aXJlKFwiLi9mb3JtL0Zvcm1Qcm9qZWN0XCIpO1xuY29uc3QgRm9ybUxhYmVsc18xID0gcmVxdWlyZShcIi4vZm9ybS9Gb3JtTGFiZWxzXCIpO1xuY29uc3QgRm9ybU1pbGVzdG9uZV8xID0gcmVxdWlyZShcIi4vZm9ybS9Gb3JtTWlsZXN0b25lXCIpO1xuY29uc3QgRm9ybUl0ZXJhdGlvbl8xID0gcmVxdWlyZShcIi4vZm9ybS9Gb3JtSXRlcmF0aW9uXCIpO1xuY29uc3QgRm9ybUFzc2lnbmVlc18xID0gcmVxdWlyZShcIi4vZm9ybS9Gb3JtQXNzaWduZWVzXCIpO1xuY29uc3QgRm9ybVJlbGF0aW9uXzEgPSByZXF1aXJlKFwiLi9mb3JtL0Zvcm1SZWxhdGlvblwiKTtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY2xhc3MgQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IobGluaywgb25DbG9zZSkge1xuICAgICAgICBzdXBlcignZm9ybScsIHtcbiAgICAgICAgICAgIGNsYXNzZXM6ICdjcnVkLWJvZHkgYWRkLXRyZWUtZm9ybSBnbC1teC01IGdsLW15LTQgZ2wtcm91bmRlZC1iLWZvcm0nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gb25DbG9zZTtcbiAgICAgICAgdGhpcy5pc3N1ZVByb3ZpZGVyID0gbmV3IElzc3VlUHJvdmlkZXJfMS5Jc3N1ZVByb3ZpZGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXcgRm9ybVRpdGxlXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBuZXcgRm9ybVByb2plY3RfMS5kZWZhdWx0KHRoaXMubGluayk7XG4gICAgICAgIHRoaXMubGFiZWxzID0gbmV3IEZvcm1MYWJlbHNfMS5kZWZhdWx0KHRoaXMubGluayk7XG4gICAgICAgIHRoaXMubWlsZXN0b25lID0gbmV3IEZvcm1NaWxlc3RvbmVfMS5kZWZhdWx0KHRoaXMubGluayk7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uID0gbmV3IEZvcm1JdGVyYXRpb25fMS5kZWZhdWx0KHRoaXMubGluayk7XG4gICAgICAgIHRoaXMuYXNzaWduZWVzID0gbmV3IEZvcm1Bc3NpZ25lZXNfMS5kZWZhdWx0KHRoaXMubGluayk7XG4gICAgICAgIHRoaXMucmVsYXRpb24gPSBuZXcgRm9ybVJlbGF0aW9uXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMudGl0bGUuZ2V0RWxlbWVudCgpLCB0aGlzLnJvdyh0aGlzLnByb2plY3QuZ2V0RWxlbWVudCgpLCB0aGlzLm1pbGVzdG9uZS5nZXRFbGVtZW50KCkpLCB0aGlzLnJvdyh0aGlzLml0ZXJhdGlvbi5nZXRFbGVtZW50KCksIHRoaXMuYXNzaWduZWVzLmdldEVsZW1lbnQoKSksIHRoaXMucm93KHRoaXMubGFiZWxzLmdldEVsZW1lbnQoKSksIHRoaXMucm93KHRoaXMucmVsYXRpb24uZ2V0RWxlbWVudCgpKSwgRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NlczogJ2J0biBidG4tY29uZmlybSBidG4tc20gZ2wtYnV0dG9uJyxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IHRoaXMuY3JlYXRlSXNzdWUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1idXR0b24tdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnQWRkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICByb3coLi4uaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1mbGV4IGdsLWdhcC14LTMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpdGxlLnJlc2V0KCk7XG4gICAgICAgIHRoaXMucmVsYXRpb24ucmVzZXQoKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0LnJlc2V0KCk7XG4gICAgICAgIHRoaXMubWlsZXN0b25lLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYXNzaWduZWVzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMubGFiZWxzLnJlc2V0KCk7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZUlzc3VlKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRGb3JtVmFsdWUoKTtcbiAgICAgICAgY29uc3QgbGluayA9IElzc3VlTGlua3NfMS5Jc3N1ZUxpbmtzLnBhcnNlTGluayh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICghZGF0YSB8fCAhbGluaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pc3N1ZVByb3ZpZGVyLmNyZWF0ZUlzc3VlKGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5yZWxhdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pc3N1ZVByb3ZpZGVyLmNyZWF0ZUlzc3VlUmVsYXRpb24oe1xuICAgICAgICAgICAgICAgIGlzc3VlSWQ6IHJlc3BvbnNlLmRhdGEuY3JlYXRlSXNzdWFibGUuaXNzdWFibGUuaWlkLFxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogcmVzcG9uc2UuZGF0YS5jcmVhdGVJc3N1YWJsZS5pc3N1YWJsZS5wcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdElkOiBsaW5rLnByb2plY3RQYXRoLnJlcGxhY2UoL1xcLy9nLCAnJTJGJyksXG4gICAgICAgICAgICAgICAgdGFyZ2V0SXNzdWVJaWQ6IGxpbmsuaXNzdWUsXG4gICAgICAgICAgICAgICAgbGlua1R5cGU6IHRoaXMucmVsYXRpb24udmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBnZXRGb3JtVmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3QuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgcHJvamVjdFBhdGg6IHByb2plY3QuZnVsbFBhdGgsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1pbGVzdG9uZSA9IHRoaXMubWlsZXN0b25lLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChtaWxlc3RvbmUpIHtcbiAgICAgICAgICAgIGRhdGFbJ21pbGVzdG9uZUlkJ10gPSBtaWxlc3RvbmUuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlcmF0aW9uID0gdGhpcy5pdGVyYXRpb24uZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbikge1xuICAgICAgICAgICAgZGF0YVsnaXRlcmF0aW9uSWQnXSA9IGl0ZXJhdGlvbi5pZDtcbiAgICAgICAgICAgIGRhdGFbJ2l0ZXJhdGlvbkNhZGVuY2VJZCddID0gaXRlcmF0aW9uLml0ZXJhdGlvbkNhZGVuY2UuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXNzaWduZWVzID0gdGhpcy5hc3NpZ25lZXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKGFzc2lnbmVlcykge1xuICAgICAgICAgICAgZGF0YVsnYXNzaWduZWVJZHMnXSA9IFthc3NpZ25lZXMuaWRdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IHRoaXMubGFiZWxzLmdldFZhbHVlKCk7XG4gICAgICAgIGRhdGFbJ2xhYmVsSWRzJ10gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4gbGFiZWwuaWQpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDcmVhdGVSZWxhdGVkSXNzdWVNb2RhbENvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Db21wb25lbnRcIik7XG5jb25zdCBDbG9zZUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9DbG9zZUJ1dHRvblwiKTtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY2xhc3MgQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihvbkNsb3NlKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnY3J1ZC1oZWFkZXIgZ2wtYm9yZGVyLWIgZ2wtZmxleCBnbC1mbGV4LXdyYXAgZ2wtanVzdGlmeS1iZXR3ZWVuIGdsLWdhcC14LTUgZ2wtZ2FwLXktMiBnbC1yb3VuZGVkLXQtZm9ybSBnbC1ib3JkZXItc2VjdGlvbiBnbC1iZy1zZWN0aW9uIGdsLXB4LTUgZ2wtcHktNCBnbC1yZWxhdGl2ZScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1tLTAgZ2wtaW5saW5lLWZsZXggZ2wtaXRlbXMtY2VudGVyIGdsLWdhcC0zIGdsLXRleHQtZm9ybSBnbC1mb250LWJvbGQgZ2wtbGVhZGluZy1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ0NyZWF0ZSByZWxhdGVkIGlzc3VlJyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgQ2xvc2VCdXR0b25fMS5kZWZhdWx0KG9uQ2xvc2UpLmdldEVsZW1lbnQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZVJlbGF0ZWRJc3N1ZU1vZGFsSGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEcm9wZG93bl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9mb3JtL0Ryb3Bkb3duXCIpO1xuY29uc3QgRG9tXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaGVscGVycy9Eb21cIik7XG5jb25zdCBVc2Vyc1Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL1VzZXJzUHJvdmlkZXJcIik7XG5jb25zdCBSZWNlbnRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3Byb3ZpZGVycy9SZWNlbnRQcm92aWRlclwiKTtcbmNsYXNzIEZvcm1Bc3NpZ25lZXMgZXh0ZW5kcyBEcm9wZG93bl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGxpbmspIHtcbiAgICAgICAgc3VwZXIoJ0Fzc2lnbmVlcycpO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLnJlY2VudCA9IG5ldyBSZWNlbnRQcm92aWRlcl8xLlJlY2VudFByb3ZpZGVyKCdhc3NpZ25lZXMnKTtcbiAgICAgICAgdGhpcy5hc3NpZ25lZXMgPSBuZXcgVXNlcnNQcm92aWRlcl8xLlVzZXJzUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkKCcnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5hc3NpZ25lZXMuZGVib3VuY2UodGhpcy5sb2FkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkKHNlcmFjaCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXNzaWduZWVzLmdldFVzZXJzKHRoaXMubGluay5wcm9qZWN0UGF0aCwgc2VyYWNoKTtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcyhyZXNwb25zZS5kYXRhLndvcmtzcGFjZS51c2VycywgdGhpcy5yZWNlbnQuZ2V0KCkpO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgW3ZhbHVlXSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZWNlbnQuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1hdmF0YXIgZ2wtYXZhdGFyLWNpcmNsZSBnbC1hdmF0YXItczMyJyxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5hdmF0YXJVcmwgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NlczogJ2dsLWF2YXRhci1sYWJlbGVkLWxhYmVscyAhZ2wtdGV4dC1sZWZ0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnLWdsLW14LTEgLWdsLW15LTEgZ2wtZmxleCBnbC1mbGV4LXdyYXAgZ2wtaXRlbXMtY2VudGVyICFnbC10ZXh0LWxlZnQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1hdmF0YXItbGFiZWxlZC1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtYXZhdGFyLWxhYmVsZWQtc3VibGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogJ2dsLWF2YXRhci1sYWJlbGVkIHNpZGViYXItcGFydGljaXBhbnQgZ2wtcmVsYXRpdmUgZ2wtaXRlbXMtY2VudGVyIGdsLW5ldy1kcm9wZG93bi1pdGVtLXRleHQtd3JhcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2ltYWdlLCBsYWJlbF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJMYWJlbChbaXRlbV0pIHtcbiAgICAgICAgcmV0dXJuIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtID8gaXRlbS5uYW1lIDogJ1NlbGVjdCBhc3NpZ25lZScsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNoYW5nZSgpIHsgfVxuICAgIGZpbHRlcihzZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyKHNlYXJjaCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRm9ybUFzc2lnbmVlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRHJvcGRvd25fMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21tb24vZm9ybS9Ecm9wZG93blwiKTtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY29uc3QgSXRlcmF0aW9uc1Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL0l0ZXJhdGlvbnNQcm92aWRlclwiKTtcbmNvbnN0IFJlY2VudFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL1JlY2VudFByb3ZpZGVyXCIpO1xuY2xhc3MgRm9ybUl0ZXJhdGlvbiBleHRlbmRzIERyb3Bkb3duXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IobGluaykge1xuICAgICAgICBzdXBlcignSXRlcmF0aW9uJyk7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9ucyA9IG5ldyBJdGVyYXRpb25zUHJvdmlkZXJfMS5JdGVyYXRpb25zUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlbnQgPSBuZXcgUmVjZW50UHJvdmlkZXJfMS5SZWNlbnRQcm92aWRlcignaXRlcmF0aW9ucycpO1xuICAgICAgICB0aGlzLnNlYXJjaEl0ZXJhdGlvbnMgPSB0aGlzLml0ZXJhdGlvbnMuZGVib3VuY2UodGhpcy5sb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZCh0aXRsZSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pdGVyYXRpb25zLmdldEl0ZXJhdGlvbnModGhpcy5saW5rLndvcmtzcGFjZVBhdGgsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9uc05hbWVkID0gcmVzcG9uc2UuZGF0YS53b3Jrc3BhY2UuYXR0cmlidXRlcy5ub2Rlc1xuICAgICAgICAgICAgLm1hcCgoaXRlcmF0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uaXRlcmF0aW9uLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5pdGVyYXRpb25OYW1lKGl0ZXJhdGlvbiksXG4gICAgICAgIH0pKVxuICAgICAgICAgICAgLnRvU29ydGVkKChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcyhpdGVyYXRpb25zTmFtZWQsIHRoaXMucmVjZW50LmdldCgpKTtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IFt2YWx1ZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjZW50LmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpdGVyYXRpb25OYW1lKGl0ZXJhdGlvbikge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGl0ZXJhdGlvbi5zdGFydERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShpdGVyYXRpb24uZHVlRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBgJHtpdGVyYXRpb24uaXRlcmF0aW9uQ2FkZW5jZS50aXRsZX06ICR7c3RhcnR9IC0gJHtlbmR9YDtcbiAgICB9XG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogJ2dsLW5ldy1kcm9wZG93bi1pdGVtLXRleHQtd3JhcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1mbGV4IGdsLXctZnVsbCBnbC1pdGVtcy1jZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB0YWc6ICdzcGFuJywgY2xhc3NlczogJ2dsLW1yLTIgZ2wtYmxvY2snLCBjaGlsZHJlbjogaXRlbS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJMYWJlbChbaXRlbV0pIHtcbiAgICAgICAgcmV0dXJuIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtID8gaXRlbS5uYW1lIDogJ1NlbGVjdCBpdGVyYXRpb24nLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DaGFuZ2UoKSB7IH1cbiAgICBmaWx0ZXIoc2VhcmNoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoSXRlcmF0aW9ucyhzZWFyY2gpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcm1JdGVyYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERyb3Bkb3duXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL2Zvcm0vRHJvcGRvd25cIik7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL0RvbVwiKTtcbmNvbnN0IExhYmVsc1Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL0xhYmVsc1Byb3ZpZGVyXCIpO1xuY29uc3QgUmVjZW50UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9wcm92aWRlcnMvUmVjZW50UHJvdmlkZXJcIik7XG5jb25zdCBMYWJlbENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9MYWJlbENvbXBvbmVudFwiKTtcbmNsYXNzIEZvcm1MYWJlbCBleHRlbmRzIERyb3Bkb3duXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IobGluaykge1xuICAgICAgICBzdXBlcignTGFiZWxzJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMubGFiZWxzID0gbmV3IExhYmVsc1Byb3ZpZGVyXzEuTGFiZWxzUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlbnQgPSBuZXcgUmVjZW50UHJvdmlkZXJfMS5SZWNlbnRQcm92aWRlcignbGFiZWxzJyk7XG4gICAgICAgIHRoaXMuZXh0cmEuY2xhc3NMaXN0LmFkZCgnZ2wtbXQtMScsICdnbC1wYi0yJywgJ2dsLWZsZXgnLCAnZ2wtZmxleC13cmFwJywgJ2dsLWdhcC0yJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoTGFiZWxzID0gdGhpcy5sYWJlbHMuZGVib3VuY2UodGhpcy5sb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZChuYW1lID0gJycpIHtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gYXdhaXQgdGhpcy5sYWJlbHMuZ2V0TGFiZWxzKHRoaXMubGluay5wcm9qZWN0UGF0aCwgbmFtZSk7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXMobGFiZWxzLmRhdGEud29ya3NwYWNlLmxhYmVscy5ub2RlcywgdGhpcy5yZWNlbnQuZ2V0KCkpO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjZW50LmFkZCguLi50aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtZmxleCBnbC1icmVhay1hbnl3aGVyZSBnbC1wYi0yIGdsLXBsLTQgZ2wtcHQtMycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdkcm9wZG93bi1sYWJlbC1ib3ggZ2wtdG9wLTAgZ2wtbXItMyBnbC1zaHJpbmstMCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJMYWJlbChpdGVtcykge1xuICAgICAgICBsZXQgbGFiZWwgPSAnU2VsZWN0IGxhYmVsJztcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbGFiZWwgPSBpdGVtc1xuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAyKVxuICAgICAgICAgICAgICAgIC5tYXAoKGkpID0+IGkudGl0bGUpXG4gICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGxhYmVsICs9IGAsICR7aXRlbXMubGVuZ3RoIC0gMn0rYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2hpbGRyZW46IGxhYmVsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuZXh0cmEucmVwbGFjZUNoaWxkcmVuKC4uLnRoaXMudmFsdWUubWFwKChpdGVtKSA9PiBuZXcgTGFiZWxDb21wb25lbnRfMS5MYWJlbENvbXBvbmVudChpdGVtLCAoKSA9PiB0aGlzLm9uU2VsZWN0KGl0ZW0pKS5nZXRFbGVtZW50KCkpKTtcbiAgICB9XG4gICAgZmlsdGVyKHNlYXJjaCkge1xuICAgICAgICB0aGlzLnNlYXJjaExhYmVscyhzZWFyY2gpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcm1MYWJlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRHJvcGRvd25fMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21tb24vZm9ybS9Ecm9wZG93blwiKTtcbmNvbnN0IERvbV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvRG9tXCIpO1xuY29uc3QgTWlsZXN0b25lc1Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL01pbGVzdG9uZXNQcm92aWRlclwiKTtcbmNvbnN0IFJlY2VudFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL1JlY2VudFByb3ZpZGVyXCIpO1xuY2xhc3MgRm9ybU1pbGVzdG9uZSBleHRlbmRzIERyb3Bkb3duXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IobGluaykge1xuICAgICAgICBzdXBlcignTWlsZXN0b25lJyk7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMubWlsZXN0b25lcyA9IG5ldyBNaWxlc3RvbmVzUHJvdmlkZXJfMS5NaWxlc3RvbmVzUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlbnQgPSBuZXcgUmVjZW50UHJvdmlkZXJfMS5SZWNlbnRQcm92aWRlcignbWlsZXN0b25lcycpO1xuICAgICAgICB0aGlzLnNlYXJjaE1pbGVzdG9uZXMgPSB0aGlzLm1pbGVzdG9uZXMuZGVib3VuY2UodGhpcy5sb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZCh0aXRsZSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IG1pbGVzdG9uZXMgPSBhd2FpdCB0aGlzLm1pbGVzdG9uZXMuZ2V0TWlsZXN0b25lcyh0aGlzLmxpbmsucHJvamVjdFBhdGgsIHRpdGxlKTtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcyhtaWxlc3RvbmVzLmRhdGEud29ya3NwYWNlLmF0dHJpYnV0ZXMubm9kZXMsIHRoaXMucmVjZW50LmdldCgpKTtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IFt2YWx1ZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjZW50LmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbmV3LWRyb3Bkb3duLWl0ZW0tdGV4dC13cmFwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLWZsZXggZ2wtdy1mdWxsIGdsLWl0ZW1zLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRhZzogJ3NwYW4nLCBjbGFzc2VzOiAnZ2wtbXItMiBnbC1ibG9jaycsIGNoaWxkcmVuOiBpdGVtLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJMYWJlbChbaXRlbV0pIHtcbiAgICAgICAgcmV0dXJuIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtID8gaXRlbS50aXRsZSA6ICdTZWxlY3QgbWlsZXN0b25lJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKCkgeyB9XG4gICAgZmlsdGVyKHNlYXJjaCkge1xuICAgICAgICB0aGlzLnNlYXJjaE1pbGVzdG9uZXMoc2VhcmNoKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBGb3JtTWlsZXN0b25lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEcm9wZG93bl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9mb3JtL0Ryb3Bkb3duXCIpO1xuY29uc3QgRG9tXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaGVscGVycy9Eb21cIik7XG5jb25zdCBQcm9qZWN0c1Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHJvdmlkZXJzL1Byb2plY3RzUHJvdmlkZXJcIik7XG5jb25zdCBSZWNlbnRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3Byb3ZpZGVycy9SZWNlbnRQcm92aWRlclwiKTtcbmNsYXNzIEZvcm1Qcm9qZWN0IGV4dGVuZHMgRHJvcGRvd25fMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihsaW5rKSB7XG4gICAgICAgIHN1cGVyKCdQcm9qZWN0Jyk7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBuZXcgUHJvamVjdHNQcm92aWRlcl8xLlByb2plY3RzUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlbnQgPSBuZXcgUmVjZW50UHJvdmlkZXJfMS5SZWNlbnRQcm92aWRlcigncHJvamVjdHMnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hQcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZGVib3VuY2UodGhpcy5sb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZChzZWFyY2ggPSAnJykge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHRoaXMucHJvamVjdHMuZ2V0UHJvamVjdHModGhpcy5saW5rLndvcmtzcGFjZVBhdGgsIHNlYXJjaCk7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXMocHJvamVjdHMuZGF0YS5ncm91cC5wcm9qZWN0cy5ub2RlcywgdGhpcy5yZWNlbnQuZ2V0KCkpO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgW3ZhbHVlXSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZWNlbnQuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGl0ZW0uYXZhdGFyVXJsXG4gICAgICAgICAgICA/IERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBpdGVtLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbXItMyBnbC1hdmF0YXIgZ2wtYXZhdGFyLXMzMicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1tci0zIGdsLWF2YXRhciBnbC1hdmF0YXItaWRlbnRpY29uIGdsLWF2YXRhci1zMzIgZ2wtYXZhdGFyLWlkZW50aWNvbi1iZzEnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtLm5hbWVbMF0udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHsgdGFnOiAnc3BhbicsIGNsYXNzZXM6ICdnbC1tci0yIGdsLWJsb2NrJywgY2hpbGRyZW46IGl0ZW0ubmFtZSB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC1ibG9jayBnbC10ZXh0LXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtLm5hbWVXaXRoTmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtbmV3LWRyb3Bkb3duLWl0ZW0tdGV4dC13cmFwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2dsLWZsZXggZ2wtdy1mdWxsIGdsLWl0ZW1zLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbaW1hZ2UsIGxhYmVsXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlckxhYmVsKFtpdGVtXSkge1xuICAgICAgICByZXR1cm4gRG9tXzEuRG9tLmNyZWF0ZSh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW0gPyBpdGVtLm5hbWVXaXRoTmFtZXNwYWNlIDogJ1NlbGVjdCBwcm9qZWN0JyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKCkgeyB9XG4gICAgZmlsdGVyKHNlYXJjaCkge1xuICAgICAgICB0aGlzLnNlYXJjaFByb2plY3RzKHNlYXJjaCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRm9ybVByb2plY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEZpZWxkXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL2Zvcm0vRmllbGRcIik7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL0RvbVwiKTtcbmNsYXNzIEZvcm1SZWxhdGlvbiBleHRlbmRzIEZpZWxkXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERvbV8xLkRvbS5lbGVtZW50KCdkaXYnLCAnbGlua2VkLWlzc3VlLXR5cGUtcmFkaW8nKTtcbiAgICAgICAgc3VwZXIoJ05ldyBpc3N1ZScsIGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnJhZGlvKCdibG9ja3MgY3VycmVudCBpc3N1ZScsICdibG9ja3MnKSwgdGhpcy5yYWRpbygnaXMgYmxvY2tlZCBieSBjdXJyZW50IGlzc3VlJywgJ2lzX2Jsb2NrZWRfYnknKSwgdGhpcy5yYWRpbygncmVsYXRlcyB0byBjdXJyZW50IGlzc3VlJywgJ3JlbGF0ZWQnKSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICByYWRpbyhsYWJlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBgaW5wdXQtJHtNYXRoLnJhbmRvbSgpfWA7XG4gICAgICAgIHJldHVybiBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2wtZm9ybS1yYWRpbyBjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2N1c3RvbS1jb250cm9sLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xpbmtlZC1pc3N1ZS10eXBlLXJhZGlvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2N1c3RvbS1jb250cm9sLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogaWQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBsYWJlbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRm9ybVJlbGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL0RvbVwiKTtcbmNvbnN0IEZpZWxkXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL2Zvcm0vRmllbGRcIik7XG5jbGFzcyBGb3JtVGl0bGUgZXh0ZW5kcyBGaWVsZF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgY2xhc3NlczogJ2dsLWZvcm0taW5wdXQgZ2wtbWItMyBmb3JtLWNvbnRyb2wgaXMtdmFsaWQnLFxuICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6ICdBZGQgYSB0aXRsZScgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHN1cGVyKCdUaXRsZScsIGlucHV0LCAnTWF4aW11bSBvZiAyNTUgY2hhcmFjdGVycycpO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25DaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRm9ybVRpdGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vQ29tcG9uZW50XCIpO1xuY29uc3QgSWNvbkNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9JY29uQ29tcG9uZW50XCIpO1xuY2xhc3MgQ2xvc2VNb2RhbCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKG9uQ2xpY2spIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzZXM6ICdnbHAtbW9kYWwtY2xvc2UnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtuZXcgSWNvbkNvbXBvbmVudF8xLkljb25Db21wb25lbnQoJ2Nsb3NlLXhzJywgJ3MyNCcpLmdldEljb24oKV0sXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBjbGljazogb25DbGljayxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENsb3NlTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Db21wb25lbnRcIik7XG5jbGFzcyBJbWFnZUVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2ltZycsIHsgY2xhc3NlczogJ2dscC1tb2RhbC1pbWcnIH0pO1xuICAgIH1cbiAgICB1cGRhdGVTcmMoc3JjKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSBzcmM7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2VFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJc3N1ZUJsb2NrXzEgPSByZXF1aXJlKFwiLi9Jc3N1ZUJsb2NrXCIpO1xuY29uc3QgVXNlckNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Vc2VyQ29tcG9uZW50XCIpO1xuY2xhc3MgSXNzdWVBc3NpZ25lZSBleHRlbmRzIElzc3VlQmxvY2tfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZSkge1xuICAgICAgICBzdXBlcignQXNzaWduZWUnLCBpc3N1ZS5hc3NpZ25lZXMubm9kZXMubWFwKChhc3NpZ25lZSkgPT4gbmV3IFVzZXJDb21wb25lbnRfMS5Vc2VyQ29tcG9uZW50KGFzc2lnbmVlKS5nZXRFbGVtZW50KCkpLCAnZ2wtZmxleCBnbC1mbGV4LWNvbCBnbC1nYXAtMycpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlQXNzaWduZWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Db21wb25lbnRcIik7XG5jbGFzcyBJc3N1ZUJsb2NrIGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUgPSAnJywgY29udGVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnZ2xwLWJsb2NrJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnZ2wtZmxleCBnbC1pdGVtcy1jZW50ZXIgZ2wtZm9udC1ib2xkIGdsLWxlYWRpbmctMjAgZ2wtdGV4dC1ncmF5LTkwMCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0aXRsZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGNoaWxkcmVuOiBjb250ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyBjaGlsZHJlbjogQXJyYXkuaXNBcnJheShjb250ZW50KSA/IGNvbnRlbnQgOiBbY29udGVudF0gfSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlQmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElzc3VlQmxvY2tfMSA9IHJlcXVpcmUoXCIuL0lzc3VlQmxvY2tcIik7XG5jbGFzcyBJc3N1ZUl0ZXJhdGlvbiBleHRlbmRzIElzc3VlQmxvY2tfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZSkge1xuICAgICAgICBzdXBlcignSXRlcmF0aW9uJywgaXNzdWUuaXRlcmF0aW9uXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBpc3N1ZS5pdGVyYXRpb24uaXRlcmF0aW9uQ2FkZW5jZS50aXRsZSxcbiAgICAgICAgICAgICAgICAnOiAnLFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKGlzc3VlLml0ZXJhdGlvbi5zdGFydERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxuICAgICAgICAgICAgICAgICcgLSAnLFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKGlzc3VlLml0ZXJhdGlvbi5kdWVEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgICAgIF0uam9pbignJylcbiAgICAgICAgICAgIDogJycpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlSXRlcmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJc3N1ZUJsb2NrXzEgPSByZXF1aXJlKFwiLi9Jc3N1ZUJsb2NrXCIpO1xuY29uc3QgTGFiZWxDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vTGFiZWxDb21wb25lbnRcIik7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXJzL0RvbVwiKTtcbmNsYXNzIElzc3VlTGFiZWxzIGV4dGVuZHMgSXNzdWVCbG9ja18xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGlzc3VlKSB7XG4gICAgICAgIHN1cGVyKCdMYWJlbHMnLCBEb21fMS5Eb20uY3JlYXRlKHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiAnaXNzdWFibGUtc2hvdy1sYWJlbHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IGlzc3VlLmxhYmVscy5ub2Rlcy5tYXAoKGxhYmVsKSA9PiBuZXcgTGFiZWxDb21wb25lbnRfMS5MYWJlbENvbXBvbmVudChsYWJlbCkuZ2V0RWxlbWVudCgpKSxcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlTGFiZWxzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vQ29tcG9uZW50XCIpO1xuY2xhc3MgSXNzdWVMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicpO1xuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgnZ2xwLW1vZGFsLWxvYWRlcicpO1xuICAgICAgICBjb25zdCBsb2FkZXJJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2FkZXJJbm5lci5jbGFzc0xpc3QuYWRkKCdnbHAtbW9kYWwtbG9hZGVyLWlubmVyJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChsb2FkZXJJbm5lcik7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSXNzdWVMb2FkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElzc3VlQmxvY2tfMSA9IHJlcXVpcmUoXCIuL0lzc3VlQmxvY2tcIik7XG5jb25zdCBNZXJnZVJlcXVlc3RDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vTWVyZ2VSZXF1ZXN0Q29tcG9uZW50XCIpO1xuY2xhc3MgSXNzdWVNZXJnZVJlcXVlc3RzIGV4dGVuZHMgSXNzdWVCbG9ja18xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGlzc3VlKSB7XG4gICAgICAgIHN1cGVyKCdNZXJnZSByZXF1ZXN0cycsIGlzc3VlLnJlbGF0ZWRNZXJnZVJlcXVlc3RzLm5vZGVzLm1hcCgobXIpID0+IG5ldyBNZXJnZVJlcXVlc3RDb21wb25lbnRfMS5NZXJnZVJlcXVlc3RDb21wb25lbnQobXIpLmdldEVsZW1lbnQoKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlTWVyZ2VSZXF1ZXN0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSXNzdWVCbG9ja18xID0gcmVxdWlyZShcIi4vSXNzdWVCbG9ja1wiKTtcbmNsYXNzIElzc3VlTWlsZXN0b25lIGV4dGVuZHMgSXNzdWVCbG9ja18xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGlzc3VlKSB7XG4gICAgICAgIHN1cGVyKCdNaWxlc3RvbmUnLCBpc3N1ZS5taWxlc3RvbmUgPyBpc3N1ZS5taWxlc3RvbmUudGl0bGUgOiAnJyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSXNzdWVNaWxlc3RvbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSXNzdWVNb2RhbENvbnRlbnQgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vQ29tcG9uZW50XCIpO1xuY29uc3QgSXNzdWVUaXRsZV8xID0gcmVxdWlyZShcIi4vSXNzdWVUaXRsZVwiKTtcbmNvbnN0IElzc3VlQXNzaWduZWVfMSA9IHJlcXVpcmUoXCIuL0lzc3VlQXNzaWduZWVcIik7XG5jb25zdCBJc3N1ZUxhYmVsc18xID0gcmVxdWlyZShcIi4vSXNzdWVMYWJlbHNcIik7XG5jb25zdCBJc3N1ZU1pbGVzdG9uZV8xID0gcmVxdWlyZShcIi4vSXNzdWVNaWxlc3RvbmVcIik7XG5jb25zdCBJc3N1ZUl0ZXJhdGlvbl8xID0gcmVxdWlyZShcIi4vSXNzdWVJdGVyYXRpb25cIik7XG5jb25zdCBJc3N1ZU1lcmdlUmVxdWVzdHNfMSA9IHJlcXVpcmUoXCIuL0lzc3VlTWVyZ2VSZXF1ZXN0c1wiKTtcbmNsYXNzIElzc3VlTW9kYWxDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50XzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCB7IGNsYXNzZXM6ICdnbHAtaXNzdWUtbW9kYWwtaW5uZXInIH0pO1xuICAgIH1cbiAgICB1cGRhdGUoaXNzdWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIElzc3VlVGl0bGVfMS5kZWZhdWx0LFxuICAgICAgICAgICAgSXNzdWVBc3NpZ25lZV8xLmRlZmF1bHQsXG4gICAgICAgICAgICBJc3N1ZUxhYmVsc18xLmRlZmF1bHQsXG4gICAgICAgICAgICBJc3N1ZU1pbGVzdG9uZV8xLmRlZmF1bHQsXG4gICAgICAgICAgICBJc3N1ZUl0ZXJhdGlvbl8xLmRlZmF1bHQsXG4gICAgICAgICAgICBJc3N1ZU1lcmdlUmVxdWVzdHNfMS5kZWZhdWx0LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKC4uLmNvbXBvbmVudHMubWFwKChDb21wb25lbnQpID0+IG5ldyBDb21wb25lbnQoaXNzdWUpLmdldEVsZW1lbnQoKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuSXNzdWVNb2RhbENvbnRlbnQgPSBJc3N1ZU1vZGFsQ29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSXNzdWVCbG9ja18xID0gcmVxdWlyZShcIi4vSXNzdWVCbG9ja1wiKTtcbmNvbnN0IFN0YXR1c0NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9TdGF0dXNDb21wb25lbnRcIik7XG5jb25zdCBEb21fMSA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXJzL0RvbVwiKTtcbmNsYXNzIElzc3VlVGl0bGUgZXh0ZW5kcyBJc3N1ZUJsb2NrXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaXNzdWUpIHtcbiAgICAgICAgc3VwZXIoaXNzdWUudGl0bGUsIERvbV8xLkRvbS5lbGVtZW50KCdkaXYnLCAnJywgW1xuICAgICAgICAgICAgbmV3IFN0YXR1c0NvbXBvbmVudF8xLlN0YXR1c0NvbXBvbmVudChpc3N1ZS5zdGF0ZSA9PT0gJ29wZW5lZCcpLmdldEVsZW1lbnQoKSxcbiAgICAgICAgICAgIERvbV8xLkRvbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7IG1heEhlaWdodDogJzEwMHB4JyB9LFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdnbC10ZXh0LXNtIGdsLXRleHQtZ3JheS01MDAsIGdsLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXNzdWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlVGl0bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9Db21wb25lbnRcIik7XG5jb25zdCBEcm9wZG93bkxpc3RfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vZm9ybS9Ecm9wZG93bkxpc3RcIik7XG5jb25zdCBEcm9wZG93blNlYXJjaF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9mb3JtL0Ryb3Bkb3duU2VhcmNoXCIpO1xuY29uc3QgRHJvcGRvd25Nb2RhbF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9mb3JtL0Ryb3Bkb3duTW9kYWxcIik7XG5jbGFzcyBBdXRvY29tcGxldGVNb2RhbCBleHRlbmRzIENvbXBvbmVudF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKG9uU2VsZWN0LCByZW5kZXJJdGVtLCBzZWFyY2gpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsIHsgY2xhc3NlczogJ2dsLXJlbGF0aXZlIGdsLXctZnVsbCBnbC1uZXctZHJvcGRvd24gIWdsLWJsb2NrJyB9KTtcbiAgICAgICAgY29uc3QgbW9kYWxTZWFyY2ggPSBuZXcgRHJvcGRvd25TZWFyY2hfMS5Ecm9wZG93blNlYXJjaChzZWFyY2gpO1xuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgRHJvcGRvd25MaXN0XzEuRHJvcGRvd25MaXN0KHJlbmRlckl0ZW0sIG9uU2VsZWN0KTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBEcm9wZG93bk1vZGFsXzEuRHJvcGRvd25Nb2RhbChtb2RhbFNlYXJjaC5nZXRFbGVtZW50KCksIHRoaXMubGlzdC5nZXRFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMubW9kYWwuZ2V0RWxlbWVudCgpKTtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcyhbXSk7XG4gICAgfVxuICAgIHVwZGF0ZUl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMubGlzdC5yZW5kZXIoaXRlbXMsIFtdLCBbXSk7XG4gICAgfVxuICAgIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLm1vZGFsLnNldFZpc2libGUodmlzaWJsZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXV0b2NvbXBsZXRlTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIENhY2hlIHtcbiAgICBpc1ZhbGlkKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAoaXRlbS5leHBpcmF0aW9uRGF0ZSA9PT0gJ2xpZmV0aW1lJyB8fFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uZXhwaXJhdGlvbkRhdGUpID4gbmV3IERhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXRJdGVtKGtleSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRJdGVtKHRoaXMua2V5KGtleSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZChkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUsIG1pbnV0ZXMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXkoa2V5KSwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGU6IHRoaXMuZXhwaXJhdGlvbkRhdGUobWludXRlcyksXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBleHBpcmF0aW9uRGF0ZShtaW51dGVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWludXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBtaW51dGVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aW1lLnNldE1pbnV0ZXModGltZS5nZXRNaW51dGVzKCkgKyBtaW51dGVzKTtcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuICAgIGtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIGAke0NhY2hlLnByZWZpeH0ke2tleX1gO1xuICAgIH1cbiAgICBjbGVhckludmFsaWQoKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKENhY2hlLnByZWZpeCkgJiYgIXRoaXMuaXNWYWxpZCh0aGlzLmdldEl0ZW0oa2V5KSkpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQ2FjaGUucHJlZml4ID0gJ2dscC0nO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2FjaGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRG9tID0gdm9pZCAwO1xuY2xhc3MgRG9tIHtcbiAgICBzdGF0aWMgY3JlYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50YWcpO1xuICAgICAgICBpZiAoZGF0YS5jbGFzc2VzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGRhdGEuY2xhc3NlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEuY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoLi4uZGF0YS5jaGlsZHJlbi5tYXAoKGl0ZW0pID0+IGl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBpdGVtIGluc3RhbmNlb2YgU1ZHRWxlbWVudFxuICAgICAgICAgICAgICAgID8gaXRlbVxuICAgICAgICAgICAgICAgIDogRG9tLmNyZWF0ZShpdGVtKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmF0dHJzKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLmF0dHJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmV2ZW50cykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YS5ldmVudHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuc3R5bGVzKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLnN0eWxlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGtleS5yZXBsYWNlKC9bQS1aXS9nLCAoYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBzdGF0aWMgZWxlbWVudCh0YWcsIGNsYXNzZXMsIGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBEb20uY3JlYXRlKHsgdGFnLCBjbGFzc2VzLCBjaGlsZHJlbiB9KTtcbiAgICB9XG59XG5leHBvcnRzLkRvbSA9IERvbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgR3JhcGhRbCB7XG4gICAgc3RhdGljIGJvZHkocXVlcnksIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb3BlcmF0aW9uTmFtZShxdWVyeSkge1xuICAgICAgICBjb25zdCBkYXRhID0gL3F1ZXJ5ICg/PG5hbWU+XFx3KykvLmV4ZWMocXVlcnkpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmdyb3Vwcykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ3JvdXBzLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdyYXBoUWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW1hZ2VMaW5rcyA9IHZvaWQgMDtcbmNsYXNzIEltYWdlTGlua3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpbmtSZWFkeSA9ICdnbHAtbGluay1yZWFkeSc7XG4gICAgfVxuICAgIGdldExpbmtzKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uby1hdHRhY2htZW50LWljb24nKSxcbiAgICAgICAgXS5maWx0ZXIoKGxpbmspID0+ICFsaW5rLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmxpbmtSZWFkeSkgJiZcbiAgICAgICAgICAgIC9cXC4ocG5nfGpwZ3xqcGVnfGhlaWMpJC8udGVzdChsaW5rLmhyZWYpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKHRoaXMubGlua1JlYWR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICB9XG59XG5leHBvcnRzLkltYWdlTGlua3MgPSBJbWFnZUxpbmtzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklzc3VlTGlua3MgPSB2b2lkIDA7XG5jbGFzcyBJc3N1ZUxpbmtzIHtcbiAgICBzdGF0aWMgcGFyc2VMaW5rKGxpbmspIHtcbiAgICAgICAgaWYgKCFsaW5rLmluY2x1ZGVzKCcvLS9pc3N1ZXMvJykpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3Byb2plY3RQYXRoLCBpc3N1ZV0gPSBuZXcgVVJMKGxpbmspLnBhdGhuYW1lXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLy8sICcnKVxuICAgICAgICAgICAgLnNwbGl0KCcvLS9pc3N1ZXMvJyk7XG4gICAgICAgIGNvbnN0IHNsYXNoQ291bnQgPSAocHJvamVjdFBhdGgubWF0Y2goL1xcLy9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICBjb25zdCB3b3Jrc3BhY2VQYXRoID0gc2xhc2hDb3VudCA9PT0gMSA/IHByb2plY3RQYXRoIDogcHJvamVjdFBhdGgucmVwbGFjZSgvXFwvW14vXSskLywgJycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNzdWU6IGlzc3VlLnJlcGxhY2UoL1xcRC9nLCAnJyksXG4gICAgICAgICAgICBwcm9qZWN0UGF0aCxcbiAgICAgICAgICAgIHdvcmtzcGFjZVBhdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMaW5rcygpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPWlzc3Vlc10nKSxcbiAgICAgICAgXS5maWx0ZXIoKGxpbmspID0+ICFsaW5rLmNsYXNzTGlzdC5jb250YWlucyhJc3N1ZUxpbmtzLmxpbmtSZWFkeSkgJiZcbiAgICAgICAgICAgIC9pc3N1ZXNcXC9cXGQrLy50ZXN0KGxpbmsuaHJlZikpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoSXNzdWVMaW5rcy5saW5rUmVhZHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuSXNzdWVMaW5rcyA9IElzc3VlTGlua3M7XG5Jc3N1ZUxpbmtzLmxpbmtSZWFkeSA9ICdnbHAtbGluay1yZWFkeSc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGludGVuZEhvdmVyKGVsZW1lbnQsIGxpc3RlbmVyLCB0aW1lb3V0ID0gNTAwKSB7XG4gICAgbGV0IGhvdmVyID0gZmFsc2U7XG4gICAgbGV0IGlkID0gMDtcbiAgICBjb25zdCBvbkhvdmVyID0gKGV2KSA9PiB7XG4gICAgICAgIGhvdmVyID0gdHJ1ZTtcbiAgICAgICAgaWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbkhvdmVyKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIGhvdmVyID0gZmFsc2U7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBpbnRlbmRIb3ZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRsYWJQcm92aWRlciA9IHZvaWQgMDtcbmNvbnN0IENhY2hlXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9DYWNoZVwiKTtcbmNvbnN0IEdyYXBoUWxfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0dyYXBoUWxcIik7XG5jbGFzcyBHaXRsYWJQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgQ2FjaGVfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vZ2l0bGFiLmNvbS9hcGkvdjQvJztcbiAgICAgICAgdGhpcy5ncmFwaHFsQXBpID0gJ2h0dHBzOi8vZ2l0bGFiLmNvbS9hcGkvZ3JhcGhxbCc7XG4gICAgfVxuICAgIGFzeW5jIGdldChwYXRoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy51cmx9JHtwYXRofWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycygpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgYXN5bmMgcG9zdChwYXRoLCBib2R5KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy51cmx9JHtwYXRofWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIGFzeW5jIHF1ZXJ5KHF1ZXJ5LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmdyYXBocWxBcGksIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogR3JhcGhRbF8xLmRlZmF1bHQuYm9keShxdWVyeSwgdmFyaWFibGVzKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycygpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q2FjaGVkKGtleSwgcGF0aCwgbWludXRlcykge1xuICAgICAgICBjb25zdCBjYWNoZVZhbHVlID0gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGNhY2hlVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5nZXQocGF0aCk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgdmFsdWUsIG1pbnV0ZXMpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGFzeW5jIHF1ZXJ5Q2FjaGVkKGtleSwgcXVlcnksIHZhcmlhYmxlcywgbWludXRlcykge1xuICAgICAgICBjb25zdCBjYWNoZVZhbHVlID0gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGNhY2hlVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5xdWVyeShxdWVyeSwgdmFyaWFibGVzKTtcbiAgICAgICAgdGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSwgbWludXRlcyk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY3NyZigpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBoZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3NyZiA9IHRoaXMuY3NyZigpO1xuICAgICAgICBpZiAoY3NyZikge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1DU1JGLVRva2VuJ10gPSBjc3JmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cbiAgICBkZWJvdW5jZShjYWxsYmFjaywgd2FpdCA9IDMwMCkge1xuICAgICAgICBsZXQgdGltZXI7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soLi4uYXJncyksIHdhaXQpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0bGFiUHJvdmlkZXIgPSBHaXRsYWJQcm92aWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Jc3N1ZVByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgR2l0bGFiUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL0dpdGxhYlByb3ZpZGVyXCIpO1xuY29uc3QgaXNzdWVfMSA9IHJlcXVpcmUoXCIuL3F1ZXJ5L2lzc3VlXCIpO1xuY2xhc3MgSXNzdWVQcm92aWRlciBleHRlbmRzIEdpdGxhYlByb3ZpZGVyXzEuR2l0bGFiUHJvdmlkZXIge1xuICAgIGFzeW5jIGdldElzc3VlKHByb2plY3RJZCwgaXNzdWVJZCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5xdWVyeUNhY2hlZChgaXNzdWUtJHtwcm9qZWN0SWR9LSR7aXNzdWVJZH1gLCBpc3N1ZV8xLmlzc3VlUXVlcnksIHtcbiAgICAgICAgICAgIHByb2plY3RQYXRoOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICBpaWQ6IGlzc3VlSWQsXG4gICAgICAgIH0sIDIpO1xuICAgIH1cbiAgICBhc3luYyBnZXRJc3N1ZXMocHJvamVjdElkLCBzZWFyY2gpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQnlJZCA9ICEhc2VhcmNoLm1hdGNoKC9eXFxkKyQvKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnkoaXNzdWVfMS5pc3N1ZXNRdWVyeSwge1xuICAgICAgICAgICAgaWlkOiBzZWFyY2hCeUlkID8gc2VhcmNoIDogbnVsbCxcbiAgICAgICAgICAgIHNlYXJjaEJ5SWlkOiBzZWFyY2hCeUlkLFxuICAgICAgICAgICAgc2VhcmNoRW1wdHk6ICFzZWFyY2gsXG4gICAgICAgICAgICBzZWFyY2hCeVRleHQ6IEJvb2xlYW4oc2VhcmNoKSxcbiAgICAgICAgICAgIGZ1bGxQYXRoOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2gsXG4gICAgICAgICAgICBpbmNsdWRlQW5jZXN0b3JzOiB0cnVlLFxuICAgICAgICAgICAgaW5jbHVkZURlc2NlbmRhbnRzOiB0cnVlLFxuICAgICAgICAgICAgdHlwZXM6IFsnSVNTVUUnXSxcbiAgICAgICAgICAgIGluOiAnVElUTEUnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlSXNzdWUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnkoaXNzdWVfMS5pc3N1ZU11dGF0aW9uLCB7IGlucHV0IH0pO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGVJc3N1ZVJlbGF0aW9uKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBbXG4gICAgICAgICAgICAncHJvamVjdHMvOlBST0pFQ1RfSUQnLFxuICAgICAgICAgICAgJy9pc3N1ZXMvOklTU1VFX0lEL2xpbmtzJyxcbiAgICAgICAgICAgICc/dGFyZ2V0X3Byb2plY3RfaWQ9OlRBUkdFVF9QUk9KRUNUX0lEJyxcbiAgICAgICAgICAgICcmdGFyZ2V0X2lzc3VlX2lpZD06VEFSR0VUX0lTU1VFX0lJRCcsXG4gICAgICAgICAgICAnJmxpbmtfdHlwZT06TElOS19UWVBFJyxcbiAgICAgICAgXVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAucmVwbGFjZSgnOlBST0pFQ1RfSUQnLCBgJHtpbnB1dC5wcm9qZWN0SWR9YClcbiAgICAgICAgICAgIC5yZXBsYWNlKCc6SVNTVUVfSUQnLCBgJHtpbnB1dC5pc3N1ZUlkfWApXG4gICAgICAgICAgICAucmVwbGFjZSgnOlRBUkdFVF9QUk9KRUNUX0lEJywgaW5wdXQudGFyZ2V0UHJvamVjdElkKVxuICAgICAgICAgICAgLnJlcGxhY2UoJzpUQVJHRVRfSVNTVUVfSUlEJywgaW5wdXQudGFyZ2V0SXNzdWVJaWQpXG4gICAgICAgICAgICAucmVwbGFjZSgnOkxJTktfVFlQRScsIGlucHV0LmxpbmtUeXBlKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucG9zdChwYXRoLCB7fSk7XG4gICAgfVxufVxuZXhwb3J0cy5Jc3N1ZVByb3ZpZGVyID0gSXNzdWVQcm92aWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JdGVyYXRpb25zUHJvdmlkZXIgPSB2b2lkIDA7XG5jb25zdCBHaXRsYWJQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vR2l0bGFiUHJvdmlkZXJcIik7XG5jb25zdCBpdGVyYXRpb25fMSA9IHJlcXVpcmUoXCIuL3F1ZXJ5L2l0ZXJhdGlvblwiKTtcbmNsYXNzIEl0ZXJhdGlvbnNQcm92aWRlciBleHRlbmRzIEdpdGxhYlByb3ZpZGVyXzEuR2l0bGFiUHJvdmlkZXIge1xuICAgIGFzeW5jIGdldEl0ZXJhdGlvbnMocHJvamVjdElkLCB0aXRsZSA9ICcnKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5Q2FjaGVkKGBpdGVyYXRpb25zLSR7cHJvamVjdElkfSBgLCBpdGVyYXRpb25fMS5pdGVyYXRpb25RdWVyeSwge1xuICAgICAgICAgICAgZnVsbFBhdGg6IHByb2plY3RJZCxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgc3RhdGU6ICdvcGVuZWQnLFxuICAgICAgICB9LCB0aXRsZSAhPT0gJycgPyAwLjUgOiAyMCk7XG4gICAgfVxufVxuZXhwb3J0cy5JdGVyYXRpb25zUHJvdmlkZXIgPSBJdGVyYXRpb25zUHJvdmlkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGFiZWxzUHJvdmlkZXIgPSB2b2lkIDA7XG5jb25zdCBHaXRsYWJQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vR2l0bGFiUHJvdmlkZXJcIik7XG5jb25zdCBsYWJlbF8xID0gcmVxdWlyZShcIi4vcXVlcnkvbGFiZWxcIik7XG5jbGFzcyBMYWJlbHNQcm92aWRlciBleHRlbmRzIEdpdGxhYlByb3ZpZGVyXzEuR2l0bGFiUHJvdmlkZXIge1xuICAgIGFzeW5jIGdldExhYmVscyhwcm9qZWN0SWQsIHNlYXJjaCA9ICcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGVkKGBsYWJlbHMtJHtwcm9qZWN0SWR9LSR7c2VhcmNofWAsIGxhYmVsXzEubGFiZWxzUXVlcnksIHtcbiAgICAgICAgICAgIGZ1bGxQYXRoOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2gsXG4gICAgICAgIH0sIHNlYXJjaCA9PT0gJycgPyAyMCA6IDAuNSk7XG4gICAgfVxufVxuZXhwb3J0cy5MYWJlbHNQcm92aWRlciA9IExhYmVsc1Byb3ZpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1pbGVzdG9uZXNQcm92aWRlciA9IHZvaWQgMDtcbmNvbnN0IEdpdGxhYlByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi9HaXRsYWJQcm92aWRlclwiKTtcbmNvbnN0IG1pbGVzdG9uZV8xID0gcmVxdWlyZShcIi4vcXVlcnkvbWlsZXN0b25lXCIpO1xuY2xhc3MgTWlsZXN0b25lc1Byb3ZpZGVyIGV4dGVuZHMgR2l0bGFiUHJvdmlkZXJfMS5HaXRsYWJQcm92aWRlciB7XG4gICAgYXN5bmMgZ2V0TWlsZXN0b25lcyhwcm9qZWN0SWQsIHRpdGxlID0gJycpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnlDYWNoZWQoYG1pbGVzdG9uZXMtJHtwcm9qZWN0SWR9LSR7dGl0bGV9YCwgbWlsZXN0b25lXzEubWlsZXN0b25lUXVlcnksIHtcbiAgICAgICAgICAgIGZ1bGxQYXRoOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICBzdGF0ZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgfSwgdGl0bGUgPT09ICcnID8gMjAgOiAwLjUpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWlsZXN0b25lc1Byb3ZpZGVyID0gTWlsZXN0b25lc1Byb3ZpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb2plY3RzUHJvdmlkZXIgPSB2b2lkIDA7XG5jb25zdCBHaXRsYWJQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vR2l0bGFiUHJvdmlkZXJcIik7XG5jb25zdCBwcm9qZWN0XzEgPSByZXF1aXJlKFwiLi9xdWVyeS9wcm9qZWN0XCIpO1xuY2xhc3MgUHJvamVjdHNQcm92aWRlciBleHRlbmRzIEdpdGxhYlByb3ZpZGVyXzEuR2l0bGFiUHJvdmlkZXIge1xuICAgIGFzeW5jIGdldFByb2plY3RzKHByb2plY3RJZCwgc2VhcmNoID0gJycpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnlDYWNoZWQoYHByb2plY3RzLSR7cHJvamVjdElkfS0ke3NlYXJjaH1gLCBwcm9qZWN0XzEucHJvamVjdHNRdWVyeSwge1xuICAgICAgICAgICAgZnVsbFBhdGg6IHByb2plY3RJZCxcbiAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgfSwgc2VhcmNoID09PSAnJyA/IDIwIDogMC41KTtcbiAgICB9XG59XG5leHBvcnRzLlByb2plY3RzUHJvdmlkZXIgPSBQcm9qZWN0c1Byb3ZpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlY2VudFByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgQ2FjaGVfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0NhY2hlXCIpO1xuY2xhc3MgUmVjZW50UHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IENhY2hlXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmtleSA9IGByZWNlbnQtJHtrZXl9YDtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQodGhpcy5rZXkpIHx8IFtdO1xuICAgIH1cbiAgICBhZGQoLi4uaXRlbXMpIHtcbiAgICAgICAgY29uc3QgaXRlbXNJZCA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5pZCk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KHRoaXMua2V5LCBbLi4uaXRlbXMsIC4uLnRoaXMuZ2V0KCkuZmlsdGVyKChlbCkgPT4gIWl0ZW1zSWQuaW5jbHVkZXMoZWwuaWQpKV0sICdsaWZldGltZScpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVjZW50UHJvdmlkZXIgPSBSZWNlbnRQcm92aWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2Vyc1Byb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgR2l0bGFiUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL0dpdGxhYlByb3ZpZGVyXCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vcXVlcnkvdXNlclwiKTtcbmNsYXNzIFVzZXJzUHJvdmlkZXIgZXh0ZW5kcyBHaXRsYWJQcm92aWRlcl8xLkdpdGxhYlByb3ZpZGVyIHtcbiAgICBhc3luYyBnZXRVc2Vycyhwcm9qZWN0SWQsIHNlYXJjaCA9ICcnKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5Q2FjaGVkKGB1c2Vycy0ke3Byb2plY3RJZH0tJHtzZWFyY2h9YCwgdXNlcl8xLnVzZXJRdWVyeSwge1xuICAgICAgICAgICAgZnVsbFBhdGg6IHByb2plY3RJZCxcbiAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgfSwgc2VhcmNoID09PSAnJyA/IDIwIDogMC41KTtcbiAgICB9XG59XG5leHBvcnRzLlVzZXJzUHJvdmlkZXIgPSBVc2Vyc1Byb3ZpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzc3VlTXV0YXRpb24gPSBleHBvcnRzLmlzc3Vlc1F1ZXJ5ID0gZXhwb3J0cy5pc3N1ZVF1ZXJ5ID0gdm9pZCAwO1xuY29uc3QgbGFiZWxfMSA9IHJlcXVpcmUoXCIuL2xhYmVsXCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmV4cG9ydHMuaXNzdWVRdWVyeSA9IGBxdWVyeSBpc3N1ZUVFKCRwcm9qZWN0UGF0aDogSUQhLCAkaWlkOiBTdHJpbmchKSB7XG4gIHByb2plY3QoZnVsbFBhdGg6ICRwcm9qZWN0UGF0aCkge1xuICAgIGlkXG4gICAgaXNzdWUoaWlkOiAkaWlkKSB7XG4gICAgICBpZFxuICAgICAgaWlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgc3RhdGVcbiAgICAgIGNvbmZpZGVudGlhbFxuICAgICAgZHVlRGF0ZVxuICAgICAgbWlsZXN0b25lIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgc3RhcnREYXRlXG4gICAgICAgIGR1ZURhdGVcbiAgICAgICAgX190eXBlbmFtZVxuICAgICAgfVxuICAgICAgbGFiZWxzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIC4uLkxhYmVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbGF0ZWRNZXJnZVJlcXVlc3RzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIGlpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc3RhdGVcbiAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgLi4uVXNlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXNzaWduZWVzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIC4uLlVzZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2VpZ2h0XG4gICAgICB0eXBlXG4gICAgICBfX3R5cGVuYW1lXG4gICAgfVxuICAgIF9fdHlwZW5hbWVcbiAgfVxufVxuXG4ke2xhYmVsXzEubGFiZWxGcmFnbWVudH1cbiR7dXNlcl8xLnVzZXJGcmFnbWVudH1cbmA7XG5leHBvcnRzLmlzc3Vlc1F1ZXJ5ID0gYHF1ZXJ5IGdyb3VwV29ya0l0ZW1zKCRzZWFyY2hUZXJtOiBTdHJpbmcsICRmdWxsUGF0aDogSUQhLCAkdHlwZXM6IFtJc3N1ZVR5cGUhXSwgJGluOiBbSXNzdWFibGVTZWFyY2hhYmxlRmllbGQhXSwgJGluY2x1ZGVBbmNlc3RvcnM6IEJvb2xlYW4gPSBmYWxzZSwgJGluY2x1ZGVEZXNjZW5kYW50czogQm9vbGVhbiA9IGZhbHNlLCAkaWlkOiBTdHJpbmcgPSBudWxsLCAkc2VhcmNoQnlJaWQ6IEJvb2xlYW4gPSBmYWxzZSwgJHNlYXJjaEJ5VGV4dDogQm9vbGVhbiA9IHRydWUsICRzZWFyY2hFbXB0eTogQm9vbGVhbiA9IHRydWUpIHtcbiAgd29ya3NwYWNlOiBncm91cChmdWxsUGF0aDogJGZ1bGxQYXRoKSB7XG4gICAgaWRcbiAgICB3b3JrSXRlbXMoXG4gICAgICBzZWFyY2g6ICRzZWFyY2hUZXJtXG4gICAgICB0eXBlczogJHR5cGVzXG4gICAgICBpbjogJGluXG4gICAgICBpbmNsdWRlQW5jZXN0b3JzOiAkaW5jbHVkZUFuY2VzdG9yc1xuICAgICAgaW5jbHVkZURlc2NlbmRhbnRzOiAkaW5jbHVkZURlc2NlbmRhbnRzXG4gICAgKSBAaW5jbHVkZShpZjogJHNlYXJjaEJ5VGV4dCkge1xuICAgICAgbm9kZXMge1xuICAgICAgICBpZFxuICAgICAgICBpaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgY29uZmlkZW50aWFsXG4gICAgICAgIHByb2plY3Qge1xuICAgICAgICAgIGZ1bGxQYXRoXG4gICAgICAgIH1cbiAgICAgICAgX190eXBlbmFtZVxuICAgICAgfVxuICAgICAgX190eXBlbmFtZVxuICAgIH1cbiAgICB3b3JrSXRlbXNCeUlpZDogd29ya0l0ZW1zKFxuICAgICAgaWlkOiAkaWlkXG4gICAgICB0eXBlczogJHR5cGVzXG4gICAgICBpbmNsdWRlQW5jZXN0b3JzOiAkaW5jbHVkZUFuY2VzdG9yc1xuICAgICAgaW5jbHVkZURlc2NlbmRhbnRzOiAkaW5jbHVkZURlc2NlbmRhbnRzXG4gICAgKSBAaW5jbHVkZShpZjogJHNlYXJjaEJ5SWlkKSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGlpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBjb25maWRlbnRpYWxcbiAgICAgICAgcHJvamVjdCB7XG4gICAgICAgICAgZnVsbFBhdGhcbiAgICAgICAgfVxuICAgICAgICBfX3R5cGVuYW1lXG4gICAgICB9XG4gICAgICBfX3R5cGVuYW1lXG4gICAgfVxuICAgIHdvcmtJdGVtc0VtcHR5OiB3b3JrSXRlbXMoXG4gICAgICB0eXBlczogJHR5cGVzXG4gICAgICBpbmNsdWRlQW5jZXN0b3JzOiAkaW5jbHVkZUFuY2VzdG9yc1xuICAgICAgaW5jbHVkZURlc2NlbmRhbnRzOiAkaW5jbHVkZURlc2NlbmRhbnRzXG4gICAgKSBAaW5jbHVkZShpZjogJHNlYXJjaEVtcHR5KSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGlpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBjb25maWRlbnRpYWxcbiAgICAgICAgcHJvamVjdCB7XG4gICAgICAgICAgZnVsbFBhdGhcbiAgICAgICAgfVxuICAgICAgICBfX3R5cGVuYW1lXG4gICAgICB9XG4gICAgICBfX3R5cGVuYW1lXG4gICAgfVxuICAgIF9fdHlwZW5hbWVcbiAgfVxufVxuYDtcbmV4cG9ydHMuaXNzdWVNdXRhdGlvbiA9IGBcbm11dGF0aW9uIENyZWF0ZUlzc3VlKCRpbnB1dDogQ3JlYXRlSXNzdWVJbnB1dCEpIHtcbiAgY3JlYXRlSXNzdWFibGU6IGNyZWF0ZUlzc3VlKGlucHV0OiAkaW5wdXQpIHtcbiAgICBpc3N1YWJsZTogaXNzdWUge1xuICAgICAgLi4uSXNzdWVcbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgZXJyb3JzXG4gICAgX190eXBlbmFtZVxuICB9XG59XG5cbmZyYWdtZW50IElzc3VlIG9uIElzc3VlIHtcbiAgLi4uSXNzdWVOb2RlXG4gIGlkXG4gIHdlaWdodFxuICBibG9ja2VkXG4gIGJsb2NrZWRCeUNvdW50XG4gIGVwaWMge1xuICAgIGlkXG4gICAgX190eXBlbmFtZVxuICB9XG4gIGl0ZXJhdGlvbiB7XG4gICAgaWRcbiAgICB0aXRsZVxuICAgIHN0YXJ0RGF0ZVxuICAgIGR1ZURhdGVcbiAgICBpdGVyYXRpb25DYWRlbmNlIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgX190eXBlbmFtZVxuICAgIH1cbiAgICBfX3R5cGVuYW1lXG4gIH1cbiAgaGVhbHRoU3RhdHVzXG4gIF9fdHlwZW5hbWVcbn1cblxuZnJhZ21lbnQgSXNzdWVOb2RlIG9uIElzc3VlIHtcbiAgaWRcbiAgaWlkXG4gIHRpdGxlXG4gIHJlZmVyZW5jZVBhdGg6IHJlZmVyZW5jZShmdWxsOiB0cnVlKVxuICBjbG9zZWRBdFxuICBkdWVEYXRlXG4gIHRpbWVFc3RpbWF0ZVxuICB0b3RhbFRpbWVTcGVudFxuICBodW1hblRpbWVFc3RpbWF0ZVxuICBodW1hblRvdGFsVGltZVNwZW50XG4gIGVtYWlsc0Rpc2FibGVkXG4gIGNvbmZpZGVudGlhbFxuICBoaWRkZW5cbiAgd2ViVXJsXG4gIHJlbGF0aXZlUG9zaXRpb25cbiAgcHJvamVjdElkXG4gIHR5cGVcbiAgc2V2ZXJpdHlcbiAgbWlsZXN0b25lIHtcbiAgICAuLi5NaWxlc3RvbmVGcmFnbWVudFxuICAgIF9fdHlwZW5hbWVcbiAgfVxuICBhc3NpZ25lZXMge1xuICAgIG5vZGVzIHtcbiAgICAgIC4uLlVzZXJcbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgX190eXBlbmFtZVxuICB9XG4gIGxhYmVscyB7XG4gICAgbm9kZXMge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBjb2xvclxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgX190eXBlbmFtZVxuICB9XG4gIF9fdHlwZW5hbWVcbn1cblxuZnJhZ21lbnQgTWlsZXN0b25lRnJhZ21lbnQgb24gTWlsZXN0b25lIHtcbiAgZXhwaXJlZFxuICBpZFxuICBzdGF0ZVxuICB0aXRsZVxuICBfX3R5cGVuYW1lXG59XG5cbmZyYWdtZW50IFVzZXIgb24gVXNlciB7XG4gIGlkXG4gIGF2YXRhclVybFxuICBuYW1lXG4gIHVzZXJuYW1lXG4gIHdlYlVybFxuICB3ZWJQYXRoXG4gIF9fdHlwZW5hbWVcbn1cbmA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXRlcmF0aW9uUXVlcnkgPSBleHBvcnRzLml0ZXJhdGlvbkZyYWdtZW50ID0gdm9pZCAwO1xuZXhwb3J0cy5pdGVyYXRpb25GcmFnbWVudCA9IGBmcmFnbWVudCBJdGVyYXRpb25GcmFnbWVudCBvbiBJdGVyYXRpb24ge1xuICBpZFxuICB0aXRsZVxuICBzdGFydERhdGVcbiAgZHVlRGF0ZVxuICB3ZWJVcmxcbiAgaXRlcmF0aW9uQ2FkZW5jZSB7XG4gICAgaWRcbiAgICB0aXRsZVxuICAgIF9fdHlwZW5hbWVcbiAgfVxuICBfX3R5cGVuYW1lXG59YDtcbmV4cG9ydHMuaXRlcmF0aW9uUXVlcnkgPSBgcXVlcnkgaXNzdWVJdGVyYXRpb25zQWxpYXNlZCgkZnVsbFBhdGg6IElEISwgJHRpdGxlOiBTdHJpbmcsICRzdGF0ZTogSXRlcmF0aW9uU3RhdGUpIHtcbiAgd29ya3NwYWNlOiBncm91cChmdWxsUGF0aDogJGZ1bGxQYXRoKSB7XG4gICAgaWRcbiAgICBhdHRyaWJ1dGVzOiBpdGVyYXRpb25zKFxuICAgICAgc2VhcmNoOiAkdGl0bGVcbiAgICAgIGluOiBbVElUTEUsIENBREVOQ0VfVElUTEVdXG4gICAgICBzdGF0ZTogJHN0YXRlXG4gICAgKSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIC4uLkl0ZXJhdGlvbkZyYWdtZW50XG4gICAgICAgIHN0YXRlXG4gICAgICAgIF9fdHlwZW5hbWVcbiAgICAgIH1cbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgX190eXBlbmFtZVxuICB9XG59XG4ke2V4cG9ydHMuaXRlcmF0aW9uRnJhZ21lbnR9XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxhYmVsc1F1ZXJ5ID0gZXhwb3J0cy5sYWJlbEZyYWdtZW50ID0gdm9pZCAwO1xuZXhwb3J0cy5sYWJlbEZyYWdtZW50ID0gYFxuICBmcmFnbWVudCBMYWJlbCBvbiBMYWJlbCB7XG4gICAgaWRcbiAgICB0aXRsZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgY29sb3JcbiAgICB0ZXh0Q29sb3JcbiAgICBfX3R5cGVuYW1lXG4gIH1cbmA7XG5leHBvcnRzLmxhYmVsc1F1ZXJ5ID0gYHF1ZXJ5IHByb2plY3RMYWJlbHMoJGZ1bGxQYXRoOiBJRCEsICRzZWFyY2hUZXJtOiBTdHJpbmcpIHtcbiAgd29ya3NwYWNlOiBwcm9qZWN0KGZ1bGxQYXRoOiAkZnVsbFBhdGgpIHtcbiAgICBpZFxuICAgIGxhYmVscyhzZWFyY2hUZXJtOiAkc2VhcmNoVGVybSwgaW5jbHVkZUFuY2VzdG9yR3JvdXBzOiB0cnVlKSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIC4uLkxhYmVsXG4gICAgICAgIF9fdHlwZW5hbWVcbiAgICAgIH1cbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgX190eXBlbmFtZVxuICB9XG59XG5cbiR7ZXhwb3J0cy5sYWJlbEZyYWdtZW50fVxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5taWxlc3RvbmVRdWVyeSA9IHZvaWQgMDtcbmV4cG9ydHMubWlsZXN0b25lUXVlcnkgPSBgcXVlcnkgcHJvamVjdE1pbGVzdG9uZXMoJGZ1bGxQYXRoOiBJRCEsICR0aXRsZTogU3RyaW5nLCAkc3RhdGU6IE1pbGVzdG9uZVN0YXRlRW51bSkge1xuICB3b3Jrc3BhY2U6IHByb2plY3QoZnVsbFBhdGg6ICRmdWxsUGF0aCkge1xuICAgIGlkXG4gICAgYXR0cmlidXRlczogbWlsZXN0b25lcyhcbiAgICAgIHNlYXJjaFRpdGxlOiAkdGl0bGVcbiAgICAgIHN0YXRlOiAkc3RhdGVcbiAgICAgIHNvcnQ6IEVYUElSRURfTEFTVF9EVUVfREFURV9BU0NcbiAgICAgIGZpcnN0OiAyMFxuICAgICAgaW5jbHVkZUFuY2VzdG9yczogdHJ1ZVxuICAgICkge1xuICAgICAgbm9kZXMge1xuICAgICAgICAuLi5NaWxlc3RvbmVGcmFnbWVudFxuICAgICAgICBzdGF0ZVxuICAgICAgICBfX3R5cGVuYW1lXG4gICAgICB9XG4gICAgICBfX3R5cGVuYW1lXG4gICAgfVxuICAgIF9fdHlwZW5hbWVcbiAgfVxufVxuXG5mcmFnbWVudCBNaWxlc3RvbmVGcmFnbWVudCBvbiBNaWxlc3RvbmUge1xuICBpZFxuICBpaWRcbiAgdGl0bGVcbiAgd2ViVXJsOiB3ZWJQYXRoXG4gIGR1ZURhdGVcbiAgZXhwaXJlZFxuICBfX3R5cGVuYW1lXG59XG5cbmA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvamVjdHNRdWVyeSA9IHZvaWQgMDtcbmV4cG9ydHMucHJvamVjdHNRdWVyeSA9IGBxdWVyeSBib2FyZHNHZXRHcm91cFByb2plY3RzKCRmdWxsUGF0aDogSUQhLCAkc2VhcmNoOiBTdHJpbmcsICRhZnRlcjogU3RyaW5nKSB7XG4gIGdyb3VwKGZ1bGxQYXRoOiAkZnVsbFBhdGgpIHtcbiAgICBpZFxuICAgIHByb2plY3RzKHNlYXJjaDogJHNlYXJjaCwgYWZ0ZXI6ICRhZnRlciwgZmlyc3Q6IDEwMCwgaW5jbHVkZVN1Ymdyb3VwczogdHJ1ZSkge1xuICAgICAgbm9kZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGF2YXRhclVybFxuICAgICAgICBmdWxsUGF0aFxuICAgICAgICBuYW1lV2l0aE5hbWVzcGFjZVxuICAgICAgICBhcmNoaXZlZFxuICAgICAgICBfX3R5cGVuYW1lXG4gICAgICB9XG4gICAgICBwYWdlSW5mbyB7XG4gICAgICAgIC4uLlBhZ2VJbmZvXG4gICAgICAgIF9fdHlwZW5hbWVcbiAgICAgIH1cbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgX190eXBlbmFtZVxuICB9XG59XG5cbmZyYWdtZW50IFBhZ2VJbmZvIG9uIFBhZ2VJbmZvIHtcbiAgaGFzTmV4dFBhZ2VcbiAgaGFzUHJldmlvdXNQYWdlXG4gIHN0YXJ0Q3Vyc29yXG4gIGVuZEN1cnNvclxuICBfX3R5cGVuYW1lXG59XG5cbmA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlclF1ZXJ5ID0gZXhwb3J0cy51c2VyRnJhZ21lbnQgPSB2b2lkIDA7XG5leHBvcnRzLnVzZXJGcmFnbWVudCA9IGBcbmZyYWdtZW50IFVzZXIgb24gVXNlciB7XG4gIGlkXG4gIGF2YXRhclVybFxuICBuYW1lXG4gIHVzZXJuYW1lXG4gIHdlYlVybFxuICB3ZWJQYXRoXG4gIF9fdHlwZW5hbWVcbn1cbmA7XG5leHBvcnRzLnVzZXJRdWVyeSA9IGBcbnF1ZXJ5IHdvcmtzcGFjZUF1dG9jb21wbGV0ZVVzZXJzU2VhcmNoKCRzZWFyY2g6IFN0cmluZyEsICRmdWxsUGF0aDogSUQhLCAkaXNQcm9qZWN0OiBCb29sZWFuID0gdHJ1ZSkge1xuICBncm91cFdvcmtzcGFjZTogZ3JvdXAoZnVsbFBhdGg6ICRmdWxsUGF0aCkgQHNraXAoaWY6ICRpc1Byb2plY3QpIHtcbiAgICBpZFxuICAgIHVzZXJzOiBhdXRvY29tcGxldGVVc2VycyhzZWFyY2g6ICRzZWFyY2gpIHtcbiAgICAgIC4uLlVzZXJcbiAgICAgIC4uLlVzZXJBdmFpbGFiaWxpdHlcbiAgICAgIF9fdHlwZW5hbWVcbiAgICB9XG4gICAgX190eXBlbmFtZVxuICB9XG4gIHdvcmtzcGFjZTogcHJvamVjdChmdWxsUGF0aDogJGZ1bGxQYXRoKSB7XG4gICAgaWRcbiAgICB1c2VyczogYXV0b2NvbXBsZXRlVXNlcnMoc2VhcmNoOiAkc2VhcmNoKSB7XG4gICAgICAuLi5Vc2VyXG4gICAgICAuLi5Vc2VyQXZhaWxhYmlsaXR5XG4gICAgICBfX3R5cGVuYW1lXG4gICAgfVxuICAgIF9fdHlwZW5hbWVcbiAgfVxufVxuXG4ke2V4cG9ydHMudXNlckZyYWdtZW50fVxuZnJhZ21lbnQgVXNlckF2YWlsYWJpbGl0eSBvbiBVc2VyIHtcbiAgc3RhdHVzIHtcbiAgICBhdmFpbGFiaWxpdHlcbiAgICBfX3R5cGVuYW1lXG4gIH1cbiAgX190eXBlbmFtZVxufVxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2FjaGVfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0NhY2hlXCIpO1xuY2xhc3MgQ2xlYXJDYWNoZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IENhY2hlXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNhY2hlLmNsZWFySW52YWxpZCgpO1xuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5jYWNoZS5jbGVhckludmFsaWQuYmluZCh0aGlzLmNhY2hlKSwgNjAgKiAxMDAwKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDbGVhckNhY2hlU2VydmljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlUmVsYXRlZElzc3VlTW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0NyZWF0ZVJlbGF0ZWRJc3N1ZU1vZGFsXCIpO1xuY29uc3QgQ3JlYXRlQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9jcmVhdGUtcmVsYXRlZC1pc3N1ZS9DcmVhdGVCdXR0b25cIik7XG5jbGFzcyBDcmVhdGVSZWxhdGVkSXNzdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IENyZWF0ZVJlbGF0ZWRJc3N1ZU1vZGFsXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IG5ldyBDcmVhdGVCdXR0b25fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbi5ldmVudCgnY2xpY2snLCB0aGlzLm1vZGFsLnNob3cuYmluZCh0aGlzLm1vZGFsKSk7XG4gICAgICAgIHRoaXMubW91bnRCdXR0b24oKTtcbiAgICB9XG4gICAgbW91bnRCdXR0b24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5hZGRCdXR0b24uaW5pdC5iaW5kKHRoaXMuYWRkQnV0dG9uKSwgMTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5hZGRCdXR0b24uaW5pdC5iaW5kKHRoaXMuYWRkQnV0dG9uKSwgMzAwMCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3JlYXRlUmVsYXRlZElzc3VlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJbWFnZVByZXZpZXdNb2RhbF8xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvSW1hZ2VQcmV2aWV3TW9kYWxcIik7XG5jb25zdCBJbWFnZUxpbmtzXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9JbWFnZUxpbmtzXCIpO1xuY2xhc3MgSW1hZ2VQcmV2aWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBJbWFnZVByZXZpZXdNb2RhbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBuZXcgSW1hZ2VMaW5rc18xLkltYWdlTGlua3MoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0TGlua3MoKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5pbml0TGlua3MuYmluZCh0aGlzKSwgMzAwMCk7XG4gICAgfVxuICAgIGluaXRMaW5rcygpIHtcbiAgICAgICAgdGhpcy5pbWFnZUxpbmsuZ2V0TGlua3MoKS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm1vZGFsLnNob3codGhpcy5lbGVtZW50U3JjKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsZW1lbnRTcmMoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5ocmVmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50RWxlbWVudC5ocmVmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZVByZXZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElzc3VlUHJldmlld01vZGFsXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9Jc3N1ZVByZXZpZXdNb2RhbFwiKTtcbmNvbnN0IElzc3VlTGlua3NfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL0lzc3VlTGlua3NcIik7XG5jb25zdCBpbnRlbmRIb3Zlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvaW50ZW5kSG92ZXJcIik7XG5jb25zdCBJc3N1ZVByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vcHJvdmlkZXJzL0lzc3VlUHJvdmlkZXJcIik7XG5jbGFzcyBJc3N1ZVByZXZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IElzc3VlUHJldmlld01vZGFsXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmlzc3VlID0gbmV3IElzc3VlUHJvdmlkZXJfMS5Jc3N1ZVByb3ZpZGVyKCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdExpbmtzKCk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMuaW5pdExpbmtzLmJpbmQodGhpcyksIDMwMDApO1xuICAgIH1cbiAgICBpbml0TGlua3MoKSB7XG4gICAgICAgIElzc3VlTGlua3NfMS5Jc3N1ZUxpbmtzLmdldExpbmtzKCkuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgKDAsIGludGVuZEhvdmVyXzEuZGVmYXVsdCkobGluaywgdGhpcy5vbkhvdmVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgb25Ib3ZlcihldmVudCkge1xuICAgICAgICB0aGlzLm1vZGFsLnNob3coZXZlbnQpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBsaW5rID0gSXNzdWVMaW5rc18xLklzc3VlTGlua3MucGFyc2VMaW5rKGVsZW1lbnQuaHJlZik7XG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZSA9IGF3YWl0IHRoaXMuaXNzdWUuZ2V0SXNzdWUobGluay5wcm9qZWN0UGF0aCwgbGluay5pc3N1ZSk7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnVwZGF0ZUNvbnRlbnQoaXNzdWUuZGF0YS5wcm9qZWN0Lmlzc3VlKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuZml4UG9zaXRpb24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uTGVhdmUoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IElzc3VlUHJldmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVsYXRlZElzc3Vlc0F1dG9jb21wbGV0ZU1vZGFsXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9SZWxhdGVkSXNzdWVzQXV0b2NvbXBsZXRlTW9kYWxcIik7XG5jbGFzcyBSZWxhdGVkSXNzdWVBdXRvY29tcGxldGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IFJlbGF0ZWRJc3N1ZXNBdXRvY29tcGxldGVNb2RhbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmluaXRPYnNlcnZlci5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5pbml0T2JzZXJ2ZXIuYmluZCh0aGlzKSwgMzAwMCk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuaW5pdE9ic2VydmVyLmJpbmQodGhpcyksIDUwMDApO1xuICAgIH1cbiAgICBpbml0T2JzZXJ2ZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVsYXRlZC1pc3N1ZXMnKTtcbiAgICAgICAgaWYgKHRoaXMucmVhZHkgfHwgIXNlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0QXV0b2NvbXBsZXRlKHNlY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uLCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0QXV0b2NvbXBsZXRlKHNlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcmVsYXRlZC1pc3N1ZXMtZm9ybS1pbnB1dCcpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuaW5pdChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWxhdGVkSXNzdWVBdXRvY29tcGxldGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3N0eWxlcy9pbmRleC5zY3NzXCIpO1xuY29uc3QgSXNzdWVQcmV2aWV3XzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9Jc3N1ZVByZXZpZXdcIik7XG5jb25zdCBJbWFnZVByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL0ltYWdlUHJldmlld1wiKTtcbmNvbnN0IENyZWF0ZVJlbGF0ZWRJc3N1ZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvQ3JlYXRlUmVsYXRlZElzc3VlXCIpO1xuY29uc3QgUmVsYXRlZElzc3VlQXV0b2NvbXBsZXRlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9SZWxhdGVkSXNzdWVBdXRvY29tcGxldGVcIik7XG5jb25zdCBDbGVhckNhY2hlU2VydmljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvQ2xlYXJDYWNoZVNlcnZpY2VcIik7XG5bXG4gICAgQ2xlYXJDYWNoZVNlcnZpY2VfMS5kZWZhdWx0LFxuICAgIEltYWdlUHJldmlld18xLmRlZmF1bHQsXG4gICAgSXNzdWVQcmV2aWV3XzEuZGVmYXVsdCxcbiAgICBDcmVhdGVSZWxhdGVkSXNzdWVfMS5kZWZhdWx0LFxuICAgIFJlbGF0ZWRJc3N1ZUF1dG9jb21wbGV0ZV8xLmRlZmF1bHQsXG5dLmZvckVhY2goKFNlcnZpY2UpID0+IG5ldyBTZXJ2aWNlKCkuaW5pdCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==