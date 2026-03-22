import { Task } from "@/app/types/task";


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
  }
}