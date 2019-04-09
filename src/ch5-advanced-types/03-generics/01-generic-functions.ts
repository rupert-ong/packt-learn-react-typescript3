interface IPerson {
  id: number;
  name: string;
}

interface ICompany {
  id: number;
  name: string;
}

function getData<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

async function getAsyncData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    alert("error");
    return null;
  }
}

// Define what <T> is in method call, and the return type (Promise<T>) will take in the type
getData<IPerson>("/people/1")
  .then(person => console.log(person))
  .catch(error => console.log(error));

getData<ICompany>("/company/1")
  .then(company => console.log(company))
  .catch(error => console.log(error));

getAsyncData<IPerson>("/people/2")
  .then(person => console.log(person))
  .catch(error => console.log(error));
