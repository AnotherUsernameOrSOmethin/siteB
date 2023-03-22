let time = new Date().getHours()
console.log(time)
let greetin = document.getElementById("greetin")
if(time < 7) {
    greetin.innerText = "god morgen, og velkommen til nettsiden min! har du planer om å finne en bedre døgnrytme?"
}
else if (time > 7 && time < 14) {
    greetin.innerText = "god morgen, og velkommen til nettsiden min!"
}
else if (time > 15 && time < 18) {
    greetin.innerText = "god ettermiddag, og velkommen til nettsiden min!"
}
else if (time > 18 && time < 24) {
    greetin.innerText = "god kveld, og velkommen til nettsiden min!"
}