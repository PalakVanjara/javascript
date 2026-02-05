// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]
// create
// variable_name = [values]
let arr = [1, 2, 3, 4];
// access
// position = [0123]
// access
// array_name [position / index]
arr[0]
// modify
// array_name [position] = new value
arr[0] = 10;
arr[1]=20;
arr[2]=30;
arr[3]=40;

//------------------------------------------------ Array Methods:--------------------------------------------------
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
let a= [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in pachhal value add kare
a.push(700);
console.log(a);

// pop -> remove last value into array
let b = [10, 20, 30, 40];
b.pop();
console.log(b);

// self example
// use case -- enter new producats into existing producats list
console.log("-------product example--------");
let products=["Tv","Mobile","Refrigrator","Ac","Washing Machnie"];
console.log("Main array",products);
products.push("Microwavce");
console.log("push",products);

// use case --remove last producat you add into your list
products.pop();
console.log("Pop",products);

//shift --remove first value into Array
let c = [30, 40, 50, 60];
c.shift();
console.log("shift",c);

//unshift - add value into array first
let d = [52, 35, 65, 85];
d.unshift(20);
console.log("unshift",d);

// use case -remove old producat automatic after sometimes
products.shift();
console.log("remove 1 product",products);
// use case add a value into top of that data you receive
products.unshift("Laptop");
console.log("Add value to top",products);

// splice remove value into array - specific position and specific number of values
// into () first index(position), how many value you want to remove
let e= [50, 60, 30, 40, 10,20];
e.splice(3, 2);
// e.splice(3, 0, 50, 100)

// slice copy values from array - specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index include into copy
// end index not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);

// use case select msg and remove multiple msg at on click
let msg=["hello","world","in","house"];
msg.splice(1,3);

// use case -- copy specific data and save it into new variable
let msg2=["hello","world","in","house"];
let m_msg=msg2.slice(0,2);
// generate a report based on date and generate a file or save the file into your local machine
// splice vs slice
// splice - remove value into main array or modify new array
// slice copy value from main array and create a new array that hold the value that you can into 

// reverse --reverse value of array
let g = [25, 30, 35, 40, 85];
g.reverse();

// sort - set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();

// use case -- show latest update first into your fronted
let p=[30,23,56,46,9,70,2,5,39];
p.reverse().sort();


let h1 = [11, 62, 3, 4, 25];
console.log(h1);
let sr = h1.sort(
    function(a, b){
        return a - b; // ascending order
    })

// exercise
let tasks = ['Wake up', 'Brush teeth'];
tasks.push("Buy milk");//1

let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();//2

let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();//3

let playlist = ['Song B', 'Song C'];
playlist.unshift("song D");//4

let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1,1,"John","sara");//5

let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1,2);//6

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekends=days.slice(5,8);//7

let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();//8

let scores = [45, 12, 78, 34, 89];
scores.sort();//9

let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b); //10

let prod = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = prod.slice(0, 3);//11

let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');//12

let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse().push("final Step");//13

let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));//14

let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();//15

let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);//16

let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);//17

let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();//19

let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');//21

let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);//23

 let values1 = [100, 200, 300, 400, 500];
 values1.splice(1, 1, 'newValue');
 let values2 = [100, 200, 300, 400, 500];
let copy=values2.slice(0,2);//24

let arr2 = [1, 2, 3];
arr2.push(arr2.shift());//25

// For Each Loop
// for Each -- Array ni darek value mate loop chalse
let i= [10, 35, 40, 68];
i.forEach((val) =>{
let new_val = val + 10;
console.log(new_val);
});//ans:20,45,50,78

[5, 58, 42, "Hello"].forEach (val =>{
let new_arr = val + 2;
console.log(new_arr)
});//ans:7,60,44,Hello2

//.map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a blank array --only for understanding
let data =[10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map((val)=> {
    if (val > 15){
        return val;
    }
});

//new array ma store karva hoy
// if you want to show only electronics producat on your homepage
let marks = [10, 5, 20, 25, 15]
let final_marks = marks.map((val) =>{
    if(val == 5){
        return val+4;
    }
    // else{
    //     return val;
    // }
    return val;
});

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];
let expensive_laptops = laptops_price.filter((price) => {
    if (price > 30000)
    return true;
});
// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare
// use case -data ma thi specific data new array ma store karvo hoy based on condition

// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type)=>{
if (type === "Tablet" || type === "Mobile") 
    return true;
});

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [10, 68, 45, 58, 52, 48];
let final_price = total_price.reduce((accumulator,val) => { //((z,val))=>{} z is accumulator.
     return accumulator + val;
}, 0); // intial value of accumulator
// 0+ 10 => 10
// 10+68 => 78
// 78 + 45 => 123
console.log("Final Price:", final_price);
 
// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element callback no return value nahi
// never returns what you return inside it 
// returns the array element itself array --not return the array
//.find() stops at the first match
// It does not continue looping
let product_all = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product_all.find( (item) => {

  if (item === "Tablet") {
    return true;
  } else if (item === "Mobile") {
    return true;
  } else {
    console.log("can't find product"); // not working why??
    return false ;
  }
});
// use case -- data ma thi ek value find karvi hoy based on condition 
// ex. producat ma thi specific producat find karvo hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// check the list of visitors
let people = ["John", "Sara", "Mike", "Anna","David", "Sara"];
// find ---> you are looking for the first person
// named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check ij na kare)
let person = people.find((name) => name === "Sara");
console.log(person);
//filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
let Allsara = people.filter((name) => name === "Sara");
console.log(Allsara);

// some
// check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you valueits return true or false, find() return value of array
// give ans in true and false

let marks1 = [10, 20, 35, 90];
let any= marks1.some(function (val) {
    if (val > 85) return true;
    // if (val < 85) return "need improvement";
});
// use case -- check if some product are out of stock in you cart
// every
// check kare chhe ke array ma baddha j items
// condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to

let def = [20, 30, 40, 50];
let num = def.every(function(val){
    return val < 60;
})

// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile","Mobile"]
// .every()  --> item === "Mobile" --> false

// Destructuring operator -- give value to variable
// (ex. we don't use everytime arr[1], just save it
// into variable let j, k) = arr1)
let arr4 = [1, 2, 3, 4, 5]
let [j, ,k] = arr4; // --> desthucturing
console.log(j,k);
// let [x, , y, , z] = arr4;
// console.log(x,y,z); //1,3,5
let array_a=arr4[1];

let user_data=["abc","text@gmail.com","Male","surat"];
let [,x,y]=user_data;
console.log(x,y);

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3;  // - just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spred --> into Array