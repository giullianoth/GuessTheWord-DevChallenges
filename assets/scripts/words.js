/**
 * List of words for the game.
 */
const words = [
    "adventure", "alphabet", "aquarium", "astronaut", "backpack",
    "balloon", "bicycle", "blizzard", "blueprint", "cactus",
    "calendar", "camera", "castle", "champion", "compass",
    "crystal", "desert", "diamond", "dinosaur", "dolphin",
    "dragon", "eclipse", "elevator", "firework", "flamingo",
    "fountain", "galaxy", "gladiator", "glitter", "guitar",
    "hammer", "harvest", "helmet", "highway", "horizon",
    "iceberg", "infinity", "island", "journey", "jungle",
    "kangaroo", "keyboard", "labyrinth", "lantern", "lemon",
    "library", "lighthouse", "lizard", "magnet", "marathon",
    "melody", "midnight", "mirror", "monument", "mountain",
    "nebula", "notebook", "obsidian", "ocean", "orchestra",
    "oxygen", "pancake", "parallel", "passport", "peacock",
    "pencil", "phantom", "platinum", "pyramid", "quicksand",
    "radiator", "rainbow", "rhythm", "safari", "sculpture",
    "shadow", "skeleton", "skyline", "spaceship", "spectrum",
    "sphinx", "starlight", "statue", "sunflower", "telescope",
    "thunder", "traffic", "treasure", "umbrella", "universe",
    "vampire", "volcano", "volleyball", "waterfall", "whisper",
    "whistle", "wizard", "yacht", "zephyr", "zodiac"
]

/**
 * Scrambles the specified word and returns the array, letter by letter
 * @param {string} word - The word to scramble
 * @returns {string[]} The array of scrambled word
 */
const scrambleWord = word => {
    const splitted = word.split("")
    let currentIndex = splitted.length

    while (currentIndex > 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [splitted[currentIndex], splitted[randomIndex]] = [splitted[randomIndex], splitted[currentIndex]]
    }

    return splitted
}

/**
 * The choosen word of the game
 */
export var choosenWord

/**
 * The scrambled choosen word
 */
export var scrambledChoosenWord

/**
 * The splitter choosen word, letter by letter
 * @returns {string[]} The array of the word
 */
export const splittedChoosenWord = () => choosenWord.split("")

/**
 * Sets the choosen word
 * @param {string} word - The new choosen word
 * @returns {void}
 */
export const setChoosenWord = word => choosenWord = word

/**
 * Sets the scrambled choosen word
 * @param {string} word - The new scrambled word
 * @returns {void}
 */
export const setScrambledChoosenWord = word => scrambledChoosenWord = word

/**
 * Chooses a word from the list and scrambles it
 */
export const ChooseAndScramble = () => {
    const wordIndex = Math.floor(Math.random() * words.length)
    const word = words[wordIndex]
    const scrambledWord = scrambleWord(word)

    setChoosenWord(word)
    setScrambledChoosenWord(scrambledWord)
}