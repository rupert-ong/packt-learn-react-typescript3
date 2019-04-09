// instanceof is great for narrowing down the type if we are dealing with classes.
class Person {
  id: number;
  firstName: string;
  surname: string;
}

class Company {
  id: number;
  name: string;
}

type PersonOrCompany = Person | Company;

function logName(personOrCompany: PersonOrCompany) {
  /*
  if ("firstName" in personOrCompany) {
    console.log(
      `Using the in keyword: ${personOrCompany.firstName} ${
        personOrCompany.surname
      }`
    );
  }*/
  if (personOrCompany instanceof Person) {
    console.log(`${personOrCompany.firstName} ${personOrCompany.surname}`);
  } else {
    console.log(personOrCompany.name);
  }
}

export default null;
