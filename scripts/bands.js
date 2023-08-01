import { getBands, getBookings } from "./database.js";

const bands = getBands();
const bookings = getBookings();

export const theBands = () => {
  let bandHTML = "<ul>";
  for (const band of bands) {
    bandHTML += `<li data-type="band"
                     data-name="${band.name}"
                        >${band.name}</li>`;
  }
  bandHTML += "</ul>";
  return bandHTML;
};

document.addEventListener("click", (bandClick) => {
  let venueString = `Booked at the following venue(s):\n`;
  const clickedBand = bandClick.target;
  if (clickedBand.dataset.type === "band") {
    for (const booking of bookings) {
      if (clickedBand.dataset.name === booking.band_name) {
        venueString += `\n${booking.venue_name}`;
      }
    }
    window.alert(venueString);
  }
});
