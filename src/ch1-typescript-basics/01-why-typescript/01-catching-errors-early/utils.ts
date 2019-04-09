interface IProduct {
  name: string;
  unitPrice: number;
}

function calculateTotalPrice(
  product: IProduct,
  quantity: number,
  discount: number
) {
  var priceWithoutDiscount = product.unitPrice * quantity;
  var discountAmount = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}
