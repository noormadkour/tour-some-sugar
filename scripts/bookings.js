import { getBookings } from "./database.js";

const bookings = getBookings();

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
