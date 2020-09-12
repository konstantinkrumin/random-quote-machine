import React, { useContext } from "react";

import Context from "../helpers/context";

import QuoteBox from "./quoteBox";

export default function MainContainer() {
  const { color } = useContext(Context);

  return (
    <div id="main-container" style={{ backgroundColor: color }}>
      <QuoteBox />
    </div>
  );
}
