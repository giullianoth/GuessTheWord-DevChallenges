import { attemptElement, attempts, attemptsBullets, getElement, letterElement, letterInputs, maxAttempts, mistakesElement, resetAttempts, scrambledElement } from "./variables.js"
import { scrambledChoosenWord, splittedChoosenWord } from "./words.js"

const wordElement = getElement(".word")
const maxAttemptsElement = getElement(".max-attempt")

/**
 * Places the choosen word in the display
 */
const PlaceWord = () => {
    scrambledElement.innerHTML = ""
    wordElement.innerHTML = ""
    mistakesElement.innerHTML = ""
    attemptsBullets.forEach(bullet => bullet.classList.remove("past"))
    resetAttempts()

    scrambledElement.textContent = scrambledChoosenWord.join(" ")
    splittedChoosenWord().forEach(_ => wordElement.append(letterElement()))

    letterInputs()[0].focus()

    attemptElement.textContent = attempts
    maxAttemptsElement.textContent = maxAttempts

    attemptsBullets[0].classList.add("past")
}

export default PlaceWord