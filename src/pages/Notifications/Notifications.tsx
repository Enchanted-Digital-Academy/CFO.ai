import notificationsData from '../../../notifications.json';

type Notifications = {
  type: 'warning' | 'success' | 'info';
  title: string;
  message: string;
};

const icons: Record<Notifications ['type'], string> = {
  warning: '⚠️',
  success: '✅',
  info: 'ℹ️',
};

function Notifications() {
  const notifications = notificationsData as Notifications[];

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>
            <span>{icons[note.type]}</span>{' '}
            <strong>{note.title}</strong>
            <p>{note.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;