import React from 'react';
import { Users, Calendar, Clock, TrendingUp } from 'lucide-react';
import Card from '../common/Card';
import { ReportMetrics } from '../../utils/reports';

interface ClinicMetricsCardProps {
  metrics: ReportMetrics;
  timeframe: string;
}

export default function ClinicMetricsCard({ metrics, timeframe }: ClinicMetricsCardProps) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Métricas de la Clínica - {timeframe}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Users className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Pacientes</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.totalPatients}
              </p>
              <p className="text-sm text-green-600">
                +{metrics.newPatients} nuevos
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Calendar className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Citas</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.totalAppointments}
              </p>
              <p className="text-sm text-gray-600">
                {metrics.completedAppointments} completadas
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Clock className="h-10 w-10 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tiempo Promedio</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.averageConsultationTime} min
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <TrendingUp className="h-10 w-10 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pacientes Activos</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.activePatients}
              </p>
              <p className="text-sm text-gray-600">
                {Math.round((metrics.activePatients / metrics.totalPatients) * 100)}% del total
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}