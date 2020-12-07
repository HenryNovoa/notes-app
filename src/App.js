import { useContext, useReducer } from 'react'
import { NotesContext } from './context'
import { notesReducer } from './reducer'
import { Nav } from './components/Nav'
import { AddNote } from './components/AddNote'
import { NoteList } from './components/NoteList'
import { EditNote } from './components/EditNote'


function App() {
  const initialState = useContext(NotesContext)
  const [state, dispatch ] = useReducer(notesReducer, initialState)
  console.log(state)
  return (
    <NotesContext.Provider value={{state, dispatch}}>
        <Nav/>
        {state.currentNote === null ? (
        <>
          <AddNote/>
          <NoteList />
        </>
        )
        : <EditNote></EditNote> }
    </NotesContext.Provider>
  )
}

export default App;
