import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ViewSwitcher } from './components/ViewSwitcher';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { NutritionistLogin } from './screens/nutritionist/NutritionistLogin';
import { NutritionistOnboarding } from './screens/nutritionist/NutritionistOnboarding';
import { NutritionistDashboard } from './screens/nutritionist/NutritionistDashboard';
import { PatientProfile } from './screens/nutritionist/PatientProfile';
import { DietPlanBuilder } from './screens/nutritionist/DietPlanBuilder';
import { Analytics } from './screens/nutritionist/Analytics';
import { PatientLogin } from './screens/patient/PatientLogin';
import { PatientDashboard } from './screens/patient/PatientDashboard';
import { FullDailyPlan } from './screens/patient/FullDailyPlan';
import { WeeklyPlan } from './screens/patient/WeeklyPlan';
import { DailyCheckIn } from './screens/patient/DailyCheckIn';
import { CheckInConfirmation } from './screens/patient/CheckInConfirmation';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <ViewSwitcher />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<WelcomeScreen />} />
        
        {/* Nutritionist routes */}
        <Route path="/nutritionist/login" element={<NutritionistLogin />} />
        <Route path="/nutritionist/onboarding" element={<NutritionistOnboarding />} />
        <Route path="/nutritionist/dashboard" element={<NutritionistDashboard />} />
        <Route path="/nutritionist/patient/:id" element={<PatientProfile />} />
        <Route path="/nutritionist/diet-plan-builder" element={<DietPlanBuilder />} />
        <Route path="/nutritionist/analytics" element={<Analytics />} />
        
        {/* Patient routes */}
        <Route path="/patient/login" element={<PatientLogin />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/daily-plan" element={<FullDailyPlan />} />
        <Route path="/patient/weekly-plan" element={<WeeklyPlan />} />
        <Route path="/patient/check-in" element={<DailyCheckIn />} />
        <Route path="/patient/check-in-confirmation" element={<CheckInConfirmation />} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}