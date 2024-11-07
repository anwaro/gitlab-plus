import Component from '../common/Component';
import CloseButton from '../common/CloseButton';
import {Dom} from '../../helpers/Dom';

export default class CreateRelatedIssueModalHeader extends Component<'div'> {
    constructor(onClose: () => void) {
        super('div', {
            classes:
                'crud-header gl-border-b gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-2 gl-rounded-t-form gl-border-section gl-bg-section gl-px-5 gl-py-4 gl-relative',
            children: [
                Dom.create({
                    tag: 'h2',
                    classes:
                        'gl-m-0 gl-inline-flex gl-items-center gl-gap-3 gl-text-form gl-font-bold gl-leading-normal',
                    html: 'Create related issue',
                }),
                new CloseButton(onClose).getElement(),
            ],
        });
    }
}