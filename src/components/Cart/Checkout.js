import { useRef } from "react";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  const inputRef = useRef([]);

  const confirmHandler = (e) => {
    e.preventDefault();
    console.log("submitted!");

    const enteredName = inputRef.current[0].value;
    const enteredStreet = inputRef.current[1].value;
    const enteredPostal = inputRef.current[2].value;
    const enteredCity = inputRef.current[3].value;

    console.log(enteredName, enteredStreet, enteredPostal, enteredCity);
  };

  const inputInfo = [
    { id: "name", label: "Your Name" },
    { id: "street", label: "Street" },
    { id: "postal", label: "Postal Code" },
    { id: "city", label: "City" },
  ];

  const inputList = inputInfo.map((element, index) => {
    return (
      <Input
        key={element.id}
        ref={(el) => (inputRef.current[index] = el)}
        className={classes.control}
        label={element.label}
        input={{ id: element.id, type: "text" }}
      />
    );
  });

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {inputList}
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
