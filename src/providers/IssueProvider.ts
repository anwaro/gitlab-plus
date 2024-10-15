import {IssueSchema} from '../types/IssueSchema';
import Cache from '../services/Cache';

export class IssueProvider {
    private cache = new Cache();
    private url = 'https://gitlab.com/api/v4/';
    private path =
        'projects/:PROJECT_ID/issues?iids[]=:ISSUE_ID&with_labels_details=true';

    private async get<T>(key: string, path: string): Promise<T> {
        const cacheValue = this.cache.get<T>(key);
        if (cacheValue) {
            return cacheValue;
        }

        const response = await fetch(`${this.url}${path}`);
        const issues = await response.json();

        this.cache.set(key, issues[0]);

        return issues[0];
    }

    async getIssue(projectId: string, issueId: string) {
        return this.get<IssueSchema>(
            `glp-issue-${projectId}-${issueId}`,
            this.path
                .replace(':PROJECT_ID', projectId)
                .replace(':ISSUE_ID', issueId),
        );
    }
}
