async function weather() {
    let city = document.getElementById("search").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b85a14c50f987d93d0a1e99f64cd069&units=metric`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        document.getElementById("location_val").innerHTML = result.name;
        document.getElementById("temp_val").innerHTML = Math.floor(result.main.temp);
        document.getElementById("pre_val").innerHTML = result.main.pressure + " mbar";
        document.getElementById("feels_like").innerHTML = "Feels Like " + Math.floor(result.main.feels_like) + "&degc";
        document.getElementById("hum_val").innerHTML = result.main.humidity + " %";
        document.getElementById("wind_val").innerHTML = result.wind.speed + " km/h";
    } catch (error) {
        alert("city not found");
    }
}
