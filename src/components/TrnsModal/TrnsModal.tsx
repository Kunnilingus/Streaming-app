import { FC } from "react";
import "./trnsModal.css";

interface TrnsModalProps {
  active: boolean;
  title: string;
  value: string;
  setActive: (flag: boolean) => void;
  setValue: (e: string) => void;
  saveChangesFn: (value: string) => void;
}
const TrnsModal: FC<TrnsModalProps> = ({
  active,
  title,
  value,
  setActive,
  setValue,
  saveChangesFn,
}) => {
  return (
    <div className={active ? "TrnsModal active" : "TrnsModal"}>
      <div
        className={active ? "TrnsModal__content active" : "TrnsModal__content"}
      >
        <div className="TrnsModal__content-title">{title}</div>
        <div className="TrnsModal__content-form">
          <p>Новое значение:</p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
        </div>
        <div className="TrnsModal__content-btns">
          <button onClick={() => saveChangesFn(value)}>Сохранить</button>
          <button onClick={() => setActive(false)}>Назад</button>
        </div>
      </div>
    </div>
  );
};

export default TrnsModal;
