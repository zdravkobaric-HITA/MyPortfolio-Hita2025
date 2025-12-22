import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriInput } from '../../components/NutriInput';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export function NutritionistLogin() {
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
      if (email === 'zdravko@nutricare.com' && password === 'password') {
        toast.success('Welcome back, Dr. Zdravko!');
        navigate('/nutritionist/dashboard');
      } else if (email === 'new@nutricare.com' && password === 'password') {
        toast.success('Welcome! Let\'s set up your profile');
        navigate('/nutritionist/onboarding');
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white font-bold">NC</span>
          </div>
          <h1 className="nutricare-h1 mb-2">Welcome to NutriCare Lite</h1>
          <p className="nutricare-body-small">Log in to manage your patients</p>
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
            >
              Log In
            </NutriButton>

            <div className="text-center">
              <button className="nutricare-caption text-[#4B5563] hover:text-[#1E3A5F]">
                Forgot password?
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#F3F4F6]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white nutricare-body-small">Or continue with</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full h-11 flex items-center justify-center gap-2 border-2 border-[#D1D5DB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="nutricare-body">Continue with Google</span>
              </button>

              <button className="w-full h-11 flex items-center justify-center gap-2 border-2 border-[#D1D5DB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="nutricare-body">Continue with Apple</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="nutricare-body-small">
            Use email: <strong>zdravko@nutricare.com</strong> and password: <strong>password</strong>
          </p>
          <p className="nutricare-body-small mt-2">
            Or try: <strong>new@nutricare.com</strong> to see onboarding
          </p>
        </div>
      </div>
    </div>
  );
}