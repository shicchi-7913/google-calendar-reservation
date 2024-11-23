import Calendar from '../calendar';

export default function ScheduleNew() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">面談の作成</h1>

      <form className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            面談タイトル
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <Calendar />

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            作成する
          </button>
        </div>
      </form>
    </div>
  );
}
