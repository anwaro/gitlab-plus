import Component from '../Component';

export default class IssueLoader extends Component<HTMLDivElement> {
    constructor() {
        super(document.createElement('div'));
        this.addClassName('glp-modal-loader');
        const loaderInner = document.createElement('div');
        loaderInner.classList.add('glp-modal-loader-inner');
        this.element.appendChild(loaderInner);
    }
}
