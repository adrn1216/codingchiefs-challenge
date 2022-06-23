import styled from "styled-components";

export const StyledInputWithButton = styled.form`
  height: 40px;
  width: 100%;
  display: flex;
  margin: 10px 0;
  input {
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px 0 0 5px;
    background-color: var(--background-color);
    width: 100%;
    outline: 0;
    transition: ease-in 100ms;
    border: 0;
    :focus {
      transition: ease-in 100ms;
    }
  }
  button {
    background-color: var(--primary-color);
    cursor: pointer;
    outline: 0;
    border: 0;
    color: var(--white-color);
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    transition: ease-in 100ms;
    :focus {
      transition: ease-in 100ms;
      filter: opacity(0.9);
    }
    :disabled {
      background-color: var(--secondary-color);
      cursor: not-allowed;
    }
  }
`;
