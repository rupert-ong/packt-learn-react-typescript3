// Add the overload signatures before the main definition to bring up
// the appropriate intellisense when using string or array

/**
 * Removes spaces from a string
 * @param string
 */
function condense(string: string): string;
/**
 * Removes spaces in each string of the passed array
 * @param array
 */
function condense(array: string[]): string[];
function condense(stringOrArray: string | string[]): string | string[] {
  if (typeof stringOrArray === "string") {
    return stringOrArray.split(" ").join("");
  } else {
    return stringOrArray.map(item => item.split(" ").join(""));
  }
}

const condenseArrayTest = condense([
  "The cat in the hat",
  "The cat in the tree"
]);
const condensedText = condense("The cat in the tree");
