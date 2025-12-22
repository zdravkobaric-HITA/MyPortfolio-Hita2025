import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

interface NutriInputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  required?: boolean;
  helpText?: string;
}

export function NutriInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  icon,
  required = false,
  helpText,
}: NutriInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="nutricare-label">
          {label} {required && <span className="text-[#E67E73]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563]">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full h-11 px-4 ${icon ? 'pl-12' : ''} ${type === 'password' ? 'pr-12' : ''}
            border rounded-lg nutricare-body transition-all duration-200
            ${error ? 'border-[#E67E73] border-2 bg-[#E67E73]/5' : 'border-[#D1D5DB] focus:border-[#1E3A5F] focus:border-2 focus:bg-[#1E3A5F]/5'}
            ${disabled ? 'bg-[#F3F4F6] text-[#4B5563] cursor-not-allowed' : ''}
            focus:outline-none
          `}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#1E3A5F]"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {helpText && !error && (
        <p className="nutricare-caption text-[#4B5563]">{helpText}</p>
      )}
      {error && (
        <div className="flex items-center gap-1 nutricare-caption text-[#E67E73]">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

interface NutriSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  required?: boolean;
}

export function NutriSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  disabled = false,
  icon,
  required = false,
}: NutriSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="nutricare-label">
          {label} {required && <span className="text-[#E67E73]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563] z-10">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full h-11 px-4 ${icon ? 'pl-12' : ''} pr-10
            border rounded-lg nutricare-body transition-all duration-200 appearance-none
            ${error ? 'border-[#E67E73] border-2 bg-[#E67E73]/5' : 'border-[#D1D5DB] focus:border-[#1E3A5F] focus:border-2 focus:bg-[#1E3A5F]/5'}
            ${disabled ? 'bg-[#F3F4F6] text-[#4B5563] cursor-not-allowed' : ''}
            focus:outline-none
          `}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-[#4B5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <div className="flex items-center gap-1 nutricare-caption text-[#E67E73]">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

interface NutriTextareaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}

export function NutriTextarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  rows = 4,
}: NutriTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="nutricare-label">
          {label} {required && <span className="text-[#E67E73]">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-3 border rounded-lg nutricare-body transition-all duration-200 resize-y
          ${error ? 'border-[#E67E73] border-2 bg-[#E67E73]/5' : 'border-[#D1D5DB] focus:border-[#1E3A5F] focus:border-2 focus:bg-[#1E3A5F]/5'}
          ${disabled ? 'bg-[#F3F4F6] text-[#4B5563] cursor-not-allowed' : ''}
          focus:outline-none
        `}
      />
      {error && (
        <div className="flex items-center gap-1 nutricare-caption text-[#E67E73]">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
