import { useFormik } from "formik";
import Button from "../../Button/Button";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/auth/reducer";

const Login = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.email && !values.password) {
      errors.email = 'Email is required';
      errors.password = 'Password is required';
    } else if (!values.email) {
      errors.email = 'Email is required';
    } else if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
          const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          const { data, success } = await response.json();
          if (!success) {
            const errors = {};
            errors.form = "email and password do not match or user does not exists";
            setErrors(errors)
            setSubmitting(false);
          } else {
            dispatch(setToken(data.token))
            localStorage.setItem("token", data.token)
          }
        } catch (error) {
          console.error(error.message)
        }
      }
  });
  return(
    <Form title="Login" onSubmit={formik.handleSubmit} error={formik.errors.form}>
      <Input
        id="email"
        name="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Input
        id="password"
        name="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button>Login!</Button>
    </Form>
  )
};

export default Login;
