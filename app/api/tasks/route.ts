import { Task } from '@/app/types/task';
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const supabase = await createClient();

    const { data: tasks, error } = await supabase
    .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch tasks' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      tasks: tasks as Task[],
      count: tasks?.length || 0,
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}