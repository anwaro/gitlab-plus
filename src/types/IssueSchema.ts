import {SimpleUserSchema} from './SimpleUserSchema';
import {MappedOmit} from './Utils';
import {MilestoneSchema} from './MilestoneSchema';
import {IterationSchema} from './IterationSchema';
import {LabelSchema} from './LabelSchema';

export interface TimeStatsSchema extends Record<string, unknown> {
    time_estimate: number;
    total_time_spent: number;
    human_time_estimate: string | null;
    human_total_time_spent: string | null;
}

export interface IssueSchema extends Record<string, unknown> {
    state: string;
    description: string;
    health_status?: string;
    weight?: number;
    author: MappedOmit<SimpleUserSchema, 'created_at'>;
    iteration?: IterationSchema;
    milestone: MilestoneSchema;
    project_id: number;
    assignees: MappedOmit<SimpleUserSchema, 'created_at'>[];
    type: string;
    updated_at: string;
    closed_at?: string;
    closed_by?: string;
    id: number;
    title: string;
    created_at: string;
    moved_to_id?: string;
    iid: number;
    labels: LabelSchema[];
    upvotes: number;
    downvotes: number;
    merge_requests_count: number;
    user_notes_count: number;
    due_date: string;
    web_url: string;
    references: {
        short: string;
        relative: string;
        full: string;
    };
    time_stats: TimeStatsSchema;
    has_tasks: boolean;
    task_status: string;
    confidential: boolean;
    discussion_locked: boolean;
    _links: {
        self: string;
        notes: string;
        award_emoji: string;
        project: string;
    };
    task_completion_status: {
        count: number;
        completed_count: number;
    };
    subscribed: boolean;
    epic?: {
        id: number;
        iid: number;
        title: string;
        url: string;
        group_id: number;
    };
    service_desk_reply_to?: string;
}
