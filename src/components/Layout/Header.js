import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals-image.jpg";

const Header = () => {
  return (
    <>
      <header>
        <h1>GANGNAM</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img src={mealsImage} alt="A table full of delicious Korean food!" />
      </div>
    </>
  );
};

export default Header;
