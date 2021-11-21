import React from "react";
import "./Header.css";

function Header() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="header">
      <h1>
        <img
          src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-recipe-kitchen-cooking-becris-lineal-color-becris-1.png"
          alt=""
          onClick={refreshPage}
        />
        recipes search
      </h1>
    </div>
  );
}

export default Header;
