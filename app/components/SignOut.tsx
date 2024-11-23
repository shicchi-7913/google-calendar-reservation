'use client';
import { signOut } from 'next-auth/react';

export function SignOut() {
  return (
    <button
      className="p-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      <span>ログアウト</span>
    </button>
  );
}
