import image from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1> React Meals </h1>
        <HeaderCartButton/>
      </header>
      <div className={classes.image}>
        <img
          src={image}
          alt=" A table full of delicious food! "
        ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
