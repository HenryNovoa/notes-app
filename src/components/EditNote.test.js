import { shallow, mount } from 'enzyme'
import React, { useContext, useReducer } from 'react'
import { EditNote } from './EditNote'
import { NotesContext } from '../context'
import { notesReducer } from '../reducer'
import toJson from 'enzyme-to-json'



describe('EditNote Component', ()=> {
    it('expect to render EditNote component', ()=> {
       const wrapper = mount(<NotesContext.Provider value={{state: {
        currentNote: {id: 2, text: 'Write Tests'},
        notes: [
            {id: 1, text: 'Do small assestment'},
            {id: 2, text: 'Write Tests'}
        ]
    }}}>
           <EditNote/>
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