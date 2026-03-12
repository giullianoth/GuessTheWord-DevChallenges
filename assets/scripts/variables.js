import { fadeOut } from "./effects.js"

/**
 * Selects an element in DOM.
 * @param {string} selector CSS selector of the element
 * @param {HTMLElement|Document|null} parentElement Parent element to restrict the search
 * @returns {HTMLElement|null|undefined} The first corresponding element or undefined
 */
export const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector)

/**
 * Selects an array of many elements in DOM.
 * @param {string} selector CSS selector of elements
 * @param {HTMLElement|Document|null} parentElement Parent element to restrict the search
 * @returns {HTMLElement[]|null|undefined} The list of elements or undefined
 */
export const getElements = (selector, parentElement = null) => Array.from((parentElement ?? document).querySelectorAll(selector))


/**
 * Creates an element with letter input.
 * @returns {HTMLDivElement} The 'div' element with input and text cursor
 */
export const letterElement = () => {
    const wrapperElement = document.createElement("div")
    const cursorElement = document.createElement("span")
    const inputElement = document.createElement("input")

    wrapperElement.className = "letter-wrapper"
    cursorElement.className = "cursor"

    inputElement.className = "letter"
    inputElement.type = "text"

    wrapperElement.append(inputElement, cursorElement)

    return wrapperElement
}

/**
 * Creates a dialog box for decision making.
 * @param {string|HTMLElement} content - An element or a text to fill the content area
 * @param {string} primaryButtonLabel - The text label for the primary button
 * @param {string} secondaryButtonLabel - The text label for the secondary button - optional
 * @returns {HTMLDivElement} The modal element
 */
export const modalElement = (content, primaryButtonLabel, secondaryButtonLabel = "") => {
    const modal = document.createElement("div")
    const modalContainer = document.createElement("div")
    const modalContent = document.createElement("div")
    const modalActions = document.createElement("div")
    const primaryButton = document.createElement("button")
    const secondaryButton = document.createElement("button")

    modal.className = "modal"
    modalContainer.className = "container modal-container"
    modalActions.className = "actions"

    primaryButton.innerText = primaryButtonLabel
    modalActions.append(primaryButton)

    if (secondaryButtonLabel) {
        secondaryButton.className = "secondary"
        secondaryButton.innerText = secondaryButtonLabel
        modalActions.append(secondaryButton)
    }

    modalContent.innerHTML = content

    modalContainer.append(modalContent, modalActions)
    modal.append(modalContainer)

    return modal
}

/**
 * The DOM of modal element
 * @returns {HTMLElement | null | undefined}
 */
export const modal = () => getElement(".modal")

/**
 * The DOM of buttons in modal
 * @returns {HTMLElement[] | null | undefined}
 */
export const modalButtons = () => getElements("button", modal())

/**
 * Closes the modal by clicking on overlay area.
 * @param {HTMLElement} modal - The modal element
 */
export const closeModal = modal => {
    modal.addEventListener("click", event => {
        if (event.target.classList.contains("modal")) {
            fadeOut(modal, true)
        }
    })
}

/**
 * The element of scrambled word
 */
export const scrambledElement = getElement(".scrambled-word")

/**
 * The element of incorrect letters
 */
export const mistakesElement = getElement(".mistakes-letters")

/**
 * The list of input containing each letter of selected word
 * @returns {HTMLElement[] | null | undefined}
 */
export const letterInputs = () => getElements(".letter")

/**
 * The current attempt of the game
 */
export var attempts = 1

/**
 * The maximum number of attempts in the game
 */
export const maxAttempts = 5

/**
 * Increments the current attempt in 1
 * @returns {void}
 */
export const incrementAttempt = () => attempts += 1

/**
 * Reset the number of attempts to 1
 * @returns {void}
 */
export const resetAttempts = () => attempts = 1

/**
 * The element of current attempt
 */
export const attemptElement = getElement(".attempt")

/**
 * The list of elements of attempts progress
 */
export const attemptsBullets = getElements(".try")

/**
 * The button to choose a new word
 */
export const restartButton = getElement(".restart-button")

/**
 * The button to reset the attempts of the current word
 */
export const resetButton = getElement(".reset-button")