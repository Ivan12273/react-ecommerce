import { Button as ButtonStyles} from "./ButtonStyles"

interface Props {
  children?: any;
  onClick?: any;
  type?: string | undefined;
  onSubmit?: any;
}

const Button = ({ children, onClick, type = "submit", onSubmit }: Props) => {
  return (
    <ButtonStyles onClick={onClick} type={type} onSubmit={onSubmit}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
