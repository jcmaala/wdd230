let banner = document.querySelector(".banner");
let today = date.getDay();
if (today === 1 || today === 2) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}