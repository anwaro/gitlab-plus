export interface SimpleLabelSchema extends Record<string, unknown> {
    id: number;
    name: string;
    description: null | string;
    description_html: string;
    text_color: string;
    color: string;
}

export interface LabelSchema extends SimpleLabelSchema {
    open_issues_count: number;
    closed_issues_count: number;
    open_merge_requests_count: number;
    subscribed: boolean;
    priority: number;
    is_project_label: boolean;
}
