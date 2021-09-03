import classNames from "classnames";
import { 
  Input as InputStyles, 
  Label,
  InputContainer
} from "./InputStyles"

const Input = ({ id, name, type = "text", onChange, value, error, small, right, left }) => {
  return (
    <>
      <InputContainer className={classNames({
        small,
        right,
        left
      })}>
        <Label>{name}</Label>
        <InputStyles
          id={id}
          placeholder={name}
          type={type}
          onChange={onChange}
          value={value}
          className={classNames({
            error,
          })}
        />
        {error ?
          <span className="error">{error}</span>
          : ""
        }
      </InputContainer>
    </>
  );
};

export default Input;
