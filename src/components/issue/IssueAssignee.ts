import IssueBlock from './IssueBlock';
import {IssueSchema} from '../../types/IssueSchema';

export default class IssueAssignee extends IssueBlock {
    constructor() {
        super('Assignee');
    }

    update(issue: IssueSchema) {
        this.updateContent(
            issue.assignees.map((assignee) => this.createContent(assignee)).join(''),
        );
    }

    createContent(assignee: IssueSchema['assignees'][number]) {
        return `
<div class="assignee-grid gl-flex gl-w-full gl-items-center">
    <img src="${assignee.avatar_url}" alt="${assignee.name}'s avatar" class="gl-avatar gl-avatar-circle gl-avatar-s24"   >
    <span>${assignee.name}</span>
</div>`;
    }
}
