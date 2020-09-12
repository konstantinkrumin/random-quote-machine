import React, { useContext } from "react";

import Context from "../../helpers/context";

export default function NewQuoteButton() {
  const { color, handleSubmit } = useContext(Context);

  return (
    <a
      type="button"
      id="new-quote"
      onClick={handleSubmit}
      style={{ backgroundColor: color }}
    >
      New Quote
    </a>
  );
}
