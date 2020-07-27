const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
           <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        console.log("Ride ticket clicked!")
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})
