
const multiplying = function(num1) {
  return (num2) => {
    return (num3) => num1 * num2 * num3;
  };
};

let result = multiplying(3)(5)(2);











// Testing multiplying...

console.assert(multiplying(3)(5)(2) === 30, `multiplying first attempt!`);
console.assert(multiplying(6)(10)(0) === 0, `multiplying second attempt!`);
console.assert(multiplying(1)(12)(5) === 60, `multiplying third attempt!`);
