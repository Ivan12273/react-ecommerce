import { 
  Input as InputStyles, 
  Label,
  InputContainer
} from "./InputStyles"

const Input = ({title, type = "text"}) => {
  return (
    <>
      <InputContainer>
        <Label>{title}</Label>
        <InputStyles placeholder={title} type={type} />
      </InputContainer>
    </>
  );
};

export default Input;
