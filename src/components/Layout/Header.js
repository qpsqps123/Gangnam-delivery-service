import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

import mealsImage from "../../assets/meals-image.jpg";
import gangnamLogo from "../../assets/gangnam-logo.png";

const Header = ({ onOpenModal }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="a11y-hidden">Perth Gangnam restaurant</h1>
        <a href="/">
          <img src={gangnamLogo} alt="Gangnam restaurant logo." />
        </a>
        <HeaderCartButton onOpenModal={onOpenModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious Korean food." />
      </div>
    </>
  );
};

export default Header;
