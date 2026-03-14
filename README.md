<div align="center">

# 📝 Catatan App

**Aplikasi Catatan Pribadi — Single Page Application**

Dibangun dengan React + Vite sebagai tugas submission Dicoding

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)

</div>

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 📋 **Daftar Catatan** | Menampilkan semua catatan aktif dengan judul, tanggal, dan isi |
| 📄 **Detail Catatan** | Halaman detail untuk setiap catatan dengan path parameter (`/notes/:id`) |
| ➕ **Tambah Catatan** | Form interaktif dengan progress bar karakter dan live preview |
| 🗑️ **Hapus Catatan** | Menghapus catatan dari daftar aktif maupun arsip |
| 📦 **Arsip Catatan** | Arsipkan dan aktifkan kembali catatan |
| 🔍 **Pencarian** | Cari catatan berdasarkan judul dengan URL search params (`?keyword=`) |
| 🚫 **Halaman 404** | Halaman khusus untuk URL yang tidak ditemukan |
| 💾 **Persistensi** | Data tersimpan di localStorage, tidak hilang saat refresh |
| ⚡ **Optimasi** | `useMemo` untuk memoize filtering, `useCallback` untuk handler |

---

## 🛠️ Tech Stack

```
React 19       → UI Library
React Router 7 → Client-side Routing
Vite 8         → Build Tool & Dev Server
Lucide React   → SVG Icon Library
LocalStorage   → Data Persistence
```

---

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── Navigation.jsx        # Header & navigasi
│   ├── SearchBar.jsx          # Input pencarian
│   ├── NoteCard.jsx           # Kartu catatan
│   ├── NoteList.jsx           # Grid daftar catatan
│   ├── NoteForm.jsx           # Form tambah catatan
│   └── NoteActionButtons.jsx  # Tombol arsip & hapus (reusable)
├── pages/
│   ├── HomePage.jsx           # Halaman catatan aktif
│   ├── ArchivePage.jsx        # Halaman arsip
│   ├── DetailPage.jsx         # Halaman detail catatan
│   ├── AddNotePage.jsx        # Halaman tambah catatan
│   └── NotFoundPage.jsx       # Halaman 404
├── hooks/
│   └── useNotes.js            # Custom hook (state + localStorage)
├── utils/
│   ├── data.js                # Data awal & format tanggal
│   └── index.js               # Generate ID
├── App.jsx                    # Root component & routing
├── main.jsx                   # Entry point
└── index.css                  # Seluruh styling (minimalist theme)
```

---

## 🚀 Cara Menjalankan

```bash
# 1. Clone repository
git clone https://github.com/ro-boduck/dicoding-singlepage-reactapp.git

# 2. Masuk ke direktori proyek
cd dicoding-singlepage-reactapp

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Buka **http://localhost:5173** di browser.

---

## 🗺️ Halaman & Route

| Route | Halaman | Keterangan |
|-------|---------|------------|
| `/` | Home | Daftar catatan aktif + pencarian |
| `/archives` | Arsip | Daftar catatan yang diarsipkan |
| `/notes/new` | Tambah | Form tambah catatan baru |
| `/notes/:id` | Detail | Detail catatan berdasarkan ID |
| `/*` | 404 | Halaman tidak ditemukan |

---

## 📋 Kriteria Submission

### Kriteria Utama ✅

- [x] Minimal 2 halaman berbeda (Home & Detail)
- [x] Menampilkan daftar catatan (judul, tanggal, isi)
- [x] Menampilkan detail catatan tunggal via path parameter
- [x] Menambah catatan baru (controlled component, max 50 karakter judul)
- [x] Menghapus catatan

### Kriteria Opsional ✅

- [x] **Pencarian catatan** — filter berdasarkan judul dengan `useSearchParams`
- [x] **Arsip catatan** — arsipkan & aktifkan kembali
- [x] **Halaman 404** — untuk URL yang tidak dikenal

### Kualitas Kode ✅

- [x] Semua komponen menggunakan **function component** (tidak ada class component)
- [x] Komponen dipecah kecil sesuai tanggung jawab (6 komponen + 5 halaman)
- [x] Gaya penulisan konsisten (single quote, 2 spasi, semicolons)
- [x] Menggunakan `useMemo` dan `useCallback` untuk optimasi performa

---

<div align="center">

**Dibuat dengan ❤️ menggunakan React + Vite**

</div>
