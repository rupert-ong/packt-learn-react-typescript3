let product: [string, number];
product = ['Table', 500];

for (let element in product) {
  console.log(product[element]);
}

product.forEach(function(element) {
  console.log(element);
});
