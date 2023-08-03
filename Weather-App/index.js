const apiKey = '2e904c5c962937a70d2a6d65fcfbd111';

const weatherDataEl = document.getElementById('weather__data');
const weatherDataInputEl = document.getElementById('city__input');


const formEl = document.querySelector('form');


formEl.addEventListener('submit', (event) => {
event.preventDefault();
const cityValue = weatherDataInputEl.value;
getWeatherData(cityValue);
});


 const getWeatherData = async (cityValue) => {
 try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

    if(!response.ok) {
        throw new Error ("Network responce was not ok.")
    }

    
    const data = await response.json();
 
    
    const temperature = Math.round(data.main.temp);
    const description1 = data.weather[0].description;    
    const icon = data.weather[0].icon;
    const details = [
        `Feels like: ${data.main.feels_like}`,
        `humidity: ${data.main.humidity}%`,
        `humidity: ${data.wind.speed} m/s`,
     
    ]
    document.querySelector(".weather__data-icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
    document.querySelector('.weather__temperature').textContent =  `${temperature}°C`
    document.querySelector('.weather__description').textContent = `${description1}`
    document.querySelector('.weather__details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    


    
 }  catch (error) {

 } 
}





