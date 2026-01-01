# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # my-calendar-app

  Kısa Özet

  Basit bir React + TypeScript + Vite takvim uygulamasıdır. Kullanıcılar etkinlik ekleyip görüntüleyebilir. Proje öğretici amaçlıdır ve geliştirilmeye açıktır.

  Hızlı Başlangıç

  1. Bağımlılıkları yükleyin:

  ```bash
  npm install
  ```

  2. Geliştirme sunucusunu başlatın:

  ```bash
  npm run dev
  ```

  3. Üretim için build oluşturun:

  ```bash
  npm run build
  ```

  Notlar

  - `gorevler/` klasörü repodan kaldırıldı ve `.gitignore`'a eklendi; uygulama kodu `src/` altında.
  - README gerektiğinde genişletilebilir.
    - `gorevler/` klasörü proje kökünden kaldırıldı ve izleme dışı bırakıldı; kaynak kod `src/` altında.

