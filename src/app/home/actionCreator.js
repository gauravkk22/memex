import 'cross-fetch/polyfill'
import { getMemeImgList, loadingMeme, failureMeme, saveMemeDetailsAction } from './actions'

export function fetchMemeImgList(url) {
  return (dispatch) => {
    const promVal = new Promise((resolve, reject) => {
      dispatch(loadingMeme())
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data)
          dispatch(getMemeImgList(data))
        })
        .catch((err) => {
          reject(err)
          dispatch(failureMeme())
        })
    })
    return promVal
  }
}

export function saveMemeDetails(data) {
  return (dispatch) => {
    dispatch(saveMemeDetailsAction(data))
  }
}
