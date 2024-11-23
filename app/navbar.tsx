'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/schedules" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">MeetSync</span>
          </Link>

          <div className="flex items-center space-x-4">{session ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </nav>
  );
}
