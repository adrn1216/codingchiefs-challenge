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
