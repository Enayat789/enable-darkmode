import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    // console.log("Upper case was clicked " + text);
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    // console.log("lowerCase was clicked" + text);
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearCase = () => {
    setText("");
  };
  const handleCapitaliseCase = () => {
    // const newText = text.charAt(0).toUpperCase() + text.slice(1);
    // setText(newText);
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
      .join(" ");

    console.log(newText);
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("entered text");
    setText(event.target.value);
  };

  return (
    <div className=" m-2">
      <h1>{props.heading}</h1>
      {/* ********* TextArea added ****** */}
      {/* <div className="form-floating h-full">
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          onChange={handleOnChange}
          rows={20}
        ></textarea>
        <label htmlFor="floatingTextarea">Text here...</label>
      </div> */}
      <div className="form-floating">
        <textarea
          id="myBox"
          cols="100"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      {/*  ************** BUTTONS ****** */}
      <button className="p-2" onClick={handleUpperCase}>
        Convert to UpperCase
      </button>
      <button className="m-4 p-2" onClick={handleLowerCase}>
        Convert to LowerCase
      </button>
      <button className="m-4 p-2" onClick={handleCapitaliseCase}>
        Capitalize Case
      </button>{" "}
      <button className="m-4 p-2" onClick={handleClearCase}>
        Clear
      </button>
      {/* ********** TEXT SUMMARY *************** */}
      <div>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
