import { getElement, letterElement, letterInputs } from "./variables.js"
import { setChoosenWord, splittedWord, words } from "./words.js"

const wordElement = getElement(".word")

export const ChooseWord = () => {
    const word = words[Math.floor(Math.random() * words.length)]
    setChoosenWord(word)    
    splittedWord().forEach(_ => wordElement.append(letterElement()))
    letterInputs()[0].focus()
    // console.log(splittedWord())
}