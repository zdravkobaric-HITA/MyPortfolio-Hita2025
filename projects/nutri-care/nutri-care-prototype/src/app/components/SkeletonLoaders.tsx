import React from 'react';

export function SkeletonCard() {
  return (
    <div className="bg-white border border-[#F3F4F6] rounded-xl p-6 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#F3F4F6] rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-5 bg-[#F3F4F6] rounded w-32 mb-3"></div>
          <div className="h-4 bg-[#F3F4F6] rounded w-24 mb-3"></div>
          <div className="h-4 bg-[#F3F4F6] rounded w-16 mb-4"></div>
          <div className="h-2 bg-[#F3F4F6] rounded w-full mb-2"></div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="h-12 bg-[#F3F4F6] rounded"></div>
            <div className="h-12 bg-[#F3F4F6] rounded"></div>
          </div>
          <div className="h-9 bg-[#F3F4F6] rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonStat() {
  return (
    <div className="bg-white border border-[#F3F4F6] rounded-xl p-6 animate-pulse">
      <div className="h-8 bg-[#F3F4F6] rounded w-20 mb-2"></div>
      <div className="h-4 bg-[#F3F4F6] rounded w-32"></div>
    </div>
  );
}

export function SkeletonMealCard() {
  return (
    <div className="bg-white border border-[#F3F4F6] rounded-xl p-4 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-[#F3F4F6] rounded"></div>
        <div className="flex-1">
          <div className="h-5 bg-[#F3F4F6] rounded w-24 mb-2"></div>
          <div className="h-4 bg-[#F3F4F6] rounded w-full mb-2"></div>
          <div className="h-4 bg-[#F3F4F6] rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}
