const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#the-wind');

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=8.95&lon=125.53&units=metric&appid=a4110c7f8fb0f9899752f45db399315f";

async function apiFetch(){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayResults(data); 
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
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
}

apiFetch();