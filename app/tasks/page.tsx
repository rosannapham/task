'use client';
import { TaskList } from "../../components/TaskList";
import { Tabs } from "@radix-ui/themes";
import { useTasks } from "./UseTasks";


export default function TasksPage() {

  const {selectedTab , handleTabChange } = useTasks();
  return (
    <div className="w-full flex justify-center px-4">
      <div className= "w-full max-w-2xl">
    <div className="w-full flex justify-between">
      <>Tasks</>
<div className="flex bg-gray-300 rounded-full p-1 w-fit">
        <button
          onClick={() => handleTabChange("pending")}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedTab === "pending" ? "bg-white text-black" : "text-gray-700"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => handleTabChange("completed")}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedTab === "completed" ? "bg-white text-black" : "text-gray-700"
          }`}
        >
          Completed
        </button>
      </div>
      </div>

<TaskList/>
</div>
      </div>
  );
}