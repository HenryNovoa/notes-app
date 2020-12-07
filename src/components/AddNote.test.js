import { shallow, mount } from 'enzyme'
import React, { useContext, useReducer } from 'react'
import { AddNote } from './AddNote'
import { NotesContext } from '../context'
import { notesReducer } from '../reducer'
import toJson from 'enzyme-to-json'



describe('AddNote Component', ()=> {
    it('expect to render AddNote component', ()=> {
       const wrapper = mount(<NotesContext.Provider value={{state: {
        currentNote: null,
        notes: [
            {id: 1, text: 'Do small assestment'},
            {id: 2, text: 'Write Tests'}
        ]
    }}}>
           <AddNote/>
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
        expect(toJson(res)).toMatchSnapshot();
      });
    })

    it('expects to handle change correctly', ()=> {
        const wrapper = mount(<NotesContext.Provider value={{state: {
         currentNote: null,
         notes: [
             {id: 1, text: 'Do small assestment'},
             {id: 2, text: 'Write Tests'}
         ]
     }}}>
            <AddNote/>
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
         console.log({wrapper})
         console.log({res})
         wrapper.find('input').simulate('change', {target: {
             value: 'test'
         }})
         expect(wrapper.find('input').prop('value')).toEqual('test')
       });
     })
   
})