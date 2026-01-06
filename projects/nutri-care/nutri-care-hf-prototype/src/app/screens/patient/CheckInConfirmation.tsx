import { useNavigate } from 'react-router-dom';
import { CheckCircle, Scale, Check, Activity, Flame } from 'lucide-react';
import { motivationalMessages } from '../../data/mockData';

export default function CheckInConfirmation() {
  const navigate = useNavigate();
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <CheckCircle size={80} style={{ color: '#7BC9A6' }} />
          </div>
          <h1 className="mb-2">Great job!</h1>
          <p className="text-gray-600">Your check-in has been saved</p>
        </div>

        {/* Summary Box */}
        <div className="bg-[#7BC9A6]/10 rounded-xl p-6 border border-[#7BC9A6]/20 mb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Scale size={20} style={{ color: '#7BC9A6' }} />
              <div>
                <p className="text-sm text-gray-600">Weight</p>
                <p className="font-semibold">75.0 kg</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Check size={20} style={{ color: '#7BC9A6' }} />
              <div>
                <p className="text-sm text-gray-600">Adherence</p>
                <p className="font-semibold">Fully followed</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity size={20} style={{ color: '#7BC9A6' }} />
              <div>
                <p className="text-sm text-gray-600">Activity</p>
                <p className="font-semibold">Medium</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Flame size={20} style={{ color: '#E67E73' }} />
              <div>
                <p className="text-sm text-gray-600">Streak</p>
                <p className="font-semibold">13 day streak! 🔥</p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium" style={{ color: '#1E3A5F' }}>{randomMessage}</p>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/patient/dashboard')}
            className="w-full h-11 rounded-lg text-white font-medium hover:opacity-90"
            style={{ backgroundColor: '#1E3A5F' }}
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate('/patient/daily-plan')}
            className="w-full h-11 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5"
          >
            View Full Plan
          </button>
        </div>
      </div>
    </div>
  );
}
