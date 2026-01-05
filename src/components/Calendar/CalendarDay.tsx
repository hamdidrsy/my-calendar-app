import React from 'react';
import type { CalendarDay as CalendarDayType, CalendarEvent } from '../../types';
import { formatTime } from '../../utils';

interface DayProps {
    day: CalendarDayType;
    isSelected: boolean;
    onClick: (date: Date) => void;
    onDoubleClick: (date: Date) => void;
    events: CalendarEvent[];
    onEventClick: (event: CalendarEvent) => void;
}

export const CalendarDay: React.FC<DayProps> = ({ day, isSelected, onClick, onDoubleClick, events, onEventClick }) => {
    const classNames = [
        'day',
        day.isToday ? 'today' : '',
        !day.isCurrentMonth ? 'other-month' : '',
        isSelected ? 'selected' : ''
    ].filter(Boolean).join(' ');

    // Etkinlige tiklandiginda
    const handleEventClick = (e: React.MouseEvent, event: CalendarEvent) => {
        e.stopPropagation(); // Gun tiklamasini engelle
        onEventClick(event);
    };

    return (
        <div
            className={classNames}
            onClick={() => onClick(day.date)}
            onDoubleClick={() => onDoubleClick(day.date)}>
            <span className="day-number">{day.date.getDate()}</span>
            <div className="day-events">
                {events.map(event => (
                    <div
                        key={event.id}
                        className="day-event"
                        onClick={(e) => handleEventClick(e, event)}
                    >
                        <span className="event-time">{formatTime(event.startDate)}</span>
                        <span className="event-title">{event.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
