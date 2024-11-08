// ==UserScript==
// @name         Gitlab plus
// @namespace    https://lukaszmical.pl/
// @version      2024-11-08
// @description  Gitlab utils
// @author       Łukasz Micał
// @match        https://gitlab.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&gitlab.com/
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes loader-animation{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.glp-issue-modal{position:absolute;display:none;padding:15px;background-color:var(--gl-background-color-default, var(--gl-color-neutral-0, #fff));border:1px solid var(--gl-border-color-default);border-radius:.25rem;width:300px;min-height:300px;z-index:99999}.glp-issue-modal.glp-modal-visible{display:flex}.glp-issue-modal .glp-issue-modal-inner{display:flex;flex-direction:column}.glp-issue-modal .glp-modal-loader{position:absolute;width:40px;height:40px;transform:translate(-50%, -50%);left:50%;top:50%}.glp-issue-modal .glp-modal-loader .glp-modal-loader-inner{position:absolute;width:40px;height:40px;background-color:var(--gl-background-color-subtle, var(--gl-color-neutral-10, #fbfafd));animation:linear 1s infinite loader-animation;border-radius:50%}.glp-issue-modal .glp-modal-loader .glp-modal-loader-inner::after{content:"";position:absolute;background-color:#fff;border-radius:50%;top:5px;left:50%;width:5px;height:5px;transform:translateX(-50%)}.glp-issue-modal .glp-block{padding:.75rem 0 1rem;border-bottom-style:solid;border-bottom-color:var(--gl-border-color-subtle, var(--gl-color-neutral-50, #ececef));border-bottom-width:1px;width:100%}.glp-issue-modal .assignee-grid{margin-top:4px;gap:4px}.glp-image-modal{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);visibility:hidden;opacity:0;pointer-events:none;z-index:99999}.glp-image-modal.glp-modal-visible{visibility:visible;opacity:1;pointer-events:auto}.glp-image-modal .glp-modal-img{max-width:95%;max-height:95%}.glp-image-modal .glp-modal-close{position:absolute;z-index:2;top:20px;right:20px;color:#000;width:40px;height:40px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:20px;cursor:pointer}@keyframes loader-animation{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.glp-create-related-issue-layer{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;display:none;background:rgba(0,0,0,.6);justify-content:center;align-items:center}.glp-create-related-issue-layer.glp-modal-visible{display:flex}.glp-create-related-issue-layer .glp-create-related-issue-modal{width:700px;max-width:95vw}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
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

/***/ 8081:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 7868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2061);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 3379:
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

/***/ 9216:
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

/***/ 3565:
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

/***/ 7795:
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

/***/ 4589:
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

/***/ 4648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const CreateRelatedIssueModalHeader_1 = __webpack_require__(2597);
const CreateRelatedIssueModalContent_1 = __webpack_require__(9549);
const Dom_1 = __webpack_require__(3429);
const IssueLinks_1 = __webpack_require__(2435);
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

/***/ 6098:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const ImageElement_1 = __webpack_require__(3698);
const CloseModal_1 = __webpack_require__(1147);
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

/***/ 2912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const IssueLoader_1 = __webpack_require__(5983);
const IssueModalContent_1 = __webpack_require__(7106);
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
exports["default"] = IssuePreviewModal;


/***/ }),

/***/ 8462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const AutocompleteModal_1 = __webpack_require__(1672);
const Dom_1 = __webpack_require__(3429);
const IssueProvider_1 = __webpack_require__(358);
const IssueLinks_1 = __webpack_require__(2435);
const IconComponent_1 = __webpack_require__(4332);
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
                new IconComponent_1.IconComponent('issue', 's16').getIcon(),
                { tag: 'small', html: item.iid },
                { tag: 'span', classes: 'gl-flex gl-flex-wrap', html: item.title },
            ],
        });
    }
}
exports["default"] = RelatedIssuesAutocompleteModal;


/***/ }),

/***/ 6854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const IconComponent_1 = __webpack_require__(4332);
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
            children: [new IconComponent_1.IconComponent('close', 's16').getIcon()],
        });
    }
}
exports["default"] = CloseButton;


/***/ }),

/***/ 3318:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dom_1 = __webpack_require__(3429);
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

/***/ 4332:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconComponent = void 0;
const Component_1 = __webpack_require__(3318);
const iconMap = {
    empty: '',
    tick: 'mobile-issue-close',
    close: 'close-xs',
    search: 'search',
    chevron: 'chevron-lg-down',
    issue: 'issue-type-issue',
};
class IconComponent extends Component_1.default {
    constructor(icon, size = 's12', ...cls) {
        super('span');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        svg.classList.add('gl-icon', size, 'gl-fill-current', ...cls);
        use.setAttribute('href', `/assets/icons-236e3b687d786d9dfe4709143a94d4c53b8d5a1f235775401e5825148297fa84.svg#${iconMap[icon]}`);
        svg.appendChild(use);
        this.element.append(svg);
    }
    getIcon() {
        return super.getElement().children[0];
    }
}
exports.IconComponent = IconComponent;


/***/ }),

/***/ 265:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LabelComponent = void 0;
const Component_1 = __webpack_require__(3318);
const Dom_1 = __webpack_require__(3429);
const IconComponent_1 = __webpack_require__(4332);
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
                html: scope,
            },
        ];
        if (text) {
            items.push({
                tag: 'span',
                classes: 'gl-label-text-scoped',
                html: text,
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
                        children: [new IconComponent_1.IconComponent('close').getIcon()],
                    },
                ],
            }));
        }
        return elements;
    }
    setClasses(label) {
        this.addClassName('gl-label', 'hide-collapsed');
        this.addClassName(label.textColor ? 'gl-label-text-light' : 'gl-label-text-dark');
        if (label.title.includes('::')) {
            this.addClassName('gl-label-scoped');
        }
        this.element.style.setProperty('--label-background-color', label.color);
        this.element.style.setProperty('--label-inset-border', `inset 0 0 0 2px ${label.color}`);
    }
}
exports.LabelComponent = LabelComponent;


/***/ }),

/***/ 5112:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserComponent = void 0;
const Component_1 = __webpack_require__(3318);
class UserComponent extends Component_1.default {
    constructor(user) {
        super('div', {
            classes: 'assignee-grid gl-flex gl-w-full gl-items-center',
            children: [
                {
                    tag: 'img',
                    classes: 'gl-avatar gl-avatar-circle gl-avatar-s24',
                    attrs: {
                        src: user.avatarUrl,
                        alt: "${assignee.name}'s avatar",
                    },
                },
                {
                    tag: 'span',
                    html: user.name,
                },
            ],
        });
    }
}
exports.UserComponent = UserComponent;


/***/ }),

/***/ 1617:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Field_1 = __webpack_require__(59);
const Dom_1 = __webpack_require__(3429);
const DropdownSearch_1 = __webpack_require__(8689);
const DropdownList_1 = __webpack_require__(4262);
const DropdownButton_1 = __webpack_require__(7622);
const DropdownModal_1 = __webpack_require__(1452);
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

/***/ 7622:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownButton = void 0;
const Dom_1 = __webpack_require__(3429);
const IconComponent_1 = __webpack_require__(4332);
const Component_1 = __webpack_require__(3318);
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
            children: [new IconComponent_1.IconComponent('chevron', 's16').getIcon()],
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
        const icon = new IconComponent_1.IconComponent(items.length ? 'close' : 'chevron', 's16').getIcon();
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

/***/ 4262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownList = void 0;
const Dom_1 = __webpack_require__(3429);
const IconComponent_1 = __webpack_require__(4332);
const Component_1 = __webpack_require__(3318);
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
                html: 'Recently used',
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
                tag: 'span',
                html: 'No options',
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
        return new IconComponent_1.IconComponent(selectedIds.includes(item.id) ? 'tick' : 'empty').getIcon();
    }
}
exports.DropdownList = DropdownList;


/***/ }),

/***/ 1452:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownModal = void 0;
const Component_1 = __webpack_require__(3318);
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

/***/ 8689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropdownSearch = void 0;
const Dom_1 = __webpack_require__(3429);
const IconComponent_1 = __webpack_require__(4332);
const Component_1 = __webpack_require__(3318);
const CloseButton_1 = __webpack_require__(6854);
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

/***/ 59:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
class Field extends Component_1.default {
    constructor(title, input, hint = '') {
        super('fieldset', {
            classes: 'form-group gl-form-group gl-w-full is-valid',
            children: [
                {
                    tag: 'legend',
                    classes: 'bv-no-focus-ring col-form-label pt-0 col-form-label',
                    html: title,
                },
                input,
                {
                    tag: 'small',
                    html: hint,
                },
            ],
        });
    }
}
exports["default"] = Field;


/***/ }),

/***/ 4976:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
class CreateButton extends Component_1.default {
    constructor() {
        super('button', {
            classes: 'btn btn-default btn-sm gl-button',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-button-text',
                    html: 'Create related issue',
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

/***/ 9549:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const IssueLinks_1 = __webpack_require__(2435);
const IssueProvider_1 = __webpack_require__(358);
const FormTitle_1 = __webpack_require__(2560);
const FormProject_1 = __webpack_require__(3389);
const FormLabels_1 = __webpack_require__(6606);
const FormMilestone_1 = __webpack_require__(3795);
const FormIteration_1 = __webpack_require__(9296);
const FormAssignees_1 = __webpack_require__(4728);
const FormRelation_1 = __webpack_require__(8518);
const Dom_1 = __webpack_require__(3429);
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
                    html: 'Add',
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

/***/ 2597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const CloseButton_1 = __webpack_require__(6854);
const Dom_1 = __webpack_require__(3429);
class CreateRelatedIssueModalHeader extends Component_1.default {
    constructor(onClose) {
        super('div', {
            classes: 'crud-header gl-border-b gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-2 gl-rounded-t-form gl-border-section gl-bg-section gl-px-5 gl-py-4 gl-relative',
            children: [
                Dom_1.Dom.create({
                    tag: 'h2',
                    classes: 'gl-m-0 gl-inline-flex gl-items-center gl-gap-3 gl-text-form gl-font-bold gl-leading-normal',
                    html: 'Create related issue',
                }),
                new CloseButton_1.default(onClose).getElement(),
            ],
        });
    }
}
exports["default"] = CreateRelatedIssueModalHeader;


/***/ }),

/***/ 4728:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(1617);
const Dom_1 = __webpack_require__(3429);
const UsersProvider_1 = __webpack_require__(5365);
const RecentProvider_1 = __webpack_require__(8204);
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
                            html: item.name,
                        },
                    ],
                },
                {
                    tag: 'span',
                    classes: 'gl-avatar-labeled-sublabel',
                    html: item.username,
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
            html: item ? item.name : 'Select assignee',
        });
    }
    onChange() { }
    filter(search) {
        this.searchUser(search);
    }
}
exports["default"] = FormAssignees;


/***/ }),

/***/ 9296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(1617);
const Dom_1 = __webpack_require__(3429);
const IterationsProvider_1 = __webpack_require__(8958);
const RecentProvider_1 = __webpack_require__(8204);
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
                        { tag: 'span', classes: 'gl-mr-2 gl-block', html: item.name },
                    ],
                },
            ],
        });
    }
    renderLabel([item]) {
        return Dom_1.Dom.create({
            tag: 'div',
            html: item ? item.name : 'Select iteration',
        });
    }
    onChange() { }
    filter(search) {
        this.searchIterations(search);
    }
}
exports["default"] = FormIteration;


/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(1617);
const Dom_1 = __webpack_require__(3429);
const LabelsProvider_1 = __webpack_require__(4107);
const RecentProvider_1 = __webpack_require__(8204);
const LabelComponent_1 = __webpack_require__(265);
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
                    html: item.title,
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
            html: label,
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

/***/ 3795:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(1617);
const Dom_1 = __webpack_require__(3429);
const MilestonesProvider_1 = __webpack_require__(9235);
const RecentProvider_1 = __webpack_require__(8204);
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
                        { tag: 'span', classes: 'gl-mr-2 gl-block', html: item.title },
                    ],
                },
            ],
        });
    }
    renderLabel([item]) {
        return Dom_1.Dom.create({
            tag: 'div',
            html: item ? item.title : 'Select milestone',
        });
    }
    onChange() { }
    filter(search) {
        this.searchMilestones(search);
    }
}
exports["default"] = FormMilestone;


/***/ }),

/***/ 3389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dropdown_1 = __webpack_require__(1617);
const Dom_1 = __webpack_require__(3429);
const ProjectsProvider_1 = __webpack_require__(9536);
const RecentProvider_1 = __webpack_require__(8204);
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
                html: item.name[0].toUpperCase(),
            });
        const label = Dom_1.Dom.create({
            tag: 'span',
            children: [
                { tag: 'span', classes: 'gl-mr-2 gl-block', html: item.name },
                {
                    tag: 'span',
                    classes: 'gl-block gl-text-secondary',
                    html: item.nameWithNamespace,
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
            html: item ? item.nameWithNamespace : 'Select project',
        });
    }
    onChange() { }
    filter(search) {
        this.searchProjects(search);
    }
}
exports["default"] = FormProject;


/***/ }),

/***/ 8518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Field_1 = __webpack_require__(59);
const Dom_1 = __webpack_require__(3429);
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
                    html: label,
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

/***/ 2560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dom_1 = __webpack_require__(3429);
const Field_1 = __webpack_require__(59);
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

/***/ 1147:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
class CloseModal extends Component_1.default {
    constructor(onClick) {
        super('div', {
            classes: 'glp-modal-close',
            html: 'X',
            events: {
                click: onClick,
            },
        });
    }
}
exports["default"] = CloseModal;


/***/ }),

/***/ 3698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
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

/***/ 4087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(2014);
const UserComponent_1 = __webpack_require__(5112);
class IssueAssignee extends IssueBlock_1.default {
    constructor(issue) {
        super('Assignee', issue.assignees.nodes.map((assignee) => new UserComponent_1.UserComponent(assignee).getElement()));
    }
}
exports["default"] = IssueAssignee;


/***/ }),

/***/ 2014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
class IssueBlock extends Component_1.default {
    constructor(title = '', content) {
        super('div', {
            classes: 'glp-block',
            children: [
                {
                    tag: 'div',
                    classes: 'gl-flex gl-items-center gl-font-bold gl-leading-20 gl-text-gray-900',
                    html: title,
                },
                {
                    tag: 'div',
                    ...(typeof content === 'string'
                        ? { html: content }
                        : { children: content }),
                },
            ],
        });
    }
}
exports["default"] = IssueBlock;


/***/ }),

/***/ 7233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(2014);
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

/***/ 4697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(2014);
const LabelComponent_1 = __webpack_require__(265);
class IssueLabels extends IssueBlock_1.default {
    constructor(issue) {
        super('Labels', issue.labels.nodes.map((label) => new LabelComponent_1.LabelComponent(label).getElement()));
    }
}
exports["default"] = IssueLabels;


/***/ }),

/***/ 5983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
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

/***/ 7087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(2014);
class IssueMilestone extends IssueBlock_1.default {
    constructor(issue) {
        super('Milestone', issue.milestone ? issue.milestone.title : '');
    }
}
exports["default"] = IssueMilestone;


/***/ }),

/***/ 7106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueModalContent = void 0;
const Component_1 = __webpack_require__(3318);
const IssueTitle_1 = __webpack_require__(7941);
const IssueAssignee_1 = __webpack_require__(4087);
const IssueLabels_1 = __webpack_require__(4697);
const IssueMilestone_1 = __webpack_require__(7087);
const IssueIteration_1 = __webpack_require__(7233);
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
        ];
        this.element.replaceChildren(...components.map((Component) => new Component(issue).getElement()));
    }
}
exports.IssueModalContent = IssueModalContent;


/***/ }),

/***/ 7941:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssueBlock_1 = __webpack_require__(2014);
class IssueTitle extends IssueBlock_1.default {
    constructor(issue) {
        super(issue.title, '');
    }
}
exports["default"] = IssueTitle;


/***/ }),

/***/ 1672:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(3318);
const DropdownList_1 = __webpack_require__(4262);
const DropdownSearch_1 = __webpack_require__(8689);
const DropdownModal_1 = __webpack_require__(1452);
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

/***/ 6333:
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
    get(key) {
        try {
            const data = JSON.parse(localStorage.getItem(key) || '');
            if (this.isValid(data)) {
                return data.value;
            }
        }
        catch (e) {
        }
        return undefined;
    }
    set(key, value, minutes) {
        localStorage.setItem(key, JSON.stringify({
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
}
exports["default"] = Cache;


/***/ }),

/***/ 3429:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dom = void 0;
class Dom {
    static create(data) {
        const element = document.createElement(data.tag);
        if (data.classes) {
            element.className = data.classes;
        }
        if (data.children) {
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
        if (data.html) {
            element.innerHTML = data.html;
        }
        return element;
    }
    static element(tag, classes) {
        return Dom.create({ tag, classes });
    }
}
exports.Dom = Dom;


/***/ }),

/***/ 1429:
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

/***/ 5067:
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

/***/ 2435:
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

/***/ 1472:
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

/***/ 6392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitlabProvider = void 0;
const Cache_1 = __webpack_require__(6333);
const GraphQl_1 = __webpack_require__(1429);
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

/***/ 358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueProvider = void 0;
const GitlabProvider_1 = __webpack_require__(6392);
const issue_1 = __webpack_require__(8600);
class IssueProvider extends GitlabProvider_1.GitlabProvider {
    async getIssue(projectId, issueId) {
        return await this.queryCached(`glp-issue-${projectId}-${issueId}`, issue_1.issueQuery, {
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

/***/ 8958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IterationsProvider = void 0;
const GitlabProvider_1 = __webpack_require__(6392);
const iteration_1 = __webpack_require__(2067);
class IterationsProvider extends GitlabProvider_1.GitlabProvider {
    async getIterations(projectId, title = '') {
        return await this.queryCached(`glp-iterations-${projectId} `, iteration_1.iterationQuery, {
            fullPath: projectId,
            title,
            state: 'opened',
        }, title !== '' ? 0.5 : 20);
    }
}
exports.IterationsProvider = IterationsProvider;


/***/ }),

/***/ 4107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LabelsProvider = void 0;
const GitlabProvider_1 = __webpack_require__(6392);
const label_1 = __webpack_require__(6117);
class LabelsProvider extends GitlabProvider_1.GitlabProvider {
    async getLabels(projectId, search = '') {
        return this.queryCached(`glp-labels-${projectId}-${search}`, label_1.labelsQuery, {
            fullPath: projectId,
            searchTerm: search,
        }, search === '' ? 20 : 0.5);
    }
}
exports.LabelsProvider = LabelsProvider;


/***/ }),

/***/ 9235:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MilestonesProvider = void 0;
const GitlabProvider_1 = __webpack_require__(6392);
const milestone_1 = __webpack_require__(5243);
class MilestonesProvider extends GitlabProvider_1.GitlabProvider {
    async getMilestones(projectId, title = '') {
        return await this.queryCached(`glp-milestones-${projectId}-${title}`, milestone_1.milestoneQuery, {
            fullPath: projectId,
            state: 'active',
            title,
        }, title === '' ? 20 : 0.5);
    }
}
exports.MilestonesProvider = MilestonesProvider;


/***/ }),

/***/ 9536:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsProvider = void 0;
const GitlabProvider_1 = __webpack_require__(6392);
const project_1 = __webpack_require__(2265);
class ProjectsProvider extends GitlabProvider_1.GitlabProvider {
    async getProjects(projectId, search = '') {
        return await this.queryCached(`glp-projects-${projectId}-${search}`, project_1.projectsQuery, {
            fullPath: projectId,
            search,
        }, search === '' ? 20 : 0.5);
    }
}
exports.ProjectsProvider = ProjectsProvider;


/***/ }),

/***/ 8204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecentProvider = void 0;
const Cache_1 = __webpack_require__(6333);
class RecentProvider {
    constructor(key) {
        this.cache = new Cache_1.default();
        this.key = `glp-recent-${key}`;
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

/***/ 5365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersProvider = void 0;
const GitlabProvider_1 = __webpack_require__(6392);
const user_1 = __webpack_require__(9525);
class UsersProvider extends GitlabProvider_1.GitlabProvider {
    async getUsers(projectId, search = '') {
        return await this.queryCached(`glp-users-${projectId}-${search}`, user_1.userQuery, {
            fullPath: projectId,
            search,
        }, 0.02);
    }
}
exports.UsersProvider = UsersProvider;


/***/ }),

/***/ 8600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueMutation = exports.issuesQuery = exports.issueQuery = void 0;
const label_1 = __webpack_require__(6117);
const user_1 = __webpack_require__(9525);
exports.issueQuery = `query issueEE($projectPath: ID!, $iid: String!) {
  project(fullPath: $projectPath) {
    id
    issue(iid: $iid) {
      id
      iid
      title
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

/***/ 2067:
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

/***/ 6117:
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

/***/ 5243:
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

/***/ 2265:
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

/***/ 9525:
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

/***/ 6707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const CreateRelatedIssueModal_1 = __webpack_require__(4648);
const CreateButton_1 = __webpack_require__(4976);
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

/***/ 9573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ImagePreviewModal_1 = __webpack_require__(6098);
const ImageLinks_1 = __webpack_require__(5067);
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

/***/ 8775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IssuePreviewModal_1 = __webpack_require__(2912);
const IssueLinks_1 = __webpack_require__(2435);
const intendHover_1 = __webpack_require__(1472);
const IssueProvider_1 = __webpack_require__(358);
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
        }
    }
    onLeave() {
        this.modal.hide();
    }
}
exports["default"] = IssuePreview;


/***/ }),

/***/ 4202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const RelatedIssuesAutocompleteModal_1 = __webpack_require__(8462);
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
        console.log('1. section', section);
        if (this.ready || !section) {
            return;
        }
        this.ready = true;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    this.initAutocomplete(section);
                    console.log('2. this.initAutocomplete()');
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
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(7868);
const IssuePreview_1 = __webpack_require__(8775);
const ImagePreview_1 = __webpack_require__(9573);
const CreateRelatedIssue_1 = __webpack_require__(6707);
const RelatedIssueAutocomplete_1 = __webpack_require__(4202);
[ImagePreview_1.default, IssuePreview_1.default, CreateRelatedIssue_1.default, RelatedIssueAutocomplete_1.default].forEach((Service) => new Service().init());

})();

/******/ })()
;