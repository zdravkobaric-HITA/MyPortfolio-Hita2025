import React from 'react';
import { Loader2 } from 'lucide-react';

interface NutriButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function NutriButton({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  type = 'button',
  className = '',
}: NutriButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2';
  
  const variantStyles = {
    primary: 'bg-[#1E3A5F] text-white hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 active:opacity-80 disabled:bg-[#D1D5DB] disabled:text-[#4B5563] disabled:cursor-not-allowed',
    secondary: 'border-2 border-[#1E3A5F] text-[#1E3A5F] bg-white hover:bg-[#1E3A5F]/5 active:bg-[#1E3A5F]/10 disabled:border-[#D1D5DB] disabled:text-[#4B5563] disabled:cursor-not-allowed',
    success: 'bg-[#7BC9A6] text-white hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 active:opacity-80 disabled:bg-[#D1D5DB] disabled:text-[#4B5563] disabled:cursor-not-allowed',
    danger: 'bg-[#E67E73] text-white hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 active:opacity-80 disabled:bg-[#D1D5DB] disabled:text-[#4B5563] disabled:cursor-not-allowed',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {icon}
          <span>{children}</span>
        </>
      )}
    </button>
  );
}
