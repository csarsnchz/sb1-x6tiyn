import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Patient } from '../types/patient';

export type ReportTimeframe = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface ReportMetrics {
  totalPatients: number;
  newPatients: number;
  activePatients: number;
  totalAppointments: number;
  completedAppointments: number;
  canceledAppointments: number;
  averageConsultationTime: number;
}

export interface PatientMetrics {
  totalVisits: number;
  lastVisit: Date;
  upcomingAppointments: number;
  completedTreatments: number;
  activeTreatments: number;
}

export const generateClinicMetrics = (
  patients: Patient[],
  appointments: any[],
  timeframe: ReportTimeframe
): ReportMetrics => {
  const now = new Date();
  const startDate = getTimeframeStartDate(now, timeframe);

  const newPatients = patients.filter(
    (patient) => new Date(patient.dateOfBirth) >= startDate
  ).length;

  return {
    totalPatients: patients.length,
    newPatients,
    activePatients: patients.filter((p) => p.medicalHistory.length > 0).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter((a) => a.status === 'completed').length,
    canceledAppointments: appointments.filter((a) => a.status === 'canceled').length,
    averageConsultationTime: calculateAverageConsultationTime(appointments),
  };
};

export const generatePatientReport = (
  patient: Patient,
  appointments: any[]
): PatientMetrics => {
  const patientAppointments = appointments.filter(
    (apt) => apt.patientId === patient.id
  );

  return {
    totalVisits: patient.medicalHistory.length,
    lastVisit: getLastVisitDate(patient),
    upcomingAppointments: patientAppointments.filter(
      (apt) => new Date(apt.date) > new Date()
    ).length,
    completedTreatments: countCompletedTreatments(patient),
    activeTreatments: countActiveTreatments(patient),
  };
};

const getTimeframeStartDate = (date: Date, timeframe: ReportTimeframe): Date => {
  const result = new Date(date);
  switch (timeframe) {
    case 'daily':
      result.setHours(0, 0, 0, 0);
      break;
    case 'weekly':
      result.setDate(result.getDate() - result.getDay());
      break;
    case 'monthly':
      result.setDate(1);
      break;
    case 'yearly':
      result.setMonth(0, 1);
      break;
  }
  return result;
};

const calculateAverageConsultationTime = (appointments: any[]): number => {
  const completedAppointments = appointments.filter(
    (apt) => apt.status === 'completed' && apt.duration
  );
  if (completedAppointments.length === 0) return 0;
  
  const totalDuration = completedAppointments.reduce(
    (sum, apt) => sum + apt.duration,
    0
  );
  return Math.round(totalDuration / completedAppointments.length);
};

const getLastVisitDate = (patient: Patient): Date => {
  if (patient.medicalHistory.length === 0) return new Date(patient.dateOfBirth);
  return new Date(
    Math.max(
      ...patient.medicalHistory.map((record) => new Date(record.date).getTime())
    )
  );
};

const countCompletedTreatments = (patient: Patient): number => {
  return patient.medicalHistory.filter(
    (record) => record.treatment && record.treatment.length > 0
  ).length;
};

const countActiveTreatments = (patient: Patient): number => {
  return patient.medications.filter(
    (med) => !med.endDate || new Date(med.endDate) > new Date()
  ).length;
};