export interface Task {
    id: string 
    status: string
    created_at: string
    slug: string
    category: string
    due_date: string
    completed_at: string
    completed_by: string
    task_name: string 
}

export interface PendingTasks {
    overdue: Task[];
    pendingSoon: Task[];
    dueSoon: Task[];

}

export interface PendingTasksApiResponse {
    tasks: PendingTasks;
    taskCount: number;
}
export interface TransformedPendingTasksApi {
    tasks: Partial<PendingTasks>;
    taskCount: number;
}