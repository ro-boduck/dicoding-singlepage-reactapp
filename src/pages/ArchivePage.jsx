import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function ArchivePage({ notes, onDelete, onArchive, onUnarchive }) {
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
    const archivedNotes = notes.filter((note) => note.archived);
    if (!keyword) return archivedNotes;
    return archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [notes, keyword]);

  return (
    <section className="page">
      <h2 className="page__title">Arsip Catatan</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChange} />
      <NoteList
        notes={filteredNotes}
        emptyMessage="Arsip kosong"
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </section>
  );
}

export default ArchivePage;
