const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person eater">
            </div>`
    })
}

