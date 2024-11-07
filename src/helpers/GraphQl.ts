export default class GraphQl {
    static body(query: string, variables: Record<string, unknown>): string {
        return JSON.stringify({
            // operationName: GraphQl.operationName(query),
            variables,
            query,
        });
    }

    static operationName(query: string): string {
        const data = /query (?<name>\w+)/.exec(query);

        if (data && data.groups) {
            return data.groups.name;
        }

        return '';
    }
}
