import { forwardRef } from "react";

const Input = forwardRef(function Input({ className, input, label }, ref) {
  return (
    <div className={className}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
