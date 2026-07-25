import notificationsData from '../../../notifications.json';

type Notification = {
  type: 'warning' | 'success' | 'info';
  title: string;
  message: string;
};

const icons: Record<Notification['type'], string> = {
  warning: '⚠️',
  success: '✅',
  info: 'ℹ️',
};

function Notifications() {
  const notifications = notificationsData as Notification[];

  return (
    <div className="p-6 w-full max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Notifications</h1>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <ul className="space-y-4">
          {notifications.map((note, index) => (
            <li key={index} className="border-b border-neutral-700 last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-center gap-2">
                <span>{icons[note.type]}</span>
                <strong>{note.title}</strong>
              </div>
              <p className="text-neutral-400 mt-1">{note.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Notifications;