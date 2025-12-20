import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AddPatient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    goal: '',
  });

  const handleAddPatient = () => {
    navigate('/nutritionist/dashboard');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="border-4 border-gray-800 bg-white p-8">
          <h1 className="text-2xl uppercase tracking-wide mb-6">Add Patient</h1>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Full Name</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="Marko Horvat"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Email</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <input
                  type="email"
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="marko@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Goal</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <select
                  className="w-full bg-transparent outline-none text-sm"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                >
                  <option value="">Select Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddPatient}
              className="flex-1 border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
            >
              Add Patient
            </button>
            <button
              onClick={() => navigate('/nutritionist/dashboard')}
              className="flex-1 border-2 border-gray-400 bg-white h-14 uppercase tracking-wide hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Nutricionista inicira pacijent onboarding.
          </p>
        </div>
      </div>
    </div>
  );
}
