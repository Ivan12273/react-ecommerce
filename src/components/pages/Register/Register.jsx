import Form from "../../Form/Form";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { setToken } from "../../../redux/auth/reducer";

const Register = () => {
  const dispatch = useDispatch();
  const validate = values => {
    const errors = {};
    if (!values.email && !values.password && !values.displayName && !values.passwordConfirmation) {
      errors.email = 'Email is required';
      errors.password = 'Password is required';
      errors.displayName = 'Name is required';
      errors.passwordConfirmation = 'Password Confirmation is required';
    } else if (!values.email) {
      errors.email = 'Email is required';
    } else if (!values.password) {
      errors.password = 'Password is required';
    } else if (!values.displayName) {
      errors.displayName = 'Name is required';
    } else if (!values.passwordConfirmation) {
      errors.passwordConfirmation = 'Password Confirmation is required';
    } else if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = "Password and password confirmation do not match"
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      displayName: '',
      password: '',
      passwordConfirmation: ''
    },
    validate,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await fetch("http://localhost:5000/api/auth", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        const data = await response.json();
        console.log(data)
        if (!data.success) {
          const errors = {};
          errors.form = "a user with this email already exists";
          setErrors(errors)
          setSubmitting(false);
        }
        const { result, success } = await response.json();

        if (!success) {
          const errors = {};
          errors.form = "a user with this email already exists";
          setErrors(errors)
          setSubmitting(false);
        } else {
          dispatch(setToken(result.token))
          window.location.assign("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form title="Sign Up" onSubmit={formik.handleSubmit} error={formik.errors.form}>
      <Input
        id="displayName"
        name="Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.displayName}
        error={formik.errors.displayName}
      />
      <Input
        id="email"
        name="Email"
        type="text"
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
      <Input
        id="passwordConfirmation"
        name="Password Confirmation"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirmation}
        error={formik.errors.passwordConfirmation}
      />
      <Button>
        Sign Up!
      </Button>
    </Form>
  );
};

export default Register;
