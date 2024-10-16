// ==UserScript==
// @name         Gitlab plus
// @namespace    https://lukaszmical.pl/
// @version      2024-10-08
// @description  Gitlab utils
// @author       Łukasz Micał
// @match        https://gitlab.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&gitlab.com/
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 61:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes loader-animation{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.glp-issue-modal{position:absolute;display:none;padding:15px;background-color:var(--gl-background-color-default, var(--gl-color-neutral-0, #fff));border:1px solid var(--gl-border-color-default);border-radius:.25rem;width:300px;min-height:300px;z-index:99999}.glp-issue-modal.glp-modal-visible{display:flex}.glp-issue-modal .glp-issue-modal-inner{display:flex;flex-direction:column}.glp-issue-modal .glp-modal-loader{position:absolute;width:40px;height:40px;transform:translate(-50%, -50%);left:50%;top:50%}.glp-issue-modal .glp-modal-loader .glp-modal-loader-inner{position:absolute;width:40px;height:40px;background-color:var(--gl-background-color-subtle, var(--gl-color-neutral-10, #fbfafd));animation:linear 1s infinite loader-animation;border-radius:50%}.glp-issue-modal .glp-modal-loader .glp-modal-loader-inner::after{content:"";position:absolute;background-color:#fff;border-radius:50%;top:5px;left:50%;width:5px;height:5px;transform:translateX(-50%)}.glp-issue-modal .glp-block{padding:.75rem 0 1rem;border-bottom-style:solid;border-bottom-color:var(--gl-border-color-subtle, var(--gl-color-neutral-50, #ececef));border-bottom-width:1px;width:100%}.glp-issue-modal .assignee-grid{margin-top:4px;gap:4px}.glp-image-modal{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);visibility:hidden;opacity:0;pointer-events:none;z-index:99999}.glp-image-modal.glp-modal-visible{visibility:visible;opacity:1;pointer-events:auto}.glp-image-modal .glp-modal-img{max-width:95%;max-height:95%}.glp-image-modal .glp-modal-close{position:absolute;z-index:2;top:20px;right:20px;color:#000;width:40px;height:40px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:20px;cursor:pointer}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
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

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 379:
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

/***/ 569:
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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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

/***/ 589:
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

/***/ 807:
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

/***/ 981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(807);
const ImageElement_1 = __webpack_require__(682);
const CloseModal_1 = __webpack_require__(322);
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

/***/ 968:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(807);
const IssueLoader_1 = __webpack_require__(830);
const IssueModalContent_1 = __webpack_require__(793);
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

/***/ 322:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(807);
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

/***/ 682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(807);
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

/***/ 107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(574);
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

/***/ 574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(807);
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

/***/ 127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(574);
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

/***/ 922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(574);
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

/***/ 830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(807);
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

/***/ 715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(574);
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

/***/ 793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueModalContent = void 0;
const Component_1 = __webpack_require__(807);
const IssueTitle_1 = __webpack_require__(629);
const IssueAssignee_1 = __webpack_require__(107);
const IssueLabels_1 = __webpack_require__(922);
const IssueMilestone_1 = __webpack_require__(715);
const IssueIteration_1 = __webpack_require__(127);
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

/***/ 629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(574);
class IssueTitle extends IssueBlock_1.default {
    update(issue) {
        this.updateTitle(issue.title);
    }
}
exports["default"] = IssueTitle;


/***/ }),

/***/ 67:
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

/***/ 435:
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

/***/ 472:
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

/***/ 358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueProvider = void 0;
const Cache_1 = __webpack_require__(803);
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

/***/ 803:
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

/***/ 573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ImageModal_1 = __webpack_require__(981);
const ImageLinks_1 = __webpack_require__(67);
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

/***/ 775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueModal_1 = __webpack_require__(968);
const IssueLinks_1 = __webpack_require__(435);
const intendHover_1 = __webpack_require__(472);
const IssueProvider_1 = __webpack_require__(358);
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
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(868);
const IssuePreview_1 = __webpack_require__(775);
const ImagePreview_1 = __webpack_require__(573);
[ImagePreview_1.default, IssuePreview_1.default].forEach((Service) => new Service().init());

})();

/******/ })()
;