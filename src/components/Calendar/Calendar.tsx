import { useState } from 'react';
import type { CalendarDay } from '../../types';
import './Calendar.css';

interface CalendarProps {
    initialDate?: Date;
}

export const Calendar: React.FC<CalendarProps> = ({
    initialDate = new Date()
}) => {
    const [currentDate, setCurrentDate] = useState<Date>(initialDate);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const monthNames = [
        'Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran',
        'Temmuz', 'Agustos', 'Eylul', 'Ekim', 'Kasim', 'Aralik'
    ];

    const weekDays = ['Pzt', 'Sal', 'Car', 'Per', 'Cum', 'Cmt', 'Paz'];

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const getDaysInMonth = (): CalendarDay[] => {
        const days: CalendarDay[] = [];
        const today = new Date();

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        let startDay = firstDayOfMonth.getDay();
        startDay = startDay === 0 ? 7 : startDay;

        // Onceki ayin gunleri
        for (let i = startDay - 1; i > 0; i--) {
            const date = new Date(currentYear, currentMonth, 1 - i);
            days.push({
                date,
                isCurrentMonth: false,
                isToday: false,
                events: []
            });
        }

        // Bu ayin gunleri
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const totalDaysInMonth = lastDayOfMonth.getDate();

        for (let i = 1; i <= totalDaysInMonth; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const isToday =
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();

            days.push({
                date,
                isCurrentMonth: true,
                isToday,
                events: []
            });
        }

        // Sonraki ayin gunleri
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            const date = new Date(currentYear, currentMonth + 1, i);
            days.push({
                date,
                isCurrentMonth: false,
                isToday: false,
                events: []
            });
        }

        return days;
    };

    const days = getDaysInMonth();

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={goToPreviousMonth}>◀</button>
                <h2>{monthNames[currentMonth]} {currentYear}</h2>
                <button onClick={goToNextMonth}>▶</button>
            </div>

            <div className="calendar-weekdays">
                {weekDays.map(day => (
                    <div key={day} className="weekday">{day}</div>
                ))}
            </div>

            <div className="calendar-days">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`day ${day.isToday ? 'today' : ''} ${!day.isCurrentMonth ? 'other-month' : ''}`}
                    >
                        {day.date.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};