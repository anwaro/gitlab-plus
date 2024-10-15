import Component from '../Component';

export default class ImageElement extends Component<HTMLImageElement> {
    constructor() {
        super(document.createElement('img'));
        this.addClassName('glp-modal-img');
    }

    updateSrc(src: string) {
        this.element.src = src;
    }
}
