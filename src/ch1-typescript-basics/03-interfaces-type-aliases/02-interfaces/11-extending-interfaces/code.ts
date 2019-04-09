interface IProduct {
  name: string;
  unitPrice: number;
}

interface IDiscountCode {
  code: string;
  percentage: number;
}

interface IProductWithDiscountCodes extends IProduct {
  discountCodes: IDiscountCode[];
}

const table: IProductWithDiscountCodes = {
  name: 'Table',
  unitPrice: 500,
  discountCodes: [
    { code: 'SUMMER10', percentage: 0.1 },
    { code: 'BRFI', percentage: 0.2 }
  ]
};

export {};
