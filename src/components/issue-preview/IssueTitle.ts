import IssueBlock from './IssueBlock';
import {Issue} from '../../types/Issue';
import {StatusComponent} from '../common/StatusComponent';
import {Dom} from '../../helpers/Dom';

export default class IssueTitle extends IssueBlock {
    constructor(issue: Issue) {
        super(
            issue.title,
            Dom.element('div', '', [
                new StatusComponent(issue.state === 'opened').getElement(),
                Dom.create({
                    tag: 'div',
                    styles: {maxHeight: '100px'},
                    classes: 'gl-text-sm gl-text-gray-500, gl-truncate',
                    children: issue.description,
                }),
            ]),
        );
    }
}
