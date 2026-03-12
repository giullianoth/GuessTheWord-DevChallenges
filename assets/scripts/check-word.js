import { GameOver, GameWon } from "./end-game.js"
import { attemptElement, attempts, attemptsBullets, incrementAttempt, letterInputs, maxAttempts, mistakesElement, resetButton, restartButton } from "./variables.js"
import { choosenWord, splittedChoosenWord } from "./words.js"

/**
 * The typed letters of a round
 * @returns {string[]} The array of the letters
 */
const splittedAttemptedWord = () => letterInputs().map(letter => letter.value)

/**
 * Checks the typped letters after a round
 * @returns {void}
 */
const CheckWord = () => {
    const attemptedWord = splittedAttemptedWord().join("")

    const rightLettersInfo = splittedAttemptedWord().map((l, i) => ({
        letter: l,
        index: i
    })).filter(info => splittedChoosenWord().includes(info.letter))

    const wrongLetters = rightLettersInfo
        .filter(info => splittedChoosenWord()[info.index] !== info.letter)
        .map(info => info.letter)

    const lastWrongLetters = mistakesElement.textContent ? mistakesElement.textContent.split(", ") : []

    letterInputs().forEach((letter, index) => {
        if (letter.value === splittedChoosenWord()[index]) {
            letter.setAttribute("disabled", true)
            letter.classList.add("correct")
        } else {
            letter.value = ""
        }
    })

    if (attemptedWord === choosenWord) {
        restartButton.setAttribute("disabled", true)
        resetButton.setAttribute("disabled", true)

        letterInputs().forEach(letter => letter.classList.add("won"))

        GameWon()
        return
    }

    if (attempts === maxAttempts) {
        restartButton.setAttribute("disabled", true)
        resetButton.setAttribute("disabled", true)

        letterInputs().forEach((letter, index) => {
            letter.setAttribute("disabled", true)
            letter.classList.add("revealed")
            letter.value = splittedChoosenWord()[index]
        })

        GameOver()
        return
    }

    const remainingLetters = letterInputs().filter(letter => !letter.classList.contains("correct"))

    if (remainingLetters.length) {
        remainingLetters[0].focus()
    }

    for (let i = 0; i < maxAttempts; i++) {
        if (!attemptsBullets[i].classList.contains("past")) {
            attemptsBullets[i].classList.add("past")
            break
        }
    }

    incrementAttempt()
    attemptElement.textContent = attempts

    wrongLetters.forEach(l => {
        if (!lastWrongLetters.includes(l)) {
            lastWrongLetters.push(l)
        }
    })

    mistakesElement.textContent = lastWrongLetters.join(", ")
}

export default CheckWord