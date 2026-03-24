import { PendingTasks, Task } from '@/app/types/task';
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
      const supabase = await createClient();
  
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false });
  
      if (error) {
        console.error("Database error:", error);
        return NextResponse.json(
          { error: "Failed to fetch tasks" },
          { status: 500 }
        );
      }
      const today = new Date().toISOString().split("T")[0]
  
  const pendingTasks: PendingTasks = {
     overdue:  [],
     pendingSoon: [],
     dueSoon:[]
  }
      
  
      tasks?.forEach((task) => {
  
        const dueDate= task.due_date; 
  
        if (dueDate < today) {
            pendingTasks.overdue.push(task);
          } else if (dueDate === today) {
            pendingTasks.pendingSoon.push(task);
          } else if (dueDate > today) {
            pendingTasks.dueSoon.push(task);
          }
        });
  
      return NextResponse.json({
        tasks: pendingTasks,
        taskCount: tasks?.length || 0,
      });
    } catch (error) {
      console.error("Server error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }