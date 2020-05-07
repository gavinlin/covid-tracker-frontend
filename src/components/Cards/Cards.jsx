import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core' 
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cs from 'classnames'

const Cards = ({ data }) => {
  if (data === undefined || data.confirmed === undefined) {
    return "Loading"
  }
  console.log(data)
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cs(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={data.confirmed}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(data.date).toDateString()}</Typography>
            <Typography variant="body2">Number of confirmed cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cs(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={data.recovered}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(data.date).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cs(styles.card, styles.death)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Death</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={data.death}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(data.date).toDateString()}</Typography>
            <Typography variant="body2">Number of death caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards