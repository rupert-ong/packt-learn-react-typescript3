import * as React from "react";
import {
  Form,
  ISubmitResult,
  IValues,
  required,
  minLength,
  between
} from "./components/Form";

interface IProps {
  onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

const ContactUs: React.FunctionComponent<IProps> = props => {
  const handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    const result = await props.onSubmit(values);
    return result;
  };

  return (
    <Form
      defaultValues={{
        name: "",
        email: "",
        reason: "Support",
        notes: "",
        urgency: ""
      }}
      validationRules={{
        email: { validator: required },
        name: [{ validator: required }, { validator: minLength, args: 3 }],
        urgency: [{ validator: between, args: { lower: 1, upper: 10 } }],
        notes: { validator: minLength, args: 10 }
      }}
      onSubmit={handleSubmit}
    >
      <Form.Field name="name" label="Your Name" />
      <Form.Field name="email" label="Your Email" type="Email" />
      <Form.Field
        name="reason"
        label="Reason you need to contact us"
        type="Select"
        options={["Marketing", "Support", "Feedback", "Jobs", "Other"]}
      />
      <Form.Field name="notes" label="Additional Notes" type="TextArea" />
      <Form.Field
        name="urgency"
        label="How urgent is a response?"
        type="Number"
      />
    </Form>
  );
};

export default ContactUs;
