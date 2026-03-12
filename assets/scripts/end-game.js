import Game from "./game.js"
import { ShowModal } from "./modal.js"
import PlaceWord from "./place-word.js"
import { modalElement } from "./variables.js"
import { ChooseAndScramble, choosenWord } from "./words.js"

const endGameTimeout = 1500

/**
 * The callback to be executed after clicking on modal button
 */
const restart = () => {
    ChooseAndScramble()
    PlaceWord()
    Game()
}

/**
 * Opens the game over modal
 */
export const GameOver = () => {
    setTimeout(() => {
        ShowModal(
            modalElement(
                `You lost!<br>The word is: <strong>${choosenWord}</strong>`,
                "Restart"
            ),
            restart
        )
    }, endGameTimeout)
}

/**
 * Opens the game won modal
 */
export const GameWon = () => {
    setTimeout(() => {
        ShowModal(
            modalElement(
                `You won the game!<br>The word is: <strong>${choosenWord}</strong>`,
                "Restart"
            ),
            restart
        )
    }, endGameTimeout)
}