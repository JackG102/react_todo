import React from 'react';
import './Note.css';

const Note = () => {
  return(
    <div className="note-container ui raised segment">
      <p>Here is a bunch of textHere is a bunch of textHere is a bunch of textHere is a bunch of textHere is a bunch of textHere is a bunch of textHere is a bunch of textHere is a bunch of textHere is a bunch of text</p>
      <div className="note-icon-container">
        <i className="edit icon"></i>
        <i className="trash icon"></i>
      </div>
    </div>
  );
}

export default Note;