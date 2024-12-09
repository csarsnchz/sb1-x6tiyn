import React, { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import ClinicMetricsCard from '../../components/Reports/ClinicMetricsCard';
import PatientMetricsCard from '../../components/Reports/PatientMetricsCard';
import { ReportTimeframe, generateClinicMetrics, generatePatientReport } from '../../utils/reports';

// Mock data - replace with actual data from your backend
const mockPatient = {
  id: '1',
  firstName: 'María',
  lastName: 'González',
  dateOfBirth: new Date('1990-01-01'),
  medicalHistory: [
    { id: '1', date: new Date('2024-01-15'), treatment: 'Treatment 1' },
    { id: '2', date: new Date('2024-02-15'), treatment: 'Treatment 2' },
  ],
  medications: [
    { id: '1', name: 'Med 1', startDate: new Date('2024-01-01') },
    { id: '2', name: 'Med 2', startDate: new Date('2024-02-01'), endDate: new Date('2024-02-15') },
  ],
};

const mockAppointments = [
  { id: '1', patientId: '1', status: 'completed', duration: 30, date: new Date('2024-03-01') },
  { id: '2', patientId: '1', status: 'scheduled', date: new Date('2024-03-15') },
];

export default function Reports() {
  const [timeframe, setTimeframe] = useState<ReportTimeframe>('monthly');

  const clinicMetrics = generateClinicMetrics([mockPatient], mockAppointments, timeframe);
  const patientMetrics = generatePatientReport(mockPatient, mockAppointments);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Informes Médicos</h2>
        <div className="flex space-x-4">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as ReportTimeframe)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="daily">Diario</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensual</option>
            <option value="yearly">Anual</option>
          </select>
          <Button icon={FileText}>Generar Nuevo Informe</Button>
        </div>
      </div>

      <ClinicMetricsCard
        metrics={clinicMetrics}
        timeframe={
          timeframe === 'daily' ? 'Hoy' :
          timeframe === 'weekly' ? 'Esta Semana' :
          timeframe === 'monthly' ? 'Este Mes' : 'Este Año'
        }
      />

      <PatientMetricsCard
        metrics={patientMetrics}
        patientName={`${mockPatient.firstName} ${mockPatient.lastName}`}
      />

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tamaño
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: '1',
                  name: 'Reporte Mensual - Marzo 2024',
                  type: 'PDF',
                  date: '2024-03-15',
                  size: '2.4 MB'
                },
                {
                  id: '2',
                  name: 'Estadísticas Trimestrales',
                  type: 'Excel',
                  date: '2024-03-01',
                  size: '1.8 MB'
                }
              ].map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900 inline-flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}