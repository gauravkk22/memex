import React, { useState, useEffect } from 'react'
import {BASE_SEARCH_URL_WITH_QUERY, NO_DATA_AVAILABLE} from '../../constants/constants'
import MemeImage from "./../../components/memeImage"

function Home(props){
    const [search, setSearch] = useState("")
    const [memeText, setMemeText] = useState("")
    const [memeTextPosition, setMemeTextPosition] = useState("")
    const [memeMainImg, setMemeMainImg] = useState("")
    const [savedMemes, setSavedMemes] = useState(localStorage.getItem('savedMemes') || '')
    const [errorOccured, setErrorOccured] = useState({
        isError: false,
        errorStatus: 0,
        errorMsg: ""
    })
    const [isMainImgLoading, setIsMainImgLoading]= useState(true);
    // const memeStorage = window.localStorage;

    useEffect(() => {
        localStorage.setItem('savedMemes',savedMemes);
    }, [savedMemes])

    function onHandleChange(e, callback){
        callback(e.target.value)
    }

    const onHandleSearch = () => {
        if(search !== ""){

            fetch(BASE_SEARCH_URL_WITH_QUERY+search)
            .then(res => res.json())
            .then((data) => {
                const memeImages = data.images
                // const randomNumber = (Math.floor(Math.random() *(memeImages.length)))
                if(memeImages.length > 0){
                    setMemeMainImg(memeImages[0]);
                }else if(memeImages === 0){
                    setErrorOccured({
                        isError: true,
                        errorStatus: 200,
                        errorMsg: NO_DATA_AVAILABLE + "with <h4>" + search +"</h4>"
                    })
                }
            })
            .catch(console.log)
        }
    }

    const onHandleSave = () =>{
        if(memeMainImg !== "" && memeText !=="" && memeTextPosition!==""){
            debugger;
            if(savedMemes === ""){
                setSavedMemes(JSON.stringify([{...memeMainImg, memeText, memeTextPosition}]))
            }else{
                setSavedMemes(JSON.stringify([...JSON.parse(savedMemes),{...memeMainImg, memeText, memeTextPosition}]))
            }
            console.log(savedMemes);
        }
    }

    return (
        <main className="main-container">
            <div>
                <input name="search" type="text" value={search} onChange={e => onHandleChange(e, setSearch)} placeholder="Search image" />
                <button onClick={onHandleSearch}>Search</button>
            </div>
            <section>
                <div className="img-view">
                    {
                    memeMainImg &&

                        <MemeImage classProp="main-img" 
                            imgSrcProp={!isMainImgLoading ? memeMainImg.url:"./loading.gif"} 
                            onLoadProp={() => setIsMainImgLoading(false)} 
                            memeTextPositionProp={memeTextPosition}
                            memeTextProp={memeText} />
                    }
                    {memeMainImg==="" &&
                        <>
                            <div>{NO_DATA_AVAILABLE}</div>
                        </>
                    }
                </div>
                <aside>
                    <h3>Saved Memes</h3>
                    {savedMemes.length > 0 &&
                     JSON.parse(savedMemes).map((meme, index)=>{
                        return <div className="saved-memes-card" key={meme.id+index}>
                            <MemeImage classProp="saved-meme" 
                            imgSrcProp={meme.url} 
                            onLoadProp={() => {}} 
                            memeTextPositionProp={meme.memeTextPosition}
                            memeTextProp={meme.memeText} />
                        </div>
                     })
                    }
                </aside>
            </section>
            <div>
                <textarea name="memeText" value={memeText} onChange ={e => onHandleChange(e, setMemeText)} cols="40" rows="10" placeholder="Please Enter Meme text here!" />
                <aside>
                    <label>
                        <input name="memeTextPosition" type="radio" onChange={e => onHandleChange(e, setMemeTextPosition)} value="top" /> Top
                    </label>
                    <label>
                        <input name="memeTextPosition" type="radio" onChange={e => onHandleChange(e, setMemeTextPosition)} value="center" /> Center
                    </label>
                    <label>
                        <input name="memeTextPosition" type="radio" onChange={e => onHandleChange(e, setMemeTextPosition)} value="bottom" /> Bottom
                    </label>
                </aside>
                <button onClick={onHandleSave} >Save</button>
            </div>
        </main>
    )
}

export default Home