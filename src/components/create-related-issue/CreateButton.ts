import Component from '../common/Component';

export default class CreateButton extends Component<'button'> {
    constructor() {
        super('button', {
            classes: 'btn btn-default btn-sm gl-button',
            children: {
                tag: 'span',
                classes: 'gl-button-text',
                children: 'Create related issue',
            },
        });
    }

    init() {
        const parent = document.querySelector(
            '#related-issues [data-testid="crud-actions"]',
        );

        if (parent && !this.element.parentNode) {
            this.mount(parent as HTMLElement);
        }
    }
}
