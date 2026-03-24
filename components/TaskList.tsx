'use client';

import { useTasks } from '@/app/hooks/useTasks';
import { TaskCard } from './TaskCard';

export function TaskList() {
  const { pendingTasks, completedTasks, loading, error, refetch, accountingTask } = useTasks();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading tasks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center h-64 flex flex-col justify-center items-center">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (pendingTasks?.tasks?.overdue && pendingTasks?.tasks?.overdue.length === 0) {
    return (
      <div className="text-center h-64 flex justify-center items-center">
        <div className="text-gray-600">No tasks found</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          pending Tasks ({pendingTasks?.taskCount})
        </h2>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="grid gap-4">
        {pendingTasks?.tasks?.overdue && pendingTasks?.tasks?.overdue!!.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
       

      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          completed Tasks ({completedTasks.length})
        </h2>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="grid gap-4">
        {completedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {accountingTask &&<>  <h2 className="text-2xl font-bold text-gray-900">
          specific
        </h2> <TaskCard key={123}  task={accountingTask} /></>}

      </div>
    </div>
  );
}