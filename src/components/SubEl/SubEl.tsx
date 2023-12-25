import { FC } from "react";
import "./subEl.css";

interface SubElProps {
  img: string;
  name: string;
  game: string;
  viewers: number;
  offline: boolean;
  onClick?: () => void;
}
const SubEl: FC<SubElProps> = ({
  img,
  name,
  game,
  viewers,
  offline,
  onClick,
}) => {  
  return (
    <div className="SubEl" onClick={onClick}>
      <img src={img} alt="SubElImg" />
      <h3>{name}</h3>
      <div className={offline ? "none" : "online-content"}>
        <p>Транслирует {game}</p>
        <p>Зрителей: {viewers}</p>
      </div>
      <p className={offline ? "offline" : "none"}>Оффлайн</p>
    </div>
  );
};

export default SubEl;
