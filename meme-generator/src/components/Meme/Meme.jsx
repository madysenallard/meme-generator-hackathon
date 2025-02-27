function Meme({ randomImg, topText, bottomText }) {
  return (
    <div className="meme">
      {randomImg === "" ? null : <img src={randomImg} alt="meme" />}
      {randomImg === "" ? null : <h2 className="top">{topText}</h2>}
      {randomImg === "" ? null : <h2 className="bottom">{bottomText}</h2>}
    </div>
  );
}

export default Meme;
