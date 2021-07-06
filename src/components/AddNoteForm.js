import React, {useContext, useState} from 'react';
import NotesContext from '../context/notesContext';

const AddNoteForm = () => {

  const {dispatch} = useContext(NotesContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');



  const addNote = (e) => {
    e.preventDefault();
    // setNotes([
    //   ...notes, {title, body}
    // ]);
    dispatch({type: 'ADD_NOTE', note: {title, body}})
    setTitle("");
    setBody("");
  }


  return (
    <div>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button>add note</button>
      </form>
    </div>

  );
}

export {AddNoteForm as default};