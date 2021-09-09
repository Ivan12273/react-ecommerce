import classNames from "classnames";
import { 
  Input as InputStyles, 
  Label,
  InputContainer
} from "./InputStyles"

interface Props {
  id: string;
  name: string;
  type: string | undefined;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string | number;
  error: string | undefined;
  small: boolean | undefined;
  right: boolean | undefined;
  left: boolean | undefined;
}

const Input = (
  {
    id,
    name,
    type = "text",
    onChange,
    value,
    error,
    small,
    right,
    left
  }: Props
) => {
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
