'use client';
import { signOut } from 'next-auth/react';

export function SignOut() {
  return (
    <button
      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      <span>ログアウト</span>
    </button>
  );
}
