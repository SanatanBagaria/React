import { useState, useEffect } from 'preact/hooks'
import uuid from 'react-uuid'
import './app.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

export function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  )
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])  

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({id}) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find(({id}) => id === activeNote);
  }

  return (
    <div className="App">
      <Sidebar
      notes = {notes}
      onAddNote = { onAddNote }
      onDeleteNote = {onDeleteNote}
      activeNote = {activeNote}
      setActiveNote = {setActiveNote}
       />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
