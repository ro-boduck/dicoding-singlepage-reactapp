const getInitialData = () => [
  {
    id: 'notes-1',
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    archived: false,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    archived: false,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    body: 'Modularization merupakan teknik dalam memanajemen fungsi-fungsi yang ada di dalam sebuah program agar program tersebut dapat dikelola dengan mudah dan reusable.',
    archived: false,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle phases terdiri dari Mounting, Updating, dan Unmounting DMC.',
    archived: false,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modul yang didefinisikan oleh ECMAScript atau JavaScript itu sendiri. Format ini dirancang untuk menjadi standar modul di JavaScript dan mendefinisikan sintaks import dan export.',
    archived: false,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan program menjadi satu berkas bundle.',
    archived: true,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-7',
    title: 'JSX',
    body: 'JSX merupakan sintaks spesial yang digunakan untuk menulis React component. JSX memungkinkan kita menulis React component dengan menggunakan sintaks seperti HTML.',
    archived: true,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-8',
    title: 'SPA',
    body: 'SPA (Single Page Application) adalah pendekatan dalam pengembangan web yang memuat satu halaman HTML utama dan secara dinamis memperbarui konten halaman tersebut berdasarkan interaksi pengguna tanpa perlu memuat ulang halaman secara keseluruhan.',
    archived: true,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
  {
    id: 'notes-9',
    title: 'React Hooks',
    body: 'React Hooks merupakan fitur pada React yang memungkinkan kita menggunakan state dan fitur React lainnya tanpa menulis sebuah class component.',
    archived: false,
    createdAt: '2026-03-14T04:27:34.572Z',
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { getInitialData, showFormattedDate };
