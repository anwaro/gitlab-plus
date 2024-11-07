import Component from '../common/Component';

export default class IssueLoader extends Component<'div'> {
    constructor() {
        super('div');
        this.addClassName('glp-modal-loader');
        const loaderInner = document.createElement('div');
        loaderInner.classList.add('glp-modal-loader-inner');
        this.element.appendChild(loaderInner);
    }
}
