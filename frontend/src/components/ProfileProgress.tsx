
import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

interface ProfileTask {
  id: string;
  description: string;
  completed: boolean;
  warning?: boolean;
}

interface ProfileProgressProps {
  percentage: number;
  tasks: ProfileTask[];
}

const ProfileProgress = ({ percentage, tasks }: ProfileProgressProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Profile Optimisation</h3>
        <button className="text-sm text-gps-blue hover:underline">Update</button>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            <circle
              className="text-gps-blue"
              strokeWidth="10"
              strokeDasharray={`${percentage * 2.83} 283`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-2xl font-bold">{percentage}%</span>
          </div>
        </div>
      </div>
      
      <p className="text-center mb-6">Complete your profile to optimize your network</p>
      
      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-start">
            <div className={`mt-0.5 p-0.5 rounded-full ${task.completed ? 'bg-green-100' : task.warning ? 'bg-yellow-100' : 'bg-gray-100'}`}>
              {task.completed ? (
                <Check size={16} className="text-green-600" />
              ) : task.warning ? (
                <AlertTriangle size={16} className="text-yellow-600" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              )}
            </div>
            <span className={`ml-2 text-sm ${task.completed ? 'text-green-800' : task.warning ? 'text-yellow-800' : 'text-gray-600'}`}>
              {task.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileProgress;
