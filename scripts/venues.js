import { getVenues, getBookings } from "./database.js";

const venues = getVenues();
const bookings = getBookings();

export const theVenues = () => {
  let venueHTML = "<ul>";
  for (const venue of venues) {
    venueHTML += `<li data-type="venue"
                      data-name="${venue.name}"
                      >${venue.name}</li>`;
  }
  venueHTML += "</ul>";
  return venueHTML;
};

document.addEventListener("click", (venueClick) => {
  let bandString = `Bands booked:\n`;
  const clickedVenue = venueClick.target;
  if (clickedVenue.dataset.type === "venue") {
    for (const booking of bookings) {
      if (clickedVenue.dataset.name === booking.venue_name) {
        bandString += `\n${booking.band_name}`;
      }
    }
    window.alert(bandString);
  }
});
