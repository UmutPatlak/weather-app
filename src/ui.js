export function updateUI(weatherData){ 

function getWeatherDetail(code) {
  if (code === 0) return { icon: "☀️", text: "Açık ve Güneşli" };
  if (code === 1 || code === 2 || code === 3) return { icon: "⛅", text: "Parçalı Bulutlu" };
  if (code >= 45 && code <= 48) return { icon: "🌫️", text: "Sisli" };
  if (code >= 51 && code <= 67) return { icon: "🌧️", text: "Yağmurlu" };
  if (code >= 71 && code <= 77) return { icon: "❄️", text: "Karlı" };
  if (code >= 95) return { icon: "⛈️", text: "Fırtınalı" };
  return { icon: "☁️", text: "Bulutlu" }; 
}
    if(!weatherData) { 
        alert("Sehir Bulunamadi Lutfen Gecerli Bir Sehir Adi Giriniz.. ") 
        return; 

    }

    document.getElementById("city-name").innerText=weatherData.name; 
    document.getElementById("temperature").innerText = weatherData.temperature + "°C";
    document.getElementById("humidity").innerText = "%" + weatherData.humidity;
    document.getElementById("wind").innerText = weatherData.wind + " km/s";

  const detail = getWeatherDetail(weatherData.code);
  
  document.getElementById("weather-icon").innerText = detail.icon;
  document.getElementById("description").innerText = detail.text;






}