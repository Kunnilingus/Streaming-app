import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  datasets: [
    {
      label: "Просмотры",
      data: [0, 25, 31, 42, 57, 64, 78],
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    },
    {
      label: "Кол-во донатов",
      data: [0, 4, 7, 12, 14, 19, 29],
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
      text: "Корреляция просмотров и донатов",
    },
  },
};
interface LineChartProps {
  width: number;
}
const LineChart: FC<LineChartProps> = ({ width }) => {
  return (
    <div style={{ width: width }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
