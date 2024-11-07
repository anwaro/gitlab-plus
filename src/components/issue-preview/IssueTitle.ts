import IssueBlock from './IssueBlock';
import {Issue} from '../../types/Issue';

export default class IssueTitle extends IssueBlock {
    constructor(issue: Issue) {
        super(issue.title, '');
    }
}
