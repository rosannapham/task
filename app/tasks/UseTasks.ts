'use client';

import { useState, useEffect } from 'react';

import { tasksApi } from '@/lib/api/tasks';
import { PendingTasksApiResponse, Task,  } from '../types/task';

export function useTasks() {
    type TaskTab = "pending" | "completed"
  const [selectedTab, setSelectedTab] = useState<TaskTab>("pending");
  const [pendingTasks, setPendingTasks] = useState<PendingTasksApiResponse>();
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accountingTask, setTask] = useState<Task>();


  const fetchPendingTasks = async () => {
    try {
        setLoading(true);
      setError(null);

      const data = await tasksApi.getPendingTasks();
      setPendingTasks(data)
      console.log(data)


    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingTasks();

    fetchPendingTasks()
   
  }, []);


  const handleTabChange = (tab : TaskTab)=> setSelectedTab(tab)
  return {
  
    selectedTab,
    handleTabChange,
    pendingTasks
  };
}