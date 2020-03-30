import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {BASE_SEARCH_URL_WITH_QUERY, NO_DATA_AVAILABLE, ERROR_MESSAGE, START_GENERATING_MEMES, LOADING_IMAGE_BASE64} from '../../constants/constants'
import MemeImage from "./../../components/memeImage"
import { fetchMemeImgList, saveMemeDetails } from './actionCreator'
import './home.scss'

function Home(props){
    console.log(props)
    const [search, setSearch] = useState("")
    const [memeText, setMemeText] = useState("")
    const [memeTextPosition, setMemeTextPosition] = useState("")
    const [memeMainImg, setMemeMainImg] = useState("")
    const [savedMemes, setSavedMemes] = useState([])
    const {
        memeImgReducer : { memeImgList, saveMemeImgsDetails, isLoading, isError}
    } = props
    const [isMainImgLoading, setIsMainImgLoading]= useState(true);

    useEffect(() => {
        setSavedMemes(saveMemeImgsDetails)
    }, [saveMemeImgsDetails])

    function onHandleChange(e, callback){
        callback(e.target.value)
        setMemeMainImg("")
    }

    function onHandleSearch(e) {
        e.preventDefault()
        if(search !== ""){
            setMemeMainImg("")
            setIsMainImgLoading(true)
            props.dispatch(fetchMemeImgList(BASE_SEARCH_URL_WITH_QUERY+search)).then(response =>{
                const memeImgs = response.images
                if(memeImgs.length > 0){
                    setMemeMainImg(() => {
                        return memeImgs[Math.floor(Math.random() * memeImgs.length)] 
                    })
                }else{
                    setMemeMainImg("NO_DATA")
                }
            }).catch(error =>{
                setIsMainImgLoading(false)
                console.log(error)
            })
        }
    }

    const onHandleSave = () =>{
        if(memeMainImg !== "" && memeText !=="" && memeTextPosition!==""){
            props.dispatch(saveMemeDetails([...saveMemeImgsDetails, {...memeMainImg, memeText, memeTextPosition}]))
        }
    }

    const onHandleReset = () => {
        setSearch("")
        setMemeMainImg("")
        setMemeText("")
        setMemeTextPosition("")
    }

    return (
        <main className="main-container ">
            <form className="flex-row" onSubmit={onHandleSearch}>
                <input className="flex-col-xs-9 flex-col-sm-9 flex-col-md-9 flex-col-lg-9 meme-input-text" name="search" type="text" 
                value={search} onChange={e => onHandleChange(e, setSearch)} placeholder="Search image" />
                <div className="display-flex flex-col-lg-3 flex-col-md-3 flex-col-sm-3 flex-col-xs-3 padding-top-0 padding-bottom-0">
                    <button className="meme-btn" type="submit" >Search</button>
                </div>
            </form>
            <section className="flex-row left-side">
                <div className="img-view flex-col-lg-9 flex-col-md-9 flex-col-sm-12 flex-col-xs-12 flex-row">
                    <div className="flex-col-xs-12 flex-row--align-h-center flex-row--align-v-center meme-main flex-row">
                        {
                        memeMainImg && memeMainImg !== "NO_DATA" &&

                            <MemeImage classProp="main-img" 
                                imgSrcProp={!isMainImgLoading ? memeMainImg.url: "data:image/gif;base64,"+LOADING_IMAGE_BASE64} 
                                onLoadProp={() => setIsMainImgLoading(false)} 
                                memeTextPositionProp={memeTextPosition}
                                memeTextProp={memeText}
                                isImgLoading={isMainImgLoading} />
                        }
                        {search==="" && memeMainImg==="" &&
                            <>
                                <h3 className="no-data">{START_GENERATING_MEMES}</h3>
                            </>
                        }
                        {memeMainImg === "NO_DATA" &&
                        <>
                            <div>{NO_DATA_AVAILABLE} for <h4 className="disp-inline">{search}</h4> available</div>
                        </>

                        }
                        {isError &&
                            <>
                                <div className="no-data">{ERROR_MESSAGE}</div>
                            </>
                        }
                    </div>

                    <textarea className="flex-col-xs-12 meme-input-text meme-display-text" 
                        name="memeText" 
                        value={memeText} 
                        onChange ={e => onHandleChange(e, setMemeText)} 
                        placeholder="Please Enter Meme text here!" />
                </div>
                <aside className="flex-col-lg-3 flex-col-md-3 flex-col-sm-12 flex-col-xs-12 right-side">
                    <div className="saved-memes-list flex-row">
                        <h3 className="flex-col-xs-12 saved-memes-head">Saved Memes</h3>
                        <div className="scroll-y flex-row ">
                            {savedMemes.length > 0 &&
                            savedMemes.map((meme, index)=>{
                                return <div className="saved-memes-card flex-col-xs-6 flex-row--align-h-center flex-row--align-v-center" key={meme.id+index}>
                                    <MemeImage classProp="saved-meme" 
                                    imgSrcProp={meme.url} 
                                    onLoadProp={() => {}} 
                                    memeTextPositionProp={meme.memeTextPosition}
                                    memeTextProp={meme.memeText} />
                                </div>
                            })
                            }{savedMemes.length === 0 &&
                                <div className="no-data">No Memes Saved.</div>
                            }
                        </div>
                    </div>

                    <div>
                        <div>Position :</div>
                        <label>
                            <input name="memeTextPosition" 
                            checked={memeTextPosition === "top"} 
                            type="radio" 
                            onChange={e => onHandleChange(e, setMemeTextPosition)} 
                            value="top" /> Top
                        </label>
                        <label>
                            <input name="memeTextPosition" 
                            checked={memeTextPosition === "center"} 
                            type="radio" 
                            onChange={e => onHandleChange(e, setMemeTextPosition)} 
                            value="center" /> Center
                        </label>
                        <label>
                            <input name="memeTextPosition" 
                            checked={memeTextPosition === "bottom"} 
                            type="radio" 
                            onChange={e => onHandleChange(e, setMemeTextPosition)} 
                            value="bottom" /> Bottom
                        </label>
                    </div>
                    <div className="flex-row">
                        <button className="flex-col-sm-5 flex-col-xs-12 meme-btn" onClick={onHandleSave} >Save</button>
                        <button className="flex-col-sm-5 flex-col-xs-12 meme-btn meme-btn--default" onClick={onHandleReset} >Reset</button>
                    </div>
                </aside>
            </section>
            {isLoading && 
                <div className="back-drop flex-row flex-row--align-h-center flex-row--align-v-center">
                    <div className="loader"></div>
                </div>
            }
        </main>
    )
}

function mapStateToProps(state) {
    const { memeImgReducer } = state
    return { memeImgReducer }
}

export default connect(mapStateToProps)(Home)