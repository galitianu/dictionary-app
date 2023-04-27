import logo from "../assets/images/logo.svg";
import arrowImgUrl from "../assets/images/icon-arrow-down.svg";
import moonImg from "../assets/images/icon-moon.svg";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const body = document.querySelector("body");
  useEffect(() => {
    body!.dataset.font =
      sessionStorage.getItem("dictionary_app_font") || "sans";
    setFont(body!.dataset.font);
  }, []);
  useEffect(() => {
    body!.dataset.theme = "light";
    setTheme("light");
  }, []);
  const [font, setFont] = useState(body!.dataset.font);

  const [showDropDown, setShowDropDown] = useState(true);

  function handleClick(e: any) {
    e.preventDefault();
    e.target.blur();
    setShowDropDown((prev) => !prev);
  }

  function handleFontChange(e: any, newFont: string) {
    e.preventDefault();

    if (body != null) {
      body.dataset.font = newFont;
      sessionStorage.setItem("dictionary_app_font", newFont);
      setFont(newFont);
    }
  }

  function displayName() {
    if (font === "sans") {
      return "Sans Serif";
    } else if (font === "serif") {
      return "Serif";
    } else if (font === "mono") {
      return "Mono";
    }
  }

  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const toggleTheme = () => {
    if (theme === "light") {
      body!.dataset.theme = "dark";
      sessionStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      body!.dataset.theme = "light";
      sessionStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        onClick={() => {
          navigate("/");
        }}
      ></img>

      <button className="favs-button">Favourites</button>

      <div className="spacer"></div>
      <button className="btn-font-select" onClick={handleClick}>
        {displayName()}
        <ul className={`${showDropDown && "hidden"} fontSelectModal`}>
          <li
            className="font-option fontOptionSans"
            onClick={(e) => handleFontChange(e, "sans")}
          >
            Sans Serif
          </li>
          <li
            className="font-option fontOptionSerif"
            onClick={(e) => handleFontChange(e, "serif")}
          >
            Serif
          </li>
          <li
            className="font-option fontOptionMono"
            onClick={(e) => handleFontChange(e, "mono")}
          >
            Mono
          </li>
        </ul>
        <img className="img-arrow" src={arrowImgUrl} alt="Select font" />
      </button>
      <label className="toggle-container">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <img className="img-moon" src={moonImg} alt="crescent moon" />
    </header>
  );
};

export default Header;
