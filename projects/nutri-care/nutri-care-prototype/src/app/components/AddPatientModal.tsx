import React, { useState } from 'react';
import { X, User, Mail, Target } from 'lucide-react';
import { NutriButton } from './NutriButton';
import { NutriInput, NutriSelect } from './NutriInput';
import { toast } from 'sonner';

interface AddPatientModalProps {
  onClose: () => void;
}

export function AddPatientModal({ onClose }: AddPatientModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; goal?: string }>({});
  const [loading, setLoading] = useState(false);

  const goalOptions = [
    { value: '', label: 'Select goal' },
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'weight-gain', label: 'Weight Gain' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'athletic-performance', label: 'Athletic Performance' },
    { value: 'health-management', label: 'Health Management' },
  ];

  const validate = () => {
    const newErrors: { fullName?: string; email?: string; goal?: string } = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'This field is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!goal) {
      newErrors.goal = 'This field is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check for duplicate email (mock)
      if (email === 'pacijent@example.com') {
        toast.error('A patient with this email already exists');
        setLoading(false);
        return;
      }
      
      toast.success('Patient added successfully! Invitation sent.');
      setLoading(false);
      handleClose();
    }, 1000);
  };

  const handleClose = () => {
    setFullName('');
    setEmail('');
    setGoal('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-[560px] bg-white rounded-2xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#4B5563] hover:text-[#E67E73] hover:bg-[#F9FAFB] rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="nutricare-h2 mb-6">Add New Patient</h2>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <NutriInput
            label="Full Name"
            placeholder="Jane Smith"
            value={fullName}
            onChange={setFullName}
            error={errors.fullName}
            icon={<User className="w-5 h-5" />}
            required
          />

          <NutriInput
            label="Email Address"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={setEmail}
            error={errors.email}
            icon={<Mail className="w-5 h-5" />}
            required
          />

          <NutriSelect
            label="Primary Goal"
            value={goal}
            onChange={setGoal}
            options={goalOptions}
            error={errors.goal}
            icon={<Target className="w-5 h-5" />}
            required
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3">
          <NutriButton
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </NutriButton>
          <NutriButton
            onClick={handleSubmit}
            loading={loading}
          >
            Add Patient
          </NutriButton>
        </div>
      </div>
    </div>
  );
}