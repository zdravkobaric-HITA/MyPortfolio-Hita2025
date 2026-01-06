import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Plus, Users, CheckCircle, TrendingUp, Clock, BarChart2 } from 'lucide-react';
import { patients } from '../../data/mockData';
import { toast } from 'sonner';
import NutritionistSidebar from '../../components/NutritionistSidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function NutritionistDashboard() {
  const navigate = useNavigate();

  // Recent activity data
  const recentActivities = [
    { patient: 'Marko Mitrovic', action: 'checked in', time: '2 hours ago', avatar: patients[0].avatar },
    { patient: 'Ivo Juric', action: 'completed daily plan', time: '5 hours ago', avatar: patients[1].avatar },
    { patient: 'Ema Kosec', action: 'sent a message', time: '6 hours ago', avatar: patients[2].avatar },
    { patient: 'Olivera Jošt', action: 'checked in', time: '12 hours ago', avatar: patients[4].avatar },
    { patient: 'Daniela Jalovec', action: 'updated weight', time: '1 day ago', avatar: patients[5].avatar },
  ];

  // Mini adherence trend data
  const adherenceTrendData = [
    { day: 'Mon', adherence: 75 },
    { day: 'Tue', adherence: 80 },
    { day: 'Wed', adherence: 78 },
    { day: 'Thu', adherence: 82 },
    { day: 'Fri', adherence: 85 },
    { day: 'Sat', adherence: 79 },
    { day: 'Sun', adherence: 78 },
  ];

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
          <div className="mb-8">
            <h1 className="mb-2">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back, Dr. Ana Marković</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Users size={24} style={{ color: '#1E3A5F' }} />
                <span className="text-sm text-gray-600">Total Patients</span>
              </div>
              <h2 className="font-bold mb-1">6</h2>
              <p className="text-xs text-gray-500">5 active, 1 inactive</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle size={24} style={{ color: '#7BC9A6' }} />
                <span className="text-sm text-gray-600">This Week's Check-ins</span>
              </div>
              <h2 className="font-bold mb-1">42</h2>
              <p className="text-xs text-gray-500">+12% from last week</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={24} style={{ color: '#7BC9A6' }} />
                <span className="text-sm text-gray-600">Average Adherence</span>
              </div>
              <h2 className="font-bold mb-1">78%</h2>
              <p className="text-xs text-gray-500">Across all patients</p>
            </div>
          </div>

          {/* Quick Actions & Chart Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/nutritionist/patients')}
                  className="w-full h-11 px-4 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5 flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Add New Patient
                </button>
                <button
                  onClick={() => navigate('/nutritionist/analytics')}
                  className="w-full h-11 px-4 rounded-lg text-white font-medium hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#1E3A5F' }}
                >
                  <BarChart2 size={20} />
                  View Analytics
                </button>
                <button
                  onClick={() => navigate('/nutritionist/patients')}
                  className="w-full h-11 px-4 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  View All Patients
                </button>
              </div>
            </div>

            {/* Adherence Trend Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="mb-4">Weekly Adherence Trend</h3>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={adherenceTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="adherence" stroke="#7BC9A6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3>Recent Activity</h3>
              <button 
                onClick={() => navigate('/nutritionist/patients')}
                className="text-sm text-[#1E3A5F] hover:underline"
              >
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <img src={activity.avatar} alt={activity.patient} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.patient}</span>{' '}
                      <span className="text-gray-600">{activity.action}</span>
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Clock size={12} />
                      {activity.time}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const patient = patients.find(p => p.name === activity.patient);
                      if (patient) navigate(`/nutritionist/patient/${patient.id}`);
                    }}
                    className="text-sm text-[#1E3A5F] hover:underline"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}