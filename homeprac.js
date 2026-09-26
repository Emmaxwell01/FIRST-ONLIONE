console.log(document.getElementById("text").innerText="welcom to javascript");
console.log(Document);
console.log(document.getElementById("text"))
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByClassName("xyz"))
console.log(document.querySelector(".xyz"))
console.log(document.querySelectorAll(".xyz"))
console.log(document.getElementById("text").innerText="emmanauel is good")
console.log(document.getElementById("text").style.color = "red");
console.log(document.getElementById("text").style.backgroundColor = "blue");
console.log(document.getElementById("box"))
console.log(document.getElementById("box").innerHTML = "<h1>Hello Emmanuel</h1>")


console.log(document.getElementById("text"))
console.log(document.getElementById("text").innerText="goodness me")
console.log(document.getElementById("text").style.color = "red");
document.getElementById("name").value

document.getElementById("button").addEventListener("click", function () {

    let name = document.getElementById("name").value;

    document.getElementById("result").innerText = name;

});

function add(a, b) {
    console.log(a + b);
}
// function add(a, b) {
//     return a + b;
// }