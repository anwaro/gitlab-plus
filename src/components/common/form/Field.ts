import Component from '../Component';

export default class Field extends Component<'fieldset'> {
    constructor(title: string, input: HTMLElement, hint = '') {
        super('fieldset', {
            classes: 'form-group gl-form-group gl-w-full is-valid',
            children: [
                {
                    tag: 'legend',
                    classes: 'bv-no-focus-ring col-form-label pt-0 col-form-label',
                    html: title,
                },
                input,
                {
                    tag: 'small',
                    html: hint,
                },
            ],
        });
    }
}
