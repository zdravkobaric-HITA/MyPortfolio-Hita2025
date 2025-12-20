import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Nutritionist Screens
import { NutritionistLogin } from './components/nutritionist/NutritionistLogin';
import { NutritionistOnboarding } from './components/nutritionist/NutritionistOnboarding';
import { NutritionistDashboard } from './components/nutritionist/NutritionistDashboard';
import { AddPatient } from './components/nutritionist/AddPatient';
import { PatientProfile } from './components/nutritionist/PatientProfile';
import { DietPlanBuilder } from './components/nutritionist/DietPlanBuilder';
import { AnalyticsOverview } from './components/nutritionist/AnalyticsOverview';

// Patient Screens
import { PatientLogin } from './components/patient/PatientLogin';
import { PatientDashboard } from './components/patient/PatientDashboard';
import { FullDailyPlan } from './components/patient/FullDailyPlan';
import { WeeklyPlan } from './components/patient/WeeklyPlan';
import { DailyCheckin } from './components/patient/DailyCheckin';
import { CheckinConfirmation } from './components/patient/CheckinConfirmation';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Navigate to="/nutritionist/login" replace />} />
          
          {/* Nutritionist Routes */}
          <Route path="/nutritionist/login" element={<NutritionistLogin />} />
          <Route path="/nutritionist/onboarding" element={<NutritionistOnboarding />} />
          <Route path="/nutritionist/dashboard" element={<NutritionistDashboard />} />
          <Route path="/nutritionist/add-patient" element={<AddPatient />} />
          <Route path="/nutritionist/patient/:id" element={<PatientProfile />} />
          <Route path="/nutritionist/diet-plan/:patientId" element={<DietPlanBuilder />} />
          <Route path="/nutritionist/analytics/:patientId" element={<AnalyticsOverview />} />
          
          {/* Patient Routes */}
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/daily-plan" element={<FullDailyPlan />} />
          <Route path="/patient/weekly-plan" element={<WeeklyPlan />} />
          <Route path="/patient/check-in" element={<DailyCheckin />} />
          <Route path="/patient/check-in-confirmation" element={<CheckinConfirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
