import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Scale, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function DailyCheckIn() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [adherence, setAdherence] = useState('');
  const [activity, setActivity] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!weight) {
      toast.error('Weight is required');
      return;
    }
    if (!adherence) {
      toast.error('Please select adherence');
      return;
    }
    if (!activity) {
      toast.error('Please select activity level');
      return;
    }
    
    navigate('/patient/check-in/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <button
          onClick={() => navigate('/patient/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F]"
        >
          <ChevronLeft size={20} />
          Back to Dashboard
        </button>
      </div>

      <div className="max-w-[640px] mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="mb-2">How was your day?</h1>
          <p className="text-gray-600">Wednesday, Dec 25</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-gray-100">
          <div className="space-y-6">
            {/* Weight */}
            <div>
              <label className="block mb-2">Today's Weight *</label>
              <div className="relative">
                <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full h-11 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
                  placeholder="Enter weight in kg"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Last recorded: 75.2 kg (Yesterday)</p>
            </div>

            {/* Adherence */}
            <div>
              <label className="block mb-3">Did you follow your meal plan? *</label>
              <div className="space-y-3">
                {[
                  { value: 'fully', label: 'Fully followed', icon: Check, color: '#7BC9A6' },
                  { value: 'partially', label: 'Partially followed', icon: '≈', color: '#F4A261' },
                  { value: 'not', label: 'Did not follow', icon: '✗', color: '#E67E73' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      adherence === option.value ? 'border-[#1E3A5F] bg-[#1E3A5F]/5' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="adherence"
                      value={option.value}
                      checked={adherence === option.value}
                      onChange={(e) => setAdherence(e.target.value)}
                      className="w-5 h-5"
                      style={{ accentColor: option.color }}
                    />
                    <span className="flex-1">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div>
              <label className="block mb-3">Activity Level *</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'low', label: 'Low', icon: '🚶' },
                  { value: 'medium', label: 'Medium', icon: '🏃' },
                  { value: 'high', label: 'High', icon: '💪' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      activity === option.value ? 'border-[#1E3A5F] bg-[#1E3A5F]/5' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="activity"
                      value={option.value}
                      checked={activity === option.value}
                      onChange={(e) => setActivity(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-2xl">{option.icon}</span>
                    <span className="text-sm font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-2">Any challenges, wins, or questions? (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                maxLength={500}
                className="w-full h-24 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-2 focus:border-[#1E3A5F]"
                placeholder="Share your thoughts..."
              />
              <p className="text-xs text-gray-500 mt-1 text-right">{notes.length} / 500</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <button
              type="submit"
              className="w-full h-11 rounded-lg text-white font-medium hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              <Check size={20} />
              Save Check-in
            </button>
            <button
              type="button"
              onClick={() => navigate('/patient/dashboard')}
              className="text-gray-600 hover:text-[#1E3A5F]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
