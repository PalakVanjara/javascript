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

// exercise::::::::::::::::::::::::::::::::::
//map()---------------------------------------------
const step = [1000, 2000, 3000];
function doubleSteps(step) {
  return step * 2;}
const newSteps = step.map(doubleSteps);//1


const minutes = [1, 5, 10];
const seconds = minutes.map(function(min) {
  return min * 60;
});//2

const price = [200, 350, 500];
const finalPrices = price.map(price => price + 50);//3

const mark = [35, 72, 88, 40];
function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = mark.map(getGrade);//4

const name1 = ['rahul', 'neha', 'amit'];
const formattedNames = name1.map(name1 =>
  name1[0].toUpperCase() + name1.slice(1)
);//5

const price1 = [500, 1000, 1500];
function applyDiscount(price1) {
  return price1 - price1 * 0.10;
}
const discounted = price1.map(applyDiscount);//6

const score = [45, 60, 85];
const finalScores = score.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});//7

const celsius = [0, 20, 30];
function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);//8

const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);//9

const balances = [500, 1200, 300];
const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);//10

//filter()------------------------------------------------
const number1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = number1.filter(num => num % 2 === 0);//1

const ages = [2, 19, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);//2

const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');//3

const markss = [35, 72, 88, 40, 25];
const passedStudents = markss.filter(markss => markss >= 40);//4

const pricess = [199, 499, 999, 1499, 299];
const affordable = pricess.filter(pricess => pricess <= 500);//5

const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);//6

const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);//7

const scoress = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(scoress => scoress >= 50 && scoress <= 90);//8

// reduce()-----------------------------------------------
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);//1

const stepss = [3000, 5000, 4000, 6000];
function addSteps(total, stepss) {
  return total + stepss;
}
const weeklySteps = stepss.reduce(addSteps, 0);//2

const prices2 = [499, 299, 199];
const totalPrice = prices2.reduce((total, prices2) => total + prices2, 0);//3

const marks2 = [45, 88, 67, 92];
const highest = marks2.reduce((max, marks2) => {
  return marks2 > max ? marks2 : max;
}, marks2[0]);//4

const wordss = ['Hi', 'Hello', 'JS'];
const totalChars = wordss.reduce((count, wordss) => count + wordss.length, 0);//5

const words3 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words3.reduce((text, words3) => text + ' ' + words3);//6


const marks3 = [35, 72, 88, 41, 25];
const passCount = marks3.reduce((count, marks3) => {
  return marks3 >= 40 ? count + 1 : count;
}, 0);//7

const transaction = [1000, -200, -300, 500];
const finalBalance = transaction.reduce((balance, amount) => balance + amount, 0);//8

const items = ['Pen', 'Book', 'Pencil'];
const result1 = items.reduce((text, item) => text + ', ' + item);//9

//filter,map,reduce examples
// ===============================
// MAP + FILTER + REDUCE PRACTICE
// ===============================

// Q1. Shopping App – Discounted Total
const prices1 = [200, 800, 1200, 450, 700];
const total1 = prices1
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);
console.log('Q1 - Total to pay:', total1); // 2430

// --------------------------------------------------

// Q2. Fitness App – Total Active Minutes
const minutes1 = [20, 45, 60, 15, 90];
const totalCalories = minutes1
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
console.log('Q2 - Total calories burned:', totalCalories); // 975

// --------------------------------------------------

// Q3. Exam System – Average of Passed Marks
const marks5 = [35, 72, 88, 40, 25, 90];
const passed = marks5.filter(mark => mark >= 40);
const averagePassed = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
console.log('Q3 - Average of passed marks:', averagePassed); // 72.5

// --------------------------------------------------

// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
console.log('Q4 - Total payout:', totalPayout); // 2600

// --------------------------------------------------

// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total points:', totalPoints); // 450

// --------------------------------------------------

// Q6. Bank Transactions – Final Balance
const transactions2 = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions2
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
console.log('Q6 - Final credited amount:', creditedAmount); // 4590

// --------------------------------------------------

// Q7. Game App – Final Score
const scores1 = [30, 60, 90, 45, 80];
const finalScore = scores1
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);
console.log('Q7 - Final score:', finalScore); // 250

// --------------------------------------------------

// Q8. E-commerce – Total Taxed Amount
const prices4 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices4
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);
console.log('Q8 - Final payable amount:', finalAmount); // 6746

// --------------------------------------------------

// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const rewardPoints = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
console.log('Q9 - Total reward points:', rewardPoints); // 270

// --------------------------------------------------

// Q10. Interview Brain Teaser ⭐
const numbers1 = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers1
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log('Q10 - Sum of squares of even numbers:', sumOfSquares); // 56

// ===============================
// MAP + FILTER + REDUCE – 20 PRACTICE
// ===============================

// Q1. Grocery Store – Total Cost
const prices3 = [50, 120, 300, 80, 200];
const totalCost = prices3
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((sum, p) => sum + p, 0);
console.log('Q1 - Total cost:', totalCost); // 735

// --------------------------------------------------

// Q2. Fitness App – Weekly Calories
const minutes2 = [10, 25, 40, 15, 60];
const totalCalories2 = minutes2
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);
console.log('Q2 - Total calories:', totalCalories2); // 520

// --------------------------------------------------

// Q3. Exam Results – Total Passed Marks
const marks4 = [35, 55, 80, 20, 45];
const totalPassedMarks = marks4
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);
console.log('Q3 - Total passed marks:', totalPassedMarks); // 180

// --------------------------------------------------

// Q4. Bank App – Total Credits
const transactions4 = [500, -200, 1000, -300, 700];
const totalCredits = transactions4
  .filter(t => t > 0)
  .reduce((sum, t) => sum + t, 0);
console.log('Q4 - Total credits:', totalCredits); // 2200

// --------------------------------------------------

// Q5. Online Sale – Discounted Bill
const prices5 = [800, 1500, 3000, 600, 1200];
const totalPayable = prices5
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total payable amount:', totalPayable); // 5100

// --------------------------------------------------

// Q6. Attendance – Reward Points
const hours6 = [5, 7, 8, 6, 9];
const totalPoints6 = hours6
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((sum, p) => sum + p, 0);
console.log('Q6 - Total reward points:', totalPoints6); // 240

// --------------------------------------------------

// Q7. Delivery App – Total Distance
const distances7 = [3, 6, 10, 4, 8];
const totalDistance7 = distances7
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);
console.log('Q7 - Total distance:', totalDistance7); // 26

// --------------------------------------------------

// Q8. Salary System – Final Salary
const salaries8 = [18000, 25000, 30000, 15000];
const totalSalary = salaries8
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((sum, s) => sum + s, 0);
console.log('Q8 - Total salary payout:', totalSalary); // 59000

// --------------------------------------------------

// Q9. Study App – Total Study Time
const hours9 = [0.5, 1.5, 2, 0.75, 3];
const totalStudyMinutes = hours9
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q9 - Total study minutes:', totalStudyMinutes); // 390

// --------------------------------------------------

// Q10. Electricity Usage – Monthly Bill
const units10 = [80, 120, 200, 90, 150];
const totalBill = units10
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((sum, b) => sum + b, 0);
console.log('Q10 - Total electricity bill:', totalBill); // 2820

// --------------------------------------------------

// Q11. Game Scores – Final Power Score
const scores11 = [30, 50, 90, 20, 70];
const totalPowerScore = scores11
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q11 - Total power score:', totalPowerScore); // 420

// --------------------------------------------------

// Q12. Travel App – Total Fare
const rides12 = [5, 12, 20, 8, 15];
const totalFare = rides12
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((sum, r) => sum + r, 0);
console.log('Q12 - Total fare:', totalFare); // 147

// --------------------------------------------------

// Q13. Office Work – Productive Hours
const hours13 = [4, 6, 8, 5, 9];
const totalProductiveMinutes = hours13
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q13 - Total productive minutes:', totalProductiveMinutes); // 1260

// --------------------------------------------------

// Q14. Shopping Cart – Reward Coins
const purchases14 = [300, 800, 1200, 400];
const totalCoins = purchases14
  .filter(p => p > 500)
  .map(p => 10)
  .reduce((sum, c) => sum + c, 0);
console.log('Q14 - Total coins earned:', totalCoins); // 20

// --------------------------------------------------

// Q15. Fuel App – Total Fuel Cost
const liters15 = [3, 6, 10, 4, 8];
const totalFuelCost = liters15
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);
console.log('Q15 - Total fuel cost:', totalFuelCost); // 2940

// --------------------------------------------------

// Q16. Interview Classic – Sum of Cubes
const numbers16 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers16
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((sum, n) => sum + n, 0);
console.log('Q16 - Sum of cubes of odd numbers:', sumOfCubes); // 153

// --------------------------------------------------

// Q17. Performance Tracking – Bonus Points
const scores17 = [10, 20, 30, 40, 50];
const average17 = scores17.reduce((sum, s) => sum + s, 0) / scores17.length;
const totalBonusScore = scores17
  .filter(s => s > average17)
  .map(s => s + 5)
  .reduce((sum, s) => sum + s, 0);
console.log('Q17 - Total score with bonus:', totalBonusScore); // 110

// --------------------------------------------------

// Q18. Subscription App – Final Bill
const plans18 = [199, 399, 599, 299];
const totalBill18 = plans18
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((sum, p) => sum + p, 0);
console.log('Q18 - Final subscription bill:', totalBill18); // 1181.18

// --------------------------------------------------

// Q19. Learning App – Achievement Score
const scores19 = [45, 60, 70, 30, 80];
const totalAchievementScore = scores19
  .filter(s => s >= 60)
  .map(s => s ** 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q19 - Total achievement score:', totalAchievementScore); // 15800

// --------------------------------------------------

// Q20. Interview Finisher ⭐
const numbers20 = [3, 6, 9, 10, 12];
const totalSum20 = numbers20
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);
console.log('Q20 - Total sum:', totalSum20); // 300
