import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup'
import styles from "./Cards.module.css"
import cx from 'classnames'

const Cards = (props) => {
    const {data} = props
  const {confirmed, recovered, deaths, lastUpdate} = data
  if(!confirmed) {
      return "Loading..."
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
        <CardContent>
            {/* Typography is used for writing text */}
            {/* gutterBottom applies nice padding on bottom of the text */}
          <Typography color = "textSecondary" gutterBottom>Infected</Typography>
          {/* looks like h5 */}
          <Typography variant = "h5">
              <CountUp  
              start = {0}
              end = {confirmed.value}
              //time duration
              duration = {2.5}
              //separate by ,
              separator = ","
              />
          </Typography>
          {/* new Date(lastUpdate).toDateString() coverts last update to date in human readable format*/}
          <Typography color = "textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
          <Typography variant = "body2">Number of active cases of COVID-19</Typography>
        </CardContent>
      </Grid>

  <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
        <CardContent>
            {/* Typography is used for writing text */}
            {/* gutterBottom applies nice padding on bottom of the text */}
          <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
          {/* looks like h5 */}
          <Typography variant = "h5">
              <CountUp  
              start = {0}
              end = {recovered.value}
              //time duration
              duration = {2.5}
              //separate by ,
              separator = ","
              />
          </Typography>
          <Typography color = "textSecondary">{new Date(lastUpdate).toDateString() }</Typography>

          <Typography variant = "body2">Number of recoveries from COVID-19</Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
        <CardContent>
            {/* Typography is used for writing text */}
            {/* gutterBottom applies nice padding on bottom of the text */}
          <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
          {/* looks like h5 */}
          <Typography variant = "h5">
              <CountUp  
              start = {0}
              end = {deaths.value}
              //time duration
              duration = {2.5}
              //separate by ,
              separator = ","
              />
          </Typography>
          <Typography color = "textSecondary">{new Date(lastUpdate).toDateString() }</Typography>

          <Typography variant = "body2">Number of Deaths caused by COVID-19</Typography>
        </CardContent>
      </Grid>

      </Grid>
    </div>
  );
};

export default Cards;
