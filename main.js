import './style.css'
import { getWeather } from './src/api'
import { updateUI } from './src/ui'

const searchBtn =document.getElementById("search-btn"); 
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click" ,async () => { 
    const cityName = cityInput.value;

    if (!cityName) {
    alert("Lütfen bir şehir adı girin!");
    return; 
  }
  const weatherData = await getWeather(cityName); 
  updateUI(weatherData); 
});

cityInput.addEventListener("keypress" , (event) => { 
    if(event.key=== "Enter") { 
    searchBtn.click();
    }
})