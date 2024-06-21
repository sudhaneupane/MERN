let product = [
  { name: "laptop", price: 100000 },
  { name: "mobile", price: 50000 },
  { name: "tv", price: 70000 },
];
let l = product.map((value, index) => {
  return value.name;
});
console.log(l);

let li = product.map((value, index) => {
  return value.price;
});
console.log(li);

let f = product.filter((value, index) => {
  return value.name;
});
console.log(f);

let ma = product.map((value, index) => {
  return { [value.name]: value.price };
});
console.log(ma);
