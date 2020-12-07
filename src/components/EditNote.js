import { useState, useContext, useRef, useEffect } from 'react'
import { NotesContext } from '../context'

export function EditNote() {
    const { state, dispatch } = useContext(NotesContext)
    const [ value, setValue ] = useState(state.currentNote.text)

    let ref = useRef()

    useEffect(()=> {
        ref.current.focus();
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(value.trim === '') return alert('Cannot add a blank note')

        dispatch({type: 'UPDATE_NOTE', payload: value})
        setValue('')
    }
    return (
        <div className='note-form'>
            <form onSubmit={handleSubmit}>
                <textarea cols='10' rows='10' type='text' ref={ref} onChange={handleChange} value={value}/>
                <button>Update Note</button>
            </form>
        </div>
    )
}