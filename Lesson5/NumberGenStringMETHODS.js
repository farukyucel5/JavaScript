let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}


// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);

// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

firstName = fullName.slice(0, 5);
lastName = fullName.slice(6);
console.log(firstName);
console.log(lastName);

fullName="Faruk Yucel";

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


// method chaining = calling one method after another
//                   in one continuous line of code

let userName1 = "bro";

let letter = userName1.charAt(0).toUpperCase().trim();

console.log(letter);

// if statement = a basic form of decision making
//                           if a condition is true, then do something
//                           if not, then don't do it!

let age = 21;

if(age >= 65){
    console.log("You are a senior citizen!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
}


let online = false;

if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}
