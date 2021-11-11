import React from 'react';

const NoteForm = () => {
  return(
    <form>
      <div className="ui input">
        <input type="text" />
        <button className="ui primary button">Submit</button>
      </div>
    </form>
  );
}

export default NoteForm;