import React from 'react';
import type { CalendarDay as CalendarDayType, CalendarEvent } from '../../types';
import { isSameDay } from '../../utils';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
    days: CalendarDayType[]; // Takvimde gösterilecek günler
    selectedDate: Date | null; // Seçili tarih
    onDayClick: (date: Date) => void; // Gün tıklama işleyicisi
    onDayDoubleClick: (date: Date) => void; // Gün çift tıklama işleyicisi
    getEventsForDate: (date: Date) => CalendarEvent[]; // Belirli bir tarih için etkinlikleri alma fonksiyonu
    onEventClick: (event: CalendarEvent) => void; // Etkinlik tıklama işleyicisi
}

// Takvimdeki günleri gösteren bileşen                     günleri, seçili tarihi, gün tıklama ve çift tıklama işleyicilerini alır
export const CalendarGrid: React.FC<CalendarGridProps> = ({ days, selectedDate, onDayClick, onDayDoubleClick, getEventsForDate, onEventClick }) => {
    return (
        <div className="calendar-days">
            {days.map((day, index) => (
                <CalendarDay
                    key={index}
                    day={day}
                    isSelected={selectedDate !== null && isSameDay(day.date, selectedDate)}
                    onClick={onDayClick}
                    onDoubleClick={onDayDoubleClick}
                    events={getEventsForDate(day.date)}
                    onEventClick={onEventClick}
                />
            ))}
        </div>
    );
};
