import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Plus } from 'lucide-react';
import { patients as initialPatients } from '../../data/mockData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { toast } from 'sonner';
import NutritionistSidebar from '../../components/NutritionistSidebar';
import PatientCardMenu from '../../components/PatientCardMenu';
import DeletePatientModal from '../../components/DeletePatientModal';
import EditPatientModal from '../../components/EditPatientModal';

export default function Patients() {
  const navigate = useNavigate();
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', email: '', goal: '' });
  const [patientList, setPatientList] = useState(initialPatients);
  const [deletePatient, setDeletePatient] = useState<{ id: number; name: string } | null>(null);
  const [editPatient, setEditPatient] = useState<typeof initialPatients[0] | null>(null);
  const [removingPatientId, setRemovingPatientId] = useState<number | null>(null);

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatient.name || !newPatient.email || !newPatient.goal) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Patient added successfully!');
    setShowAddPatient(false);
    setNewPatient({ name: '', email: '', goal: '' });
  };

  const handleDeleteConfirm = () => {
    if (!deletePatient) return;
    
    setRemovingPatientId(deletePatient.id);
    
    // Wait for modal to close and animation to complete
    setTimeout(() => {
      setPatientList(patientList.filter(p => p.id !== deletePatient.id));
      toast.success(`${deletePatient.name} removed successfully`);
      setRemovingPatientId(null);
    }, 500);
    
    setDeletePatient(null);
  };

  const handleEditPatient = (updatedPatient: typeof initialPatients[0]) => {
    setPatientList(patientList.map(p => p.id === updatedPatient.id ? updatedPatient : p));
    toast.success('Patient updated successfully!');
    setEditPatient(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <div className="bg-white border-b border-gray-100 h-[72px] px-6 flex items-center justify-between">
        <h2 className="font-bold" style={{ color: '#1E3A5F' }}>NutriCare</h2>
        <div className="relative flex-1 max-w-[400px] mx-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={24} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white font-medium">
            AN
          </div>
        </div>
      </div>

      <div className="flex">
        <NutritionistSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1>Patients</h1>
            <button
              onClick={() => setShowAddPatient(true)}
              className="flex items-center gap-2 h-11 px-6 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              <Plus size={20} />
              Add Patient
            </button>
          </div>

          {/* Patient Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientList.map((patient) => (
              <div
                key={patient.id}
                className={`bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative ${
                  removingPatientId === patient.id ? 'animate-[fadeOut_300ms_ease-out_forwards]' : ''
                }`}
                onClick={() => navigate(`/nutritionist/patient/${patient.id}`)}
              >
                {/* Three-Dot Menu */}
                <PatientCardMenu
                  onViewProfile={() => navigate(`/nutritionist/patient/${patient.id}`)}
                  onEditPatient={() => setEditPatient(patient)}
                  onSendMessage={() => toast.info('Messaging coming soon')}
                  onRemovePatient={() => setDeletePatient({ id: patient.id, name: patient.name })}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={patient.avatar} alt={patient.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="mb-1">{patient.name}</h3>
                      <p className="text-xs text-gray-500">{patient.lastCheckIn}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${patient.status === 'active' ? 'bg-[#7BC9A6]' : 'bg-gray-300'}`} />
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Goal: {patient.goal}</span>
                    <span className="text-[#7BC9A6] font-medium">{patient.adherence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      <Dialog open={showAddPatient} onOpenChange={setShowAddPatient}>
        <DialogContent className="sm:max-w-[560px]">
          <DialogHeader>
            <DialogTitle>Add New Patient</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddPatient} className="space-y-4 mt-4">
            <div>
              <label className="block mb-2">Full Name *</label>
              <input
                type="text"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                placeholder="Enter patient name"
              />
            </div>

            <div>
              <label className="block mb-2">Email *</label>
              <input
                type="email"
                value={newPatient.email}
                onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block mb-2">Goal *</label>
              <select
                value={newPatient.goal}
                onChange={(e) => setNewPatient({ ...newPatient, goal: e.target.value })}
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F]"
              >
                <option value="">Select goal</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Athletic Performance">Athletic Performance</option>
                <option value="Health Management">Health Management</option>
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddPatient(false)}
                className="flex-1 h-11 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 h-11 rounded-lg text-white font-medium hover:opacity-90"
                style={{ backgroundColor: '#1E3A5F' }}
              >
                Add Patient
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Patient Modal */}
      {deletePatient && (
        <DeletePatientModal
          open={!!deletePatient}
          onOpenChange={(open) => !open && setDeletePatient(null)}
          patientName={deletePatient.name}
          onConfirm={handleDeleteConfirm}
        />
      )}

      {/* Edit Patient Modal */}
      {editPatient && (
        <EditPatientModal
          open={!!editPatient}
          onOpenChange={(open) => !open && setEditPatient(null)}
          patient={editPatient}
          onSave={handleEditPatient}
        />
      )}
    </div>
  );
}