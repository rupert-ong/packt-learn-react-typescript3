class List<T> {
  private data: T[] = [];

  public getList(): T[] {
    return this.data;
  }

  public add(item: T) {
    this.data.push(item);
  }

  public remove(item: T) {
    this.data = this.data.filter((dataItem: T) => !this.equals(item, dataItem));
  }

  private equals(obj1: T, obj2: T) {
    return Object.keys(obj1).every(key => {
      return obj1[key as keyof T] === obj2[key as keyof T];
    });
  }
}

interface IPerson {
  id: number;
  name: string;
}

const billy: IPerson = { id: 1, name: "Billy" };
const people = new List<IPerson>();
people.add(billy);
people.remove(billy);

// people.add({name: "Sally"}); // compilation error

const items = people.getList();

export default null;
