function handleMouseEnter() {
    this.classList.add("section-card__hovered")
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave() {
    this.classList.remove("section-card__hovered")
    document.body.id = ``
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName("section-card")   

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index]
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)