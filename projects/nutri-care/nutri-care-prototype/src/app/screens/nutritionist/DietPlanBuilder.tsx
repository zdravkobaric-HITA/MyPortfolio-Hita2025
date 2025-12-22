import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sunrise, Sun, Moon, Apple, Save, Eye, Send, Calendar } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { NutriTextarea } from '../../components/NutriInput';
import { Switch } from '../../components/ui/switch';
import { toast } from 'sonner';

export function DietPlanBuilder() {
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');
  const [expandedMeals, setExpandedMeals] = useState<string[]>(['breakfast']);
  const [meals, setMeals] = useState({
    breakfast: 'Oatmeal with fresh berries, chia seeds, and a drizzle of honey. Green tea on the side.',
    lunch: '',
    dinner: '',
    snack: '',
  });
  const [notes, setNotes] = useState({
    breakfast: 'Remember to use low-fat milk and avoid adding extra sugar.',
    lunch: '',
    dinner: '',
    snack: '',
  });

  const mealConfig = [
    { id: 'breakfast', name: 'Breakfast', icon: Sunrise, color: 'text-[#7BC9A6]', bgColor: 'bg-[#7BC9A6]/10' },
    { id: 'lunch', name: 'Lunch', icon: Sun, color: 'text-[#F4A261]', bgColor: 'bg-[#F4A261]/10' },
    { id: 'dinner', name: 'Dinner', icon: Moon, color: 'text-[#1E3A5F]', bgColor: 'bg-[#1E3A5F]/10' },
    { id: 'snack', name: 'Snacks', icon: Apple, color: 'text-[#E67E73]', bgColor: 'bg-[#E67E73]/10' },
  ];

  const toggleMeal = (mealId: string) => {
    setExpandedMeals(prev =>
      prev.includes(mealId)
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const handleMealChange = (mealId: string, value: string) => {
    setMeals(prev => ({ ...prev, [mealId]: value }));
  };

  const handleNotesChange = (mealId: string, value: string) => {
    setNotes(prev => ({ ...prev, [mealId]: value }));
  };

  const handleSaveDraft = () => {
    toast.success('Draft saved successfully');
  };

  const handlePreview = () => {
    toast.info('Preview as patient view would open');
  };

  const handleAssign = () => {
    const hasContent = Object.values(meals).some(meal => meal.trim());
    
    if (!hasContent) {
      toast.error('Please add at least one meal');
      return;
    }
    
    toast.success('Diet plan assigned successfully!');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6] px-12 py-6">
        <div className="flex items-center justify-between">
          <h1 className="nutricare-h1">Create Diet Plan for John Doe</h1>
          <div className="flex items-center gap-3">
            <span className="nutricare-body">Daily Plan</span>
            <Switch
              checked={viewMode === 'weekly'}
              onCheckedChange={(checked) => setViewMode(checked ? 'weekly' : 'daily')}
            />
            <span className="nutricare-body">Weekly Menu</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-8">
        {viewMode === 'daily' ? (
          <div className="space-y-4 mb-24">
            {mealConfig.map((meal) => {
              const Icon = meal.icon;
              const isExpanded = expandedMeals.includes(meal.id);
              const mealContent = meals[meal.id as keyof typeof meals];
              const preview = mealContent ? mealContent.slice(0, 60) + (mealContent.length > 60 ? '...' : '') : 'No content added yet';

              return (
                <NutriCard key={meal.id} padding="lg">
                  {/* Header */}
                  <button
                    onClick={() => toggleMeal(meal.id)}
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${meal.bgColor} p-3 rounded-lg`}>
                        <Icon className={`w-6 h-6 ${meal.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="nutricare-h3">{meal.name}</h3>
                        {!isExpanded && (
                          <p className="nutricare-body-small mt-1">{preview}</p>
                        )}
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#4B5563]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4B5563]" />
                    )}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-6 space-y-4">
                      <NutriTextarea
                        label="Meal Description"
                        placeholder="Describe the meal..."
                        value={mealContent}
                        onChange={(value) => handleMealChange(meal.id, value)}
                        rows={3}
                      />

                      <div className="border-2 border-dashed border-[#D1D5DB] rounded-lg p-8 text-center">
                        <div className="w-12 h-12 bg-[#F9FAFB] rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-[#4B5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <p className="nutricare-body-small mb-1">Click to upload or drag image</p>
                        <p className="nutricare-caption">PNG, JPG up to 5MB</p>
                      </div>

                      <NutriTextarea
                        label="Notes for Patient (Optional)"
                        placeholder="Add notes for patient"
                        value={notes[meal.id as keyof typeof notes]}
                        onChange={(value) => handleNotesChange(meal.id, value)}
                        rows={2}
                      />
                    </div>
                  )}
                </NutriCard>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-[#D1D5DB] mx-auto mb-4" />
            <h2 className="nutricare-h2 text-[#4B5563] mb-2">Weekly menu view</h2>
            <p className="nutricare-body-small">7-day grid would be displayed here</p>
          </div>
        )}
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F3F4F6] px-12 py-4 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={handleSaveDraft}
            className="flex items-center gap-2 text-[#4B5563] hover:text-[#1E3A5F]"
          >
            <Save className="w-5 h-5" />
            <span className="nutricare-body font-medium">Save Draft</span>
          </button>

          <div className="flex gap-3">
            <NutriButton
              variant="secondary"
              icon={<Eye className="w-5 h-5" />}
              onClick={handlePreview}
            >
              Preview as Patient
            </NutriButton>
            <NutriButton
              icon={<Send className="w-5 h-5" />}
              onClick={handleAssign}
            >
              Assign Plan
            </NutriButton>
          </div>
        </div>
      </div>
    </div>
  );
}