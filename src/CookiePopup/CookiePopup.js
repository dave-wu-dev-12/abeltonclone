import React from "react";
import "./CookiePopup.css";

function CookiePopup({ handleCookiePopupAccept }) {
  let popupText =
    "Clicking “Accept” means you consent to your data being processed in the United States, and you’ll let us use cookies and other technologies to process your personal information so we can personalize and enhance your experience using Ableton.com. This also allows us to get statistics of visits. Click “More Info” to find out more about this (including possible risks of data processing in the USA), set your individual settings or object to certain processes. Click “Close” to deny consent. However, the use of technically required cookies is essential for the website to function.";

  return (
    <div className="popupContainer">
      <p className="popupTermsText">{popupText}</p>
      <button className="popupAcceptButton" onClick={handleCookiePopupAccept}>
        Accept
      </button>
      <div className="popupAdditionalInfoContainer">
        <button className="popupAdditionalInfoButton">Close</button>
        <button className="popupAdditionalInfoButton">More info</button>
      </div>
    </div>
  );
}

export default CookiePopup;
