
import React from 'react';
import { Calendar, Video, Users } from 'lucide-react';

interface EventRowProps {
  title: string;
  type: 'training' | 'session' | 'meeting';
  description: string;
  date: string;
  time: string;
  location: string;
  venue: string;
}

const EventRow = ({
  title,
  type,
  description,
  date,
  time,
  location,
  venue,
}: EventRowProps) => {
  const getIcon = () => {
    switch (type) {
      case 'training':
        return (
          <div className="bg-red-100 p-2 rounded-full">
            <Calendar size={20} className="text-red-500" />
          </div>
        );
      case 'session':
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <Video size={20} className="text-blue-500" />
          </div>
        );
      case 'meeting':
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <Users size={20} className="text-green-500" />
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <Calendar size={20} className="text-gray-500" />
          </div>
        );
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 items-center">
      <div className="col-span-1">{getIcon()}</div>
      <div className="col-span-3">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="col-span-2">
        <p className="font-medium">{date}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="col-span-4">
        <p className="font-medium">{location}</p>
        <p className="text-sm text-gray-500">{venue}</p>
      </div>
      <div className="col-span-2 text-right">
        <button className="text-gps-blue hover:underline">View</button>
      </div>
    </div>
  );
};

export default EventRow;
