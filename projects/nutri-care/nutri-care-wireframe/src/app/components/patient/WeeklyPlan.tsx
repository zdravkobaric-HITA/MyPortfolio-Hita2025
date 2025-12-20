import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function WeeklyPlan() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const weekDays = [
    { day: 'Mon', date: 'Dec 18', meals: 'Oatmeal | Chicken Salad | Salmon' },
    { day: 'Tue', date: 'Dec 19', meals: 'Eggs | Turkey Wrap | Beef Stir-fry' },
    { day: 'Wed', date: 'Dec 20', meals: 'Smoothie | Pasta | Grilled Fish' },
    { day: 'Thu', date: 'Dec 21', meals: 'Pancakes | Quinoa Bowl | Chicken' },
    { day: 'Fri', date: 'Dec 22', meals: 'Toast | Sushi | Steak' },
    { day: 'Sat', date: 'Dec 23', meals: 'Cereal | Burger | Pizza' },
    { day: 'Sun', date: 'Dec 24', meals: 'Brunch | Light Snacks | Roast' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="border-4 border-gray-800 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl uppercase tracking-wide">Weekly Plan</h1>
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="border-2 border-gray-400 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {weekDays.map((day, index) => (
              <div
                key={index}
                onClick={() => setSelectedDay(day.day)}
                className={`border-2 p-4 cursor-pointer ${
                  selectedDay === day.day
                    ? 'border-gray-800 bg-gray-800 text-white'
                    : 'border-gray-400 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <p className="text-sm uppercase tracking-wide mb-1">{day.day}</p>
                <p className="text-xs">{day.date}</p>
              </div>
            ))}
          </div>

          {selectedDay && (
            <div className="mt-6 border-2 border-gray-400 bg-gray-50 p-6">
              <p className="text-xs uppercase tracking-wide mb-4 text-gray-600">
                {selectedDay}'s Meals
              </p>
              <div className="border-2 border-gray-300 bg-white p-4">
                <p className="text-sm">
                  {weekDays.find((d) => d.day === selectedDay)?.meals}
                </p>
              </div>
              <button
                onClick={() => navigate('/patient/daily-plan')}
                className="mt-4 w-full border-2 border-gray-800 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-100"
              >
                View Full Daily Plan
              </button>
            </div>
          )}

          {!selectedDay && (
            <div className="mt-6 border-2 border-gray-300 bg-gray-100 p-6 text-center">
              <p className="text-sm text-gray-600">Tap a day to view details</p>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Brzi pregled tjednog menija.
          </p>
        </div>
      </div>
    </div>
  );
}
