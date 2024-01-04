import React from 'react';

interface ProgressBarProps {
  progress: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  const progressBarStyle = `text-xs bg-blue-700 text-xs leading-none py-1 text-center text-white rounded-full h-[10px]`;
  const progressBarWidthStyle = {
    width: `${progress}%`,
  };


  return (
    <div className="w-full">

      <div className="flex items-center gap-2">
        <div className="w-full bg-gray-200 rounded-full h-[10px]">
          <div style={progressBarWidthStyle} className={`${progressBarStyle}`}>
          </div>
        </div>
        <div>
          {label}%
        </div>
      </div>


    </div>
  );
};

export default ProgressBar;