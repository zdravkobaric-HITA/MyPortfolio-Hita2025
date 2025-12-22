import React, { useEffect } from 'react';
import { CheckCircle, Scale, Check, Activity, Flame } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { useNavigate } from 'react-router-dom';

export function CheckInConfirmation() {
  const navigate = useNavigate();

  const motivationalMessages = [
    "Keep up the great work!",
    "You're doing amazing!",
    "Consistency is key!",
    "13 days in a row - impressive!",
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  useEffect(() => {
    // Auto-redirect after 5 seconds (optional)
    const timer = setTimeout(() => {
      // navigate('/patient/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        <div className="bg-white rounded-xl p-12 shadow-sm border border-[#F3F4F6] text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-[#7BC9A6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-[#7BC9A6]" />
          </div>

          {/* Title */}
          <h1 className="nutricare-h1 mb-2">Great job!</h1>
          <p className="nutricare-body text-[#4B5563] mb-8">Your check-in has been saved</p>

          {/* Summary Box */}
          <div className="bg-[#7BC9A6]/10 rounded-xl p-6 mb-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#7BC9A6]" />
                </div>
                <div>
                  <p className="nutricare-caption text-[#4B5563]">Weight</p>
                  <p className="nutricare-body font-semibold">75.0 kg</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#7BC9A6]" />
                </div>
                <div>
                  <p className="nutricare-caption text-[#4B5563]">Adherence</p>
                  <p className="nutricare-body font-semibold">Fully followed</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#7BC9A6]" />
                </div>
                <div>
                  <p className="nutricare-caption text-[#4B5563]">Activity</p>
                  <p className="nutricare-body font-semibold">Medium</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#F4A261]" />
                </div>
                <div>
                  <p className="nutricare-caption text-[#4B5563]">Streak</p>
                  <p className="nutricare-body font-semibold text-[#7BC9A6]">13 day streak! 🔥</p>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Message */}
          <p className="nutricare-body text-[#4B5563] mb-8 italic">
            "{randomMessage}"
          </p>

          {/* Actions */}
          <div className="space-y-3">
            <NutriButton
              fullWidth
              onClick={() => navigate('/patient/dashboard')}
            >
              Back to Dashboard
            </NutriButton>
            <NutriButton
              fullWidth
              variant="secondary"
              onClick={() => navigate('/patient/daily-plan')}
            >
              View Full Plan
            </NutriButton>
          </div>
        </div>
      </div>
    </div>
  );
}
