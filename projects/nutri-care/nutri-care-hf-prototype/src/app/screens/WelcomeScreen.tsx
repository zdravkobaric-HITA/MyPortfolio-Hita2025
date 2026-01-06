import { useNavigate } from 'react-router-dom';
import { User, Stethoscope } from 'lucide-react';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[640px] text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-[64px] font-bold" style={{ color: '#1E3A5F' }}>NutriCare</h1>
        </div>

        {/* Title */}
        <h1 className="mb-4">Welcome to NutriCare</h1>
        <p className="text-gray-600 mb-12">Choose how you want to continue</p>

        {/* Role Selection Cards */}
        <div className="flex gap-6 justify-center flex-wrap">
          {/* Nutritionist Card */}
          <div
            onClick={() => navigate('/nutritionist/login')}
            className="w-[280px] bg-white rounded-xl p-8 cursor-pointer border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <Stethoscope size={64} style={{ color: '#1E3A5F' }} />
            </div>
            <h3 className="mb-3">I'm a Nutritionist</h3>
            <p className="text-sm text-gray-600 mb-6">Manage patients and create diet plans</p>
            <button
              className="w-full h-11 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              Continue as Nutritionist
            </button>
          </div>

          {/* Patient Card */}
          <div
            onClick={() => navigate('/patient/login')}
            className="w-[280px] bg-white rounded-xl p-8 cursor-pointer border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <User size={64} style={{ color: '#7BC9A6' }} />
            </div>
            <h3 className="mb-3">I'm a Patient</h3>
            <p className="text-sm text-gray-600 mb-6">View your personalized meal plan</p>
            <button
              className="w-full h-11 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#7BC9A6' }}
            >
              Continue as Patient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
