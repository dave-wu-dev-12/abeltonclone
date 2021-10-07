import "./App.css";
import CookiePopup from "./CookiePopup/CookiePopup";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import PictureGrid from "./PictureGrid/PictureGrid";
import Posts from "./Posts/Posts";

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
      </div>
    </div>
  );
}

export default App;
