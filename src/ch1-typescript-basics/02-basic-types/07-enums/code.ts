// Default is 0 index
enum OrderStatus {
  Paid = 1,
  Shipped = 2,
  Completed = 3,
  Cancelled = 0
}

let status = OrderStatus.Shipped;
console.log(status); // outputs 2

export {};
