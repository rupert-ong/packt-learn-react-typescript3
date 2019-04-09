"use strict";
/*
  flags
  --target es6
  --outDir dist
  --module (import/export module)
  --allowJS (to use transpiler on vanilla JavaScript)
  --noImplicitAny (force user to explicity declare 'any' type)
  --noImplicitReturns (all code paths in a function must return a value if not void)
  --sourceMap
*/
exports.__esModule = true;
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    OrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice * this.quantity;
        var discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    };
    // noImplicitAny example
    OrderDetail.prototype.doSomething = function (input) {
        input.something();
        return input.result;
    };
    // noImplicitReturns example
    OrderDetail.prototype.getTotal2 = function (discount) {
        if (discount) {
            var priceWithoutDiscount = this.product.unitPrice * this.quantity;
            var discountAmount = priceWithoutDiscount * discount;
            return priceWithoutDiscount - discountAmount;
        }
        else {
            // We forgot about this branch!
        }
    };
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=orderDetail.js.map