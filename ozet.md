# My Calendar App - Kod Akış Özeti

Bu döküman, uygulamanın kullanıcı etkileşimlerini ve kodun nereden nereye aktığını adım adım açıklar.

---

## 1. Uygulama Başlangıcı

```
index.html → main.tsx → App.tsx → Calendar.tsx
```

| Dosya | Açıklama |
|-------|----------|
| `index.html` | HTML giriş noktası, `<div id="root">` içerir |
| `src/main.tsx` | React uygulamasını `#root`'a bağlar |
| `src/App.tsx` | Ana uygulama bileşeni, `<Calendar />` render eder |
| `src/components/Calendar/Calendar.tsx` | Takvim ana bileşeni |

---

## 2. Takvim Yüklendiğinde

```
Calendar.tsx → useCalendar() hook → dateUtils.ts
```

### Adım adım:

1. **Calendar.tsx:13-24** - `useCalendar()` hook'u çağrılır
2. **hooks/useCalendar.ts:7** - `currentDate` state oluşturulur (bugünün tarihi)
3. **hooks/useCalendar.ts:16** - `getCalendarDays(currentDate)` çağrılır
4. **utils/dateUtils.ts:4-65** - 42 günlük takvim grid'i hesaplanır:
   - Önceki ayın son günleri (soluk)
   - Bu ayın günleri
   - Sonraki ayın ilk günleri (soluk)

### Dönen Veriler:
```typescript
{
  days: CalendarDay[],      // 42 günlük dizi
  formattedDate: string,    // "Ocak 2026"
  selectedDate: Date | null,
  events: CalendarEvent[],
  // ... fonksiyonlar
}
```

---

## 3. Takvim Render Sırası

```
Calendar.tsx → CalendarHeader → WeekDays → CalendarGrid → CalendarDay
```

| Sıra | Bileşen | Dosya | Görevi |
|------|---------|-------|--------|
| 1 | `CalendarHeader` | CalendarHeader.tsx | Ay/Yıl başlığı + ◀ ▶ butonları |
| 2 | `WeekDays` | WeekDays.tsx | Pzt, Sal, Çar... başlıkları |
| 3 | `CalendarGrid` | CalendarGrid.tsx | 42 günlük grid container |
| 4 | `CalendarDay` | CalendarDay.tsx | Her bir gün hücresi |

---

## 4. Kullanıcı Etkileşimleri

### 4.1 Ay Değiştirme (◀ ▶ Butonları)

```
Kullanıcı tıklar → CalendarHeader → Calendar → useCalendar → dateUtils
```

**Akış:**
1. Kullanıcı `◀` veya `▶` butonuna tıklar
2. **CalendarHeader.tsx:12-13** - `onPrev()` veya `onNext()` çağrılır
3. **Calendar.tsx:77-78** - Props olarak gelen `prevMonth`/`nextMonth` tetiklenir
4. **useCalendar.ts:18-24** - `setCurrentDate()` ile yeni ay hesaplanır
5. **useCalendar.ts:16** - `getCalendarDays()` yeni ay için günleri hesaplar
6. React otomatik olarak tüm bileşenleri yeniden render eder

---

### 4.2 Güne Tek Tıklama (Seçim)

```
Kullanıcı tıklar → CalendarDay → CalendarGrid → Calendar → useCalendar
```

**Akış:**
1. Kullanıcı bir güne tıklar
2. **CalendarDay.tsx:38** - `onClick={() => onClick(day.date)}` tetiklenir
3. **CalendarGrid.tsx:32** - `onClick={onDayClick}` üst bileşene iletir
4. **Calendar.tsx:86** - `onDayClick={selectDate}` hook fonksiyonunu çağırır
5. **useCalendar.ts:33-36** - `setSelectedDate(date)` state güncellenir
6. Seçili gün CSS class'ı `selected` alır

---

### 4.3 Güne Çift Tıklama (Etkinlik Ekleme Modal)

```
Kullanıcı çift tıklar → CalendarDay → CalendarGrid → Calendar → Modal → EventForm
```

**Akış:**
1. Kullanıcı bir güne çift tıklar
2. **CalendarDay.tsx:39** - `onDoubleClick={() => onDoubleClick(day.date)}`
3. **CalendarGrid.tsx:33** - `onDoubleClick={onDayDoubleClick}`
4. **Calendar.tsx:37-40** - `handleDayDoubleClick()` fonksiyonu:
   ```typescript
   const handleDayDoubleClick = (date: Date) => {
       selectDate(date);           // Tarihi seç
       setIsModalOpen(true);       // Modal'ı aç
   };
   ```
5. **Calendar.tsx:93-105** - Modal bileşeni açılır, içinde EventForm render edilir

---

### 4.4 Etkinlik Kaydetme

```
EventForm (submit) → Calendar → useCalendar → state güncellenir
```

**Akış:**
1. Kullanıcı formu doldurur ve "Kaydet" tıklar
2. **EventForm.tsx:31-57** - `handleSubmit()` fonksiyonu:
   - Validasyon yapar (başlık zorunlu)
   - Benzersiz ID oluşturur
   - `CalendarEvent` objesi oluşturur
   - `onSubmit(newEvent)` çağırır
3. **Calendar.tsx:31-34** - `handleAddEvent()` fonksiyonu:
   ```typescript
   const handleAddEvent = (event: CalendarEvent) => {
       addEvent(event);           // Hook'a ekle
       setIsModalOpen(false);     // Modal'ı kapat
   };
   ```
4. **useCalendar.ts:39-42** - `addEvent()` - events state'ine ekler
5. Takvim yeniden render edilir, etkinlik ilgili günde görünür

---

### 4.5 Etkinliğe Tıklama (Detay Görüntüleme)

```
Kullanıcı tıklar → CalendarDay → CalendarGrid → Calendar → Modal (Detay)
```

**Akış:**
1. Kullanıcı gün içindeki bir etkinliğe tıklar
2. **CalendarDay.tsx:30-33** - `handleEventClick()`:
   ```typescript
   const handleEventClick = (e: React.MouseEvent, event: CalendarEvent) => {
       e.stopPropagation();  // Gün tıklamasını engelle
       onEventClick(event);
   };
   ```
3. **CalendarGrid.tsx:35** - `onEventClick={onEventClick}`
4. **Calendar.tsx:43-45** - `handleEventClick()`:
   ```typescript
   const handleEventClick = (event: CalendarEvent) => {
       setSelectedEvent(event);  // Etkinliği state'e kaydet
   };
   ```
5. **Calendar.tsx:108-152** - Etkinlik detay modal'ı açılır

---

### 4.6 Etkinlik Silme

```
Kullanıcı "Sil" tıklar → Calendar → useCalendar → state güncellenir
```

**Akış:**
1. Etkinlik detay modal'ında "Sil" butonuna tıklanır
2. **Calendar.tsx:144** - `onClick={handleDeleteEvent}`
3. **Calendar.tsx:48-53** - `handleDeleteEvent()`:
   ```typescript
   const handleDeleteEvent = () => {
       if (selectedEvent) {
           deleteEvent(selectedEvent.id);  // Hook'tan sil
           setSelectedEvent(null);         // Modal'ı kapat
       }
   };
   ```
4. **useCalendar.ts:45-48** - `deleteEvent()` - events state'inden filtreler
5. Takvim yeniden render edilir, etkinlik kaybolur

---

## 5. Tip Tanımları (types/index.ts)

```typescript
// Etkinlik yapısı
interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    color?: string;
}

// Gün yapısı
interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    events: CalendarEvent[];
}
```

---

## 6. Bileşen Hiyerarşisi (Görsel)

```
App
└── Calendar
    ├── CalendarHeader
    │   ├── ◀ Button (onPrev)
    │   ├── Ay/Yıl Başlığı
    │   └── ▶ Button (onNext)
    │
    ├── WeekDays
    │   └── Pzt | Sal | Çar | Per | Cum | Cmt | Paz
    │
    ├── CalendarGrid
    │   └── CalendarDay (x42)
    │       ├── Gün Numarası
    │       └── Etkinlikler (tıklanabilir)
    │
    ├── Modal (Etkinlik Ekleme)
    │   └── EventForm
    │       ├── Tarih Gösterimi
    │       ├── Başlık Input
    │       ├── Açıklama Textarea
    │       ├── Başlangıç/Bitiş Saati
    │       └── İptal/Kaydet Butonları
    │
    └── Modal (Etkinlik Detay)
        ├── Başlık
        ├── Tarih/Saat
        ├── Açıklama
        └── Kapat/Sil Butonları
```

---

## 7. State Yönetimi Özeti

| State | Konum | Amaç |
|-------|-------|------|
| `currentDate` | useCalendar | Gösterilen ay/yıl |
| `selectedDate` | useCalendar | Seçili gün |
| `events` | useCalendar | Tüm etkinlikler listesi |
| `isModalOpen` | Calendar | Ekleme modal'ı açık mı? |
| `selectedEvent` | Calendar | Detay gösterilecek etkinlik |
| Form states | EventForm | Başlık, açıklama, saatler |

---

## 8. Dosya Bağımlılık Haritası

```
main.tsx
    └── App.tsx
            └── Calendar.tsx
                    ├── useCalendar.ts (hook)
                    │       └── dateUtils.ts (yardımcı)
                    │               └── types/index.ts
                    │
                    ├── CalendarHeader.tsx
                    ├── WeekDays.tsx
                    ├── CalendarGrid.tsx
                    │       └── CalendarDay.tsx
                    │               └── types/index.ts
                    │
                    ├── Modal.tsx
                    └── EventForm.tsx
                            └── types/index.ts
```

---

## Özet: Kullanıcı Aksiyonları ve Kod Akışı

| Aksiyon | Tetikleyici | Ana Fonksiyon | State Değişikliği |
|---------|-------------|---------------|-------------------|
| Önceki Ay | ◀ butonu | `prevMonth()` | `currentDate` |
| Sonraki Ay | ▶ butonu | `nextMonth()` | `currentDate` |
| Gün Seç | Tek tık | `selectDate()` | `selectedDate` |
| Modal Aç | Çift tık | `handleDayDoubleClick()` | `isModalOpen` |
| Etkinlik Ekle | Form submit | `addEvent()` | `events` |
| Etkinlik Gör | Etkinlik tık | `handleEventClick()` | `selectedEvent` |
| Etkinlik Sil | Sil butonu | `deleteEvent()` | `events` |
