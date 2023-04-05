document.body.style.backgroundColor = "#262626";
document.body.style.color = "white";
// scenario
//all the function should be executed in sequence
/* 
1. Register
2.send-welcome-email
3.login
4.get user data
5.display user data
*/
// function register() {
//   /* NOTE
// 1.May be server side it will take's some time's to execute the code
// 2.SO That we need to add asynchronous code that's not wait for completly execute the resiter function.
// 3.When we change time delay then code calling of the function will changed base on delay.
// 4.This problem solved by callback function
//  */
//   setTimeout(() => {
//     console.log("register end");
//   }, 3000);
// }
// function sendEmail() {
//   setTimeout(() => {
//     console.log("sendEmail end");
//   }, 1000);
// }
// function login() {
//   setTimeout(() => {
//     console.log("login end");
//   }, 1000);
// }
// function getUserData() {
//   setTimeout(() => {
//     console.log("getUserData end");
//   }, 1000);
// }
// function dUserData() {
//   setTimeout(() => {
//     console.log("dUserData end");
//   }, 1000);
// }

// register();
// sendEmail();
// login();
// getUserData();
// dUserData();

// console.log("application is working!");
/* -------------Time stamp: 12:06 -------------------*/
/* 
function register(callback) {
  setTimeout(() => {
    console.log("register end");
    callback();
  }, 1000);
}
function sendEmail() {

//1.Again Problem are generated when we change delay 
//2.Problem solve by again callback function

  setTimeout(() => {
    console.log("sendEmail end");
  }, 2000);
}
function login() {
  setTimeout(() => {
    console.log("login end");
  }, 1000);
}
function getUserData() {
  setTimeout(() => {
    console.log("getUserData end");
  }, 1000);
}
function dUserData() {
  setTimeout(() => {
    console.log("dUserData end");
  }, 1000);
}

register(function () {
  sendEmail();
  login();
  getUserData();
  dUserData();
});

console.log("application is working!");
*/
//---------TimeStamp: 17:5----------------------->
function register(callback) {
  setTimeout(() => {
    console.log("register end");
    callback();
  }, 10000);
}
function sendEmail(callback) {
  //1.Again Problem are generated when we change delay
  //2.Problem solve by again callback function

  setTimeout(() => {
    console.log("sendEmail end");
    callback();
  }, 2000);
}
function login(callback) {
  //1.Again Problem are generated when we change delay
  //2.Problem solve by again callback function
  setTimeout(() => {
    console.log("login end");
    callback();
  }, 3000);
}
function getUserData(callback) {
  setTimeout(() => {
    console.log("getUserData end");
    callback();
  }, 4000);
}
function dUserData() {
  setTimeout(() => {
    console.log("dUserData end");
  }, 1000);
}

register(function () {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        dUserData();
      });
    });
  });
});

console.log("application is working!");
