
/* const sumEverything = function() {
  let tot = 0;
  for (let i of arguments) {
    tot += i
  }
  return tot;
}; */

/* const sumEverything = function() {
  return Array.from(arguments).reduce((tot, num) => tot + num, 0);
}; */

const sumEverything = function(...nums) {
  return nums.reduce((tot, num) => tot + num, 0);
};













// Testing sumEverything...

console.assert(sumEverything(5, 5, 5, 5, 0) === 20, `summing everything first attempt!`);
console.assert(sumEverything(1, 2, 3, 4, 5, 6, 7) === 28, `summing everything second attempt!`);
console.assert(sumEverything(-1, -5, 10, 500, 60) === 564, `summing everything third attempt!`);
