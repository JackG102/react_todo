import React from 'react';
import Note from './Note';


const NoteList = ({messages, setMessages, setEditMode, setFormValue, setMessage}) => {

  const renderNotes = messages.map((message)=> {
    return (
      <Note
        key={message}
        message={message}
        messages={messages}
        setMessages={setMessages}
        setEditMode={setEditMode}
        setFormValue={setFormValue}
        setMessage={setMessage}
      />
    );
  });

  return(
    <div style={{marginTop: '20px', width: '100%'}}>
      {renderNotes}
    </div>
  );
}

export default NoteList;