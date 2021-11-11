import React from 'react';
import './Note.css';

const Note = ({message}) => {
  return(
    <div className="note-container ui raised segment">
      <p>{message}</p>
      <div className="note-icon-container">
        <i className="edit icon"></i>
        <i className="trash icon"></i>
      </div>
    </div>
  );
}

export default Note;