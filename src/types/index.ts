/**
 * Takvimde gosterilecek bir etkinlik
 */
export interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    color?: string;
}

/**
 * Takvimdeki bir gun
 */
export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    events: CalendarEvent[];
}

/**
 * Bir ayin tum bilgisi
 */
export interface CalendarMonth {
    year: number;
    month: number;
    days: CalendarDay[];
}

/**
 * Takvim gorunum tipleri
 */
export type CalendarViewType = 'month' | 'week' | 'day';

