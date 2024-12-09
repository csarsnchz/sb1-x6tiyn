import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientForm from '../../components/Patients/PatientForm';

export default function NewPatient() {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log('New patient data:', data);
    navigate('/patients');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Nuevo Paciente</h2>
      </div>

      <PatientForm
        onSubmit={handleSubmit}
      />
    </div>
  );
}