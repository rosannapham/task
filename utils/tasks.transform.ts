import { PendingTasks, Task } from "@/app/types/task";

export function removeEmptyTaskCategories(tasks: PendingTasks): Partial<PendingTasks> {
    if (!tasks) {

        return {};
      }
    const result: Partial<PendingTasks> = {};
  
    (Object.keys(tasks) as (keyof PendingTasks)[]).forEach((key) => {
      const list = tasks[key];
      if (Array.isArray(list) && list.length > 0) {
        result[key] = list;
      }
    });
    console.log(result)
    return result;

  }