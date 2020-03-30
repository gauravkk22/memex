import reducer from '../reducer'

describe('memes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      memeImgList: [],
      saveMemeImgsDetails: [],
      isLoading: false,
      isError: false
    })
  })

  it('should handle MEME_IMAGE_LIST', () => {
    expect(
      reducer(
        {},
        {
          isError: false,
          isLoading: false,
          saveMemeImgsDetails: [],
          memeImgList: []
        }
      )
    ).toEqual({})

    expect(
      reducer(
        {
          memeImgList: ['images'],
          isLoading: false,
          isError: false
        },
        {
          memeImgList: ['images2'],
          isLoading: false,
          isError: false
        }
      )
    ).toEqual({
      memeImgList: ['images'],
      isLoading: false,
      isError: false
    })
  })

  it('should throw error from loading', () => {
    expect(
      reducer(
        {
          isError: true,
          isLoading: false,
          saveMemeImgsDetails: [],
          memeImgList: []
        },
        {
          isError: false,
          isLoading: true,
          saveMemeImgsDetails: [],
          memeImgList: []
        }
      )
    ).toEqual({
      isError: true,
      isLoading: false,
      saveMemeImgsDetails: [],
      memeImgList: []
    })
  })

  it('should show loading', () => {
    expect(
      reducer(
        {
          isError: false,
          isLoading: true,
          saveMemeImgsDetails: [],
          memeImgList: []
        },
        {
          isError: true,
          isLoading: false,
          saveMemeImgsDetails: [],
          memeImgList: []
        }
      )
    ).toEqual({
      isError: false,
      isLoading: true,
      saveMemeImgsDetails: [],
      memeImgList: []
    })
  })
})
