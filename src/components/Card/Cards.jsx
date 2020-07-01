import React, { useContext } from "react";
import AirlineSeatFlatOutlinedIcon from "@material-ui/icons/AirlineSeatFlatOutlined";
import HowToRegOutlinedIcon from "@material-ui/icons/HowToRegOutlined";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";
// import CircularProgress from "@material-ui/core/CircularProgress";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "./../context/DataProvider";

import CountUp from "react-countup";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 50,
    padding: 30,
  },
  infected: {
    marginTop: 50,
    marginRight: 20,
    marginBottom: 30,
    color: "#4fc3f7",
    borderColor: "#4fc3f7",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,255,0.3)",
    },
  },
  recovered: {
    marginTop: 50,
    marginRight: 20,
    marginBottom: 30,
    color: "#81c784",
    borderColor: "#81c784",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,255,0,0.3)",
    },
  },
  deaths: {
    marginTop: 50,
    marginBottom: 30,
    color: "#e57373",
    borderColor: "#e57373",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(255,0,0,0.3)",
    },
  },
});

const Cards = () => {
  const classes = useStyles();

  const { globalData } = useContext(DataContext);

  let data = globalData.cases
    ? globalData
    : {
        cases: 0,
        recovered: 0,
        active: 0,
        deaths: 0,
        todayCases: 0,
        todayDeaths: 0,
        todayRecovered: 0,
      };

  return (
    <Grid container spacing={0} justify="center">
      <Card
        className={(classes.root, classes.infected)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Infected
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
            <CountUp start={0} end={data.cases} duration={2.5} separator="," />
          </Typography>
          <Typography>
            <b> Today Infected {" : "} </b>
            {
              <CountUp
                start={0}
                end={data.todayCases}
                duration={3.0}
                separator=","
              />
            }
          </Typography>
          <Typography variant="body2" component={"div"}>
            Number of active cases of COVID-19
            <hr />
            <div>{<AirlineSeatFlatOutlinedIcon fontSize="large" />}</div>
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={(classes.root, classes.recovered)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Recovered
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
            <CountUp
              start={0}
              end={data.recovered}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography>
            <b>Today Recovered {" : "}</b>
            {
              <CountUp
                start={0}
                end={data.todayRecovered}
                duration={3.0}
                separator=","
              />
            }
          </Typography>
          <Typography variant="body2" component={"div"}>
            Number of recoveries from COVID-19
            <hr />
            <HowToRegOutlinedIcon fontSize={"large"} />
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={(classes.root, classes.deaths)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Deaths
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
            <CountUp start={0} end={data.deaths} duration={2.5} separator="," />
          </Typography>
          <Typography>
            <b> Today Deaths {" : "} </b>
            {
              <CountUp
                start={0}
                end={data.todayDeaths}
                duration={2.5}
                separator=","
              />
            }
          </Typography>
          <Typography variant="body2" component={"div"}>
            Number of deaths caused by COVID-19
            <hr />
            <CancelPresentationOutlinedIcon fontSize={"large"} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cards;
