document.addEventListener("DOMContentLoaded", () => {

    const weatherInfo = document.getElementById("weather-container")
    
    const searchBtn = document.getElementById("search-btn")
    
    searchBtn.addEventListener("click" , () => {

        const myInput = document.getElementById("location")
        const inputValue = myInput.value

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=c2aa413be7ed80809a2c258fb40a6c43`)
            .then((response) => response.json())
            .then((data) => {
            console.log(data)
            const temperature = Math.round((data.main.temp - 273.15) * (9/5) + 32)
            console.log(temperature)
            const description = data.weather[0].description
            console.log(description)

            //changing the UI depending on the data
            const weatherHTML = `
            <h1 id="city">${inputValue}</h1>
            <h3><span id="temp">${temperature}</span>&deg;F</h3>
            <h1 id="status" class="lead">${description}</h1>
            `
            weatherInfo.innerHTML = weatherHTML
            })
            .catch((error) => console.log("error"))
    
        myInput.value = '';
    })

    
})