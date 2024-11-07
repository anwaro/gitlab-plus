import Component from '../common/Component';

export default class ImageElement extends Component<'img'> {
    constructor() {
        super('img', {classes: 'glp-modal-img'});
    }

    updateSrc(src: string) {
        this.element.src = src;
    }
}
