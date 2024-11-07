export type IssueLink = {
    issue: string;
    workspacePath: string;
    projectPath: string;
};

export class IssueLinks {
    static linkReady = 'glp-link-ready';

    static parseLink(link: string): IssueLink | undefined {
        if (!link.includes('/-/issues/')) {
            return undefined;
        }
        const [projectPath, issue] = new URL(link).pathname
            .replace(/^\//, '')
            .split('/-/issues/');

        const slashCount = (projectPath.match(/\//g) || []).length;

        const workspacePath =
            slashCount === 1 ? projectPath : projectPath.replace(/\/[^/]+$/, '');

        return {
            issue: issue.replace(/\D/g, ''),
            projectPath,
            workspacePath,
        };
    }

    static getLinks() {
        const elements = [
            ...document.querySelectorAll<HTMLAnchorElement>('a[href*=issues]'),
        ].filter(
            (link) =>
                !link.classList.contains(IssueLinks.linkReady) &&
                /issues\/\d+/.test(link.href),
        );

        elements.forEach((link) => {
            link.classList.add(IssueLinks.linkReady);
        });

        return elements;
    }
}
