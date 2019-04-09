class Product {
  name: string;
  unitPrice: number;
}

interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

// implementing interface in class(es) allows us to reuse the interface over and over again
class OrderDetail implements IOrderDetail {
  /* 
  Can omit these definitions by using the public modifiers in the constructor
  product: Product;
  quantity: number;
  */
  constructor(public product: Product, public quantity: number = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotal(discount: number) {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const table = new Product();
table.name = 'Table';
table.unitPrice = 500;

const orderDetail = new OrderDetail(table);
