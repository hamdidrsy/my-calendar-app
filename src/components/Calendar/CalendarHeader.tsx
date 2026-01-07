import React from 'react';

type CalendarHeaderProps = {
    dateDisplay: string;// Gösterilecek tarih başlığı
    onNext: () => void; // Sonraki aya geçiş fonksiyonu
    onPrev: () => void; // Önceki aya geçiş fonksiyonu
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