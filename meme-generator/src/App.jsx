// Filename - App.js
import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Description from "./components/Header/Description/Description.jsx";
import Form from "./components/Form/Form.jsx";
import Meme from "./components/Meme/Meme.jsx";

class App extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    memeTopText: "",
    memeBottomText: "",
    allMemeImgs: [],
    randomImg: "",
  };

  // componentDidMount() method to fetch
  // images from the API
  componentDidMount() {
    // Fetching data from the API
    fetch("https://api.imgflip.com/get_memes")
      // Converting the promise received into JSON
      .then((response) => response.json())
      .then((content) =>
        // Updating state variables
        this.setState({
          allMemeImgs: content.data.memes,
        })
      );
  }

  // Method to change the value of input fields
  handleChange = (event) => {
    // Destructuring the event. target object
    const { name, value } = event.target;

    // Updating the state variable
    this.setState({
      [name]: value,
    });
  };

  // Method to submit from and create meme
  handleSubmit = (event) => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const random =
      allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({
      randomImg: random,
      // memeTopText: this.state.topText,
      // memeBottomText: this.state.bottomText,
      // topText: "",
      // bottomText: "",
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Description />
        <div>
          <Form
            topText={this.state.topText}
            bottomText={this.state.bottomText}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Meme
            randomImg={this.state.randomImg}
            topText={this.state.topText}
            bottomText={this.state.bottomText}
          />
        </div>
      </div>
    );
  }
}

export default App;
