const date = new Date();
const todayDate = document.querySelector(".Date");
const todayCopy = document.querySelector(".CopyrightYear");
const navButton = document.querySelector('#navButton');
const navigation = document.querySelector('.navigation');


function printingDateTime(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    todayDate.innerHTML = "Last updated: " + month + "/" + day + "/" + year + " " + hour + ":" + min + ":" + sec;
}
printingDateTime();

function printCopyRightYear(){
    const year = date.getFullYear();
    const theYear = "&#169; year Bountiful Foods | Jean Clyde Maala | WDD 23O Project <br>Weather data provided by openweathermap.org";
    const newYear = theYear.replace(/year/g, year);
    todayCopy.innerHTML = newYear;
}
printCopyRightYear();

navButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});