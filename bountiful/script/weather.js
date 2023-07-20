const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humid = document.querySelector('#the-humid');
const weathercard = document.querySelector("#weather-card");

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.35&units=imperial&appid=a4110c7f8fb0f9899752f45db399315f";

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
    humid.innerHTML = weatherData.main.humidity;

}

function getForecast() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=54da382318799586745f2112ab1d86ec&units=imperial';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const Data = data.list;
  
        const currentDate = new Date();
        const options = { weekday: 'long' };
        const locale = 'en-US';
        const nextThreeDays = Array.from({ length: 3 }, (_, i) => {
          const date = new Date(currentDate);
          date.setDate(date.getDate() + i + 1);
          return date.toLocaleDateString(locale, options);
        });

        let count = 0;
        let adder = 1;
        Data.forEach(forecast => {
          if (count < 3) {
            const image = forecast.weather[0].icon;
            const temperature = forecast.main.temp;
  
            const dayOfWeek = nextThreeDays[count]
            
            if (nextThreeDays.includes(dayOfWeek)) {
            
            let card = document.createElement("div");
            card.setAttribute("class", `forecast-card${adder}`)
            card.innerHTML = 
            `
            <h3>${dayOfWeek}</h3>
            <div class="forecast-image">
              <img src="https://openweathermap.org/img/w/${image}.png" alt="weather icon">
            </div>
            <div class="forecast-section">
              <p>${temperature.toFixed(0)} °F</p>
            </div>
            `;
  
            weathercard.append(card);
            count++;
            adder++;
  
            }
          } 
        });
        
      })
      .catch(error => {
        console.log('Error fetching weather forecast:', error);
      });
}

apiFetch();
getForecast();
