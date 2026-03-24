'use client';

import { useState, useEffect } from 'react';

import { tasksApi } from '@/lib/api/tasks';
import { Task  } from '../../types/task';

interface AccountingToolOptions {
    id: number;
    label: string;
  }

export function useAccountingToolInvitePage() {
    type TaskTab = "pending" | "completed"
  const [task, setTask] = useState<Task>();
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  
  const options: AccountingToolOptions[] = [
    { id: 1, label: "Xero" },
    { id: 2, label: "QuickBooks" },
    { id: 3, label: "Other" },
    { id: 4, label: "I do not have an accounting tool" },
  ];


  const fetchTask = async () => {
    try {
        setLoading(true);
      setError(null);

      const data = await tasksApi.getTaskBySlug("accounting-tool-invite");
      setTask(data)
      console.log(data)


    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchTask() }, []);

  const handleSelectCard = (id: number) => {
    setSelectedId(id)
  }



  return {
    task, selectedId, handleSelectCard, options};
}