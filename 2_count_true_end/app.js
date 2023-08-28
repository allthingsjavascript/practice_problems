
/* const countTheTrues = function(arry) {
    let tot = 0;
    for (let elem of arry) {
      //if (elem) tot++;
      tot += elem;
    };
    return tot;
}; */

/* const countTheTrues = function(arry) {
  let tot = 0;
  arry.forEach((elem) => tot += elem);
  return tot;
}; */

/* const countTheTrues = function(arry) {
  let truesArray = arry.filter((elem) => elem);
  return truesArray.length;
}; */

const countTheTrues = function(arry) {
  return arry.reduce((acc, elem) => acc + elem, 0);
};















// Testing countTheTrues...
console.assert(countTheTrues([true, true, true, true, true, true]) === 6, `countTheTrues first attempt!`);
console.assert(countTheTrues([false, false, false, false, false, false, true]) === 1, `countTheTrues second attempt!`);
console.assert(countTheTrues([]) === 0, `countTheTrues third attempt!`);
console.assert(countTheTrues([false, true, false, true, true]) === 3, `countTheTrues fourth attempt!`);
console.assert(countTheTrues([false]) === 0, `countTheTrues fifth attempt!`);
