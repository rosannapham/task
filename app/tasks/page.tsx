'use client';
import { useTasks } from "./UseTasks";
import { PendingTasksContainer } from "@/components/TaskListContainer";


export default function TasksPage() {

  const {selectedTab , handleTabChange, pendingTasks } = useTasks();
  return (
    <div className="w-full h-full flex justify-center px-4 py-4">
      <div className= "w-full max-w-2xl ">
    <div className="w-full flex justify-between items-center mb-4">
      <>{pendingTasks?.taskCount} Tasks</>
<div className="flex bg-gray-300 rounded-full p-1 w-fit">
        <button
          onClick={() => handleTabChange("pending")}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedTab === "pending" ? "bg-white text-black" : "text-gray-700"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => handleTabChange("completed")}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedTab === "completed" ? "bg-white text-black" : "text-gray-700"
          }`}
        >
          Completed
        </button>
      </div>
      </div>
{pendingTasks?.tasks && (
  <PendingTasksContainer tasks={pendingTasks.tasks}/>
)}

</div>
      </div>
  );
}