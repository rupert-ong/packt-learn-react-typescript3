/*
  flags
  --target es6
  --outDir dist
  --module (import/export module)
  --allowJS (to use transpiler on vanilla JavaScript)
  --noImplicitAny (force user to explicity declare 'any' type)
  --noImplicitReturns (all code paths in a function must return a value if not void)
  --sourceMap
  --moduleResolution (classic or node). ES6 is classic by default. Set to node (look in node_modules) if using 3rd party npm packages.
*/

export interface Product {
  name: string;
  unitPrice: number;
}

export class OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount?: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
  // noImplicitAny example
  doSomething(input: { something: () => void; result: string }) {
    input.something();
    return input.result;
  }
  // noImplicitReturns example
  getTotal2(discount: number): number {
    if (discount) {
      const priceWithoutDiscount = this.product.unitPrice * this.quantity;
      const discountAmount = priceWithoutDiscount * discount;
      return priceWithoutDiscount - discountAmount;
    } else {
      // We forgot about this branch!
    }
  }
}
