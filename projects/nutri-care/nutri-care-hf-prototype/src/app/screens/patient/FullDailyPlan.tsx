import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sunrise, Sun, Moon, Apple } from 'lucide-react';
import { mealExamples } from '../../data/mockData';

export default function FullDailyPlan() {
  const navigate = useNavigate();
  const [expandedMeal, setExpandedMeal] = useState<string | null>('breakfast');

  const meals = [
    { id: 'breakfast', icon: Sunrise, label: 'Breakfast', time: '8:00 AM', color: '#7BC9A6', description: mealExamples.breakfast, notes: 'Tip: Prepare the yogurt bowl the night before for a quick morning meal.' },
    { id: 'lunch', icon: Sun, label: 'Lunch', time: '1:00 PM', color: '#F4A261', description: mealExamples.lunch, notes: 'You can meal prep the chicken and quinoa in bulk for the week.' },
    { id: 'dinner', icon: Moon, label: 'Dinner', time: '7:00 PM', color: '#1E3A5F', description: mealExamples.dinner, notes: 'Salmon is rich in Omega-3. Try to have it 2-3 times per week.' },
    { id: 'snack', icon: Apple, label: 'Snack', time: 'Anytime', color: '#E67E73', description: mealExamples.snack, notes: 'Keep portion sizes in check for healthy snacking.' }
  ];

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
          <h2>Wednesday, Dec 25</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto p-8">
        <div className="space-y-4">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setExpandedMeal(expandedMeal === meal.id ? null : meal.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${meal.color}20` }}>
                    <meal.icon size={24} style={{ color: meal.color }} />
                  </div>
                  <div className="text-left">
                    <h3>{meal.label}</h3>
                    <p className="text-sm text-gray-600">{meal.time}</p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className={`text-gray-400 transition-transform ${expandedMeal === meal.id ? 'rotate-90' : ''}`}
                />
              </button>

              {expandedMeal === meal.id && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-4 space-y-4">
                  <div>
                    <h4 className="mb-2">Meal Details</h4>
                    <p className="text-gray-700">{meal.description}</p>
                  </div>

                  <div className="bg-[#7BC9A6]/10 border-l-4 border-[#7BC9A6] p-4 rounded">
                    <p className="text-sm font-medium mb-1" style={{ color: '#1E3A5F' }}>Nutritionist's Note</p>
                    <p className="text-sm text-gray-700">{meal.notes}</p>
                  </div>
                </div>
              )}
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
