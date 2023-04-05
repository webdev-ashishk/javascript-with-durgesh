// scenario
/* 
1. Register
2.send-welcome-email
3.login
4.get user data
5.display user data
*/
function register() {
  /* NOTE 
1.May be server side it will take's some time's to execute the code 
2.SO That we need to add asynchronous code that's not wait for completly execute the resiter function
 */
  console.log("register end");
}
function sendEmail() {
  console.log("sendEmail end");
}
function login() {
  console.log("login end");
}
function getUserData() {
  console.log("getUserData end");
}
function dUserData() {
  console.log("dUserData end");
}

register();
sendEmail();
login();
getUserData();
dUserData();

console.log("application is working!");
