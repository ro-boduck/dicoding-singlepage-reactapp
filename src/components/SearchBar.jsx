import { Search, X } from 'lucide-react';

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <div className="search-bar">
      <Search size={18} className="search-bar__icon" />
      <input
        type="text"
        placeholder="Cari catatan..."
        className="search-bar__input"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        aria-label="Cari catatan berdasarkan judul"
      />
      {keyword && (
        <button
          className="search-bar__clear"
          onClick={() => onKeywordChange('')}
          aria-label="Hapus pencarian"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
