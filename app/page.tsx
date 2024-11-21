import React from 'react';
import { Calendar, Clock, Video, Share2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          面談スケジュール調整を、もっとスマートに
        </h1>
        <p className="text-xl text-gray-600">
          Google カレンダーと連携して、簡単に面談の日程調整ができます
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <h3 className="text-lg font-semibold">カレンダー連携</h3>
          </div>
          <p className="text-gray-600">
            Googleカレンダーと連携して、既存の予定を確認しながら候補日時を設定できます
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-indigo-600" />
            <h3 className="text-lg font-semibold">複数候補</h3>
          </div>
          <p className="text-gray-600">
            最大10件まで候補日時を設定可能。相手の都合に合わせやすく調整できます
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="h-6 w-6 text-indigo-600" />
            <h3 className="text-lg font-semibold">Google Meet連携</h3>
          </div>
          <p className="text-gray-600">
            面談が確定すると自動でGoogle Meetのリンクが生成され、カレンダーに追加されます
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Share2 className="h-6 w-6 text-indigo-600" />
            <h3 className="text-lg font-semibold">簡単共有</h3>
          </div>
          <p className="text-gray-600">
            生成されたリンクを共有するだけで、相手は候補から希望の日時を選択できます
          </p>
        </div>
      </div>

      {/* {isAuthenticated ? (
        <div className="text-center">
          <Link
            to="/create"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            面談を作成する
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 mb-4">まずはGoogleアカウントでログインしてください</p>
        </div>
      )} */}
    </div>
  );
}
