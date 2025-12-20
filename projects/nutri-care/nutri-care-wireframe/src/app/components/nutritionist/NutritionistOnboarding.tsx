import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function NutritionistOnboarding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    clinic: '',
    experience: '',
  });

  const handleContinue = () => {
    navigate('/nutritionist/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="border-4 border-gray-800 bg-white p-8">
          <h1 className="text-2xl uppercase tracking-wide mb-6 text-center">Profile Setup</h1>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Full Name</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="Dr. Ana Petrović"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Clinic / Practice</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="Nutricentar Zagreb"
                  value={formData.clinic}
                  onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Years of Experience</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <input
                  type="number"
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="5"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
          >
            Continue
          </button>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Jednokratni onboarding za personalizaciju dashboarda.
          </p>
        </div>
      </div>
    </div>
  );
}
