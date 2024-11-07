import Component from './Component';

type IconNames = 'tick' | 'close' | 'empty' | 'chevron' | 'search' | 'issue';

const iconMap: Record<IconNames, string> = {
    empty: '',
    tick: 'mobile-issue-preview-close',
    close: 'close-xs',
    search: 'search',
    chevron: 'chevron-lg-down',
    issue: 'issue-type-issue',
};

export class IconComponent extends Component<'span'> {
    constructor(icon: IconNames, size: string = 's12', ...cls: string[]) {
        super('span');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        svg.classList.add('gl-icon', size, 'gl-fill-current', ...cls);
        use.setAttribute(
            'href',
            `/assets/icons-236e3b687d786d9dfe4709143a94d4c53b8d5a1f235775401e5825148297fa84.svg#${iconMap[icon]}`,
        );
        svg.appendChild(use);
        this.element.append(svg);
    }

    getIcon(): SVGSVGElement {
        return super.getElement().children[0] as SVGSVGElement;
    }
}
