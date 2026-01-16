import { ResetAttempts } from "./attempts.js"
import { ChooseWord } from "./choose-word.js"
import { fadeIn, fadeOut } from "./effects.js"
import { Game } from "./game.js"
import { closeModal, getElements, letterInputs, modal, modalButtons, modalElement } from "./variables.js"
import { resetAttemptedLetters, resetWrongLetters, setChoosenWord } from "./words.js"

const lettersInputs = () => getElements(".letter-wrapper")
const restartModal = () => modalElement("Scramble another random word?", "Yes", "No")
const resetWordModal = () => modalElement("Reset current attempts?", "Yes", "No")

export const RestartGame = () => {
    const currentModal = restartModal()
    document.body.append(currentModal)
    fadeIn(currentModal, "flex")
    closeModal(modal())

    modalButtons().forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index === 1) {
                lettersInputs().forEach(letter => letter.remove())
                setChoosenWord("")
                ChooseWord()
                ResetAttempts()
                Game()
            }

            fadeOut(currentModal, true)
        })
    })
}

export const ResetWord = () => {
    const currentModal = resetWordModal()
    document.body.append(currentModal)
    fadeIn(currentModal, "flex")
    closeModal(modal())

    modalButtons().forEach((button, index) => {
        button.addEventListener("click", () => {
             if (index === 1) {
                ResetAttempts()
                letterInputs().forEach(letter => letter.value = "")
                resetAttemptedLetters()
                resetWrongLetters()
            }

            fadeOut(currentModal, true)
        })
    })
}