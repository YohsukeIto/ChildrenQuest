import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// 管理権限が必要な処理専用（サーバーからのみ使用）
export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);