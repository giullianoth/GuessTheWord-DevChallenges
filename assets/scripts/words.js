import { getElement, getElements } from "./variables.js"

/**
 * List of words for the game.
 */
export const words = [
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
 * The selected word for the game
 */
export var choosenWord = ""

/**
 * The current attempt of the game
 */
export var attempts = 1

/**
 * The maximum number of attempts in the game
 */
export const maxAttempts = 5

/**
 * Sets the word after select it
 * @param {string} newWord 
 * @returns {void}
 */
export const setChoosenWord = newWord => choosenWord = newWord

/**
 * The selected word divided letter by letter
 * @returns {string[]}
 */
export const splittedWord = () => choosenWord.split("")

/**
 * Increments the current attempt in 1
 * @returns {void}
 */
export const incrementAttempts = () => attempts += 1

/**
 * The DOM of the current attempt
 */
export const attemptsElement = getElement(".attempt")

/**
 * The DOM of the number of maximum attempts
 */
export const maxAttemptsElement = getElement(".max-attempt")

/**
 * The list of elements of attempts progress
 */
export const attemptsBullets = getElements(".try")

/**
 * The list of all attempted letters
 */
export var attempedLetters = []

/**
 * The list of incorrect letters
 */
export var wrongLetters = []

/**
 * The regular expression containing only letters
 */
export const validLetters = /[a-zA-Z]/

/**
 * Resets the list of attempted letters
 * @returns {void}
 */
export const resetAttemptedLetters = () => attempedLetters = []

/**
 * Resets the list of incorrect letters
 * @returns {void}
 */
export const resetWrongLetters = () => wrongLetters = []

/**
 * Resets the list of letters and current attempt at the same time
 */
export const resetAttempts = () => {
    attempts = 1
    resetAttemptedLetters()
    resetWrongLetters()
}