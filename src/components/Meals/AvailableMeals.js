import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const DUMMY_MENU = [
    {
      id: "meal1",
      name: "Bibimbap 비빔밥",
      description: 'Korean style "Mixed Rice"',
      price: 23,
    },
    {
      id: "meal2",
      name: "Bulgogi with Rice 불고기",
      description:
        "Stir fried sliced meat, marinated in our special sauce with assroted vegetables",
      price: 23,
    },
    {
      id: "meal3",
      name: "Japchae 잡채",
      description: "Pan tossed sweet potato noodles",
      price: 23,
    },
    {
      id: "meal4",
      name: "Jambong 해물 짬뽕",
      description:
        "Korean spicy seafood noodle soup served with prawns, squid and assorted vegetables.",
      price: 23,
    },
  ];

  const mealsList = DUMMY_MENU.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
