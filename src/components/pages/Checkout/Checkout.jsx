import Form from "../../Form/Form";
import { useFormik } from "formik";
import Input from "../../Input/Input";
import { Wrapper } from "./CheckoutStyles";
import Button from '../../Button/Button';
import withAuth from "../../../hocs/withAuth";
import { useDispatch } from "react-redux";
import { removeAll } from "../../../redux/cart/reducer";


const Checkout = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.expirationDate) {
      errors.expirationDate = 'Expiration date is required';
    }
    if (!values.cardNumber) {
      errors.cardNumber = 'Card number is required';
    } 
    if (!values.securityCode) {
      errors.securityCode = 'Security code is required';
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
    onSubmit: () => {
      try {
        dispatch(removeAll());
      } catch (e) {
        console.error(e)
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} >
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
        <Button >
          Checkout!
        </Button>
      </Form>
    </>
  );
};

export default withAuth(Checkout, "/login?bag=true");
