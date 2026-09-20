import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

export default function NavBar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.add(`theme-${stored}`);
    } else {
      document.documentElement.classList.add("theme-dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="navWrap">
      <div className="container navInner">
        <div className="navLeft">
          <NavLink to="/" className="brand" aria-label="Go to home">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">Blake Seigler</span>
          </NavLink>
          <button
            type="button"
            className="themeToggle"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>

        <nav className="nav" aria-label="Primary">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
          {/* <NavItem to="/blog">Blog</NavItem> */}
        </nav>
      </div>
    </header>
  );
}


