import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Edit, TrendingDown, Target, Clock } from 'lucide-react';
import { patients } from '../../data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { toast } from 'sonner';
import { useState } from 'react';
import EditPatientModal from '../../components/EditPatientModal';
import DeletePatientModal from '../../components/DeletePatientModal';
import PatientCardMenu from '../../components/PatientCardMenu';

export default function PatientProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const patient = patients.find(p => p.id === id) || patients[0];
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(patient);

  const handleEditPatient = (updatedPatient: typeof patient) => {
    setCurrentPatient(updatedPatient);
    toast.success('Patient updated successfully!');
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    toast.success(`${currentPatient.name} removed successfully`);
    setTimeout(() => {
      navigate('/nutritionist/patients');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <button
          onClick={() => navigate('/nutritionist/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F] mb-4"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Header Card */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img src={currentPatient.avatar} alt={currentPatient.name} className="w-20 h-20 rounded-full" />
              <div>
                <h1 className="mb-1">{currentPatient.name}</h1>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentPatient.status === 'active' ? 'bg-[#7BC9A6]/10 text-[#7BC9A6]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {currentPatient.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 relative">
              {/* Three-Dot Menu */}
              <div className="relative -top-1">
                <PatientCardMenu
                  onViewProfile={() => {}}
                  onEditPatient={() => setShowEditModal(true)}
                  onSendMessage={() => toast.info('Messaging coming soon')}
                  onRemovePatient={() => setShowDeleteModal(true)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown size={24} style={{ color: '#7BC9A6' }} />
              <span className="text-sm text-gray-600">Current Weight</span>
            </div>
            <p className="text-3xl font-bold">{currentPatient.currentWeight} kg</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Target size={24} style={{ color: '#1E3A5F' }} />
              <span className="text-sm text-gray-600">Goal Progress</span>
            </div>
            <p className="text-3xl font-bold">{currentPatient.progress}%</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={24} style={{ color: '#F4A261' }} />
              <span className="text-sm text-gray-600">Last Check-in</span>
            </div>
            <p className="text-3xl font-bold">{currentPatient.lastCheckIn}</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="bg-white rounded-xl border border-gray-100">
          <TabsList className="w-full justify-start border-b border-gray-100 rounded-none px-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="diet-plans">Diet Plans</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2">Goal</h3>
                <p className="text-gray-600">{currentPatient.goal}</p>
              </div>
              <div>
                <h3 className="mb-2">Email</h3>
                <p className="text-gray-600">{currentPatient.email}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate(`/nutritionist/patient/${id}/diet-plan`)}
                className="h-11 px-6 rounded-lg text-white font-medium hover:opacity-90"
                style={{ backgroundColor: '#1E3A5F' }}
              >
                Create Diet Plan
              </button>
              <button
                onClick={() => navigate(`/nutritionist/patient/${id}/analytics`)}
                className="h-11 px-6 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5"
              >
                View Analytics
              </button>
            </div>
          </TabsContent>

          <TabsContent value="diet-plans" className="p-6">
            <p className="text-gray-600">No diet plans created yet.</p>
          </TabsContent>

          <TabsContent value="analytics" className="p-6">
            <p className="text-gray-600">Analytics data will appear here.</p>
          </TabsContent>

          <TabsContent value="messages" className="p-6">
            <p className="text-gray-600">No messages yet.</p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Patient Modal */}
      <EditPatientModal
        open={showEditModal}
        onOpenChange={setShowEditModal}
        patient={currentPatient}
        onSave={handleEditPatient}
      />

      {/* Delete Patient Modal */}
      <DeletePatientModal
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        patientName={currentPatient.name}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}