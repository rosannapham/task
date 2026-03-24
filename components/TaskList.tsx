'use client';

import { Task } from "@/app/types/task";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  categoryName: string;
  tasks: Task[];
  hasSubheadings?: boolean
  isFirstCategory?: boolean
  isLastCategory?: boolean;  
}

export function TaskList({ categoryName, tasks, hasSubheadings, isFirstCategory, isLastCategory }: TaskListProps) {
  if (!tasks || tasks.length === 0) return <></>;

  const title =
    categoryName === "pendingSoon"
      ? "Due Soon"
      : categoryName === "overdue"
      ? "Overdue"
      : "Due Today";

  return (
    < >
      {hasSubheadings && (
        <h3
          className={`
            bg-gray-100 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200
            ${isFirstCategory ? "rounded-t-lg" : ""}
          `}
        >
          {title}
        </h3>
      )}
      {tasks.map((task, idx) => (
        <TaskCard key={task.id} task={task} isLast={idx === tasks.length - 1 && isLastCategory}  />
      ))}
    </>
  );
}