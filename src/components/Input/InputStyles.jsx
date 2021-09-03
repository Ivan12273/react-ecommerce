import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid black;
  width: calc(100% - 22px);
  border-radius: 7px;
  height: 30px;
  font-size: 1.5rem;
  padding: 5px 10px;
  display: block;
  &.error {
    border: 1px solid red;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const InputContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  .error {
    color: red;
  }
  &.small {
    width: calc(50% - 5px);
  }
  &.small.left {
    margin-right: 5px;
  }
  &.small.right {
    margin-left: 5px;
  }
  @media (max-width: 375px){
    &.small {
      width: 100%;
    }
    &.small.left {
      margin-right: 0;
    }
    &.small.right {
      margin-left: 0;
    }
  }
`;