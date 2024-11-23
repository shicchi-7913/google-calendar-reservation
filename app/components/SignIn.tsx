'use client';
import { signIn } from 'next-auth/react';
import { LogIn } from 'lucide-react';

export function SignIn() {
  return (
    <button
      className="flex items-center space-x-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => signIn('google', { redirectTo: '/schedules' })}
    >
      <span>Googleでログイン</span>
      <LogIn className="h-4 w-4" />
    </button>
  );
}
