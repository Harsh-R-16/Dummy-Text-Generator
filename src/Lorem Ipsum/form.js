import React from "react";

export default function Form({ submit, copy }) {
  return (
    <form action="" onSubmit={submit}>
      <label htmlFor="number">Paragraphs:</label>
      <input
        type="number"
        name="number"
        id="number"
        min="1"
        max="1000"
        required
        placeholder="Enter Number"
      />
      <button>generate</button>
      <br />
      <i
        className="fa fa-copy"
        aria-hidden="true"
        onClick={copy}
        title="Copy to Clipboard"
      ></i>
    </form>
  );
}
