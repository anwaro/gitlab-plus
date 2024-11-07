import Component from '../common/Component';

export default class CloseModal extends Component<'div'> {
    constructor(onClick: () => void) {
        super('div', {
            classes: 'glp-modal-close',
            html: 'X',
            events: {
                click: onClick,
            },
        });
    }
}
