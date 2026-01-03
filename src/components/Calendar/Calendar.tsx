import React from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { CalendarHeader } from './CalendarHeader';
import { WeekDays } from './WeekDays';
import { CalendarGrid } from './CalendarGrid';
import './Calendar.css';

export const Calendar: React.FC = () => {
    // Tüm mantığı hook'tan çekiyoruz
    const { days, formattedDate, nextMonth, prevMonth } = useCalendar();

    return (
        <div className="calendar">
            <CalendarHeader
                dateDisplay={formattedDate}
                onNext={nextMonth}
                onPrev={prevMonth}
            />

            <WeekDays />

            <CalendarGrid days={days} />
        </div>
    );
};