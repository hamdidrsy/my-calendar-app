import type { CalendarDay } from '../types';

export const getCalendarDays = (currentDate: Date): CalendarDay[] => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const days: CalendarDay[] = [];
    const today = new Date();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    let startDay = firstDayOfMonth.getDay();
    // Pazar 0 döner, bizde Pazartesi hafta başı olduğu için düzeltme:
    startDay = startDay === 0 ? 7 : startDay;

    // 1. Önceki ayın günleri (Soluk görünmesi için)
    for (let i = startDay - 1; i > 0; i--) {
        const date = new Date(currentYear, currentMonth, 1 - i);
        days.push({
            date,
            isCurrentMonth: false,
            isToday: false,
            events: []
        });
    }

    // 2. Bu ayın günleri
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

    // 3. Sonraki ayın günleri (Gridi tamamlamak için)
    // Standart takvimlerde genelde 6 satır (42 kutu) olur.
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