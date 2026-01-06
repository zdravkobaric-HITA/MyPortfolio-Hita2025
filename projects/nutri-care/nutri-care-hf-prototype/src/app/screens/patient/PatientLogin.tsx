import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function PatientLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    toast.success('Login successful!');
    navigate('/patient/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[400px]">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F] mb-8"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <div className="text-center mb-8">
          <h2 className="text-[40px] font-bold mb-2" style={{ color: '#1E3A5F' }}>NutriCare</h2>
          <h1 className="mb-2">Welcome back</h1>
          <p className="text-sm text-gray-600">Log in to view your plan</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 pl-12 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-lg text-white font-medium hover:opacity-90"
            style={{ backgroundColor: '#1E3A5F' }}
          >
            Log In
          </button>

          <div className="text-center">
            <button 
              type="button"
              onClick={() => toast.info('Password reset feature coming soon')}
              className="text-sm text-gray-600 hover:text-[#1E3A5F] hover:underline transition-all duration-200 cursor-pointer"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}