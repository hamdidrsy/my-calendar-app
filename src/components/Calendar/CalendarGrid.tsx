import React from 'react';
import type { CalendarDay as CalendarDayType } from '../../types';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
    days: CalendarDayType[];
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ days }) => {
    const handleDayClick = (date: Date) => {
        alert(`Seçilen tarih: ${date.toLocaleDateString()}`);
    };

    return (
        <div className="calendar-days">
            {days.map((day, index) => (
                <CalendarDay
                    key={index}
                    day={day}
                    onClick={handleDayClick}
                />
            ))}
        </div>
    );
};