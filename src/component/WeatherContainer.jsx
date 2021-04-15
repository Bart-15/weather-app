import React, {useState} from 'react'
import Weather from './Weather/Weather'
import useStyles from './styles'
import {Container} from '@material-ui/core'
import cx from 'classnames'
const api = {
  key: '648b8d98fa6a3465ef2f95425330b67b',
  base: 'https://api.openweathermap.org/data/2.5/',
}

const WeatherContainer = () => {
    const classes = useStyles()
     const [query, setQuery] = useState('')
     const [weather, setWeather] = useState({})

     const search = (evt) => {
       if (evt.key === 'Enter') {
         fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
           .then((res) => res.json())
           .then((result) => {
             setWeather(result)
             setQuery('')
             console.log(result)
           })
       }
     }

     const dateBuilder = (d) => {
       let months = [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December',
       ]
       let days = [
         'Sunday',
         'Monday',
         'Tuesday',
         'Wednesday',
         'Thursday',
         'Friday',
         'Saturday',
       ]

       let day = days[d.getDay()]
       let date = d.getDate()
       let month = months[d.getMonth()]
       let year = d.getFullYear()

       return `${day} ${date} ${month} ${year}`
     }
    

    return (
      <div
        className={
           weather.main 
            ? weather.main.temp > 16
              ? classes.hot
              : classes.cold
            : classes.container
        }
      >
        <Container sm={12}>
          <Weather
            setQuery={setQuery}
            dateBuilder={dateBuilder}
            weather={weather}
            search={search}
          />
        </Container>
      </div>
    )
}

export default WeatherContainer
