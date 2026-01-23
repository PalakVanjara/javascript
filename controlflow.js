// control flow statements in JavaScript

// if-else statement (if,if else, if else-if else)
// if (condition) {}) --> condition true hoy to {} code run

if (12<13){
    console.log(true);
}
if(15<13){
    console.log(true);
}// condition is false that why if statement not run
if(!12){
    console.log("Number");
}
if(!0){
    console.log("Zero");
}
//---------------------------------------------------------------------
// if-else statement

if (12<13){
    console.log(true);
}else{
    console.log(false);
}

if(15<13){
    console.log(true);
}// condition is false that why if statement not run
else{
    console.log(false);
}// if if statement condition is false then run this code

if(!12){
    console.log("Number");
}else{
    console.log("Not A Number");
}
//---------------------------------------------------------------------
// if else-if else statement

let loggedIn = true;
let admin = false;

if (loggedIn && admin){
    console.log("Welcome Admin");
}else if(loggedIn){
    console.log("Welcome User");
}else{
    console.log("go to login page");
}

let day="Monday";
let hour=10;

if(day=="Monday" && hour>=10){
    console.log("We are open");
}
else if(day=="Monday" || hour<10){
    console.log("We are closed");
}
else{
    console.log("Invalid day or hour");
}
//---------------------------------------------------------------------
// switchcase statement
switch("First50")// value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log(" 50% off on first order");
        break;
    case "BOGO":
        console.log(" Buy One Get One ");
        break;
    case "BlackFriday":
        console.log(" it's Black Friday Sale - get at rs.50 ");
        break;
    default:
        console.log(" Offer not valid ");
}   
switch("minute")// value --> case value sathe match karshe ane code run thase
{
    case "minute":
        console.log(" it's a minute");
        break;
    case "seconds":
        console.log(" it's a seconds ");
        break;
    case "hour":
        console.log(" it's a hour ");
        break;
    default:
        console.log(" not valid ");
}   
//---------------------------------------------------------------------
//Early return pattern
function score0(value){
    if(value>90){
        return "value is more than 90";
    }else if(value<80){
        return "value is less than 80";
    }else if (value <70){
        return "value is less than 70";
    }else if(value<60){
        return "value is less than 60";
    }else{
        return "value is less than 60";
    }
}
console.log(score0(55));

function score1(value) {
    if (value >= 80) {
        return "value 80 karta moti chhe";
    } else if (value >= 70) {
        return "value 80 karta nani pan 70 karta moti chhe";
    } else if (value >= 60) {
        return "value 70 karta nani pan 60 karta moti chhe";
    } else {
        return "value 60 karta nani chhe";
    }
}
console.log(score1(55));


function score2(value){
    if(value>90) return "value is more than 90";
    if(value<80) return "value is less than 80";
    if (value <70) return "value is less than 70";
    if(value<60) return "value is less than 60";
    return "value is less than 60";

}
// score1(85);
console.log(score2(85));

// exmaple 1 to 3
let x = 2;
switch(x){
    case 2:
    console.log("Two");
    break;
    case 3:
    console.log("Three");
}

let score = prompt("Enter your score:");
score = Number(score); // convert string to number
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score < 90) {
        return "A";
    } else if (score >= 70 && score < 80) {
        return "B";
    } else if (score >= 60 && score < 70) {
        return "C";
    } else if (score >= 33 && score < 60) {
        return "D";
    } else if (score >= 0 && score < 33) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}
console.log(getGrade(score));

function game(value1,value2){
    if (value1==="rock" && value2==="scissor"){
        console.log("Rock wins");
    }else if(value1==="paper" && value2==="rock"){
        console.log("Paper wins");
    }else if(value1==="scissor" && value2==="paper"){
        console.log("Scissors wins");
    }else{
        console.log("It's a tie");
    }
}
