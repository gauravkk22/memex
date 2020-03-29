import { Types } from './../../constants/constants'

export const getMemeImgList = URL => ({
    type: Types.MEME_IMAGE_LIST,
    payload: URL
});

export const loadingMeme = () => ({
    type: Types.MEME_IMAGE_LIST_LOADING
});

export const failureMeme = () => ({
    type: Types.MEME_IMAGE_LIST_FAILURE
});

export const saveMemeDetailsAction = data =>({
    type: Types.SAVE_MEME_DETAILS,
    payload: data
});