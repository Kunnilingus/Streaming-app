import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
const labels = [
  "12-16 лет",
  "16-20 лет",
  "20-25 года",
  "25-30 лет",
  "30-40 лет и более",
];
const data = {
  datasets: [
    {
      label: "Возраст подписчиков в %",
      data: [23, 34, 31, 8, 4],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(204, 3, 187, 0.5)",
        "rgba(97, 3, 204, 0.5)",
        "rgba(3, 90, 204, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 1)",
        "rgba(204, 3, 187, 1)",
        "rgba(97, 3, 204, 1)",
        "rgba(3, 90, 204, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
  labels,
};
interface PieChartProps {
  width: number;
}

const PieChart: FC<PieChartProps> = ({ width }) => {
  return (
    <div style={{ width: width }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
