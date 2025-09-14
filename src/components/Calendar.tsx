import React, { useState, useEffect, useMemo } from 'react'
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
        isWeddingDay ? 'text-white border animate-pulse bg-[#7F1734]' : ''
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

  const [displayDays, setDisplayDays] = useState('');

  useEffect(() => {
    const targetDate = new Date("2025-11-22T13:00:00+09:00").getTime();
  
    const updateTimer = () => {
      const diffMs = targetDate - Date.now();
  
      const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  
      // 오늘 제외 방식
      const days = Math.ceil(totalSeconds / 86400);

      setDisplayDays(()=>{
        if(totalSeconds<=0) {
          return '종료'
        } 
        if(days===0 ){
          return '오늘'
        }
        return `${days}일 전`
      })

    };
    updateTimer();
  
  }, []);

  return (
    <div className="font-maru max-w-md mx-auto p-4 text-center">
      {/* <img src={flower} alt="flower" className="mx-auto w-24 mb-4" /> */}
      <h3 className="mb-2 text-base text-center leading-snug">
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

   
      <div className="text-base text-gray-500">
        승현♥미주의 결혼식 <span className="text-[#7F1734] font-semibold"> {displayDays}</span>
      </div>
    </div>
  );
}

export default Calendar;
