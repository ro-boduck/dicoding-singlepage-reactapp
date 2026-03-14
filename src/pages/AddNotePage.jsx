import { useNavigate } from 'react-router-dom';
import { PenLine } from 'lucide-react';
import NoteForm from '../components/NoteForm';

function AddNotePage({ onAddNote }) {
  const navigate = useNavigate();

  const handleAddNote = (noteData) => {
    onAddNote(noteData);
    navigate('/');
  };

  return (
    <section className="page add-note-page">
      <div className="add-note-page__header">
        <PenLine size={24} />
        <h2 className="page__title">Tambah Catatan Baru</h2>
        <p className="add-note-page__subtitle">Buat catatan baru untuk disimpan</p>
      </div>
      <NoteForm onAddNote={handleAddNote} />
    </section>
  );
}

export default AddNotePage;
