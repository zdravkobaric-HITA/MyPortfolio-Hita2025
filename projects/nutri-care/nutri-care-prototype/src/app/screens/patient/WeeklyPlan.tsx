import React from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Sunrise, Sun, Moon, Apple, Check } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { useNavigate } from 'react-router-dom';

export function WeeklyPlan() {
  const navigate = useNavigate();

  const weekDays = [
    { day: 'Mon', date: 16, isToday: false, hasCheckIn: true, hasPlan: true },
    { day: 'Tue', date: 17, isToday: false, hasCheckIn: true, hasPlan: true },
    { day: 'Wed', date: 18, isToday: false, hasCheckIn: false, hasPlan: true },
    { day: 'Thu', date: 19, isToday: false, hasCheckIn: true, hasPlan: true },
    { day: 'Fri', date: 20, isToday: false, hasCheckIn: true, hasPlan: true },
    { day: 'Sat', date: 21, isToday: false, hasCheckIn: true, hasPlan: true },
    { day: 'Sun', date: 22, isToday: true, hasCheckIn: false, hasPlan: true },
  ];

  const mealIcons = [
    { icon: Sunrise, color: 'text-[#7BC9A6]' },
    { icon: Sun, color: 'text-[#F4A261]' },
    { icon: Moon, color: 'text-[#1E3A5F]' },
    { icon: Apple, color: 'text-[#E67E73]' },
  ];

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
          <h2 className="nutricare-h2">This Week (Dec 16-22)</h2>
          <button className="p-2 hover:bg-[#F9FAFB] rounded-lg">
            <ChevronRight className="w-6 h-6 text-[#4B5563]" />
          </button>
        </div>
      </div>

      {/* Week Grid */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
          {weekDays.map((day, index) => {
            const CardComponent = day.hasPlan ? NutriCard : 'div';
            const cardProps = day.hasPlan ? { hover: true, onClick: () => navigate('/patient/daily-plan') } : {};

            return (
              <CardComponent
                key={index}
                className={`
                  ${!day.hasPlan ? 'bg-[#F3F4F6] border-2 border-dashed border-[#D1D5DB] rounded-xl p-4' : ''}
                  ${day.isToday ? 'ring-2 ring-[#7BC9A6] shadow-lg' : ''}
                `}
                padding="md"
                {...cardProps}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="nutricare-body font-semibold">
                    {day.day} {day.date}
                  </span>
                  {day.isToday && (
                    <span className="w-2 h-2 bg-[#7BC9A6] rounded-full"></span>
                  )}
                </div>

                {day.hasPlan ? (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      {mealIcons.map((meal, mealIndex) => {
                        const Icon = meal.icon;
                        return (
                          <Icon key={mealIndex} className={`w-5 h-5 ${meal.color}`} />
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${day.hasCheckIn ? 'text-[#7BC9A6]' : 'text-[#D1D5DB]'}`} />
                      <span className={`nutricare-caption ${day.hasCheckIn ? 'text-[#7BC9A6]' : 'text-[#4B5563]'}`}>
                        {day.hasCheckIn ? 'Checked in' : 'Not checked in'}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="nutricare-caption">No plan</p>
                  </div>
                )}
              </CardComponent>
            );
          })}
        </div>

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
