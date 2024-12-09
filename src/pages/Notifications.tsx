import React from 'react';
import NotificationCenter from '../components/Notifications/NotificationCenter';

const mockNotifications = [
  {
    id: '1',
    type: 'appointment' as const,
    title: 'Nueva Cita',
    message: 'Cita programada con María González para mañana a las 10:00',
    timestamp: new Date(2024, 2, 20, 9, 30),
    read: false
  },
  {
    id: '2',
    type: 'message' as const,
    title: 'Nuevo Mensaje',
    message: 'Dr. García ha enviado un mensaje sobre los resultados',
    timestamp: new Date(2024, 2, 20, 9, 0),
    read: true
  }
];

export default function Notifications() {
  const handleMarkAsRead = (id: string) => {
    console.log('Marking notification as read:', id);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Notificaciones</h2>
      <NotificationCenter
        notifications={mockNotifications}
        onMarkAsRead={handleMarkAsRead}
      />
    </div>
  );
}