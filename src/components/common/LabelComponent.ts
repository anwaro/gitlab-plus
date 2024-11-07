import Component from './Component';
import {Label} from '../../types/Label';
import {Dom, HTMLData} from '../../helpers/Dom';
import {IconComponent} from './IconComponent';

export class LabelComponent extends Component<'span'> {
    constructor(label: Label, onRemove?: () => void) {
        super('span');
        this.setClasses(label);
        this.element.append(...this.html(label, onRemove));
    }

    html(label: Label, onRemove?: () => void) {
        const [scope, text] = label.title.split('::');
        const items: HTMLData[] = [
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
            Dom.create({
                tag: 'span',
                classes: 'gl-link gl-label-link gl-label-link-underline',
                children: items,
            }),
        ];

        if (onRemove) {
            elements.push(
                Dom.create({
                    tag: 'button',
                    classes:
                        'btn gl-label-close !gl-p-0 btn-reset btn-sm gl-button btn-reset-tertiary',
                    attrs: {
                        type: 'button',
                    },
                    events: {click: onRemove},
                    children: [
                        {
                            tag: 'span',
                            classes: 'gl-button-text',
                            children: [new IconComponent('close').getIcon()],
                        },
                    ],
                }),
            );
        }

        return elements;
    }

    private setClasses(label: Label) {
        this.addClassName('gl-label', 'hide-collapsed');
        this.addClassName(
            label.textColor ? 'gl-label-text-light' : 'gl-label-text-dark',
        );

        if (label.title.includes('::')) {
            this.addClassName('gl-label-scoped');
        }

        this.element.style.setProperty('--label-background-color', label.color);
        this.element.style.setProperty(
            '--label-inset-border',
            `inset 0 0 0 2px ${label.color}`,
        );
    }
}
