import React, {useState} from 'react'
import {Grow, Grid, Typography, TextField, Card, CardContent} from '@material-ui/core'
import useStyles from './styles'
import { IoPartlySunny } from 'react-icons/io5'
import { FiSunrise } from 'react-icons/fi'
import {FiSunset} from 'react-icons/fi'
import moment from 'moment'
// import {IoMdRainy} from 'react-icons/io'

import CountUp from 'react-countup'


const Weather = ({setQuery, dateBuilder, weather, search}) => {
  const classes = useStyles()
   
   
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
                        duration={4}
                      />
                      °c
                    </Typography>
                    <Typography variant='subtitle1'>
                      {dateBuilder(new Date())}
                    </Typography>
                    <div className={classes.sunContainer}>
                      <div>
                        <FiSunrise style={{ fontSize: '60px' }} />
                        <Typography variant='subtitle1'>
                          {moment.unix(weather.sys.sunrise).format('h:mm A')}
                        </Typography>
                      </div>
                      <div>
                        <FiSunset style={{ fontSize: '60px' }} />
                        <Typography variant='subtitle1'>
                          {moment.unix(weather.sys.sunset).format('h:mm A')}
                        </Typography>
                      </div>
                    </div>
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
