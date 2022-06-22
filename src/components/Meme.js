import memesData from '../memesData'



export default function Meme() {
  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    // or we could destructure it like   const {url} = memesArray[randomNumber]
    console.log(url);
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
    </>
  );
}
