import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./helpers/fontAwesome";
import "./styles/main.scss";

import Context from "./helpers/context";
import { quotesAndArr } from "./text/text";

import MainContainer from "./components/mainContainer";

const randomColor = require("randomcolor");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: quotesAndArr,
      tweetIntent: "https://twitter.com/intent/tweet",
      color: "",
      currentQuotePos: 0,
      currentQuote: "",
      currentQuoteAuthor: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shareTweet = this.shareTweet.bind(this);
  }

  componentDidMount() {
    const randNum = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      color: randomColor(),
      currentQuotePos: randNum,
      currentQuote: this.state.quotes[randNum].quote,
      currentQuoteAuthor: this.state.quotes[randNum].author
    });
  }

  handleSubmit() {
    if (this.state.currentQuotePos < this.state.quotes.length - 1) {
      this.setState((prevState) => {
        return {
          color: randomColor(),
          currentQuotePos: prevState.currentQuotePos + 1,
          currentQuote: this.state.quotes[prevState.currentQuotePos + 1].quote,
          currentQuoteAuthor: this.state.quotes[prevState.currentQuotePos + 1]
            .author
        };
      });
    } else {
      this.setState({
        color: randomColor(),
        currentQuotePos: 0,
        currentQuote: this.state.quotes[0].quote,
        currentQuoteAuthor: this.state.quotes[0].author
      });
    }
  }

  shareTweet() {
    this.setState({
      tweetIntent: `https://twitter.com/intent/tweet?text="${this.state.currentQuote}" - ${this.state.currentQuoteAuthor}`
    });
  }

  render() {
    let color = this.state.color;
    let currentQuote = this.state.currentQuote;
    let currentQuoteAuthor = this.state.currentQuoteAuthor;
    let tweetIntent = this.state.tweetIntent;
    let handleSubmit = this.handleSubmit;
    let shareTweet = this.shareTweet;

    return (
      <Context.Provider
        value={{
          FontAwesomeIcon,
          color,
          currentQuote,
          currentQuoteAuthor,
          tweetIntent,
          handleSubmit,
          shareTweet
        }}
      >
        <MainContainer />
      </Context.Provider>
    );
  }
}
