let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumbs: true,
  __proto__: animal,
};

console.log(rabbit.walk());
console.log(rabbit);
