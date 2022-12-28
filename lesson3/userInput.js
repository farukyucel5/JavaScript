// How to accept user input

// EASY WAY with a window prompt

let username1 = window.prompt("What's your name?");
console.log(username1);

// DIFFICULT WAY HTML textbox

let username;

document.getElementById("mybutton").onclick = function(){
    
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "Hello " + username;
}

// Type Conversion = change the datatype of a value to another
//                                   (strings, numbers, booleans)

let age = window.prompt("How old are you?");

//console.log(typeof age);
age = Number(age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");


/*let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/



// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);
