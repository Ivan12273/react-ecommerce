import { 
  FormWrapper, 
  Form as FormStyles,
  FormH1
} from "./FormStyles";

const Form = ({children, title, onSubmit, error}) => {
  return (
    <FormWrapper>
      <FormStyles onSubmit={onSubmit}>
        {
          title ?
            <FormH1>{title}</FormH1>
          : ""
        }
        {children}
        {error ?
          <div className="error">
            <span>{error}</span> 
          </div>
          : ""
        }
      </FormStyles>
    </FormWrapper>
  );
};

export default Form;
