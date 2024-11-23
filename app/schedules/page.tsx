import { Plus } from 'lucide-react';
import Link from 'next/link';

import Calendar from './calendar';

export default function Schedules() {
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
}
