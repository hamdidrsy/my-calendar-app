import React from 'react';
import type { CalendarDay as CalendarDayType } from '../../types';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
    days: CalendarDayType[];
    selectedDate: Date | null;
    onDayClick: (date: Date) => void;
}

// İki tarihin aynı gün olup olmadığını kontrol eden yardımcı fonksiyon
const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

// Takvimdeki günleri gösteren bileşen
export const CalendarGrid: React.FC<CalendarGridProps> = ({ days, selectedDate, onDayClick }) => {
    return (
        <div className="calendar-days">
            {days.map((day, index) => (
                <CalendarDay
                    key={index}
                    day={day}
                    isSelected={selectedDate !== null && isSameDay(day.date, selectedDate)}
                    onClick={onDayClick}
                />
            ))}
        </div>
    );
};