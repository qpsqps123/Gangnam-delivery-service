import { forwardRef } from "react";

const Input = forwardRef(function Input({ input, label }, ref) {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
