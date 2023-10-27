const body = document.querySelector("#box");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (item) {
  console.log(item);
  item.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "brown") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
