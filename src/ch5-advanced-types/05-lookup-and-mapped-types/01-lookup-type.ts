interface IPerson {
  id: number;
  name: string;
  age: number;
}

// The keyof is a keyword in TypeScript that creates a union type of all the properties in an object.
// Hover over type definition...
type PersonProps = keyof IPerson;

// Application of lookup type...
class Field<T, K extends keyof T> {
  name: K;
  label: string;
  defaultValue: T[K];
}

const idField: Field<IPerson, "id"> = new Field();
// const addressField:Field<IPerson, "address"> = new Field(); // throws error
// idField.defaultValue = "2"; // throws error
idField.label = "myId";
idField.defaultValue = 2;
export default null;

// Lookup types can be useful when creating generic components for variable data types.
