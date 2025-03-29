async function findWeather() {
    document.getElementById('results').classList.remove("bold");  
    const city = document.getElementById("city").value.trim(); // Get input value and remove extra spaces
    const apiKey = '9a3a962ee21b444795a190410252903';

    if (!city) {
        document.getElementById('results').innerHTML = `<p style="color: red;">❌ Please enter a city name.</p>`;
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found, where is it? 🛸 Mars?');
        }
        const data = await response.json();
        
        
        const condition = data.current.condition.text;
        const emoji = getWeatherEmoji(condition);

        document.getElementById('results').innerHTML = `
            <h3>📍 ${data.location.name}, ${data.location.country}</h3>
            <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
            <p>💧 Humidity: ${data.current.humidity}%</p>
            <p>📝 Condition: ${emoji} ${condition}</p>
        `;
        
        document.getElementById('results').classList.add("bold");  
    } catch (error) {
        document.getElementById('results').innerHTML = `<p style="color: red;">⚠️ ${error.message}</p>`;
    }
}


function getWeatherEmoji(condition) {
    condition = condition.toLowerCase(); 

    if (condition.includes("clear")) return "☀️";
    if (condition.includes("cloud")) return "☁️";
    if (condition.includes("rain")) return "🌧️";
    if (condition.includes("thunder")) return "⛈️";
    if (condition.includes("snow")) return "❄️";
    if (condition.includes("fog") || condition.includes("mist")) return "🌫️";
    if (condition.includes("wind")) return "💨";
    
    return "🌍"; 
}
