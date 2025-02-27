import "../Form/Form.scss";

function Form({ topText, bottomText, handleChange, handleSubmit }) {
  return (
    <div className="form">
      <form className="form__fields" onSubmit={handleSubmit}>
        <p className="form__field-title">Insert Top Text</p>
        <input
          className="form__input"
          placeholder="Enter Text"
          type="text"
          value={topText}
          name="topText"
          onChange={handleChange}
        />
        <p className="form__field-title">Insert Bottom Text</p>
        <input
          className="form__input"
          placeholder="Enter Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        {/* // Button to generate meme */}
        <button className="form__button">Generate</button>
      </form>
    </div>
  );
}

export default Form;
