// this Keyword

// this keyword special keyword in javascript

// beacause of this keyword we can access the properties and methods of an object

// this keyborad is used to refer to the current object

// this keyword is userful when we have to access the properties and methods of an object inside a method of that object

// this keyborad context is determined by how a function is called (that is the reason why this keyword is called dynamic scope) (this ni value this nu use kaya context ma chhe te par depend kare chhe)

//global context
console.log("global", this); // window

// function es5 context
function abc() {
    console.log("function", this);
}
abc(); // window

// function es5 context
let bcd = () => {
    console.log("Fnc ES6", this);
};
bcd(); // window

// method context
// method --> function in object

// 1. method --> fnc es5 
let a = {
  name: "test",
  age: 25,
  write: function () {
    // method --> ek function je koi object ni under hoy tene
    // method kevay. // this --> give object
    // if you use arrow function then this key give you windows
    // object because arrow function does not have its own this
    // keyword it takes this value from its parent scope

    // if you create one more function inside method then this
    // looses their value --> soluation --> you have to create a arrow function
    console.log("method fnc es5:", this);
  },

};
// 2. method --> fnc es6
let b = {
  name: "test",
  age: 25,
  write: () => {
    console.log("method -- fnc es6", this);
  },
};

b.write(); // window


// 3. method --> fnc es5 ==> fnc es5
let c = {
  name: "test",
  age: 25,
  write: function () {
    function abc() {
      console.log("method -- fnc es5 ==> fnc es5", this);
    }
    abc();
  },
};

c.write(); // window

//4.method --> fnc es5==> fnc es6(arrow function)
let d={
    name:"test",
    age:25,
    write:function(){
        let bcd =() =>{
            console.log("method --> es5 into es6", this);
        };
        bcd();
    },
};

d.write();
//event handler context
document.querySelector("h1").addEventListener("click",function(){
    console.log("event handler ",this);
});//this value=html element

//class context
class Person{
    constructor(){
    this.username="test";
    this.email="test@gmail.com";
    console.log("class context",this);
}
}
let p1=new Person();
console.log(p1);

//context--> this keyword value
//global context-->window
//function context--> window
//method conetxt with es5 fnc-->object
//method context with es6 fnc -->window
//arrow function inside es5 fnc-->object
//es5 fnc inside es5 fnc-->window
//event handler context-->html element
//class -->balnk object

//manual binding
//call,apply,bind
//function ne cqalla karti vakhte this kweyword ni value set karva mate call,apply,bind method no upypg kariye chhiye

let obj5={
    name:"test10",
    email:"abs@.com",
};//save this obj.into this keyword

function temp_a(){
    console.log(this);
}
//function.call(object_name)-->this keyword ni value set karva mate call method no upyog kariye che
//temp_a.call(obj5);

//function.apply(object_name)-->this keyword ni value set karva mate apply method no upypg thay che
//temp_a.apply(obj5);

//function.bind(object_name)-->this keyword ni value set karva mate bind method no upyog thay che
let fnc=temp_a.bind(obj5);//nblank object create
fnc();

//console.log(fnc);
