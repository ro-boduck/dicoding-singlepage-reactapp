import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function HomePage({ notes, onDelete, onArchive, onUnarchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const onKeywordChange = (newKeyword) => {
    if (newKeyword) {
      setSearchParams({ keyword: newKeyword });
    } else {
      setSearchParams({});
    }
  };

  const filteredNotes = useMemo(() => {
    const activeNotes = notes.filter((note) => !note.archived);
    if (!keyword) return activeNotes;
    return activeNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [notes, keyword]);

  return (
    <section className="page">
      <h2 className="page__title">Catatan Aktif</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChange} />
      <NoteList
        notes={filteredNotes}
        emptyMessage="Tidak ada catatan"
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </section>
  );
}

export default HomePage;
