class Product {
  name: string;

  private _unitPrice: number;

  get unitPrice(): number {
    return this._unitPrice || 0;
  }

  set unitPrice(value: number) {
    this._unitPrice = value > 0 ? value : 0;
  }
}

const table = new Product();
table.name = 'Table';
console.log(table.unitPrice);
table.unitPrice = -10;
console.log(table.unitPrice);
