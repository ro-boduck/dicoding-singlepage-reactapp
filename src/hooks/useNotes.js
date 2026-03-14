import { useState, useCallback } from 'react';
import { getInitialData } from '../utils/data';

const STORAGE_KEY = 'catatan-app-notes';

function loadNotes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Gagal memuat catatan dari localStorage:', error);
  }
  return getInitialData();
}

function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Gagal menyimpan catatan ke localStorage:', error);
  }
}

function useNotes() {
  const [notes, setNotes] = useState(loadNotes);

  const addNote = useCallback((noteData) => {
    setNotes((prev) => {
      const updated = [noteData, ...prev];
      saveNotes(updated);
      return updated;
    });
  }, []);

  const deleteNoteById = useCallback((id) => {
    setNotes((prev) => {
      const updated = prev.filter((note) => note.id !== id);
      saveNotes(updated);
      return updated;
    });
  }, []);

  const archiveNote = useCallback((id) => {
    setNotes((prev) => {
      const updated = prev.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      );
      saveNotes(updated);
      return updated;
    });
  }, []);

  const unarchiveNote = useCallback((id) => {
    setNotes((prev) => {
      const updated = prev.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      );
      saveNotes(updated);
      return updated;
    });
  }, []);

  return { notes, addNote, deleteNoteById, archiveNote, unarchiveNote };
}

export default useNotes;
