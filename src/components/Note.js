import React from 'react';
import './Note.css';

const Note = ({message, messages, setMessages}) => {
  const deleteMessage = () => {
    setMessages(messages.filter((item) => item !== message ));
  };

  return(
    <div className="note-container ui raised segment">
      <p>{message}</p>
      <div className="note-icon-container">
        <i className="edit icon"></i>
        <i className="trash icon" onClick={deleteMessage}></i>
      </div>
    </div>
  );
}

export default Note;