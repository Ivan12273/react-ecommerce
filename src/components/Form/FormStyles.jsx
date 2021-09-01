import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 50%;
  border: 1px solid #808080;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .error {
    color: red;
    width: 100%;
    font-size: 1.8rem;
    margin: 5px;
  }
  @media (max-width: 720px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const FormH1 = styled.h1`
  margin: 0;
`;