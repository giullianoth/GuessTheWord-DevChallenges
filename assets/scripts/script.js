import { Attempts } from "./attempts.js"
import { ChooseWord } from "./choose-word.js"
import { Game } from "./game.js"
import { ResetWord, RestartGame } from "./restart.js"
import { getElement } from "./variables.js"

const restartButton = getElement(".restart-button")
const resetButton = getElement(".reset-button")

window.addEventListener("load", () => {
    ChooseWord()
    Attempts()
    Game()

    restartButton.addEventListener("click", RestartGame)
    resetButton.addEventListener("click", ResetWord)
})