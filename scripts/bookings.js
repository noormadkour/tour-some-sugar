import { getBands, getBookings } from "./database.js";

const bookings = getBookings();
const bands = getBands();

export const theBookings = () => {
  let bookingHTML = "<ul>";
  for (const booking of bookings) {
    bookingHTML += `<li data-type="booking"
                        data-band="${booking.band_name}"
                        data-venue="${booking.venue_name}"
                        >${booking.band_name} are playing at the ${booking.venue_name} on ${booking.booking_date}</li>`;
  }
  bookingHTML += "</ul>";
  return bookingHTML;
};

document.addEventListener("click", (bookingClick) => {
  const clickedBooking = bookingClick.target;
  if (clickedBooking.dataset.type === "booking") {
    for (const band of bands) {
      if (band.name === clickedBooking.dataset.band) {
        window.alert(
          `${band.name}\n${band.genre}\nFormed in ${band.year_formed}\n${band.members} band members`
        );
      }
    }
  }
});
