let saveEl = document.getElementById("save-el") //assign the save el button in html to saveEl in js
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count //text content is uhhh like to get only the text that is human readable i guess
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset()
{
    saveEl.innerText = "PREVIOUS ENTRIES: " //.innerText is ALWAYS necessary to uh add wtv text or number into the saveEL or whatever thing, without .innerText the thing wont be assigned
}