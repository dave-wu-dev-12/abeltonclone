import "./App.css";
import CookiePopup from "./CookiePopup/CookiePopup";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import PictureGrid from "./PictureGrid/PictureGrid";
import Posts from "./Posts/Posts";
import EmailSignUp from "./EmailSignUp/EmailSignUp";

function App() {
  const axios = require("axios");

  const [isCookiePopupOpen, setIsCookiePopupOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  let cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("registered")) {
      setIsCookiePopupOpen(false);
    } else {
      setIsCookiePopupOpen(true);
    }
  }, []);

  let handleCookiePopupAccept = () => {
    cookies.set("registered", "true", {
      path: "/",
      expires: new Date("December 17, 2995 03:24:00"),
    });
    setIsCookiePopupOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
      });
  }, []);

  let bookmarkPost = (post) => {
    // remove post from list
    // copy first and then manipulate

    let updatedPosts = posts.filter((x) => {
      if (x.id == post.id && x.userId == post.userId) return false;
      else return true;
    });
    setPosts(updatedPosts);
    // add to bookmark
    let bookmarkCopy = bookmarkedPosts.map((x) => x);
    bookmarkCopy.push(post);
    setBookmarkedPosts(bookmarkCopy);
    console.log(bookmarkCopy);
  };

  return (
    <div className="App">
      {isCookiePopupOpen && (
        <CookiePopup
          handleCookiePopupAccept={handleCookiePopupAccept}
        ></CookiePopup>
      )}
      <div className="mainBodyContent">
        <Header></Header>
        <PictureGrid></PictureGrid>
        <Posts posts={posts} onPostSelect={bookmarkPost}></Posts>
        <EmailSignUp></EmailSignUp>
      </div>
    </div>
  );
}

export default App;
