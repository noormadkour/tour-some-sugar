import { getVenues } from "./database.js";

const venues = getVenues();

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
