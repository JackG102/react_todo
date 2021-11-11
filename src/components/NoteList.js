import React from 'react';
import Note from './Note';


const NoteList = ({messages}) => {
  console.log(messages);

  const renderNotes = messages.map((message)=> {
    return <Note key={message} message={message} />;
  });

  return(
    <div style={{marginTop: '20px', width: '100%'}}>
      {renderNotes}
    </div>
  );
}

export default NoteList;