import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="Footer">
        This page was coded by{" "}
        <a href="https://github.com/wrightrebecca" target="blank">
          Rebecca Wright
        </a>
        . It is available on{" "}
        <a
          href="https://github.com/wrightrebecca/react-project-1"
          target="blank"
        >
          GitHub{" "}
        </a>
        and is hosted by{" "}
        <a
          href="https://react-weather-forecaster-pro.netlify.app/"
          target="blank"
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );
}
