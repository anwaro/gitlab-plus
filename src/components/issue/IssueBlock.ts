import Component from '../Component';

export default class IssueBlock extends Component<HTMLDivElement> {
    private titleComponent = document.createElement('div');
    private contentComponent = document.createElement('div');

    constructor(title: string = '', content: string = '') {
        super(document.createElement('div'));

        this.addClassName('glp-block');

        this.element.appendChild(this.titleComponent);
        this.titleComponent.classList.add(
            'gl-flex',
            'gl-items-center',
            'gl-font-bold',
            'gl-leading-20',
            'gl-text-gray-900',
        );
        this.updateTitle(title);

        this.element.appendChild(this.contentComponent);
        this.updateContent(content);
    }

    updateTitle(title: string) {
        this.titleComponent.innerHTML = title;
    }

    updateContent(content: string) {
        this.contentComponent.innerHTML = content;
    }
}
