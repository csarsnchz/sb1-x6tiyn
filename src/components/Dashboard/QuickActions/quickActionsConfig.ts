import { Calendar, FileText, MessageSquare, Bell, PlusCircle } from 'lucide-react';

export const quickActions = [
  {
    name: 'Nueva Cita',
    description: 'Programar una nueva cita médica',
    icon: Calendar,
    href: '/appointments/new',
    color: 'bg-blue-500'
  },
  {
    name: 'Nuevo Paciente',
    description: 'Registrar un nuevo paciente',
    icon: PlusCircle,
    href: '/patients/new',
    color: 'bg-green-500'
  },
  {
    name: 'Mensajes',
    description: 'Ver mensajes pendientes',
    icon: MessageSquare,
    href: '/messages',
    color: 'bg-purple-500'
  },
  {
    name: 'Notificaciones',
    description: 'Gestionar notificaciones',
    icon: Bell,
    href: '/notifications',
    color: 'bg-yellow-500'
  },
  {
    name: 'Informes',
    description: 'Ver informes y estadísticas',
    icon: FileText,
    href: '/records/reports',
    color: 'bg-red-500'
  }
];