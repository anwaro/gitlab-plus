export class ImageLinks {
    private linkReady = 'glp-link-ready';

    getLinks() {
        const elements = [
            ...document.querySelectorAll<HTMLAnchorElement>('.no-attachment-icon'),
        ].filter(
            (link) =>
                !link.classList.contains(this.linkReady) &&
                /\.(png|jpg|jpeg|heic)$/.test(link.href),
        );

        elements.forEach((link) => {
            link.classList.add(this.linkReady);
        });

        return elements;
    }
}
