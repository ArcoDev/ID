import React, { useState, useEffect } from "react";
import ThemeProvider from "./context/ThemeProvider";
import LangProvider from "./context/LangProvider";
import Header from "./components/header/Header";
import Us from "./components/us/Us";
import Process from "./components/process/Process";
import Video from "./components/video/Video";
import Blog from "./components/blog/Blog";

function App() {
  const [loading, setloading] = useState(true);

  document.addEventListener("DOMContentLoaded", () => {
    setloading(false);
  });

  return (
    <>
      {loading ? (
        "HOLA!"
      ) : (
        <LangProvider>
          <ThemeProvider>
            <Header />
            <Us />
            <Video />
            <Process />
            <Blog />
          </ThemeProvider>
        </LangProvider>
      )}
    </>
  );
}

export default App;
