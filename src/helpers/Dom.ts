type HtmlAttr<K extends keyof HTMLElementTagNameMap> = Partial<
    Record<keyof HTMLElementTagNameMap[K], unknown>
>;

type HtmlEvents<E extends keyof HTMLElementEventMap = keyof HTMLElementEventMap> =
    Partial<Record<E, (this: HTMLElement, ev: HTMLElementEventMap[E]) => void>>;

export type HtmlData<
    K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
> = {
    tag: K;
    classes?: string;
    attrs?: HtmlAttr<K> & Record<string, string>;
    events?: HtmlEvents;
    styles?: Partial<CSSStyleDeclaration>;
    children?:
        | (HtmlData | HTMLElement | SVGElement)[]
        | HtmlData
        | HTMLElement
        | SVGElement
        | string;
};

type SvgAttr<K extends keyof SVGElementTagNameMap> = Partial<
    Record<keyof SVGElementTagNameMap[K], unknown>
>;

type SvgEvents<E extends keyof SVGElementEventMap = keyof SVGElementEventMap> =
    Partial<Record<E, (this: HTMLElement, ev: SVGElementEventMap[E]) => void>>;

export type SvgData<
    K extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
> = {
    tag: K;
    classes?: string;
    attrs?: SvgAttr<K> & Record<string, string>;
    events?: SvgEvents;
    styles?: Partial<CSSStyleDeclaration>;
    children?: (SvgData | SVGElement)[] | SvgData | SVGElement | string;
};

export class Dom {
    static create<
        K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
    >(data: HtmlData<K>): HTMLElementTagNameMap[K] {
        const element = document.createElement(data.tag);
        if (data.classes) {
            element.className = data.classes;
        }
        if (typeof data.children === 'string') {
            element.innerHTML = data.children;
        } else if (data.children) {
            const children = Array.isArray(data.children)
                ? data.children
                : [data.children];

            element.append(
                ...children.map((item) =>
                    item instanceof HTMLElement || item instanceof SVGElement
                        ? item
                        : Dom.create(item),
                ),
            );
        }

        if (data.attrs) {
            Object.entries(data.attrs).forEach(([key, value]) => {
                element.setAttribute(key, value as string);
            });
        }

        if (data.events) {
            Object.entries(data.events).forEach(([name, callback]) => {
                element.addEventListener(name, callback);
            });
        }

        if (data.styles) {
            Object.entries(data.styles).forEach(([key, value]) => {
                const name = key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
                element.style.setProperty(name, value as string);
            });
        }

        return element;
    }

    static element<
        K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
    >(
        tag: K,
        classes?: string,
        children?: HtmlData<K>['children'],
    ): HTMLElementTagNameMap[K] {
        return Dom.create({tag, classes, children});
    }

    static createSvg<
        K extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
    >(data: SvgData<K>): SVGElementTagNameMap[K] {
        const element = document.createElementNS(
            'http://www.w3.org/2000/svg',
            data.tag,
        );
        if (data.classes) {
            element.setAttribute('class', data.classes);
        }
        if (typeof data.children === 'string') {
            element.innerHTML = data.children;
        } else if (data.children) {
            const children = Array.isArray(data.children)
                ? data.children
                : [data.children];
            element.append(
                ...children.map((item) =>
                    item instanceof SVGElement ? item : Dom.createSvg(item),
                ),
            );
        }

        if (data.attrs) {
            Object.entries(data.attrs).forEach(([key, value]) => {
                element.setAttribute(key, value as string);
            });
        }

        if (data.events) {
            Object.entries(data.events).forEach(([name, callback]) => {
                element.addEventListener(name, callback);
            });
        }

        if (data.styles) {
            Object.entries(data.styles).forEach(([key, value]) => {
                const name = key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
                element.style.setProperty(name, value as string);
            });
        }

        return element;
    }

    static elementSvg<
        K extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
    >(
        tag: K,
        classes?: string,
        children?: SvgData<K>['children'],
    ): SVGElementTagNameMap[K] {
        return Dom.createSvg({tag, classes, children});
    }
}
