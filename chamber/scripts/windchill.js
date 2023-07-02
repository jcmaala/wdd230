const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#the-wind');

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=8.95&lon=125.53&units=metric&appid=a4110c7f8fb0f9899752f45db399315f";

async function apiFetch(){
    const response = await fetch(apiURL);
    if (response.ok){
        const data = await response.json();
        displayResults(data); 
    }
    else{
        throw Error(await response.text());
    }
    
}

function displayResults(weatherData){
    currentTemp.textContent = weatherData.main.temp.toFixed(0);

    const imgsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const description = weatherData.weather[0].description;
    weatherIcon.setAttribute("src", imgsrc);
    weatherIcon.setAttribute("alt", description);
    captionDesc.innerHTML = description;
    windSpeed.innerHTML = weatherData.wind.speed;

    const windChill = document.querySelector("#the-chill");
    const speed = windSpeed.innerHTML;
    const temp = currentTemp.textContent;

    if (temp <= 9 ) { 
        const formula = 13.12 + 0.6215 * temp;
        const formula1 = speed**0.16;
        const formula2 = 11.37 * formula1
        const formula3 = 0.3965 * temp
        const formula4 = formula3* formula1;
        const finFormula = formula - formula2 + formula4;
        windChill.textContent = `${finFormula.toFixed(2)} ºC`;
    } 
    else{
        windChill.textContent = "N/A";
    }
}

apiFetch();




