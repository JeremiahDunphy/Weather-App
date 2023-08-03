After-Project Briefing - The Weatherapp

Why a Weather-App?

I decided to create a weather app to continue to enhance my knowledge of the Javascript language. 

What did you already know that you continued to build on.

the CSS and HTML was easy for me, however, I did try some new CSS selectors that are a bit more advanced so I can become moore comfortable with them.

for example in order to select the child div elements of the parent div I used the following selector: .weather__details > div
another axample is that I did not have classes or ID's on my input elements. In order to use a selector for them I did the following form input[type= "submit"]. This is a more advanced CSS technique that allows me to target the string value of the type attribute instead of the class or element.

javascript API work -- This project was great at continuing my learning and development if using API's and promises to fetch data. 

Here is a code breakdown of my Javascript code. Breaking down my code after a project helps me reiterate and understand it.

const apiKey = '2e904c5c962937a70d2a6d65fcfbd111'; 

This is a constant variable named apiKey that holds the apiKey for the data that I need for the weather app.

const weatherDataEl = document.getElementById('weather__data');

WeatherDataEl: This is a variable that stores the first reference to the weather__data ID in my HTML file.

const weatherDataInputEl = document.getElementById('city__input');

WeatherDataEl: This is a variable that stores the first reference to the city__input ID in my HTML file.

const formEl = document.querySelector('form');

this is a variable that stores the first reference to the form element in my HTML document.


formEl.addEventListener('submit', (event) => {
event.preventDefault();
const cityValue = weatherDataInputEl.value;
getWeatherData(cityValue);
});

This code is putting an event lisener on the form element. It is waiting for me to submit the form and will run the following code afterwards this event happens:

first it will prevent the defrault action from happening which is the page will refresh.
A variable is declared names cityValue, this is equal to the value of city__input's (makes it equal to the value that an end user types when searching for a city.)

it then runs a function named getWeatherData and it passes a variable named cityValue which stores the end users input text to it as parameters for the function.




 const getWeatherData = async (cityValue) => {
This is an asynchronous function (meaning a function that performs execution of tasks "out of order" or more so independently without having to wait for a specific to complete before moving onto the next one. This feature is often used when performing operations that require longer than usual amount of time to finish.) that takes a parameter that we have stored as a variable cityValue.

 try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
the program is attempting to create an asyncronous network request to openweathermap.org. the responce it recieves from the API will be stored in the response variable.


    if(!response.ok) {
        throw new Error ("Network responce was not ok.")
    }

    this if statement is saying if the response is not ok throw a new error that logs ("Network responce was not ok.")

    
    const data = await response.json();

    This is a constant variable that converts the response into a json object.
    the next instructions do not execute util this task is complete hence the "await".
 
    
    const temperature = Math.round(data.main.temp);

    thisline of code takes the temp property of the JSON data from the API and stores in a constant variable.

    const description1 = data.weather[0].description;    

     This line of code retrieves the description property from the first element at index 0 of the weather array within the JSON data obtained from the API response. The retrieved description property is then stored in a constant variable.

    const icon = data.weather[0].icon;

    This line of code retrieves the icon property from the first element at index 0 of the weather array within the JSON data obtained from the API response. The retrieved icon property, which represents an icon identifier associated with the weather conditions, is then stored in a constant variable.

    const details = [
        `Feels like: ${data.main.feels_like}`,
        `humidity: ${data.main.humidity}%`,
        `humidity: ${data.wind.speed} m/s`,
     
    ]

    This code defines an array named details that contains three string elements. Each element is a template literal that embeds specific property values from the data object obtained from the API response. The first element displays the 'feels_like' temperature, the second element shows the humidity percentage, and the third element indicates the wind speed in meters per second. These details are formatted into human-readable sentences and stored in the details array.

    document.querySelector(".weather__data-icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
    document.querySelector('.weather__temperature').textContent =  `${temperature}°C`
    document.querySelector('.weather__description').textContent = `${description1}`
    document.querySelector('.weather__details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    


    
 }  catch (error) {

 } 
}





