import React from 'react';
import { TIMELINE_EVENTS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-2xl mx-auto py-10 px-4">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-pink-200 top-0"></div>

      {TIMELINE_EVENTS.map((event, index) => (
        <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
          {/* Dot on line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full border-4 border-white z-10"></div>
          
          {/* Content Card */}
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
            <div className="bg-white p-4 rounded-lg shadow-sm border-b-2 border-pink-100">
              <div className="text-2xl mb-1">{event.icon}</div>
              <h4 className="font-bold text-pink-800 serif-font text-lg">{event.title}</h4>
              <span className="inline-block px-2 py-0.5 bg-pink-100 text-pink-600 text-xs rounded-full font-bold">
                {event.time}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;