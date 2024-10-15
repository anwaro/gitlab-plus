import Component from './Component';
import ImageElement from './image/ImageElement';
import CloseModal from './image/CloseModal';

export default class ImageModal extends Component<HTMLDivElement> {
    private image = new ImageElement();
    private close = new CloseModal();
    private visibleClassName = 'glp-modal-visible';

    constructor() {
        super(document.createElement('div'));
        this.addClassName('glp-image-modal');
        this.element.appendChild(this.image.getElement());
        this.element.appendChild(this.close.getElement());
        this.close.onClick(this.hide.bind(this));
        document.body.appendChild(this.element);
    }

    show(src: string) {
        this.image.updateSrc(src);
        this.element.classList.add(this.visibleClassName);
    }

    hide() {
        this.element.classList.remove(this.visibleClassName);
        this.image.updateSrc('');
    }
}
