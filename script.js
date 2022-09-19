var div = document.querySelectorAll(".first");
var index = 0;

for (let i = document.querySelectorAll(".first").length - 1; i >= 0; i--) {
    const el = document.querySelector(".first");
    const text = el.textContent || el.innerText;

    switch(text){
    case "5":
        div[index].innerText = "E2.C";
        break;
    case "45":
        div[index].innerText = "EP3";
        break;
    case "47":
        div[index].innerText = "EP4";
        break;
    
}

}
