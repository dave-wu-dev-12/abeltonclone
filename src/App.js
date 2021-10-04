import "./App.css";
import CookiePopup from "./CookiePopup/CookiePopup";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import Header from "./Header/Header";

function App() {
  const [isCookiePopupOpen, setIsCookiePopupOpen] = useState(false);
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

  return (
    <div className="App">
      {isCookiePopupOpen && (
        <CookiePopup
          handleCookiePopupAccept={handleCookiePopupAccept}
        ></CookiePopup>
      )}
      <Header></Header>
    </div>
  );
}

export default App;
