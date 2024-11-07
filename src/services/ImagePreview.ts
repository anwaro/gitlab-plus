import {Service} from '../types/Service';
import ImagePreviewModal from '../components/ImagePreviewModal';
import {ImageLinks} from '../helpers/ImageLinks';

export default class ImagePreview implements Service {
    private modal = new ImagePreviewModal();
    private imageLink = new ImageLinks();

    public init() {
        this.initLinks();

        setInterval(this.initLinks.bind(this), 3000);
    }

    initLinks() {
        this.imageLink.getLinks().forEach((link) => {
            link.addEventListener('click', this.onClick.bind(this));
        });
    }

    onClick(event: HTMLElementEventMap['click']) {
        if (!event.target) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.modal.show(this.elementSrc(event.target));
        return false;
    }

    elementSrc(element: EventTarget) {
        if (element instanceof HTMLAnchorElement) {
            return element.href;
        }
        if (element instanceof HTMLImageElement) {
            return (element.parentElement as HTMLAnchorElement).href;
        }

        return '';
    }
}
