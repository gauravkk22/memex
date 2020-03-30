import React from 'react'

function MemeImage(props) {
  const {
    classProp,
    imgSrcProp,
    onLoadProp,
    memeTextPositionProp,
    memeTextProp,
    isImgLoading
  } = props

  return (
    <>
      <img className={classProp} src={imgSrcProp} alt="Loading" onLoad={onLoadProp} />
      <div
        className={`${
          memeTextPositionProp ? `flex-row--align-v-${memeTextPositionProp} ` : ``
        }meme-text`}
      >
        {!isImgLoading ? memeTextProp : ''}
      </div>
    </>
  )
}

export default MemeImage
