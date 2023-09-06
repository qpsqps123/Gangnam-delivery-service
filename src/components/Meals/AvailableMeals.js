import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const DUMMY_MENU = [
    {
      id: "meal1",
      name: "Bibimbap",
      description: 'Korean style "Mixed Rice"',
      price: 23,
    },
    {
      id: "meal2",
      name: "Bulgogi with Rice",
      description:
        "Stir fried sliced meat, marinated in our special sauce with assroted vegetables",
      price: 23,
    },
    {
      id: "meal3",
      name: "Japchae",
      description: "Pan tossed sweet potato noodles",
      price: 23,
    },
    {
      id: "meal4",
      name: "Jambong",
      description:
        "Korean spicy seafood noodle soup served with prawns, squid and assorted vegetables.",
      price: 23,
    },
  ];

  const mealsList = DUMMY_MENU.map((meal) => <MealItem />);

  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
