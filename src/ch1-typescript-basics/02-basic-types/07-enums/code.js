"use strict";
exports.__esModule = true;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Paid"] = 0] = "Paid";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Completed"] = 2] = "Completed";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
var status = OrderStatus.Shipped;
console.log(status);
