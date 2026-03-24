import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
    params: Promise<{slug: string;}>
}

export async function GET(
    req: NextRequest,
    { params }: RouteParams
  ): Promise<NextResponse> {
    try {
        const supabase = await createClient();
      const { slug } = await params;
  
      if (!slug || typeof slug !== 'string' || slug.trim() === '') {
        return NextResponse.json(
          { message: 'Invalid or missing slug parameter' },
          { status: 400 }
        );
      }
  
      const sanitizedSlug = slug.trim().toLowerCase();
  
      const { data: task, error } = await supabase
      .from('tasks')
        .select('*')
        .eq('slug', sanitizedSlug)
        .single()
  
      if (!task) {
        return NextResponse.json(
          { message: `Event with slug '${sanitizedSlug}' not found` },
          { status: 404 }
        );
      }
  

      return NextResponse.json( task );
    } catch (error) {
  
      if (error instanceof Error) {

      
  
        // Return generic error with error message
        return NextResponse.json(
          { message: 'Failed to fetch events', error: error.message },
          { status: 500 }
        );
      }
  
      // Handle unknown errors
      return NextResponse.json(
        { message: 'An unexpected error occurred' },
        { status: 500 }
      );
    }
  }