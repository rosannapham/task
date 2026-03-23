'use client';

import { useState, useEffect } from 'react';

import { tasksApi } from '@/lib/api/tasks';
import { Task } from '../types/task';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accountingTask, setTask] = useState<Task>();
  const fetchTasks = async () => {
    try {
        setLoading(true);
      setError(null);

      const data = await tasksApi.getAllTasks();
      setTasks(data.tasks);

    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTask = async () => {
    try {
      const res = await fetch(`/api/tasks/accounting-tool-invite`);
  
      if (!res.ok) {
        throw new Error('Failed to fetch task');
      }
  
      const data = await res.json();
      setTask(data.task.data);
      console.log(accountingTask)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchTask()
   
  }, []);

  return {
    tasks,
    loading,
    error,
    refetch: fetchTasks,
    accountingTask
  };
}