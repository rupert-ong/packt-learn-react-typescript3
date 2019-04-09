export {};

interface IProduct {
  readonly name: string;
  unitPrice: number;
}

const table: IProduct = {
  name: 'Table',
  unitPrice: 500
};

// table.name = 'Best Table'; // throws error
