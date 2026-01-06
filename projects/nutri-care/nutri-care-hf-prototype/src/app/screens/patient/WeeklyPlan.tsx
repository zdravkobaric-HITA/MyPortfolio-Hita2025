import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { weekDays } from '../../data/mockData';

export default function WeeklyPlan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <button
          onClick={() => navigate('/patient/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F] mb-4"
        >
          <ChevronLeft size={20} />
          Back to Dashboard
        </button>

        <div className="flex items-center justify-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft size={24} />
          </button>
          <h2>This Week (Dec 16-22)</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weekDays.map((day) => (
            <div
              key={day.date}
              onClick={() => navigate('/patient/daily-plan')}
              className={`bg-white rounded-xl p-6 border cursor-pointer hover:shadow-lg transition-all ${
                day.isToday ? 'border-[#7BC9A6] border-2 shadow-md' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3>{day.day} {day.date}</h3>
                  {day.isToday && (
                    <span className="text-xs font-medium" style={{ color: '#7BC9A6' }}>Today</span>
                  )}
                </div>
                {day.date < 22 && (
                  <div className="w-6 h-6 rounded-full bg-[#7BC9A6] flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7BC9A6' }}></div>
                  <span className="text-gray-600">Breakfast</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F4A261' }}></div>
                  <span className="text-gray-600">Lunch</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1E3A5F' }}></div>
                  <span className="text-gray-600">Dinner</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E67E73' }}></div>
                  <span className="text-gray-600">Snack</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/patient/dashboard')}
          className="w-full h-11 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5 mt-8"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
