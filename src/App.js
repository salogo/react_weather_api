import React, {/*useEffect,*/ useState} from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';
import * as utils from './utils/weatherUtils'

function App() {

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
/*
  useEffect(() => {
    // fetch the weather 
    /*
    fetch(constants.WEATHER_API)
    .then(response => response.json())
    .then(weatherData => {
      // put weather Data somewhere 
      setWeather(weatherData)
    }) 
  },[])*/

  const handleCityTextBoxChange = (e) => {
      setCity(e.target.value)
  }

  const fetchWeather = (city) => {

    let weatherURL = utils.getWeatherURL(city)

    fetch(weatherURL)
    .then(response => response.json())
    .then(weatherData => {
      // put weather Data somewhere 
      setWeather(weatherData)
    })  

  }
/*
  const handleCitySelectChange = (e) => {
    if(e.target.value.length > 0) {
      fetchWeather(e.target.value)
    }
  }*/

  const handleGetWeatherButtonPressed = () => {
      fetchWeather(city)
  } 

  return (
    <div>
    { /* 
      <select onChange={handleCitySelectChange}>
        <option value="">Select a city</option>
        <option value="Houston">Houston</option>
        <option value="Austin">Austin</option>
        <option value="Denver">Denver</option>
    </select> */}

      <input type="text" name="city" onChange={handleCityTextBoxChange} placeholder="Enter city name" />
      <button onClick={handleGetWeatherButtonPressed}>Get Weather</button>
      <DisplayWeather weatherData = {weather} />
    </div>
  );
}

export default App;
