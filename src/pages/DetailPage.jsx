import { useParams, useNavigate, Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import { ArrowLeft, SearchX } from 'lucide-react';
import NoteActionButtons from '../components/NoteActionButtons';

function DetailPage({ notes, onDelete, onArchive, onUnarchive }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return (
      <section className="page">
        <div className="note-not-found">
          <SearchX size={48} strokeWidth={1} />
          <h2>Catatan tidak ditemukan</h2>
          <p>Catatan dengan ID &quot;{id}&quot; tidak ada.</p>
          <Link to="/" className="btn btn--primary">
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </section>
    );
  }

  const handleDelete = (noteId) => {
    onDelete(noteId);
    navigate('/');
  };

  const handleArchive = (noteId) => {
    onArchive(noteId);
    navigate('/');
  };

  const handleUnarchive = (noteId) => {
    onUnarchive(noteId);
    navigate('/');
  };

  return (
    <section className="page">
      <article className="note-detail">
        <div className="note-detail__header">
          <h2 className="note-detail__title">{note.title}</h2>
          <time className="note-detail__date" dateTime={note.createdAt}>
            {showFormattedDate(note.createdAt)}
          </time>
          {note.archived && <span className="note-detail__badge">Diarsipkan</span>}
        </div>
        <div className="note-detail__body">
          <p>{note.body}</p>
        </div>
        <div className="note-detail__actions">
          <Link to="/" className="btn btn--secondary">
            <ArrowLeft size={16} />
            <span>Kembali</span>
          </Link>
          <NoteActionButtons
            id={note.id}
            archived={note.archived}
            onDelete={handleDelete}
            onArchive={handleArchive}
            onUnarchive={handleUnarchive}
          />
        </div>
      </article>
    </section>
  );
}

export default DetailPage;
