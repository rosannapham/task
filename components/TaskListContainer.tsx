import { Tasks, Task } from "@/app/types/task";
import { TaskList } from "./TaskList";

interface PendingTasksContainerProps {
    tasks: Tasks;
  }
  
  export function PendingTasksContainer({ tasks }: PendingTasksContainerProps) {
    return (
      <div className="border rounded-lg overflow-y-auto">
        {Object.entries(tasks).map(([category, taskList], idx, arr) => (
          <TaskList 
          key={category} 
          categoryName={category} 
          tasks={taskList as Task[]} 
          hasSubheadings={true} 
          isFirstCategory={idx === 0} 
          isLastCategory={idx === arr.length - 1}/>
        ))}
      </div>
    );
  }