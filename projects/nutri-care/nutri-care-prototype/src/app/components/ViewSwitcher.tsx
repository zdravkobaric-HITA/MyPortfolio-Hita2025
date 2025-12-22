import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function ViewSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isNutritionist = location.pathname.startsWith('/nutritionist');
  const isPatient = location.pathname.startsWith('/patient');

  if (!isNutritionist && !isPatient) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-[#F3F4F6] rounded-lg shadow-lg p-2 flex gap-2">
      <button
        onClick={() => navigate('/nutritionist/login')}
        className={`px-4 py-2 rounded-md transition-colors ${
          isNutritionist
            ? 'bg-[#1E3A5F] text-white'
            : 'text-[#4B5563] hover:bg-[#F9FAFB]'
        }`}
      >
        Nutritionist View
      </button>
      <button
        onClick={() => navigate('/patient/login')}
        className={`px-4 py-2 rounded-md transition-colors ${
          isPatient
            ? 'bg-[#7BC9A6] text-white'
            : 'text-[#4B5563] hover:bg-[#F9FAFB]'
        }`}
      >
        Patient View
      </button>
    </div>
  );
}
