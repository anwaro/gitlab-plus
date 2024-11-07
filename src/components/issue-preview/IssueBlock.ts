import Component from '../common/Component';

export default class IssueBlock extends Component<'div'> {
    constructor(title: string = '', content: HTMLElement[] | string) {
        super('div', {
            classes: 'glp-block',
            children: [
                {
                    tag: 'div',
                    classes:
                        'gl-flex gl-items-center gl-font-bold gl-leading-20 gl-text-gray-900',
                    html: title,
                },
                {
                    tag: 'div',
                    ...(typeof content === 'string'
                        ? {html: content}
                        : {children: content}),
                },
            ],
        });
    }
}
