import { fadeIn, fadeOut } from "./effects.js"
import { modalButtons } from "./variables.js"

/**
 * Opens a modal
 * @param {HTMLDivElement} modal The modal element
 * @param {() => any} callBackAction The callback to be executed by clicking on confitm button
 */
export const ShowModal = (modal, callBackAction) => {
    document.body.append(modal)
    fadeIn(modal, "flex")

    modalButtons().forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index === 0) {
                callBackAction()
            }

            fadeOut(modal, true)
        })
    })
}