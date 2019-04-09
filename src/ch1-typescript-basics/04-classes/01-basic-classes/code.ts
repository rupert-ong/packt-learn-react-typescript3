class Product {
  name: string;
  unitPrice: number;
}

// No need for type annotation as it is inferred by the constructor
const table = new Product();
table.name = 'Table';
table.unitPrice = 500;

class OrderDetail {
  product: Product;
  quantity: number;

  // Can define implementation of a method in TypeScript class definition
  getTotal(discount?: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
}

const orderDetail = new OrderDetail();
orderDetail.product = table;
orderDetail.quantity = 2;
console.log(orderDetail.getTotal(0.1));
