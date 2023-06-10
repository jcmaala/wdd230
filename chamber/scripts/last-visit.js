const visitDisp = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("visits-ls"));

if (numberVisits !==0){
    visitDisp.textContent = numberVisits;
} else {
    visitDisp.textContent = "This is your first visit of this site!";
}

numberVisits++;
localStorage.setItem("visits-ls", numberVisits);