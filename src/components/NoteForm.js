import React from 'react';
import './NoteForm.css';

const NoteForm = ({formValue, setFormValue, setMessages, messages, editMode, setEditMode, message, setMessage}) => {

  const onFormSubmit = (event) => {
    if (editMode !== true) {
      event.preventDefault();
      setMessages([...messages, formValue]);
      setFormValue('');
    } else {
      event.preventDefault();
      const index = messages.findIndex(el => el === message);
      let newMessages = [...messages];
      newMessages[index] = formValue;
      setMessages(newMessages);
      setFormValue('');
      setEditMode(false);
    }
  };

  const buttonText = editMode ? 'Update' : 'Add';

  return(
    <form onSubmit={onFormSubmit}>
      <div className="form-input-container ui input">
        <input
          required
          type="text"
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value)
          }}
        />
        <button 
          type="submit" 
          className="ui primary button"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default NoteForm;