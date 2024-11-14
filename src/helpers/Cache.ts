type CacheItem = {
    expirationDate: Date | 'lifetime';
    value: unknown;
};

export default class Cache {
    static prefix = 'glp-';

    private isValid(item?: CacheItem): item is CacheItem {
        if (item) {
            return (
                item.expirationDate === 'lifetime' ||
                new Date(item.expirationDate) > new Date()
            );
        }

        return false;
    }

    private getItem(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key) || '');
        } catch (e) {
            return undefined;
        }
    }

    get<T>(key: string): T | undefined {
        try {
            const data = this.getItem(this.key(key));
            if (this.isValid(data)) {
                return data.value as T;
            }
        } catch (e) {
            return undefined;
        }
        return undefined;
    }

    set<T>(key: string, value: T, minutes: number | 'lifetime') {
        localStorage.setItem(
            this.key(key),
            JSON.stringify({
                expirationDate: this.expirationDate(minutes),
                value,
            }),
        );
    }

    expirationDate(minutes: number | 'lifetime') {
        if (typeof minutes === 'string') {
            return minutes;
        }
        const time = new Date();
        time.setMinutes(time.getMinutes() + minutes);
        return time;
    }

    key(key: string) {
        return `${Cache.prefix}${key}`;
    }

    clearInvalid() {
        for (const key in localStorage) {
            if (key.startsWith(Cache.prefix) && !this.isValid(this.getItem(key))) {
                localStorage.removeItem(key);
            }
        }
    }
}
