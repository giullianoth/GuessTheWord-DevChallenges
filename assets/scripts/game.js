import CheckWord from "./check-word.js"
import { letterInputs, resetButton, restartButton } from "./variables.js"

const validLetters = /[a-zA-Z]/

/**
 * The game on typing letters in inputs
 */
const Game = () => {
    restartButton.removeAttribute("disabled")
    resetButton.removeAttribute("disabled")

    letterInputs().forEach((letter, index, arr) => {
        const previousLetter = arr[index - 1]
        const nextLetter = arr[index + 1]

        letter.addEventListener("keydown", event => {
            if (event.key === "Delete" || event.key === "Backspace") {
                event.preventDefault()

                if (!letter.classList.contains("correct")) {
                    if (previousLetter && !previousLetter.classList.contains("correct")) {
                        previousLetter.focus()

                        if (!letter.value) {
                            previousLetter.value = ""
                        }
                    }

                    letter.value = ""
                }
            }

            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                event.preventDefault()

                if (event.key === "ArrowRight" && nextLetter) {
                    nextLetter.focus()
                }

                if (event.key === "ArrowLeft" && previousLetter) {
                    previousLetter.focus()
                }
            }
        })

        letter.addEventListener("input", event => {
            const letterValue = event.target.value
            const typedLetter = event.data ? event.data.toLowerCase() : ""

            if (!letterValue.match(validLetters)) {
                letter.value = letterValue.replace(letterValue, "")
                return
            }

            if (letter.classList.contains("correct")) {
                letter.value = letterValue.split("").find(l => l !== typedLetter) || typedLetter
                return
            }

            letter.value = typedLetter

            if (nextLetter) {
                if (!nextLetter.value) {
                    nextLetter.focus()
                } else {
                    let indexControl = 1
                    const currentIndex = arr.indexOf(nextLetter)
                    const nextLetterToFocus = () => arr[currentIndex + indexControl]

                    while (nextLetterToFocus() && nextLetterToFocus().value) {
                        indexControl++
                    }

                    if (nextLetterToFocus()) {
                        nextLetterToFocus().focus()
                    }
                }
            }

            if (arr.every(l => l.value)) {
                CheckWord()
            }
        })
    })
}

export default Game