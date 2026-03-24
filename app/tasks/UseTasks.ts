'use client';

import { useState, useEffect } from 'react';

import { tasksApi } from '@/lib/api/tasks';
import { Task } from '../types/task';

export function useTasks() {
    type TaskTab = "pending" | "completed"
  const [selectedTab, setSelectedTab] = useState<TaskTab>("pending");
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);

  const handleTabChange = (tab : TaskTab)=> setSelectedTab(tab)
  return {
  
    selectedTab,
    handleTabChange
  };
}