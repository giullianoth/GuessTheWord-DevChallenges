import { GameOver, GameWon } from "./end-game.js"
import { attemptedLettersElement, getElement, letterInputs, mistakesElement } from "./variables.js"
import { attempedLetters, attempts, attemptsBullets, attemptsElement, incrementAttempts, maxAttempts, splittedWord, validLetters, wrongLetters } from "./words.js"

const restartButton = getElement(".restart-button")
const resetButton = getElement(".reset-button")

export const Game = () => {
    restartButton.removeAttribute("disabled")
    resetButton.removeAttribute("disabled")

    letterInputs().forEach((letter, index, arr) => {
        letter.addEventListener("keydown", event => {
            if ((event.key === "Delete" || event.key === "Backspace")) {
                event.preventDefault()

                if (!letter.classList.contains("correct")) {
                    if (letterInputs()[index - 1] && !letterInputs()[index - 1].classList.contains("correct")) {
                        letterInputs()[index - 1].focus()

                        if (!letter.value) {
                            letterInputs()[index - 1].value = ""
                        }
                    }

                    letter.value = ""
                }
            }
        })

        letter.addEventListener("input", event => {
            const letterValue = event.target.value
            const typedLetter = event.data ? event.data.toLowerCase() : ""

            if (attempedLetters.includes(typedLetter)) {
                letter.value = letterValue.split("").find(l => l !== typedLetter) || ""
                return
            }

            if (!letterValue.match(validLetters)) {
                letter.value = letterValue.replace(letterValue, "")
                return
            }

            if (letter.classList.contains("correct")) {
                letter.value = letterValue.split("").find(l => l !== typedLetter) || typedLetter
                return
            }

            letter.classList.remove("wrong")
            letter.value = typedLetter

            attempedLetters.push(typedLetter)
            attemptedLettersElement.innerText = attempedLetters.join(", ")

            if (typedLetter === splittedWord()[index]) {
                letter.classList.add("correct")
            } else {
                letter.classList.add("wrong")

                if (attempts >= maxAttempts && !splittedWord().includes(typedLetter)) {
                    wrongLetters.push(typedLetter)
                    mistakesElement.innerText = wrongLetters.join(", ")
                    GameOver()
                    return
                }

                if (!splittedWord().includes(typedLetter)) {
                    wrongLetters.push(typedLetter)
                    mistakesElement.innerText = wrongLetters.join(", ")
                    incrementAttempts()

                    if (attempts <= maxAttempts) {
                        attemptsElement.innerText = attempts
                        attemptsBullets[attempts - 1].classList.add("past")
                    }
                }
            }

            arr.forEach((l, i) => {
                if (typedLetter === splittedWord()[i]) {
                    l.value = typedLetter
                    l.classList.add("correct")
                }
            })

            let indexControl = 1

            if (arr[index + indexControl]) {
                if (arr[index + indexControl].classList.contains("correct") && !arr.every(l => l.value)) {
                    while (arr[index + indexControl] && arr[index + indexControl].classList.contains("correct")) {
                        indexControl++
                    }
                }

                if (arr[index + indexControl]) {
                    arr[index + indexControl].focus()
                }
            }

            if (arr.every((l, i) => l.value && l.value === splittedWord()[i])) {
                GameWon()
            }
        })
    })
}