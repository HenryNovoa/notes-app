import { shallow } from 'enzyme'
import React from 'react'
import { Nav } from './Nav'
import { shallowToJson } from 'enzyme-to-json'


describe('Nav Component', ()=> {
    it('expect to render Nav component', ()=> {
        const navComponent = shallow(<Nav />)
        expect(shallowToJson(navComponent)).toMatchSnapshot()
    })
    
})
