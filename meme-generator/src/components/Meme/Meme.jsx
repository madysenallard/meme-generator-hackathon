import "../Meme/Meme.scss";

function Meme({ randomImg, topText, bottomText }) {
  return (
    <div className="meme">
      <div className="meme__img">
        {randomImg === "" ? null : (
          <img className="meme__pic" src={randomImg} alt="meme" />
        )}
        {randomImg === "" ? null : <h2 className="meme__top">{topText}</h2>}
        {randomImg === "" ? null : (
          <h2 className="meme__bottom">{bottomText}</h2>
        )}
      </div>
    </div>
  );
}

export default Meme;
