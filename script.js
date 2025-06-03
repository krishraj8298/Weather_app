async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "90892faa227cd4752e16a760137a6b96"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    const data = await response.json();
    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching weather!";
  }
}
