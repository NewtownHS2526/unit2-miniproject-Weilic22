// YOUR CODE HERE

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

const form = document.getElementById("fav_color")
const output = document.getElementById("radio-output")

form.addEventListener("change", function() {
    let color = document.querySelector('input[name="fav_color"]:checked').value
    let emoji = ""

    if (color === "blue") emoji = "💙"
    if (color === "green") emoji = "💚"
    if (color === "black") emoji = "🖤"
    if (color === "pink") emoji = "💕"

    output.textContent = "You picked " + color + " " + emoji + "!"
})


const getRandomInt = () => (
  Math.floor(Math.random() * 100) + 1
)

let secret = getRandomInt()

const numInput = document.querySelector("#num-input")
const numOutput = document.querySelector("#num-output")

numInput.addEventListener("change", function () {
    let guess = Number(numInput.value)

    if (guess === secret) {
        numOutput.textContent = "Correct! You guessed the right number!"
    } else if (guess > secret) {
        numOutput.textContent = "Too high! Try guessing something lower."
    } else if (guess < secret) {
        numOutput.textContent = "Too low! Try guessing something higher"
    }
})

const textInput = document.getElementById("text-input")
const alertBox = document.getElementById("sr-continent-alert")

const continents = {
    "north america" : "north-america"
    ,"south america" : "south-america"
    ,"europe" : "europe"
    ,"asia" : "asia"
    ,"africa" : "africa"
    ,"australia" : "australia"
    ,"antarctica" : "antarctica"
}

textInput.addEventListener("change", function() {
    let guess = textInput.value.toLowerCase().trim()

    if (continents[guess]) {
        let img = document.getElementById(continents[guess])
        img.style.opacity = "1"
        alertBox.textContent = "Correct! You found " + guess + "!"
    } else {
        alertBox.textContent = "Not a continent. Try again."
    }
})