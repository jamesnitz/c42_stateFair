const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let ticketCount = 0

const ticketPurchased = () => {
    ticketCount++

    contentTarget.innerHTML = `Total tickets purchased: ${ticketCount}`
}

export const TicketCount = () => {
    contentTarget.innerHTML = `Total tickets purchased: ${ticketCount}`
    eventHub.addEventListener("rideTicketPurchased", ticketPurchased)
    eventHub.addEventListener("foodTicketPurchased", ticketPurchased)
    eventHub.addEventListener("sideshowTicketPurchased", ticketPurchased)
    eventHub.addEventListener("gameTicketPurchased", ticketPurchased)
    eventHub.addEventListener("packageTicketPurchased", ticketPurchased)
}