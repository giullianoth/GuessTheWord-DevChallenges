import { ResetAttempts } from "./attempts.js"
import { ChooseWord } from "./choose-word.js"
import { fadeIn, fadeOut } from "./effects.js"
import { Game } from "./game.js"
import { getElement, getElements, letterInputs, modalButtons, modalElement } from "./variables.js"
import { choosenWord, setChoosenWord, splittedWord } from "./words.js"

const endGameTimeout = 1500
const restartButton = getElement(".restart-button")
const resetButton = getElement(".reset-button")
const lettersInputs = () => getElements(".letter-wrapper")

const gameOvertModal = () => modalElement(
    `You lost!<br>Word is: <strong>${choosenWord}</strong>`,
    "Restart"
)

const gameWonModal = () => modalElement(
    `You won the game!<br>Word is: <strong>${choosenWord}</strong>`,
    "Restart"
)

/**
 * @param {HTMLDivElement} modal 
 */
const modalAction = modal => {
    setTimeout(() => {
        document.body.append(modal)
        fadeIn(modal, "flex")

        modalButtons().forEach(button => {
            button.addEventListener("click", () => {
                lettersInputs().forEach(letter => letter.remove())
                setChoosenWord("")
                ChooseWord()
                ResetAttempts()
                Game()

                fadeOut(modal, true)
            })
        })
    }, endGameTimeout)
}

export const GameOver = () => {
    letterInputs().forEach((letter, index) => {
        letter.classList.add("revealed")
        letter.setAttribute("disabled", true)
        letter.value = splittedWord()[index]
    })

    restartButton.setAttribute("disabled", true)
    resetButton.setAttribute("disabled", true)

    modalAction(gameOvertModal())
}

export const GameWon = () => {
    letterInputs().forEach(letter => {
        letter.classList.add("won")
        letter.setAttribute("disabled", true)
    })

    restartButton.setAttribute("disabled", true)
    resetButton.setAttribute("disabled", true)

    modalAction(gameWonModal())
}