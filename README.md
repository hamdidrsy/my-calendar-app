# My Calendar App

React + TypeScript + Vite ile geliştirilmiş modern bir takvim uygulaması.

## Proje Hakkında

Kullanıcıların etkinlik ekleyip, görüntüleyip, silebileceği basit ve kullanışlı bir takvim uygulamasıdır. Proje eğitim amaçlı geliştirilmiştir ve modüler yapıya sahiptir.

## Teknolojiler

- React 18
- TypeScript
- Vite
- CSS3 (Custom Properties)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretim için build oluştur
npm run build
```

## Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Calendar/        # Ana takvim bileşeni ve alt bileşenler
│   │   ├── Calendar.tsx         # Ana takvim container
│   │   ├── CalendarHeader.tsx   # Ay/yıl başlığı ve navigasyon
│   │   ├── CalendarGrid.tsx     # Gün hücreleri grid yapısı
│   │   ├── CalendarDay.tsx      # Tek bir gün hücresi
│   │   ├── WeekDays.tsx         # Hafta günleri başlıkları
│   │   └── Calendar.css         # Takvim stilleri
│   │
│   ├── EventDetail/     # Etkinlik detay görüntüleme
│   │   ├── EventDetail.tsx      # Etkinlik bilgilerini gösterir
│   │   └── EventDetail.css      # Detay stilleri
│   │
│   ├── EventForm/       # Etkinlik ekleme formu
│   │   ├── EventForm.tsx        # Form bileşeni
│   │   └── EventForm.css        # Form stilleri
│   │
│   ├── Modal/           # Genel modal bileşeni
│   │   ├── Modal.tsx            # Yeniden kullanılabilir modal
│   │   └── Modal.css            # Modal stilleri
│   │
│   └── index.ts         # Barrel export (tüm bileşenler)
│
├── hooks/               # Custom React hooks
│   ├── useCalendar.ts   # Takvim navigasyonu (ay değiştirme, gün seçimi)
│   ├── useEvents.ts     # Etkinlik CRUD işlemleri (ekle, sil, güncelle)
│   ├── useModal.ts      # Modal açma/kapama mantığı
│   └── index.ts         # Barrel export
│
├── constants/           # Sabit değerler
│   └── index.ts         # Gün isimleri, varsayılan değerler, grid boyutu
│
├── types/               # TypeScript tip tanımları
│   └── index.ts         # Tüm interface ve type tanımları
│
├── utils/               # Yardımcı fonksiyonlar
│   ├── dateUtils.ts     # Tarih formatlama ve hesaplama fonksiyonları
│   └── index.ts         # Barrel export
│
├── styles/              # Global stiller
│   ├── index.css        # Ana CSS giriş noktası
│   ├── variables.css    # CSS değişkenleri (renkler, spacing)
│   ├── reset.css        # Tarayıcı sıfırlama stilleri
│   └── base.css         # Temel stiller
│
├── App.tsx              # Ana uygulama bileşeni
└── main.tsx             # React giriş noktası
```

## Klasör Açıklamaları

| Klasör | Amaç |
|--------|------|
| `components/` | UI bileşenleri - her bileşen kendi klasöründe |
| `hooks/` | Custom hooks - state ve logic yönetimi |
| `constants/` | Sabit değerler - hardcoded değerler merkezi yerde |
| `types/` | TypeScript tipleri - tip güvenliği |
| `utils/` | Yardımcı fonksiyonlar - tarih işlemleri |
| `styles/` | Global CSS - değişkenler ve temel stiller |

## Özellikler

- Aylık takvim görünümü
- Önceki/sonraki ay navigasyonu
- Gün seçimi (tek tık)
- Etkinlik ekleme (çift tık)
- Etkinlik görüntüleme
- Etkinlik silme
- Türkçe arayüz

## Mimari Prensipler

- **Single Responsibility**: Her dosya tek bir iş yapar
- **DRY**: Tekrar eden kod yok
- **Modüler Yapı**: Bileşenler bağımsız ve yeniden kullanılabilir
- **Type Safety**: Tüm kod TypeScript ile tip güvenli
