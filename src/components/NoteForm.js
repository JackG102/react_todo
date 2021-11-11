import React from 'react';
import './NoteForm.css';

const NoteForm = () => {
  return(
    <form>
      <div className="form-input-container ui input">
        <input type="text" />
        <button className="ui primary button">Submit</button>
      </div>
    </form>
  );
}

export default NoteForm;