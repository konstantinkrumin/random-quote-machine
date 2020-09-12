import React from "react";

import NewQuoteButton from "./newQuoteButton";
import TweetShareButton from "./tweetShareButton";

export default function ButtonsContainer() {
  return (
    <div id="buttons-container">
      <NewQuoteButton />
      <TweetShareButton />
    </div>
  );
}
