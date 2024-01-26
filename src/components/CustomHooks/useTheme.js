import React, { useEffect, useState } from "react";

const useTheme = () => {
  const perferDarkMode = "(prefer-color-scheme: Dark)";
  //  this prefer-color-scheme is a css feature which returns true if user perfers Dark theme
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(perferDarkMode);
    const userPref = window.localStorage.getItem("theme");
    const handleChange = () => {
      if (userPref) {
        let check = userPref == "dark" ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        // this if condition will be working when some value is stored in the local storage based on user prefered action last time
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        // this else condition will only work when the user is opend this application for the first time and changed the theme
        // once the theme is changed for the first time it will be stored in the local storage
      }
    };
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } 
    if(mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useTheme;
