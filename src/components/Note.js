import { useContext } from 'react'
import { NotesContext } from '../context'

export function Note({ note }) {
    const { dispatch } = useContext(NotesContext)

    return(
        <div id={note.id} className='note'>
            <p>{note.text}</p>
            <div className='btn-container'>
                <button onClick={()=> dispatch({ type: 'SET_CURRENT_NOTE', payload: note})} className='edit'>Edit</button>
            </div>
        </div>
    )
}