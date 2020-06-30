import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { fetchDailyData } from "../../services/apiService";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchAPI();
  }, []);

  const GlobalChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#4fc3f7",
              backgroundColor: "#e1f5fe",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "#e57373",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Coid 19 Data about : Infected & Deaths",
            fontSize: 25,
            fontColor: "#33691e",
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    ) : null;

  const SelectedCountryChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: ["People Bar Chart"],
            backgroundColor: ["#4fc3f7", "#81c784", "#e57373"],
            fill: true,
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: `Country is ${country}`,
          fontSize: 25,
          fontColor: "#33691e",
        },
        legend: {
          display: true,
          position: "top",
        },
      }}
    />
  ) : null;

  return (
    <Container maxWidth="md">
      <div className={styles.container}>
        {country ? SelectedCountryChart : GlobalChart}
      </div>
    </Container>
  );
};

export default Chart;
