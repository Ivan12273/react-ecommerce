import { 
  FormWrapper, 
  Form as FormStyles,
  FormH1
} from "./FormStyles";

const Form = ({children, title}) => {
  return (
    <FormWrapper>
      <FormStyles>
        {
          title ?
            <FormH1>{title}</FormH1>
          : ""
        }
        {children}
      </FormStyles>
    </FormWrapper>
  );
};

export default Form;
