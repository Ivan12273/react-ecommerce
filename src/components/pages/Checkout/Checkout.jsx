import Form from "../../Form/Form";
import { useFormik } from "formik";
import Input from "../../Input/Input";
import { Wrapper } from "./CheckoutStyles";
import Button from '../../Button/Button';


const Checkout = () => {
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
      expirationDate: '',
      cardNumber: '',
      securityCode: '',
    },
    validate,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      
    },
  });
  return (
    <>
      <Form>
        <Input
          name="Card Number"
          id="cardNumber"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          error={formik.errors.cardNumber}
        />
        <Wrapper>
          <Input
            name="CVC/CVV"
            id="securityCode"
            value={formik.values.securityCode}
            onChange={formik.handleChange}
            error={formik.errors.securityCode}
            small={true}
            left={true}
          />
          <Input
            name="Expiration"
            id="expirationDate"
            type="month"
            value={formik.values.expirationDate}
            onChange={formik.handleChange}
            error={formik.errors.expirationDate}
            small={true}
            right={true}
          />
        </Wrapper>
        <Button>
          Checkout!
        </Button>
      </Form>
    </>
  );
};

export default Checkout;
