import { Types } from '../../constants/constants'

export default (
  state = {
    memeImgList: [],
    saveMemeImgsDetails: [],
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case Types.MEME_IMAGE_LIST:
      return {
        ...state,
        memeImgList: action.payload,
        isLoading: false,
        isError: false
      }
    case Types.MEME_IMAGE_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case Types.MEME_IMAGE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case Types.SAVE_MEME_DETAILS:
      return {
        ...state,
        saveMemeImgsDetails: action.payload,
        isLoading: false,
        isError: false
      }
    default:
      return state
  }
}
