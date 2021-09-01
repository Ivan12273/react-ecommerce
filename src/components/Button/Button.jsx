import { Button as ButtonStyles} from "./ButtonStyles"

const Button = ({children, onClick, type = "submit" }) => {
  return (
    <ButtonStyles onClick={onClick} type={type}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
