import React from 'react';
import { Bell, Calendar, CheckCircle, Clipboard, Flame, Scale, Eye, CalendarDays, Sunrise, Sun, Moon, Apple } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { mockDietPlans } from '../../data/mockData';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export function PatientDashboard() {
  const navigate = useNavigate();
  const todaysPlan = mockDietPlans['1']; // Get plan for patient ID 1
  const hasCheckedIn = true; // Mock check-in status
  const currentWeight = 75.2;
  const streak = 12;

  const mealIcons = {
    breakfast: Sunrise,
    lunch: Sun,
    dinner: Moon,
    snack: Apple,
  };

  const mealColors = {
    breakfast: 'text-[#7BC9A6]',
    lunch: 'text-[#F4A261]',
    dinner: 'text-[#1E3A5F]',
    snack: 'text-[#E67E73]',
  };

  const handleViewMeal = (mealType: string) => {
    navigate('/patient/daily-plan');
  };

  const handleCheckIn = () => {
    navigate('/patient/check-in');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Top Bar */}
      <div className="h-16 bg-white border-b border-[#F3F4F6] px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#7BC9A6] rounded-lg flex items-center justify-center">
            <span className="text-base text-white font-bold">NC</span>
          </div>
          <span className="nutricare-h3 text-lg">NutriCare</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-[#4B5563]">
          <Calendar className="w-5 h-5" />
          <span className="nutricare-body">Monday, Dec 22</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-[#4B5563]" />
          </button>
          <div className="w-8 h-8 bg-[#1E3A5F] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">JD</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Greeting Card */}
        <NutriCard className="mb-8">
          <h2 className="nutricare-h2 mb-2">Good morning, John!</h2>
          <p className="nutricare-body text-[#4B5563]">Here's your plan for today</p>
        </NutriCard>

        {/* Today's Meals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {todaysPlan.meals.map((meal) => {
            const Icon = mealIcons[meal.type];
            const colorClass = mealColors[meal.type];
            
            return (
              <NutriCard key={meal.id} hover onClick={() => handleViewMeal(meal.type)} padding="md">
                <div className="flex items-start gap-4">
                  <div className={`${colorClass}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="nutricare-h3 mb-1 capitalize">{meal.type}</h3>
                    {meal.time && (
                      <p className="nutricare-caption text-[#4B5563] mb-2">{meal.time}</p>
                    )}
                    <p className="nutricare-body-small line-clamp-2">
                      {meal.description}
                    </p>
                    <button className="text-[#7BC9A6] nutricare-body-small font-medium mt-2 hover:underline">
                      View details →
                    </button>
                  </div>
                </div>
              </NutriCard>
            );
          })}
        </div>

        {/* Check-in Status Card */}
        <NutriCard className={`mb-6 ${hasCheckedIn ? 'bg-white' : 'bg-[#7BC9A6]/10 border-[#7BC9A6]'}`}>
          {hasCheckedIn ? (
            <div className="flex items-center gap-4">
              <CheckCircle className="w-12 h-12 text-[#7BC9A6]" />
              <div className="flex-1">
                <h3 className="nutricare-h3 mb-1">Great! You've checked in today</h3>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#F4A261]" />
                  <span className="nutricare-body text-[#4B5563]">{streak} day streak 🔥</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Clipboard className="w-12 h-12 text-[#7BC9A6]" />
              <div className="flex-1">
                <h3 className="nutricare-h3 mb-2">Don't forget your daily check-in!</h3>
                <NutriButton variant="success" onClick={handleCheckIn}>
                  Check In Now
                </NutriButton>
              </div>
            </div>
          )}
        </NutriCard>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <NutriCard padding="md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#7BC9A6]/10 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#7BC9A6]" />
              </div>
              <div>
                <p className="nutricare-caption text-[#4B5563]">Current Weight</p>
                <p className="nutricare-h3">{currentWeight} kg</p>
              </div>
            </div>
          </NutriCard>

          <NutriCard padding="md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#F4A261]" />
              </div>
              <div>
                <p className="nutricare-caption text-[#4B5563]">Streak</p>
                <p className="nutricare-h3">{streak} days</p>
              </div>
            </div>
          </NutriCard>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <NutriButton
            fullWidth
            variant="primary"
            icon={<Eye className="w-5 h-5" />}
            onClick={() => navigate('/patient/daily-plan')}
          >
            View Full Daily Plan
          </NutriButton>
          <NutriButton
            fullWidth
            variant="secondary"
            icon={<CalendarDays className="w-5 h-5" />}
            onClick={() => navigate('/patient/weekly-plan')}
          >
            View Weekly Menu
          </NutriButton>
        </div>
      </div>
    </div>
  );
}