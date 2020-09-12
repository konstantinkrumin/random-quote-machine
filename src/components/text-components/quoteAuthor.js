import React, { useContext } from "react";

import Context from "../../helpers/context";

export default function QuoteAuthor() {
  const { currentQuoteAuthor } = useContext(Context);

  return <p id="author">- {currentQuoteAuthor}</p>;
}
