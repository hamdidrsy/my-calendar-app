import React from 'react';

// ============================================
// TEMEL TIPLER
// ============================================

/**
 * Takvimde gösterilecek bir etkinlik
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
 * Takvimdeki bir gün
 */
export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    events: CalendarEvent[];
}

/**
 * Bir ayın tüm bilgisi
 */
export interface CalendarMonth {
    year: number;
    month: number;
    days: CalendarDay[];
}

/**
 * Takvim görünüm tipleri
 */
export type CalendarViewType = 'month' | 'week' | 'day';

// ============================================
// HOOK RETURN TIPLERI
// ============================================

/**
 * useCalendar hook return tipi
 */
export interface UseCalendarReturn {
    currentDate: Date;
    formattedDate: string;
    days: CalendarDay[];
    nextMonth: () => void;
    prevMonth: () => void;
    selectedDate: Date | null;
    selectDate: (date: Date) => void;
}

/**
 * useEvents hook return tipi
 */
export interface UseEventsReturn {
    events: CalendarEvent[];
    addEvent: (event: CalendarEvent) => void;
    deleteEvent: (id: string) => void;
    updateEvent: (id: string, updates: Partial<CalendarEvent>) => void;
    getEventsForDate: (date: Date) => CalendarEvent[];
}

/**
 * useModal hook return tipi
 */
export interface UseModalReturn {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

// ============================================
// COMPONENT PROPS TIPLERI
// ============================================

/**
 * Modal bileşeni props
 */
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

/**
 * EventForm bileşeni props
 */
export interface EventFormProps {
    selectedDate: Date;
    onSubmit: (event: CalendarEvent) => void;
    onCancel: () => void;
}

/**
 * EventDetail bileşeni props
 */
export interface EventDetailProps {
    event: CalendarEvent;
    onClose: () => void;
    onDelete: () => void;
}

/**
 * CalendarHeader bileşeni props
 */
export interface CalendarHeaderProps {
    dateDisplay: string;
    onNext: () => void;
    onPrev: () => void;
}

/**
 * CalendarGrid bileşeni props
 */
export interface CalendarGridProps {
    days: CalendarDay[];
    selectedDate: Date | null;
    onDayClick: (date: Date) => void;
    onDayDoubleClick: (date: Date) => void;
    getEventsForDate: (date: Date) => CalendarEvent[];
    onEventClick: (event: CalendarEvent) => void;
}

/**
 * CalendarDay bileşeni props
 */
export interface CalendarDayProps {
    day: CalendarDay;
    isSelected: boolean;
    onClick: (date: Date) => void;
    onDoubleClick: (date: Date) => void;
    events: CalendarEvent[];
    onEventClick: (event: CalendarEvent) => void;
}

// ============================================
// FORM STATE TIPLERI
// ============================================

/**
 * EventForm state tipi
 */
export interface EventFormState {
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    error: string;
}
