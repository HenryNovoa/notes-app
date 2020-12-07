import React from 'react'

export const NotesContext = React.createContext({
    currentNote: null,
    notes: [
        {id: 1, text: 'Do small assestment'},
        {id: 2, text: 'Go grocery shopping'}
    ]
})

