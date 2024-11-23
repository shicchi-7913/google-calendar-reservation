'use client';

import jaLocale from '@fullcalendar/core/locales/ja';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        left: 'prev',
        center: 'title',
        right: 'next',
      }}
      locale={jaLocale}
      titleFormat={{
        year: 'numeric',
        month: 'long',
      }}
      dayHeaderFormat={{
        weekday: 'short', // 曜日（例: 月, 火）
        day: 'numeric', // 日付（例: 23）
      }}

      // 読み込んだ予定をここに表示する
      // events={[
      //   { title: 'Event 1', start: '2024-11-23T10:00:00', end: '2024-11-23T12:00:00' },
      //   { title: 'Event 2', start: '2024-11-24T14:00:00', end: '2024-11-24T15:00:00' },
      // ]}
    />
  );
}
