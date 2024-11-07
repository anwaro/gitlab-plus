import Dropdown from '../../common/form/Dropdown';
import {Dom} from '../../../helpers/Dom';
import {MilestonesProvider} from '../../../providers/MilestonesProvider';
import {RecentProvider} from '../../../providers/RecentProvider';
import {IssueLink} from '../../../helpers/IssueLinks';
import {Milestone} from '../../../types/Milestone';

export default class FormMilestone extends Dropdown<Milestone> {
    private milestones = new MilestonesProvider();
    private recent = new RecentProvider<Milestone>('milestones');
    private searchMilestones: (search: string) => void;

    constructor(private link: IssueLink) {
        super('Milestone');
        this.searchMilestones = this.milestones.debounce(this.load.bind(this));

        this.load();
    }

    async load(title = '') {
        const milestones = await this.milestones.getMilestones(
            this.link.projectPath,
            title,
        );

        this.updateItems(
            milestones.data.workspace.attributes.nodes,
            this.recent.get(),
        );
    }

    getValue() {
        const [value] = this.value;
        if (value) {
            this.recent.add(value);
        }
        return value;
    }

    renderItem(item: Milestone) {
        return Dom.create({
            tag: 'span',
            classes: 'gl-new-dropdown-item-text-wrapper',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-flex gl-w-full gl-items-center',
                    children: [
                        {tag: 'span', classes: 'gl-mr-2 gl-block', html: item.title},
                    ],
                },
            ],
        });
    }

    renderLabel([item]: Milestone[]) {
        return Dom.create({
            tag: 'div',
            html: item ? item.title : 'Select milestone',
        });
    }

    onChange() {}

    filter(search: string) {
        this.searchMilestones(search);
    }
}
