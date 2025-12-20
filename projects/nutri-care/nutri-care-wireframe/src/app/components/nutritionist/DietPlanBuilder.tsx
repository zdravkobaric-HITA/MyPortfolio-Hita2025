import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export function DietPlanBuilder() {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const [planType, setPlanType] = useState<'daily' | 'weekly'>('daily');

  const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-4 border-gray-800 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl uppercase tracking-wide">Diet Plan Builder</h1>
            <button
              onClick={() => navigate(`/nutritionist/patient/${patientId}`)}
              className="border-2 border-gray-400 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              ← Back
            </button>
          </div>

          {/* Plan Type Selection */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wide mb-3 text-gray-600">Plan Type</p>
            <div className="flex gap-4">
              <button
                onClick={() => setPlanType('daily')}
                className={`flex-1 h-12 uppercase tracking-wide text-sm ${
                  planType === 'daily'
                    ? 'border-4 border-gray-800 bg-gray-800 text-white'
                    : 'border-2 border-gray-400 bg-white'
                }`}
              >
                Daily Plan
              </button>
              <button
                onClick={() => setPlanType('weekly')}
                className={`flex-1 h-12 uppercase tracking-wide text-sm ${
                  planType === 'weekly'
                    ? 'border-4 border-gray-800 bg-gray-800 text-white'
                    : 'border-2 border-gray-400 bg-white'
                }`}
              >
                Weekly Menu
              </button>
            </div>
          </div>

          {/* Meal Sections */}
          <div className="space-y-4 mb-6">
            {meals.map((meal) => (
              <div key={meal} className="border-2 border-gray-400 bg-gray-50 p-4">
                <p className="text-sm uppercase tracking-wide mb-3">{meal}</p>
                <div className="space-y-2">
                  <div className="border-2 border-gray-300 bg-white h-12 flex items-center px-3">
                    <input
                      type="text"
                      className="w-full outline-none text-sm"
                      placeholder="Add food item..."
                    />
                  </div>
                  <div className="border-2 border-gray-300 bg-white h-12 flex items-center px-3">
                    <input
                      type="text"
                      className="w-full outline-none text-sm"
                      placeholder="Portion size & notes..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 border-2 border-gray-400 bg-white h-14 uppercase tracking-wide hover:bg-gray-100">
              Preview as Patient
            </button>
            <button
              onClick={() => navigate(`/nutritionist/patient/${patientId}`)}
              className="flex-1 border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
            >
              Assign Plan
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Nutricionista ima punu kontrolu nad planom; pacijent ne uređuje obroke.
          </p>
        </div>
      </div>
    </div>
  );
}
