import { Task } from "@/app/types/task";


interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className={`text-lg font-medium ${
              task.completed_at ? 'line-through text-gray-500' : 'text-gray-900'
            }`}
          >
            {task.task_name}
          </h3>

      

          <p className="text-sm text-gray-400 mt-2">
            Created: {new Date(task.created_at).toLocaleDateString()}
          </p>
        </div>

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            task.completed_at
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {task.completed_at ? 'Completed' : 'Pending'}
        </span>
      </div>
    </div>
  );
}