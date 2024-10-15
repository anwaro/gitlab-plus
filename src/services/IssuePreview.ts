import {Service} from '../types/Service';
import IssueModal from '../components/IssueModal';
import {IssueLinks} from '../helpers/IssueLinks';
import intendHover from '../helpers/intendHover';
import {IssueProvider} from '../providers/IssueProvider';

export default class IssuePreview implements Service {
    private modal = new IssueModal();
    private issue = new IssueProvider();
    private issueLink = new IssueLinks();

    public init() {
        this.initLinks();

        setInterval(this.initLinks.bind(this), 3000);
    }

    initLinks() {
        this.issueLink.getLinks().forEach((link) => {
            intendHover(link, this.onHover.bind(this));
            link.addEventListener('mouseleave', this.onLeave.bind(this));
        });
    }

    async onHover(event: HTMLElementEventMap['mouseenter']) {
        this.modal.show(event);

        const element = event.target as HTMLAnchorElement;
        const {projectId, issueId} = this.issueLink.parseLink(element.href);
        const issue = await this.issue.getIssue(projectId, issueId);

        this.modal.updateContent(issue);
    }

    onLeave() {
        this.modal.hide();
    }
}
