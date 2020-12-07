import { shallow, mount } from 'enzyme'
import React, { useContext, useReducer } from 'react'
import { NoteList } from './NoteList'
import { NotesContext } from '../context'
import { notesReducer } from '../reducer'
import toJson from 'enzyme-to-json'



describe('NoteList Component', ()=> {
    it('expect to render NoteList component', ()=> {
       const wrapper = mount(<NotesContext.Provider value={{state: {
        currentNote: null,
        notes: [
            {id: 1, text: 'Do small assestment'},
            {id: 2, text: 'Write Tests'}
        ]
    }}}>
           <NoteList/>
       </NotesContext.Provider>)

    const promise = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        wrapper.update()
        resolve(wrapper)
      }, 3000)
    })
  }
   

    return promise().then((res) => {
        expect(toJson(res)).toMatchSnapshot()
      })
    })
   
})
