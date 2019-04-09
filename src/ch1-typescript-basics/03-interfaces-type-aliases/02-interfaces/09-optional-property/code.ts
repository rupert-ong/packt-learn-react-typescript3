export {};

interface IProduct {
  name: string;
  unitPrice: number;
}

interface IOrderDetail {
  product: IProduct;
  quantity: number;
  dateAdded?: Date;
  getTotal(discount?: number): number;
}

const table: IProduct = {
  name: 'Table',
  unitPrice: 500
};

const tableOrder: IOrderDetail = {
  product: table,
  quantity: 2,
  getTotal: function(discount?: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
};

tableOrder.getTotal();
