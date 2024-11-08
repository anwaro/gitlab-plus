import Component from '../common/Component';
import {IconComponent} from '../common/IconComponent';

export default class CloseModal extends Component<'div'> {
    constructor(onClick: () => void) {
        super('div', {
            classes: 'glp-modal-close',
            children: [new IconComponent('close-xs', 's24').getIcon()],
            events: {
                click: onClick,
            },
        });
    }
}
