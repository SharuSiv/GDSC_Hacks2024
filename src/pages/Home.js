import React, { useState } from 'react';
import Note from '../components/Note';
import Folder from '../components/Folder';
import image from '../img/image.png';
import addnotes from '../img/more.png';
import recordLogo from '../img/wave-sound.png';
import importNote from '../img/upload.png';

const Home = () => {
  const [folders, setFolders] = useState([]);

  const renameFolder = (id, newTitle) => {
    setFolders(
      folders.map((folder) => {
        if (folder.id === id) {
          return { ...folder, title: newTitle };
        }
        return folder;
      })
    );
  };

  const addFolder = () => {
    setFolders([...folders, { id: Date.now(), title: '', notes: [] }]);
  };

  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), content: '' }]);
  };

  return (
    <div className="home-container">
      <header className="header">
        <img src={image} alt="logo" className="logo" />
        <h1 className="welcome-message">Welcome Back, name!</h1>
      </header>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="btn-add-note" onClick={addNote}>
              <img src={addnotes} alt="add more" />
            </button>

            <h4>+ Add Note</h4>
          </li>
          <li className="nav-item">
            <button className="btn-start-recording">
              <img src={recordLogo} alt="start recording" />
            </button>
            <h4>Start Recording</h4>
          </li>
          <li className="nav-item">
            <button className="btn-import-notes">
              <img src={importNote} alt="import notes" />
            </button>
            <h4>Import Notes</h4>
          </li>
        </ul>
      </nav>

      <main className="main">
        <section className="folders-section">
          <button className="btn-add-folder" onClick={addFolder}>
            + Add New folder
          </button>
          {folders.map((folder) => (
            <Folder
              key={folder.id}
              id={folder.id}
              title={folder.title}
              notes={folder.notes}
              onMove={() => console.log('Move folder', folder.id)}
              onRename={(e) => renameFolder(folder.id, e.target.value)}
              onDelete={() => console.log('Delete folder', folder.id)}
            />
          ))}
        </section>
        <section className="notes-section">
          <input
            type="search"
            placeholder="Note Search..."
            className="search-input"
          />
          {notes.map((note) => (
            <Note key={note.id} id={note.id} content={note.content} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
