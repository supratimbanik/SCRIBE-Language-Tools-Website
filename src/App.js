import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
/* Separate components for each page */
import LenisScroll from "./components/util/LenisScroll"; // Used for smoother srolling experience
import Home from "./components/Home";
import About from "./components/About";
import Grammar from "./components/Grammar";
import Dictionary from "./components/Dictionary";
import Speech from "./components/Speech";
import Translator from "./components/Translator";
import Loader from "./components/util/Loader"; // Used for creating a loading animation

/* Function used to render the loading effect component before rendering current component */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LenisScroll>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/speech_to_text" element={<Speech />} />
            <Route path="/translator" element={<Translator />} />
          </Routes>
        )}
      </div>
    </LenisScroll>
  );
}

export default App;
