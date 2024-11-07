type CacheItem = {
    expirationDate: Date | 'lifetime';
    value: unknown;
};

export default class Cache {
    isValid(item?: CacheItem): item is CacheItem {
        if (item) {
            return (
                item.expirationDate === 'lifetime' ||
                new Date(item.expirationDate) > new Date()
            );
        }

        return false;
    }

    get<T>(key: string): T | undefined {
        try {
            const data = JSON.parse(localStorage.getItem(key) || '');
            if (this.isValid(data)) {
                return data.value as T;
            }
        } catch (e) {
            // pass
        }
        return undefined;
    }

    set<T>(key: string, value: T, minutes: number | 'lifetime') {
        localStorage.setItem(
            key,
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
}
