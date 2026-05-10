export async function getWeather(cityName) {
    try { 
    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=tr`);
    const geoData = await geoResponse.json(); 
        if(!geoData.results) { 
            throw new Error("Sehir Bulunamadi"); 
        }
        const {latitude,longitude ,name} = geoData.results[0];
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
        const weatherData = await weatherResponse.json(); 

            return { 
            name : name, 
            temperature : Math.round(weatherData.current.temperature_2m),
            humidity : weatherData.current.relative_humidity_2m, 
            wind : weatherData.current.wind_speed_10m,
            code : weatherData.current.weather_code // YENİ EKLENEN
        }

   
    }
    catch(error) { 
        console.log("Hava durumu cekilirken hata olustu : " ,error);
        return null; 
        
    }
    
}