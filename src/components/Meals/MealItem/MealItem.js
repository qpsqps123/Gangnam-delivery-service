import MealItemForm from "./MealItemForm";

const MealItem = () => {
  return (
    <li>
      <div>
        <h3>name</h3>
        <div>description</div>
        <div>price</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
