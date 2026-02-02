 //function 
 // what ->function is a block of code that performs specific tasks.
 //why ->to avoid code repetition and to make  code modular and reusable.
 //how-> function keyword ,name,parameters,body , return statement.
 // type of functions:
// function name(params) {}  --> function declaration
function abc() {}

// let fnc = function (){}  --> function expression
let fnc = function () {};

// let fnc = () => {}  --> arrow function  --> fat arrow function
let fnc1 = () => {};

// function temp_cart(){
//     console.log("adding product");
// }
// temp_cart();
// temp_cart();
// temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli(pass) kareli values)
// ----------------function cart (product) {
// // product - params
// console.log("product",product)
// }
// cart("Mobile");//mobile-args
// cart("Laptop");
// cart("Tablet");

//------------------- function cart2 (product,price) {
// // product - params
// console.log("ProductName and Price:",product,price)
// }
// cart2("Mobile-",12000);//mobilename and price- two args pass
// cart2("Laptop-",24000);
// cart2("Tablet-",39000);

//----------------------convert into function
//let cart =function(){}

// let cart=function(product){
// // product - params
// console.log("product",product)
// }
// cart("Mobile");//mobile-args
// cart("Laptop");
// cart("Tablet");

//---------------------convert into arrow function
// let cart2=(product)=>{
// // product - params
// console.log("product",product)
// }
// cart2("Mobile");//mobile-args
// cart2("Laptop");
// cart2("Tablet");

// Default, rest and spread parameters in function
// default
function abc(v1, v2){
console.log(v1, v2);
}
abc(20, 21);
function cart3(product = "product", price = "price") {
console.log(product, price)
}
cart3("mobile",2000);
cart3();
//rest -> Jayre function ma multiple arguments pass karva to vadhare params banava
//pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest --->
//jo funtion na parameter ni anadar lakhvama aave chhe)
function abcd (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
abcd();

function abcd1(...numbers) {
console.log(numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2 (v1, v2, ...numbers) 
{
console.log(v1, v2, numbers);
}
abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//return and early return
//return->function mathi value bahar mokalva mate
// early return --> function mathi jaldi bahar nikalva mate

function getValue1 (value) {
if (value < 25) return "Value is less than 25";
else if (value < 50) return "Value is less than 50";
else if (value < 75) return "Value is less than 75";
else if (value < 100) return "Value is less than 100";
return "Value is 100 or more";
}
let result = getValue1(100);
console.log(result);

// first Class Function and their types:
// function can be treated as variables
// let temp_a= function(){} - first class function
// const cart5 = function (producat, price) {
// console.log('Adding ${producat} at ${price}');
// };
// cart5("function expression S25 ultra", 69000);
// // function can be passed as arguments to other functions
// function temp_b(fnc) {}
// fnc();