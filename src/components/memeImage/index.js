import React from 'react'

function MemeImage(props){
    return (
        <>
            <img className={props.classProp} src={props.imgSrcProp} alt="Loading" onLoad={props.onLoadProp}/>
            <div className={props.memeTextPositionProp+`-text meme-text`}>{props.memeTextProp}</div>
        </>
    )
}

export default MemeImage