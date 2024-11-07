import {GitlabProvider} from './GitlabProvider';
import {MilestonesResponse} from '../types/Milestone';
import {milestoneQuery} from './query/milestone';

export class MilestonesProvider extends GitlabProvider {
    async getMilestones(projectId: string, title: string = '') {
        return await this.queryCached<MilestonesResponse>(
            `glp-milestones-${projectId}-${title}`,
            milestoneQuery,
            {
                fullPath: projectId,
                state: 'active',
                title,
            },
            title === '' ? 20 : 0.5,
        );
    }
}
