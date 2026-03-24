import { Task, TransformedPendingTasksApi } from "@/app/types/task";
import { removeEmptyTaskCategories } from "@/utils/tasks.transform";


export const tasksApi = {
  async getAllTasks(): Promise<{ tasks: Task[]; count: number }> {
    try {

      const response = await fetch('/api/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()
      return data

    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      throw error
    }
  },

  async getPendingTasks(): Promise<TransformedPendingTasksApi> {
    try {

      const response = await fetch('/api/tasks/pending', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()
      const tasks = removeEmptyTaskCategories(data.tasks)
      const totalCount = data.taskCount
      return { tasks: tasks, taskCount: totalCount}

    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      throw error
    }
  },

  async getCompletedTasks(): Promise<{ tasks: Task[]; count: number }> {
    try {

      const response = await fetch('/api/tasks/pending', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()
      return data

    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      throw error
    }
  }
}