import { Activity } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: { container: 'h-6', text: 'text-base', icon: 16 },
    md: { container: 'h-8', text: 'text-xl', icon: 24 },
    lg: { container: 'h-12', text: 'text-2xl', icon: 32 },
  };

  const { container, text, icon } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${container}`}>
      <Activity size={icon} className="text-[--navy]" strokeWidth={2.5} />
      <span className={`${text} font-bold text-[--navy]`}>NutriCare</span>
    </div>
  );
}
