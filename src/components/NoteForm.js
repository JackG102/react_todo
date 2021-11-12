import React from 'react';
import './NoteForm.css';

const NoteForm = ({formValue, setFormValue, setMessages, messages}) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, formValue]);
    setFormValue('');
    console.log(formValue);
  };

  return(
    <form onSubmit={onFormSubmit}>
      <div className="form-input-container ui input">
        <input type="text" 
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value)
            }}
        />
        <button 
          type="submit" 
          className="ui primary button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default NoteForm;