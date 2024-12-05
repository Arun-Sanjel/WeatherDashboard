const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherResult = document.getElementById('weatherResult');

// Replace with your own API key
const apiKey = '6ef0d1e6d338d2bab9b84b4d42abed71';

getWeatherButton.addEventListener('click', async () => {
    const city = cityInput.value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) throw new Error(data.message);

        weatherResult.textContent = `Weather in ${data.name}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
    } catch (error) {
        weatherResult.textContent = `Error: ${error.message}`;
    }
});
