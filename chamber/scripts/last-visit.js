const visitDisp = document.querySelector(".visits");
const dateNow = Date.now();
const msToDays = 84600000;

let LastVisit = Number(window.localStorage.getItem("visits-ls")) || dateNow;

let milliElapsed = dateNow - LastVisit;

LastVisit = dateNow;

let dayscount = Math.round(milliElapsed / msToDays);

if (milliElapsed !==0){
    visitDisp.textContent = dayscount;
} else {
    visitDisp.textContent = "This is your first visit of this site!";
}


localStorage.setItem("visits-ls", LastVisit);