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
    const { days, formattedDate, nextMonth, prevMonth, selectedDate, selectDate } = useCalendar();

    // Modal state'i
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Etkinlik ekleme handler'ı
    const handleAddEvent = (event: CalendarEvent) => {
        console.log('Yeni etkinlik eklendi:', event);
        setIsModalOpen(false);
        // TODO: CAL-007'de etkinlikleri state'te tutacağız
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
            />

            {/* Seçili gün varsa "Etkinlik Ekle" butonu göster */}
            {selectedDate && (
                <div className="calendar-actions">
                    <button
                        className="btn-add-event"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Etkinlik Ekle
                    </button>
                </div>
            )}

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
        </div>
    );
};