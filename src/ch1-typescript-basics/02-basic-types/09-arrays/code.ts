const numbers: number[] = [];
numbers.push(1);
numbers.forEach(function(num) {
  console.log(num);
});

const inferredNumbers = [1, 3, 5];
for (let i in inferredNumbers) {
  console.log(inferredNumbers[i]);
}
