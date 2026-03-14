import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import NoteActionButtons from './NoteActionButtons';

function NoteCard({ note, onDelete, onArchive, onUnarchive }) {
  return (
    <article className="note-card">
      <div className="note-card__content">
        <h3 className="note-card__title">
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </h3>
        <time className="note-card__date" dateTime={note.createdAt}>
          {showFormattedDate(note.createdAt)}
        </time>
        <p className="note-card__body">{note.body}</p>
      </div>
      <div className="note-card__actions">
        <NoteActionButtons
          id={note.id}
          archived={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      </div>
    </article>
  );
}

export default NoteCard;
