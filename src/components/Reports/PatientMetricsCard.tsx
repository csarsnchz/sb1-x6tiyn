import React from 'react';
import { Calendar, Clock, Activity, Stethoscope } from 'lucide-react';
import Card from '../common/Card';
import { PatientMetrics } from '../../utils/reports';
import { formatDate } from '../../utils/date';

interface PatientMetricsCardProps {
  metrics: PatientMetrics;
  patientName: string;
}

export default function PatientMetricsCard({ metrics, patientName }: PatientMetricsCardProps) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Métricas del Paciente - {patientName}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Calendar className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Visitas</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.totalVisits}
              </p>
              <p className="text-sm text-gray-600">
                Última: {formatDate(metrics.lastVisit)}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Clock className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Próximas Citas</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.upcomingAppointments}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Activity className="h-10 w-10 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tratamientos Activos</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.activeTreatments}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Stethoscope className="h-10 w-10 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tratamientos Completados</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.completedTreatments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}