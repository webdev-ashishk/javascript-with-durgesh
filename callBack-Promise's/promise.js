// style a page
document.body.style.backgroundColor = "#262626";
document.body.style.color = "white";
document.body.style.textAlign = "center";
//------------------- time stamp 22:04------------------->
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Error"); //we can handle error using .catch function
      console.log("register end-1");
      resolve("success register-one"); //my work is done you can end
    }, 2000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("error!");
      console.log("sendEmail end-2");
      resolve(); //my work is done you can end
    }, 1000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end-3");
      resolve(); //my work is done you can end
    }, 3000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserData end-4");
      resolve(); //my work is done you can end
    }, 1000);
  });
}
function dUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dUserData end-5");
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
// this is not best approach
// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(dUserData)
//   .catch((err) => {
//     console.log("Error!" + err);
//   });
/* 
Key Notes 
1.when we use promise then we can use .then or also we can use 
await

*/
//<----------This is best Approach------------------->
//async await
//async function by default return a promise
// async function authenticate() {
//   await register();
//   await sendEmail();
//   await login();
//   await getUserData();
//   await dUserData();
// }
// authenticate();
// console.log("application is working!");

//<----------TimeStemp: 44:23------------------->
async function authenticate() {
  try {
    const reg = await register();
    await sendEmail();
    await login();
    await getUserData();
    await dUserData();
    console.log(reg);
  } catch {
    console.log(err);
    throw new Error(); //catch this error we need to write line number 107,108,109
  }
}
authenticate()
  .then(() => {
    console.log("after authenticate-6");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("application is working!");
