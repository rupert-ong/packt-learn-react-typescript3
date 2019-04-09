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

// When we can't use other type guards, create a function with the return type as a type predicate.
function isPerson(
  personOrCompany: PersonOrCompany
): personOrCompany is IPerson {
  return "firstName" in personOrCompany;
}

function isCompany(
  personOrCompany: PersonOrCompany
): personOrCompany is ICompany {
  return "name" in personOrCompany;
}

// We can then use these user defined type guards in our functions

export default null;
