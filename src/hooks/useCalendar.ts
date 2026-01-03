import { useState } from 'react';
import { getCalendarDays } from '../utils/dateUtils';

export const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const days = getCalendarDays(currentDate);

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    // UI'da göstermek için formatlanmış tarih başlığı
    const formattedDate = currentDate.toLocaleDateString('tr-TR', {
        month: 'long',
        year: 'numeric'
    });

    return {
        currentDate,
        formattedDate,
        days,
        nextMonth,
        prevMonth
    };
};