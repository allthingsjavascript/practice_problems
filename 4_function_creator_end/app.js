
const createMultFunction = function(mainNum) {
  return function(num) {
    return mainNum * num;
  }
};


console.log(createMultFunction(100)(3));
console.log(createMultFunction(100).toString());










// Testing createMultFunction...

console.assert(createMultFunction(5)(4) === 20, `Multiplying by 5 function!`);
console.assert(createMultFunction(0)(100) === 0, `Multiplying by 0 function!`);
console.assert(createMultFunction(-5)(5) === -25, `Multiplying by -5 function!`);
console.assert(createMultFunction(0.25)(10) === 2.5, `Multiplying by 0.25 function!`);
