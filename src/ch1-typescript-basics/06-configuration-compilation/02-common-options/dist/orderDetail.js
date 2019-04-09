// tsc orderDetail --target es6 --outDir dist
export class OrderDetail {
  getTotal(discount) {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}
