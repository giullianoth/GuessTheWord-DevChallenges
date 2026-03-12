import Game from "./game.js"
import { ShowModal } from "./modal.js"
import PlaceWord from "./place-word.js"
import { modalElement } from "./variables.js"
import { ChooseAndScramble } from "./words.js"

const restart = () => {
    ChooseAndScramble()
    PlaceWord()
    Game()
}

const reset = () => {
    PlaceWord()
    Game()
}

export const RestartGame = () => {
    ShowModal(
        modalElement("Scramble another random word?", "Yes", "No"),
        restart
    )
}

export const ResetAttempts = () => {
    ShowModal(
        modalElement("Reset current attempts?", "Yes", "No"),
        reset
    )
}