import { useState, useContext, useRef, useEffect } from 'react'
import { NotesContext } from '../context'

export function AddNote() {
    const { dispatch } = useContext(NotesContext)
    const [ value, setValue ] = useState('')

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

        dispatch({type: 'ADD_NOTE', payload: value})
        setValue('')
    }
    return (
        <div className='note-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={ref} onChange={handleChange} value={value}/>
                <button>Add Note</button>
            </form>
        </div>
    )
}