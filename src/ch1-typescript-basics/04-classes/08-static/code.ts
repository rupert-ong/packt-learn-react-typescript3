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

class OrderDetail {
  product: Product;
  quantity: number;

  static getTotal(
    unitPrice: number,
    quantity: number,
    discount: number
  ): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const total = OrderDetail.getTotal(500, 2, 0.1);
console.log(total);
