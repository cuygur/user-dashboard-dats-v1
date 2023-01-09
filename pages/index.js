import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Users",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const registeredUsers = {
  labels,
  datasets: [
    {
      label: "Registered Users",
      data: labels.map(() => faker.datatype.number({ min: 2000, max: 7000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const registeredBandwith = {
  labels,
  datasets: [
    {
      label: "Registered Bandwith",
      data: labels.map(() =>
        faker.datatype.number({ min: 300000, max: 800000 })
      ),
      borderColor: "rgb(55, 99, 132)",
      backgroundColor: "rgba(55, 99, 132, 0.5)",
    },
  ],
};

export const registeredCpuCores = {
  labels,
  datasets: [
    {
      label: "Registered Cpu Cores",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 3000 })),
      borderColor: "rgb(40, 99, 12)",
      backgroundColor: "rgba(155, 99, 132, 0.5)",
    },
  ],
};

function HomePage() {
  return (
    <div>
      <h2>Network Statistics</h2>
      <div>
        <Line options={options} data={registeredUsers} />
        <Line options={options} data={registeredBandwith} />
        <Line options={options} data={registeredCpuCores} />
      </div>
    </div>
  );
}
export default HomePage;
