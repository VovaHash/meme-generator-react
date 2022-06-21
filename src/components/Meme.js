export default function Meme() {
  return (
    <>
      <form className="form">
        <div className="form--inputs_wrap">
          <input className="form--input" type="text" placeholder="Top text"/>
          <input className="form--input" type="text" placeholder="Bottom text"/>
        </div>
        <button className="form--button">Get a new meme image  🖼</button>
      </form>
    </>
  );
}
