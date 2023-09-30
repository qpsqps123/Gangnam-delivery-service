import { Fragment, useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = ({ onCancel, onConfirm }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const inputRef = useRef([]);

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = inputRef.current[0].value;
    const enteredStreet = inputRef.current[1].value;
    const enteredPostalCode = inputRef.current[2].value;
    const enteredCity = inputRef.current[3].value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const FormIsVaild =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!FormIsVaild) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const inputInfo = [
    { id: "name", label: "Your Name" },
    { id: "street", label: "Street" },
    { id: "postalCode", label: "Postal Code" },
    { id: "city", label: "City" },
  ];

  const errorMessage = {
    name: <p>Please enter a valid name!</p>,
    street: <p>Please enter a valid street!</p>,
    postalCode: <p>Please enter a valid postal code (5 charaters long)!</p>,
    city: <p>Please enter a valid city!</p>,
  };

  const inputList = inputInfo.map((element, index) => (
    <Fragment key={element.id}>
      <Input
        ref={(el) => (inputRef.current[index] = el)}
        className={`${classes.control} ${
          formInputsValidity[element.id] ? "" : classes.invalid
        }`}
        label={element.label}
        input={{ id: element.id, type: "text" }}
      />
      {element.id === "name" && !formInputsValidity[element.id]
        ? errorMessage.name
        : element.id === "street" && !formInputsValidity[element.id]
        ? errorMessage.street
        : element.id === "postalCode" && !formInputsValidity[element.id]
        ? errorMessage.postalCode
        : element.id === "city" && !formInputsValidity[element.id]
        ? errorMessage.city
        : ""}
    </Fragment>
  ));

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
