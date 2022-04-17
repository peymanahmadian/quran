import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
//context
import textContext from "./context/text.context";
import translateContext from "./context/translate.context";
//pages
import Text from "./pages/text.page";
import Home from "./pages/home.page";
const App = () => {
  const [text, setText] = useState(null);
  const [translate, setTranslate] = useState(null);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("/database/text.json", requestOptions)
      .then((response) => response.text())
      .then((result) => setText(result))
      .catch((error) => console.log("error", error));
    fetch("/database/translate/fa.ansarian.json", requestOptions)
      .then((response) => response.text())
      .then((result) => setTranslate(result))
      .catch((error) => console.log("error", error));

  }, []);
  return (
    <BrowserRouter>
      <div>
        
        <textContext.Provider value={{ text, setText }}>
          <translateContext.Provider value={{ translate, setTranslate }}>
            {text && translate ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view" element={<Text />} />
              </Routes>
            ) : (
              <div>در حال بارگذاری اطلاعات ...</div>
            )}
          </translateContext.Provider>
        </textContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
