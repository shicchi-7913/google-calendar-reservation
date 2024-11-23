'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import { UserIcon } from './components/UserIcon';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/schedules" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">MeetSync</span>
          </Link>

          {session ? (
            <div className="flex items-center space-x-4">
              <UserIcon imageUrl={session.user.image} name={session.user.name} />
              <SignOut />
            </div>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </nav>
  );
}
