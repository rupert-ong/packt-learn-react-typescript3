// Type guards allow us to narrow down the specific type of an object within a conditional branch of code.
// They are useful when working with union types, when we need to implement a branch of code that deals with a specific type in the union.

type StringOrStringArray = string | string[];

function first(stringOrArray: StringOrStringArray): string {
  if (typeof stringOrArray === "string") {
    return stringOrArray.substr(0, 1);
  } else {
    return stringOrArray[0];
  }
}

console.log(first("The"));
console.log(first(["The", "cat"]));

function firstEnhanced(stringOrArray: StringOrStringArray): string {
  if (typeof stringOrArray === "string") {
    return stringOrArray.substr(0, 1);
    // typeof natively only works with JavaScript types, not custom ones
    // typeof stringOrArray === "string[]" will throw a compilation error
  } else if (typeof stringOrArray === "object") {
    return stringOrArray[0];
  } else {
    const shouldNotReach: never = stringOrArray;
  }
}
