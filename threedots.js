const ages = [13, 19, 10, 15, 19];
const ages2 = [12, 18];
const ages3 = [22, 26, 25, 24];
const allAges = ages.concat(ages2).concat([7]).concat(ages3);
const allAges2 = [...ages, ...ages2, 8, ...ages3];
// console.log(allAges2)

const business = 640;
const minister = 440;
const sochib = 760;
const takapoisha = [550, 750, 950, 50];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takapoisha);
console.log(maximum)