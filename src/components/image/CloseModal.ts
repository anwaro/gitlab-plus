import Component from '../Component';

export default class CloseModal extends Component<HTMLDivElement> {
    constructor() {
        super(document.createElement('div'));
        this.addClassName('glp-modal-close');
        this.element.innerHTML = 'X';
    }

    onClick(callback: () => void) {
        this.element.addEventListener('click', callback);
    }
}
