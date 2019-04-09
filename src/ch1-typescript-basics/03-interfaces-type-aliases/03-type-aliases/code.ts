// works like an alias
type GetTotal = (discount: number) => number;

interface IOrderDetail {
  product: string;
  quantity: number;
  getTotal: GetTotal;
}

// Can also replace interface with type (types CANNOT be extended though). Better to use interface?
type Product = {
  name: string;
  unitPrice: number;
};

type OrderDetail = {
  product: Product;
  quantity: number;
  getTotal: GetTotal;
};

const table: Product = {
  name: 'Table',
  unitPrice: 500
};

const orderDetail: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
};

export {};
