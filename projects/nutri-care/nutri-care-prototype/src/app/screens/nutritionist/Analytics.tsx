import React, { useState } from 'react';
import { Download, MessageCircle, TrendingUp, TrendingDown, Flame, Activity, Calendar } from 'lucide-react';
import { NutriButton } from '../../components/NutriButton';
import { NutriCard } from '../../components/NutriCard';
import { NutriSelect } from '../../components/NutriInput';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { toast } from 'sonner';

export function Analytics() {
  const [selectedPatient, setSelectedPatient] = useState('john-doe');
  const [dateRange, setDateRange] = useState('30');

  const patientOptions = [
    { value: 'john-doe', label: 'John Doe' },
    { value: 'emma-wilson', label: 'Emma Wilson' },
    { value: 'michael-brown', label: 'Michael Brown' },
  ];

  const dateOptions = [
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '90', label: 'Last 90 days' },
  ];

  const weightData = [
    { date: 'Dec 1', weight: 78.5 },
    { date: 'Dec 5', weight: 77.8 },
    { date: 'Dec 10', weight: 77.0 },
    { date: 'Dec 15', weight: 76.2 },
    { date: 'Dec 20', weight: 75.5 },
    { date: 'Dec 22', weight: 75.2 },
  ];

  const adherenceData = [
    { week: 'Week 1', fully: 80, partially: 15, not: 5 },
    { week: 'Week 2', fully: 85, partially: 10, not: 5 },
    { week: 'Week 3', fully: 90, partially: 8, not: 2 },
    { week: 'Week 4', fully: 88, partially: 10, not: 2 },
  ];

  const activityData = [
    { date: 'Dec 1', score: 6 },
    { date: 'Dec 5', score: 7 },
    { date: 'Dec 10', score: 8 },
    { date: 'Dec 15', score: 7 },
    { date: 'Dec 20', score: 9 },
    { date: 'Dec 22', score: 8 },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 max-w-md">
            <NutriSelect
              value={selectedPatient}
              onChange={setSelectedPatient}
              options={patientOptions}
              icon={<Activity className="w-5 h-5" />}
            />
          </div>
          <div className="w-48">
            <NutriSelect
              value={dateRange}
              onChange={setDateRange}
              options={dateOptions}
              icon={<Calendar className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <NutriCard>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="nutricare-h2 text-[#7BC9A6]">85%</h2>
                <p className="nutricare-caption">Average Adherence</p>
              </div>
              <TrendingUp className="w-5 h-5 text-[#7BC9A6]" />
            </div>
          </NutriCard>

          <NutriCard>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="nutricare-h2 text-[#7BC9A6]">-3.2 kg</h2>
                <p className="nutricare-caption">Weight Change</p>
              </div>
              <TrendingDown className="w-5 h-5 text-[#7BC9A6]" />
            </div>
          </NutriCard>

          <NutriCard>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="nutricare-h2 text-[#1E3A5F]">12 days</h2>
                <p className="nutricare-caption">Check-in Streak</p>
              </div>
              <Flame className="w-5 h-5 text-[#F4A261]" />
            </div>
          </NutriCard>

          <NutriCard>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="nutricare-h2">24/30</h2>
                <p className="nutricare-caption">Active Days</p>
              </div>
              <Activity className="w-5 h-5 text-[#4B5563]" />
            </div>
          </NutriCard>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Weight Trend */}
          <NutriCard>
            <h3 className="nutricare-h3 mb-6">Weight Progress</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#4B5563' }} />
                <YAxis tick={{ fontSize: 12, fill: '#4B5563' }} />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#7BC9A6" strokeWidth={2} dot={{ fill: '#7BC9A6' }} />
              </LineChart>
            </ResponsiveContainer>
          </NutriCard>

          {/* Adherence Rate */}
          <NutriCard>
            <h3 className="nutricare-h3 mb-6">Weekly Adherence</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={adherenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#4B5563' }} />
                <YAxis tick={{ fontSize: 12, fill: '#4B5563' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="fully" fill="#7BC9A6" name="Fully Followed" />
                <Bar dataKey="partially" fill="#F4A261" name="Partially" />
                <Bar dataKey="not" fill="#E67E73" name="Not Followed" />
              </BarChart>
            </ResponsiveContainer>
          </NutriCard>

          {/* Activity Level */}
          <NutriCard className="col-span-2">
            <h3 className="nutricare-h3 mb-6">Activity Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7BC9A6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7BC9A6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#4B5563' }} />
                <YAxis tick={{ fontSize: 12, fill: '#4B5563' }} />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#7BC9A6" fillOpacity={1} fill="url(#colorActivity)" />
              </AreaChart>
            </ResponsiveContainer>
          </NutriCard>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <NutriButton
            variant="secondary"
            icon={<Download className="w-5 h-5" />}
            onClick={() => toast.info('Exporting report as PDF...')}
          >
            Export Report
          </NutriButton>
          <NutriButton
            icon={<MessageCircle className="w-5 h-5" />}
            onClick={() => toast.info('Opening messages')}
          >
            Message Patient
          </NutriButton>
        </div>
      </div>
    </div>
  );
}
