import { Tasks, Task } from "@/app/types/task";

export function removeEmptyTaskCategories(tasks: Tasks): Tasks {
    if (!tasks) {
      return {};
    }
  
    const result: Tasks = {};
  
    Object.keys(tasks).forEach((key) => {
      const list = tasks[key];
      if (Array.isArray(list) && list.length > 0) {
        result[key] = list;
      }
    });
  
    return result;
  }