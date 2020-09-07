var log = document.getElementById("para");
const element = document.getElementById("main");


document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.code == "Enter") {
        log = document.createElement("p");
        element.appendChild(log);
    } else if (e.code == "Backspace") {
        var n = log.innerText.length - 1;
        log.innerText[n] = '';
    } else {
        log.innerText += e.code[3];
    }
    console.log(e.code);
}