// java script code to generate random password.
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
  "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let result = ""
let solution = ""

let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")


function randompassword() {

  for (let i = 0; i < characters.length; i++) {
    let index = Math.floor(Math.random() * characters.length) + 1
    result += characters[index]
    if (result.length == 15) {
      break
    }
  }
  button1.textContent = result

  for (let j = 0; j < characters.length; j++) {
    let value = Math.floor(Math.random() * characters.length) + 1
    solution += characters[value]
    if (solution.length == 15) {
      break
    }
  }
  button2.textContent = solution
  document.querySelector("#generator").disabled = true
}
function refreshpage() {
  window.location.reload()
}
document.getElementById("copy_btn1").onclick = function () {
  navigator.clipboard.writeText(document.getElementById("btn1").innerText)
  document.getElementById("copy_btn1").textContent = "copied"
  setTimeout(function () {
    document.getElementById("copy_btn1").textContent = "copy"
  }, 1000)
}
//  another way in which you can set your event listner and define the fuction at the same time.
document.getElementById("copy_btn2").onclick = function () {
  // this API is used to copy the text to your clipboard .
  navigator.clipboard.writeText(document.getElementById("btn2").innerText)

  document.getElementById("copy_btn2").innerText = "copied"
  //its an function or API though which you can set your time limit in which the moidfication will be shown to the user , like in this case.
  setTimeout(function () {
    document.getElementById("copy_btn2").innerText = "copy"
  }, 1000)
}