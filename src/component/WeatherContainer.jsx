import React from 'react'
import Weather from './Weather/Weather'
import useStyles from './styles'
import {Container} from '@material-ui/core'
const WeatherContainer = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Container sm={12}>
                <Weather />
            </Container>
        </div>
    )
}

export default WeatherContainer
