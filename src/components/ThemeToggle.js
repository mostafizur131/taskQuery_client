import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { DARK_CONTEXT } from "../context/DarkContext";

const ThemeToggle = () => {
  const [themeToggle, setThemeToggle] = useState(false);
  const { darkToggle } = useContext(DARK_CONTEXT);
  return (
    <div onClick={darkToggle}>
      <div onClick={() => setThemeToggle(!themeToggle)}>
        {themeToggle ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
};

export default ThemeToggle;
