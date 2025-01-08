document.getElementById("search-btn").addEventListener("click", function () {
    let city = document.getElementById("search-location").value;
    city = city.replace(' ', '%20')
    // OpenWeather API details
    const apiKey = "";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".descriptioon").textContent =
                data.weather[0].description.toUpperCase();
            document.querySelector(".temp-max").textContent = `${data.main.temp_max}°`;
            document.querySelector(".temp-min").textContent = `${data.main.temp_min}°`;
            document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
            document.querySelector(".cloudiness").textContent = `${data.clouds.all}%`;
            document.querySelector(".wind-speed").textContent = `${data.wind.speed} km/h`;
            document.querySelector(".current-temp").textContent = `${Math.round(data.main.temp)}°`;
            document.querySelector(".current-weather h1").textContent = `${Math.round(
                data.main.temp
            )}° ${data.name}`;
        })
        .catch(err => {
            alert("City not found. Please try again!");
        });
});
