import React from "react";
import backgroundImg from "../../../assets/meals.jpg";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>Meal</h1>
        <HeaderCartButton />
      </header>

      <div className={style.main_image}>
        <img alt="background" src={backgroundImg} />
      </div>
    </>
  );
};

export default Header;
