import { Link, useLocation } from 'react-router-dom';
import { FileText, Archive, PenLine } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <h1 className="app-header__title">
          <Link to="/">Catatan</Link>
        </h1>
        <nav className="app-header__nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'nav-link--active' : ''}`}
          >
            <FileText size={18} />
            <span>Catatan</span>
          </Link>
          <Link
            to="/archives"
            className={`nav-link ${location.pathname === '/archives' ? 'nav-link--active' : ''}`}
          >
            <Archive size={18} />
            <span>Arsip</span>
          </Link>
          <Link
            to="/notes/new"
            className={`nav-link ${location.pathname === '/notes/new' ? 'nav-link--active' : ''}`}
          >
            <PenLine size={18} />
            <span>Tambah</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
