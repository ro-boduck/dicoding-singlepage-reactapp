import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import useNotes from './hooks/useNotes';
import { generateId } from './utils/index';

function App() {
  const { notes, addNote, deleteNoteById, archiveNote, unarchiveNote } = useNotes();

  const onAddNote = ({ title, body }) => {
    const newNote = {
      id: generateId(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
  };

  return (
    <div className="app">
      <Navigation />
      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                notes={notes}
                onDelete={deleteNoteById}
                onArchive={archiveNote}
                onUnarchive={unarchiveNote}
              />
            }
          />
          <Route
            path="/archives"
            element={
              <ArchivePage
                notes={notes}
                onDelete={deleteNoteById}
                onArchive={archiveNote}
                onUnarchive={unarchiveNote}
              />
            }
          />
          <Route
            path="/notes/new"
            element={<AddNotePage onAddNote={onAddNote} />}
          />
          <Route
            path="/notes/:id"
            element={
              <DetailPage
                notes={notes}
                onDelete={deleteNoteById}
                onArchive={archiveNote}
                onUnarchive={unarchiveNote}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
