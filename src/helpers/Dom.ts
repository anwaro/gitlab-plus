type Attr<K extends keyof HTMLElementTagNameMap> = Partial<
    Record<keyof HTMLElementTagNameMap[K], unknown>
>;

type Events<E extends keyof HTMLElementEventMap = keyof HTMLElementEventMap> =
    Partial<Record<E, (this: HTMLElement, ev: HTMLElementEventMap[E]) => void>>;

export type HTMLData<
    K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
> = {
    tag: K;
    classes?: string;
    attrs?: Attr<K> & Record<string, string>;
    events?: Events;
    styles?: Partial<CSSStyleDeclaration>;
    children?: (HTMLData | HTMLElement | SVGElement)[] | string;
};

export class Dom {
    static create<
        K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
    >(data: HTMLData<K>): HTMLElementTagNameMap[K] {
        const element = document.createElement(data.tag);
        if (data.classes) {
            element.className = data.classes;
        }
        if (typeof data.children === 'string') {
            element.innerHTML = data.children;
        } else if (data.children) {
            element.append(
                ...data.children.map((item) =>
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
        children?: HTMLData<K>['children'],
    ): HTMLElementTagNameMap[K] {
        return Dom.create({tag, classes, children});
    }
}
