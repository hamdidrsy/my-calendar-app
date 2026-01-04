import React, { useState } from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { CalendarHeader } from './CalendarHeader';
import { WeekDays } from './WeekDays';
import { CalendarGrid } from './CalendarGrid';
import { Modal } from '../Modal';
import { EventForm } from '../EventForm';
import type { CalendarEvent } from '../../types';
import './Calendar.css';

export const Calendar: React.FC = () => {
    // Tüm mantığı hook'tan çekiyoruz
    const {
        days,
        formattedDate,
        nextMonth,
        prevMonth,
        selectedDate,
        selectDate,
        events,
        addEvent,
        deleteEvent,
        getEventsForDate
    } = useCalendar();

    // Modal state'leri
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    // Etkinlik ekleme handler'ı
    const handleAddEvent = (event: CalendarEvent) => {
        addEvent(event);
        setIsModalOpen(false);
    };

    // Gune cift tiklama handler'i - modal'i acar
    const handleDayDoubleClick = (date: Date) => {
        selectDate(date);
        setIsModalOpen(true);
    };

    // Etkinlige tiklama handler'i
    const handleEventClick = (event: CalendarEvent) => {
        setSelectedEvent(event);
    };

    // Etkinlik silme handler'i
    const handleDeleteEvent = () => {
        if (selectedEvent) {
            deleteEvent(selectedEvent.id);
            setSelectedEvent(null);
        }
    };

    // Tarihi formatla
    const formatEventDate = (date: Date): string => {
        return new Date(date).toLocaleDateString('tr-TR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Saati formatla
    const formatEventTime = (date: Date): string => {
        return new Date(date).toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="calendar">
            <CalendarHeader
                dateDisplay={formattedDate}
                onNext={nextMonth}
                onPrev={prevMonth}
            />

            <WeekDays />

            <CalendarGrid
                days={days}
                selectedDate={selectedDate}
                onDayClick={selectDate}
                onDayDoubleClick={handleDayDoubleClick}
                getEventsForDate={getEventsForDate}
                onEventClick={handleEventClick}
            />

            {/* Etkinlik Ekleme Modal'ı */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Yeni Etkinlik"
            >
                {selectedDate && (
                    <EventForm
                        selectedDate={selectedDate}
                        onSubmit={handleAddEvent}
                        onCancel={() => setIsModalOpen(false)}
                    />
                )}
            </Modal>

            {/* Etkinlik Detay Modal'ı */}
            <Modal
                isOpen={selectedEvent !== null}
                onClose={() => setSelectedEvent(null)}
                title="Etkinlik Detayı"
            >
                {selectedEvent && (
                    <div className="event-detail">
                        <h3 className="event-detail-title">{selectedEvent.title}</h3>

                        <div className="event-detail-info">
                            <div className="event-detail-row">
                                <span className="event-detail-label">Tarih:</span>
                                <span>{formatEventDate(selectedEvent.startDate)}</span>
                            </div>
                            <div className="event-detail-row">
                                <span className="event-detail-label">Saat:</span>
                                <span>
                                    {formatEventTime(selectedEvent.startDate)} - {formatEventTime(selectedEvent.endDate)}
                                </span>
                            </div>
                            {selectedEvent.description && (
                                <div className="event-detail-row">
                                    <span className="event-detail-label">Açıklama:</span>
                                    <span>{selectedEvent.description}</span>
                                </div>
                            )}
                        </div>

                        <div className="event-detail-actions">
                            <button
                                className="btn-cancel"
                                onClick={() => setSelectedEvent(null)}
                            >
                                Kapat
                            </button>
                            <button
                                className="btn-delete"
                                onClick={handleDeleteEvent}
                            >
                                Sil
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};