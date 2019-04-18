import * as React from "react";
import Field from "./components/Field";

// This is an indexable key/value type that has a string type key and an any type value.
// The key will be the field name, and the value will be the field value.
// So, the value for the defaultValues prop could be this:
// { name: "", email: "", reason: "Support", notes: "" }
export interface IValues {
  [key: string]: any;
}

// A Validator function will take in the field name, the values for the whole form,
// and an optional argument specific to the function. A string containing the validation
// error message will be returned. If the field is valid, a blank string will be returned.
export type Validator = (
  fieldName: string,
  values: IValues,
  args?: any
) => string;

// Validation 1) Define methods
export const required: Validator = (fieldName: string, values: IValues) =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ""
    ? "This field must be populated"
    : "";

export const minLength: Validator = (
  fieldName: string,
  values: IValues,
  length: number
) =>
  values[fieldName] && values[fieldName].length < length
    ? `This field must be at least ${length} characters`
    : "";

export const between: Validator = (
  fieldName: string,
  values: IValues,
  bounds: { lower: number; upper: number }
): string =>
  values[fieldName] &&
  (values[fieldName] < bounds.lower || values[fieldName] > bounds.upper)
    ? `This must be between ${bounds.lower} and ${bounds.upper}`
    : "";

// Add ability to add Validation rules via props to component
interface IValidation {
  validator: Validator;
  args?: any;
}

// Define a Validation Rules so we can do something like this in the Form component
/* 
  validationRules={{
    email: { validator: required },
    name: [{ validator: required }, { validator: minLength, arg: 3 }]
  }}
*/
interface IValidationProp {
  [key: string]: IValidation | IValidation[];
}

export interface ISubmitResult {
  success: boolean;
  errors?: IErrors;
}
interface IProps {
  defaultValues: IValues;
  validationRules: IValidationProp;
  onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

// Validation 2) Define place to store validation errors
interface IErrors {
  [key: string]: string[];
}

interface ITouched {
  [key: string]: boolean;
}

interface IState {
  values: IValues;
  errors: IErrors;
  touched: ITouched;
  submitting: boolean;
  submitted: boolean;
}

export interface IFormContext {
  values: IValues;
  errors: IErrors;
  setValue?: (fieldName: string, value: any) => void;
  validate?: (fieldName: string, value: any) => void;
}

export const FormContext = React.createContext<IFormContext>({
  values: {},
  errors: {}
});

export class Form extends React.Component<IProps, IState> {
  public static Field = Field;

  constructor(props: IProps) {
    super(props);
    const errors: IErrors = {};
    const touched: ITouched = {};
    Object.keys(this.props.defaultValues).forEach(fieldName => {
      errors[fieldName] = [];
      touched[fieldName] = false;
    });
    this.state = {
      values: this.props.defaultValues,
      submitting: false,
      submitted: false,
      errors,
      touched
    };
  }

  public render() {
    const context: IFormContext = {
      values: this.state.values,
      errors: this.state.errors,
      setValue: this.setValue,
      validate: this.validate
    };

    return (
      <FormContext.Provider value={context}>
        <form className="form" noValidate={true} onSubmit={this.handleSubmit}>
          {this.props.children}
          <div className="form-group">
            <button
              type="submit"
              disabled={this.state.submitted || this.state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </FormContext.Provider>
    );
  }

  private setValue = (fieldName: string, value: any) => {
    const newValues = { ...this.state.values, [fieldName]: value };
    const newTouched = { ...this.state.touched, [fieldName]: true };
    this.setState({ values: newValues, touched: newTouched });
  };

  // Validation 3) Invoke validation validator method
  private validate = (fieldName: string, value: any): string[] => {
    const rules = this.props.validationRules[fieldName];
    const errors: string[] = [];
    if (Array.isArray(rules)) {
      rules.forEach(rule => {
        const error = rule.validator(fieldName, this.state.values, rule.args);
        if (error) {
          errors.push(error);
        }
      });
    } else {
      if (rules) {
        // Only show error/validate non-required fields if they are dirty (see notes field)
        if (rules.validator !== required) {
          if (!this.state.touched[fieldName]) {
            return [];
          }
        }
        const error = rules.validator(fieldName, this.state.values, rules.args);
        if (error) {
          errors.push(error);
        }
      }
    }
    // Store errors in state
    const newErrors = { ...this.state.errors, [fieldName]: errors };
    this.setState({
      errors: newErrors
    });
    return errors;
  };

  private validateForm = (): boolean => {
    const errors: IErrors = {};
    let hasError: boolean = false;

    Object.keys(this.props.defaultValues).map(fieldName => {
      errors[fieldName] = this.validate(
        fieldName,
        this.state.values[fieldName]
      );
      if (errors[fieldName].length > 0) {
        hasError = true;
      }
    });
    this.setState({
      errors
    });
    return !hasError;
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitting: true });
      const result = await this.props.onSubmit(this.state.values);
      this.setState({
        errors: result.errors || {},
        submitted: result.success,
        submitting: false
      });
    }
  };
}
