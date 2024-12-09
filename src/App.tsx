import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/Layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import NewPatient from './pages/Patients/NewPatient';
import Appointments from './pages/Appointments';
import NewAppointment from './pages/Appointments/NewAppointment';
import MedicalRecords from './pages/MedicalRecords';
import Reports from './pages/MedicalRecords/Reports';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Login from './pages/Login';
import { useAuthStore } from './store/useAuthStore';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients">
            <Route index element={<Patients />} />
            <Route path="new" element={<NewPatient />} />
          </Route>
          <Route path="appointments">
            <Route index element={<Appointments />} />
            <Route path="new" element={<NewAppointment />} />
          </Route>
          <Route path="records">
            <Route index element={<MedicalRecords />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;