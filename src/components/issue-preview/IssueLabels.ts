import {Issue} from '../../types/Issue';
import IssueBlock from './IssueBlock';
import {LabelComponent} from '../common/LabelComponent';

export default class IssueLabels extends IssueBlock {
    constructor(issue: Issue) {
        super(
            'Labels',
            issue.labels.nodes.map((label) =>
                new LabelComponent(label).getElement(),
            ),
        );
    }
}
