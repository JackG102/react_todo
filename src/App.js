import React from 'react';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

const App = () => {
  return(
    <div 
      className="ui raised very padded text container segment"
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}
    >
      <h1>TODO App</h1>
      <NoteForm />
      <Note />
    </div>
  );
}

export default App;