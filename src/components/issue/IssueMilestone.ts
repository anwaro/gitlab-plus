import IssueBlock from './IssueBlock';
import {IssueSchema} from '../../types/IssueSchema';

export default class IssueMilestone extends IssueBlock {
    constructor() {
        super('Milestone');
    }

    update(issue: IssueSchema) {
        this.updateContent(issue.milestone ? issue.milestone.title : '');
    }
}
