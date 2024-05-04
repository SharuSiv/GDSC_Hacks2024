import React from 'react';
import { FaTrashAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Folder = ({ id, title, onMove, onRename, onDelete }) => {


  
  return (
    <div className="folder">
      <input type="text" value={title} onChange={onRename} />
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
