import Component from './Component';
import IssueLoader from './issue/IssueLoader';
import {IssueSchema} from '../types/IssueSchema';
import {IssueModalContent} from './issue/IssueModalContent';

export default class IssueModal extends Component<HTMLDivElement> {
    private loader = new IssueLoader();
    private content = new IssueModalContent();
    private visibleClassName = 'glp-modal-visible';

    constructor() {
        super(document.createElement('div'));
        this.addClassName('glp-issue-modal');
        document.body.appendChild(this.element);
    }

    show(event: HTMLElementEventMap['mouseenter']) {
        this.element.appendChild(this.loader.getElement());
        this.element.style.left = `${event.pageX + 5}px`;
        this.element.style.top = `${event.pageY + 5}px`;
        this.element.classList.add(this.visibleClassName);
    }

    hide() {
        this.element.classList.remove(this.visibleClassName);
        this.clear();
    }

    clear() {
        this.element.innerHTML = '';
    }

    updateContent(issue: IssueSchema) {
        this.content.update(issue);
        this.clear();
        this.element.appendChild(this.content.getElement());
    }
}
