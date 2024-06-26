import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "newText" --> this is the wrong way to setting the text.
  // setText = "newText" --> this is the correct way to setting the text.

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into uppercase!", "success");
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into lowercase!", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared, Empty box!", "success");
  };

  const handleCopy = () => {
    let newText = text;
    navigator.clipboard.writeText(newText);
    setText(newText);

    props.showAlert("Copied!", "success");
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
    props.showAlert("Converted into sentencecase!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Remove the extra spacing!", "success");
  };

  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return (
    <>
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Textarea"
            rows="8"
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#232540" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
          ></textarea>
        </div>
        <div className="d-flex align-content-start flex-wrap">
          <button
            className="btn btn-outline-primary mx-1 my-1"
            onClick={handleSentence}
            disabled={text.length === 0}
          >
            Sentence Case
          </button>
          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handleUpper}
            disabled={text.length === 0}
          >
            Upper Case
          </button>
          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handleLower}
            disabled={text.length === 0}
          >
            Lower Case
          </button>
          <button
            className="btn btn-outline-secondary mx-1 my-1"
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy
          </button>
          <button
            className="btn btn-outline-secondary mx-1 my-1"
            onClick={handleRemoveSpace}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-outline-danger mx-1 my-1"
            onClick={handleClear}
            disabled={text.length === 0}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="d-flex justify-content-start my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
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
