import memesData from '../memesData'
import React from 'react';



export default function Meme() {

  const [memeImage,setMemeImage] = React.useState('');

  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    // or we could destructure it like   const {url} = memesArray[randomNumber]
    setMemeImage(url);
  }
  
  


  return (
    <>
      <div className="form">
        <div className="form--inputs_wrap">
          <input className="form--input" type="text" placeholder="Top text"/>
          <input className="form--input" type="text" placeholder="Bottom text"/>
        </div>
        <button className="form--button" onClick={getMemeImage} >Get a new meme image  🖼</button>
       
      </div>
      <img className="meme-image" src={memeImage} alt='meme image'/>
    </>
  );
}
