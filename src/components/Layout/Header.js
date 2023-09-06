import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

import mealsImage from "../../assets/meals-image.jpg";
import gangnamLogo from "../../assets/gangnam-logo.png";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="a11y-hidden">Perth Gangnam restaurant</h1>
        <img src={gangnamLogo} alt="Gangnam restaurant logo." />
        <HeaderCartButton />
      </header>
      <div>
        <img src={mealsImage} alt="A table full of delicious Korean food." />
      </div>
    </>
  );
};

export default Header;
