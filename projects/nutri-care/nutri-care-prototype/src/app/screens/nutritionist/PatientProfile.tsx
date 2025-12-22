import React, { useState } from 'react';
import { ArrowLeft, Edit2, Info, Calendar, BarChart2, MessageCircle, Clock, Flame, Plus } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function PatientProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const patient = {
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    currentWeight: 75.2,
    goalProgress: 65,
    lastCheckIn: '2 hours ago',
    streak: 12,
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'diet-plans', label: 'Diet Plans', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-[#F3F4F6] px-12 py-6">
        <button
          onClick={() => navigate('/nutritionist/dashboard')}
          className="flex items-center gap-2 text-[#4B5563] hover:text-[#1E3A5F] mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="nutricare-body">Back to Patients</span>
        </button>

        {/* Patient Header Card */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-[#7BC9A6] rounded-full flex items-center justify-center">
              <span className="text-3xl text-white font-semibold">JD</span>
            </div>
            <div>
              <h1 className="nutricare-h1 mb-2">{patient.name}</h1>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${patient.status === 'active' ? 'bg-[#7BC9A6]' : 'bg-[#D1D5DB]'}`}></span>
                <span className="nutricare-body-small capitalize">{patient.status}</span>
              </div>
            </div>
          </div>
          <NutriButton
            variant="secondary"
            icon={<Edit2 className="w-5 h-5" />}
            onClick={() => toast.info('Edit profile modal would open')}
          >
            Edit Profile
          </NutriButton>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#F3F4F6] px-12">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 py-4 border-b-3 transition-colors
                ${activeTab === tab.id
                  ? 'border-[#1E3A5F] text-[#1E3A5F]'
                  : 'border-transparent text-[#4B5563] hover:text-[#111827]'
                }
              `}
            >
              <tab.icon className="w-5 h-5" />
              <span className="nutricare-body font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-12 py-8">
        {activeTab === 'overview' && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <NutriCard>
                <div className="mb-3">
                  <h2 className="nutricare-h2">{patient.currentWeight} kg</h2>
                  <p className="nutricare-caption">Current Weight</p>
                </div>
                <p className="nutricare-caption text-[#4B5563]">Last updated: Today</p>
              </NutriCard>

              <NutriCard>
                <div className="mb-3">
                  <h2 className="nutricare-h2">{patient.goalProgress}%</h2>
                  <p className="nutricare-caption">Goal Progress</p>
                </div>
                <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-[#7BC9A6] rounded-full"
                    style={{ width: `${patient.goalProgress}%` }}
                  ></div>
                </div>
                <p className="nutricare-caption text-[#7BC9A6]">On track</p>
              </NutriCard>

              <NutriCard>
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#4B5563]" />
                  <div>
                    <h2 className="nutricare-h2">{patient.lastCheckIn}</h2>
                    <p className="nutricare-caption">Last Check-in</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#F4A261]" />
                  <p className="nutricare-caption">Streak: {patient.streak} days</p>
                </div>
              </NutriCard>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <NutriButton
                icon={<Plus className="w-5 h-5" />}
                onClick={() => navigate('/nutritionist/diet-plan-builder')}
              >
                Create Diet Plan
              </NutriButton>
              <NutriButton
                variant="secondary"
                icon={<BarChart2 className="w-5 h-5" />}
                onClick={() => setActiveTab('analytics')}
              >
                View Analytics
              </NutriButton>
            </div>
          </>
        )}

        {activeTab === 'diet-plans' && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-[#D1D5DB] mx-auto mb-4" />
            <h2 className="nutricare-h2 text-[#4B5563] mb-2">No diet plans yet</h2>
            <p className="nutricare-body-small mb-6">Create a personalized diet plan for this patient</p>
            <NutriButton
              icon={<Plus className="w-5 h-5" />}
              onClick={() => navigate('/nutritionist/diet-plan-builder')}
            >
              Create Diet Plan
            </NutriButton>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="text-center py-16">
            <BarChart2 className="w-16 h-16 text-[#D1D5DB] mx-auto mb-4" />
            <h2 className="nutricare-h2 text-[#4B5563] mb-2">Not enough data yet</h2>
            <p className="nutricare-body-small">Patient needs at least 7 check-ins for analytics</p>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="text-center py-16">
            <MessageCircle className="w-16 h-16 text-[#D1D5DB] mx-auto mb-4" />
            <h2 className="nutricare-h2 text-[#4B5563] mb-2">No messages yet</h2>
            <p className="nutricare-body-small">Start a conversation with your patient</p>
          </div>
        )}
      </div>
    </div>
  );
}
