import React, {useState} from 'react'
import {Grow, Grid, Typography, TextField, Card, CardContent} from '@material-ui/core'
import useStyles from './styles'
import { IoPartlySunny } from 'react-icons/io5'
// import {IoMdRainy} from 'react-icons/io'

import CountUp from 'react-countup'
const api = {
  key: '648b8d98fa6a3465ef2f95425330b67b',
  base: 'https://api.openweathermap.org/data/2.5/',
}

const Weather = () => {
    const classes = useStyles()

    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState({})

    const search = evt => {
      if(evt.key === "Enter") {
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
      <div>
        <Grid container className={classes.container}>
          <Grow in>
            <div className={classes.header}>
              <Typography variant='h3' className={classes.title}>
                Weather App
              </Typography>
              <TextField
                id='outlined-primary'
                label='Search Location'
                variant='outlined'
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
                className={classes.textField}
                InputProps={{
                  style: {
                    background: '#fff',
                    opacity: '.8',
                  },
                }}
              />
            </div>
          </Grow>
          {weather.main ? (
            <div className={classes.cardContainer}>
              <br />
              <br />
              <Grow in>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <IoPartlySunny style={{ fontSize: '60px' }} />
                    <Typography variant='h4'>
                      {weather.name}, {weather.sys.country}
                    </Typography>
                    <Typography variant='h1'>
                      <CountUp
                        end={Math.round(weather.main.temp)}
                        start={0}
                        duration={3}
                      />
                      °c
                    </Typography>
                    <Typography variant='subtitle1'>
                      {dateBuilder(new Date())}
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            </div>
          ) : (
            ''
          )}
        </Grid>
      </div>
    )
}

export default Weather
