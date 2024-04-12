import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "newText" --> this is the wrong way to setting the text.
  // setText = "newText" --> this is the correct way to setting the text.

  const handleUpper = () => {
    console.log("clicked on uppercase!" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLower = () => {
    console.log("clicked on lowercase!" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    console.log("clicked on clear!" + text);
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    console.log("clicked on copy!");
    let newText = text;
    navigator.clipboard.writeText(newText);
    setText(newText);
  };

  const handleSentence = () => {
    let newText = text.split(".").map(function (item) {
      return item.trim();
    });
    newText.forEach((el) => {
      for (let i = 0; i < newText.length; i++) {
        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
      }
    });
    newText = newText.join(". ");
    setText(newText);
  };

  const handleChange = (event) => {
    console.log("clicked on change!");
    setText(event.target.value);
  };

  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-4">{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            id="Textarea"
            rows="8"
            onChange={handleChange}
            value={text}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mx-1" onClick={handleSentence}>
            Sentence Case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleUpper}>
            Upper Case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLower}>
            Lower Case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-start my-3">
        <h3>Summary:</h3>
        <div className="d-flex justify-content-center my-2 mx-5">
          <p>
            {wordCount} Words, {text.length} Characters
          </p>
          <p className="mx-5">{`${0.008 * text.length}`} Minutes for read!</p>
        </div>
      </div>
    </>
  );
}
