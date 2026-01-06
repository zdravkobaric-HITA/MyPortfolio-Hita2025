import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Mail, Building, Calendar, ChevronDown } from 'lucide-react';
import NutritionistSidebar from '../../components/NutritionistSidebar';
import { toast } from 'sonner';

export default function Settings() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Dr. Ana Marković',
    email: 'ana.markovic@nutricare.com',
    clinic: 'Zagreb Nutrition Center',
    experience: '5-10'
  });
  const [errors, setErrors] = useState({ fullName: '' });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName.trim()) {
      setErrors({ fullName: 'This field is required' });
      return;
    }
    
    setErrors({ fullName: '' });
    toast.success('Settings updated successfully!');
  };

  const handleCancel = () => {
    navigate('/nutritionist/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <div className="bg-white border-b border-gray-100 h-[72px] px-6 flex items-center justify-between">
        <h2 className="font-bold" style={{ color: '#1E3A5F' }}>NutriCare</h2>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white font-medium">
            AN
          </div>
        </div>
      </div>

      <div className="flex">
        <NutritionistSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/nutritionist/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F] mb-6 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Dashboard
          </button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>

          {/* Content Card */}
          <div className="max-w-3xl bg-white rounded-xl p-6 border border-gray-100">
            <form onSubmit={handleSave}>
              {/* Section 1: Profile Information */}
              <div className="mb-8">
                <h3 className="mb-4">Profile Information</h3>
                <div className="border-t border-gray-100 pt-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block mb-2 font-medium text-sm">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full h-11 pl-12 pr-4 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#1E3A5F]`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs" style={{ color: '#E67E73' }}>{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block mb-2 font-medium text-sm">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        value={formData.email}
                        readOnly
                        className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Clinic or Practice Name */}
                  <div>
                    <label className="block mb-2 font-medium text-sm">Clinic or Practice Name</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                        placeholder="Enter clinic or practice name"
                      />
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label className="block mb-2 font-medium text-sm">Years of Experience</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full h-11 pl-12 pr-10 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#1E3A5F]"
                      >
                        <option value="0-5">0-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15-20">15-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Preferences */}
              <div className="mb-8">
                <h3 className="mb-4">Preferences</h3>
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-center text-gray-600">Additional preferences coming soon</p>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="flex justify-between gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="h-11 px-6 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-lg text-white font-medium hover:opacity-90"
                  style={{ backgroundColor: '#1E3A5F' }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
