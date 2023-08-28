
const countTheTrues = function(arry) {
  
};













// Testing countTheTrues...

console.assert(countTheTrues([true, true, true, true, true, true]) === 6, `countTheTrues first attempt!`);
console.assert(countTheTrues([false, false, false, false, false, false, true]) === 1, `countTheTrues second attempt!`);
console.assert(countTheTrues([]) === 0, `countTheTrues third attempt!`);
console.assert(countTheTrues([false, true, false, true, true]) === 3, `countTheTrues fourth attempt!`);
console.assert(countTheTrues([false]) === 0, `countTheTrues fifth attempt!`);
