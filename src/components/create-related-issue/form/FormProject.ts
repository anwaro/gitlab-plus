import Dropdown from '../../common/form/Dropdown';
import {Dom} from '../../../helpers/Dom';
import {ProjectsProvider} from '../../../providers/ProjectsProvider';
import {RecentProvider} from '../../../providers/RecentProvider';
import {Project} from '../../../types/Project';
import {IssueLink} from '../../../helpers/IssueLinks';

export default class FormProject extends Dropdown<Project> {
    private projects = new ProjectsProvider();
    private recent = new RecentProvider<Project>('projects');
    private searchProjects: (search: string) => void;

    constructor(private link: IssueLink) {
        super('Project');

        this.searchProjects = this.projects.debounce(this.load.bind(this));
        this.load();
    }

    async load(search = '') {
        const projects = await this.projects.getProjects(
            this.link.workspacePath,
            search,
        );
        this.updateItems(projects.data.group.projects.nodes, this.recent.get());
    }

    getValue() {
        const [value] = this.value;
        if (value) {
            this.recent.add(value);
        }
        return value;
    }

    renderItem(item: Project) {
        const image = item.avatarUrl
            ? Dom.create({
                  tag: 'img',
                  attrs: {
                      src: item.avatarUrl,
                      alt: item.name,
                  },
                  classes: 'gl-mr-3 gl-avatar gl-avatar-s32',
              })
            : Dom.create({
                  tag: 'div',
                  classes:
                      'gl-mr-3 gl-avatar gl-avatar-identicon gl-avatar-s32 gl-avatar-identicon-bg1',
                  html: item.name[0].toUpperCase(),
              });

        const label = Dom.create({
            tag: 'span',
            children: [
                {tag: 'span', classes: 'gl-mr-2 gl-block', html: item.name},
                {
                    tag: 'span',
                    classes: 'gl-block gl-text-secondary',
                    html: item.nameWithNamespace,
                },
            ],
        });

        return Dom.create({
            tag: 'span',
            classes: 'gl-new-dropdown-item-text-wrapper',
            children: [
                {
                    tag: 'span',
                    classes: 'gl-flex gl-w-full gl-items-center',
                    children: [image, label],
                },
            ],
        });
    }

    renderLabel([item]: Project[]) {
        return Dom.create({
            tag: 'div',
            html: item ? item.nameWithNamespace : 'Select project',
        });
    }

    onChange() {}

    filter(search: string): void {
        this.searchProjects(search);
    }
}
