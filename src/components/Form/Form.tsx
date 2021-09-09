import { 
  FormWrapper, 
  Form as FormStyles,
  FormH1
} from "./FormStyles";

interface Props {
  children: React.ReactNode;
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
}

const Form = ({ children, title, onSubmit, error }: Props) => {
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
