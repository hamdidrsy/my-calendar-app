import { useState } from 'react';
import { getCalendarDays } from '../utils/dateUtils';
import type { CalendarEvent } from '../types';

export const useCalendar = () => {
    // Mevcut tarihi state olarak tutuyoruz
    const [currentDate, setCurrentDate] = useState(new Date());

    // Seçili günü state olarak tutuyoruz
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Etkinlikleri state olarak tutuyoruz
    const [events, setEvents] = useState<CalendarEvent[]>([]);

    // Takvimde gösterilecek günleri hesaplıyoruz
    const days = getCalendarDays(currentDate);
    // Ay değiştirme fonksiyonları
    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    // Ay değiştirme fonksiyonları
    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    // UI'da göstermek için formatlanmış tarih başlığı
    const formattedDate = currentDate.toLocaleDateString('tr-TR', {
        month: 'long',
        year: 'numeric'
    });

    // Gün seçme fonksiyonu
    const selectDate = (date: Date) => {
        setSelectedDate(date);
        console.log(`Seçilen tarih: ${date.toLocaleDateString('tr-TR')}`);
    };

    // Etkinlik ekleme fonksiyonu
    const addEvent = (event: CalendarEvent) => {
        setEvents(prevEvents => [...prevEvents, event]);
        console.log('Etkinlik eklendi:', event.title);
    };

    // Etkinlik silme fonksiyonu
    const deleteEvent = (eventId: string) => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
        console.log('Etkinlik silindi:', eventId);
    };

    // Belirli bir güne ait etkinlikleri getir
    const getEventsForDate = (date: Date): CalendarEvent[] => {
        return events.filter(event => {
            const eventDate = new Date(event.startDate);
            return (
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()
            );
        });
    };

    return {
        currentDate,
        formattedDate,
        days,
        nextMonth,
        prevMonth,
        selectedDate,
        selectDate,
        events,
        addEvent,
        deleteEvent,
        getEventsForDate
    };
};