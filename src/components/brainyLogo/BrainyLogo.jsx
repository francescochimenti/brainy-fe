import React, { useEffect, useState } from "react";
import logoDark from "../../assets/logoDark.svg";
import logoLight from "../../assets/logoLight.svg";

const BrainyLogo = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(currentTheme.matches ? "dark" : "light");
    };

    handleChange();

    currentTheme.addEventListener("change", handleChange);

    return () => currentTheme.removeEventListener("change", handleChange);
  }, []);
  return (
    <a href="/about" className="flex items-center">
      <img
        src={theme === "dark" ? logoLight : logoDark}
        className="mr-3 h-8"
        alt="FlowBite Logo"
      />
    </a>
  );
};

export default BrainyLogo;
