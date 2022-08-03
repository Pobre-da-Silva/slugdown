import { slugdown } from "./index.js";

if(slugdown.getSlugdownTime() !== 2500) {
  slugdown.setSlugdownTime(2500);
}

let months = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

for(let month of months) {
  await slugdown.slugdown(() => { console.log(month); });
}
