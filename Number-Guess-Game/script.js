document.getElementById("section2").style.display = "none";
document.getElementById("section3").style.display = "none";
let number;
const generate_number = () => {
  let n1 = Math.random();
  let oneDigit = n1 * 10;
  oneDigit = Math.trunc(oneDigit);
  oneDigit = (oneDigit % 6) + 1;
  number = oneDigit;
  console.log(number);
};
generate_number();
const generate_number_btn_click = () => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section2").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  setTimeout(() => {
    generate_number();
    document.getElementById("ifield").value = "";
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "block";
    document.querySelector("#section3").style.display = "none";
  }, 3000);
};
const check = () => {
  let value = document.getElementById("ifield").value;
  if (value == number) {
    alert("congratulation!");
  } else {
    alert("Better-luck-next-time");
  }
  generate_number_btn_click();
};
