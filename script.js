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

let age1 = 98;

if (age1 < 18){
    console.log("You are Teenager")
}

else if (age1 >= 18 && age1 <= 60){

    console.log("You are an adult")
}
else {
    console.log("You are a Cinior Citizen")
}

let number = -10;

if (number > 0){
    console.log("number is positive")
}
else if (number < 0){
    console.log("number is negetive")
}
else{
    console.log("number is zero")
}

//objects
const student ={
    Name : "Rehan",
    Age1 : 25,
    isStudent : true,
    isPass: true,
};
