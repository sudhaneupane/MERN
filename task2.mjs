/*show a product whose price is greater than 2000
[
    'MacBook Pro cost NRs. 100000 and its category is Laptops',
    'Nike cost NRs. 5000 and its category is Running Shoes',
    'Dell XPS cost NRs. 120000 and its category is Laptops'
  ]  */

const products = [
  {
    id: 1,
    title: "MacBook Pro",
    category: "Laptops",
    price: 100000.0,
    description: "A high-performance laptop.",
    manufactureDate: "2023-05-15T08:30:00",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Nike",
    category: "Running Shoes",
    price: 5000,
    description: "Running shoes designed for speed and comfort.",
    manufactureDate: "2023-02-20T14:45:00",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Python",
    category: "Books",
    price: 500,
    description: "A language for AI",
    manufactureDate: "1925-04-10T10:10:00",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Javascript",
    category: "Books",
    price: 700,
    description: "A language for Browser",
    manufactureDate: "1995-12-04T12:00:00",
    isAvailable: false,
  },
  {
    id: 5,
    title: "Dell XPS",
    category: "Laptops",
    price: 120000.0,
    description: "An ultra-slim laptop with powerful performance.",
    manufactureDate: "2023-04-25T09:15:00",
    isAvailable: true,
  },
];

let output = products.filter((value, index) => {
  if (value.price >= 2000) {
    return value;
  }
});
console.log(output);

let desiredOutput = output.map((value, index) => {
  console.log(
    `${value.title} costs ${value.price} ${value.description} Category is ${value.category} `
  );
});
// console.log(desiredOutput);
