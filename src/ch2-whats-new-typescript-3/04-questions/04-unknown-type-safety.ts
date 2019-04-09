/*
// We have a function called getData that calls a web API to get some data. 
// The number of different API resources is still growing, so we've chosen to use any as the return type:

function getData(resource: string): any {
  const data = ... // call the web API
  if (resource === "person") {
    data.fullName = `${data.firstName} ${data.surname}`;
  }
  return data;
}
// How can we make getData more type-safe by leveraging the unknown type?

*/

class Person {
  firstName: string;
  surname: string;
  fullName: string;
}

function getData(resource: string): unknown {
  const data = {};
  if (data instanceof Person) {
    data.fullName = `${data.firstName} ${data.surname}`;
  }
  return data;
}
