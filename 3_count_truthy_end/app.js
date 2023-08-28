
/* const countTruthys = function(arry) {
  let tot = 0;
  for (let elem of arry) {
    if (elem) tot++;
    //tot += elem;
  };
  return tot;
}; */

/* const countTruthys = function(arry) {
  let tot = 0;
  arry.forEach((elem) => {
    if (elem) tot++;
  });
  return tot;
}; */

/* const countTruthys = function(arry) {
  let truesArray = arry.filter((elem) => elem);
  return truesArray.length;
}; */

/* const countTruthys = function(arry) {
  return arry.reduce((acc, elem) => {
    if (elem) {
      return ++acc;
    } else {
      return acc;
    }
  }, 0);
}; */

const countTruthys = function(arry) {
  return arry.reduce((acc, elem) => elem ? ++acc : acc, 0);
};













// Testing countTruthys...

console.assert(countTruthys([1, 1, 'true', true, 'true', true]) === 6, `countTruthys first attempt!`);
console.assert(countTruthys([undefined, null, 0, 0, false, false, true]) === 1, `countTruthys second attempt!`);
console.assert(countTruthys([]) === 0, `countTruthys third attempt!`);
console.assert(countTruthys([null, 'true', null, 'true', 'true']) === 3, `countTruthys fourth attempt!`);
console.assert(countTruthys([false]) === 0, `countTruthys fifth attempt!`);
