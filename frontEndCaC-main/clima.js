document.addEventListener("DOMContentLoaded", function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires&appid=2dd658df7bc815978b9026321a005a6f`)
        .then(response => response.json())
        .then(data => {
            // Accede a las propiedades correctas de la respuesta
            const { name } = data;
            const { main: { temp }, main: { temp_min }, main: { temp_max } } = data;

            // Convierte la temperatura de Kelvin a Celsius
            const temperaturaActual = Math.round(temp - 273.15);

            // Convierte la temperatura minima de Kelvin a Celsius
            const min = Math.round(temp_min - 273.15);

            // Convierte la temperatura maxima de Kelvin a Celsius
            const max = Math.round(temp_max - 273.15);

            // Actualiza el contenido del div con la información climática
            document.getElementById('weatherInfo').innerHTML = `
            <span>Ciudad: ${name}</span>
            <span>Temperatura actual: ${temperaturaActual}°C</span>
            <span>min: ${min}ºC</span>
            <span>max: ${max}ºC</span>`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
