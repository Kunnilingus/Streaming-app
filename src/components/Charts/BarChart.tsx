import { FC } from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  datasets: [
    {
      label: "Просмотры",
      data: [0, 25, 31, 42, 57, 64, 78],
      backgroundColor: "rgba(255,0,0,0.5)",
    },
    {
      label: "Подписки",
      data: [0, 11, 14, 27, 34, 57, 43],
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
      text: "Просмотры/Подписки",
    },
  },
};
interface BarChartProps {
  width: number;
}

const BarChart: FC<BarChartProps> = ({ width }) => {
  return (
    <div style={{ width: width }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default BarChart;
