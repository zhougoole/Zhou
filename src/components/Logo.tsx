import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "", color = "currentColor" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Part: Abstract 'F' constructed from geometric shards for power and motion */}
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        style={{ maxHeight: '100%' }}
      >
        {/* 左侧主柱：厚重、倾斜，代表基石 */}
        <path
          d="M20 5 L45 5 L35 75 L10 75 Z"
          fill={color}
        />
        {/* 右上：锐利的切割块，代表速度 */}
        <path
          d="M50 5 L80 5 L65 30 L46 30 Z"
          fill={color}
        />
        {/* 右中：较短的冲击块，形成 F 的结构 */}
        <path
          d="M40 40 L65 40 L55 60 L37 60 Z"
          fill={color}
        />
      </svg>
      {/* Text Part */}
      <div className="flex flex-col justify-center">
        <span 
          className="text-2xl font-black tracking-tighter uppercase leading-none"
          style={{ color: color === 'currentColor' ? undefined : color }}
        >
          fitting
        </span>
        <span 
          className="text-[0.6rem] font-bold tracking-[0.4em] uppercase opacity-60 leading-none mt-1 ml-0.5"
          style={{ color: color === 'currentColor' ? undefined : color }}
        >
          Sport
        </span>
      </div>
    </div>
  );
};
