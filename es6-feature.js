//1.let and const are blocked scope other are functional scope
//2.arrow function
//3.multi line string or
//4.default parameters
/* Notes
When we are not passing any arguments then it will take default parameters

*/
const sum = (x = 1, y = 2) => x + y;
console.log(sum(10, 20));
const sum2 = (x = 1, y = 2) => x + y;
console.log(sum2());
//5.template literal's about backtick ` `

//---------------6.Destructuring Assignments--------------->:

const myarr = [10, 20];

// Here we gets value but it is not good way
// let x = myarr[0];
// let y = myarr[1];
//Good approach
const [x, y] = myarr;
console.log(x);
console.log(y);
//------Object destructuring------------>
const obj = {
  name: "ashishk",
  branch: "cs",
};

const { name, branch } = obj;
console.log(name);
console.log(branch);

const myarr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [a, b, ...rest] = myarr2;
console.log("a: " + a);
console.log("b: " + b);
console.log("rest: " + rest);

//---------------7.Enhanced object literls--------------->:
//older way
const oldObj = {
  odepart: "cs",
  oinstructor: "singh",
  oproject: "resume builder",
  display: function () {
    console.log("welcome to oldWay");
  },
};
console.table(oldObj);
console.log(oldObj);
/* There is no need to write in key value paires 
   we can take key dynamically
*/
const depart = "cs",
  instructor = "nv singh";
const dynamic = "dynamicKey";
const nObj = {
  depart,
  instructor,
  [dynamic]: true,
  project: "clone of chatGPT",
  display() {
    console.log("welcome to newWay");
  },
};
console.table(nObj);
console.log(nObj);
//-------------8.Promises in js------------------------>
/*
Promise used for async functioon
"I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code
A JavaScript Promise object contains both the producing code and calls to the consuming code:
*/
//-------------9.Classes in js------------------------>
/* class is template for an object */
class myClass {
  constructor(fname, lname, city) {
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    console.log("object created!");
  }
  display() {
    console.log(`${this.fname}: ${this.lname} : ${this.city}`);
  }
}

let student1 = new myClass("ram", "prabhu", "sky");
let student2 = new myClass("ashish", "k", "MYR");
let student3 = new myClass("Nitin", "gupta", "home");
console.log(student1);
console.table(student1);
