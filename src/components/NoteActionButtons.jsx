import { Archive, ArchiveRestore, Trash2 } from 'lucide-react';

function NoteActionButtons({ id, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <>
      {archived ? (
        <button
          className="btn btn--subtle"
          onClick={() => onUnarchive(id)}
          aria-label="Pindahkan dari arsip"
        >
          <ArchiveRestore size={16} />
          <span>Aktifkan</span>
        </button>
      ) : (
        <button
          className="btn btn--subtle"
          onClick={() => onArchive(id)}
          aria-label="Arsipkan catatan"
        >
          <Archive size={16} />
          <span>Arsipkan</span>
        </button>
      )}
      <button
        className="btn btn--danger"
        onClick={() => onDelete(id)}
        aria-label="Hapus catatan"
      >
        <Trash2 size={16} />
        <span>Hapus</span>
      </button>
    </>
  );
}

export default NoteActionButtons;
