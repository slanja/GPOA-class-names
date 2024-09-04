var index = 0;

for (let i = document.querySelectorAll(".first").length - 1; i >= 0; i--) {

    var div = document.querySelectorAll(".first");

    const el = document.getElementsByClassName("first")[index];
    const text = el.textContent || el.innerText;

    switch(text){
    case "4":
        div[index].innerText = "E1.A";
        break;
    case "5":
        div[index].innerText = "E1.B";
        break;
    case "6":
        div[index].innerText = "E1.C";
        break;
    case "8":
        div[index].innerText = "EPR";
        break;
    case "14":
        div[index].innerText = "E3.C";
        break;
    case "15":
        div[index].innerText = "E2.A";
        break;
    case "16":
        div[index].innerText = "E2.B";
        break;
    case "17":
        div[index].innerText = "E2.C";
        break; 
    case "21":
        div[index].innerText = "EP2";
        break; 
    case "23":
        div[index].innerText = "EAul";
        break;
    case "28":
        div[index].innerText = "E4.B";
        break;
    case "29":
        div[index].innerText = "E4.C";
        break;
    case "30":
        div[index].innerText = "E3.B";
        break;
    case "31":
        div[index].innerText = "P6";
        break;
    case "32":
        div[index].innerText = "EP5";
        break;
    case "40":
        div[index].innerText = "ETV";
        break;
    case "45":
        div[index].innerText = "EP1";
        break;
    case "47":
        div[index].innerText = "EP4";
        break;
    case "49":
        div[index].innerText = "EP3";
        break;
    }
    var index = index + 1; 

}

var index = 0;


for (let i = document.querySelectorAll('//*[@id="selectedRoom"]/option').length - 1; i >= 0; i--) {

    var option = document.querySelectorAll('//*[@id="selectedRoom"]/option');

    const el = document.getElementsByTagName('//*[@id="selectedRoom"]/option')[index];
    const text = el.textContent || el.innerText;

    switch(text){
    case "0C":
        option[index].innerText = "E2.C";
        break;
    }
    var index = index + 1; 

}
