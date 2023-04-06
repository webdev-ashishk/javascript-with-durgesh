// style a page
document.body.style.backgroundColor = "#262626";
document.body.style.color = "white";
document.body.style.textAlign = "center";
//------------------- time stamp 22:04------------------->
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve(); //my work is done you can end
    }, 2000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sendEmail end");
      resolve(); //my work is done you can end
    }, 1000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve(); //my work is done you can end
    }, 3000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserData end");
      resolve(); //my work is done you can end
    }, 1000);
  });
}
function dUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dUserData end");
      resolve(); //my work is done you can end
    }, 2000);
  });
}
//This is called callback hell becoz of too much nesting in login
// This problem can be solved by promise!
// register(function () {
//   sendEmail(() => {
//     login(() => {
//       getUserData(() => {
//         dUserData();
//       });
//     });
//   });
// });

// timestamp 29:00
// still here is problem becoz we had used promise for registen not for sendEmail,login,getUserData,dUserData
register().then(sendEmail).then(login).then(getUserData).then(dUserData);

console.log("application is working!");
