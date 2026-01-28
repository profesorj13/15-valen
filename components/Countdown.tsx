import React, { useEffect, useState } from 'react';
import { EVENT_DETAILS } from '../constants';
import { TimeLeft } from '../types';

const calculateTimeLeft = (): TimeLeft => {
  const difference = +EVENT_DETAILS.date - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-pink-100">
      <span className="text-xl md:text-3xl font-bold text-pink-600 serif-font">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="mt-2 text-xs md:text-sm uppercase tracking-widest text-pink-800 font-semibold">
      {label}
    </span>
  </div>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center py-8">
      <TimeUnit value={timeLeft.days} label="Días" />
      <TimeUnit value={timeLeft.hours} label="Hs" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
};

export default Countdown;