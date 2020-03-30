import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'

import { Types as types } from '../../../constants/constants'
import { fetchMemeImgList } from '../actionCreator'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async fetch actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates MEME_IMG_LIST when fetching images has been done', () => {
    fetchMock.getOnce('Url', {
      body: { images: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.MEME_IMAGE_LIST_LOADING },
      { type: types.MEME_IMAGE_LIST, payload: { images: ['do something'] } }
    ]
    const store = mockStore({ memeImgReducer: {} })

    return store.dispatch(fetchMemeImgList('Url')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('creates MEME_IMG_LIST catching error has been done', () => {
    fetchMock.getOnce('', {
      body: { error: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.MEME_IMAGE_LIST_FAILURE, payload: { error: ['do something'] } }
    ]
    const store = mockStore({ memeImgReducer: {} })

    return store.dispatch(fetchMemeImgList('')).catch(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
