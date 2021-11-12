import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  // The difference 'message' and 'messages' in this app is this:
  // 'message' in NoteForm is used to help with keeping track of the
  // original value, so we can update the messages array that holds
  // all the values.  Just know that the 'message' (singular) state 
  // is really only used to help with Update functionality of the TODO app.
  
  // Also note: in the NoteList component there is some poor naming with the 
  // map that uses messages as the argument. 
  
  // Naming is hard and this is my first
  // go through in a fully functioning app on my own.
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