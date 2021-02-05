import  React from 'react'
import { shallow, mount } from 'enzyme'
import { Note } from './Note'
import { NotesContext } from '../context'
import { shallowToJson } from 'enzyme-to-json'



describe('Note Component', ()=> {
    it('expect to render Note component', ()=> {
        const mockNote = {
            id: 1,
            text: 'Mock text'
        }
        const noteComponent = shallow(<Note note={mockNote} />)
        expect(shallowToJson(noteComponent)).toMatchSnapshot()
    })
    it('expect dispatch function to have been called on click', ()=> {
        const mockFunction = jest.fn()
        const mockNote = {
            id: 1,
            text: 'Mock text'
        }
        const wrapper = mount(<NotesContext.Provider value={{dispatch: mockFunction, state: {
            currentNote: null,
            notes: [
                {id: 1, text: 'Do small assestment'},
                {id: 2, text: 'Write Tests'}
            ]
        }}}>
               <Note note={mockNote}/>
           </NotesContext.Provider>)
        wrapper.find('button').simulate('click')
        expect(mockFunction).toHaveBeenCalled()
    })
})
