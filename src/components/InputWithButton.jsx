import React from "react";
import { StyledInputWithButton } from "./style";

// I separated this component to show how I make reusable components
const InputWithButton = ({
  type,
  placeholder,
  value,
  onChange,
  onSubmit,
  buttonText,
}) => {
  return (
    // I use a form here so clicking "Enter" key will add an item instead of just clicking the button
    <StyledInputWithButton onSubmit={onSubmit}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button disabled={value === ""} type="submit">
        {buttonText}
      </button>
    </StyledInputWithButton>
  );
};

export default InputWithButton;
