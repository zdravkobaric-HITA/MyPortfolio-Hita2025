import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Sunrise, Sun, Moon, Apple } from 'lucide-react';
import { toast } from 'sonner';
import { patients, mealExamples } from '../../data/mockData';

export default function DietPlanBuilder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const patient = patients.find(p => p.id === id) || patients[0];
  const [planType, setPlanType] = useState<'daily' | 'weekly'>('daily');
  const [meals, setMeals] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    snack: ''
  });

  const handleAssignPlan = () => {
    toast.success('Diet plan assigned successfully!');
    navigate(`/nutritionist/patient/${id}`);
  };

  const mealConfig = [
    { key: 'breakfast', icon: Sunrise, label: 'Breakfast', color: '#7BC9A6', example: mealExamples.breakfast },
    { key: 'lunch', icon: Sun, label: 'Lunch', color: '#F4A261', example: mealExamples.lunch },
    { key: 'dinner', icon: Moon, label: 'Dinner', color: '#1E3A5F', example: mealExamples.dinner },
    { key: 'snack', icon: Apple, label: 'Snacks', color: '#E67E73', example: mealExamples.snack }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <button
          onClick={() => navigate(`/nutritionist/patient/${id}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F]"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-6">
          <h1 className="mb-2">Create Diet Plan for {patient.name}</h1>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setPlanType('daily')}
              className={`px-6 py-2 rounded-lg font-medium ${
                planType === 'daily' ? 'bg-[#1E3A5F] text-white' : 'bg-white border-2 border-gray-300 text-gray-700'
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setPlanType('weekly')}
              className={`px-6 py-2 rounded-lg font-medium ${
                planType === 'weekly' ? 'bg-[#1E3A5F] text-white' : 'bg-white border-2 border-gray-300 text-gray-700'
              }`}
            >
              Weekly
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {mealConfig.map((meal) => (
            <div key={meal.key} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <meal.icon size={32} style={{ color: meal.color }} />
                <h3>{meal.label}</h3>
              </div>

              <textarea
                value={meals[meal.key as keyof typeof meals]}
                onChange={(e) => setMeals({ ...meals, [meal.key]: e.target.value })}
                placeholder={`Describe the ${meal.label.toLowerCase()}...\n\nExample: ${meal.example}`}
                className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-[#1E3A5F]"
              />

              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-2">Notes for patient (optional)</label>
                <input
                  type="text"
                  placeholder="Add special instructions or notes"
                  className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 mt-8 -mx-8 flex items-center justify-between">
          <button className="text-gray-600 hover:text-[#1E3A5F]">Save Draft</button>
          <div className="flex gap-4">
            <button className="h-11 px-6 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5">
              Preview as Patient
            </button>
            <button
              onClick={handleAssignPlan}
              className="h-11 px-6 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              Assign Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
