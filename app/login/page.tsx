'use client';

import { useState } from 'react';
import { supabaseBrowser } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string>('');

  const signIn = async () => {
    setMsg('');
    const { error } = await supabaseBrowser.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else setMsg('ログインしました。/parent または /child へ移動してください。');
  };

  return (
    <main>
      <h1>Login</h1>

      <div style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button onClick={signIn}>Sign in</button>

        {msg && <p>{msg}</p>}
      </div>
    </main>
  );
}
