//Object Oriented Javascript
// OoPS
// dar vakhat blueprint banavo ke objectrt is kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming
// blueprint(object kevo dekhase, object ma su method) --> based on blueprint create objects

// blueprint -contructor
// function based contructor--> Contructor Function -->function Name always start with Capital letter

function CreatePencil(name, price, qty, color) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.color = color;

  //write
  this.write = function (msg) {
    let h1 = document.createElement("h1");
    h1.textContent = msg;
    h1.style.color = color;
    console.log(this);

    document.querySelector("body").appendChild(h1);

    // Erase
    this.erase = function () {
      document.querySelectorAll("h1").forEach((text) => {
        if (text.style.color === this.color) {
          text.remove();
        }
      });
    };
  };
} //blue print

let pencil = new CreatePencil("doms", 100, 10, "black");
let pencil1 = new CreatePencil("natraj", 100, 20, "red");

console.log("doms pencil", pencil);

// jo construction function koi field tena prototype
// ma add attech kari de to te field badha object ma available  thase
CreatePencil.prototype.shape = "round";
// what is prototype: prototype is a property of function which is
// used to add new field to all the object created by that function

// Class in JavaSctipt
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye
// why use class: class is more readable and easier to understand than construction function

class CreatePen {
  constructor(name, price, qty, color) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;

    // what is constructor: constructor  is a special method which is called when an object is called when an object is cretaed, it is used to initialize the object
    // why use constructor: constructor is used to intialized the object, it is called automatically when an object is created,it is used to set the initial values of the object

    //write
    this.write = function (msg) {
      let h1 = document.createElement("h1");
      h1.textContent = msg;
      h1.style.color = color;
      console.log(this);

      document.querySelector("body").appendChild(h1);
    };
  }
}

let pen = new CreatePen("cello", 180, 10, "blue");
let pen1 = new CreatePen("Reynold", 200, 10, "green");
// extends ---> super
// create a new class that hold old class value and also have some new values
// copy old class and add new value

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = "user";
  }
}
let user = new User("test", "test@gmail.com", "abc@123");
console.log("user", user);

class Admin extends User {
  constructor(name, email, password, rights) {
    super(name, email, password); //extends class constructor-->suoer
    this.role = "admin";
    this.rights = rights;
  }
}
let admin = new Admin(
  "admin",
  "admin@gmail.com",
  "admin@123",
  "delet user,edit user,create user",
);
console.log(admin);

// prototypal inheritance vs classical inheritance
// classical Inheritance --> create a classes and extends their classes

// inheritance meaning --> class to class inheritance (copy one class into anthor class)

// prototypal inheritance --> object to object
// ek object chhe tene tame all props/methods ne inherit kari chho
// ke nava object ma

// create form that can save data into local storage with help of using OOPS (only)
