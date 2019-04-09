abstract class Product {
  name: string;
  unitPrice: number;
  abstract delete(): void;
}

class Food extends Product {
  private deleted: boolean;

  constructor(public bestBefore: Date) {
    super();
  }

  delete() {
    this.deleted = false;
  }
}

const eggs = new Food(new Date(2020, 10, 9));
eggs.name = 'eggs';
eggs.unitPrice = 4.35;
// console.log(eggs.deleted); // throws accessibility error
