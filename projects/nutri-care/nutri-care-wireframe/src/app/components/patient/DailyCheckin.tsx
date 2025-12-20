import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function DailyCheckin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    adherence: '',
    activity: '',
  });

  const handleSave = () => {
    navigate('/patient/check-in-confirmation');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="border-4 border-gray-800 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl uppercase tracking-wide">Daily Check-in</h1>
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="border-2 border-gray-400 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              ← Back
            </button>
          </div>

          <div className="space-y-6 mb-8">
            {/* Weight Input */}
            <div>
              <label className="block text-sm uppercase tracking-wide mb-3">Weight (kg)</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-14 flex items-center px-4">
                <input
                  type="number"
                  step="0.1"
                  className="w-full bg-transparent outline-none text-lg"
                  placeholder="87.5"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
              </div>
            </div>

            {/* Adherence */}
            <div>
              <label className="block text-sm uppercase tracking-wide mb-3">
                Adherence to Plan
              </label>
              <div className="space-y-2">
                {['Fully', 'Partially', 'Not'].map((option) => (
                  <label
                    key={option}
                    className={`block border-2 p-4 cursor-pointer ${
                      formData.adherence === option
                        ? 'border-gray-800 bg-gray-800 text-white'
                        : 'border-gray-400 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name="adherence"
                      value={option}
                      checked={formData.adherence === option}
                      onChange={(e) =>
                        setFormData({ ...formData, adherence: e.target.value })
                      }
                      className="sr-only"
                    />
                    <span className="uppercase tracking-wide">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-sm uppercase tracking-wide mb-3">
                Activity Level
              </label>
              <div className="space-y-2">
                {['Low', 'Medium', 'High'].map((option) => (
                  <label
                    key={option}
                    className={`block border-2 p-4 cursor-pointer ${
                      formData.activity === option
                        ? 'border-gray-800 bg-gray-800 text-white'
                        : 'border-gray-400 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name="activity"
                      value={option}
                      checked={formData.activity === option}
                      onChange={(e) =>
                        setFormData({ ...formData, activity: e.target.value })
                      }
                      className="sr-only"
                    />
                    <span className="uppercase tracking-wide">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
          >
            Save
          </button>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Minimalan unos podataka, fokus na kontinuitet.
          </p>
        </div>
      </div>
    </div>
  );
}
