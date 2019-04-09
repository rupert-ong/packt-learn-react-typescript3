interface IProduct {
  name: string;
  unitPrice: number;
}

interface IOrderDetail {
  product: IProduct;
  quantity: number;
  // define method (not implementation)
  getTotal(discount: number): number;
}

const table: IProduct = {
  name: 'Table',
  unitPrice: 500
};

const tableOrder: IOrderDetail = {
  product: table,
  quantity: 2,
  getTotal: function(discountPercentage: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return priceWithoutDiscount - discountAmount;
  }
};
