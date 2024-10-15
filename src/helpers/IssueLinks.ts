export class IssueLinks {
    private linkReady = 'glp-link-ready';

    parseLink(link: string) {
        const [url, issueId] = link.split('/-/issues/');
        const [_, projectId] = url.split('.com/');

        return {
            projectId: projectId.replace(/\//g, '%2F'),
            issueId: issueId.replace(/\D+/g, ''),
        };
    }

    getLinks() {
        const elements = [
            ...document.querySelectorAll<HTMLAnchorElement>('a[href*=issues]'),
        ].filter(
            (link) =>
                !link.classList.contains(this.linkReady) &&
                /issues\/\d+/.test(link.href),
        );

        elements.forEach((link) => {
            link.classList.add(this.linkReady);
        });

        return elements;
    }
}
