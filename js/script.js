var button = document.querySelector("button");
var div = document.querySelector(".modal");
var span = document.querySelector(".modal-x");

button.addEventListener("click", function (){
    div.classList.add("show-modal");
    button.innerText = "You've got this!";
});

span.addEventListener("click", function () {
    div.classList.remove("show-modal");
    button.innerText = "Who's got this?";
})