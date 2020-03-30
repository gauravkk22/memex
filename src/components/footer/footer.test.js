import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './footer'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    addTodo: jest.fn()
  }

  const enzymeWrapper = shallow(<Footer props={props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Footer', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('footer').hasClass('meme-footer')).toBe(true)

      expect(enzymeWrapper.find('h2').text()).toBe('MemeX footer!')
    })
  })
})
