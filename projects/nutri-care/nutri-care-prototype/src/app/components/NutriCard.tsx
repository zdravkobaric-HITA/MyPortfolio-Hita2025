import React from 'react';

interface NutriCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function NutriCard({
  children,
  className = '',
  hover = false,
  padding = 'lg',
  onClick,
}: NutriCardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-6',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white border border-[#F3F4F6] rounded-xl shadow-sm
        ${paddingStyles[padding]}
        ${hover ? 'hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
