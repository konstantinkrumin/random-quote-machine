import React, { useContext } from "react";

import Context from "../../helpers/context";

export default function QuoteText() {
  const { currentQuote, FontAwesomeIcon } = useContext(Context);

  return (
    <p id="text">
      <FontAwesomeIcon icon={["fas", "quote-left"]} /> {currentQuote}
    </p>
  );
}
