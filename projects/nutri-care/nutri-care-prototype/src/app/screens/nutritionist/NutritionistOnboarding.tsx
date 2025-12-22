import React, { useState } from 'react';
import { User, Building, Calendar } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriInput, NutriSelect } from '../../components/NutriInput';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export function NutritionistOnboarding() {
  const [fullName, setFullName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [experience, setExperience] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const experienceOptions = [
    { value: '', label: 'Select years' },
    { value: '0-5', label: '0-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10-15', label: '10-15 years' },
    { value: '15-20', label: '15-20 years' },
    { value: '20+', label: '20+ years' },
  ];

  const validate = () => {
    const newErrors: { fullName?: string } = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      toast.success('Profile created successfully!');
      navigate('/nutritionist/dashboard');
      setLoading(false);
    }, 1000);
  };

  const handleSkip = () => {
    navigate('/nutritionist/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-[640px]">
        {/* Progress Indicator */}
        <p className="nutricare-caption text-center mb-8">Step 1 of 1</p>

        {/* Form Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F3F4F6]">
          <div className="mb-6">
            <h2 className="nutricare-h2 mb-2">Complete your profile</h2>
            <p className="nutricare-body-small">Help us personalize your experience</p>
          </div>

          <div className="space-y-4">
            <NutriInput
              label="Full Name"
              placeholder="John Doe"
              value={fullName}
              onChange={setFullName}
              error={errors.fullName}
              icon={<User className="w-5 h-5" />}
              required
            />

            <NutriInput
              label="Clinic or Practice Name"
              placeholder="Nutrition Clinic"
              value={clinicName}
              onChange={setClinicName}
              icon={<Building className="w-5 h-5" />}
            />

            <NutriSelect
              label="Years of Experience"
              value={experience}
              onChange={setExperience}
              options={experienceOptions}
              icon={<Calendar className="w-5 h-5" />}
            />

            <div className="pt-4 space-y-3">
              <NutriButton
                fullWidth
                onClick={handleContinue}
                loading={loading}
              >
                Continue
              </NutriButton>

              <div className="text-center">
                <button 
                  onClick={handleSkip}
                  className="nutricare-caption text-[#4B5563] hover:text-[#1E3A5F]"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
