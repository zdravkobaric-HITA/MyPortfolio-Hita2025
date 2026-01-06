import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, TrendingDown, Target, Flame, Calendar } from 'lucide-react';
import { patients, analyticsData } from '../../data/mockData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const navigate = useNavigate();
  const { id } = useParams();
  const patient = patients.find(p => p.id === id) || patients[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <button
          onClick={() => navigate(`/nutritionist/patient/${id}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1E3A5F]"
        >
          <ChevronLeft size={20} />
          Back to Patient Profile
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="mb-6">Analytics - {patient.name}</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Target size={24} style={{ color: '#7BC9A6' }} />
              <span className="text-sm text-gray-600">Avg Adherence</span>
            </div>
            <p className="text-3xl font-bold">{analyticsData.averageAdherence}%</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown size={24} style={{ color: '#1E3A5F' }} />
              <span className="text-sm text-gray-600">Weight Change</span>
            </div>
            <p className="text-3xl font-bold">{analyticsData.weightChange} kg</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Flame size={24} style={{ color: '#E67E73' }} />
              <span className="text-sm text-gray-600">Check-in Streak</span>
            </div>
            <p className="text-3xl font-bold">{analyticsData.checkInStreak} days</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={24} style={{ color: '#F4A261' }} />
              <span className="text-sm text-gray-600">Active Days</span>
            </div>
            <p className="text-3xl font-bold">{analyticsData.activeDays}/{analyticsData.totalDays}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

        <div className="flex gap-4 mt-8">
          <button className="h-11 px-6 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] font-medium hover:bg-[#1E3A5F]/5">
            Export Report
          </button>
          <button
            onClick={() => navigate(`/nutritionist/patient/${id}`)}
            className="h-11 px-6 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
          >
            Back to Patient Profile
          </button>
        </div>
      </div>
    </div>
  );
}
