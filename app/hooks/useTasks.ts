'use client';

import { useState, useEffect } from 'react';

import { tasksApi } from '@/lib/api/tasks';
import { PendingTasks, Task,  } from '../types/task';

export function useTasks() {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accountingTask, setTask] = useState<Task>();


  const fetchPendingTasks = async () => {
    try {
        setLoading(true);
      setError(null);

      const data = await tasksApi.getPendingTasks();
      console.log(data)


    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  // const fetchCompletedTasks = async () => {
  //   try {
  //       setLoading(true);
  //     setError(null);

  //     const data = await tasksApi.getCompletedTasks();
  //     setCompletedTasks(data.tasks);

  //   } catch (err) {
  //     setError('Failed to load tasks');
  //     console.error('Error fetching tasks:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchTask = async () => {
    try {
      const res = await fetch(`/api/tasks/accounting-tool-invite`);
  
      if (!res.ok) {
        throw new Error('Failed to fetch task');
      }
  
      const data = await res.json();
      setTask(data.task.data);
  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPendingTasks();

    fetchTask()
   
  }, []);

  return {
    completedTasks,
    loading,
    error,
    refetch: fetchPendingTasks,
    accountingTask
  };
}