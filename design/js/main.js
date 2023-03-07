let unRead = 3;

let num = document.querySelector(".not span");
let rows = document.querySelectorAll(".container .row");
let red = document.querySelectorAll(".row .red");
let read = document.querySelector(".header .read");

console.log(red);

read.onclick = (e) => {
    rows.forEach((row) => {

        if (row.classList.contains("un-read")) {
            row.classList.remove("un-read");
            unRead--;
        }
    })
    red.forEach((e) => e.remove())
    num.innerHTML = unRead;
}
