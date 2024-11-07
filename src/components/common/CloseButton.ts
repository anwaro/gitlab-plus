import Component from './Component';
import {IconComponent} from './IconComponent';

export default class CloseButton extends Component<'button'> {
    constructor(onClick?: () => void) {
        super('button', {
            classes:
                'btn js-issue-preview-item-remove-button gl-mr-2 btn-default btn-sm gl-button btn-default-tertiary btn-icon',
            attrs: {
                type: 'button',
            },
            events: {
                click: onClick,
            },
            children: [new IconComponent('close', 's16').getIcon()],
        });
    }
}
