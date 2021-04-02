const body = document.getElementById("body")
body.style.textAlign = "center"
body.style.backgroundImage = "url(./back.png)"
body.style.backgroundSize = "cover"
body.style.backgroundRepeat = "no-repeat"

const calc = document.createElement("div")
calc.style.margin = "auto"
calc.style.marginTop = "50px"
calc.style.width = "500px"
calc.style.height = "630px"
calc.style.border = "solid 3px grey"
calc.style.backgroundColor = "skyblue"
calc.style.padding = "15px"
body.appendChild(calc)

const output = document.createElement('div')
output.id = "output"
output.style.textAlign = "right"
output.style.fontSize = "18pt"
output.style.width = "500px"
output.style.height = "30px"
calc.appendChild(output)

const input = document.createElement("div")
input.style.textAlign = "right"
input.style.fontSize = "24pt"
input.style.width = "500px"
input.style.height = "60px"
input.style.borderTop = "solid 4px grey"
calc.appendChild(input)

'C CE . / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')
    .map(symbol => {
        calc.insertAdjacentHTML('beforeend', `<button id = "btn" value="${symbol}">${symbol}</button>`)
    })

const button = document.querySelectorAll("button")

button.forEach( id => {
    id.style.fontSize = "24pt"
    id.style.width = "105px"
    id.style.height = "105px"
})

calc.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON") {
        op(e.target.value)
        result(e.target.value)
        console.log(e.target.value)
    }
})

document.addEventListener('keydown', e => {
    if ((e.key).match(/[0-9%\/*\-+.\(\)=]|Backspace|Enter/)){
        op(e.key)
        result(e.key)
        console.log(e.key)
    }
})

function result(value) {
    if (value === "C") {
        output.innerText = ""
        input.innerText = ""
    }
    else if (value.match(/CE|Backspace/)) {
        output.innerText = output.innerText.slice(0, -1);
    }
    else if (value.match(/=|Enter/)) {
        c()
        output.innerText += "="
    }
    else {
        output.innerText += value
    }
}

function cont(){
    if (output.innerText != "") {

    }
}

function c() {
        input.innerText = Math.trunc(eval(output.innerText))
        }

function op(value) {
        if (value.match(/CE|Backspace/)){
            input.innerText = input.innerText.slice(0, -1);
        }
        else if (value != Number(value)){
        input.innerText = '' 
        }
        else {
            input.innerText += value
        }
}