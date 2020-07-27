const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="packageTicket">Full Package Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    switch (clickEvent.target.id) {
        case "rideTicket":
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)
            break;
        case "foodTicket":
            const foodTicket = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodTicket)
        default:
            break;
    }
})
