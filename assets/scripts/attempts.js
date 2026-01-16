import { attemptedLettersElement, letterInputs, mistakesElement } from "./variables.js"
import { attempts, attemptsBullets, attemptsElement, maxAttempts, maxAttemptsElement, resetAttempts } from "./words.js"

export const Attempts = () => {
    attemptsElement.innerText = attempts
    maxAttemptsElement.innerText = maxAttempts
    attemptsBullets[0].classList.add("past")
}

export const ResetAttempts = () => {
    resetAttempts()
    attemptsElement.innerText = attempts
    attemptedLettersElement.innerText = ""
    mistakesElement.innerText = ""
    
    letterInputs().forEach(letter => letter.classList.remove("wrong", "correct"))

    attemptsBullets.forEach((bullet, index) => {
        if (index > 0) {
            bullet.classList.remove("past")
        }
    })
}