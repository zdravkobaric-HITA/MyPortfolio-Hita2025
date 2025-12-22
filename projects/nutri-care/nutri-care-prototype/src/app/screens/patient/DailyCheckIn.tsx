import React, { useState } from 'react';
import { Scale, Check, Activity } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { NutriInput, NutriTextarea } from '../../components/NutriInput';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function DailyCheckIn() {
  const [weight, setWeight] = useState('');
  const [adherence, setAdherence] = useState<'fully' | 'partially' | 'not' | ''>('');
  const [activityLevel, setActivityLevel] = useState<'low' | 'medium' | 'high' | ''>('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ weight?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const adherenceOptions = [
    { value: 'fully', label: 'Fully followed', icon: '✓', color: '#7BC9A6' },
    { value: 'partially', label: 'Partially followed', icon: '≈', color: '#F4A261' },
    { value: 'not', label: 'Did not follow', icon: '✗', color: '#E67E73' },
  ];

  const activityOptions = [
    { value: 'low', label: 'Low', description: 'Light walking, minimal exercise', icon: '🚶' },
    { value: 'medium', label: 'Medium', description: 'Moderate exercise, 30-60 min', icon: '🏃' },
    { value: 'high', label: 'High', description: 'Intense exercise, 60+ min', icon: '💪' },
  ];

  const validate = () => {
    const newErrors: { weight?: string } = {};
    
    if (!weight) {
      newErrors.weight = 'Weight is required';
    } else if (isNaN(Number(weight)) || Number(weight) < 30 || Number(weight) > 300) {
      newErrors.weight = 'Please enter a valid weight (30-300 kg)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    const weightNum = Number(weight);
    if (weightNum < 40 || weightNum > 200) {
      // Show warning for unusual weight
      if (!window.confirm('Weight seems unusual (40-200 kg range). Are you sure this is correct?')) {
        return;
      }
    }
    
    setLoading(true);
    
    setTimeout(() => {
      toast.success('Check-in saved successfully!');
      navigate('/patient/check-in-confirmation');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-[640px]">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="nutricare-h1 mb-2">How was your day?</h1>
          <p className="nutricare-body text-[#4B5563]">Monday, Dec 22</p>
        </div>

        {/* Form Card */}
        <NutriCard className="mb-24">
          <div className="space-y-6">
            {/* Weight Section */}
            <div>
              <NutriInput
                label="Today's Weight"
                type="number"
                placeholder="Enter weight in kg"
                value={weight}
                onChange={setWeight}
                error={errors.weight}
                icon={<Scale className="w-5 h-5" />}
                required
                helpText="Last recorded: 75.2 kg (Yesterday)"
              />
            </div>

            {/* Adherence Section */}
            <div>
              <label className="nutricare-label mb-3 block">Did you follow your meal plan?</label>
              <div className="space-y-3">
                {adherenceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAdherence(option.value as any)}
                    className={`
                      w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all
                      ${adherence === option.value
                        ? `border-[${option.color}] bg-[${option.color}]/5`
                        : 'border-[#D1D5DB] bg-white hover:bg-[#F9FAFB]'
                      }
                    `}
                    style={{
                      borderColor: adherence === option.value ? option.color : undefined,
                      backgroundColor: adherence === option.value ? `${option.color}15` : undefined,
                    }}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="nutricare-body">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Section */}
            <div>
              <label className="nutricare-label mb-3 block">Activity Level</label>
              <div className="grid grid-cols-3 gap-3">
                {activityOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setActivityLevel(option.value as any)}
                    className={`
                      p-4 rounded-lg border-2 transition-all text-center
                      ${activityLevel === option.value
                        ? 'border-[#1E3A5F] bg-[#1E3A5F]/5'
                        : 'border-[#D1D5DB] bg-white hover:bg-[#F9FAFB]'
                      }
                    `}
                  >
                    <span className="text-3xl block mb-2">{option.icon}</span>
                    <span className="nutricare-body font-medium block mb-1">{option.label}</span>
                    <span className="nutricare-caption block">{option.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes Section */}
            <div>
              <NutriTextarea
                label="Additional Notes (Optional)"
                placeholder="Any challenges, wins, or questions?"
                value={notes}
                onChange={setNotes}
                rows={3}
              />
              <div className="flex justify-end mt-1">
                <span className="nutricare-caption">{notes.length} / 500</span>
              </div>
            </div>
          </div>
        </NutriCard>

        {/* Actions */}
        <div className="space-y-3">
          <NutriButton
            fullWidth
            icon={<Check className="w-5 h-5" />}
            onClick={handleSubmit}
            loading={loading}
          >
            Save Check-in
          </NutriButton>
          <div className="text-center">
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="nutricare-caption text-[#4B5563] hover:text-[#1E3A5F]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
