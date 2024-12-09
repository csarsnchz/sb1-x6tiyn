import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from '../../components/Appointments/AppointmentForm';

export default function NewAppointment() {
  const navigate = useNavigate();
  const mockPatients = [
    { id: '1', name: 'María González' },
    { id: '2', name: 'Juan Pérez' }
  ];

  const handleSubmit = (data: any) => {
    console.log('New appointment data:', data);
    navigate('/appointments');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Nueva Cita</h2>
      </div>

      <AppointmentForm
        onSubmit={handleSubmit}
        patients={mockPatients}
      />
    </div>
  );
}