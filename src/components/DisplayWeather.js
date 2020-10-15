
import React from 'react'

function DisplayWeather(props) {

    let weatherItem = null 

    if(props.weatherData) {
        weatherItem = <div>
                        <h1>{props.weatherData.name}</h1>
                        {props.weatherData.weather[0].main}
                        {props.weatherData.weather[0].description}
                        {props.weatherData.main.temp}
                    </div>
    }
  
    return (
        <div>
            {props.weatherData != null ? weatherItem : null}
        </div>
    )

}

export default DisplayWeather