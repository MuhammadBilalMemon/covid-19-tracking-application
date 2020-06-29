import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 200,
    margin: 50,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  infected: {
    color: "#4fc3f7",
    borderColor: "#4fc3f7",
  },
});

const Cards = ({ data }) => {
  const classes = useStyles();

  if (!data.confirmed) {
    return "Loadning....";
  }

  return (
    <div>
      <Grid container spacing={5} justify="center">
        <Card className={classes.root} variant="outlined" xs={12} md={3}>
          <CardContent className={classes.infected}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              Counter {" : "}
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root} variant="outlined" xs={12} md={3}>
          <CardContent className={classes.infected}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              Counter {" : "}
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root} variant="outlined" xs={12} md={3}>
          <CardContent className={classes.infected}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              Counter {" : "}
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Cards;
