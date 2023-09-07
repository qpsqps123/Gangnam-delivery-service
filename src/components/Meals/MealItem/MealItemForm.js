import { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealItemForm = ({ id, onAddItem }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddItem(enteredAmountNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
