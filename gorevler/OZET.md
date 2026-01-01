# Proje Özeti - Kurumsal Takvim Uygulaması

## Amaç

Bu proje, **gerçek bir yazılım şirketinde çalışma deneyimini simüle ederek** modern frontend geliştirme becerilerini kazanmak için tasarlanmıştır.

Sadece kod yazmayı değil, profesyonel yazılım geliştirme süreçlerini de öğreniyoruz.

---

## Ne Öğreniyoruz?

| Alan | Detay |
|------|-------|
| **React** | Component yapısı, hooks, state yönetimi |
| **TypeScript** | Type safety, interface, generic tipler |
| **Mimari** | Modüler yapı, separation of concerns |
| **Veri Akışı** | Frontend-Backend iletişimi, API tasarımı |
| **Profesyonel Süreç** | Görev takibi, code review, sprint planlaması |

---

## Proje Senaryosu

**Şirket:** TechCraft Solutions
**Müşteri:** EventFlow Inc.
**Rol:** Junior Frontend Developer
**Tech Lead:** Claude

**Müşteri Talebi:**
> Çalışanların toplantı, etkinlik ve hatırlatıcılarını yönetebileceği modern, mobil uyumlu bir takvim uygulaması.

---

## Uygulama Özellikleri (Hedef)

### MVP (Minimum Viable Product)
- [ ] Aylık takvim görünümü
- [ ] Etkinlik ekleme/düzenleme/silme
- [ ] Etkinlik kategorileri (toplantı, hatırlatıcı, vb.)
- [ ] LocalStorage ile veri saklama

### Faz 2 - Backend Entegrasyonu
- [ ] REST API ile backend bağlantısı
- [ ] Kullanıcı authentication
- [ ] Veri senkronizasyonu

### Faz 3 - Gelişmiş Özellikler
- [ ] Haftalık/günlük görünüm
- [ ] Tekrarlayan etkinlikler
- [ ] Bildirimler/hatırlatıcılar
- [ ] Drag & drop ile etkinlik taşıma

---

## Tech Stack

```
Frontend:
├── React 18+
├── TypeScript
├── Vite (build tool)
└── CSS Modules / Styled Components

Backend (ileride):
├── Node.js + Express
├── JSON Server (mock API)
└── REST API

State Management:
├── React Context (başlangıç)
└── Redux/Zustand (gerekirse)
```

---

## Sprint Planı

| Sprint | Hedef | Durum |
|--------|-------|-------|
| Sprint 1 | Temel mimari ve type tanımları | Aktif |
| Sprint 2 | Calendar UI ve temel işlevsellik | Bekliyor |
| Sprint 3 | CRUD operasyonları ve state yönetimi | Bekliyor |
| Sprint 4 | Backend entegrasyonu | Bekliyor |

---

## Çalışma Yöntemi

1. **Görev Al** - Sprint'teki bir ticket'ı seç
2. **Anla** - Kabul kriterlerini oku, soruları düşün
3. **Kodla** - İmplementasyonu yap
4. **Review** - Tech Lead'e sun, feedback al
5. **İyileştir** - Gerekirse düzelt
6. **Tamamla** - Görevi kapat, sonrakine geç

---

## Klasör Yapısı

```
my-calendar-app/
├── gorevler/           # Görev takip dosyaları
│   ├── OZET.md         # Bu dosya
│   ├── SPRINT-1.md     # Sprint detayları
│   └── CAL-XXX.md      # Görev dosyaları
├── src/
│   ├── components/     # UI bileşenleri
│   ├── hooks/          # Custom hooks
│   ├── types/          # TypeScript tanımları
│   ├── services/       # API servisleri
│   ├── context/        # Global state
│   ├── utils/          # Yardımcı fonksiyonlar
│   └── styles/         # Stil dosyaları
└── ...
```

---

## Başarı Kriterleri

Bu projeyi tamamladığında şunları yapabileceksin:

1. Sıfırdan modüler bir React projesi kurabilmek
2. TypeScript ile type-safe kod yazabilmek
3. Component hiyerarşisi tasarlayabilmek
4. State yönetimi stratejisi seçebilmek
5. REST API ile frontend bağlantısı kurabilmek
6. Profesyonel iş akışını deneyimlemek

---

## Notlar

- Her sprint sonunda retrospektif yapılacak
- Sorular her zaman sorulabilir
- Hata yapmak öğrenmenin parçası
- Code review = öğrenme fırsatı

---

*"İyi kod, çalışan kod değildir. İyi kod, başkalarının anlayabileceği koddur."*
