import React from "react";

import TextContainer from "./text-components/textContainer";
import ButtonsContainer from "./button-components/buttonsContainer";

export default function QuoteBox() {
  return (
    <div id="quote-box">
      <TextContainer />
      <ButtonsContainer />
    </div>
  );
}
