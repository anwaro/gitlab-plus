import {Service} from '../types/Service';
import IssuePreviewModal from '../components/IssuePreviewModal';
import {IssueLinks} from '../helpers/IssueLinks';
import intendHover from '../helpers/intendHover';
import {IssueProvider} from '../providers/IssueProvider';

export default class IssuePreview implements Service {
    private modal = new IssuePreviewModal();
    private issue = new IssueProvider();

    public init() {
        this.initLinks();

        setInterval(this.initLinks.bind(this), 3000);
    }

    initLinks() {
        IssueLinks.getLinks().forEach((link) => {
            intendHover(link, this.onHover.bind(this));
            link.addEventListener('mouseleave', this.onLeave.bind(this));
        });
    }

    async onHover(event: HTMLElementEventMap['mouseenter']) {
        this.modal.show(event);

        const element = event.target as HTMLAnchorElement;
        const link = IssueLinks.parseLink(element.href);
        if (link) {
            const issue = await this.issue.getIssue(link.projectPath, link.issue);
            this.modal.updateContent(issue.data.project.issue);
            this.modal.fixPosition(event);
        }
    }

    onLeave() {
        this.modal.hide();
    }
}
