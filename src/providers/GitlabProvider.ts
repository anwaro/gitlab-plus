import Cache from '../helpers/Cache';
import GraphQl from '../helpers/GraphQl';

export class GitlabProvider {
    private cache = new Cache();
    private url = 'https://gitlab.com/api/v4/';
    private graphqlApi = 'https://gitlab.com/api/graphql';

    async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.url}${path}`, {
            headers: this.headers(),
        });
        return response.json();
    }

    async post<D, R>(path: string, body: D): Promise<R> {
        const response = await fetch(`${this.url}${path}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: this.headers(),
        });
        return response.json();
    }

    async query<T>(query: string, variables: Record<string, unknown>): Promise<T> {
        const response = await fetch(this.graphqlApi, {
            method: 'POST',
            body: GraphQl.body(query, variables),
            headers: this.headers(),
        });
        return response.json();
    }

    async getCached<T>(key: string, path: string, minutes: number): Promise<T> {
        const cacheValue = this.cache.get<T>(key);
        if (cacheValue) {
            return cacheValue;
        }

        const value = await this.get<T>(path);

        this.cache.set(key, value, minutes);

        return value;
    }

    async queryCached<T>(
        key: string,
        query: string,
        variables: Record<string, unknown>,
        minutes: number,
    ): Promise<T> {
        const cacheValue = this.cache.get<T>(key);
        if (cacheValue) {
            return cacheValue;
        }

        const value = await this.query<T>(query, variables);

        this.cache.set(key, value, minutes);

        return value;
    }

    csrf() {
        const token = document.querySelector('meta[name=csrf-token]');
        if (token) {
            return token.getAttribute('content');
        }
        return '';
    }

    headers() {
        const headers: Record<string, string> = {
            'content-type': 'application/json',
        };

        const csrf = this.csrf();
        if (csrf) {
            headers['X-CSRF-Token'] = csrf;
        }

        return headers;
    }

    debounce<T extends unknown[]>(
        callback: (...args: T) => void,
        wait: number = 300,
    ) {
        let timer: number;

        return (...args: T) => {
            clearTimeout(timer);
            timer = window.setTimeout(() => callback(...args), wait);
        };
    }
}
