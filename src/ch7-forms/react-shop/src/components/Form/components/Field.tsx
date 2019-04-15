import * as React from "react";
import { FormContext, IFormContext } from "../../Form";

interface IProps {
  name: string;
  label: string;
  type?: "Text" | "Email" | "Select" | "TextArea" | "Number";
  options?: string[];
}

const Field: React.FunctionComponent<IProps> = props => {
  const formContext = React.useContext(FormContext);

  const { name, label, type, options } = props;

  const handleChange = (context: IFormContext) => (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (context.setValue) {
      context.setValue(name, e.currentTarget.value);
    }
  };

  const handleBlur = (context: IFormContext) => (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    if (context.validate) {
      context.validate(name, e.currentTarget.value);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {(type === "Text" || type === "Email" || type === "Number") && (
        <input
          type={type.toLowerCase()}
          id={name}
          value={formContext.values[name]}
          onChange={handleChange(formContext)}
          onBlur={handleBlur(formContext)}
        />
      )}
      {type === "TextArea" && (
        <textarea
          id={name}
          value={formContext.values[name]}
          onChange={handleChange(formContext)}
          onBlur={handleBlur(formContext)}
        />
      )}
      {type === "Select" && (
        <select
          value={formContext.values[name]}
          onChange={handleChange(formContext)}
          onBlur={handleBlur(formContext)}
        >
          {options &&
            options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      )}
      {formContext.errors[name] &&
        formContext.errors[name].length > 0 &&
        formContext.errors[name].map(error => (
          <span key={error} className="form-error">
            {error}
          </span>
        ))}
    </div>
  );
};

Field.defaultProps = {
  type: "Text"
};

export default Field;
