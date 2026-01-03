import React from 'react';
import type { CalendarDay as CalendarDayType } from '../../types';

interface DayProps {
    day: CalendarDayType;
    isSelected: boolean;
    onClick: (date: Date) => void;
}

export const CalendarDay: React.FC<DayProps> = ({ day, isSelected, onClick }) => {
    const classNames = [
        'day',
        day.isToday ? 'today' : '',
        !day.isCurrentMonth ? 'other-month' : '',
        isSelected ? 'selected' : ''
    ].filter(Boolean).join(' ');

    return (
        <div
            className={classNames}
            onClick={() => onClick(day.date)}>
            <span className="day-number">{day.date.getDate()}</span>
            {/* İleride buraya event noktaları gelecek */}
        </div>
    );
};