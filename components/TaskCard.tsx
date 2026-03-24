'use client';
import { Task } from "@/app/types/task";
import { TaskCategoryTag } from "./TaskCategoryTag";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";


interface TaskCardProps {
  task: Task;
  isLast?: boolean;
}

export function TaskCard({ task, isLast }: TaskCardProps) {
  const router = useRouter()
  return (
    <div
    className={`p-4 hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200 ${
      !isLast ? "border-b border-gray-200" : ""}
      ${isLast ? "rounded-b-lg" : ""}`}
      onClick={() => {router.push(`/tasks/${task.slug}`)}}
  >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3  className="font-[var(--font-weight-semibold)]">
            {task.task_name}
          </h3>

      

          <p className="text-sm text-gray-400 mt-2">
          {dayjs(task.due_date).format("DD MMMM YYYY")}
          </p>
        </div>

        <TaskCategoryTag category={"task"} />
      </div>
    </div>
  );
}