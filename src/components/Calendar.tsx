import React, { useState, useEffect } from 'react'
// import flower from '../images/flower.png'

function CalendarDay({ day, isWeddingDay, isHoliday=false }:{ day: number, isWeddingDay: boolean, isHoliday?: boolean }) {
  const textColor = isWeddingDay
    ? 'text-red-500 font-bold'
    : isHoliday
    ? 'text-red-400'
    : day % 7 === 2
    ? 'text-red-400'
    : '';

    
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full text-sm ${textColor} ${
        isWeddingDay ? 'text-white border animate-pulse bg-red-400' : ''
      }`}
    >
      {day}
    </div>
  );
}

function Calendar() {
  const daysInMonth = 30;
  const firstDayOfWeek = 6;
  const emptyDays = Array.from({ length: firstDayOfWeek }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const updateTimer = () => {
      const currentDate = new Date().getTime();
      const targetDate = new Date('2025-11-22T13:00:00+0900').getTime();
      const timeDiffMs = targetDate - currentDate;
      const timeDiff = Math.floor(timeDiffMs / 1000);

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / 86400);
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans max-w-md mx-auto p-4 text-center">
      {/* <img src={flower} alt="flower" className="mx-auto w-24 mb-4" /> */}
      <h3 className="font-nanum mb-2 text-center leading-snug">
        2025년 11월 22일 토요일 오후 1시
      </h3>
      <div className="h-px bg-gray-300 my-4"></div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((day) => (
          <CalendarDay
            key={day}
            day={day}
            isWeddingDay={day === 22}
          />
        ))}
      </div>

   
      <div className="font-nanum text-gray-500">
        신랑♥신부의 결혼식 <span className="text-red-400 font-semibold">{timeLeft.days}일</span> 전
      </div>
    </div>
  );
}

export default Calendar;
