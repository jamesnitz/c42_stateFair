import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { foodTicketHolder } from "./food/FoodTicketHolder.js";
import { gameTicketHolder } from "./games/GameTicketHolder.js";
import { sideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js";
import { packageTicketHolder } from "./packages/PackageTicketHolder.js";
import { TicketCount } from "./TicketCounter.js";

TicketBooth()
RideTicketHolders()
foodTicketHolder()
gameTicketHolder()
sideshowTicketHolder()
packageTicketHolder()
TicketCount()