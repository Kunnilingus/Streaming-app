import { FC } from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const labels = [
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
];
const data = {
  datasets: [
    {
      fill: true,
      label: "Просмотры",
      data: [100, 150, 200, 250, 300, 400, 550],
      borderColor: "rgb(204, 3, 177)",
      backgroundColor: "rgba(204, 3, 177, 0.5)",
    },
  ],
  labels,
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Ожидаемое кол-во просмотров",
    },
  },
};
interface ActivityChartProps {
  width: number;
}
const ActivityChart: FC<ActivityChartProps> = ({ width }) => {
  return (
    <div style={{ width: width }}>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
