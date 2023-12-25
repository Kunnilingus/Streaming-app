import { FC, ReactNode } from "react";
import "./applyBtn.css";

interface ApplyBtnProps {
  text: string;
  onClick?: () => void;
  children?: ReactNode;
}
const ApplyBtn: FC<ApplyBtnProps> = ({ text, onClick }) => {
  return (
    <button className="ApplyBtn" onClick={onClick}>
      {text}
    </button>
  );
};

export default ApplyBtn;
