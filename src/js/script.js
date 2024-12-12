'use strict';

const getWeather = async (city) => {
    try {
        const apiKey = '5d066958a60d315387d9492393935c19';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('pressure').textContent = data.main.pressure;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('wind-speed').textContent = data.wind.speed;
        document.getElementById('wind-direction').textContent = data.wind.deg;

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        document.getElementById('weather-icon').src = iconUrl;
        document.getElementById('weather-icon').alt = data.weather[0].description;

    } catch (error) {
        console.log('Error:', error);
    }
}

const city = prompt("Enter city name:");
if (city) {
    getWeather(city);
} else {
    alert("Need city name!");
}
