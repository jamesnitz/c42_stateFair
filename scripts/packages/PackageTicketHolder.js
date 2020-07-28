const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const packageTicketHolder = () => {
    eventHub.addEventListener("packageTicketPurchased", customEvent => {
      contentTarget.forEach(target => target.innerHTML += `<div class="person bigSpender"></div>`)
    })
}

