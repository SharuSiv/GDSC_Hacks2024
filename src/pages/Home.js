import React, { useState } from 'react';
import Note from '../components/Note';
import Folder from '../components/Folder';
import addnotes from '../img/more.png';
import recordLogo from '../img/wave-sound.png';
import importNote from '../img/upload.png';
import './Home.css';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../img/welcome-brief.png';

import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';

const Home = () => {
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

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
    console.log(folders)  };

  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), content: '' }]);
  };

  const onDelete = (id) => {
    console.log('Deleting folder with id:', id);
    setFolders(folders.filter((folder) => folder.id !== id));
    console.log(folders)
  };

  const recordNote = () => {
    navigate("/Recording");  

  }

  return (
    <div className="home-container">
      {isLoggedIn && (
      <> <header className="header">
        <img src={image} alt="logo" className="logo" />
        <h1 className="welcome-message">Welcome Back, name!</h1>
      </header>

      <div className="Welcome-brief">

        <h1 className="welcome-message">Welcome Back, Friend!</h1>
        <br />
        <p className="message"> A New Day, A New Note </p>
        <p className="message"> What will you make today? </p>
      </div>

      <div className="nav">
        <ul className="nav-list">
          
          <li className="nav-item">
            <button className="btn-add-note" onClick={addNote}>
              <img src={addnotes} alt="add more" />
            </button>
            <h4>+ Add Note</h4>
          </li>

          <li className="nav-item">
            <button className="btn-start-recording" onClick={recordNote}>
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
      </div>

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
              onDelete={(id) => onDelete(folder.id)}
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
      </>)}
      {!isLoggedIn && ( <h1> You are not logged in. Please login to access this page</h1>)}
       
      
      
    </div>
  );
};

export default Home;
