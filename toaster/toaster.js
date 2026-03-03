let d = 20;
function abc() {
  console.log(d);
}
function def() {
  let d = 25;
  abc();
}
def();
//clg ans-->

function parent() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
let fnc1 = parent();
fnc1();
//console.log

//counter
function counter() {
  let a = 0;
  return function () {
    a++;
    console.log(a);
  };
}
let fnc = counter();
fnc(); //1
fnc(); //2
fnc(); //3
fnc(); //4
fnc(); //5

let fnc2 = counter();
fnc2();
fnc2();

//create toaster
function CreateToaster(config) {
  let toast = document.querySelector(".toast");

  return function (noti) {
    let div = document.createElement("div");
    div.className = `toaster ${config.theme === "dark" ? "bg-yellow-100 text-black-900 border-2 border-red-800": "bg-green-300 text-red-400 border-2 border-blue-600"} px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none`;

    toast.className+=` ${config.positionX === "left" ? "left-10" : "right-10"} ${config.positionY === "bottom" ? "bottom-10" : "top-10"}`
    
    div.textContent = noti;

    toast.appendChild(div);

    setTimeout(() => {
      toast.removeChild(div);
    },config.duration * 1000);
  };
}
let toaster = CreateToaster({
    positionX : "right",
    positionY : "top",
    theme : "light",
    duration:3,
});

toaster("welcome to dashboard");
setTimeout(()=>{
    toaster("you have 2 new notifications");
},2000);

setTimeout(()=>{
    toaster("prodect upload successfully");
},1000);
