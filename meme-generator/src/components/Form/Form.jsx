import "../Form/Form.scss";

function Form({ topText, bottomText, handleChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* // Input field to get First
          text */}
      <input
        placeholder="Enter Text"
        type="text"
        value={topText}
        name="topText"
        onChange={handleChange}
      />
      {/* // Input field to get Lsst
          text */}
      <input
        placeholder="Enter Text"
        type="text"
        value={bottomText}
        name="bottomText"
        onChange={handleChange}
      />
      {/* // Button to generate meme */}
      <button className="form__button">Generate</button>
    </form>
  );
}

export default Form;
