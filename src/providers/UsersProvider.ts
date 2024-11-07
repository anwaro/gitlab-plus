import {GitlabProvider} from './GitlabProvider';
import {userQuery} from './query/user';
import {UsersResponse} from '../types/User';

export class UsersProvider extends GitlabProvider {
    async getUsers(projectId: string, search = '') {
        return await this.queryCached<UsersResponse>(
            `glp-users-${projectId}-${search}`,
            userQuery,
            {
                fullPath: projectId,
                search,
            },
            0.02,
        );
    }
}
