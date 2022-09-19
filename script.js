var index = 0;

for (let i = document.querySelectorAll(".first").length - 1; i >= 0; i--) {

    var div = document.querySelectorAll(".first");
    const el = document.getElementsByClassName("first")[index];
    //const el = document.querySelector(".first");
    const text = el.textContent || el.innerText;

    switch(text){
    case "5":
        div[index].innerText = "E2.C";
        break;
    case "45":
        div[index].innerText = "EP1";
        break;
    case "47":
        div[index].innerText = "EP4";
        break;
    case "30":
        div[index].innerText = "E1.B";
        break;
    case "6":
        div[index].innerText = "E1.C";
        break;
    case "4":
        div[index].innerText = "E2.B";
        break;
    case "29":
        div[index].innerText = "E3.B";
        break;
    case "28":
        div[index].innerText = "E3.C";
        break;
    case "16":
        div[index].innerText = "E4.B";
        break;
    case "17":
        div[index].innerText = "E4.C";
        break;
    case "49":
        div[index].innerText = "EP3";
        break;
    case "21":
        div[index].innerText = "EP2";
        break;  
    }
    var index = index + 1; 

}
