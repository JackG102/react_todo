import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [messages, setMessages] = useState([
    'Take dog out.',
    'Clean up bedroom.',
    'Buy flowers.'
  ]);

  const [formValue, setFormValue] = useState('test');

  return(
    <div 
      className="ui raised very padded text container segment"
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}
    >
      <h1>TODO App</h1>
      <NoteForm 
        formValue={formValue} 
        setFormValue={setFormValue} 
        setMessages={setMessages}
        messages={messages}
      />
      <NoteList 
        messages={messages} 
        setMessages={setMessages} 
      />
    </div>
  );
}

export default App;