const transitionDuration = 300
const transitionGap = 10

const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`

/**
 * Reveals an element with fade effect
 * @param {HTMLElement} element 
 * @param {string} displayElement 
 */
export function fadeIn(element, displayElement = "block") {
    element.style.transition = transitionProps()
    element.style.opacity = 0
    element.style.display = displayElement

    setTimeout(() => {
        element.style.opacity = ""

        setTimeout(() => {
            element.style.transition = ""
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

/**
 * Hides an element with fade effect
 * @param {HTMLElement} element 
 * @param {boolean} removeElement 
 */
export function fadeOut(element, removeElement = false) {
    element.style.transition = transitionProps()
    element.style.opacity = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.opacity = ""
        element.style.transition = ""
        removeElement && element.remove()
    }, transitionDuration)
}