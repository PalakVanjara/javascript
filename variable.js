//words vs keywords
                    // varaible
//variable names can contain letters, digits, underscores, and dollar signs
//variable names must begin with a letter, underscore, or dollar sign
//variable names are case sensitive
//variable names cannot be the same as JavaScript reserved keywords

//var,let,const --line by comaprison
//var(ES5)
var a="temp";
var _abc="hello";
var $123="Hello";
//var 123="hello"; //invalid
b=24; //valid but not recommended

//let(ES6)
let name="palak";

//const(ES6)
const temp_const="Hello World";

//declaration vs initialization 
var d; //declaration
var temp_d=12; //declaration + initialization
//var add value to windows
//var is function scoped
//can be redeclared and reassigned
//let not store value in windows

var uame="palak";
let uname1="palak";

//Reassignment,redeclaration
var temp=12;
temp="number"; //reassignment
var temp="text"; //redeclaration

//let temp_a=24;
//var temp_a=23;  ////you can't reclare let variable
const temp_b="name";
//temp_b=" username";//you can't reassign const variable
//---------------------------------------------------------------------------------
//scope(global,block,function)
var e=23; //global scope
console.log("Global scope"+e);
{
    var e=25; //block scope
    console.log("Block scope"+e);
}
function abc(){
    var e =24; //functional scope
    console.log("Functional scope"+e);
}
abc();
console.log("outside "+e);

let f=23;//global scope
console.log("Global scope"+f);
{
    let f=27; //block scope
    console.log("Block scope"+f);
}
function abc(){
    let f=30; //functional scope
    console.log("Functional scope"+f);
}
abc();
console.log("outside let"+f);

// let scope vs var scope differences :
// let print global scope value but var print block scope value.
// ---------------------------------------------------------------------------------

// Temporal Dead Zone (TDZ)
console.log(h);
var h = 24; //undefined 

// console.log(g);
//console.log(j);
//let j = 12; //error

// Hoisting Imapact
// Hoisting --> when your create a variable into is that break
// into two part first is declare part that go to up and there
// initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined;

//exercise
//1
// console.log(nm)
// let nm="palak";

//2
// console.log(num);
// var num="hello";

//3
// var x=1;
// {
//     var x=2;
//     console.log(x);
// }

//4
// let a1=10;
// {
//     let a1=20;
//     console.log("inside",a1);
// }
// console.log("outside",a1);

//5
const person = 
{
    name: "demo"
};
person.name = "user";
// person = {}; // This will cause an error because const variables cannot be reassigned
console.log(person.name);