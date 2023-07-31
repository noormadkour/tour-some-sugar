import { theBands } from "./bands.js";
import { theBookings } from "./bookings.js";
import { theVenues } from "./venues.js";

let mainContainer = document.querySelector(".container");

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>

<article class="bookings">
    <h2>Bookings</h2>
    ${theBookings()}
</article>

<article class="venues-band-container">
    <section class="venues">
        <h2>Venues</h2>
        ${theVenues()}
    </section>
    <section class="bands">
        <h2>Bands</h2>
        ${theBands()}
    </section>
</article>

`;

mainContainer.innerHTML = applicationHTML;
