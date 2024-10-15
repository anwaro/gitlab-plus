export interface IterationSchema extends Record<string, unknown> {
    id: number;
    iid: number;
    group_id: number;
    title: string;
    description: string;
    state: number;
    created_at: string;
    updated_at: string;
    due_date: string;
    start_date: string;
    web_url: string;
}
