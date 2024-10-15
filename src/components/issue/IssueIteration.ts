import IssueBlock from './IssueBlock';
import {IssueSchema} from '../../types/IssueSchema';

export default class IssueIteration extends IssueBlock {
    constructor() {
        super('Iteration');
    }

    update(issue: IssueSchema) {
        this.updateContent(
            issue.iteration
                ? [issue.iteration.start_date, issue.iteration.due_date].join(' - ')
                : '',
        );
    }
}
