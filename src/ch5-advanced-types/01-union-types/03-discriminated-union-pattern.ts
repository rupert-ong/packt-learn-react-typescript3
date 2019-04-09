// The discriminated union pattern allows us to handle the logic for different union types.
interface ITextbox {
  control: "Textbox";
  value: string;
  multiline: boolean;
}

interface IDatePicker {
  control: "DatePicker";
  value: Date;
}

interface INumberSlider {
  control: "NumberSlider";
  value: number;
}

interface ICheckbox {
  control: "Checkbox";
  value: boolean;
}

// Combine interfaces into a union type
type Field = ITextbox | IDatePicker | INumberSlider | ICheckbox;

// Create a function to initialize the value in the Field type (discriminated union pattern)
function initializeValue(field: Field) {
  switch (field.control) {
    case "Textbox":
      field.value = "";
      break;
    case "DatePicker":
      field.value = new Date();
      break;
    case "NumberSlider":
      field.value = 0;
      break;
    // Comment this out to get compilation error for never being reached
    case "Checkbox":
      field.value = false;
      break;
    default:
      const shouldNotReact: never = field;
  }
}
