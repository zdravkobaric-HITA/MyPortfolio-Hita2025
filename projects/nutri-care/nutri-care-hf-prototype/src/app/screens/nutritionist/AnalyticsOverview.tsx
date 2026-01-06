import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Calendar, Users, TrendingUp, CheckCircle, Activity, Download, MessageCircle, Target, TrendingDown, Flame } from 'lucide-react';
import NutritionistSidebar from '../../components/NutritionistSidebar';
import { patients, analyticsData } from '../../data/mockData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { toast } from 'sonner';

export default function AnalyticsOverview() {
  const navigate = useNavigate();
  const [selectedPatient, setSelectedPatient] = useState<string>('all');

  // Mock data for "All Patients" view
  const allPatientsData = {
    totalPatients: 6,
    averageAdherence: 78,
    totalCheckIns: 42,
    activePatients: 5,
    adherenceTrends: [
      { date: 'Dec 1', marko: 80, ivo: 85, ema: 90, olivera: 75, daniela: 70 },
      { date: 'Dec 5', marko: 82, ivo: 87, ema: 88, olivera: 78, daniela: 72 },
      { date: 'Dec 10', marko: 85, ivo: 90, ema: 92, olivera: 80, daniela: 75 },
      { date: 'Dec 15', marko: 87, ivo: 88, ema: 90, olivera: 82, daniela: 78 },
      { date: 'Dec 20', marko: 85, ivo: 92, ema: 91, olivera: 85, daniela: 80 },
    ],
    weightChanges: [
      { name: 'Marko M.', change: -3.2 },
      { name: 'Ivo J.', change: -2.5 },
      { name: 'Ema K.', change: 0 },
      { name: 'Olivera J.', change: -1.3 },
      { name: 'Daniela J.', change: -4.1 },
    ]
  };

  const patient = patients.find(p => p.id === selectedPatient);

  const handleExportReport = () => {
    toast.success('Report exported successfully!');
  };

  const handleMessagePatient = () => {
    toast.info('Messaging feature coming soon');
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
          {/* Back Button & Header */}
          <button
            onClick={() => navigate('/nutritionist/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F] mb-6 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Dashboard
          </button>

          <div className="flex items-center justify-between mb-8">
            <h1>Analytics Overview</h1>
            <div className="flex items-center gap-4">
              {/* Patient Selection Dropdown */}
              <div className="relative">
                <select
                  value={selectedPatient}
                  onChange={(e) => setSelectedPatient(e.target.value)}
                  className="w-[200px] h-11 px-4 pr-10 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#1E3A5F]"
                  style={{ color: '#1E3A5F' }}
                >
                  <option value="all">All Patients</option>
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>

              {/* Date Range Picker */}
              <div className="relative">
                <button className="h-11 px-4 border border-gray-300 rounded-lg flex items-center gap-2 text-gray-700 hover:bg-gray-50">
                  <Calendar size={20} />
                  <span>Last 30 days</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>

          {selectedPatient === 'all' ? (
            // All Patients View
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={24} style={{ color: '#1E3A5F' }} />
                    <span className="text-sm text-gray-600">Total Patients</span>
                  </div>
                  <h2 className="font-bold">{allPatientsData.totalPatients}</h2>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={24} style={{ color: '#7BC9A6' }} />
                    <span className="text-sm text-gray-600">Average Adherence</span>
                  </div>
                  <h2 className="font-bold">{allPatientsData.averageAdherence}%</h2>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle size={24} style={{ color: '#6B7280' }} />
                    <span className="text-sm text-gray-600">Total Check-ins This Week</span>
                  </div>
                  <h2 className="font-bold">{allPatientsData.totalCheckIns}</h2>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Activity size={24} style={{ color: '#7BC9A6' }} />
                    <span className="text-sm text-gray-600">Active Patients</span>
                  </div>
                  <h2 className="font-bold">{allPatientsData.activePatients}/{allPatientsData.totalPatients}</h2>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="mb-6">Overall Adherence Trends</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={allPatientsData.adherenceTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="marko" stroke="#7BC9A6" name="Marko M." strokeWidth={2} />
                      <Line type="monotone" dataKey="ivo" stroke="#1E3A5F" name="Ivo J." strokeWidth={2} />
                      <Line type="monotone" dataKey="ema" stroke="#F4A261" name="Ema K." strokeWidth={2} />
                      <Line type="monotone" dataKey="olivera" stroke="#E67E73" name="Olivera J." strokeWidth={2} />
                      <Line type="monotone" dataKey="daniela" stroke="#60A5FA" name="Daniela J." strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="mb-6">Weight Change Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={allPatientsData.weightChanges}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="change" fill="#7BC9A6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="flex gap-4">
                <button 
                  onClick={handleExportReport}
                  className="h-11 px-6 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5 flex items-center gap-2"
                >
                  <Download size={20} />
                  Export Report
                </button>
              </div>
            </>
          ) : (
            // Individual Patient View
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Target size={24} style={{ color: '#7BC9A6' }} />
                    <span className="text-sm text-gray-600">Average Adherence</span>
                  </div>
                  <h2 className="font-bold">{analyticsData.averageAdherence}%</h2>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingDown size={24} style={{ color: '#7BC9A6' }} />
                    <span className="text-sm text-gray-600">Weight Change</span>
                  </div>
                  <h2 className="font-bold">{analyticsData.weightChange} kg</h2>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Flame size={24} style={{ color: '#1E3A5F' }} />
                    <span className="text-sm text-gray-600">Check-in Streak</span>
                  </div>
                  <h2 className="font-bold">{analyticsData.checkInStreak} days</h2>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Activity size={24} style={{ color: '#6B7280' }} />
                    <span className="text-sm text-gray-600">Active Days</span>
                  </div>
                  <h2 className="font-bold">{analyticsData.activeDays}/{analyticsData.totalDays}</h2>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="mb-6">Weight Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analyticsData.weightTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="weight" stroke="#7BC9A6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="mb-6">Adherence Rate</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.adherenceRate}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="rate" fill="#1E3A5F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="flex gap-4">
                <button 
                  onClick={handleExportReport}
                  className="h-11 px-6 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5 flex items-center gap-2"
                >
                  <Download size={20} />
                  Export Report
                </button>
                {patient && (
                  <button
                    onClick={handleMessagePatient}
                    className="h-11 px-6 rounded-lg text-white font-medium hover:opacity-90 flex items-center gap-2"
                    style={{ backgroundColor: '#1E3A5F' }}
                  >
                    <MessageCircle size={20} />
                    Message Patient
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
