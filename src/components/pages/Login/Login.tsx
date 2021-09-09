import { FormikErrors, FormikProps, useFormik } from "formik";
import Button from "../../Button/Button";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/auth/reducer";
import { login } from "../../../api/auth";
import { useLocation } from "react-router";

interface Fields {
  email: string;
  password: string;
  form: string | null;
}
const Login = () => {
  const dispatch = useDispatch();

  const url = useLocation().search
  const redirectToCart = new URLSearchParams(url).get('bag')

  const validate = (values: Fields) => {
    const errors: FormikErrors<Fields> = {};
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
      password: '',
      form: ''
    },
    validate,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        console.log("helle")
        const { success, data } = await login(values)
        if (success) {
          dispatch(setToken(data.token))
          window.location.assign(redirectToCart ? "/bag" : "/")
        } else {
          const errors: FormikErrors<Fields> = {}
          errors.form = "email and password do not match or user does not exists";
          setErrors(errors)
          setSubmitting(false);
        }
      } catch (error: any) {
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
        type="text"
        small={false}
        right={false}
        left={false}
      />
      <Input
        id="password"
        name="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        small={false}
        right={false}
        left={false}
      />
      <Button type="submit">Login!</Button>
    </Form>
  )
};

export default Login;
