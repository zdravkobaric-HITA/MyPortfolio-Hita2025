import { useNavigate } from 'react-router-dom';
import { Bell, Calendar, Sunrise, Sun, Moon, Apple, Flame } from 'lucide-react';
import { mealExamples } from '../../data/mockData';

export default function PatientDashboard() {
  const navigate = useNavigate();
  const hasCheckedInToday = false; // Mock state

  const meals = [
    { icon: Sunrise, label: 'Breakfast', time: '8:00 AM', color: '#7BC9A6', preview: mealExamples.breakfast.substring(0, 40) + '...' },
    { icon: Sun, label: 'Lunch', time: '1:00 PM', color: '#F4A261', preview: mealExamples.lunch.substring(0, 40) + '...' },
    { icon: Moon, label: 'Dinner', time: '7:00 PM', color: '#1E3A5F', preview: mealExamples.dinner.substring(0, 40) + '...' },
    { icon: Apple, label: 'Snack', time: 'Anytime', color: '#E67E73', preview: mealExamples.snack.substring(0, 40) + '...' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 h-16 px-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold" style={{ color: '#1E3A5F' }}>NutriCare</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={20} />
            <span>Wednesday, Dec 25</span>
          </div>
          <button className="relative">
            <Bell size={24} className="text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#7BC9A6] flex items-center justify-center text-white font-medium">
            S
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto p-8">
        {/* Greeting */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
          <h2 className="mb-2">Good morning, Marko!</h2>
          <p className="text-sm text-gray-600">Here's your plan for today</p>
        </div>

        {/* Check-in Card */}
        {!hasCheckedInToday && (
          <div className="bg-[#7BC9A6]/10 rounded-xl p-6 mb-6 border border-[#7BC9A6]/20">
            <p className="text-gray-700 mb-4">Haven't checked in today yet!</p>
            <button
              onClick={() => navigate('/patient/check-in')}
              className="h-11 px-6 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: '#7BC9A6' }}
            >
              Check In Now
            </button>
          </div>
        )}

        {/* Today's Meals */}
        <h3 className="mb-4">Today's Meals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {meals.map((meal) => (
            <div key={meal.label} className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${meal.color}20` }}>
                  <meal.icon size={20} style={{ color: meal.color }} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{meal.label}</h4>
                  <p className="text-xs text-gray-500">{meal.time}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{meal.preview}</p>
              <button
                onClick={() => navigate('/patient/daily-plan')}
                className="text-sm text-[#1E3A5F] hover:underline"
              >
                View →
              </button>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Current Weight</p>
            <p className="text-2xl font-bold">75.2 kg</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Streak</p>
            <p className="text-2xl font-bold flex items-center gap-2">
              12 <Flame size={20} style={{ color: '#E67E73' }} />
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/patient/daily-plan')}
            className="w-full h-11 rounded-lg text-white font-medium hover:opacity-90"
            style={{ backgroundColor: '#1E3A5F' }}
          >
            View Full Daily Plan
          </button>
          <button
            onClick={() => navigate('/patient/weekly-plan')}
            className="w-full h-11 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5"
          >
            View Weekly Menu
          </button>
        </div>
      </div>
    </div>
  );
}
