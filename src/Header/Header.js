import React, { useEffect, useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  const [isHeaderMoreOpen, setIsHeaderMoreOpen] = useState(false);
  const bookmarkedPosts = useSelector((state) => state.bookMarkedItems);
  let bookMarkCounter = (
    <div className="bookmarkCount">
      {"Bookmarked " + bookmarkedPosts.length}
    </div>
  );

  useEffect(() => {}, [bookmarkedPosts]);

  return (
    <div className="mainHeader">
      <div className="headerContainer">
        <div className="rightHeader">
          <img
            className="logoImage"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="rightHeaderItem">
            <Link className="navLink" to="/bookmarks">
              Bookmarks
            </Link>
          </p>
          <p className="rightHeaderItem">Push</p>
          <p className="rightHeaderItem">Link</p>
          <p className="rightHeaderItem">Shop</p>
          <p className="rightHeaderItem">Packs</p>
          <p className="rightHeaderItem">Help</p>
          <p
            className="rightHeaderItem"
            onClick={() => setIsHeaderMoreOpen(!isHeaderMoreOpen)}
          >
            More +
          </p>
        </div>
        <div className="leftHeader">
          <p className="leftHeaderItem">Try Live for free</p>
          <p className="leftHeaderItem">Log in or register</p>
          {bookMarkCounter}
        </div>
      </div>

      {isHeaderMoreOpen && (
        <div className="additionalOptions">
          <div className="additionalFromWebsite">
            <h2>More on Ableton.com:</h2>
            <div className="innerAdditionalFromWebsite">
              <p>Blog</p>
              <p>Jobs</p>
              <p>About Abelton</p>
            </div>
          </div>
          <div className="additionalFromAbelton">
            <h2>More from Abelton:</h2>
            <div className="innerAdditionalBlocks">
              <div className="additionalBlock">
                <h4>Loop</h4>
                <p>
                  Watch Talks, Performances and Features from Ableton's Summit
                  for Music Makers
                </p>
              </div>
              <div className="additionalBlock">
                <h4>Learning Music</h4>
                <p>
                  Learn the fundamentals of music making right in your browser.
                </p>
              </div>
              <div className="additionalBlock">
                <h4>Learn Synths</h4>
                <p>
                  Get started with synthesis using a web-based synth and
                  accompanying lessons.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
