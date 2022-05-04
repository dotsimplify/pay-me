import React, { useState } from "react";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = React.useState(false);
  const darkModeHandler = () => {
    const root = window.document.documentElement; //add 'dark class to html root element'
    root.classList.toggle("dark");
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div
      style={{
        backgroundImage: "url(/blob.svg)",
        backgroundPosition: " bottom top",
      }}
    >
      <Header
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        darkModeHandler={darkModeHandler}
      />
      <Component {...pageProps} darkMode={darkMode} language={language} />
    </div>
  );
}

export default MyApp;
