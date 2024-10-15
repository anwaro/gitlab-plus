import IssueBlock from './IssueBlock';
import {IssueSchema} from '../../types/IssueSchema';

export default class IssueTitle extends IssueBlock {
    update(issue: IssueSchema) {
        this.updateTitle(issue.title);
    }
}
