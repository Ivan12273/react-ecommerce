import { Button as ButtonStyles} from "./ButtonStyles"

const Button = ({children, onClick}) => {
  return (
    <ButtonStyles onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
