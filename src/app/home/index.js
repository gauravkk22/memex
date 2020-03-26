import React, { useState } from 'react'
import {BASE_SEARCH_URL_WITH_QUERY} from '../../constants/constants'

function Home(props){
    const [search, setSearch] = useState("")
    const [memeText, setMemeText] = useState("")
    const [memeTextPosition, setMemeTextPosition] = useState("")
    const [memeMainImg, setMemeMainImg] = useState("")

    function onHandleChange(e, callback){
        callback(e.target.value)
    }

    const onHandleSearch = () => {
        if(search !== ""){
            fetch(BASE_SEARCH_URL_WITH_QUERY+search)
            .then(res => res.json())
            .then((data) => {
                const memeImages = data.images

                setMemeMainImg(memeImages[0]);
            })
            .catch(console.log)
        }
    }

    return (
        <main className="main-container">
            <div>
                <input name="search" type="text" value={search} onChange={e => onHandleChange(e, setSearch)} placeholder="Search image" />
                <button onClick={onHandleSearch}>Search</button>
            </div>
            <section>
                <div>
                    <h2>Img: {search}</h2>
                    <img src={memeMainImg.url} alt={search}/>
                    <h4 className={memeTextPosition}>{memeText} {memeTextPosition}</h4>
                </div>
                <aside>
                    <img src="" alt={search}/>
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
                <button onClick="" >Save</button>
            </div>
        </main>
    )
}

export default Home