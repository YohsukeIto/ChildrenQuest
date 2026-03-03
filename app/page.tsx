import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>ChildrenQuest</h1>
      <p>スタイリングなしの最小構成です。</p>

      <ul>
        <li>
          <Link href="/login">/login</Link>
        </li>
        <li>
          <Link href="/parent">/parent</Link>
        </li>
        <li>
          <Link href="/child">/child</Link>
        </li>
      </ul>
    </main>
  );
}
