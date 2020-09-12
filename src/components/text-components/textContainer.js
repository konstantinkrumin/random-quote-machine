import React, { useContext } from "react";

import Context from "../../helpers/context";

import QuoteText from "./quoteText";
import QuoteAuthor from "./quoteAuthor";

export default function TextContainer() {
  const { color } = useContext(Context);

  return (
    <div id="text-container" style={{ color: color }}>
      <QuoteText />
      <QuoteAuthor />
    </div>
  );
}
