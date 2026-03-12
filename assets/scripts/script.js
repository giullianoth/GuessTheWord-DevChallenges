import Game from "./game.js"
import PlaceWord from "./place-word.js"
import { ResetAttempts, RestartGame } from "./restart-game.js"
import { resetButton, restartButton } from "./variables.js"
import { ChooseAndScramble } from "./words.js"

window.addEventListener("load", () => {
    ChooseAndScramble()
    PlaceWord()
    Game()

    restartButton.addEventListener("click", RestartGame)
    resetButton.addEventListener("click", ResetAttempts)
})