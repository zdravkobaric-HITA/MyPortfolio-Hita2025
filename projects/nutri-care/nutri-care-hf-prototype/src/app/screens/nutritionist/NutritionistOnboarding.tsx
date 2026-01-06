import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function NutritionistOnboarding() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName) {
      toast.error('Please enter your full name');
      return;
    }
    
    toast.success('Profile completed!');
    navigate('/nutritionist/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[640px]">
        <button
          onClick={() => navigate('/nutritionist/login')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F] mb-8"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <div className="bg-white rounded-xl p-8">
          <p className="text-xs font-medium text-gray-600 mb-2">Step 1 of 1</p>
          <h2 className="mb-6">Complete your profile</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Clinic Name</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
                  placeholder="Enter clinic name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Years of Experience</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
              >
                <option value="">Select experience</option>
                <option value="0-5">0-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 h-11 rounded-lg text-white font-medium hover:opacity-90"
                style={{ backgroundColor: '#1E3A5F' }}
              >
                Continue
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/nutritionist/dashboard')}
                className="text-sm text-gray-600 hover:text-[#1E3A5F]"
              >
                Skip for now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
