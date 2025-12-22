import React, { useState } from 'react';
import { Home, Users, BarChart2, Settings, Bell, Search, Plus, Eye, MessageCircle, Clock, Activity } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { AddPatientModal } from '../../components/AddPatientModal';
import { mockPatients } from '../../data/mockData';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export function NutritionistDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('patients');
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    setIsAddPatientModalOpen(true);
  };

  const handleViewPatient = (patientId: string) => {
    navigate(`/nutritionist/patient/${patientId}`);
  };

  const handleMessagePatient = (patientName: string) => {
    toast.info(`Opening messages for ${patientName}`);
  };

  const handleNavigation = (navId: string) => {
    setActiveNav(navId);
    if (navId === 'analytics') {
      navigate('/nutritionist/analytics');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-[#F3F4F6] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#F3F4F6]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <span className="text-xl text-white font-bold">NC</span>
            </div>
            <span className="nutricare-h3">NutriCare</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', icon: Home, label: 'Dashboard' },
            { id: 'patients', icon: Users, label: 'Patients' },
            { id: 'analytics', icon: BarChart2, label: 'Analytics' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                w-full h-11 flex items-center gap-3 px-3 rounded-lg transition-all duration-200
                ${activeNav === item.id
                  ? 'bg-[#7BC9A6]/10 text-[#1E3A5F] border-l-4 border-[#7BC9A6]'
                  : 'text-[#4B5563] hover:bg-[#F9FAFB]'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="nutricare-body">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-18 bg-white border-b border-[#F3F4F6] px-12 flex items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563]" />
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-12 pr-4 bg-[#F9FAFB] border border-[#F3F4F6] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-[#4B5563]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#E67E73] rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-[#7BC9A6] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">ZZ</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="nutricare-h1">Patients</h1>
            <NutriButton icon={<Plus className="w-5 h-5" />} onClick={handleAddPatient}>
              Add Patient
            </NutriButton>
          </div>

          {/* Patient Grid */}
          {filteredPatients.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-[#D1D5DB] mx-auto mb-4" />
              <h2 className="nutricare-h2 text-[#4B5563] mb-2">No patients found</h2>
              <p className="nutricare-body-small mb-6">Try adjusting your search or add a new patient</p>
              <NutriButton icon={<Plus className="w-5 h-5" />} onClick={handleAddPatient}>
                Add Patient
              </NutriButton>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPatients.map((patient) => (
                <NutriCard key={patient.id} hover>
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-[#7BC9A6] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="nutricare-h3 mb-1 truncate">{patient.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-[#4B5563]" />
                        <span className="nutricare-body-small">{patient.lastCheckIn}</span>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2 h-2 rounded-full ${patient.status === 'active' ? 'bg-[#7BC9A6]' : 'bg-[#D1D5DB]'}`}></span>
                        <span className="nutricare-caption">
                          {patient.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </div>

                      {/* Goal Progress */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="nutricare-caption">Goal Progress</span>
                          <span className="nutricare-caption font-semibold">{patient.goalProgress}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#7BC9A6] rounded-full transition-all duration-300"
                            style={{ width: `${patient.goalProgress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-[#F9FAFB] rounded-lg p-2">
                          <div className="flex items-center gap-1 mb-1">
                            <Activity className="w-3 h-3 text-[#7BC9A6]" />
                            <span className="nutricare-caption">Streak</span>
                          </div>
                          <p className="font-semibold">{patient.streak} days</p>
                        </div>
                        <div className="bg-[#F9FAFB] rounded-lg p-2">
                          <span className="nutricare-caption block mb-1">Weight</span>
                          <p className="font-semibold">{patient.currentWeight} kg</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewPatient(patient.id)}
                          className="flex-1 h-9 flex items-center justify-center gap-2 bg-[#1E3A5F] text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">View</span>
                        </button>
                        <button
                          onClick={() => handleMessagePatient(patient.name)}
                          className="w-9 h-9 flex items-center justify-center border-2 border-[#1E3A5F] text-[#1E3A5F] rounded-lg hover:bg-[#1E3A5F]/5 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </NutriCard>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Patient Modal */}
      {isAddPatientModalOpen && (
        <AddPatientModal
          onClose={() => setIsAddPatientModalOpen(false)}
        />
      )}
    </div>
  );
}