import { useContext } from 'react'
import { NotesContext } from '../context'
import { Note } from './Note'

export function NoteList() {
    const { state } = useContext(NotesContext)

    return (
        <div className='notes-container'>
            {state.notes.map((note, i) => {
                return <Note  key={i} note={note} />
            })}
        </div>
    )
}