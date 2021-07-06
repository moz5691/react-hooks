import React, {useEffect, useReducer} from "react";

import notesReducer from './reducers/notes';
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import NotesContext from "./context/notesContext";

// function App(props) {

//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState("sample")


//   return (
//     <div>
//       <p>The current {text || "count"}  is {count}</p>
//       <button onClick={()=>setCount(count+1)}> +1</button>
//       <button onClick={()=>setCount(count-1)}> -1</button>
//       <button onClick={()=>setCount(props.count)}>Reset</button>
//       <input value={text} onChange={(e)=>setText(e.target.value)}/>
//     </div>
//   );
// }

// App.defaultProps = {
//   count: 0
// } 


const App = () => {

  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, [])
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")

  useEffect(()=>{
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({type: 'POPULATE_NOTES', notes})
      // setNotes(notesData);
    };
  }, []);

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))     
  }, [notes])

  return (
    <NotesContext.Provider value={{notes, dispatch}}>
      <h1>Notes</h1>
      <NoteList/>
      <AddNoteForm/>
    </NotesContext.Provider>
  )
}

export {App as default}
