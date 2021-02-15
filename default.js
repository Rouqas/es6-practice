function add(num1, num2 = 20){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // or
    // num2 = num2 || 10;
    return num1 + num2;
}
const total = add(5, 19);
console.log(total);