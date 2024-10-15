import {IssueSchema} from '../../types/IssueSchema';
import {LabelSchema} from '../../types/LabelSchema';
import IssueBlock from './IssueBlock';

export default class IssueLabels extends IssueBlock {
    constructor() {
        super('Labels');
    }

    update(issue: IssueSchema) {
        this.updateContent(
            issue.labels.map((label) => this.createLabel(label)).join(''),
        );
    }

    private createLabel(label: LabelSchema) {
        let content = `<span class="gl-label-text">${label.name}</span>`;
        let classNames = `gl-label hide-collapsed ${
            '#FFFFFF' === label.text_color
                ? 'gl-label-text-light'
                : 'gl-label-text-dark'
        }`;

        if (label.name.includes('::')) {
            const [scope, text] = label.name.split('::');
            content = `<span class="gl-label-text">${scope}</span><span class="gl-label-text-scoped">${text}</span>`;
            classNames += ' gl-label-scoped';
        }

        return `
<span class=" ${classNames}" style="--label-background-color: ${label.color}; --label-inset-border: inset 0 0 0 2px ${label.color};">
  <span class="gl-link gl-label-link gl-label-link-underline">
    ${content}
  </span>
</span>
`;
    }
}
