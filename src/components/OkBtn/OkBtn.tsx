import { FC, ReactNode } from "react";
import "./okBtn.css";
import ok from "./ок.png";

interface MainBtnProps {
  children?: ReactNode;
  onClick: () => void;
}
const OkBtn: FC<MainBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="OkBtn">
      <img src={ok} alt="ok" />
    </button>
  );
};

export default OkBtn;
