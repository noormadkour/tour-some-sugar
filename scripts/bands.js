import { getBands } from "./database.js";

const bands = getBands();

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
