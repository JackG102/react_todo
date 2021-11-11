import React from 'react';
import Note from './Note';

const NoteList = () => {
  return(
    <div style={{marginTop: '20px'}}>
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default NoteList;