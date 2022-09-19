
const el = document.querySelector(".first");
const text = el.textContent || el.innerText;

var div = document.querySelectorAll(".first");

switch(text){
    case "5":
        div.forEach(element => element.innerText = "E2.C");
        break;
    case "45":
        div.forEach(element => element.innerText = "EP3");
        break;
    case "47":
        div.forEach(element => element.innerText = "EP4");
        break;
}
