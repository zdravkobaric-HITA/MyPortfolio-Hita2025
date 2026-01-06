import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Welcome & Role Selection
import WelcomeScreen from "./screens/WelcomeScreen";

// Nutritionist Flow
import NutritionistLogin from "./screens/nutritionist/NutritionistLogin";
import NutritionistOnboarding from "./screens/nutritionist/NutritionistOnboarding";
import NutritionistDashboard from "./screens/nutritionist/NutritionistDashboard";
import Patients from "./screens/nutritionist/Patients";
import PatientProfile from "./screens/nutritionist/PatientProfile";
import DietPlanBuilder from "./screens/nutritionist/DietPlanBuilder";
import Analytics from "./screens/nutritionist/Analytics";
import AnalyticsOverview from "./screens/nutritionist/AnalyticsOverview";
import Settings from "./screens/nutritionist/Settings";

// Patient Flow
import PatientLogin from "./screens/patient/PatientLogin";
import PatientDashboard from "./screens/patient/PatientDashboard";
import FullDailyPlan from "./screens/patient/FullDailyPlan";
import WeeklyPlan from "./screens/patient/WeeklyPlan";
import DailyCheckIn from "./screens/patient/DailyCheckIn";
import CheckInConfirmation from "./screens/patient/CheckInConfirmation";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Welcome Screen */}
          <Route path="/" element={<WelcomeScreen />} />

          {/* Nutritionist Routes */}
          <Route
            path="/nutritionist/login"
            element={<NutritionistLogin />}
          />
          <Route
            path="/nutritionist/onboarding"
            element={<NutritionistOnboarding />}
          />
          <Route
            path="/nutritionist/dashboard"
            element={<NutritionistDashboard />}
          />
          <Route
            path="/nutritionist/patients"
            element={<Patients />}
          />
          <Route
            path="/nutritionist/patient/:id"
            element={<PatientProfile />}
          />
          <Route
            path="/nutritionist/patient/:id/diet-plan"
            element={<DietPlanBuilder />}
          />
          <Route
            path="/nutritionist/patient/:id/analytics"
            element={<Analytics />}
          />
          <Route
            path="/nutritionist/analytics"
            element={<AnalyticsOverview />}
          />
          <Route
            path="/nutritionist/settings"
            element={<Settings />}
          />

          {/* Patient Routes */}
          <Route
            path="/patient/login"
            element={<PatientLogin />}
          />
          <Route
            path="/patient/dashboard"
            element={<PatientDashboard />}
          />
          <Route
            path="/patient/daily-plan"
            element={<FullDailyPlan />}
          />
          <Route
            path="/patient/weekly-plan"
            element={<WeeklyPlan />}
          />
          <Route
            path="/patient/check-in"
            element={<DailyCheckIn />}
          />
          <Route
            path="/patient/check-in/confirmation"
            element={<CheckInConfirmation />}
          />
        </Routes>

        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>
  );
}