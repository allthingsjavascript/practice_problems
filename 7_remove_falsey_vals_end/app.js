'use strict';

/* const removeFalseys = function(arry) {
  let newArray = [];
  for (let elem of arry) {
    if (elem) newArray.push(elem);
  };
  return newArray;
}; */

/* const removeFalseys = function(arry) {
  let newArray = [];
  arry.forEach(elem => elem && newArray.push(elem));
  return newArray;
}; */

const removeFalseys = function(arry) {
  return arry.filter(elem => elem);
};

















// Testing removeFalseys...

console.assert(JSON.stringify(removeFalseys([50, 60, 90, 100, 20,,false, undefined])) === JSON.stringify([50, 60, 90, 100, 20]), `removeFalseys first attempt!`);
console.assert(JSON.stringify(removeFalseys([null, 0, 0, 'false', false, true])) === JSON.stringify(['false', true]), `removeFalseys second attempt!`);
console.assert(JSON.stringify(removeFalseys([null, undefined, 0, '', NaN, 0n],)) === JSON.stringify([]), `removeFalseys third attempt!`);
console.assert(JSON.stringify(removeFalseys(['false', true, 'false', 'true', true])) === JSON.stringify(['false', true, 'false', 'true', true]), `removeFalseys fourth attempt!`);

