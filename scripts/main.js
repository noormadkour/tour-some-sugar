import { theVenues } from "./venues.js";


const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="venues">
    <section>
        <h2>Venues</h2>
        ${theVenues()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`;

mainContainer.innerHTML = applicationHTML;