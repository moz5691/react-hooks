import React, {useContext} from 'react';
import NotesContext from '../context/notesContext';

const Note = ({note}) => {

  const {dispatch} = useContext(NotesContext);

  // const removeNote = (title) => {
  //   dispatch({type: 'REMOVE_NOTE', title})
  //   // setNotes(notes.filter((note) => note.title !== title))
  // }

  return (
    <>
      <h3>{note.title}</h3>
      <h4>{note.body}</h4>
      <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
    </>
  )
}

export {Note as default}