import NoteCard from './NoteCard';
import { Inbox } from 'lucide-react';

function NoteList({ notes, emptyMessage, onDelete, onArchive, onUnarchive }) {
  if (notes.length === 0) {
    return (
      <div className="notes-empty">
        <Inbox size={48} strokeWidth={1} />
        <p className="notes-empty__text">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
