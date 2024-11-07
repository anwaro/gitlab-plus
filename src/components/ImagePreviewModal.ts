import Component from './common/Component';
import ImageElement from './image-preview/ImageElement';
import CloseModal from './image-preview/CloseModal';

export default class ImagePreviewModal extends Component<'div'> {
    private image = new ImageElement();
    private visibleClassName = 'glp-modal-visible';

    constructor() {
        super('div', {classes: 'glp-image-preview-modal'});

        this.element.append(
            this.image.getElement(),
            new CloseModal(this.hide.bind(this)).getElement(),
        );
        this.mount(document.body);
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
