import React from 'react';

interface CalendarHeaderProps {
    dateDisplay: string;
    onNext: () => void;
    onPrev: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ dateDisplay, onNext, onPrev }) => {
    return (
        <div className="calendar-header">
            <button onClick={onPrev}>◀</button>
            <h2>{dateDisplay}</h2>
            <button onClick={onNext}>▶</button>
        </div>
    );
};