import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface Patient {
  id: string | number;
  name: string;
  email: string;
  goal: string;
  currentWeight: number;
  targetWeight: number;
  [key: string]: any;
}

interface EditPatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patient: Patient;
  onSave: (patient: Patient) => void;
}

export default function EditPatientModal({
  open,
  onOpenChange,
  patient,
  onSave,
}: EditPatientModalProps) {
  const [formData, setFormData] = useState({
    name: patient.name,
    email: patient.email,
    goal: patient.goal,
    currentWeight: patient.currentWeight,
    targetWeight: patient.targetWeight,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...patient,
      ...formData,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Edit Patient</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block mb-2">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
              placeholder="Enter patient name"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
              placeholder="Enter email address"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Goal *</label>
            <select
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
              required
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Weight Gain">Weight Gain</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Athletic Performance">Athletic Performance</option>
              <option value="Health Management">Health Management</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Current Weight (kg) *</label>
              <input
                type="number"
                step="0.1"
                value={formData.currentWeight}
                onChange={(e) => setFormData({ ...formData, currentWeight: parseFloat(e.target.value) })}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                placeholder="0.0"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Target Weight (kg) *</label>
              <input
                type="number"
                step="0.1"
                value={formData.targetWeight}
                onChange={(e) => setFormData({ ...formData, targetWeight: parseFloat(e.target.value) })}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                placeholder="0.0"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 h-11 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-11 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
