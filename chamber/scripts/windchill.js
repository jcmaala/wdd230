const temperature = parseInt(document.querySelector("#weather-card h3").innerHTML.slice(2, -2));
const windspeed = parseInt(document.querySelector("#wind-speed").innerHTML.slice(12, -5));

const formula = 35.74 + 0.6215 * temperature - 35.75 * (windspeed**0.16) + 0.4275 * temperature * (windspeed**0.16);

document.querySelector("#wind-chill").innerHTML = `Wind chill: ${formula.toFixed()}&deg;F`;