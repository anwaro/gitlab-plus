// ==UserScript==
// @name         Gitlab plus
// @namespace    https://lukaszmical.pl/
// @version      2024-11-14
// @description  Gitlab utils
// @author       Łukasz Micał
// @match        https://gitlab.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&gitlab.com/
// ==/UserScript==

(() => {
    'use strict';
    var _modules = {
        'create-related-issue.css': (_unused_module, _exports, _require) => {
            _require.r(_exports);
            _require.d(_exports, {
                default: () => _default_export,
            });
            const _default_export =
                '.glp-create-related-issue-layer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99999;\n    display: none;\n    background: rgba(0, 0, 0, 0.6);\n    justify-content: center;\n    align-items: center;\n}\n\n.glp-create-related-issue-layer.glp-modal-visible {\n    display: flex;\n}\n\n.glp-create-related-issue-layer .glp-create-related-issue-modal {\n    width: 700px;\n    max-width: 95vw;\n}\n\n\n';
        },

        'image-preview.css': (_unused_module, _exports, _require) => {
            _require.r(_exports);
            _require.d(_exports, {
                default: () => _default_export,
            });
            const _default_export =
                '.glp-image-preview-modal {\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.6);\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n    z-index: 99999;\n}\n\n.glp-image-preview-modal.glp-modal-visible {\n    visibility: visible;\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.glp-image-preview-modal .glp-modal-img {\n    max-width: 95%;\n    max-height: 95%;\n}\n\n.glp-image-preview-modal .glp-modal-close {\n    position: absolute;\n    z-index: 2;\n    top: 20px;\n    right: 20px;\n    color: black;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: white;\n    border-radius: 20px;\n    cursor: pointer;\n}\n\n';
        },

        'issue-preview.css': (_unused_module, _exports, _require) => {
            _require.r(_exports);
            _require.d(_exports, {
                default: () => _default_export,
            });
            const _default_export =
                "@keyframes loader-animation {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.glp-issue-preview-modal {\n    position: absolute;\n    display: flex;\n    padding: 15px;\n    background-color: var(--gl-background-color-default, var(--gl-color-neutral-0, #fff));\n    border: 1px solid var(--gl-border-color-default);\n    border-radius: .25rem;\n    width: 300px;\n    min-height: 300px;\n    z-index: 99999;\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n    transition: all .3s ease-out;\n    transition-property: visibility, opacity, transform;\n}\n\n.glp-issue-preview-modal.glp-modal-visible {\n    visibility: visible;\n    opacity: 1;\n}\n\n.glp-issue-preview-modal .glp-issue-modal-inner {\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n}\n\n\n.glp-issue-preview-modal .glp-block {\n    padding: .75rem 0 1rem;\n    border-bottom-style: solid;\n    border-bottom-color: var(--gl-border-color-subtle, var(--gl-color-neutral-50, #ececef));\n    border-bottom-width: 1px;\n    width: 100%;\n}\n\n.glp-issue-preview-modal .assignee-grid {\n    margin-top: 4px;\n    gap: 4px\n}\n\n\n.glp-modal-loader {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    top: 50%;\n}\n\n.glp-modal-loader.glp-modal-loader-inner {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    background-color: var(--gl-background-color-subtle, var(--gl-color-neutral-10, #fbfafd));\n    animation: linear 1s infinite loader-animation;\n    border-radius: 50%;\n}\n\n.glp-modal-loader.glp-modal-loader-inner::after {\n    content: '';\n    position: absolute;\n    background-color: #fff;\n    border-radius: 50%;\n    top: 5px;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    transform: translateX(-50%);\n}\n\n\n";
        },

        'CreateRelatedIssueModal.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const CreateRelatedIssueModalHeader_1 = _require(
                'CreateRelatedIssueModalHeader.ts',
            );
            const CreateRelatedIssueModalContent_1 = _require(
                'CreateRelatedIssueModalContent.ts',
            );
            const Dom_1 = _require('Dom.ts');
            const IssueLink_1 = _require('IssueLink.ts');
            class CreateRelatedIssueModal extends Component_1.default {
                constructor() {
                    const container = Dom_1.Dom.create({
                        tag: 'div',
                        classes:
                            'glp-create-related-issue-modal crud gl-border gl-rounded-form gl-border-section gl-bg-subtle gl-mt-5',
                    });
                    super('div', {
                        classes: 'glp-create-related-issue-layer',
                        children: [container],
                    });
                    this.visibleClassName = 'glp-modal-visible';
                    const link = IssueLink_1.IssueLink.parseLink(
                        window.location.href,
                    );
                    if (link) {
                        const form = new CreateRelatedIssueModalContent_1.default(
                            link,
                            this.hide.bind(this),
                        );
                        container.append(
                            new CreateRelatedIssueModalHeader_1.default(() => {
                                this.hide();
                                form.reset();
                            }).getElement(),
                            form.getElement(),
                        );
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
            exports['default'] = CreateRelatedIssueModal;
        },

        'ImagePreviewModal.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const Dom_1 = _require('Dom.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            class ImagePreviewModal extends Component_1.default {
                constructor() {
                    super('div', {classes: 'glp-image-preview-modal'});
                    this.image = Dom_1.Dom.element('img', 'glp-modal-img');
                    this.visibleClassName = 'glp-modal-visible';
                    this.element.append(
                        this.image,
                        Dom_1.Dom.create({
                            tag: 'div',
                            classes: 'glp-modal-close',
                            children: [
                                new IconComponent_1.IconComponent(
                                    'close-xs',
                                    's24',
                                ).getElement(),
                            ],
                            events: {
                                click: this.hide.bind(this),
                            },
                        }),
                    );
                    this.mount(document.body);
                }
                show(src) {
                    this.image.src = src;
                    this.element.classList.add(this.visibleClassName);
                }
                hide() {
                    this.element.classList.remove(this.visibleClassName);
                    this.image.src = '';
                }
            }
            exports['default'] = ImagePreviewModal;
        },

        'IssuePreviewModal.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const IssueLoader_1 = _require('IssueLoader.ts');
            const IssueModalContent_1 = _require('IssueModalContent.ts');
            class IssuePreviewModal extends Component_1.default {
                constructor() {
                    super('div', {classes: 'glp-issue-preview-modal'});
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
                    const dY =
                        event.screenY +
                        this.element.getBoundingClientRect().height -
                        window.innerHeight;
                    if (dY > 0) {
                        this.element.style.transform = `translateY(-${dY + 15}px)`;
                    }
                }
                hide() {
                    this.element.classList.remove(this.visibleClassName);
                    this.element.replaceChildren();
                }
                updateContent(issue) {
                    this.content.update(issue);
                    this.element.replaceChildren(this.content.getElement());
                }
            }
            exports['default'] = IssuePreviewModal;
        },

        'RelatedIssuesAutocompleteModal.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const AutocompleteModal_1 = _require('AutocompleteModal.ts');
            const Dom_1 = _require('Dom.ts');
            const IssueProvider_1 = _require('IssueProvider.ts');
            const IssueLink_1 = _require('IssueLink.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            class RelatedIssuesAutocompleteModal {
                constructor() {
                    this.readyClass = 'glp-input-ready';
                    this.input = Dom_1.Dom.element('input');
                    this.issueProvider = new IssueProvider_1.IssueProvider();
                    this.search = this.issueProvider.debounce(this.load.bind(this));
                    this.link = IssueLink_1.IssueLink.parseLink(
                        window.location.href,
                    );
                    this.autocompleteModal = new AutocompleteModal_1.default(
                        this.onSelect.bind(this),
                        this.renderItem.bind(this),
                        this.search.bind(this),
                    );
                    document.body.addEventListener('click', (e) => {
                        if (
                            e.target !== this.input &&
                            !this.input.contains(e.target)
                        ) {
                            this.autocompleteModal.setVisible(false);
                        }
                    });
                }
                init(input) {
                    if (this.isMounted(input)) {
                        return;
                    }
                    const container = input.closest(
                        '.add-issuable-form-input-wrapper',
                    );
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
                    const response = await this.issueProvider.getIssues(
                        this.link.workspacePath,
                        term,
                    );
                    this.autocompleteModal.updateItems([
                        ...(((_a = response.data.workspace.workItems) === null ||
                        _a === void 0
                            ? void 0
                            : _a.nodes) || []),
                        ...(((_b = response.data.workspace.workItemsByIid) ===
                            null || _b === void 0
                            ? void 0
                            : _b.nodes) || []),
                        ...(((_c = response.data.workspace.workItemsEmpty) ===
                            null || _c === void 0
                            ? void 0
                            : _c.nodes) || []),
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
                            new IconComponent_1.IconComponent(
                                'issue-type-issue',
                                's16',
                            ).getElement(),
                            {tag: 'small', children: item.iid},
                            {
                                tag: 'span',
                                classes: 'gl-flex gl-flex-wrap',
                                children: item.title,
                            },
                        ],
                    });
                }
            }
            exports['default'] = RelatedIssuesAutocompleteModal;
        },

        'CloseButton.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            class CloseButton extends Component_1.default {
                constructor(onClick) {
                    super('button', {
                        classes:
                            'btn js-issue-item-remove-button gl-mr-2 btn-default btn-sm gl-button btn-default-tertiary btn-icon',
                        attrs: {
                            type: 'button',
                        },
                        events: {
                            click: onClick,
                        },
                        children: [
                            new IconComponent_1.IconComponent(
                                'close-xs',
                                's16',
                            ).getElement(),
                        ],
                    });
                }
            }
            exports['default'] = CloseButton;
        },

        'Component.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dom_1 = _require('Dom.ts');
            class Component {
                constructor(tag, props = {}) {
                    this.element = Dom_1.Dom.create({tag, ...props});
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
            exports['default'] = Component;
        },

        'IconComponent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.IconComponent = void 0;
            const SvgComponent_1 = _require('SvgComponent.ts');
            class IconComponent extends SvgComponent_1.SvgComponent {
                constructor(icon, size = 's12', ...cls) {
                    super('svg', {
                        classes: ['gl-icon gl-fill-current', size, ...cls].join(' '),
                        children: {
                            tag: 'use',
                            attrs: {
                                href: `/assets/icons-236e3b687d786d9dfe4709143a94d4c53b8d5a1f235775401e5825148297fa84.svg#${icon}`,
                            },
                        },
                    });
                }
            }
            exports.IconComponent = IconComponent;
        },

        'LabelComponent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.LabelComponent = void 0;
            const Component_1 = _require('Component.ts');
            const Dom_1 = _require('Dom.ts');
            const IconComponent_1 = _require('IconComponent.ts');
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
                        elements.push(
                            Dom_1.Dom.create({
                                tag: 'button',
                                classes:
                                    'btn gl-label-close !gl-p-0 btn-reset btn-sm gl-button btn-reset-tertiary',
                                attrs: {
                                    type: 'button',
                                },
                                events: {click: onRemove},
                                children: {
                                    tag: 'span',
                                    classes: 'gl-button-text',
                                    children: new IconComponent_1.IconComponent(
                                        'close-xs',
                                    ).getElement(),
                                },
                            }),
                        );
                    }
                    return elements;
                }
                setClasses(label) {
                    this.addClassName(
                        'gl-label',
                        'hide-collapsed',
                        label.textColor === '#FFFFFF'
                            ? 'gl-label-text-light'
                            : 'gl-label-text-dark',
                    );
                    if (label.title.includes('::')) {
                        this.addClassName('gl-label-scoped');
                    }
                    this.element.style.setProperty(
                        '--label-background-color',
                        label.color,
                    );
                    this.element.style.setProperty(
                        '--label-inset-border',
                        `inset 0 0 0 2px ${label.color}`,
                    );
                }
            }
            exports.LabelComponent = LabelComponent;
        },

        'MergeRequestComponent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.MergeRequestComponent = void 0;
            const Component_1 = _require('Component.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            const Dom_1 = _require('Dom.ts');
            const UserComponent_1 = _require('UserComponent.ts');
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
                            Dom_1.Dom.element(
                                'div',
                                'item-title gl-flex gl-min-w-0 gl-gap-3',
                                [
                                    new IconComponent_1.IconComponent(
                                        iconMap[mr.state] || 'empty',
                                        's16',
                                        'merge-request-status',
                                        mr.state,
                                    ).getElement(),
                                    {
                                        tag: 'span',
                                        classes: 'gl-text-gray-500',
                                        children: `!${mr.iid}`,
                                    },
                                    new UserComponent_1.UserComponent(
                                        mr.author,
                                        's16',
                                    ).getElement(),
                                ],
                            ),
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
        },

        'StatusComponent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.StatusComponent = void 0;
            const Component_1 = _require('Component.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            class StatusComponent extends Component_1.default {
                constructor(isOpen) {
                    super('span', {
                        classes: `gl-badge badge badge-pill ${
                            isOpen ? 'badge-success' : 'badge-info'
                        }`,
                        children: [
                            new IconComponent_1.IconComponent(
                                isOpen ? 'issue-open-m' : 'issue-close',
                                's16',
                            ).getElement(),
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
        },

        'SvgComponent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.SvgComponent = void 0;
            const Dom_1 = _require('Dom.ts');
            class SvgComponent {
                constructor(tag, props = {}) {
                    this.element = Dom_1.Dom.createSvg({tag, ...props});
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
            exports.SvgComponent = SvgComponent;
        },

        'UserComponent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.UserComponent = void 0;
            const Component_1 = _require('Component.ts');
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
        },

        'Dropdown.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Field_1 = _require('Field.ts');
            const Dom_1 = _require('Dom.ts');
            const DropdownSearch_1 = _require('DropdownSearch.ts');
            const DropdownList_1 = _require('DropdownList.ts');
            const DropdownButton_1 = _require('DropdownButton.ts');
            const DropdownModal_1 = _require('DropdownModal.ts');
            class Dropdown extends Field_1.default {
                constructor(title, isMultiselect = false) {
                    const container = Dom_1.Dom.element(
                        'div',
                        'gl-relative gl-w-full gl-new-dropdown !gl-block',
                    );
                    super(title, container);
                    this.isMultiselect = isMultiselect;
                    this.value = [];
                    this.items = [];
                    this.recently = [];
                    this.extra = Dom_1.Dom.element('div');
                    this.search = new DropdownSearch_1.DropdownSearch(
                        this.filter.bind(this),
                    );
                    this.list = new DropdownList_1.DropdownList(
                        this.renderItem.bind(this),
                        this.onSelect.bind(this),
                    );
                    this.modal = new DropdownModal_1.DropdownModal(
                        this.search.getElement(),
                        this.list.getElement(),
                    );
                    this.button = new DropdownButton_1.DropdownButton(
                        this.renderLabel.bind(this),
                        this.modal.setVisible.bind(this.modal),
                        this.reset.bind(this),
                    );
                    container.append(
                        this.extra,
                        this.button.getElement(),
                        this.modal.getElement(),
                    );
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
                        } else {
                            this.value.push(item);
                        }
                    } else {
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
            exports['default'] = Dropdown;
        },

        'DropdownButton.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.DropdownButton = void 0;
            const Dom_1 = _require('Dom.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            const Component_1 = _require('Component.ts');
            class DropdownButton extends Component_1.default {
                constructor(renderLabel, setVisible, reset) {
                    super('button', {
                        classes:
                            'btn btn-default btn-md btn-block gl-button gl-new-dropdown-toggle',
                        attrs: {
                            type: 'button',
                        },
                        events: {
                            click: () => setVisible(true),
                        },
                    });
                    this.renderLabel = renderLabel;
                    this.reset = reset;
                    this.buttonLabel = Dom_1.Dom.element(
                        'span',
                        'gl-new-dropdown-button-text',
                    );
                    this.icon = Dom_1.Dom.create({
                        tag: 'span',
                        children: [
                            new IconComponent_1.IconComponent(
                                'chevron-lg-down',
                                's16',
                            ).getElement(),
                        ],
                    });
                    document.body.addEventListener('click', (e) => {
                        if (
                            e.target !== this.element &&
                            !this.element.contains(e.target)
                        ) {
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
                    const icon = new IconComponent_1.IconComponent(
                        items.length ? 'close-xs' : 'chevron-lg-down',
                        's16',
                    ).getElement();
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
        },

        'DropdownList.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.DropdownList = void 0;
            const Dom_1 = _require('Dom.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            const Component_1 = _require('Component.ts');
            class DropdownList extends Component_1.default {
                constructor(renderItem, onClick) {
                    super('div', {
                        classes:
                            'gl-new-dropdown-contents gl-new-dropdown-contents-with-scrim-overlay bottom-scrim-visible gl-new-dropdown-contents',
                    });
                    this.renderItem = renderItem;
                    this.onClick = onClick;
                    this.list = Dom_1.Dom.element('ul', 'gl-mb-0 gl-pl-0');
                    this.element.append(this.list);
                }
                render(items, recently, selected) {
                    this.list.replaceChildren();
                    if (recently.length) {
                        this.list.append(
                            Dom_1.Dom.create({
                                tag: 'li',
                                classes:
                                    'gl-pb-2 gl-pl-4 gl-pt-3 gl-text-sm gl-font-bold gl-text-strong',
                                children: 'Recently used',
                            }),
                        );
                        this.list.append(
                            ...recently.map((item) => this.listItem(item, selected)),
                        );
                    }
                    if (items.length) {
                        this.list.append(
                            Dom_1.Dom.create({
                                tag: 'li',
                                classes:
                                    'gl-pb-2 gl-pl-4 gl-pt-3 gl-text-sm gl-font-bold gl-text-strong gl-border-t',
                            }),
                        );
                        this.list.append(
                            ...items.map((item) => this.listItem(item, selected)),
                        );
                    }
                    if (items.length + recently.length === 0) {
                        this.list.append(
                            Dom_1.Dom.create({
                                tag: 'li',
                                classes: 'gl-p-4',
                                children: 'No options',
                            }),
                        );
                    }
                }
                listItem(item, selected) {
                    return Dom_1.Dom.create({
                        tag: 'li',
                        classes: 'gl-new-dropdown-item',
                        events: {
                            click: () => this.onClick(item),
                        },
                        children: {
                            tag: 'span',
                            classes: 'gl-new-dropdown-item-content',
                            children: [
                                this.renderCheck(item, selected),
                                this.renderItem(item),
                            ],
                        },
                    });
                }
                renderCheck(item, selected) {
                    const selectedIds = selected.map((i) => i.id);
                    return new IconComponent_1.IconComponent(
                        selectedIds.includes(item.id) ? 'mobile-issue-close' : '',
                    ).getElement();
                }
            }
            exports.DropdownList = DropdownList;
        },

        'DropdownModal.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.DropdownModal = void 0;
            const Component_1 = _require('Component.ts');
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
                        children: {
                            tag: 'div',
                            classes: 'gl-new-dropdown-inner',
                            children: [search, list],
                        },
                    });
                }
                setVisible(visible) {
                    if (visible) {
                        this.element.classList.add('!gl-block');
                    } else {
                        this.element.classList.remove('!gl-block');
                    }
                }
            }
            exports.DropdownModal = DropdownModal;
        },

        'DropdownSearch.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.DropdownSearch = void 0;
            const Dom_1 = _require('Dom.ts');
            const IconComponent_1 = _require('IconComponent.ts');
            const Component_1 = _require('Component.ts');
            const CloseButton_1 = _require('CloseButton.ts');
            class DropdownSearch extends Component_1.default {
                constructor(onChange) {
                    super('div', {
                        classes:
                            'gl-border-b-1 gl-border-b-solid gl-border-b-dropdown',
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
                            new IconComponent_1.IconComponent(
                                'search',
                                's16',
                                'gl-search-box-by-type-search-icon',
                            ).getElement(),
                            this.input,
                            {
                                tag: 'div',
                                classes: 'gl-search-box-by-type-right-icons',
                                styles: {top: '0'},
                                children: new CloseButton_1.default(() => {
                                    this.input.value = '';
                                    this.onChange('');
                                }).getElement(),
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
        },

        'Field.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            class Field extends Component_1.default {
                constructor(title, input, hint = '') {
                    super('fieldset', {
                        classes: 'form-group gl-form-group gl-w-full is-valid',
                        children: [
                            {
                                tag: 'legend',
                                classes:
                                    'bv-no-focus-ring col-form-label pt-0 col-form-label',
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
            exports['default'] = Field;
        },

        'CreateButton.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            class CreateButton extends Component_1.default {
                constructor() {
                    super('button', {
                        classes: 'btn btn-default btn-sm gl-button',
                        children: {
                            tag: 'span',
                            classes: 'gl-button-text',
                            children: 'Create related issue',
                        },
                    });
                }
                init() {
                    const parent = document.querySelector(
                        '#related-issues [data-testid="crud-actions"]',
                    );
                    if (parent && !this.element.parentNode) {
                        this.mount(parent);
                    }
                }
            }
            exports['default'] = CreateButton;
        },

        'CreateRelatedIssueModalContent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const IssueLink_1 = _require('IssueLink.ts');
            const IssueProvider_1 = _require('IssueProvider.ts');
            const FormTitle_1 = _require('FormTitle.ts');
            const FormProject_1 = _require('FormProject.ts');
            const FormLabels_1 = _require('FormLabels.ts');
            const FormMilestone_1 = _require('FormMilestone.ts');
            const FormIteration_1 = _require('FormIteration.ts');
            const FormAssignees_1 = _require('FormAssignees.ts');
            const FormRelation_1 = _require('FormRelation.ts');
            const Dom_1 = _require('Dom.ts');
            class CreateRelatedIssueModalContent extends Component_1.default {
                constructor(link, onClose) {
                    super('form', {
                        classes:
                            'crud-body add-tree-form gl-mx-5 gl-my-4 gl-rounded-b-form',
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
                    this.element.append(
                        this.title.getElement(),
                        this.row(
                            this.project.getElement(),
                            this.milestone.getElement(),
                        ),
                        this.row(
                            this.iteration.getElement(),
                            this.assignees.getElement(),
                        ),
                        this.row(this.labels.getElement()),
                        this.row(this.relation.getElement()),
                        Dom_1.Dom.create({
                            tag: 'button',
                            classes: 'btn btn-confirm btn-sm gl-button',
                            attrs: {
                                type: 'button',
                            },
                            events: {
                                click: this.createIssue.bind(this),
                            },
                            children: {
                                tag: 'span',
                                classes: 'gl-button-text',
                                children: 'Add',
                            },
                        }),
                    );
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
                    const link = IssueLink_1.IssueLink.parseLink(
                        window.location.href,
                    );
                    if (!data || !link) {
                        return;
                    }
                    const response = await this.issueProvider.createIssue(data);
                    if (this.relation.value) {
                        await this.issueProvider.createIssueRelation({
                            issueId: response.data.createIssuable.issuable.iid,
                            projectId:
                                response.data.createIssuable.issuable.projectId,
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
            exports['default'] = CreateRelatedIssueModalContent;
        },

        'CreateRelatedIssueModalHeader.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const CloseButton_1 = _require('CloseButton.ts');
            class CreateRelatedIssueModalHeader extends Component_1.default {
                constructor(onClose) {
                    super('div', {
                        classes:
                            'crud-header gl-border-b gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-2 gl-rounded-t-form gl-border-section gl-bg-section gl-px-5 gl-py-4 gl-relative',
                        children: [
                            {
                                tag: 'h2',
                                classes:
                                    'gl-m-0 gl-inline-flex gl-items-center gl-gap-3 gl-text-form gl-font-bold gl-leading-normal',
                                children: 'Create related issue',
                            },
                            new CloseButton_1.default(onClose).getElement(),
                        ],
                    });
                }
            }
            exports['default'] = CreateRelatedIssueModalHeader;
        },

        'FormAssignees.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dropdown_1 = _require('Dropdown.ts');
            const Dom_1 = _require('Dom.ts');
            const UsersProvider_1 = _require('UsersProvider.ts');
            const RecentProvider_1 = _require('RecentProvider.ts');
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
                    const response = await this.assignees.getUsers(
                        this.link.projectPath,
                        serach,
                    );
                    this.updateItems(
                        response.data.workspace.users,
                        this.recent.get(),
                    );
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
                        attrs: {src: item.avatarUrl},
                    });
                    const label = Dom_1.Dom.create({
                        tag: 'div',
                        classes: 'gl-avatar-labeled-labels !gl-text-left',
                        children: [
                            {
                                tag: 'div',
                                classes:
                                    '-gl-mx-1 -gl-my-1 gl-flex gl-flex-wrap gl-items-center !gl-text-left',
                                children: {
                                    tag: 'span',
                                    classes: 'gl-avatar-labeled-label',
                                    children: item.name,
                                },
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
                        classes:
                            'gl-avatar-labeled sidebar-participant gl-relative gl-items-center gl-new-dropdown-item-text-wrapper',
                        children: [image, label],
                    });
                }
                renderLabel([item]) {
                    return Dom_1.Dom.create({
                        tag: 'div',
                        children: item ? item.name : 'Select assignee',
                    });
                }
                onChange() {}
                filter(search) {
                    this.searchUser(search);
                }
            }
            exports['default'] = FormAssignees;
        },

        'FormIteration.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dropdown_1 = _require('Dropdown.ts');
            const Dom_1 = _require('Dom.ts');
            const IterationsProvider_1 = _require('IterationsProvider.ts');
            const RecentProvider_1 = _require('RecentProvider.ts');
            class FormIteration extends Dropdown_1.default {
                constructor(link) {
                    super('Iteration');
                    this.link = link;
                    this.iterations = new IterationsProvider_1.IterationsProvider();
                    this.recent = new RecentProvider_1.RecentProvider('iterations');
                    this.searchIterations = this.iterations.debounce(
                        this.load.bind(this),
                    );
                    this.load();
                }
                async load(title = '') {
                    const response = await this.iterations.getIterations(
                        this.link.workspacePath,
                        title,
                    );
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
                                    {
                                        tag: 'span',
                                        classes: 'gl-mr-2 gl-block',
                                        children: item.name,
                                    },
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
                onChange() {}
                filter(search) {
                    this.searchIterations(search);
                }
            }
            exports['default'] = FormIteration;
        },

        'FormLabels.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dropdown_1 = _require('Dropdown.ts');
            const Dom_1 = _require('Dom.ts');
            const LabelsProvider_1 = _require('LabelsProvider.ts');
            const RecentProvider_1 = _require('RecentProvider.ts');
            const LabelComponent_1 = _require('LabelComponent.ts');
            class FormLabel extends Dropdown_1.default {
                constructor(link) {
                    super('Labels', true);
                    this.link = link;
                    this.labels = new LabelsProvider_1.LabelsProvider();
                    this.recent = new RecentProvider_1.RecentProvider('labels');
                    this.extra.classList.add(
                        'gl-mt-1',
                        'gl-pb-2',
                        'gl-flex',
                        'gl-flex-wrap',
                        'gl-gap-2',
                    );
                    this.searchLabels = this.labels.debounce(this.load.bind(this));
                    this.load();
                }
                async load(name = '') {
                    const labels = await this.labels.getLabels(
                        this.link.projectPath,
                        name,
                    );
                    this.updateItems(
                        labels.data.workspace.labels.nodes,
                        this.recent.get(),
                    );
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
                                classes:
                                    'dropdown-label-box gl-top-0 gl-mr-3 gl-shrink-0',
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
                    this.extra.replaceChildren(
                        ...this.value.map((item) =>
                            new LabelComponent_1.LabelComponent(item, () =>
                                this.onSelect(item),
                            ).getElement(),
                        ),
                    );
                }
                filter(search) {
                    this.searchLabels(search);
                }
            }
            exports['default'] = FormLabel;
        },

        'FormMilestone.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dropdown_1 = _require('Dropdown.ts');
            const Dom_1 = _require('Dom.ts');
            const MilestonesProvider_1 = _require('MilestonesProvider.ts');
            const RecentProvider_1 = _require('RecentProvider.ts');
            class FormMilestone extends Dropdown_1.default {
                constructor(link) {
                    super('Milestone');
                    this.link = link;
                    this.milestones = new MilestonesProvider_1.MilestonesProvider();
                    this.recent = new RecentProvider_1.RecentProvider('milestones');
                    this.searchMilestones = this.milestones.debounce(
                        this.load.bind(this),
                    );
                    this.load();
                }
                async load(title = '') {
                    const milestones = await this.milestones.getMilestones(
                        this.link.projectPath,
                        title,
                    );
                    this.updateItems(
                        milestones.data.workspace.attributes.nodes,
                        this.recent.get(),
                    );
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
                                    {
                                        tag: 'span',
                                        classes: 'gl-mr-2 gl-block',
                                        children: item.title,
                                    },
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
                onChange() {}
                filter(search) {
                    this.searchMilestones(search);
                }
            }
            exports['default'] = FormMilestone;
        },

        'FormProject.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dropdown_1 = _require('Dropdown.ts');
            const Dom_1 = _require('Dom.ts');
            const ProjectsProvider_1 = _require('ProjectsProvider.ts');
            const RecentProvider_1 = _require('RecentProvider.ts');
            class FormProject extends Dropdown_1.default {
                constructor(link) {
                    super('Project');
                    this.link = link;
                    this.projects = new ProjectsProvider_1.ProjectsProvider();
                    this.recent = new RecentProvider_1.RecentProvider('projects');
                    this.searchProjects = this.projects.debounce(
                        this.load.bind(this),
                    );
                    this.load();
                }
                async load(search = '') {
                    const projects = await this.projects.getProjects(
                        this.link.workspacePath,
                        search,
                    );
                    this.updateItems(
                        projects.data.group.projects.nodes,
                        this.recent.get(),
                    );
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
                              classes:
                                  'gl-mr-3 gl-avatar gl-avatar-identicon gl-avatar-s32 gl-avatar-identicon-bg1',
                              children: item.name[0].toUpperCase(),
                          });
                    const label = Dom_1.Dom.create({
                        tag: 'span',
                        children: [
                            {
                                tag: 'span',
                                classes: 'gl-mr-2 gl-block',
                                children: item.name,
                            },
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
                onChange() {}
                filter(search) {
                    this.searchProjects(search);
                }
            }
            exports['default'] = FormProject;
        },

        'FormRelation.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Field_1 = _require('Field.ts');
            const Dom_1 = _require('Dom.ts');
            class FormRelation extends Field_1.default {
                constructor() {
                    const container = Dom_1.Dom.element(
                        'div',
                        'linked-issue-type-radio',
                    );
                    super('New issue', container);
                    this.value = '';
                    container.append(
                        this.radio('blocks current issue', 'blocks'),
                        this.radio('is blocked by current issue', 'is_blocked_by'),
                        this.radio('relates to current issue', 'related'),
                    );
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
            exports['default'] = FormRelation;
        },

        'FormTitle.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Dom_1 = _require('Dom.ts');
            const Field_1 = _require('Field.ts');
            class FormTitle extends Field_1.default {
                constructor() {
                    const input = Dom_1.Dom.create({
                        tag: 'input',
                        classes: 'gl-form-input gl-mb-3 form-control is-valid',
                        attrs: {placeholder: 'Add a title'},
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
            exports['default'] = FormTitle;
        },

        'IssueAssignee.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssueBlock_1 = _require('IssueBlock.ts');
            const UserComponent_1 = _require('UserComponent.ts');
            class IssueAssignee extends IssueBlock_1.default {
                constructor(issue) {
                    super(
                        'Assignee',
                        issue.assignees.nodes.map((assignee) =>
                            new UserComponent_1.UserComponent(assignee).getElement(),
                        ),
                        'gl-flex gl-flex-col gl-gap-3',
                    );
                }
            }
            exports['default'] = IssueAssignee;
        },

        'IssueBlock.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            class IssueBlock extends Component_1.default {
                constructor(title = '', content, classes = '') {
                    super('div', {
                        classes: 'glp-block',
                        children: [
                            {
                                tag: 'div',
                                classes:
                                    'gl-flex gl-items-center gl-font-bold gl-leading-20 gl-text-gray-900',
                                children: title,
                            },
                            {
                                tag: 'div',
                                classes,
                                children: content,
                            },
                        ],
                    });
                }
            }
            exports['default'] = IssueBlock;
        },

        'IssueIteration.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssueBlock_1 = _require('IssueBlock.ts');
            class IssueIteration extends IssueBlock_1.default {
                constructor(issue) {
                    super(
                        'Iteration',
                        issue.iteration
                            ? [
                                  issue.iteration.iterationCadence.title,
                                  ': ',
                                  new Date(
                                      issue.iteration.startDate,
                                  ).toLocaleDateString(),
                                  ' - ',
                                  new Date(
                                      issue.iteration.dueDate,
                                  ).toLocaleDateString(),
                              ].join('')
                            : '',
                    );
                }
            }
            exports['default'] = IssueIteration;
        },

        'IssueLabels.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssueBlock_1 = _require('IssueBlock.ts');
            const LabelComponent_1 = _require('LabelComponent.ts');
            const Dom_1 = _require('Dom.ts');
            class IssueLabels extends IssueBlock_1.default {
                constructor(issue) {
                    super(
                        'Labels',
                        Dom_1.Dom.create({
                            tag: 'div',
                            classes: 'issuable-show-labels',
                            children: issue.labels.nodes.map((label) =>
                                new LabelComponent_1.LabelComponent(
                                    label,
                                ).getElement(),
                            ),
                        }),
                    );
                }
            }
            exports['default'] = IssueLabels;
        },

        'IssueLoader.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            class IssueLoader extends Component_1.default {
                constructor() {
                    super('div');
                    this.addClassName('glp-modal-loader');
                    const loaderInner = document.createElement('div');
                    loaderInner.classList.add('glp-modal-loader-inner');
                    this.element.appendChild(loaderInner);
                }
            }
            exports['default'] = IssueLoader;
        },

        'IssueMergeRequests.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssueBlock_1 = _require('IssueBlock.ts');
            const MergeRequestComponent_1 = _require('MergeRequestComponent.ts');
            class IssueMergeRequests extends IssueBlock_1.default {
                constructor(issue) {
                    super(
                        'Merge requests',
                        issue.relatedMergeRequests.nodes.map((mr) =>
                            new MergeRequestComponent_1.MergeRequestComponent(
                                mr,
                            ).getElement(),
                        ),
                    );
                }
            }
            exports['default'] = IssueMergeRequests;
        },

        'IssueMilestone.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssueBlock_1 = _require('IssueBlock.ts');
            class IssueMilestone extends IssueBlock_1.default {
                constructor(issue) {
                    super('Milestone', issue.milestone ? issue.milestone.title : '');
                }
            }
            exports['default'] = IssueMilestone;
        },

        'IssueModalContent.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.IssueModalContent = void 0;
            const Component_1 = _require('Component.ts');
            const IssueTitle_1 = _require('IssueTitle.ts');
            const IssueAssignee_1 = _require('IssueAssignee.ts');
            const IssueLabels_1 = _require('IssueLabels.ts');
            const IssueMilestone_1 = _require('IssueMilestone.ts');
            const IssueIteration_1 = _require('IssueIteration.ts');
            const IssueMergeRequests_1 = _require('IssueMergeRequests.ts');
            class IssueModalContent extends Component_1.default {
                constructor() {
                    super('div', {classes: 'glp-issue-modal-inner'});
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
                    this.element.replaceChildren(
                        ...components.map((Component) =>
                            new Component(issue).getElement(),
                        ),
                    );
                }
            }
            exports.IssueModalContent = IssueModalContent;
        },

        'IssueTitle.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssueBlock_1 = _require('IssueBlock.ts');
            const StatusComponent_1 = _require('StatusComponent.ts');
            const Dom_1 = _require('Dom.ts');
            class IssueTitle extends IssueBlock_1.default {
                constructor(issue) {
                    super(
                        issue.title,
                        Dom_1.Dom.element('div', '', [
                            new StatusComponent_1.StatusComponent(
                                issue.state === 'opened',
                            ).getElement(),
                            Dom_1.Dom.create({
                                tag: 'div',
                                styles: {maxHeight: '100px'},
                                classes: 'gl-text-sm gl-text-gray-500, gl-truncate',
                                children: issue.description,
                            }),
                        ]),
                    );
                }
            }
            exports['default'] = IssueTitle;
        },

        'AutocompleteModal.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Component_1 = _require('Component.ts');
            const DropdownList_1 = _require('DropdownList.ts');
            const DropdownSearch_1 = _require('DropdownSearch.ts');
            const DropdownModal_1 = _require('DropdownModal.ts');
            class AutocompleteModal extends Component_1.default {
                constructor(onSelect, renderItem, search) {
                    super('div', {
                        classes: 'gl-relative gl-w-full gl-new-dropdown !gl-block',
                    });
                    const modalSearch = new DropdownSearch_1.DropdownSearch(search);
                    this.list = new DropdownList_1.DropdownList(
                        renderItem,
                        onSelect,
                    );
                    this.modal = new DropdownModal_1.DropdownModal(
                        modalSearch.getElement(),
                        this.list.getElement(),
                    );
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
            exports['default'] = AutocompleteModal;
        },

        'Cache.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            class Cache {
                isValid(item) {
                    if (item) {
                        return (
                            item.expirationDate === 'lifetime' ||
                            new Date(item.expirationDate) > new Date()
                        );
                    }
                    return false;
                }
                getItem(key) {
                    try {
                        return JSON.parse(localStorage.getItem(key) || '');
                    } catch (e) {
                        return undefined;
                    }
                }
                get(key) {
                    try {
                        const data = this.getItem(this.key(key));
                        if (this.isValid(data)) {
                            return data.value;
                        }
                    } catch (e) {
                        return undefined;
                    }
                    return undefined;
                }
                set(key, value, minutes) {
                    localStorage.setItem(
                        this.key(key),
                        JSON.stringify({
                            expirationDate: this.expirationDate(minutes),
                            value,
                        }),
                    );
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
                        if (
                            key.startsWith(Cache.prefix) &&
                            !this.isValid(this.getItem(key))
                        ) {
                            localStorage.removeItem(key);
                        }
                    }
                }
            }
            Cache.prefix = 'glp-';
            exports['default'] = Cache;
        },

        'Dom.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.Dom = void 0;
            class Dom {
                static create(data) {
                    const element = document.createElement(data.tag);
                    if (data.classes) {
                        element.className = data.classes;
                    }
                    if (typeof data.children === 'string') {
                        element.innerHTML = data.children;
                    } else if (data.children) {
                        const children = Array.isArray(data.children)
                            ? data.children
                            : [data.children];
                        element.append(
                            ...children.map((item) =>
                                item instanceof HTMLElement ||
                                item instanceof SVGElement
                                    ? item
                                    : Dom.create(item),
                            ),
                        );
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
                            const name = key.replace(
                                /[A-Z]/g,
                                (c) => `-${c.toLowerCase()}`,
                            );
                            element.style.setProperty(name, value);
                        });
                    }
                    return element;
                }
                static element(tag, classes, children) {
                    return Dom.create({tag, classes, children});
                }
                static createSvg(data) {
                    const element = document.createElementNS(
                        'http://www.w3.org/2000/svg',
                        data.tag,
                    );
                    if (data.classes) {
                        element.setAttribute('class', data.classes);
                    }
                    if (typeof data.children === 'string') {
                        element.innerHTML = data.children;
                    } else if (data.children) {
                        const children = Array.isArray(data.children)
                            ? data.children
                            : [data.children];
                        element.append(
                            ...children.map((item) =>
                                item instanceof SVGElement
                                    ? item
                                    : Dom.createSvg(item),
                            ),
                        );
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
                            const name = key.replace(
                                /[A-Z]/g,
                                (c) => `-${c.toLowerCase()}`,
                            );
                            element.style.setProperty(name, value);
                        });
                    }
                    return element;
                }
                static elementSvg(tag, classes, children) {
                    return Dom.createSvg({tag, classes, children});
                }
            }
            exports.Dom = Dom;
        },

        'IssueLink.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.IssueLink = void 0;
            class IssueLink {
                static parseLink(link) {
                    if (!IssueLink.validateLink(link)) {
                        return undefined;
                    }
                    const [projectPath, issue] = new URL(link).pathname
                        .replace(/^\//, '')
                        .split('/-/issues/');
                    const slashCount = (projectPath.match(/\//g) || []).length;
                    const workspacePath =
                        slashCount === 1
                            ? projectPath
                            : projectPath.replace(/\/[^/]+$/, '');
                    return {
                        issue: issue.replace(/\D/g, ''),
                        projectPath,
                        workspacePath,
                    };
                }
                static validateLink(link) {
                    return Boolean(
                        typeof link === 'string' && link.includes('/-/issues/'),
                    );
                }
            }
            exports.IssueLink = IssueLink;
        },

        'GitlabProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.GitlabProvider = void 0;
            const Cache_1 = _require('Cache.ts');
            class GitlabProvider {
                constructor() {
                    this.cache = new Cache_1.default();
                    this.url = 'https://gitlab.com/api/v4/';
                    this.graphqlApi = 'https://gitlab.com/api/graphql';
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
                        body: JSON.stringify({variables, query}),
                        headers: this.headers(),
                    });
                    return response.json();
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
        },

        'IssueProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.IssueProvider = void 0;
            const GitlabProvider_1 = _require('GitlabProvider.ts');
            const issue_1 = _require('issue.ts');
            class IssueProvider extends GitlabProvider_1.GitlabProvider {
                async getIssue(projectId, issueId) {
                    return await this.queryCached(
                        `issue-${projectId}-${issueId}`,
                        issue_1.issueQuery,
                        {
                            projectPath: projectId,
                            iid: issueId,
                        },
                        2,
                    );
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
                    return await this.query(issue_1.issueMutation, {input});
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
        },

        'IterationsProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.IterationsProvider = void 0;
            const GitlabProvider_1 = _require('GitlabProvider.ts');
            const iteration_1 = _require('iteration.ts');
            class IterationsProvider extends GitlabProvider_1.GitlabProvider {
                async getIterations(projectId, title = '') {
                    return await this.queryCached(
                        `iterations-${projectId} `,
                        iteration_1.iterationQuery,
                        {
                            fullPath: projectId,
                            title,
                            state: 'opened',
                        },
                        title !== '' ? 0.5 : 20,
                    );
                }
            }
            exports.IterationsProvider = IterationsProvider;
        },

        'LabelsProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.LabelsProvider = void 0;
            const GitlabProvider_1 = _require('GitlabProvider.ts');
            const label_1 = _require('label.ts');
            class LabelsProvider extends GitlabProvider_1.GitlabProvider {
                async getLabels(projectId, search = '') {
                    return this.queryCached(
                        `labels-${projectId}-${search}`,
                        label_1.labelsQuery,
                        {
                            fullPath: projectId,
                            searchTerm: search,
                        },
                        search === '' ? 20 : 0.5,
                    );
                }
            }
            exports.LabelsProvider = LabelsProvider;
        },

        'MilestonesProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.MilestonesProvider = void 0;
            const GitlabProvider_1 = _require('GitlabProvider.ts');
            const milestone_1 = _require('milestone.ts');
            class MilestonesProvider extends GitlabProvider_1.GitlabProvider {
                async getMilestones(projectId, title = '') {
                    return await this.queryCached(
                        `milestones-${projectId}-${title}`,
                        milestone_1.milestoneQuery,
                        {
                            fullPath: projectId,
                            state: 'active',
                            title,
                        },
                        title === '' ? 20 : 0.5,
                    );
                }
            }
            exports.MilestonesProvider = MilestonesProvider;
        },

        'ProjectsProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.ProjectsProvider = void 0;
            const GitlabProvider_1 = _require('GitlabProvider.ts');
            const project_1 = _require('project.ts');
            class ProjectsProvider extends GitlabProvider_1.GitlabProvider {
                async getProjects(projectId, search = '') {
                    return await this.queryCached(
                        `projects-${projectId}-${search}`,
                        project_1.projectsQuery,
                        {
                            fullPath: projectId,
                            search,
                        },
                        search === '' ? 20 : 0.5,
                    );
                }
            }
            exports.ProjectsProvider = ProjectsProvider;
        },

        'RecentProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.RecentProvider = void 0;
            const Cache_1 = _require('Cache.ts');
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
                    this.cache.set(
                        this.key,
                        [
                            ...items,
                            ...this.get().filter((el) => !itemsId.includes(el.id)),
                        ],
                        'lifetime',
                    );
                }
            }
            exports.RecentProvider = RecentProvider;
        },

        'UsersProvider.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.UsersProvider = void 0;
            const GitlabProvider_1 = _require('GitlabProvider.ts');
            const user_1 = _require('user.ts');
            class UsersProvider extends GitlabProvider_1.GitlabProvider {
                async getUsers(projectId, search = '') {
                    return await this.queryCached(
                        `users-${projectId}-${search}`,
                        user_1.userQuery,
                        {
                            fullPath: projectId,
                            search,
                        },
                        search === '' ? 20 : 0.5,
                    );
                }
            }
            exports.UsersProvider = UsersProvider;
        },

        'issue.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            exports.issueMutation =
                exports.issuesQuery =
                exports.issueQuery =
                    void 0;
            const label_1 = _require('label.ts');
            const user_1 = _require('user.ts');
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
        },

        'iteration.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
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
        },

        'label.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
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
        },

        'milestone.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
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
        },

        'project.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
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
        },

        'user.ts': (_unused_module, exports) => {
            Object.defineProperty(exports, '__esModule', {value: true});
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
        },

        'ClearCacheService.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const Cache_1 = _require('Cache.ts');
            class ClearCacheService {
                constructor() {
                    this.cache = new Cache_1.default();
                }
                init() {
                    this.cache.clearInvalid();
                    window.setInterval(
                        this.cache.clearInvalid.bind(this.cache),
                        60 * 1000,
                    );
                }
            }
            exports['default'] = ClearCacheService;
        },

        'CreateRelatedIssue.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const CreateRelatedIssueModal_1 = _require('CreateRelatedIssueModal.ts');
            const CreateButton_1 = _require('CreateButton.ts');
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
            exports['default'] = CreateRelatedIssue;
        },

        'ImagePreview.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const ImagePreviewModal_1 = _require('ImagePreviewModal.ts');
            class ImagePreview {
                constructor() {
                    this.modal = new ImagePreviewModal_1.default();
                }
                init() {
                    document.body.addEventListener('click', this.onClick.bind(this));
                }
                onClick(event) {
                    const element = this.getAnchor(event.target);
                    if (!element) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.modal.show(element.href);
                    return false;
                }
                validate(element) {
                    return (
                        element.classList.contains('no-attachment-icon') &&
                        /\.(png|jpg|jpeg|heic)$/.test(element.href.toLowerCase())
                    );
                }
                getAnchor(element) {
                    if (!element) {
                        return undefined;
                    }
                    if (element instanceof HTMLAnchorElement) {
                        return this.validate(element) ? element : undefined;
                    }
                    if (
                        element instanceof HTMLImageElement &&
                        element.parentElement instanceof HTMLAnchorElement
                    ) {
                        return this.validate(element.parentElement)
                            ? element.parentElement
                            : undefined;
                    }
                    return undefined;
                }
            }
            exports['default'] = ImagePreview;
        },

        'IssuePreview.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const IssuePreviewModal_1 = _require('IssuePreviewModal.ts');
            const IssueLink_1 = _require('IssueLink.ts');
            const IssueProvider_1 = _require('IssueProvider.ts');
            class IssuePreview {
                constructor() {
                    this.modal = new IssuePreviewModal_1.default();
                    this.issue = new IssueProvider_1.IssueProvider();
                }
                init() {
                    this.intendHover(
                        (element) =>
                            IssueLink_1.IssueLink.validateLink(element.href),
                        this.onHover.bind(this),
                        this.onLeave.bind(this),
                    );
                }
                async onHover(event) {
                    const link = IssueLink_1.IssueLink.parseLink(event.target.href);
                    if (link) {
                        this.modal.show(event);
                        const issue = await this.issue.getIssue(
                            link.projectPath,
                            link.issue,
                        );
                        this.modal.updateContent(issue.data.project.issue);
                        this.modal.fixPosition(event);
                    }
                }
                onLeave() {
                    this.modal.hide();
                }
                intendHover(validate, mouseover, mouseleave, timeout = 500) {
                    let hover = false;
                    let id = 0;
                    const onHover = (event) => {
                        if (!event.target || !validate(event.target)) {
                            return;
                        }
                        const element = event.target;
                        hover = true;
                        element.addEventListener(
                            'mouseleave',
                            (ev) => {
                                mouseleave.call(element, ev);
                                clearTimeout(id);
                                hover = false;
                            },
                            {once: true},
                        );
                        clearTimeout(id);
                        id = window.setTimeout(() => {
                            if (hover) {
                                mouseover.call(element, event);
                            }
                        }, timeout);
                    };
                    document.body.addEventListener('mouseover', onHover);
                }
            }
            exports['default'] = IssuePreview;
        },

        'RelatedIssueAutocomplete.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const RelatedIssuesAutocompleteModal_1 = _require(
                'RelatedIssuesAutocompleteModal.ts',
            );
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
                    const input = section.querySelector(
                        '#add-related-issues-form-input',
                    );
                    if (input) {
                        this.modal.init(input);
                    }
                }
            }
            exports['default'] = RelatedIssueAutocomplete;
        },

        'index.ts': (_unused_module, exports, _require) => {
            Object.defineProperty(exports, '__esModule', {value: true});
            const create_related_issue_css_1 = _require('create-related-issue.css');
            const image_preview_css_1 = _require('image-preview.css');
            const issue_preview_css_1 = _require('issue-preview.css');
            const style = document.createElement('style');
            style.textContent = [
                create_related_issue_css_1.default,
                image_preview_css_1.default,
                issue_preview_css_1.default,
            ].join('\n');
            style.id = 'glp-style';
            document.head.append(style);
        },
    };

    var _module_cache = {};

    function _require(moduleId) {
        var cachedModule = _module_cache[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }

        var module = (_module_cache[moduleId] = {
            exports: {},
        });

        _modules[moduleId](module, module.exports, _require);

        return module.exports;
    }

    (() => {
        _require.d = (exports, definition) => {
            for (var key in definition) {
                if (_require.o(definition, key) && !_require.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    });
                }
            }
        };
    })();

    (() => {
        _require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();

    (() => {
        _require.r = (exports) => {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module',
                });
            }
            Object.defineProperty(exports, '__esModule', {value: true});
        };
    })();

    var _exports = {};

    (() => {
        var exports = _exports;
        var _unused_export;

        _unused_export = {value: true};
        _require('index.ts');
        const IssuePreview_1 = _require('IssuePreview.ts');
        const ImagePreview_1 = _require('ImagePreview.ts');
        const CreateRelatedIssue_1 = _require('CreateRelatedIssue.ts');
        const RelatedIssueAutocomplete_1 = _require('RelatedIssueAutocomplete.ts');
        const ClearCacheService_1 = _require('ClearCacheService.ts');
        [
            ClearCacheService_1.default,
            ImagePreview_1.default,
            IssuePreview_1.default,
            CreateRelatedIssue_1.default,
            RelatedIssueAutocomplete_1.default,
        ].forEach((Service) => new Service().init());
    })();
})();
