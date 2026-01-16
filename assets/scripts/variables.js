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
 * @param {string|HTMLElement} content An element or a text to fill the content area
 * @param {string} primaryButtonLabel The text label for the primary button
 * @param {string} secondaryButtonLabel  The text label for the secondary button - optional
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

    if (secondaryButtonLabel) {
        secondaryButton.className = "secondary"
        secondaryButton.innerText = secondaryButtonLabel
        modalActions.append(secondaryButton)
    }

    primaryButton.innerText = primaryButtonLabel
    modalActions.append(primaryButton)

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
 * @param {HTMLElement} modal 
 */
export const closeModal = modal => {
    modal.addEventListener("click", event => {
        if (event.target.classList.contains("modal")) {
            fadeOut(modal, true)
        }
    })
}

/**
 * The element of attempted letters
 */
export const attemptedLettersElement = getElement(".attempted-letters")

/**
 * The element of incorrect letters
 */
export const mistakesElement = getElement(".mistakes-list")

/**
 * The list of input containing each letter of selected word
 * @returns {HTMLElement[] | null | undefined}
 */
export const letterInputs = () => getElements(".letter")