console.log("Hello World");

var name = "Faizan"; //var is function-scoped and can be re-declared and updated.
let age = 25; //let is block-scoped and can be updated but not re-declared.
const isStudent= true; //const is block-scoped and cannot be updated or re-declared.

console.log(name);
console.log(age);
console.log(isStudent);

let a = 20;
let b = 20;
console.log("the sum of a and b is :", a + b)
console.log("the substraction of a and b is :", a - b)
console.log("the multiplication of a and b is :", a * b)
console.log("the division of a and b is :" , a / b)

let age1 = 70;

if(age1 < 20){
    console.log("You are young");
}
else if (age1 >= 20 && age1 <= 65){
    console.log("You are middle-aged");
}
else{
    console.log("you are senior")
}