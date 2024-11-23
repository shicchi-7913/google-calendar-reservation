'use client';

import { useSession } from 'next-auth/react';

import { Welcome } from './components/Welcome';
import Calendar from '@/app/schedules/calendar';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Welcome />;
  }
}
