import React from 'react';

const Notes = ({ notes, removeNote }) => {
  return (
    <div className="note-list">
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => removeNote(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
