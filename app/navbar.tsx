'use client';

import Link from 'next/link';
import { Calendar, Plus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { SignIn } from './components/SignIn';
import { UserDropDown } from './components/UserDropDown';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">MeetSync</span>
          </Link>

          {session ? (
            <div className="flex items-center space-x-4">
              <Link
                href="/schedules/new"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                新規面談
              </Link>
              <UserDropDown imageUrl={session.user.image} name={session.user.name} />
            </div>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </nav>
  );
}
