import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserCircle, ArrowRight } from 'lucide-react';
import { NutriButton } from '../components/NutriButton';
import { NutriCard } from '../components/NutriCard';

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#7BC9A6] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white font-bold">NC</span>
          </div>
          <h1 className="nutricare-h1 mb-4">NutriCare Lite</h1>
          <p className="nutricare-body text-[#4B5563] max-w-2xl mx-auto">
            High-fidelity interactive prototype for nutritionists and patients.
            Choose your role to explore the application.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Nutritionist Card */}
          <NutriCard hover onClick={() => navigate('/nutritionist/login')} className="cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h2 className="nutricare-h2 mb-2">Nutritionist Portal</h2>
              <p className="nutricare-body-small mb-6">
                Manage patients, create diet plans, and track progress
              </p>
              <div className="space-y-2 text-left bg-[#F9FAFB] rounded-lg p-4 mb-6">
                <p className="nutricare-caption"><strong>Features:</strong></p>
                <ul className="nutricare-body-small space-y-1 pl-4">
                  <li>• Patient dashboard with search</li>
                  <li>• Add & manage patients</li>
                  <li>• Create diet plans</li>
                  <li>• View analytics & reports</li>
                </ul>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#1E3A5F] font-medium">
                <span>Explore Nutritionist View</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </NutriCard>

          {/* Patient Card */}
          <NutriCard hover onClick={() => navigate('/patient/login')} className="cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7BC9A6]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCircle className="w-8 h-8 text-[#7BC9A6]" />
              </div>
              <h2 className="nutricare-h2 mb-2">Patient Portal</h2>
              <p className="nutricare-body-small mb-6">
                View your diet plan, track progress, and check in daily
              </p>
              <div className="space-y-2 text-left bg-[#F9FAFB] rounded-lg p-4 mb-6">
                <p className="nutricare-caption"><strong>Features:</strong></p>
                <ul className="nutricare-body-small space-y-1 pl-4">
                  <li>• Daily meal plans</li>
                  <li>• Weekly menu overview</li>
                  <li>• Daily check-in forms</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#7BC9A6] font-medium">
                <span>Explore Patient View</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </NutriCard>
        </div>

        {/* Credentials Info */}
        <NutriCard className="bg-[#60A5FA]/10 border-[#60A5FA]">
          <div className="text-center">
            <h3 className="nutricare-h3 mb-4">Demo Credentials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <p className="nutricare-body-small font-semibold mb-2">Nutritionist:</p>
                <p className="nutricare-caption">Email: <strong>zdravko@nutricare.com</strong></p>
                <p className="nutricare-caption">Password: <strong>password</strong></p>
                <p className="nutricare-caption mt-2 text-[#4B5563]">Or try: <strong>new@nutricare.com</strong> for onboarding</p>
              </div>
              <div className="text-left">
                <p className="nutricare-body-small font-semibold mb-2">Patient:</p>
                <p className="nutricare-caption">Email: <strong>pacijent@example.com</strong></p>
                <p className="nutricare-caption">Password: <strong>password</strong></p>
              </div>
            </div>
          </div>
        </NutriCard>

        {/* Design System Note */}
        <div className="text-center mt-8">
          <p className="nutricare-caption text-[#4B5563]">
            Built with React, TypeScript, Tailwind CSS, and Recharts
          </p>
        </div>
      </div>
    </div>
  );
}