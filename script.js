const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const inputField = document.getElementById("_ifield").value;
  const textArea = document.getElementById("_tarea").value;
  // console.log(inputField);
  // console.log(textArea);
  // let result = document.getElementById("_result");
  //<-----This will clear all field's and again ready to take new todo's--->
  setTimeout(() => {
    document.getElementById("_ifield").value = "";
    document.getElementById("_tarea").value = "";
  }, 100);
  const result = document.createElement("div");
  result.innerHTML = `
  <div class="store-todo" id="stodo">
<div class="stitle"><h2 id="_stitle">${inputField}</h2></div>
<div class="sdesc" id="_sdesc"><p>${textArea}</p></div>
</div>
  `;
  document.body.appendChild(result);
});
