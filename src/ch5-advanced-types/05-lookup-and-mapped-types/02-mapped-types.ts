// Mapped types let us create new types from an existing type's properties
// They allow us to specifically define the properties in the new type by mapping them from the existing property.

// Original
interface IPerson {
  id: number;
  name: string;
}

// New mapped type
type ReadonlyPerson = { readonly [P in keyof IPerson]: IPerson[P] };

// [P in keyof IPerson]:
// Iterates through all the properties in IPerson and assigns each one to P to create the type.
// So, the type that is generated in the previous example is the following:
// type ReadonlyPerson = { readonly id: number, readonly name: string };

let billy: ReadonlyPerson = {
  id: 1,
  name: "Billy"
};
// billy.name = "Sally"; // error: name is readonly

// Standard way of making readonly type
let sally: Readonly<IPerson> = {
  id: 2,
  name: "Sally"
};
// sally.name = "Billy"; // error: name is readonly

// Another mapped type (make all properties a string)
type Stringify<T> = { [P in keyof T]: string };

let sam: Stringify<IPerson> = {
  id: "1",
  name: "Sam"
};

export default null;

// So, mapped types are useful in situations when we need a new type that is based on an existing type.
// Along with Readonly<T>, there are quite a few standard mapped types in TypeScript, such as Partial<T>,
// which creates a mapped type making all the properties optional.
