export default class Cache {
    get<T>(key: string): T | undefined {
        try {
            const data = sessionStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        } catch (_) {
            return undefined;
        }
        return undefined;
    }

    set<T>(key: string, value: T) {
        try {
            const data = JSON.stringify(value);
            sessionStorage.setItem(key, data);
        } catch (_) {
            return;
        }
    }
}
