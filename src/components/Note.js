import React from 'react';
import './Note.css';

const Note = ({message, messages, setMessages}) => {
  // Note to Self: Filter is a pain to learn initially, but it makes sense.
  // Filter is basically looping(foreach) through an array by item.
  // Then, doing some logic it creates a new array filtering out
  // items that failed the logic test.

  // In this instance, we want to add back every message
  // except the message clicked on.
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