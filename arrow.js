// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// single line arrow function
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give6 = () => 6;
const result = add(19, 29);
console.log(result)
const result2 = give6();
console.log(result2)

//multiline arrow function
const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(6, 9);
console.log(result3)

