import { FC } from "react";
import "./notifications.css";
import linedBell from "../../assets/headerImg/linedBell.png";
import bell from "../../assets/headerImg/bell.png";
const Notifications: FC = () => {
  const toggleContent = () => {
    document.getElementById("dropdown-content")?.classList.toggle("show");
  };
  return (
    <div className="dropdown">
      <img onClick={toggleContent} className="bell" src={bell} alt="bell" />
      <div id="dropdown-content" className="dropdown__content">
        <img src={linedBell} alt="lined" />
      </div>
    </div>
  );
};

export default Notifications;
