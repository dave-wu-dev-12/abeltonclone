import React, { useState } from "react";
import "./EmailSignUp.css";

function EmailSignUp() {
  const [newsLetterInput, setNewsLetterInput] = useState("");
  const [inputError, setInputError] = useState(false);

  let validateEmail = () => {
    if (newsLetterInput.length < 2) {
      setInputError(true);
    } else if (!newsLetterInput.includes("@")) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };

  return (
    <div className="emailSignUpContainer">
      <h1>SUBSCRIBE TO NEWSLETTER</h1>
      <div className="newsletterSubHeader">
        <p>Free ebooks</p>
        <p className="middleSubheader">&bull; Free song tutorials</p>
        <p>&bull; Design melodies</p>
      </div>
      <div className="signUpBar">
        <input
          type="text"
          className={"inputSignUp" + (inputError ? " hasError" : "")}
          placeholder="Type your email address"
          value={newsLetterInput}
          onChange={(e) => setNewsLetterInput(e.target.value)}
          onBlur={validateEmail}
        />
        <button className="signUpButton">I want to sign up!</button>
      </div>
      <p>We are going to send you updates bi-weekly</p>
    </div>
  );
}

export default EmailSignUp;
