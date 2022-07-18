let john = {
  name: "john",
};

let hihi = {
  name: "john",
};

let weakMap = new WeakMap();
weakMap.set(john, "hi");
// john = null;

weakMap.set(hihi, "kkkk");

console.log(weakMap);
