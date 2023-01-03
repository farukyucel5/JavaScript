// switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements

let grade = "A";

switch(grade){
 
    case "A":
      console.log("You did great!");
      break;
   
    case "B":
      console.log("You did good!");
      break;
 
    case "C":
      console.log("You did okay!");
      break;
 
    case "D":
      console.log("You passed ... barely");
      break;
 
    case "F":
      console.log("YOU FAILED!");
      break;
 
    default:
      console.log(grade, "is not a letter grade");
}

/*
let grade = 95;

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed ... barely");
        break;

    case grade > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}
*/

// = assignment operator
// == comparison operator
// === strict equality operator

let x = "3.14";

if(x === 3.14){
    console.log("That is pi");
}
else{
    console.log("That is NOT pi");
}

// while loop = repeat some code 
//                       while some condition is true
//                       potentially infinite

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
