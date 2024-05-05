import React, {useState} from 'react';
import { FaTrashAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Folder = ({ id, title, onMove, onRename, onDelete }) => {

  const [folderTitle, setFolderTitle] = useState(title);

  const handleRename = (e) => {
    setFolderTitle(e.target.value);
    onRename(e);
  };

  const tempName = () => {
    return `New Folder (${Math.floor(Math.random() * 100)})`;
  };

  return (
    <div className="folder">
      <input type="text" value={folderTitle || tempName()} onChange={handleRename} className="folder-title"/>
      <button className="delete" onClick={onDelete}>
        <FaTrashAlt />
      </button>
      <button className="move" onClick={onMove}>
        <FaArrowUp />
      </button>
      <button className="move" onClick={onMove}>
        <FaArrowDown />
      </button>
    </div>
  );
};

export default Folder;
