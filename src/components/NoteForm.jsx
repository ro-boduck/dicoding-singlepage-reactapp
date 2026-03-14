import { useState } from 'react';
import { Save, FileText } from 'lucide-react';

const TITLE_MAX_LENGTH = 50;

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const remainingChars = TITLE_MAX_LENGTH - title.length;
  const charPercent = (title.length / TITLE_MAX_LENGTH) * 100;
  const isReady = title.trim() !== '' && body.trim() !== '';

  const handleTitleChange = (e) => {
    if (e.target.value.length <= TITLE_MAX_LENGTH) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isReady) return;
    onAddNote({ title: title.trim(), body: body.trim() });
    setTitle('');
    setBody('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="note-form__group">
        <label htmlFor="note-title" className="note-form__label">
          Judul
        </label>
        <input
          id="note-title"
          type="text"
          className="note-form__input"
          placeholder="Ketik judul catatan..."
          value={title}
          onChange={handleTitleChange}
          autoFocus
          required
        />
        <div className="note-form__char-row">
          <div className="note-form__progress-track">
            <div
              className={`note-form__progress-bar ${remainingChars <= 10 ? 'note-form__progress-bar--warning' : ''} ${remainingChars <= 0 ? 'note-form__progress-bar--full' : ''}`}
              style={{ width: `${charPercent}%` }}
            />
          </div>
          <span className={`note-form__char-count ${remainingChars <= 10 ? 'note-form__char-count--warning' : ''}`}>
            {remainingChars}
          </span>
        </div>
      </div>

      <div className="note-form__group">
        <label htmlFor="note-body" className="note-form__label">
          Isi Catatan
        </label>
        <textarea
          id="note-body"
          className="note-form__textarea"
          placeholder="Tulis isi catatan di sini..."
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>

      {isReady && (
        <div className="note-form__preview">
          <div className="note-form__preview-header">
            <FileText size={14} />
            <span>Pratinjau</span>
          </div>
          <h4 className="note-form__preview-title">{title}</h4>
          <p className="note-form__preview-body">{body.length > 120 ? body.substring(0, 120) + '...' : body}</p>
        </div>
      )}

      <button
        type="submit"
        className="btn btn--save btn--full"
        disabled={!isReady}
      >
        <Save size={18} />
        <span>Simpan Catatan</span>
      </button>
    </form>
  );
}

export default NoteForm;
