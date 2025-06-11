# Mitigasi Kita

**MitigasiKita** merupakan sistem peringatan dini berbasis web yang dikembangkan untuk menjembatani kesenjangan informasi kebencanaan di Indonesia, khususnya gempa dan tsunami.

## Fitur Utama

- Login & Register
- Peta Interaktif (Leaflet/OpenStreetMap)
- Dropdown lokasi kota di Indonesia.
- Prediksi tingkat resiko bencana alam. **(Aman, Waspada, Berbahaya)**
- Menyimpan, melihat, dan menghapus riwayat prediksi
- Notifikasi dan konfirmasi
- Pola arsitektur **MVP (Model-View-Presenter)**

## Teknologi yang Digunakan
- React + vite
- Leaflet / OpenStreetMap (Peta interaktif)
- SweetAlert2 (Notifikasi & Konfirmasi)
- Tailwind CSS (Desain responsif)

## Setup dan Instalasi
```bash
git clone https://github.com/lizia20/mitigasi-kita.git
cd mitigasi-kita
npm install
```

## Folder Structure
```
mitigasi-kita/
├── presenters/
├── public/
├── src
│    ├── assets
│    ├── components
│    ├── data  
│    ├── pages
│    ├── utils
│    ├── App.css
│    ├── App.jsx
│    ├── index.css
│    └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```