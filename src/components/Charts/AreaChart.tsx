import { FC } from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  datasets: [
    {
      fill: true,
      label: "Просмотры",
      data: [0, 25, 31, 42, 57, 64, 78],
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
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
      text: "Среднее кол-во просмотров в месяц",
    },
  },
};
interface AreaChartProps {
  width: number;
}
const AreaChart: FC<AreaChartProps> = ({ width }) => {
  return (
    <div style={{ width: width }}>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default AreaChart;
