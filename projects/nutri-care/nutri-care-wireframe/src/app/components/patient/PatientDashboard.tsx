import { useNavigate } from 'react-router-dom';

export function PatientDashboard() {
  const navigate = useNavigate();

  const todayPlan = {
    date: 'Monday, Dec 18, 2025',
    breakfast: 'Oatmeal with berries',
    lunch: 'Grilled chicken salad',
    dinner: 'Salmon with vegetables',
    snacks: 'Greek yogurt',
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-4 border-gray-800 bg-white p-6 mb-6">
          <h1 className="text-2xl uppercase tracking-wide mb-2">Today</h1>
          <p className="text-sm text-gray-600">{todayPlan.date}</p>
        </div>

        {/* Today's Summary */}
        <div className="border-4 border-gray-800 bg-white p-6 mb-6">
          <p className="text-xs uppercase tracking-wide mb-4 text-gray-600">Today's Plan</p>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Breakfast</p>
              <p className="text-sm">{todayPlan.breakfast}</p>
            </div>

            <div className="border-2 border-gray-400 bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Lunch</p>
              <p className="text-sm">{todayPlan.lunch}</p>
            </div>

            <div className="border-2 border-gray-400 bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Dinner</p>
              <p className="text-sm">{todayPlan.dinner}</p>
            </div>

            <div className="border-2 border-gray-400 bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Snacks</p>
              <p className="text-sm">{todayPlan.snacks}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/patient/daily-plan')}
            className="border-4 border-gray-800 bg-white h-14 uppercase tracking-wide hover:bg-gray-100"
          >
            View Full Plan
          </button>
          <button
            onClick={() => navigate('/patient/check-in')}
            className="border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
          >
            Daily Check-in
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate('/patient/weekly-plan')}
            className="w-full border-2 border-gray-400 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-100"
          >
            View Weekly Plan
          </button>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Glavni ekran za svakodnevno korištenje.
          </p>
        </div>
      </div>
    </div>
  );
}
