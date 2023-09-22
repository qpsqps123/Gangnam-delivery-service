import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";

import useHttp from "../../firebase/database/use-http";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [menu, setMenu] = useState([]);
  const { isLoading, error, sendRequest: fetchMenu } = useHttp();

  useEffect(() => {
    const getMenu = (data) => {
      const loadedMenu = [];

      for (const menuKey in data) {
        loadedMenu.push({
          id: menuKey,
          name: data[menuKey].name,
          description: data[menuKey].description,
          price: data[menuKey].price,
        });
      }

      setMenu(loadedMenu);
    };

    fetchMenu(
      {
        url: "https://gangnam-delivery-service-default-rtdb.asia-southeast1.firebasedatabase.app/gangnam/menu.json",
      },
      getMenu
    );
  }, [fetchMenu]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error is occurred!</p>;
  }

  const mealsList = menu.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
