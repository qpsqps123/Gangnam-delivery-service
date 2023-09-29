import { useRef } from "react";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  const confirmHandler = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };

  const inputInfo = [
    { id: "name", label: "Your Name" },
    { id: "street", label: "Street" },
    { id: "postal", label: "Postal Code" },
    { id: "city", label: "City" },
  ];

  const inputList = inputInfo.map((element) => {
    return (
      <Input
        key={element.id}
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
