import styled from "styled-components";

export const Button = styled.button`
  background: #C4C4C4;
  color: black;
  outline: none;
  border: none;
  padding: 10px 0;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  border-radius: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: black;
    color: white;
  }
  &:disabled {
    opacity: 1;
  }
`;