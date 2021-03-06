import "./App.css";
import CookiePopup from "./CookiePopup/CookiePopup";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import PictureGrid from "./PictureGrid/PictureGrid";
import Posts from "./Posts/Posts";
import EmailSignUp from "./EmailSignUp/EmailSignUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookMarks from "./Bookmarks/BookMarks";
function App() {
  const axios = require("axios");

  const [isCookiePopupOpen, setIsCookiePopupOpen] = useState(false);
  const bookmarkedPosts = useSelector((state) => state.bookMarkedItems);
  const posts = useSelector((state) => state.availablePosts);
  const [showBottomMiniCart, setShowBottomMiniCart] = useState(false);

  const dispatch = useDispatch();

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
        let updatedResponseData = response.data.map((item) => {
          item.viewMore = false;
          item.price = Math.floor(Math.random() * 10).toString() + ".99";
          item.extraInfo = {
            additionalText: "Biggums",
            subText: "Great",
          };
          return item;
        });
        dispatch({
          type: "set_posts",
          availablePosts: updatedResponseData,
        });
      });
  }, []);

  useEffect(() => {
    if (bookmarkedPosts.length > 0) {
      setShowBottomMiniCart(true);
    } else {
      setShowBottomMiniCart(false);
    }
  }, [bookmarkedPosts]);

  let bookmarkPost = (post) => {
    // remove post from list
    // copy first and then manipulate

    let updatedPosts = posts.filter((x) => {
      if (x.id == post.id && x.userId == post.userId) return false;
      else return true;
    });
    dispatch({
      type: "set_posts",
      availablePosts: updatedPosts,
    });
    // add to bookmark
    let bookmarkCopy = [...bookmarkedPosts, post];
    dispatch({ type: "add_item_to_bookmarks", newBookMarkItems: bookmarkCopy });
  };

  return (
    <div className="App">
      {isCookiePopupOpen && (
        <CookiePopup
          handleCookiePopupAccept={handleCookiePopupAccept}
        ></CookiePopup>
      )}
      <div className="mainBodyContent">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/bookmarks">
              <BookMarks></BookMarks>
            </Route>
            <Route path="/">
              <div className="homePageContainer">
                <PictureGrid></PictureGrid>
                <Posts posts={posts} onPostSelect={bookmarkPost}></Posts>
                {showBottomMiniCart && (
                  <div className="bottomCartContainer">
                    <div className="bottomCartHeaderText">
                      <p>Welcome Back, you have</p>
                      <p className="bottomCartCount">
                        {" " + bookmarkedPosts.length + " "}
                      </p>
                      <p>items in your cart</p>
                      <p className="bottomCartDismiss">Dismiss</p>
                    </div>

                    <Link className="navLink bottomcartLink" to="/bookmarks">
                      <p>Click here to view bookmarks</p>
                    </Link>
                  </div>
                )}
              </div>
            </Route>
          </Switch>
          <EmailSignUp></EmailSignUp>
        </Router>
      </div>
    </div>
  );
}

export default App;
