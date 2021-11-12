import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [messages, setMessages] = useState([
    'Take dog out.',
    'Clean up bedroom.',
    'Buy flowers.'
  ]);
  const [message, setMessage] = useState('');
  const [formValue, setFormValue] = useState('');
  const [editMode, setEditMode] = useState(false);

  return(
    <div 
      className="ui raised very padded text container segment"
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}
    >
      <h1>TODO App</h1>
      <NoteForm
        formValue={formValue}
        setFormValue={setFormValue}
        messages={messages}
        setMessages={setMessages}
        editMode={editMode}
        setEditMode={setEditMode}
        message={message}
        setMessage={setMessage}
      />
      <NoteList
        messages={messages}
        setMessages={setMessages}
        setEditMode={setEditMode}
        setFormValue={setFormValue}
        setMessage={setMessage}
      />
    </div>
  );
}

export default App;