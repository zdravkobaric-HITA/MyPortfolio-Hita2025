import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriInput } from '../../components/NutriInput';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export function PatientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email === 'pacijent@example.com' && password === 'password') {
        toast.success('Welcome back, John!');
        navigate('/patient/dashboard');
      } else {
        toast.error('Incorrect email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 bg-[#7BC9A6] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-xl text-white font-bold">NC</span>
          </div>
          <h1 className="nutricare-h1 mb-2">Welcome back</h1>
          <p className="nutricare-body text-[#4B5563]">Log in to view your plan</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#F3F4F6]">
          <div className="space-y-4">
            <NutriInput
              label="Email address"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={setEmail}
              error={errors.email}
              icon={<Mail className="w-5 h-5" />}
            />

            <NutriInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={setPassword}
              error={errors.password}
              icon={<Lock className="w-5 h-5" />}
            />

            <NutriButton
              fullWidth
              onClick={handleLogin}
              loading={loading}
              variant="success"
            >
              Log In
            </NutriButton>

            <div className="text-center">
              <button className="nutricare-caption text-[#4B5563] hover:text-[#7BC9A6]">
                Forgot password?
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="nutricare-body-small">
            Use email: <strong>pacijent@example.com</strong> and password: <strong>password</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
