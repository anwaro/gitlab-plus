import Component from '../Component';
import {IssueSchema} from '../../types/IssueSchema';
import IssueTitle from './IssueTitle';
import IssueAssignee from './IssueAssignee';
import IssueLabels from './IssueLabels';
import IssueMilestone from './IssueMilestone';
import IssueIteration from './IssueIteration';

export class IssueModalContent extends Component<HTMLDivElement> {
    private components = [
        new IssueTitle(),
        new IssueAssignee(),
        new IssueLabels(),
        new IssueMilestone(),
        new IssueIteration(),
    ];

    constructor() {
        super(document.createElement('div'));

        this.addClassName('glp-issue-modal-inner');
    }

    update(issue: IssueSchema) {
        this.element.innerHTML = '';

        this.components.forEach((component) => {
            component.update(issue);
            this.element.appendChild(component.getElement());
        });
    }
}
