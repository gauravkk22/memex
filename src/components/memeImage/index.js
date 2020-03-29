import React from 'react'

function MemeImage(props){
    return (
        <>
            <img className={props.classProp} 
                src={props.imgSrcProp} 
                alt="Loading" 
                onLoad={props.onLoadProp}/>
            <div className={ `${props.memeTextPositionProp ? `flex-row--align-v-${props.memeTextPositionProp} ` :``}meme-text`}>
                {!props.isImgLoading ? props.memeTextProp : props.isImgLoading}
            </div>
        </>
    )
}

export default MemeImage