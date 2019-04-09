// in keywords can be used to check if a property exists in an object or class
interface IPerson {
  id: number;
  firstName: string;
  surname: string;
}

interface ICompany {
  id: number;
  name: string;
}

type PersonOrCompany = IPerson | ICompany;

function logName(personOrCompany: PersonOrCompany) {
  if ("firstName" in personOrCompany) {
    console.log(`${personOrCompany.firstName} ${personOrCompany.surname}`);
  } else {
    console.log(personOrCompany.name);
  }
}
