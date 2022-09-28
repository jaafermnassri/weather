import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'

const Forecast = () => {
    const [data, setData] = useState([])
    
    const getData = async () => {
        const {data}=await axios.get('http://api.weatherapi.com/v1/forecast.json?key=ea827e23cd9c461db31215716222609&q=London&days=5&aqi=no&alerts=no');
        setData(data);
    };
    useEffect(() => {
      getData();},[]);
      console.log(data)
  return (
    <div>
           {[data].map((el) => (<WeatherCard el={el}  /> ))}
    </div>
  )
}

export default Forecast 