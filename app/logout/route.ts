import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();

  // request.url を使って環境依存（localhost固定）を避ける
  return NextResponse.redirect(new URL('/', request.url));
}
