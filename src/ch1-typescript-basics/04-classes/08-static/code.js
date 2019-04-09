// run tsc code --target es6
class Product {
  get unitPrice() {
    return this._unitPrice || 0;
  }
  set unitPrice(value) {
    this._unitPrice = value > 0 ? value : 0;
  }
}
class OrderDetail {
  static getTotal(unitPrice, quantity, discount) {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}
const total = OrderDetail.getTotal(500, 2, 0.1);
console.log(total);
