import Form from "../../Form/Form";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const Register = () => {
  return (
    <Form title="Sign Up">
      <Input title="Name" />
      <Input title="Email" />
      <Input title="Password" type="password" />
      <Input title="Password Confirmation" type="password" />
      <Button>
        Sign Up!
      </Button>
    </Form>
  );
};

export default Register;
