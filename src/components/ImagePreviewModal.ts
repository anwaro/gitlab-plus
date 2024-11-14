import Component from './common/Component';
import {Dom} from '../helpers/Dom';
import {IconComponent} from './common/IconComponent';

export default class ImagePreviewModal extends Component<'div'> {
    private image = Dom.element('img', 'glp-modal-img');
    private visibleClassName = 'glp-modal-visible';

    constructor() {
        super('div', {classes: 'glp-image-preview-modal'});

        this.element.append(
            this.image,
            Dom.create({
                tag: 'div',
                classes: 'glp-modal-close',
                children: [new IconComponent('close-xs', 's24').getElement()],
                events: {
                    click: this.hide.bind(this),
                },
            }),
        );
        this.mount(document.body);
    }

    show(src: string) {
        this.image.src = src;
        this.element.classList.add(this.visibleClassName);
    }

    hide() {
        this.element.classList.remove(this.visibleClassName);
        this.image.src = '';
    }
}
