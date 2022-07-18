function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Object.getPrototypeOf(rabbit).sayHi();

console.log(rabbit);

// Get sayHi() function
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();
