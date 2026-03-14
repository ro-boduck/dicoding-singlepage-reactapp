import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';

function NotFoundPage() {
  return (
    <section className="page">
      <div className="not-found">
        <FileQuestion size={64} strokeWidth={1} className="not-found__icon" />
        <span className="not-found__code">404</span>
        <h2 className="not-found__title">Halaman Tidak Ditemukan</h2>
        <p className="not-found__text">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link to="/" className="btn btn--back-home">
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
