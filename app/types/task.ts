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
   
export interface Tasks {
    [category: string]: Task[];
  }

export interface PendingTasksApiResponse {
    tasks: Tasks;
    taskCount: number;
}
