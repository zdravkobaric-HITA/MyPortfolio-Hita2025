import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Sunrise, Sun, Moon, Apple, Info } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { useNavigate } from 'react-router-dom';

export function FullDailyPlan() {
  const [expandedMeals, setExpandedMeals] = useState<string[]>([]);
  const navigate = useNavigate();

  const meals = [
    {
      id: 'breakfast',
      type: 'Breakfast',
      icon: Sunrise,
      color: 'text-[#7BC9A6]',
      time: '8:00 AM',
      description: 'Oatmeal with fresh berries, chia seeds, and a drizzle of honey. Green tea on the side. This meal provides complex carbohydrates for sustained energy throughout the morning, while the berries offer antioxidants and vitamins.',
      notes: 'Remember to use low-fat milk and avoid adding extra sugar. You can substitute honey with maple syrup if preferred.',
    },
    {
      id: 'lunch',
      type: 'Lunch',
      icon: Sun,
      color: 'text-[#F4A261]',
      time: '12:30 PM',
      description: 'Grilled chicken breast with quinoa and roasted vegetables (broccoli, carrots, bell peppers). Light olive oil dressing. This balanced meal provides protein for muscle maintenance and recovery.',
      notes: 'Make sure to include at least 2 cups of vegetables. Feel free to swap quinoa with brown rice.',
    },
    {
      id: 'dinner',
      type: 'Dinner',
      icon: Moon,
      color: 'text-[#1E3A5F]',
      time: '7:00 PM',
      description: 'Baked salmon with sweet potato and steamed asparagus. Side salad with lemon vinaigrette. Rich in omega-3 fatty acids and vitamins.',
      notes: 'Aim for a 4-6 oz portion of salmon. Sweet potato can be baked or mashed.',
    },
    {
      id: 'snack',
      type: 'Snacks',
      icon: Apple,
      color: 'text-[#E67E73]',
      description: 'Greek yogurt with almonds and a small apple. Perfect for between meals to maintain energy levels.',
    },
  ];

  const toggleMeal = (mealId: string) => {
    setExpandedMeals(prev =>
      prev.includes(mealId)
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6] px-8 py-6">
        <button
          onClick={() => navigate('/patient/dashboard')}
          className="flex items-center gap-2 text-[#4B5563] hover:text-[#1E3A5F] mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="nutricare-body">Dashboard</span>
        </button>

        <div className="flex items-center justify-center gap-4">
          <button className="p-2 hover:bg-[#F9FAFB] rounded-lg">
            <ChevronLeft className="w-6 h-6 text-[#4B5563]" />
          </button>
          <h2 className="nutricare-h2">Today</h2>
          <button className="p-2 hover:bg-[#F9FAFB] rounded-lg">
            <ChevronRight className="w-6 h-6 text-[#4B5563]" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8 space-y-4">
        {meals.map((meal) => {
          const Icon = meal.icon;
          const isExpanded = expandedMeals.includes(meal.id);
          const shortDescription = meal.description.split('.')[0] + '...';

          return (
            <NutriCard key={meal.id} padding="lg">
              <div className="flex items-start gap-4 mb-4">
                <Icon className={`w-8 h-8 ${meal.color}`} />
                <div className="flex-1">
                  <h3 className="nutricare-h3 mb-1">{meal.type}</h3>
                  {meal.time && (
                    <p className="nutricare-caption text-[#4B5563]">{meal.time}</p>
                  )}
                </div>
              </div>

              <p className="nutricare-body mb-4">
                {isExpanded ? meal.description : shortDescription}
              </p>

              {meal.description.length > 100 && (
                <button
                  onClick={() => toggleMeal(meal.id)}
                  className="text-[#1E3A5F] nutricare-body-small font-medium hover:underline mb-4"
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                </button>
              )}

              {meal.notes && isExpanded && (
                <div className="bg-[#7BC9A6]/10 border-l-3 border-[#7BC9A6] rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#7BC9A6] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="nutricare-body-small font-medium text-[#1E3A5F] mb-1">
                        Note from your nutritionist:
                      </p>
                      <p className="nutricare-body-small text-[#4B5563]">{meal.notes}</p>
                    </div>
                  </div>
                </div>
              )}
            </NutriCard>
          );
        })}

        <NutriButton
          fullWidth
          variant="secondary"
          onClick={() => navigate('/patient/dashboard')}
        >
          Back to Dashboard
        </NutriButton>
      </div>
    </div>
  );
}
