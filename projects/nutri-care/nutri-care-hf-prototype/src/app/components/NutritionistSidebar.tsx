import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users as UsersIcon, BarChart2, Settings } from 'lucide-react';

export default function NutritionistSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/nutritionist/dashboard' },
    { icon: UsersIcon, label: 'Patients', path: '/nutritionist/patients' },
    { icon: BarChart2, label: 'Analytics', path: '/nutritionist/analytics' },
    { icon: Settings, label: 'Settings', path: '/nutritionist/settings' }
  ];

  const isActive = (itemLabel: string) => {
    if (itemLabel === 'Dashboard' && location.pathname === '/nutritionist/dashboard') {
      return true;
    }
    if (itemLabel === 'Patients' && (location.pathname === '/nutritionist/patients' || location.pathname.includes('/nutritionist/patient/') || location.pathname.includes('/diet-plan'))) {
      return true;
    }
    if (itemLabel === 'Analytics' && location.pathname === '/nutritionist/analytics') {
      return true;
    }
    if (itemLabel === 'Settings' && location.pathname === '/nutritionist/settings') {
      return true;
    }
    return false;
  };

  return (
    <div className="w-60 bg-white border-r border-gray-100 min-h-[calc(100vh-72px)] p-4">
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
              isActive(item.label)
                ? 'bg-[#7BC9A6]/10 text-[#1E3A5F] border-l-[3px] border-[#7BC9A6]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}