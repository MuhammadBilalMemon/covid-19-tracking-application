import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { DataContext } from "./../context/DataProvider";

import styles from "./Chart.module.css";

const Chart = () => {
  const { globalHistoryData } = useContext(DataContext);

  let SelectedCountryChart, GlobalChart;

  let allData =
    globalHistoryData.cases || globalHistoryData.country
      ? globalHistoryData
      : "Loading .....";

  if (allData.country) {
    const { timeline } = allData;
    const { cases, deaths, recovered } = timeline;
    const activeCases = [];
    const deathCases = [];
    const recoveredCases = [];
    let dateData = [];

    for (let _case in cases) {
      let obj = { _case: cases[_case] };
      activeCases.push(obj);
    }
    for (let _death in deaths) {
      let obj = { _death: deaths[_death] };
      deathCases.push(obj);
    }
    for (let _recover in recovered) {
      let obj = { _recover: recovered[_recover] };
      recoveredCases.push(obj);
    }
    for (let _date in cases) {
      let obj = { date: _date };
      dateData.push(obj);
    }
    GlobalChart = (
      <Line
        data={{
          labels: dateData.map(({ date }) => date),
          datasets: [
            {
              data: activeCases.map(({ _case }) => _case),
              label: "Infected",
              borderColor: "#4fc3f7",
              fill: true,
            },
            {
              data: deathCases.map(({ _death }) => _death),
              label: "Deaths",
              borderColor: "#e57373",
              fill: true,
            },
            {
              data: recoveredCases.map(({ _recover }) => _recover),
              label: "Recover",
              borderColor: "#81c784",
              fill: true,
            },
          ],
        }}
      />
    );
  } else {
    const { cases, deaths, recovered } = allData;
    const activeCases = [];
    const deathCases = [];
    const recoveredCases = [];
    let dateData = [];
    for (let _case in cases) {
      let obj = { _case: cases[_case] };
      activeCases.push(obj);
    }
    for (let _death in deaths) {
      let obj = { _death: deaths[_death] };
      deathCases.push(obj);
    }
    for (let _recover in recovered) {
      let obj = { _recover: recovered[_recover] };
      recoveredCases.push(obj);
    }
    for (let _date in cases) {
      let obj = { date: _date };
      dateData.push(obj);
    }
    SelectedCountryChart = (
      <Line
        data={{
          labels: dateData.map(({ date }) => date),

          datasets: [
            {
              data: activeCases.map(({ _case }) => _case),
              label: "Infected",
              borderColor: "#4fc3f7",
              fill: true,
            },
            {
              data: deathCases.map(({ _death }) => _death),
              label: "Deaths",
              borderColor: "#e57373",
              fill: true,
            },
            {
              data: recoveredCases.map(({ _recover }) => _recover),
              label: "Recovered",
              borderColor: "#81c784",
              fill: true,
            },
          ],
        }}
      />
    );
  }
  return (
    <Container>
      <div className={styles.container}>
        {GlobalChart}
        {SelectedCountryChart}
      </div>
    </Container>
  );
};

export default Chart;
