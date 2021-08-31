import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Login = () => {
  return(
    <Form title="Login">
      <Input title="Email" />
      <Input title="Password" type="password" />
      <Button>Login!</Button>
    </Form>
  )
};

export default Login;
