import React, { useContext } from "react";

import Context from "../../helpers/context";

export default function TweetShareButton() {
  const { color, tweetIntent, shareTweet, FontAwesomeIcon } = useContext(
    Context
  );

  return (
    <a
      href={tweetIntent}
      target="_blank"
      id="tweet-quote"
      onClick={shareTweet}
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x" />
    </a>
  );
}
