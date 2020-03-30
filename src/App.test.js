import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import App from './App'

const initialState = {}

const mockStore = configureStore()
const store = mockStore(initialState)
describe('App component', () => {
  it('Its a start', () => {
    const wrapper = shallow(<App store={store} />)
    const hasMemeHeader = wrapper.find('div').hasClass('app-container')

    expect(hasMemeHeader).toBe(true)
  })
})
